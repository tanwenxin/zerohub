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

module.exports = {
  assertGenerationTextAllowed,
};
