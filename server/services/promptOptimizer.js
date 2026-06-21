'use strict';

/**
 * 提示词优化器规则注册表。
 * 前端只消费 provider/version 选项，后端集中维护模型规则，便于后续按官方手册修订。
 */

const SOURCE_CHECKED_AT = '2026-06-21';

const PROVIDERS = [
  {
    id: 'generic',
    label: '通用模板',
    description: '集合图像模型和文本模型共性优点的标准化提示词模板',
    defaultVersion: 'universal',
    versions: [
      {
        value: 'universal',
        label: '通用优化',
        sourceUrl: 'internal://prompt-optimizer/universal',
        sourceCheckedAt: SOURCE_CHECKED_AT,
        sourceStatus: 'internal',
        focus: [
          '集合图像模型的视觉要素和文本模型的任务约束表达',
          '把原始想法整理成可复用、可复制、可继续迭代的标准模板',
          '优先输出清晰、完整、不过度堆砌的提示词',
        ],
        structure: ['目标', '主体', '场景/上下文', '风格/语气', '关键细节', '格式/构图', '质量标准', '排除项'],
      },
    ],
  },
  {
    id: 'jimeng',
    label: '即梦',
    description: '面向即梦图像生成的中文视觉提示词优化',
    defaultVersion: '4.5',
    versions: [
      {
        value: '4.0',
        label: '即梦 4.0',
        sourceUrl: 'https://bytedance.larkoffice.com/wiki/SWalw66Flihm1pkudaQcvWuBn3d',
        sourceCheckedAt: SOURCE_CHECKED_AT,
        sourceStatus: 'pending_auth',
        focus: [
          '把用户意图整理成主体、场景、风格、镜头、光照、构图和画质要求',
          '补齐基础视觉细节，避免堆叠互相冲突的风格词',
          '保留用户原始语言、人物关系、动作和核心物体',
        ],
        structure: ['主体与动作', '环境与时间', '风格与媒介', '镜头与构图', '光照与色彩', '细节与质量', '负向约束'],
      },
      {
        value: '4.1',
        label: '即梦 4.1',
        sourceUrl: 'https://bytedance.larkoffice.com/wiki/XRUCwBQyiiO2akk36E4cFsU4nGd',
        sourceCheckedAt: SOURCE_CHECKED_AT,
        sourceStatus: 'pending_auth',
        focus: [
          '在 4.0 结构基础上强化画面层次、主体一致性和可控细节',
          '把抽象风格转成可执行的视觉描述，减少空泛形容词',
          '明确需要保留与避免的元素，降低生成偏移',
        ],
        structure: ['核心主体', '关键特征', '空间层次', '风格方向', '镜头语言', '光影氛围', '质量与限制'],
      },
      {
        value: '4.5',
        label: '即梦 4.5',
        sourceUrl: 'https://bytedance.larkoffice.com/wiki/GTA7wTKRDi1SxKk4joMcftz5nfe',
        sourceCheckedAt: SOURCE_CHECKED_AT,
        sourceStatus: 'pending_auth',
        focus: [
          '优先生成高密度、强可控、适合商业视觉落地的提示词',
          '强化主体一致性、材质细节、空间关系和镜头调度',
          '用清晰约束处理文字、人物、品牌、构图比例和不希望出现的内容',
        ],
        structure: ['画面目标', '主体与细节', '场景与空间', '视觉风格', '镜头/构图/比例', '光照/色彩/材质', '质量标准', '负向约束'],
      },
    ],
  },
  {
    id: 'openai',
    label: 'GPT',
    description: '遵循 OpenAI 官方提示工程原则的通用文本提示词优化',
    defaultVersion: 'gpt-general',
    versions: [
      {
        value: 'gpt-general',
        label: 'GPT 通用',
        sourceUrl: 'https://developers.openai.com/api/docs/guides/prompt-engineering',
        sourceCheckedAt: SOURCE_CHECKED_AT,
        sourceStatus: 'verified_public',
        focus: [
          '写清楚任务目标、上下文、约束和最终输出格式',
          '把复杂目标拆成明确的输入、处理要求和验收标准',
          '避免含糊指代，保留用户真正想要的语气和用途',
        ],
        structure: ['目标', '上下文', '受众/用途', '约束', '输出格式', '质量标准'],
      },
    ],
  },
  {
    id: 'qwen',
    label: 'Qwen',
    description: '遵循 Qwen/阿里云百炼消息结构建议的通用提示词优化',
    defaultVersion: 'qwen3',
    versions: [
      {
        value: 'qwen3',
        label: 'Qwen3',
        sourceUrl: 'https://qwen.readthedocs.io/en/latest/getting_started/concepts.html',
        secondarySourceUrl: 'https://help.aliyun.com/zh/model-studio/text-generation',
        sourceCheckedAt: SOURCE_CHECKED_AT,
        sourceStatus: 'verified_public',
        focus: [
          '明确 system 角色、user 任务和期望 assistant 输出',
          '强调任务边界、格式要求和是否需要结构化输出',
          '减少多义表达，适配 Qwen 对系统消息和多轮消息的控制方式',
        ],
        structure: ['角色定位', '任务说明', '输入信息', '执行规则', '输出格式', '质量检查'],
      },
    ],
  },
];

