'use strict';

const POLICY_RULES = [
  {
    code: 'SEXUAL_EXPLICIT',
    label: '露骨色情或性剥削内容',
    patterns: [
      /(?:deepfake|ai|generated)?\s*(?:porn|nude|naked|sex|sexual|erotic)/i,
      /(?:undress|remove\s+clothes|nsfw|xxx)/i,
      /(?:色情|裸露|裸体|脱衣|去衣|成人内容|性行为|约会未成年人|未成年.*性|儿童.*性)/,
    ],
  },
  {
    code: 'VIOLENCE_HARM',
    label: '暴力、血腥或自我伤害内容',
    patterns: [
      /(?:gore|bloodbath|beheading|suicide|self[-\s]?harm|torture)/i,
      /(?:血腥|斩首|自杀|自残|酷刑|虐杀|肢解)/,
    ],
  },
  {
    code: 'HATE_HARASSMENT',
    label: '仇恨、骚扰或歧视内容',
    patterns: [
      /(?:hate\s+speech|racial\s+slur|harass|bully|nazi|kkk)/i,
      /(?:仇恨|种族歧视|纳粹|骚扰|霸凌|辱骂.*群体)/,
    ],
  },
  {
    code: 'ILLEGAL_DECEPTIVE',
    label: '违法、欺骗或不诚实行为',
    patterns: [
      /(?:fake\s+(?:id|passport|certificate)|phishing|malware|hack(?:ing)?|counterfeit)/i,
      /(?:伪造.*(?:证件|护照|证书)|钓鱼网站|恶意软件|黑客|破解|假冒商品|仿冒商品)/,
    ],
  },
  {
    code: 'PUBLIC_FIGURE_DECEPTION',
    label: '误导性公众人物或政治媒体生成',
    patterns: [
      /(?:political\s+deepfake|fake\s+news|impersonate\s+(?:a\s+)?(?:celebrity|politician))/i,
      /(?:政治.*深度伪造|假新闻|冒充.*(?:名人|政客|公众人物))/,
    ],
  },
];

function inspectText(text) {
  const value = String(text || '').trim();
  if (!value) return null;

  for (const rule of POLICY_RULES) {
    if (rule.patterns.some((pattern) => pattern.test(value))) {
      return {
        ok: false,
        code: rule.code,
        reason: rule.label,
      };
    }
  }

  return null;
}

function assertGenerationTextAllowed(fields) {
  for (const [field, value] of Object.entries(fields)) {
    const violation = inspectText(value);
    if (violation) {
      const error = new Error(`${field} 包含不适合生成或展示广告的内容：${violation.reason}`);
      error.status = 400;
      error.code = violation.code;
      throw error;
    }
  }
}

// 所有违规策略对应的 code，用于前端判断是否可走「敏感词清洗」流程
const MODERATION_CODES = POLICY_RULES.map((rule) => rule.code);

/**
 * 去除文本中命中违规策略的敏感词：把匹配片段替换为空白，再做空白与标点收敛。
 * 用于「重新评估」时自动清洗用户提示词，避免手动逐字修改。
 * @param {string} text 原始文本
 * @returns {{ text: string, changed: boolean, removed: string[] }}
 */
function sanitizeText(text) {
  let value = String(text || '');
  const removed = [];

  for (const rule of POLICY_RULES) {
    for (const pattern of rule.patterns) {
      const flags = pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`;
      const global = new RegExp(pattern.source, flags);
      value = value.replace(global, (match) => {
        const hit = match.trim();
        if (hit) removed.push(hit);
        return ' ';
      });
    }
  }

  // 收敛清洗后残留的多余空白与悬空标点
  const cleaned = value
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\s+([,，。.!！?？、])/g, '$1')
    .replace(/([(（])\s+/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return {
    text: cleaned,
    changed: cleaned !== String(text || '').trim(),
    removed,
  };
}

module.exports = {
  assertGenerationTextAllowed,
  inspectText,
  sanitizeText,
  MODERATION_CODES,
};
