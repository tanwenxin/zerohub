import type { Language } from '../i18n';

const CATEGORY_LABELS: Record<string, Record<Language, { name: string; description: string }>> = {
  'portrait-fashion-photography': {
    zh: { name: '人像与时尚摄影', description: '人像、时尚、旅行、情侣与摄影风格相关 AI 图像提示词。' },
    en: { name: 'Portrait & Fashion', description: 'AI image prompts for portraits, fashion, travel, couples, and photography styles.' },
  },
  'poster-illustration': {
    zh: { name: '海报与插画', description: '海报设计、插画风格、视觉叙事与创意构图提示词。' },
    en: { name: 'Posters & Illustration', description: 'Prompts for poster design, illustration styles, visual storytelling, and creative composition.' },
  },
  'character-anime-design': {
    zh: { name: '角色设计与动漫', description: '角色设定、动漫风格、游戏人物与拟人化视觉提示词。' },
    en: { name: 'Character & Anime', description: 'Prompts for character design, anime styles, game characters, and stylized personas.' },
  },
  'city-architecture-space': {
    zh: { name: '城市与建筑空间', description: '城市景观、建筑空间、室内外场景与空间氛围提示词。' },
    en: { name: 'City & Architecture', description: 'Prompts for cityscapes, architecture, interiors, exteriors, and spatial atmosphere.' },
  },
  'product-ecommerce-ads': {
    zh: { name: '产品与电商广告', description: '产品摄影、电商主图、商业广告与营销视觉提示词。' },
    en: { name: 'Product & Ecommerce Ads', description: 'Prompts for product photography, ecommerce hero images, commercial ads, and marketing visuals.' },
  },
  'ui-social-media': {
    zh: { name: 'UI与社交媒体', description: 'UI 画面、社交媒体封面、内容模板与数字界面提示词。' },
    en: { name: 'UI & Social Media', description: 'Prompts for UI screens, social covers, content layouts, and digital interfaces.' },
  },
  'infographic-icon-rule-template': {
    zh: { name: '信息图、图标与规则模板', description: '信息图、图标、规则说明、流程图与结构化视觉提示词。' },
    en: { name: 'Infographics & Icons', description: 'Prompts for infographics, icons, rules, flowcharts, and structured visuals.' },
  },
  'sports-action-scenes': {
    zh: { name: '体育与动作场景', description: '体育运动、动作瞬间、赛事视觉与动态场景提示词。' },
    en: { name: 'Sports & Action', description: 'Prompts for sports, action moments, event visuals, and dynamic scenes.' },
  },
  'brand-logo-visual': {
    zh: { name: '品牌与标志视觉', description: '品牌识别、标志视觉、字体图形与商业形象提示词。' },
    en: { name: 'Brand & Logo Visuals', description: 'Prompts for brand identity, logo visuals, typography, and commercial identity.' },
  },
  'food-beverage': {
    zh: { name: '美食与饮品', description: '美食摄影、饮品广告、餐饮场景与食物质感提示词。' },
    en: { name: 'Food & Beverage', description: 'Prompts for food photography, drink ads, dining scenes, and appetizing textures.' },
  },
  'nature-landscape': {
    zh: { name: '自然与风景', description: '自然风景、户外环境、季节氛围与旅行景观提示词。' },
    en: { name: 'Nature & Landscape', description: 'Prompts for nature, outdoor environments, seasonal moods, and travel landscapes.' },
  },
  'retro-nostalgia': {
    zh: { name: '复古与怀旧', description: '复古风格、怀旧质感、年代摄影与旧物场景提示词。' },
    en: { name: 'Retro & Nostalgia', description: 'Prompts for retro styles, nostalgic textures, period photography, and vintage scenes.' },
  },
  'fantasy-sci-fi': {
    zh: { name: '幻想与科幻', description: '幻想世界、科幻场景、未来视觉与超现实概念提示词。' },
    en: { name: 'Fantasy & Sci-Fi', description: 'Prompts for fantasy worlds, sci-fi scenes, future visuals, and surreal concepts.' },
  },
  'miniature-3d-installation': {
    zh: { name: '微缩场景与3D装置', description: '微缩景观、3D 装置、模型摄影与创意立体视觉提示词。' },
    en: { name: 'Miniature & 3D', description: 'Prompts for miniature scenes, 3D installations, model photography, and dimensional visuals.' },
  },
  others: {
    zh: { name: '其他', description: '暂未归入固定主题的综合提示词。' },
    en: { name: 'Other', description: 'General prompts that are not assigned to a fixed theme yet.' },
  },
};