const providerMap = new Map(PROVIDERS.map((provider) => [provider.id, provider]));

function publicOptions() {
  return {
    defaultProvider: 'generic',
    providers: PROVIDERS.map((provider) => ({
      id: provider.id,
      label: provider.label,
      description: provider.description,
      defaultVersion: provider.defaultVersion,
      versions: provider.versions.map((version) => ({
        value: version.value,
        label: version.label,
        sourceUrl: version.sourceUrl,
        sourceCheckedAt: version.sourceCheckedAt,
        sourceStatus: version.sourceStatus,
      })),
    })),
  };
}

function getRule(providerId, versionValue) {
  const provider = providerMap.get(providerId);
  if (!provider) return null;
  const version = provider.versions.find((item) => item.value === versionValue);
  if (!version) return null;
  return { provider, version };
}

function validProviderIds() {
  return PROVIDERS.map((provider) => provider.id);
}

function validVersionsFor(providerId) {
  const provider = providerMap.get(providerId);
  return provider ? provider.versions.map((version) => version.value) : [];
}

// 无 Key 或上游不可达时的可用兜底，保证页面功能不直接失败。
function fallbackOptimize(rule, userPrompt) {
  const text = String(userPrompt || '').trim();
  const isEnglish = /[a-zA-Z]/.test(text) && !/[\u4e00-\u9fa5]/.test(text);

  if (isEnglish) {
    return [
      text,
      'clear main subject, vivid scene context, coherent visual style, cinematic composition, expressive lighting, rich material details, high-resolution quality, avoid cluttered framing, distorted anatomy, incorrect text, low detail',
    ].join(', ');
  }

  return [
    text,
    '主体清晰，场景层次完整，视觉风格统一，电影感镜头构图，光照方向明确，色彩氛围协调，材质与细节丰富，高质量输出，避免画面杂乱、主体变形、文字错误、低清晰度',
  ].join('，');
}

function cleanOptimizedPrompt(raw) {
  let text = String(raw || '').trim();
  text = text.replace(/^```(?:text|markdown|md)?\s*/i, '').replace(/```$/i, '').trim();
  text = text.replace(/^["'“”]+|["'“”]+$/g, '').trim();

  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    // 删除模型偶尔泄露出来的系统说明、来源说明或结构标题行。
    .filter((line) => !/^(优化后提示词|优化后的提示词|提示词|Prompt|Optimized prompt|Final prompt)\s*[:：]?$/i.test(line))
    .filter((line) => !/^(目标模型|模型类型|模型版本|资料来源|补充来源|优化重点|建议结构|输出要求)\s*[:：]/.test(line))
    .filter((line) => !/^(目标|主体|场景\/?上下文|风格\/?语气|关键细节|格式\/?构图|质量标准|排除项|负向约束)\s*[:：]?\s*$/i.test(line))
    .map((line) => line.replace(/^[-*]\s+/, '').replace(/^\d+[.)、]\s*/, '').trim())
    .filter(Boolean);

  text = lines.join('，');
  text = text.replace(/\s*，\s*/g, '，').replace(/，{2,}/g, '，').trim();
  return text || String(raw || '').trim();
}

function buildPromptOptimizerMessages(rule, userPrompt) {
  const { provider, version } = rule;
  const system = [
    '你是专业提示词优化工程师，负责把用户的原始提示词改写为可直接使用的高质量提示词。',
    `目标模型类型：${provider.label}`,
    `目标模型版本：${version.label}`,
    `资料来源：${version.sourceUrl}`,
    version.secondarySourceUrl ? `补充来源：${version.secondarySourceUrl}` : '',
    version.sourceStatus === 'pending_auth'
      ? '注意：该版本的私有手册尚未完成自动读取，当前使用已固化的版本化通用规则；不要声称已引用手册原文。'
      : '',
    '优化重点：',
    ...version.focus.map((item) => `- ${item}`),
    '建议结构：',
    ...version.structure.map((item, index) => `${index + 1}. ${item}`),
    '输出要求：',
    '- 保留用户核心意图，不改写成另一个主题。',
    '- 补齐缺失维度，但不要添加与用户意图冲突的内容。',
    '- 使用与用户输入一致的主要语言。',
    '- 只输出一段优化后的提示词正文，可直接复制到生成器使用。',
    '- 不要输出系统提示词、角色设定、资料来源、优化说明、字段标题、分段标题、序号、Markdown、引号或任何解释。',
    '- 不要使用“目标：”“主体：”“场景：”“质量标准：”“排除项：”这类标签；把这些信息自然合并进提示词正文。',
  ]
    .filter(Boolean)
    .join('\n');

  return [
    { role: 'system', content: system },
    { role: 'user', content: String(userPrompt || '') },
  ];
}

module.exports = {
  publicOptions,
  getRule,
  validProviderIds,
  validVersionsFor,
  fallbackOptimize,
  cleanOptimizedPrompt,
  buildPromptOptimizerMessages,
};
