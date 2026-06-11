'use strict';

/**
 * 提示词工程模板集中维护。
 * 按「具体生成模式」落实 Agnes 官方提示词结构规范，业务路由只负责装配与调度。
 *
 * 图片模式：text2img（文生图）/ img2img（图生图）/ multi（多图合成）
 * 视频模式：text2vid（文生视频）/ img2vid（图生视频）/ multivid（多图视频）/ keyframes（关键帧动画）
 *
 * 两个能力共用同一套「模式规范」：
 * - optimize：把用户原始提示词改写为符合该模式规范的提示词；
 * - understand：分析图片（可结合用户已输入内容）后，输出符合该模式规范的提示词。
 */

const IMAGE_MODES = ['text2img', 'img2img', 'multi'];
const VIDEO_MODES = ['text2vid', 'img2vid', 'multivid', 'keyframes'];
const ALL_MODES = [...IMAGE_MODES, ...VIDEO_MODES];

// 每个模式对应的官方提示词结构规范（含推荐要素与参考示例）
const MODE_SPEC = {
  text2img: [
    '这是「文生图」任务。请输出符合 Agnes Image 2.1 Flash 文生图规范、信息密度高的提示词。',
    '推荐包含以下要素：主体、场景或环境、视觉风格、光照、镜头角度、构图、细节密度、质量要求。',
    '请明确视觉层级：主体 / 背景环境 / 重要次要元素 / 风格与光照 / 构图约束。',
    '参考示例：A large fantasy harbor city built on cliffs, hundreds of small boats, layered stone bridges, glowing windows, distant mountains, cloudy sunset sky, cinematic fantasy realism, wide-angle composition, rich architectural details, high visual density',
  ].join('\n'),
  img2img: [
    '这是「图生图」任务。请输出符合 Agnes Image 2.1 Flash 图生图规范的提示词，必须同时说明「转换要求」与「保留要求」。',
    '推荐结构：Change/Convert [转换内容]，add [新增元素]，while preserving [需要保留的原图内容，如布局/镜头角度/主体形状]。',
    '参考示例：Change the daytime street scene into a cinematic cyberpunk night scene, add neon signs and wet road reflections, while preserving the original street layout, camera angle, and main building shapes.',
  ].join('\n'),
  multi: [
    '这是「多图合成」任务。请输出能描述多张输入图片关系、以及如何将它们合成到同一画面的提示词。',
    '需说明合成/转换要求，并明确需要保留的关键元素（主体、镜头角度、结构、风格光照一致性等）。',
    '参考示例：Combine the characters from the input images into one cinematic battle scene, with consistent lighting and perspective, while preserving each character\'s appearance and outfit.',
  ].join('\n'),
  text2vid: [
    '这是「文生视频」任务。请按结构 [主体] + [动作] + [场景] + [镜头运动] + [光照] + [风格] 输出提示词。',
    '参考示例：A young astronaut walking across a red desert planet, dust blowing in the wind, slow cinematic tracking shot, dramatic sunset lighting, realistic sci-fi style',
  ].join('\n'),
  img2vid: [
    '这是「图生视频」任务。请说明哪些内容需要运动，同时说明哪些主体元素需要保持稳定。',
    '参考示例：Animate the character with subtle breathing motion, hair moving gently in the wind, background lights flickering softly, while keeping the face and outfit consistent',
  ].join('\n'),
  multivid: [
    '这是「多图视频」任务。请描述输入图片之间的关系，以及画面如何过渡。',
    '参考示例：Use the first image as the starting scene and the second image as the target scene. Create a smooth transformation with consistent lighting, natural motion, and cinematic pacing',
  ].join('\n'),
  keyframes: [
    '这是「关键帧动画」任务。请清晰描述关键帧之间的过渡关系。',
    '参考示例：Create a smooth transition from the first keyframe to the second keyframe, maintaining character identity, consistent camera angle, and natural motion between scenes',
  ].join('\n'),
};

function isValidMode(mode) {
  return ALL_MODES.includes(mode);
}

function roleFor(mode) {
  return VIDEO_MODES.includes(mode)
    ? 'Agnes Video V2.0 的专业视频提示词工程师'
    : 'Agnes Image 2.1 Flash 的专业图像提示词工程师';
}

/**
 * 构造「提示词优化」的 messages：把用户原始提示词改写为符合该模式规范的提示词。
 * @param {string} mode 具体生成模式
 * @param {string} userPrompt 用户原始提示词
 */
function buildOptimizeMessages(mode, userPrompt) {
  const system = [
    `你是${roleFor(mode)}。`,
    '请把用户输入的原始描述，改写为完全符合下述规范的高质量提示词。',
    MODE_SPEC[mode],
    '要求：保留用户的核心意图，补全缺失的关键维度；',
    '只输出优化后的提示词正文本身，使用与用户输入一致的语言，不要添加任何解释、标题、序号、引号或额外说明。',
  ].join('\n');
  return [
    { role: 'system', content: system },
    { role: 'user', content: String(userPrompt || '') },
  ];
}

/**
 * 构造「图片理解」的多模态 messages：分析图片（可结合用户已输入内容），
 * 输出符合当前选择模式规范的提示词。
 * @param {string} mode 当前选择的生成模式
 * @param {string} imageInput https URL 或 image data URI
 * @param {string} [userPrompt] 用户已输入的提示词（可选，用于提取信息并润色）
 */
function buildUnderstandMessages(mode, imageInput, userPrompt) {
  const hasPrompt = typeof userPrompt === 'string' && userPrompt.trim();
  const system = [
    `你是${roleFor(mode)}，同时擅长图像理解。`,
    '请先仔细分析这张图片的内容（主体、关键元素、文字、场景、风格、结构等）。',
    hasPrompt
      ? '然后结合用户已输入的描述，提取关键信息并加以润色与补全。'
      : '然后基于图片内容生成提示词。',
    '最终输出必须完全符合下述规范：',
    MODE_SPEC[mode],
    '要求：只输出最终可直接使用的提示词正文本身，使用中文（若用户已输入内容则与其语言一致），不要添加任何解释、标题、序号、引号或额外说明。',
  ].join('\n');
  const text = hasPrompt
    ? `请分析这张图片，并结合用户已输入的描述：「${userPrompt.trim()}」，生成符合上述规范的提示词。`
    : '请分析这张图片，生成符合上述规范的提示词。';
  return [
    { role: 'system', content: system },
    {
      role: 'user',
      content: [
        { type: 'text', text },
        { type: 'image_url', image_url: { url: imageInput } },
      ],
    },
  ];
}

module.exports = {
  IMAGE_MODES,
  VIDEO_MODES,
  ALL_MODES,
  isValidMode,
  buildOptimizeMessages,
  buildUnderstandMessages,
};