const RAW_CATEGORY_LABELS: Record<string, Record<Language, string>> = {
  '📸 Portrait Photography': { zh: '📸 人像摄影', en: '📸 Portrait Photography' },
  '👗 Fashion Photography': { zh: '👗 时尚摄影', en: '👗 Fashion Photography' },
  '🍌 Portrait & Photography Cases': { zh: '🍌 人像与摄影案例', en: '🍌 Portrait & Photography Cases' },
  '🎬 Cinematic Posters': { zh: '🎬 电影感海报', en: '🎬 Cinematic Posters' },
  '🎨 Poster & Illustration Cases': { zh: '🎨 海报与插画案例', en: '🎨 Poster & Illustration Cases' },
  '🎭 Character Design': { zh: '🎭 角色设计', en: '🎭 Character Design' },
  '🎌 Anime & Manga': { zh: '🎌 动漫与漫画', en: '🎌 Anime & Manga' },
  '🧍 Character Design Cases': { zh: '🧍 角色设计案例', en: '🧍 Character Design Cases' },
  '🌃 Urban Cityscapes': { zh: '🌃 城市景观', en: '🌃 Urban Cityscapes' },
  '🏛️ Architecture & Interiors': { zh: '🏛️ 建筑与室内', en: '🏛️ Architecture & Interiors' },
  '📦 Product Photography': { zh: '📦 产品摄影', en: '📦 Product Photography' },
  '🛒 E-commerce Cases': { zh: '🛒 电商案例', en: '🛒 E-commerce Cases' },
  '📣 Ad Creative Cases': { zh: '📣 广告创意案例', en: '📣 Ad Creative Cases' },
  '📱 UI & Social Media Mockup Cases': { zh: '📱 UI 与社媒样机案例', en: '📱 UI & Social Media Mockup Cases' },
  '⚡ Minimalist Icons': { zh: '⚡ 极简图标', en: '⚡ Minimalist Icons' },
  '🧪 Comparison & Community Examples': { zh: '🧪 对比与社区示例', en: '🧪 Comparison & Community Examples' },
  '⚽ Sports & Action': { zh: '⚽ 体育与动作', en: '⚽ Sports & Action' },
  '🎨 Logo & Branding': { zh: '🎨 标志与品牌', en: '🎨 Logo & Branding' },
  '🍽️ Food & Culinary': { zh: '🍽️ 美食与烹饪', en: '🍽️ Food & Culinary' },
  '🏔️ Nature & Landscapes': { zh: '🏔️ 自然与风景', en: '🏔️ Nature & Landscapes' },
  '📻 Vintage & Retro': { zh: '📻 复古与怀旧', en: '📻 Vintage & Retro' },
  '🚀 Fantasy & Sci-Fi': { zh: '🚀 幻想与科幻', en: '🚀 Fantasy & Sci-Fi' },
  '🏙️ 3D Miniatures & Dioramas': { zh: '🏙️ 3D 微缩与模型场景', en: '🏙️ 3D Miniatures & Dioramas' },
  '✨ Miscellaneous': { zh: '✨ 其他', en: '✨ Miscellaneous' },
};

export function categoryName(slug: string, fallback: string, language: Language): string {
  return CATEGORY_LABELS[slug]?.[language]?.name || fallback;
}

export function categoryDescription(slug: string, fallback: string, language: Language): string {
  return CATEGORY_LABELS[slug]?.[language]?.description || fallback;
}

export function rawCategoryName(value: string, language: Language): string {
  return RAW_CATEGORY_LABELS[value]?.[language] || value;
}
