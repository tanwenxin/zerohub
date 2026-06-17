'use strict';

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');
const sourceFile = path.join(rootDir, 'server', 'content', 'prompt-templates.json');
const outputFile = path.join(rootDir, 'web', 'src', 'data', 'promptTemplates.generated.ts');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeAtomic(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const tmp = `${filePath}.tmp`;
  fs.writeFileSync(tmp, content, 'utf8');
  fs.renameSync(tmp, filePath);
}

function safeJson(value) {
  return JSON.stringify(value, null, 2)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function main() {
  const data = readJson(sourceFile);
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const templates = Array.isArray(data.templates) ? data.templates : [];
  const publicData = {
    version: data.version || 1,
    updatedAt: data.updatedAt || new Date().toISOString(),
    categories,
    templates: templates.map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      prompt: item.prompt,
      category: item.category,
      categorySlug: item.categorySlug,
      rawCategory: item.rawCategory,
      sourceLine: item.sourceLine,
      imageUrl: item.imageUrl || null,
      imageOptimized: item.imageOptimized || null,
      imageStatus: item.imageStatus || 'missing',
      imageGeneratedAt: item.imageGeneratedAt || null,
    })),
  };

  const content = `// 此文件由 scripts/prompt-templates/sync-web-prompt-templates.js 自动生成，请勿手工编辑。

export interface PromptTemplateCategory {
  name: string;
  slug: string;
  count: number;
  description: string;
}

export interface PromptTemplate {
  id: string;
  slug: string;
  title: string;
  prompt: string;
  category: string;
  categorySlug: string;
  rawCategory: string;
  sourceLine: number | null;
  imageUrl: string | null;
  imageOptimized: Record<string, Record<string, string>> | null;
  imageStatus: string;
  imageGeneratedAt: string | null;
}

export interface PromptTemplateData {
  version: number;
  updatedAt: string;
  categories: PromptTemplateCategory[];
  templates: PromptTemplate[];
}

export const PROMPT_TEMPLATE_DATA: PromptTemplateData = ${safeJson(publicData)};

export const PROMPT_TEMPLATE_CATEGORIES = PROMPT_TEMPLATE_DATA.categories;
export const PROMPT_TEMPLATES = PROMPT_TEMPLATE_DATA.templates;

export function getPromptTemplateCategory(slug: string): PromptTemplateCategory | undefined {
  return PROMPT_TEMPLATE_CATEGORIES.find((category) => category.slug === slug);
}

export function getPromptTemplateByPath(
  categorySlug: string,
  templateSlug: string
): PromptTemplate | undefined {
  return PROMPT_TEMPLATES.find(
    (template) => template.categorySlug === categorySlug && template.slug === templateSlug
  );
}

export function getPromptTemplatesByCategory(categorySlug: string): PromptTemplate[] {
  return PROMPT_TEMPLATES.filter((template) => template.categorySlug === categorySlug);
}
`;

  writeAtomic(outputFile, content);
  console.log(`Synced ${templates.length} templates to ${path.relative(rootDir, outputFile)}`);
}

main();
