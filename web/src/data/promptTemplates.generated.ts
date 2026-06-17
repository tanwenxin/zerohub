// 此文件由 scripts/prompt-templates/sync-web-prompt-templates.js 自动生成，请勿手工编辑。

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

export const PROMPT_TEMPLATE_DATA: PromptTemplateData = {
  "version": 1,
  "updatedAt": "2026-06-17T04:02:55.689Z",
  "categories": [
    {
      "name": "人像与时尚摄影",
      "slug": "portrait-fashion-photography",
      "count": 181,
      "description": "人像、时尚、旅行、情侣与摄影风格相关 AI 图像提示词。"
    },
    {
      "name": "海报与插画",
      "slug": "poster-illustration",
      "count": 111,
      "description": "海报设计、插画风格、视觉叙事与创意构图提示词。"
    },
    {
      "name": "角色设计与动漫",
      "slug": "character-anime-design",
      "count": 60,
      "description": "角色设定、动漫风格、游戏人物与拟人化视觉提示词。"
    },
    {
      "name": "城市与建筑空间",
      "slug": "city-architecture-space",
      "count": 42,
      "description": "城市景观、建筑空间、室内外场景与空间氛围提示词。"
    },
    {
      "name": "产品与电商广告",
      "slug": "product-ecommerce-ads",
      "count": 40,
      "description": "产品摄影、电商主图、商业广告与营销视觉提示词。"
    },
    {
      "name": "UI与社交媒体",
      "slug": "ui-social-media",
      "count": 37,
      "description": "UI 画面、社交媒体封面、内容模板与数字界面提示词。"
    },
    {
      "name": "信息图、图标与规则模板",
      "slug": "infographic-icon-rule-template",
      "count": 31,
      "description": "信息图、图标、规则说明、流程图与结构化视觉提示词。"
    },
    {
      "name": "体育与动作场景",
      "slug": "sports-action-scenes",
      "count": 20,
      "description": "体育运动、动作瞬间、赛事视觉与动态场景提示词。"
    },
    {
      "name": "品牌与标志视觉",
      "slug": "brand-logo-visual",
      "count": 20,
      "description": "品牌识别、标志视觉、字体图形与商业形象提示词。"
    },
    {
      "name": "美食与饮品",
      "slug": "food-beverage",
      "count": 20,
      "description": "美食摄影、饮品广告、餐饮场景与食物质感提示词。"
    },
    {
      "name": "自然与风景",
      "slug": "nature-landscape",
      "count": 17,
      "description": "自然风景、户外环境、季节氛围与旅行景观提示词。"
    },
    {
      "name": "复古与怀旧",
      "slug": "retro-nostalgia",
      "count": 12,
      "description": "复古风格、怀旧质感、年代摄影与旧物场景提示词。"
    },
    {
      "name": "幻想与科幻",
      "slug": "fantasy-sci-fi",
      "count": 11,
      "description": "幻想世界、科幻场景、未来视觉与超现实概念提示词。"
    },
    {
      "name": "微缩场景与3D装置",
      "slug": "miniature-3d-installation",
      "count": 10,
      "description": "微缩景观、3D 装置、模型摄影与创意立体视觉提示词。"
    },
    {
      "name": "其他",
      "slug": "others",
      "count": 4,
      "description": "暂未归入固定主题的综合提示词。"
    }
  ],
  "templates": [
    {
      "id": "tpl-83a1e3994366d6",
      "slug": "cinematic-portrait-woman-on-rural-road-at-dusk",
      "title": "Cinematic Portrait: Woman on Rural Road at Dusk",
      "prompt": "Cinematic Portrait: Woman on Rural Road at Dusk。dark car parked on the roadside；wide shot walking away on the road；sharp subject, soft background。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 7723,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c405b9e7016b4492ab38780394245b45.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-83a1e3994366d6-6a78c67ec2-320.webp",
          "640": "/prompt-template-images/tpl-83a1e3994366d6-6a78c67ec2-640.webp",
          "960": "/prompt-template-images/tpl-83a1e3994366d6-6a78c67ec2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:35:06.295Z"
    },
    {
      "id": "tpl-2fced7d3cfe4ba",
      "slug": "blonde-woman-portrait-colosseum-rome-travel-photography",
      "title": "Blonde Woman Portrait Colosseum Rome Travel Photography",
      "prompt": "Blonde Woman Portrait Colosseum Rome Travel Photography。Colosseum ruins in background；Travel Influencer / Glamour；Honey-blonde balayage。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 7982,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/278ac410ca2c4a368da350378e29f975.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2fced7d3cfe4ba-1ee91b4eac-320.webp",
          "640": "/prompt-template-images/tpl-2fced7d3cfe4ba-1ee91b4eac-640.webp",
          "960": "/prompt-template-images/tpl-2fced7d3cfe4ba-1ee91b4eac-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:35:46.639Z"
    },
    {
      "id": "tpl-fb12e3b5d63c3f",
      "slug": "relaxed-woman-in-yellow-outfit-on-couch-portrait",
      "title": "Relaxed Woman in Yellow Outfit on Couch - Portrait",
      "prompt": "Relaxed Woman in Yellow Outfit on Couch - Portrait。Relaxed and casual, leaning back against the couch cushions, one arm extended to support weight, the other hand resting gently near the waist, legs angled toward the camera.；Yellow strapless tube top featuring the text 'HAWAIIAN TROPIC' in brown serif font with a hibiscus flower and palm graphic on the side.；Friendly, relaxed, and engaging eye contact.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8102,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b419fdc6a6644c89a793e199555f5910.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fb12e3b5d63c3f-2e1608d694-320.webp",
          "640": "/prompt-template-images/tpl-fb12e3b5d63c3f-2e1608d694-640.webp",
          "960": "/prompt-template-images/tpl-fb12e3b5d63c3f-2e1608d694-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:36:07.865Z"
    },
    {
      "id": "tpl-5e88ece775d206",
      "slug": "natural-woman-portrait-on-camera-screen-wet-hair",
      "title": "Natural Woman Portrait on Camera Screen, Wet Hair",
      "prompt": "Natural Woman Portrait on Camera Screen, Wet Hair。A hyper-realistic close-up photo displayed on the screen of a compact Canon-style digital camera. The camera body is visible around the preview, showing textured plastic, physical buttons, dials, FUNC/SET wheel, DISP button, and an 'IMAGE STABILIZER' label on the body. On the camera screen: a young woman using the exact facial features from the provided reference photo, no changes to identity. She is indoors at night, captured with a harsh built-in flash. Long dark hair partially covering her face, lips slightly parted, candid expression. Background shows a dim, cluttered kitchen softly blurred. Strong flash contrast, cool muted tones, subtle digital noise, slight screen glow, authentic early-2000s digital camera look.；harsh on-camera flash, cool tone, high contrast；close-up of camera back with live preview visible。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8166,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6eaa405cd1714b1e957f6ec902f07d0e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5e88ece775d206-9098a81e7f-320.webp",
          "640": "/prompt-template-images/tpl-5e88ece775d206-9098a81e7f-640.webp",
          "960": "/prompt-template-images/tpl-5e88ece775d206-9098a81e7f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:36:28.968Z"
    },
    {
      "id": "tpl-e1a9d9feac5ee3",
      "slug": "cheerful-woman-selfie-in-miami-convertible-university-of-miami",
      "title": "Cheerful Woman Selfie in Miami Convertible - University of Miami",
      "prompt": "Cheerful Woman Selfie in Miami Convertible - University of Miami。A young American woman taking a convertible car selfie, wind blowing through her hair, one hand playfully touching her face while smiling, Miami Beach ocean visible behind her；white or pink convertible parked along Miami Beach Ocean Drive or beach road；turquoise Atlantic Ocean and white sand Miami Beach in background。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8198,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1a3b506da2914319a0f26b4201076e8a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e1a9d9feac5ee3-9740fea213-320.webp",
          "640": "/prompt-template-images/tpl-e1a9d9feac5ee3-9740fea213-640.webp",
          "960": "/prompt-template-images/tpl-e1a9d9feac5ee3-9740fea213-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:36:58.049Z"
    },
    {
      "id": "tpl-6b8d5f67ff97a1",
      "slug": "summer-portrait-of-woman-in-floral-dress-by-the-sea",
      "title": "Summer Portrait of Woman in Floral Dress by the Sea",
      "prompt": "Summer Portrait of Woman in Floral Dress by the Sea。blue base with vibrant floral pattern；bright, fresh, Mediterranean summer mood；flowing summer dress。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8282,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/02c7fd5b306a4a78b1949cb7b5dbd1dd.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6b8d5f67ff97a1-6a74efd59c-320.webp",
          "640": "/prompt-template-images/tpl-6b8d5f67ff97a1-6a74efd59c-640.webp",
          "960": "/prompt-template-images/tpl-6b8d5f67ff97a1-6a74efd59c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:37:09.001Z"
    },
    {
      "id": "tpl-e4389529994cb6",
      "slug": "photorealistic-portrait-smiling-woman-in-casual-fashion",
      "title": "Photorealistic Portrait: Smiling Woman in Casual Fashion",
      "prompt": "Photorealistic Portrait: Smiling Woman in Casual Fashion。creates a gentle, flattering glow on subject and background；back right pocket area；angled away from camera。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8467,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6444dac3700a47cb833eb2e4d2ea1932.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e4389529994cb6-0483a1827d-320.webp",
          "640": "/prompt-template-images/tpl-e4389529994cb6-0483a1827d-640.webp",
          "960": "/prompt-template-images/tpl-e4389529994cb6-0483a1827d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:37:41.796Z"
    },
    {
      "id": "tpl-2b796590a3acb1",
      "slug": "woman-in-helicopter-with-ocean-view-photorealistic-portrait",
      "title": "Woman in Helicopter with Ocean View | Photorealistic Portrait",
      "prompt": "Woman in Helicopter with Ocean View | Photorealistic Portrait。coastline with ocean and shoreline town；helicopter ride over coastline；seated inside helicopter。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8613,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2aa4a9070eb94a4b81cbf290f754776e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2b796590a3acb1-9f9d5f53d6-320.webp",
          "640": "/prompt-template-images/tpl-2b796590a3acb1-9f9d5f53d6-640.webp",
          "960": "/prompt-template-images/tpl-2b796590a3acb1-9f9d5f53d6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:38:24.292Z"
    },
    {
      "id": "tpl-6d9c90a1d23b7c",
      "slug": "woman-applying-makeup-in-mirror-stylish-bathroom-portrait",
      "title": "Woman Applying Makeup in Mirror | Stylish Bathroom Portrait",
      "prompt": "Woman Applying Makeup in Mirror | Stylish Bathroom Portrait。Applying lip gloss to lower lip while looking into a large oval mirror.；A candid photograph of a glamorous woman with sleek dark hair in a high ponytail, wearing a pink slip dress and gold jewelry, applying lip gloss. She is reflected in a large oval gold mirror in a bathroom with dark teal vertical subway tiles. Warm, soft artificial lighting creates highlights on her skin and the tiles. The reflection shows a doorway and another person in the background.；Glamorous Woman Applying Lip Gloss in Mirror Reflection。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8682,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d5d12832394945bcacc086f46d2da34b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6d9c90a1d23b7c-f1aa717f39-320.webp",
          "640": "/prompt-template-images/tpl-6d9c90a1d23b7c-f1aa717f39-640.webp",
          "960": "/prompt-template-images/tpl-6d9c90a1d23b7c-f1aa717f39-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:39:16.714Z"
    },
    {
      "id": "tpl-9f4dd59c933d0d",
      "slug": "ethereal-blonde-woman-portrait-in-botanical-garden",
      "title": "Ethereal Blonde Woman Portrait in Botanical Garden",
      "prompt": "Ethereal Blonde Woman Portrait in Botanical Garden。The frame is seamlessly divided by the subject and the structure. The lower-right half is a massive, solid stone 'BeautyVerse' structure. The upper-left half is filled with a lush, soft-focus botanical garden.；High-fashion garden editorial with professional magazine color grading；Lush botanical textures in upper left。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8861,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/42b4496eec524bd8805f915b1dfb729c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9f4dd59c933d0d-c858fcb682-320.webp",
          "640": "/prompt-template-images/tpl-9f4dd59c933d0d-c858fcb682-640.webp",
          "960": "/prompt-template-images/tpl-9f4dd59c933d0d-c858fcb682-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:40:40.164Z"
    },
    {
      "id": "tpl-ba922392640151",
      "slug": "conceptual-photo-woman-s-mascara-cleaned-by-mini-worker",
      "title": "Conceptual Photo: Woman's Mascara Cleaned by Mini Worker",
      "prompt": "Conceptual Photo: Woman's Mascara Cleaned by Mini Worker。Ultra-photoreal surreal concept advertising image: extreme macro close-up of a woman's face with eyes closed, showing a dramatic smudged black mascara/eyeshadow streak running down her cheek like a stain. A tiny rope-access window cleaner / climber is scaling her cheek as if it were a giant wall, actively scraping and cleaning the mascara stain with a small squeegee and brush. The mini climber is fully detailed and realistic: safety harness, ropes, carabiners, helmet (red), gloves, tool belt, and a small red bucket hanging from the harness. The ropes run vertically across the face, anchored out of frame, with believable tension and shadows. The climber’s scale is believable (miniature), with correct perspective and contact shadows on skin. Skin texture is hyper-realistic: pores, fine vellus hairs, subtle peach fuzz, natural highlig。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8947,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2136f2607fe44ba38fa46b8cfbb6b9bc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ba922392640151-2b8a0b5f9e-320.webp",
          "640": "/prompt-template-images/tpl-ba922392640151-2b8a0b5f9e-640.webp",
          "960": "/prompt-template-images/tpl-ba922392640151-2b8a0b5f9e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:36:21.461Z"
    },
    {
      "id": "tpl-39ac4abd433633",
      "slug": "serene-woman-in-bluebonnet-field-outdoor-portrait-photography",
      "title": "Serene Woman in Bluebonnet Field | Outdoor Portrait Photography",
      "prompt": "Serene Woman in Bluebonnet Field | Outdoor Portrait Photography。Non-realistic / No photo texture；Hand-drawn colored pencil illustration with clean line art and slightly rough pencil outlines, combined with soft watercolor wash textures. Bright pastel colors, lighter and more vivid tones with natural saturation. Visible pencil strokes layered with subtle watercolor gradients. Warm and friendly tone, semi-cartoon realistic proportions. Simple facial features with dot eyes and small smiles. Flat yet detailed coloring, minimal shadows, soft highlights. Storybook illustration feel, cozy and cheerful atmosphere, children-book style, high clarity, no realism, no photo texture.；Illustration style: hand-drawn colored pencil illustration, clean line art with slightly rough pencil outlines, soft pastel coloring with increased brightness, lighter and more vivid color tones, enhanced saturation while。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9018,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8c71fc8c387e4a2c9a7a7e2fb57c42b4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-39ac4abd433633-1da5e75226-320.webp",
          "640": "/prompt-template-images/tpl-39ac4abd433633-1da5e75226-640.webp",
          "960": "/prompt-template-images/tpl-39ac4abd433633-1da5e75226-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:41:33.861Z"
    },
    {
      "id": "tpl-e493b7ccea78e7",
      "slug": "joyful-couple-christmas-portrait-with-festive-gifts",
      "title": "Joyful Couple Christmas Portrait with Festive Gifts",
      "prompt": "Joyful Couple Christmas Portrait with Festive Gifts。portrait medium shot, couple centered, woman dominant in frame, man behind her slightly left；moderate DOF; faces tack sharp; tree and gifts slightly softer；Keep the same couple pose: man behind hugging, woman in front holding wine glass。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9123,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2c9dbbff509e413ba0cc2adbf5d6a857.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e493b7ccea78e7-ac877d2ecf-320.webp",
          "640": "/prompt-template-images/tpl-e493b7ccea78e7-ac877d2ecf-640.webp",
          "960": "/prompt-template-images/tpl-e493b7ccea78e7-ac877d2ecf-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:42:04.508Z"
    },
    {
      "id": "tpl-5e14cd20bdbdbf",
      "slug": "cheerful-woman-eating-cookie-in-modern-kitchen",
      "title": "Cheerful Woman Eating Cookie in Modern Kitchen",
      "prompt": "Cheerful Woman Eating Cookie in Modern Kitchen。Playful, looking back at camera over shoulder, smiling with cookie near mouth；Open box of chocolate chip cookies；Marble or granite kitchen island countertop。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9361,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7efccc5abd004b60b7fb79db205d0c24.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5e14cd20bdbdbf-d093f6c516-320.webp",
          "640": "/prompt-template-images/tpl-5e14cd20bdbdbf-d093f6c516-640.webp",
          "960": "/prompt-template-images/tpl-5e14cd20bdbdbf-d093f6c516-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:42:55.994Z"
    },
    {
      "id": "tpl-fa23d0cef47322",
      "slug": "candid-portrait-of-young-woman-in-rainy-night-car",
      "title": "Candid Portrait of Young Woman in Rainy Night Car",
      "prompt": "Candid Portrait of Young Woman in Rainy Night Car。Photorealistic, candid portrait, smartphone photography aesthetic, 8k resolution, cinematic depth of field.；Soft artificial interior light (dome light or flash style) illuminating the subject, contrasting with the dark rainy exterior.；Inside a car interior, night time.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9817,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4e67fc5902494adb9b988ea0e807c954.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fa23d0cef47322-cf391a9490-320.webp",
          "640": "/prompt-template-images/tpl-fa23d0cef47322-cf391a9490-640.webp",
          "960": "/prompt-template-images/tpl-fa23d0cef47322-cf391a9490-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:44:13.185Z"
    },
    {
      "id": "tpl-822636ce7281e0",
      "slug": "woman-in-pool-hall-casual-portrait-with-billiards-table",
      "title": "Woman in Pool Hall: Casual Portrait with Billiards Table",
      "prompt": "Woman in Pool Hall: Casual Portrait with Billiards Table。casual confident stance, one arm resting on the table, other hand holding a cue stick；green felt pool table；casual lifestyle portrait。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9854,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d1087aee02744520b36cb2b9bea201a4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-822636ce7281e0-47c626a6a2-320.webp",
          "640": "/prompt-template-images/tpl-822636ce7281e0-47c626a6a2-640.webp",
          "960": "/prompt-template-images/tpl-822636ce7281e0-47c626a6a2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:44:23.464Z"
    },
    {
      "id": "tpl-aa32f874684cbe",
      "slug": "elegant-blonde-woman-night-portrait-in-red-strapless-dress",
      "title": "Elegant Blonde Woman Night Portrait in Red Strapless Dress",
      "prompt": "Elegant Blonde Woman Night Portrait in Red Strapless Dress。Elegant blonde American woman in a red tube dress standing on a night walkway.；Analog raw photo, CineStill 800T. A stunning young white American woman (20-25) with long blonde hair and bright blue eyes standing on a paved walkway at night. She wears a tight vibrant red strapless tube dress and silver bracelets. She holds her hands clasped at her waist. Red lipstick. Confident, serene expression. Her face is attractive with natural healthy skin texture and a soft glow. Background: Luxury resort path, green vegetation on left, modern illuminated glass building on right. Warm artificial night lighting creating a glow. Everything in focus f/11. Visible film grain, realistic skin texture (not plastic), sharp details, cinematic night atmosphere.；Night_Elegance_RedDress_Blonde_Flux_V5.2。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10137,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bf9b87bede4340cf8ef37237e575b4a2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-aa32f874684cbe-5992956990-320.webp",
          "640": "/prompt-template-images/tpl-aa32f874684cbe-5992956990-640.webp",
          "960": "/prompt-template-images/tpl-aa32f874684cbe-5992956990-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:37:45.428Z"
    },
    {
      "id": "tpl-9aed9ae344f17b",
      "slug": "cheerful-portrait-of-woman-with-bugs-bunny-on-purple",
      "title": "Cheerful Portrait of Woman with Bugs Bunny on Purple",
      "prompt": "Cheerful Portrait of Woman with Bugs Bunny on Purple。Bugs Bunny smiling mischievously, relaxed pose；giant 3D photorealistic render with cartoon accuracy。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10218,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b354a809be534f4b940b2e3552d35bef.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9aed9ae344f17b-f7c5cce55d-320.webp",
          "640": "/prompt-template-images/tpl-9aed9ae344f17b-f7c5cce55d-640.webp",
          "960": "/prompt-template-images/tpl-9aed9ae344f17b-f7c5cce55d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:37:58.765Z"
    },
    {
      "id": "tpl-edd4f2d52b3d29",
      "slug": "redhead-woman-indoor-portrait-vintage-aesthetic",
      "title": "Redhead Woman Indoor Portrait - Vintage Aesthetic",
      "prompt": "Redhead Woman Indoor Portrait - Vintage Aesthetic。photorealistic, low-grain film aesthetic, subtle color desaturation, slight warm tone, soft paper-like texture to mimic documentary photo film from 1980s；redhead；room decor strictly in burgundy, brown, and dark green tones。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10353,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a724363c11bf4c6f977a45f450f7441c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-edd4f2d52b3d29-c2366533ec-320.webp",
          "640": "/prompt-template-images/tpl-edd4f2d52b3d29-c2366533ec-640.webp",
          "960": "/prompt-template-images/tpl-edd4f2d52b3d29-c2366533ec-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:38:28.924Z"
    },
    {
      "id": "tpl-8de6664e6019d5",
      "slug": "stylish-woman-mirror-selfie-leopard-print-dress-portrait",
      "title": "Stylish Woman Mirror Selfie | Leopard Print Dress Portrait",
      "prompt": "Stylish Woman Mirror Selfie | Leopard Print Dress Portrait。wooden dresser with rattan/cane drawers, wooden bedside table；taking a mirror selfie。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10431,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4ecec8dd1d86405bb3fbab0e76588fd2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8de6664e6019d5-1d037fa68e-320.webp",
          "640": "/prompt-template-images/tpl-8de6664e6019d5-1d037fa68e-640.webp",
          "960": "/prompt-template-images/tpl-8de6664e6019d5-1d037fa68e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:38:39.657Z"
    },
    {
      "id": "tpl-05ee0065956b1b",
      "slug": "young-woman-mirror-selfie-black-activewear-casual-portrait",
      "title": "Young Woman Mirror Selfie - Black Activewear Casual Portrait",
      "prompt": "Young Woman Mirror Selfie - Black Activewear Casual Portrait。iPhone rear camera or high-end mirrorless mimicking a mirror selfie.；Influencer lifestyle, casual at-home aesthetic, Gen Z style.；Black long-sleeved tight-fitting compression top or bodysuit.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10511,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b216d3ab176246b38e71ab8ee28fae65.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-05ee0065956b1b-9f17710d62-320.webp",
          "640": "/prompt-template-images/tpl-05ee0065956b1b-9f17710d62-640.webp",
          "960": "/prompt-template-images/tpl-05ee0065956b1b-9f17710d62-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:38:50.217Z"
    },
    {
      "id": "tpl-2bf40279f66e14",
      "slug": "close-up-portrait-woman-with-wet-face-green-eyes",
      "title": "Close-up Portrait: Woman with Wet Face, Green Eyes",
      "prompt": "Close-up Portrait: Woman with Wet Face, Green Eyes。Extreme wet close-up portrait, side profile of a young woman. Dark wet hair strands naturally glued to the skin. Fine droplets of water and thin sweat glistening realistically on face. Focus on bright natural green and hazel eyes with realistic reflection. Moist and shiny lips, soft natural skin texture. Soft lighting, cool color tones, light grey and white bokeh background. Hyper-realistic, 8k resolution, cinematic photography, raw style.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10577,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a4effabcbfe947d09282ab23f205215b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2bf40279f66e14-40ce698298-320.webp",
          "640": "/prompt-template-images/tpl-2bf40279f66e14-40ce698298-640.webp",
          "960": "/prompt-template-images/tpl-2bf40279f66e14-40ce698298-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:39:00.998Z"
    },
    {
      "id": "tpl-78833f88aa9575",
      "slug": "urban-night-portrait-of-woman-with-wet-hair",
      "title": "Urban Night Portrait of Woman with Wet Hair",
      "prompt": "Urban Night Portrait of Woman with Wet Hair。blurred urban cityscape, bokeh streetlights, car headlights, building lights；nightlife, candid；flash photography style mixed with ambient street lighting。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10602,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ea2e421fb4b047df905e10c8a38022ec.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-78833f88aa9575-a51bdcc884-320.webp",
          "640": "/prompt-template-images/tpl-78833f88aa9575-a51bdcc884-640.webp",
          "960": "/prompt-template-images/tpl-78833f88aa9575-a51bdcc884-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:39:11.869Z"
    },
    {
      "id": "tpl-694b363623f194",
      "slug": "stylish-woman-selfie-in-dubai-car-burj-khalifa-view",
      "title": "Stylish Woman Selfie in Dubai Car | Burj Khalifa View",
      "prompt": "Stylish Woman Selfie in Dubai Car | Burj Khalifa View。A young woman taking a car selfie in a luxury vehicle, hand gently touching her sunglasses with a confident smile, Dubai skyline visible through the window；car window revealing iconic Dubai architecture - Bursa Khalifa or modern glass towers softly blurred in background；luxury lifestyle, Dubai glamour, sophisticated wealth, golden hour magic, effortless elegance。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10683,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e9827873c3534e2583c32f1ac09f836c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-694b363623f194-408f5ea0f1-320.webp",
          "640": "/prompt-template-images/tpl-694b363623f194-408f5ea0f1-640.webp",
          "960": "/prompt-template-images/tpl-694b363623f194-408f5ea0f1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:39:32.655Z"
    },
    {
      "id": "tpl-56a1b6f65fe6c3",
      "slug": "natural-portrait-of-woman-in-cafe-friendly-close-up",
      "title": "Natural Portrait of Woman in Cafe - Friendly Close-up",
      "prompt": "Natural Portrait of Woman in Cafe - Friendly Close-up。close-up portrait；warm ambient café lighting。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10760,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5f752446e3cc443097375e06c369637b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-56a1b6f65fe6c3-d96f95fc64-320.webp",
          "640": "/prompt-template-images/tpl-56a1b6f65fe6c3-d96f95fc64-640.webp",
          "960": "/prompt-template-images/tpl-56a1b6f65fe6c3-d96f95fc64-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:40:26.100Z"
    },
    {
      "id": "tpl-6991161d400942",
      "slug": "cinematic-urban-night-portrait-woman-in-neon-city-street",
      "title": "Cinematic Urban Night Portrait - Woman in Neon City Street",
      "prompt": "Cinematic Urban Night Portrait - Woman in Neon City Street。portrait_neon_urban_001；Colorful city lights；Neon-lit。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10865,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/07b33668f3554704abf5ce0cd190f07f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6991161d400942-5ec80f62bc-320.webp",
          "640": "/prompt-template-images/tpl-6991161d400942-5ec80f62bc-640.webp",
          "960": "/prompt-template-images/tpl-6991161d400942-5ec80f62bc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:40:55.424Z"
    },
    {
      "id": "tpl-76abd85bac04c5",
      "slug": "natural-beauty-portrait-of-a-woman-with-iris-necklace",
      "title": "Natural Beauty Portrait of a Woman with Iris Necklace",
      "prompt": "Natural Beauty Portrait of a Woman with Iris Necklace。Delicate gold chain necklace featuring a cursive nameplate pendant that reads；Dark, dimly lit indoor room, indistinct furniture shapes in deep shadow (low key)。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10971,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d4d03c27c0514b65871f548076f8be8c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-76abd85bac04c5-11cefe6fbb-320.webp",
          "640": "/prompt-template-images/tpl-76abd85bac04c5-11cefe6fbb-640.webp",
          "960": "/prompt-template-images/tpl-76abd85bac04c5-11cefe6fbb-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:41:06.047Z"
    },
    {
      "id": "tpl-5c94c04cb60556",
      "slug": "sunny-outdoor-cafe-portrait-woman-with-coca-cola",
      "title": "Sunny Outdoor Cafe Portrait: Woman with Coca-Cola",
      "prompt": "Sunny Outdoor Cafe Portrait: Woman with Coca-Cola。cinematic tech lifestyle, futuristic urban, golden hour；stainless steel body texture and angular design clearly visible；lens flare, warm glow, high contrast。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 11117,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5248c91936194a5ba26c718f3a0dcf84.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5c94c04cb60556-9c7ac6e97b-320.webp",
          "640": "/prompt-template-images/tpl-5c94c04cb60556-9c7ac6e97b-640.webp",
          "960": "/prompt-template-images/tpl-5c94c04cb60556-9c7ac6e97b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:41:27.367Z"
    },
    {
      "id": "tpl-6355478098fc6f",
      "slug": "winter-portrait-woman-and-snowmen-in-sunny-snowy-landscape",
      "title": "Winter Portrait: Woman & Snowmen in Sunny Snowy Landscape",
      "prompt": "Winter Portrait: Woman & Snowmen in Sunny Snowy Landscape。woman with several snowmen in a snowy, sunny winter atmosphere；A bright, sunny winter day with thick snow and clear shadows.；Blurred snowmen both in front and behind, with a faint sky or thin clouds.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 11210,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/fca6d04c63d54487a1d6ce93c838178d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6355478098fc6f-9ea732dae6-320.webp",
          "640": "/prompt-template-images/tpl-6355478098fc6f-9ea732dae6-640.webp",
          "960": "/prompt-template-images/tpl-6355478098fc6f-9ea732dae6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:42:31.284Z"
    },
    {
      "id": "tpl-10cdb3eeacdd70",
      "slug": "professional-woman-portrait-blue-top-and-green-pants-studio",
      "title": "Professional Woman Portrait: Blue Top & Green Pants Studio",
      "prompt": "Professional Woman Portrait: Blue Top & Green Pants Studio。flat color walls, even lighting；subtle smile, strong presence；clean color-blocked outfit in two bold tones。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 11274,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/239f6f91b63a4c77bbcecb73e0d54d4d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-10cdb3eeacdd70-8456f170ef-320.webp",
          "640": "/prompt-template-images/tpl-10cdb3eeacdd70-8456f170ef-640.webp",
          "960": "/prompt-template-images/tpl-10cdb3eeacdd70-8456f170ef-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:42:41.144Z"
    },
    {
      "id": "tpl-6703ec4e5b48d5",
      "slug": "young-woman-fashion-mirror-selfie-lace-tights-style",
      "title": "Young Woman Fashion Mirror Selfie | Lace Tights Style",
      "prompt": "Young Woman Fashion Mirror Selfie | Lace Tights Style。A beautiful young woman with long, voluminous wavy blonde hair squats low in a cozy bedroom, taking a playful mirror selfie with her pink-cased iPhone. She has flawless fair skin, subtle makeup with long lashes framing her large eyes, defined brows, and glossy nude-pink lips pursed in a cute kissy face. She wears a sleek black long-sleeve turtleneck bodysuit made of smooth, form-fitting fabric that hugs her curvaceous figure and full bust, paired with sheer white lace pantyhose featuring intricate floral patterns that accentuate her toned thighs and hips. She completes the look with glossy black Mary Jane platform high heels with ankle straps. Her pose is confident and teasing, one hand holding the phone and the other resting on her knee. The bedroom has soft natural lighting, a white fluffy rug underfoot, a black bed frame with white",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 11687,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "blocked",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-d0766ee589d388",
      "slug": "stylish-woman-mirror-selfie-pink-top-and-gold-skirt-fashion",
      "title": "Stylish Woman Mirror Selfie: Pink Top & Gold Skirt Fashion",
      "prompt": "Stylish Woman Mirror Selfie: Pink Top & Gold Skirt Fashion。Crouching low in a mirror selfie pose, holding a vibrant pink smartphone.；Two-piece matching set made of vibrant pink shimmery, glittery fabric and light yellow；High-waisted maxi skirt with a dramatic thigh-high slit and knotted detail at the hip.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 11958,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6aa4118357484575bd128d5b216fe425.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d0766ee589d388-7efa43b13c-320.webp",
          "640": "/prompt-template-images/tpl-d0766ee589d388-7efa43b13c-640.webp",
          "960": "/prompt-template-images/tpl-d0766ee589d388-7efa43b13c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:44:57.095Z"
    },
    {
      "id": "tpl-ef85e8b079bd77",
      "slug": "paris-cafe-fashion-woman-with-eiffel-tower-view",
      "title": "Paris Cafe Fashion: Woman with Eiffel Tower View",
      "prompt": "Paris Cafe Fashion: Woman with Eiffel Tower View。The Eiffel Tower visible in the distance down the street center；Chic, elegant, cosmopolitan, relaxed luxury, travel wanderlust, Parisian dreamy；Classic Parisian Haussmann-style limestone buildings with balconies。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12216,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ce140d54470c42928a0e167caf1e8df5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ef85e8b079bd77-bfb74a0b83-320.webp",
          "640": "/prompt-template-images/tpl-ef85e8b079bd77-bfb74a0b83-640.webp",
          "960": "/prompt-template-images/tpl-ef85e8b079bd77-bfb74a0b83-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:46:08.504Z"
    },
    {
      "id": "tpl-6ae675bed06f16",
      "slug": "fashion-portrait-woman-in-red-dress-elegant-balustrade",
      "title": "Fashion Portrait: Woman in Red Dress, Elegant Balustrade",
      "prompt": "Fashion Portrait: Woman in Red Dress, Elegant Balustrade。Deep crimson red satin mini dress, fit-and-flare silhouette, plunging V-neckline, spaghetti straps, tiered ruffled skirt；Standing full-body, leaning backwards against a stone balustrade, one hand resting on the railing, legs crossed at the ankles, looking down/away candidly；White stone balcony with a decorative balustrade (railing) featuring classic balusters。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12345,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9868d81d5b5b471c97f0e88bb218dbc6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6ae675bed06f16-6f4d5650df-320.webp",
          "640": "/prompt-template-images/tpl-6ae675bed06f16-6f4d5650df-640.webp",
          "960": "/prompt-template-images/tpl-6ae675bed06f16-6f4d5650df-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:46:38.869Z"
    },
    {
      "id": "tpl-53a13c3c503f9e",
      "slug": "elegant-woman-in-black-dress-on-grand-staircase-fashion",
      "title": "Elegant Woman in Black Dress on Grand Staircase - Fashion",
      "prompt": "Elegant Woman in Black Dress on Grand Staircase - Fashion。Little black dress (LBD), mini length, sleeveless straps, sweetheart neckline, fitted bodice with a flared skater-style skirt；Old Money, Parisian chic, luxury, formal, elegant, high-class fashion；Small, black quilted leather handbag (reminiscent of Chanel) held in the right hand。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12386,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/53e58072e8924e4d850d730f30c8ffe8.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-53a13c3c503f9e-fb799f669c-320.webp",
          "640": "/prompt-template-images/tpl-53a13c3c503f9e-fb799f669c-640.webp",
          "960": "/prompt-template-images/tpl-53a13c3c503f9e-fb799f669c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:46:50.007Z"
    },
    {
      "id": "tpl-726e297fb96556",
      "slug": "glamorous-woman-in-sparkling-mini-dress-with-cocktail",
      "title": "Glamorous Woman in Sparkling Mini Dress with Cocktail",
      "prompt": "Glamorous Woman in Sparkling Mini Dress with Cocktail。Holding a coupe cocktail glass filled with amber liquid in the right hand, raised slightly；Embellished with small sparkling rhinestones or crystals throughout；Glamorous, chic, night-luxe, confident。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12446,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/10f697597de445fa93e06aa3e358ec3d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-726e297fb96556-e355774e95-320.webp",
          "640": "/prompt-template-images/tpl-726e297fb96556-e355774e95-640.webp",
          "960": "/prompt-template-images/tpl-726e297fb96556-e355774e95-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:47:10.968Z"
    },
    {
      "id": "tpl-15277200cd0c60",
      "slug": "young-woman-in-floral-dress-in-elegant-garden-scene",
      "title": "Young Woman in Floral Dress in Elegant Garden Scene",
      "prompt": "Young Woman in Floral Dress in Elegant Garden Scene。Short, pale yellow mini dress with a delicate floral pattern；Romantic, summery, elegant, serene；Formal estate garden。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12496,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/610a20b933754311aa0a095d93bc567f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-15277200cd0c60-1e7f6c7ed4-320.webp",
          "640": "/prompt-template-images/tpl-15277200cd0c60-1e7f6c7ed4-640.webp",
          "960": "/prompt-template-images/tpl-15277200cd0c60-1e7f6c7ed4-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:47:20.329Z"
    },
    {
      "id": "tpl-a74a073d22eb83",
      "slug": "young-woman-on-balcony-in-fuzzy-blue-shorts",
      "title": "Young Woman on Balcony in Fuzzy Blue Shorts",
      "prompt": "Young Woman on Balcony in Fuzzy Blue Shorts。Rustic_Balcony_Porch；Outdoor_Porch_Balcony；High_Waisted_Denim_Shorts。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12561,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a5d9339b628844a79f0e3960661adfac.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a74a073d22eb83-53b5e8d61b-320.webp",
          "640": "/prompt-template-images/tpl-a74a073d22eb83-53b5e8d61b-640.webp",
          "960": "/prompt-template-images/tpl-a74a073d22eb83-53b5e8d61b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:48:07.074Z"
    },
    {
      "id": "tpl-0c469ab94dbdd1",
      "slug": "natural-beauty-fashion-photos-woman-in-knit-dress-and-strawberry",
      "title": "Natural Beauty Fashion Photos: Woman in Knit Dress & Strawberry",
      "prompt": "Natural Beauty Fashion Photos: Woman in Knit Dress & Strawberry。Texture of knit dress；Soft textured knit / Boucle；Moisture on strawberry surface。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12688,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/38bff02d60f449628fb8a1b8c77a9d0f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0c469ab94dbdd1-f2225789ae-320.webp",
          "640": "/prompt-template-images/tpl-0c469ab94dbdd1-f2225789ae-640.webp",
          "960": "/prompt-template-images/tpl-0c469ab94dbdd1-f2225789ae-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:48:16.838Z"
    },
    {
      "id": "tpl-f072a5870a3146",
      "slug": "moody-urban-fashion-woman-and-porsche-at-night-gas-station",
      "title": "Moody Urban Fashion: Woman & Porsche at Night Gas Station",
      "prompt": "Moody Urban Fashion: Woman & Porsche at Night Gas Station。wet ground reflecting colorful urban lights；black Porsche GT3 RS；cinematic night lighting。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12902,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b4d975d33df944d7b4b575bcbafded27.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f072a5870a3146-dbb1d74a87-320.webp",
          "640": "/prompt-template-images/tpl-f072a5870a3146-dbb1d74a87-640.webp",
          "960": "/prompt-template-images/tpl-f072a5870a3146-dbb1d74a87-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:48:57.403Z"
    },
    {
      "id": "tpl-beded280051859",
      "slug": "red-haired-woman-s-beauty-routine-with-earrings-and-makeup",
      "title": "Red-haired Woman's Beauty Routine with Earrings & Makeup",
      "prompt": "Red-haired Woman's Beauty Routine with Earrings & Makeup。Reflection in lit mirror applying makeup；Flat lay of earrings on folded beige silk cloth；Dangle Earrings。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12968,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/615d9903f81c4489843b9139fe1a4039.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-beded280051859-f7bf8c9f1a-320.webp",
          "640": "/prompt-template-images/tpl-beded280051859-f7bf8c9f1a-640.webp",
          "960": "/prompt-template-images/tpl-beded280051859-f7bf8c9f1a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:49:07.323Z"
    },
    {
      "id": "tpl-b6d7fb6036d3b3",
      "slug": "cheerful-woman-in-tom-and-jerry-sweater-with-cartoon-pals",
      "title": "Cheerful Woman in Tom & Jerry Sweater with Cartoon Pals",
      "prompt": "Cheerful Woman in Tom & Jerry Sweater with Cartoon Pals。background'. (clean grey-blue backdrop；A stylish person with the same face.；interaction':。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13061,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d5ae9e37992b448799bb7a37c80ef4b6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b6d7fb6036d3b3-6e33ffd520-320.webp",
          "640": "/prompt-template-images/tpl-b6d7fb6036d3b3-6e33ffd520-640.webp",
          "960": "/prompt-template-images/tpl-b6d7fb6036d3b3-6e33ffd520-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:49:41.668Z"
    },
    {
      "id": "tpl-bb78f5f6dd5f08",
      "slug": "redhead-woman-and-pink-panther-fashion-studio-photography",
      "title": "Redhead Woman & Pink Panther: Fashion Studio Photography",
      "prompt": "Redhead Woman & Pink Panther: Fashion Studio Photography。pastel pink knitted sweater, white high-waisted jeans, white/pink sneakers；posing fashionably beside tall 3D Pink Panther；light pastel pink backdrop。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13091,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a4fe5903f9524d888e520e6f87abd062.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-bb78f5f6dd5f08-a3f3b74522-320.webp",
          "640": "/prompt-template-images/tpl-bb78f5f6dd5f08-a3f3b74522-640.webp",
          "960": "/prompt-template-images/tpl-bb78f5f6dd5f08-a3f3b74522-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:49:52.783Z"
    },
    {
      "id": "tpl-73a2e2986a0407",
      "slug": "winter-fashion-in-snowy-forest-cheerful-woman-portrait",
      "title": "Winter Fashion in Snowy Forest - Cheerful Woman Portrait",
      "prompt": "Winter Fashion in Snowy Forest - Cheerful Woman Portrait。Snowy forest road, pine trees, winter day；Lifestyle collage, social media photo dump, energetic, winter travel, photorealistic；3x3 grid collage of young woman in winter forest。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13123,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f089843dc6ea4fee93314cc48fe66c7e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-73a2e2986a0407-fd984399fb-320.webp",
          "640": "/prompt-template-images/tpl-73a2e2986a0407-fd984399fb-640.webp",
          "960": "/prompt-template-images/tpl-73a2e2986a0407-fd984399fb-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:50:03.609Z"
    },
    {
      "id": "tpl-9fc0eb48445dea",
      "slug": "bohemian-fashion-woman-in-red-dress-mirror-selfie-cafe",
      "title": "Bohemian Fashion: Woman in Red Dress Mirror Selfie Cafe",
      "prompt": "Bohemian Fashion: Woman in Red Dress Mirror Selfie Cafe。Soft, ambient cafe lighting with gentle highlights；Charming floral cafe interior；Different dress color or style。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13149,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/41dee3fd142d4ab8baabce0f1b0a1ff3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9fc0eb48445dea-2b99edc6f8-320.webp",
          "640": "/prompt-template-images/tpl-9fc0eb48445dea-2b99edc6f8-640.webp",
          "960": "/prompt-template-images/tpl-9fc0eb48445dea-2b99edc6f8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:50:17.537Z"
    },
    {
      "id": "tpl-9def53ed9f60e8",
      "slug": "elegant-black-dress-woman-christmas-staircase-fashion-shoot",
      "title": "Elegant Black Dress Woman Christmas Staircase Fashion Shoot",
      "prompt": "Elegant Black Dress Woman Christmas Staircase Fashion Shoot。the same black strapless mini dress with a fitted bodice and tiered ruffle skirt, paired with sheer black pantyhose；To her right is a large Christmas tree richly decorated with warm gold, bronze, and brown ornaments, baubles, and warm white string lights.；standing on a curved staircase with dark wrought-iron railings and stone steps. She poses looking back over her right shoulder towards the camera, with her left hand resting on the dark banister.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13234,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bf81700361094dc59c09bc41345e5569.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9def53ed9f60e8-175319649a-320.webp",
          "640": "/prompt-template-images/tpl-9def53ed9f60e8-175319649a-640.webp",
          "960": "/prompt-template-images/tpl-9def53ed9f60e8-175319649a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:50:49.275Z"
    },
    {
      "id": "tpl-ab93825a117312",
      "slug": "casual-black-athleisure-mirror-selfie-woman-s-style",
      "title": "Casual Black Athleisure Mirror Selfie - Woman's Style",
      "prompt": "Casual Black Athleisure Mirror Selfie - Woman's Style。taking mirror selfie；casual；photorealistic。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13259,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f273d6a1bdda489abeb9e23765a93df0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ab93825a117312-cd5da8a7b7-320.webp",
          "640": "/prompt-template-images/tpl-ab93825a117312-cd5da8a7b7-640.webp",
          "960": "/prompt-template-images/tpl-ab93825a117312-cd5da8a7b7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:51:10.475Z"
    },
    {
      "id": "tpl-24a3053bdc6b42",
      "slug": "elegant-woman-in-luxury-car-fashion-portrait",
      "title": "Elegant Woman in Luxury Car - Fashion Portrait",
      "prompt": "Elegant Woman in Luxury Car - Fashion Portrait。Shallow - subject in sharp focus, background dashboard softly blurred；High-waisted cream linen wide-leg trousers, partially visible；Glossy nude pink lips, highlighted cheekbones catching the golden light。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13368,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "blocked",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-58fea4a4ab019d",
      "slug": "elegant-woman-in-red-satin-dress-grand-hall-fashion",
      "title": "Elegant Woman in Red Satin Dress | Grand Hall Fashion",
      "prompt": "Elegant Woman in Red Satin Dress | Grand Hall Fashion。Deep crimson red satin mini dress, fit-and-flare silhouette, plunging V-neckline, spaghetti straps, tiered ruffled skirt；Neutral, elegant, contemplative；Grand museum interior (Victorian/Classical architecture)。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13436,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f05f55e5b8494c7ab21dec7f9632f848.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-58fea4a4ab019d-218769ff3f-320.webp",
          "640": "/prompt-template-images/tpl-58fea4a4ab019d-218769ff3f-640.webp",
          "960": "/prompt-template-images/tpl-58fea4a4ab019d-218769ff3f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:51:41.140Z"
    },
    {
      "id": "tpl-4cf5904d955d10",
      "slug": "woman-in-little-black-dress-outside-dior-store-fashion",
      "title": "Woman in Little Black Dress outside Dior Store - Fashion",
      "prompt": "Woman in Little Black Dress outside Dior Store - Fashion。High-end fashion photography of a young woman standing in front of a luxury Dior storefront.；Black off-the-shoulder mini dress featuring a structured bodice with a folded neckline and a flared, pleated skater-style skirt.；Long, straight black hair, center-parted, resting over shoulders.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13477,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b1631e45e3344742b1d134db308a4340.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4cf5904d955d10-9f3bc9e46a-320.webp",
          "640": "/prompt-template-images/tpl-4cf5904d955d10-9f3bc9e46a-640.webp",
          "960": "/prompt-template-images/tpl-4cf5904d955d10-9f3bc9e46a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:51:53.123Z"
    },
    {
      "id": "tpl-e991b8ab4d49c3",
      "slug": "elegant-woman-in-neutral-tones-fashion-photography",
      "title": "Elegant Woman in Neutral Tones - Fashion Photography",
      "prompt": "Elegant Woman in Neutral Tones - Fashion Photography。motion blur, soft shadows；female mid-turn, natural elegance；soft tailored outfit with artistic draping。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13576,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c3485b0a955a4e77b5b318672b257c24.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e991b8ab4d49c3-6b2e1109d2-320.webp",
          "640": "/prompt-template-images/tpl-e991b8ab4d49c3-6b2e1109d2-640.webp",
          "960": "/prompt-template-images/tpl-e991b8ab4d49c3-6b2e1109d2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:52:14.552Z"
    },
    {
      "id": "tpl-b6c1a14480b13d",
      "slug": "blonde-woman-and-pink-panther-fashion-portrait-pink-aesthetic",
      "title": "Blonde Woman & Pink Panther Fashion Portrait | Pink Aesthetic",
      "prompt": "Blonde Woman & Pink Panther Fashion Portrait | Pink Aesthetic。posing fashionably beside a tall 3D Pink Panther；Pink Panther striking a suave pose next to the person；light pastel pink backdrop。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13630,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/04d2d304d7aa476f8bbeb31fe1573828.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b6c1a14480b13d-fa99bf022d-320.webp",
          "640": "/prompt-template-images/tpl-b6c1a14480b13d-fa99bf022d-640.webp",
          "960": "/prompt-template-images/tpl-b6c1a14480b13d-fa99bf022d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:52:36.072Z"
    },
    {
      "id": "tpl-598ea0564fe6f1",
      "slug": "bohemian-fashion-woman-in-marketplace-travel-style",
      "title": "Bohemian Fashion Woman in Marketplace - Travel Style",
      "prompt": "Bohemian Fashion Woman in Marketplace - Travel Style。bohemian teal and orange patterned maxi dress；travel_photography。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13724,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/33fa080a28444956bef5633712d49e91.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-598ea0564fe6f1-7187440d65-320.webp",
          "640": "/prompt-template-images/tpl-598ea0564fe6f1-7187440d65-640.webp",
          "960": "/prompt-template-images/tpl-598ea0564fe6f1-7187440d65-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:52:46.770Z"
    },
    {
      "id": "tpl-8c3e93fe642411",
      "slug": "elegant-woman-in-satin-evening-gown-photorealistic-fashion",
      "title": "Elegant Woman in Satin Evening Gown | Photorealistic Fashion",
      "prompt": "Elegant Woman in Satin Evening Gown | Photorealistic Fashion。modern night interior with soft lighting；subtle shadows, warm glow；calm confidence, unreadable。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13770,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5f39e366bdbc4cfd9734d169eb5620a5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8c3e93fe642411-de424d7d0f-320.webp",
          "640": "/prompt-template-images/tpl-8c3e93fe642411-de424d7d0f-640.webp",
          "960": "/prompt-template-images/tpl-8c3e93fe642411-de424d7d0f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:53:18.851Z"
    },
    {
      "id": "tpl-ef2abf86aca5c7",
      "slug": "stylish-young-woman-selfie-with-earmuffs-on-airplane",
      "title": "Stylish Young Woman Selfie with Earmuffs on Airplane",
      "prompt": "Stylish Young Woman Selfie with Earmuffs on Airplane。close-up to medium shot selfie；light brown fluffy earmuffs；inside airplane cabin。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13839,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/257dd17488954f2f924ba9f8bc670750.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ef2abf86aca5c7-db1d4d57b8-320.webp",
          "640": "/prompt-template-images/tpl-ef2abf86aca5c7-db1d4d57b8-640.webp",
          "960": "/prompt-template-images/tpl-ef2abf86aca5c7-db1d4d57b8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:53:41.933Z"
    },
    {
      "id": "tpl-fad839bb528eb8",
      "slug": "stylish-woman-on-harley-davidson-motorcycle-at-night",
      "title": "Stylish Woman on Harley-Davidson Motorcycle at Night",
      "prompt": "Stylish Woman on Harley-Davidson Motorcycle at Night。leaning forward over the gas tank of a motorcycle, looking toward the camera；upscale urban street at night；Harley-Davidson。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 14044,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0a6bb91eb6014ecd8e68399c110d8051.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fad839bb528eb8-3a64068b63-320.webp",
          "640": "/prompt-template-images/tpl-fad839bb528eb8-3a64068b63-640.webp",
          "960": "/prompt-template-images/tpl-fad839bb528eb8-3a64068b63-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:55:06.286Z"
    },
    {
      "id": "tpl-881ee7bc190995",
      "slug": "confident-woman-on-harley-davidson-motorcycle-fashion",
      "title": "Confident Woman on Harley-Davidson Motorcycle Fashion",
      "prompt": "Confident Woman on Harley-Davidson Motorcycle Fashion。confident, free-spirited, cinematic；subtle reflections on motorcycle and watch；glancing confidently to the side。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 14092,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7db69f2ff4fa4b27abdb7da3d50f6b27.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-881ee7bc190995-8adda13a9f-320.webp",
          "640": "/prompt-template-images/tpl-881ee7bc190995-8adda13a9f-640.webp",
          "960": "/prompt-template-images/tpl-881ee7bc190995-8adda13a9f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:55:26.810Z"
    },
    {
      "id": "tpl-996c4298b82b2f",
      "slug": "summer-beach-fashion-young-woman-in-pink-and-blue",
      "title": "Summer Beach Fashion: Young Woman in Pink & Blue",
      "prompt": "Summer Beach Fashion: Young Woman in Pink & Blue。candid beach lifestyle photo；fitted, beachwear style；light, carefree, summery。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 14171,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5d4bf9c565b044b6b1a8665c4493bbe4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-996c4298b82b2f-6d3b1287f4-320.webp",
          "640": "/prompt-template-images/tpl-996c4298b82b2f-6d3b1287f4-640.webp",
          "960": "/prompt-template-images/tpl-996c4298b82b2f-6d3b1287f4-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:55:37.199Z"
    },
    {
      "id": "tpl-8cf1309734ee35",
      "slug": "ink-etched-family-portrait-by-gdb",
      "title": "Ink-Etched Family Portrait (by @gdb)",
      "prompt": "A black-and-white hand-drawn family portrait in the style of detailed pen-and-ink crosshatching on textured white paper, showing 4 people seated closely together in a casual candid composition. On the left, an adult man in a dark baseball cap worn backward and a dark T-shirt leans into the frame, with a crossbody sling bag worn across his chest and visible zipper details. On the right, an adult woman with curly hair tied up in a loose high bun wears a light T-shirt with large collegiate block letters reading {argument name=\"shirt text\" default=\"CITY\"}. In the center are 2 young children sitting close together, both with short curly hair and matching light-colored T-shirts printed all over wi",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 947,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/52a2037e60954daeada753250fae70f3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8cf1309734ee35-e4ea5e6a3c-320.webp",
          "640": "/prompt-template-images/tpl-8cf1309734ee35-e4ea5e6a3c-640.webp",
          "960": "/prompt-template-images/tpl-8cf1309734ee35-e4ea5e6a3c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:55:58.911Z"
    },
    {
      "id": "tpl-afde95fc411991",
      "slug": "wimbledon-broadcast-crowd-shot-by-mavericks-prod",
      "title": "Wimbledon Broadcast Crowd Shot (by @Mavericks_Prod)",
      "prompt": "A screenshot from a live Wimbledon TV broadcast during a packed Centre Court match. The camera cuts to the audience, an unbelievably attractive woman in her 20s with long black hair, flawless skin, elegant makeup, and a luxurious aura, seated in the VIP section wearing a sophisticated cream-white low-cut summer outfit with subtle jewelry. She smiles naturally while reacting to the match, unaware she's on camera. Wealthy spectators and champagne glasses around her, old-money tennis atmosphere, shallow depth of field. Full live tennis broadcast overlay: scoreboard, network watermark, broadcast graphics, 16:9 aspect ratio. The image looks exactly like a real TV screenshot, telephoto broadcast l",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 974,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d360e9daf4b04ea7aa88434eae90acd7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-afde95fc411991-e09a6fe14e-320.webp",
          "640": "/prompt-template-images/tpl-afde95fc411991-e09a6fe14e-640.webp",
          "960": "/prompt-template-images/tpl-afde95fc411991-e09a6fe14e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:56:38.868Z"
    },
    {
      "id": "tpl-f061731eb83015",
      "slug": "dark-silhouette-rim-light-portrait-by-xsydneyfan",
      "title": "Dark Silhouette Rim-Light Portrait (by @XSydneyFan)",
      "prompt": ".Ultra realistic dark silhouette portrait of a stylish young woman in side profile pose, deep black background, dramatic rim lighting highlighting hair and jawline edges, wearing stylish trendy sunglasses, DSLR photography style, ultra HD 8K, realistic facial outline, premium fashion edition 2:3ar",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1232,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bf47a76e20e24f008e89a87f1aecc7d8.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f061731eb83015-fc70041a94-320.webp",
          "640": "/prompt-template-images/tpl-f061731eb83015-fc70041a94-640.webp",
          "960": "/prompt-template-images/tpl-f061731eb83015-fc70041a94-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:59:41.204Z"
    },
    {
      "id": "tpl-273a714590a796",
      "slug": "woman-in-crystal-perfume-bottle-by-mrdasonx",
      "title": "Woman in Crystal Perfume Bottle (by @MrDasOnX)",
      "prompt": "Ultra-realistic surreal conceptual portrait of a distressed middle-aged woman trapped inside an elegant transparent crystal perfume bottle filled halfway with pale pink perfume liquid. The bottle is upright and centered, featuring a faceted glass body with a luxurious gold spray nozzle and cap. Tiny condensation droplets and fine mist residue cling to the inner glass, catching the light. A soft layer of shimmering perfume vapor swirls inside the bottle around the woman’s shoulders and chest leve",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1273,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7def6fce2ebd44d49639ed5f27521440.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-273a714590a796-85142b8712-320.webp",
          "640": "/prompt-template-images/tpl-273a714590a796-85142b8712-640.webp",
          "960": "/prompt-template-images/tpl-273a714590a796-85142b8712-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:00:22.732Z"
    },
    {
      "id": "tpl-8bf699979e847d",
      "slug": "night-outdoor-portrait-by-chatgptpaglu",
      "title": "Night Outdoor Portrait (by @chatgptpaglu)",
      "prompt": "A medium-shot photograph of a young woman with wavy, light brown hair and soft, rosy makeup, posing outdoors at night. She is wearing a slightly oversized black t-shirt with small white text on the left chest, pulling the shirt up slightly with both hands to reveal her midriff and the waistband of black underwear peeking out from low-rise, faded blue denim jeans. She is leaning against a white metal balcony railing, looking off-camera to her right with a neutral expression. The background",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1315,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9559e18cdaad4ba9a2dbbb1d540109f4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8bf699979e847d-bd111b3552-320.webp",
          "640": "/prompt-template-images/tpl-8bf699979e847d-bd111b3552-640.webp",
          "960": "/prompt-template-images/tpl-8bf699979e847d-bd111b3552-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:01:36.005Z"
    },
    {
      "id": "tpl-2b04e2e6c61d72",
      "slug": "joyful-street-portrait-with-drink-by-rovvmut",
      "title": "Joyful Street Portrait with Drink (by @rovvmut_)",
      "prompt": "A medium low-angle shot of a joyful young woman with dark hair and straight bangs, smiling brightly against a vibrant, clear blue sky. She wears a white graphic t-shirt featuring three landscape panels. In her right hand, she holds up a clear plastic cup filled with bright orange juice, featuring a white hand-drawn doodle of a smiley face on the side. Whimsical, hand-drawn white digital doodles are overlaid around her: stylized headphones rest around her neck, musical notes and stars float above her head, and glowing white motion outlines trace her silhouette. Bright, natural daylight evenly illuminates the scene, enhancing the playful, energetic pop-art aesthetic.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1343,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/76752f15834b4c7e85e0a84756403a90.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2b04e2e6c61d72-e14bac7736-320.webp",
          "640": "/prompt-template-images/tpl-2b04e2e6c61d72-e14bac7736-640.webp",
          "960": "/prompt-template-images/tpl-2b04e2e6c61d72-e14bac7736-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:02:06.013Z"
    },
    {
      "id": "tpl-db46e5ea56e97c",
      "slug": "travel-selfie-portrait-reference-by-linaa-ai",
      "title": "Travel Selfie Portrait Reference (by @linaa_ai)",
      "prompt": "Asset type: portrait image for social post Primary request: create a photorealistic travel selfie portrait, using the uploaded portrait photo as the appearance reference for the person. Scene/backdrop: an open alpine meadow under a vivid blue sky, surrounded overhead by hundreds of colorful Tibetan prayer flags arranged in a circular spiral canopy, with distant green hills and bright daylight. Subject: a young woman with the recognizable facial structure, eyes, hairline direction, and natural skin texture from the uploaded portrait photo, wearing a bright cyan outdoor jacket, white hiking pants, a mustard yellow knit beanie, sunglasses resting on the hat, and a backpack. Style/medium: ultra-",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1404,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a4316e3ca3c2435c8fcad9548161730f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-db46e5ea56e97c-6bd3a75ae5-320.webp",
          "640": "/prompt-template-images/tpl-db46e5ea56e97c-6bd3a75ae5-640.webp",
          "960": "/prompt-template-images/tpl-db46e5ea56e97c-6bd3a75ae5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:02:31.703Z"
    },
    {
      "id": "tpl-a48e9efef8af43",
      "slug": "ultra-realistic-phone-style-portrait-by-aiwithzohaib",
      "title": "Ultra-Realistic Phone-Style Portrait (by @AiwithZohaib)",
      "prompt": "Ultra-realistic, almost indistinguishable-from-real close-up portrait in a casual phone photo style. Use the uploaded image as the identity reference, fully preserving the natural appearance and atmosphere of the same woman. The face and overall appearance must remain 100% identical to the reference image, without altering any facial proportions or features. Do not change: Lip shape or lip size Eyes Nose Face shape Overall facial harmony and identity Full photorealism. No AI-generated feeling — it should look like a random candid photo taken on a mobile phone. Not a polished glossy beauty shoot, but a natural, slightly imperfect phone snapshot. Close-up portrait framed to shoulder level. Sof",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1431,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/973b4fb64c474ca296452d0397a878f8.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a48e9efef8af43-befbc73e01-320.webp",
          "640": "/prompt-template-images/tpl-a48e9efef8af43-befbc73e01-640.webp",
          "960": "/prompt-template-images/tpl-a48e9efef8af43-befbc73e01-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:02:42.067Z"
    },
    {
      "id": "tpl-ab23e161df76b7",
      "slug": "matcha-goddess-beauty-portrait-by-nyaiibubu",
      "title": "Matcha Goddess Beauty Portrait (by @NyaiiBubu)",
      "prompt": "👇 ultra realistic surreal beauty editorial portrait, matcha goddess aesthetic, ethereal asian woman with glossy dewy skin, face covered in dripping liquid matcha cream, surreal cosmetic food fusion, floating matcha cubes, matcha powder particles, green tea mousse textures, edible haute couture, cinematic luxury skincare campaign, dreamy fantasy atmosphere, glowing olive green tones, wet reflective skin, delicate floral accents, suspended droplets, gold flakes, soft volumetric lighting, macro beauty photography, shallow depth of field, highly detailed skin texture, elegant feminine pose, luxury fashion editorial, surreal dessert inspired composition, artistic liquid dynamics, photorealistic,",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1541,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a2e46bcf06de43c9b4243b1aaba8f0d2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ab23e161df76b7-4a07045437-320.webp",
          "640": "/prompt-template-images/tpl-ab23e161df76b7-4a07045437-640.webp",
          "960": "/prompt-template-images/tpl-ab23e161df76b7-4a07045437-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:03:03.886Z"
    },
    {
      "id": "tpl-3f58c03f6ba32a",
      "slug": "vintage-camera-lcd-screen-shot-by-zaraelira4",
      "title": "Vintage Camera LCD Screen Shot (by @ZaraElira4)",
      "prompt": "A realistic close-up shot of a small digital camera screen glowing brightly in a dark indoor environment. Displayed on the LCD is a candid early-2010s style photograph of a young East Asian woman with long dark wavy hair standing beside a wooden shelf packed tightly with colorful comic books and magazines. She wears a black spaghetti-strap top with a loose white cardigan hanging casually from both shoulders and faded blue jeans. Captured mid-laugh while turning her face slightly sideways, her expression feels spontaneous and natural, with hair falling softly across part of her cheek. The harsh direct flash from the compact camera creates strong highlights on her face and cardigan while flatt",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1556,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8445534132b84d3e9802076cc948d11c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3f58c03f6ba32a-c174813d6b-320.webp",
          "640": "/prompt-template-images/tpl-3f58c03f6ba32a-c174813d6b-640.webp",
          "960": "/prompt-template-images/tpl-3f58c03f6ba32a-c174813d6b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:03:13.208Z"
    },
    {
      "id": "tpl-9c6a60b1320266",
      "slug": "cinematic-b-and-w-portrait-by-ciri-ai",
      "title": "Cinematic B&W Portrait (by @Ciri_ai)",
      "prompt": "A hyper-realistic, cinematic black-and-white portrait of a woman caught in mid-motion, her face partially obscured by sweeping hair strands and intentional motion blur. The subject is framed from the shoulders up, slightly off-center, with her head turning laterally as if pulled by momentum. Long exposure creates luminous horizontal light streaks behind her, suggesting an urban night environment dissolving into abstraction.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1679,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f38a4ee1c5714eb891e32ea03711c623.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9c6a60b1320266-d407a6adf9-320.webp",
          "640": "/prompt-template-images/tpl-9c6a60b1320266-d407a6adf9-640.webp",
          "960": "/prompt-template-images/tpl-9c6a60b1320266-d407a6adf9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:03:59.635Z"
    },
    {
      "id": "tpl-44bdcb0f74f25d",
      "slug": "cinematic-lifestyle-outdoor-portrait-by-aiwithaly",
      "title": "Cinematic Lifestyle Outdoor Portrait (by @aiwithaly)",
      "prompt": "Cinematic lifestyle portrait of a cheerful young woman sitting on a rustic wooden bench in a lush botanical courtyard, holding an iced coffee in a clear plastic cup with straw, smiling naturally at camera, short wavy dark brown hair, soft natural makeup, oversized pastel pink graphic t-shirt with vintage sun illustration, white shorts, white chunky sneakers with orange soles, one leg extended toward camera creating dramatic perspective, relaxed summer aesthetic, golden hour sunlight filtering through tropical leaves, luxury university campus or historic garden background with stone architecture and large windows, shallow depth of field, warm tones, candid street photography style, ultra real",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1757,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6a5f1dc890404fcd85fc24d17ea31996.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-44bdcb0f74f25d-f2ca0ab7c0-320.webp",
          "640": "/prompt-template-images/tpl-44bdcb0f74f25d-f2ca0ab7c0-640.webp",
          "960": "/prompt-template-images/tpl-44bdcb0f74f25d-f2ca0ab7c0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:05:04.545Z"
    },
    {
      "id": "tpl-351f9bcd2ff473",
      "slug": "cat-eye-glasses-fashion-portrait-by-chillaikalan",
      "title": "Cat-Eye Glasses Fashion Portrait (by @ChillaiKalan__)",
      "prompt": "A young woman with long, dark hair and striking cat-eye glasses is captured in a studio portrait against a solid blue background. She is turned away from the camera, looking over her shoulder with a confident gaze. Her makeup is subtle, with a focus on rosy cheeks and a warm-toned lipstick. She wears a dark, high-necked top that accentuates the curve of her neck and shoulder. The lighting is dramatic, with a strong light source from the left, casting a bright highlight on her face and shoulder, while the right side of her body and hair fall into shadow. The overall mood is sophisticated and alluring.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1823,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/356f271cdb664c7980788454899375e6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-351f9bcd2ff473-e8dfc97952-320.webp",
          "640": "/prompt-template-images/tpl-351f9bcd2ff473-e8dfc97952-640.webp",
          "960": "/prompt-template-images/tpl-351f9bcd2ff473-e8dfc97952-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:05:15.042Z"
    },
    {
      "id": "tpl-f271b70c9d9e37",
      "slug": "korean-beauty-identity-portrait-by-linaa-ai",
      "title": "Korean Beauty Identity Portrait (by @linaa_ai)",
      "prompt": "Using the provided reference image, create an ultra-realistic Korean street-fashion editorial portrait of a stylish young woman posing outdoors beside a bold orange wall under bright natural sunlight. She is wearing an oversized pastel mint green blazer with structured tailoring, matching high-waisted wide-leg trousers, and a fitted dark brown cropped tube top. Add luxury silver accessories including statement earrings, layered necklaces, rings, and a decorative chain detail attached to the blazer. She has long sleek straight dark brown hair, flawless porcelain skin, soft glam makeup with nude matte lips, sharp brows, and a confident elegant expression. Relaxed fashion pose with one hand aga",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1875,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "blocked",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-7e04cc6a0d175d",
      "slug": "dreamy-japanese-summer-portrait-prompt",
      "title": "Dreamy Japanese Summer Portrait [Prompt**:]",
      "prompt": "Ultra-cinematic Japanese street photography, dreamy summer afternoon in a quiet suburban neighborhood, beautiful young woman standing among vibrant wildflowers and orange cosmos flowers, towering cumulus clouds filling the sky, huge rainbow arching overhead, warm golden hour sunlight, nostalgic anime-inspired atmosphere, soft wind moving hair, candid pose looking into the distance, utility poles and power lines creating urban Japanese aesthetics, shallow depth of field, foreground flower bokeh, rich colors, Kodak Portra 400 film look, dreamy glow, volumetric lighting, natural skin tones, highly detailed face, environmental portrait, low-angle composition, storytelling photography, cozy summe",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2125,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cd4cf82127b74fe8bc902ec30f7f093f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7e04cc6a0d175d-6d0e09f4ec-320.webp",
          "640": "/prompt-template-images/tpl-7e04cc6a0d175d-6d0e09f4ec-640.webp",
          "960": "/prompt-template-images/tpl-7e04cc6a0d175d-6d0e09f4ec-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:07:42.990Z"
    },
    {
      "id": "tpl-50ed3c806f6543",
      "slug": "pop-fashion-photobooth-strips-prompt",
      "title": "Pop-Fashion Photobooth Strips [Prompt**:]",
      "prompt": "Photorealistic modern pop-fashion photobooth strip arrangement placed on a colorful gradient acrylic desk, top-down cinematic view. Three strips with SAME stylish young woman, consistent identity in all portraits. Left strip: powerful direct gaze, edgy fashion pose, slightly tilted head, confident attitude. Center strip: warm natural smile, candid moment, soft laughing expression, relaxed elegance. Right strip: artistic over-the-shoulder glance, calm eyes-closed pose, reflective dreamy look, gentle emotion. Vibrant contemporary aesthetic with neon pink, sky blue, and warm yellow highlights, ultra-clean studio lighting, glossy printed strips with crisp edges. Modern props like LED lights, fas",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2156,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ba9f91fec8f2443ebf7a56f33291dd2f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-50ed3c806f6543-3b8f3a89d5-320.webp",
          "640": "/prompt-template-images/tpl-50ed3c806f6543-3b8f3a89d5-640.webp",
          "960": "/prompt-template-images/tpl-50ed3c806f6543-3b8f3a89d5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:07:54.697Z"
    },
    {
      "id": "tpl-47503c4af8635e",
      "slug": "boho-stone-wall-portrait-by-iamaiistudio",
      "title": "Boho Stone-Wall Portrait (by @iamaiistudio)",
      "prompt": "Create an ultra-photorealistic 3:4 editorial portrait of a young adult woman with Ana de Armas-inspired features, a fair natural complexion, a slender fit build, and long dark chestnut-brown hair in loose, slightly messy waves that fall across part of her face. She stands in soft daylight against a textured stone masonry wall made of large irregular gray and beige blocks, giving the scene a natural outdoor or semi-outdoor architectural backdrop. Pose her leaning lightly against the wall with her body angled, looking downward instead of at the camera for a candid, introspective mood. Her right hand rests gently near her chest and neck with relaxed, splayed fingers, while her left hand hangs b",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2178,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c13df5ab90f24e0cb4fca40eeb9e92d0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-47503c4af8635e-e6a0504402-320.webp",
          "640": "/prompt-template-images/tpl-47503c4af8635e-e6a0504402-640.webp",
          "960": "/prompt-template-images/tpl-47503c4af8635e-e6a0504402-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:08:16.834Z"
    },
    {
      "id": "tpl-5f25cdf4851820",
      "slug": "black-and-white-fashion-grid-by-j-smeaton99",
      "title": "Black-and-White Fashion Grid (by @j_smeaton99)",
      "prompt": "Edit the photo while preserving the subject’s exact facial features and identity. Create a high-resolution vertical portrait composition (9:16), ultra-detailed, sharp focus throughout, no background blur, rendered with a premium 8K editorial finish. Design the image as a sophisticated black-and-white fashion portrait collage arranged in a 2×3 grid, featuring six unique frames of the same young woman in a clean, minimalist indoor studio environment. The overall aesthetic should feel elegant, cinematic, intimate, and effortlessly stylish, inspired by timeless monochrome fashion editorials and luxury magazine photography. Hair is long, reaching the waist, colored a cool ash-brown with subtle gr",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2352,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4ae3abb9dd6d46818a9f8e9f15bdf8d9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5f25cdf4851820-3a49df0ce0-320.webp",
          "640": "/prompt-template-images/tpl-5f25cdf4851820-3a49df0ce0-640.webp",
          "960": "/prompt-template-images/tpl-5f25cdf4851820-3a49df0ce0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:11:05.881Z"
    },
    {
      "id": "tpl-c5a990520fd04a",
      "slug": "monochrome-vector-vogue-portrait-by-noorlewisx",
      "title": "Monochrome Vector Vogue Portrait (by @noorlewisx)",
      "prompt": "Transform the subject into a striking high-contrast monochrome vector portrait, rendered in a premium black-and-white comic book illustration style with crisp cel-shading, bold geometric shapes, and ultra-clean vector linework. Preserve the subject's facial features, hairstyle, expression, and overall likeness with high accuracy. The subject is a stylish young woman with long flowing hair, wearing an open dark oversized shirt layered over a fitted white crew-neck T-shirt. She accessorizes with a minimalist square pendant necklace, elegant earrings, and a pair of fashionable sunglasses resting naturally on top of her head, seamlessly integrated into her hairstyle. Illuminate the portrait with",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2592,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/faf53080b6e1432aa8578494adf21da0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c5a990520fd04a-e2faa2e20f-320.webp",
          "640": "/prompt-template-images/tpl-c5a990520fd04a-e2faa2e20f-640.webp",
          "960": "/prompt-template-images/tpl-c5a990520fd04a-e2faa2e20f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:12:31.125Z"
    },
    {
      "id": "tpl-e0a02e47bdafa5",
      "slug": "winter-wolf-cinematic-portrait-by-iamaiistudio",
      "title": "Winter Wolf Cinematic Portrait (by @iamaiistudio)",
      "prompt": "://t.co/1ZKQNHa8h4 prompt: Cinematic winter portrait of a young pale-skinned woman with long dark snow-dusted hair, standing closely behind a majestic gray wolf. She wears a fur-lined heavy winter coat, expression intense, calm and soulful, direct eye contact with camera. The wolf is calm and watchful with thick frost-covered fur and sharp golden intelligent eyes. Both subjects centered symmetrically, ultra-sharp focus on both sets of eyes. Background: softly blurred snow-covered forest, gentle snowfall, cold mist. Lighting: soft natural overcast winter light with diffused shadows, cinematic cool tones, subtle warmth in skin and eyes. Style: fine-art wildlife and cinematic portrait photograp",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2704,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/829262e81f55482fb84619ff59d0fed6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e0a02e47bdafa5-63aea9c004-320.webp",
          "640": "/prompt-template-images/tpl-e0a02e47bdafa5-63aea9c004-640.webp",
          "960": "/prompt-template-images/tpl-e0a02e47bdafa5-63aea9c004-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:13:59.751Z"
    },
    {
      "id": "tpl-c3fa29f5e41a8f",
      "slug": "italian-summer-afternoon-portrait-by-iamaiistudio",
      "title": "Italian Summer Afternoon Portrait (by @iamaiistudio)",
      "prompt": "prompt: Ultra photorealistic portrait of a young woman with long straight dark brown hair, sun-kissed glowing skin, seated at an outdoor cafe table. She's wearing a white vintage Swiss dot corset mini dress with a sweetheart neckline, ruffled cap sleeves, front lace-up ribbon detailing, fitted bodice, and slightly sheer ruffled hem. Hands raised playfully covering her eyes, head tilted back laughing, red manicured nails, thin bracelet and ring on left hand. Setting: luxury outdoor hotel terrace at Hotel Florence, historic yellow building with \"HOTEL FLORENCE\" signage, lush green mountains in the background, cloudy blue sky, vintage globe street lamps, round glass-top table with two white cer",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2767,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/14aa564b6d4c458ba2a27f126dda246d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c3fa29f5e41a8f-f4f2496e70-320.webp",
          "640": "/prompt-template-images/tpl-c3fa29f5e41a8f-f4f2496e70-640.webp",
          "960": "/prompt-template-images/tpl-c3fa29f5e41a8f-f4f2496e70-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:14:52.315Z"
    },
    {
      "id": "tpl-91c3c264a0c0fe",
      "slug": "rainy-night-cinematic-portrait-by-iamaiistudio",
      "title": "Rainy Night Cinematic Portrait (by @iamaiistudio)",
      "prompt": "Full prompt: Photorealistic cinematic close-up of a young woman in her early 30s, standing in a downpour at night with arms stretched wide and head tilted back, eyes shut, embracing the rain. Warm golden-orange backlight from the left side catches each raindrop, turning them into glowing particles around her silhouette. Soaking wet black tee clinging to her figure, water beading on her skin. Deep contrast between the dark background and the fiery orange sidelight. Expression radiates liberation and calm. Shot on an 85mm lens, f/1.8, 8K, shallow depth of field, vertical framing, dramatic cinematic atmosphere. #AIart #GPTImage2",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2784,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/32aff6e9644c488e917a8af1b2fba73c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-91c3c264a0c0fe-290a627448-320.webp",
          "640": "/prompt-template-images/tpl-91c3c264a0c0fe-290a627448-640.webp",
          "960": "/prompt-template-images/tpl-91c3c264a0c0fe-290a627448-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:15:02.181Z"
    },
    {
      "id": "tpl-b7ddc4f1b4bd70",
      "slug": "cozy-pastel-morning-overhead-lifestyle-by-iamaiistudio",
      "title": "Cozy Pastel Morning Overhead Lifestyle (by @iamaiistudio)",
      "prompt": "prompt: Overhead lifestyle photo shot from a slightly tilted high angle, looking down at a cozy bed. A slim young woman lies on her back with a relaxed, lazy weekend morning energy. She has long, slightly tousled straight black hair with subtle pink highlights spread softly across a purple pillow, tidy bangs framing her face. Her makeup is a soft East Asian aesthetic with noticeable pink blush and lightly parted glossy lips, her gaze directed softly up into the camera. She wears a white ribbed cotton camisole with front buttons and lace trim, slightly raised at the waist, paired with light pink satin pajama shorts. Her right arm rests casually behind her head, exposing her smooth underarm an",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2827,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a9a553d7b7354486a5499fa2b60340e1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b7ddc4f1b4bd70-0c076caccc-320.webp",
          "640": "/prompt-template-images/tpl-b7ddc4f1b4bd70-0c076caccc-640.webp",
          "960": "/prompt-template-images/tpl-b7ddc4f1b4bd70-0c076caccc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:15:24.336Z"
    },
    {
      "id": "tpl-57a615dab5706f",
      "slug": "stylish-woman-outside-cozy-cafe-portrait-by-sakshi-007",
      "title": "Stylish Woman Outside Cozy Café Portrait (by @sakshi___007)",
      "prompt": "An ultra-realistic lifestyle portrait of a stylish young woman standing outside a modern cozy café during daytime, smiling warmly at the camera with a soft natural expression. She has short wavy platinum blonde hair styled in a soft messy bob, glowing skin, minimal natural makeup, and a fresh effortless beauty aesthetic. She wears an elegant oversized white blouse with soft flowing sleeves, tucked into high-waisted beige wide-leg trousers with a black belt, creating a classy minimalist fashion look. In one hand she holds an iced latte in a transparent cup, and in the other she gently carries a small adorable apricot toy poodle dog wearing a cute dark bandana. Warm natural sunlight, cozy café",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2844,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/68e8ea9a641741da86e34d33ae17b9e4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-57a615dab5706f-4982884c0b-320.webp",
          "640": "/prompt-template-images/tpl-57a615dab5706f-4982884c0b-640.webp",
          "960": "/prompt-template-images/tpl-57a615dab5706f-4982884c0b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:15:58.397Z"
    },
    {
      "id": "tpl-7e2e7c7322798a",
      "slug": "luxury-streetwear-chrome-chair-portrait-by-aiwithlariab",
      "title": "Luxury Streetwear Chrome Chair Portrait (by @AiwithLariab)",
      "prompt": "Ultra-premium fashion editorial poster, luxury streetwear aesthetic, 4:5 portrait composition. A confident young woman sitting casually on a modern chrome chair, wearing an oversized black leather bomber jacket, black oversized t-shirt, baggy black cargo pants, and black-and-white luxury sneakers. Relaxed but powerful pose with one arm resting on the chair and direct eye contact with the camera. Massive bold typography in the background reading: I AM A CREATOR Large beige typography integrated into the composition, partially behind and around the model, creating a premium magazine-cover design. Dark charcoal black studio background with subtle texture and depth. Professional fashion campaign",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2857,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/511b53c985bc46928fb9af5bc58274f4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7e2e7c7322798a-1e3c79358a-320.webp",
          "640": "/prompt-template-images/tpl-7e2e7c7322798a-1e3c79358a-640.webp",
          "960": "/prompt-template-images/tpl-7e2e7c7322798a-1e3c79358a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:16:08.360Z"
    },
    {
      "id": "tpl-f5b227ab6a18c3",
      "slug": "doll-ification-concept-portrait-by-iamaiistudio",
      "title": "Doll-ification Concept Portrait (by @iamaiistudio)",
      "prompt": "prompt: Ultra-realistic full-body portrait of a woman posed exactly as in the reference photo, stylized as a sleek female action figure. She stands with arms folded across her chest on top of a massive Microsoft Surface Tablet, dressed in urban streetwear — black hoodie, jeans, sneakers — with sharp red tech glasses. Floating around her in a dynamic layout are designer tools: a next-gen camera with a blue holographic glow, a geometric mouse with electric sparks, a digital stylus leaving wireframe trails, a Pantone color guide in bold blue and black, and a minimal black coffee cup with binary code steam rising from it. Bold blue-and-orange color palette with dramatic lighting throughout. Cybe",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2952,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e92b39d05c1f452bbed40f6611726f87.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f5b227ab6a18c3-caa60a6fb3-320.webp",
          "640": "/prompt-template-images/tpl-f5b227ab6a18c3-caa60a6fb3-640.webp",
          "960": "/prompt-template-images/tpl-f5b227ab6a18c3-caa60a6fb3-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:17:11.094Z"
    },
    {
      "id": "tpl-575dc44ef234da",
      "slug": "face-reference-consistent-portrait-by-john-my07",
      "title": "Face-Reference Consistent Portrait (by @john_my07)",
      "prompt": "Use the attached reference image as the exclusive guide for facial identity, bone structure, body proportions, skin tone, facial features, and overall physical likeness. Create an ultra-realistic luxury fashion editorial portrait of a stunning young woman captured in a premium lifestyle photoshoot. She wears an oversized designer crimson-red T-shirt crafted from heavyweight cotton, featuring the striking white slogan \"WHATEVER\" across the chest in contemporary minimalist typography. A crisp white curved-brim cap adds a sporty upscale touch, while sleek dark aviator-inspired sunglasses rest slightly lower on the bridge of her nose, revealing her eyes and enhancing the fashion-forward aestheti",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 3021,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/593c953ef56847b496d1c42aba506364.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-575dc44ef234da-1b71bb52df-320.webp",
          "640": "/prompt-template-images/tpl-575dc44ef234da-1b71bb52df-640.webp",
          "960": "/prompt-template-images/tpl-575dc44ef234da-1b71bb52df-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:17:32.796Z"
    },
    {
      "id": "tpl-971ea8cbc832b3",
      "slug": "by-johnagi168",
      "title": "日本コンビニ店員 昼夜対比写真 (by @johnAGI168)",
      "prompt": "上班山田😊 下班田山🕶 GPT- image 2 prompt👇 Daytime Yamada cashier version, 3:4 vertical image. Create a realistic live-action portrait of an adult young Japanese woman, around 24 years old. She has fair skin, soft delicate facial features, a gentle oval face, calm dark eyes, natural light makeup, reddish hair, straight blunt bangs, and long side locks framing both sides of her face. Her expression is gentle, polite, slightly shy, and quietly mature, like a reliable supermarket cashier with a warm customer-service smile. Scene: daytime inside a Japanese supermarket checkout area. She is standing behind or beside the checkout counter, facing the camera, with a polite gentle smile. The background has blu",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 3040,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/47d92567538841ac9e5263427b198730.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-971ea8cbc832b3-4689556fcf-320.webp",
          "640": "/prompt-template-images/tpl-971ea8cbc832b3-4689556fcf-640.webp",
          "960": "/prompt-template-images/tpl-971ea8cbc832b3-4689556fcf-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:17:56.524Z"
    },
    {
      "id": "tpl-1bbc19ed0d2a99",
      "slug": "by-iamaiistudio",
      "title": "空气感日系窗边人像 (by @iamaiistudio) [提示词:]",
      "prompt": "35mm film photo, airy Japanese aesthetic, soft natural window light from the side, slightly overexposed, muted pastel colors, low contrast, bright gentle highlights, quiet indoor room beside sheer white curtains, pale wall, natural eye-level frame from mid-thigh upward, young East Asian woman, barely-there makeup, smooth natural skin, long loose dark hair, oversized white button-down shirt, casual shorts, bare feet, effortless everyday style, relaxed stance with arms lightly at sides or gently back, looking softly at the camera, calm quiet smile, stillness and lightness, fine film grain, gentle dreamy mood --ar 9:16",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 3166,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/33a81b40f0664e7ca10234ecbd53b2ab.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1bbc19ed0d2a99-8fa76f667a-320.webp",
          "640": "/prompt-template-images/tpl-1bbc19ed0d2a99-8fa76f667a-640.webp",
          "960": "/prompt-template-images/tpl-1bbc19ed0d2a99-8fa76f667a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:19:11.474Z"
    },
    {
      "id": "tpl-77e8c4fc8476c9",
      "slug": "ana-de-armas-studio-portraits-in-mini-dress-natural-beauty",
      "title": "Ana de Armas: Studio Portraits in Mini Dress, Natural Beauty",
      "prompt": "Ana de Armas: Studio Portraits in Mini Dress, Natural Beauty。Texture of knit dress；Ray-traced studio lighting。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 7328,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c8f6aaa6927440229b5b70a7ea6c530d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-77e8c4fc8476c9-10b5165e68-320.webp",
          "640": "/prompt-template-images/tpl-77e8c4fc8476c9-10b5165e68-640.webp",
          "960": "/prompt-template-images/tpl-77e8c4fc8476c9-10b5165e68-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:33:31.788Z"
    },
    {
      "id": "tpl-4bd80725a9701a",
      "slug": "romantic-couple-winter-portrait-in-snow-heart-shape",
      "title": "Romantic Couple Winter Portrait in Snow Heart Shape",
      "prompt": "Romantic Couple Winter Portrait in Snow Heart Shape。POV from inside a heart-shaped hole carved into thick snow. The heart-shaped snow frame fills the foreground, with realistic ice crystals and snow granules on the edges. Above the opening, exactly two people (female + male) lean in and look down into the heart-shaped hole. They wear oversized winter puffer jackets and winter hats, bundled up against the cold. A pale overcast sky is visible behind them. Light snowflakes drift down slowly through the opening. The mood is quiet, intimate, and romantic, like a premium cinematic winter photoshoot.；large heart-shaped snow opening framing the view, thick uneven edges, visible texture；Keep the same pose and scene logic: snow-angel position on fresh snow.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 7562,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/155d8c172f6f443397cc94ec4bfac225.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4bd80725a9701a-8d753108a9-320.webp",
          "640": "/prompt-template-images/tpl-4bd80725a9701a-8d753108a9-640.webp",
          "960": "/prompt-template-images/tpl-4bd80725a9701a-8d753108a9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:34:05.045Z"
    },
    {
      "id": "tpl-886c0a1a8a9b92",
      "slug": "vibrant-celebrity-group-portrait-with-neon-lights",
      "title": "Vibrant Celebrity Group Portrait with Neon Lights",
      "prompt": "Vibrant Celebrity Group Portrait with Neon Lights。Create an ultra-realistic 3D iPhone-style selfie featuring four women — Sydney Sweeney, Ana de Armas, the user, and Dua Lipa — smiling together in a neon-lit room, with playful cheek-pinching interactions and a casual, authentic smartphone photo aesthetic.；vibrant neon tones with realistic skin colors；slightly behind the group, centered。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 7794,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a24520b203b74069b91d4e41e507ec47.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-886c0a1a8a9b92-07023145b1-320.webp",
          "640": "/prompt-template-images/tpl-886c0a1a8a9b92-07023145b1-640.webp",
          "960": "/prompt-template-images/tpl-886c0a1a8a9b92-07023145b1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:35:36.896Z"
    },
    {
      "id": "tpl-3e0944dece7f68",
      "slug": "elegant-women-formal-dresses-fireworks-night-event",
      "title": "Elegant Women, Formal Dresses, Fireworks Night Event",
      "prompt": "Elegant Women, Formal Dresses, Fireworks Night Event。Dark night sky illuminated by bright red fireworks exploding in the distance, blurred city lights (bokeh) on the horizon；Glamorous nightlife attire, New Year's Eve party style, sequins, lace, backless cuts；Group of four young women celebrating。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8756,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1f1fd23b7afa4a9c8dda29690312d3e2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3e0944dece7f68-290f9290e1-320.webp",
          "640": "/prompt-template-images/tpl-3e0944dece7f68-290f9290e1-640.webp",
          "960": "/prompt-template-images/tpl-3e0944dece7f68-290f9290e1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:39:47.736Z"
    },
    {
      "id": "tpl-b5d86267ad3bc7",
      "slug": "spider-gwen-cosplay-selfie-photorealistic-portrait",
      "title": "Spider-Gwen Cosplay Selfie | Photorealistic Portrait",
      "prompt": "Spider-Gwen Cosplay Selfie | Photorealistic Portrait。Sitting on a bed, leaning slightly back, legs crossed with one knee raised, holding a phone up for a mirror selfie；Intimate, casual, relaxed, 'mirror selfie' aesthetic；Full-body spandex cosplay bodysuit。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8811,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c28e0ddf16494e8c91bdc2e4762a5ae3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b5d86267ad3bc7-a81033fa9f-320.webp",
          "640": "/prompt-template-images/tpl-b5d86267ad3bc7-a81033fa9f-640.webp",
          "960": "/prompt-template-images/tpl-b5d86267ad3bc7-a81033fa9f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:40:29.314Z"
    },
    {
      "id": "tpl-f8609cd12d7c41",
      "slug": "photorealistic-portrait-man-with-super-mario-bros-figures",
      "title": "Photorealistic Portrait: Man with Super Mario Bros. Figures",
      "prompt": "Photorealistic Portrait: Man with Super Mario Bros. Figures。de pie junto a Mario 3D gigante; Luigi ligeramente a su lado en pose dinámica；Mario & Luigi。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9223,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/94919d4b3f174f0ba24401b31a82f063.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f8609cd12d7c41-14fb0e44f8-320.webp",
          "640": "/prompt-template-images/tpl-f8609cd12d7c41-14fb0e44f8-640.webp",
          "960": "/prompt-template-images/tpl-f8609cd12d7c41-14fb0e44f8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:42:14.684Z"
    },
    {
      "id": "tpl-5fec84f0205ec7",
      "slug": "stylish-man-portrait-white-shirt-beige-pants-confident",
      "title": "Stylish Man Portrait: White Shirt, Beige Pants, Confident",
      "prompt": "Stylish Man Portrait: White Shirt, Beige Pants, Confident。timeless elegance, confident and stylish；white linen shirt/blouse slightly unbuttoned at top；calm, confident, subtle attitude。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9313,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a43e49eca15b47da983c3cf4ecb6b4b7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5fec84f0205ec7-5a5afd0a85-320.webp",
          "640": "/prompt-template-images/tpl-5fec84f0205ec7-5a5afd0a85-640.webp",
          "960": "/prompt-template-images/tpl-5fec84f0205ec7-5a5afd0a85-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:42:25.337Z"
    },
    {
      "id": "tpl-16ec043e67d861",
      "slug": "elegant-backless-dress-portrait-at-sunset-golden-hour-fashion",
      "title": "Elegant Backless Dress Portrait at Sunset | Golden Hour Fashion",
      "prompt": "Elegant Backless Dress Portrait at Sunset | Golden Hour Fashion。soft, warm, golden-hour glow；romantic, elegant, cinematic；gentle highlights on skin and dress, subtle shadows。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9414,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4b0180ed866049bc82463f0a2b440c6a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-16ec043e67d861-0c053193e2-320.webp",
          "640": "/prompt-template-images/tpl-16ec043e67d861-0c053193e2-640.webp",
          "960": "/prompt-template-images/tpl-16ec043e67d861-0c053193e2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:36:42.201Z"
    },
    {
      "id": "tpl-f7b06cc013971b",
      "slug": "happy-couple-selfie-romantic-photorealistic-portrait",
      "title": "Happy Couple Selfie - Romantic Photorealistic Portrait",
      "prompt": "Happy Couple Selfie - Romantic Photorealistic Portrait。wide selfie (24-28mm equivalent), mild perspective distortion；Create a two-panel vertical collage (2x1). Photorealistic couple selfie shot from a phone held overhead (top-down angle). Outdoor setting on gray stone pavement tiles. Bright natural daylight, clean colors, crisp skin texture, realistic pores. Keep both identities strictly matching the uploaded male and female references. No text/logos/watermarks.；strong top-down selfie angle。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9618,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c96d459281da48d3a38fa25599db848b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f7b06cc013971b-fed166bfb6-320.webp",
          "640": "/prompt-template-images/tpl-f7b06cc013971b-fed166bfb6-640.webp",
          "960": "/prompt-template-images/tpl-f7b06cc013971b-fed166bfb6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T12:43:18.693Z"
    },
    {
      "id": "tpl-5fdbaf53744d79",
      "slug": "couple-making-snow-angels-in-heart-winter-romance-photo",
      "title": "Couple Making Snow Angels in Heart | Winter Romance Photo",
      "prompt": "Couple Making Snow Angels in Heart | Winter Romance Photo。A cinematic overhead winter photo of a couple lying on fresh snow inside a large hand-drawn heart outline. The camera is closer than the reference so their faces are clearly visible and recognizable (readable facial features, eyes and smiles). They lie side-by-side near the center of the heart, bodies slightly angled toward each other. Their arms are spread outward in a joyful pose. Key updates (closer framing): - Tight crop: the heart outline still fully visible, but with much less empty snow around it. - Faces are large enough in frame to see expressions clearly (no tiny distant faces). - Preserve the carved heart texture: double-track lines, rough snow granules, footprints and shovel/boot marks around the outline. Wardrobe (match reference vibe but realistic): - Male: bright red winter jacket, dark pants, winter gloves. - Femal。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9719,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4134a4d60bd74485b644c09fae462e0a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5fdbaf53744d79-12e66857dd-320.webp",
          "640": "/prompt-template-images/tpl-5fdbaf53744d79-12e66857dd-640.webp",
          "960": "/prompt-template-images/tpl-5fdbaf53744d79-12e66857dd-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:37:14.505Z"
    },
    {
      "id": "tpl-bf7bd786812959",
      "slug": "young-couple-selfie-on-laptop-screen-candid-photobooth-image",
      "title": "Young Couple Selfie on Laptop Screen | Candid Photobooth Image",
      "prompt": "Young Couple Selfie on Laptop Screen | Candid Photobooth Image。vector art, screenshot, flat digital image, clean glass, perfect screen, daylight, bright studio lights, cartoon, 3d render, painting, watermark；Cool screen glow mixed with warm skin tones, deep nocturnal shadows；MacBook screen filling 95% of frame。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10254,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/986b46a735604452a70601d53219c8d2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-bf7bd786812959-8682e4c844-320.webp",
          "640": "/prompt-template-images/tpl-bf7bd786812959-8682e4c844-640.webp",
          "960": "/prompt-template-images/tpl-bf7bd786812959-8682e4c844-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:38:19.577Z"
    },
    {
      "id": "tpl-d073bebf9995a1",
      "slug": "monochrome-portrait-of-man-with-glasses-and-watch",
      "title": "Monochrome Portrait of Man with Glasses & Watch",
      "prompt": "Monochrome Portrait of Man with Glasses & Watch。subtle specular highlights on forehead, cheekbone, and watch face；monochrome；wristwatch。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 11020,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7d686bcdb2724fa8b1ecc611dc32dc94.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d073bebf9995a1-b20393cf64-320.webp",
          "640": "/prompt-template-images/tpl-d073bebf9995a1-b20393cf64-640.webp",
          "960": "/prompt-template-images/tpl-d073bebf9995a1-b20393cf64-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:41:17.311Z"
    },
    {
      "id": "tpl-c58688e557fa07",
      "slug": "sadie-sink-fashion-portrait-artistic-wide-angle-photoshoot",
      "title": "Sadie Sink Fashion Portrait - Artistic Wide-Angle Photoshoot",
      "prompt": "Sadie Sink Fashion Portrait - Artistic Wide-Angle Photoshoot。one_or_more_body_parts_positioned_adjacent_to_lens_appear_huge；grid_views_multi_angle；mid_close_up_wide_angle。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 11301,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0378f4ed59b34bc9bae5497399afe912.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c58688e557fa07-5b11feb55d-320.webp",
          "640": "/prompt-template-images/tpl-c58688e557fa07-5b11feb55d-640.webp",
          "960": "/prompt-template-images/tpl-c58688e557fa07-5b11feb55d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:43:33.503Z"
    },
    {
      "id": "tpl-57821d99ca4fc7",
      "slug": "whimsical-light-blue-corset-dress-fashion-portrait",
      "title": "Whimsical Light Blue Corset Dress Fashion Portrait",
      "prompt": "Whimsical Light Blue Corset Dress Fashion Portrait。Medium depth of field, background slightly softened but visible；Soft, diffused, flattering highlights on skin and collarbone；Large light blue fabric bow tied at the top of the head。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 11394,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cd2b0c3760c843f8a84d2e3cb9da6a3a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-57821d99ca4fc7-9e333e2d1c-320.webp",
          "640": "/prompt-template-images/tpl-57821d99ca4fc7-9e333e2d1c-640.webp",
          "960": "/prompt-template-images/tpl-57821d99ca4fc7-9e333e2d1c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:44:04.322Z"
    },
    {
      "id": "tpl-77f31f413be6b4",
      "slug": "men-s-outdoor-style-mountain-adventure-fashion",
      "title": "Men's Outdoor Style: Mountain Adventure Fashion",
      "prompt": "Men's Outdoor Style: Mountain Adventure Fashion。luxury outdoor fashion editorial；rocky mountain ground with subtle moisture。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 11462,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/848d4d598bba43d496cd6a4ce255f85e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-77f31f413be6b4-91574e749f-320.webp",
          "640": "/prompt-template-images/tpl-77f31f413be6b4-91574e749f-640.webp",
          "960": "/prompt-template-images/tpl-77f31f413be6b4-91574e749f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:44:15.320Z"
    },
    {
      "id": "tpl-5716462ceebd01",
      "slug": "redhead-model-fashion-portrait-lilac-dress-and-strawberry",
      "title": "Redhead Model Fashion Portrait, Lilac Dress & Strawberry",
      "prompt": "Redhead Model Fashion Portrait, Lilac Dress & Strawberry。Texture of knit dress；Moisture on strawberry surface；Eating a strawberry。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 11529,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6d8763b034744a95becc20d81dec7ac5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5716462ceebd01-d31e9af6ea-320.webp",
          "640": "/prompt-template-images/tpl-5716462ceebd01-d31e9af6ea-640.webp",
          "960": "/prompt-template-images/tpl-5716462ceebd01-d31e9af6ea-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:44:25.844Z"
    },
    {
      "id": "tpl-f95aca868c3697",
      "slug": "elegant-man-in-black-on-urban-balcony-night-city-fashion",
      "title": "Elegant Man in Black on Urban Balcony | Night City Fashion",
      "prompt": "Elegant Man in Black on Urban Balcony | Night City Fashion。A hyper-realistic 8k cinematic medium-wide shot captured with a 35mm lens at a low authoritative angle. A person with the uploaded face as reference stands alone on a polished marble balcony of a high-rise penthouse overlooking a vast nighttime cityscape. The subject wears a tailored black silk shirt slightly open at the collar, matte black tailored trousers, and minimal gold jewelry. One hand rests calmly on a glass railing while the other holds a crystal tumbler containing dark amber liquid with a single large ice cube. The city below glows with thousands of sharp white and warm yellow lights forming geometric patterns. Cinematic controlled lighting: moonlit key light defining facial structure, subtle rim light separating subject from the background. Mood conveys dominance, solitude, executive power, with ultra-clean textures,",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12196,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0779ede5906b450996f3a57b92a88f1e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f95aca868c3697-dab05c3bd2-320.webp",
          "640": "/prompt-template-images/tpl-f95aca868c3697-dab05c3bd2-640.webp",
          "960": "/prompt-template-images/tpl-f95aca868c3697-dab05c3bd2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:45:57.602Z"
    },
    {
      "id": "tpl-8f6add4005523e",
      "slug": "photorealistic-male-model-in-denim-on-social-media-x-profile",
      "title": "Photorealistic Male Model in Denim on Social Media X Profile",
      "prompt": "Photorealistic Male Model in Denim on Social Media X Profile。social media UI elements；high-end social media branding visual；creative digital backdrop inspired by an X profile page。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12276,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1d0def2d961949cb83160a12a42aa302.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8f6add4005523e-88fbe551ce-320.webp",
          "640": "/prompt-template-images/tpl-8f6add4005523e-88fbe551ce-640.webp",
          "960": "/prompt-template-images/tpl-8f6add4005523e-88fbe551ce-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:46:19.376Z"
    },
    {
      "id": "tpl-8570f7e55f9394",
      "slug": "vintage-inspired-street-style-plaid-blazer-and-tie-outfit",
      "title": "Vintage Inspired Street Style: Plaid Blazer & Tie Outfit",
      "prompt": "Vintage Inspired Street Style: Plaid Blazer & Tie Outfit。Brown plaid blazer, white button-up shirt, yellow tie, loose dark trousers；Urban Streetwear Editorial Collage；Wool plaid。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12827,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d0cf6a39edc24a12b97307e653ae4df9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8570f7e55f9394-68724ef137-320.webp",
          "640": "/prompt-template-images/tpl-8570f7e55f9394-68724ef137-640.webp",
          "960": "/prompt-template-images/tpl-8570f7e55f9394-68724ef137-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:48:46.647Z"
    },
    {
      "id": "tpl-5a09e73e1813d4",
      "slug": "elegant-cream-turtleneck-sweater-fashion-for-women",
      "title": "Elegant Cream Turtleneck Sweater Fashion for Women",
      "prompt": "Elegant Cream Turtleneck Sweater Fashion for Women。soft lighting, subtle shadows；high-neck top with wide-leg trousers, luxury fabric；female standing calmly, relaxed shoulders。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13549,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7481e29c2cb347cdbc89d09c605bcdd7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5a09e73e1813d4-6ae9a63c93-320.webp",
          "640": "/prompt-template-images/tpl-5a09e73e1813d4-6ae9a63c93-640.webp",
          "960": "/prompt-template-images/tpl-5a09e73e1813d4-6ae9a63c93-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:52:03.776Z"
    },
    {
      "id": "tpl-633a810291cb49",
      "slug": "businesswoman-fashion-in-modern-office-with-glass-stairs",
      "title": "Businesswoman Fashion in Modern Office with Glass Stairs",
      "prompt": "Businesswoman Fashion in Modern Office with Glass Stairs。modern building with reflective glass stairs；female walking up a glass staircase, elegant posture；Luxury editorial portrait with architectural chic。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13603,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ca4ae508853b4f6e869b667a2ab65d22.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-633a810291cb49-f8cac46d5c-320.webp",
          "640": "/prompt-template-images/tpl-633a810291cb49-f8cac46d5c-640.webp",
          "960": "/prompt-template-images/tpl-633a810291cb49-f8cac46d5c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:52:26.040Z"
    },
    {
      "id": "tpl-27f5195c7902de",
      "slug": "stylish-man-in-white-with-green-jeep-tropical-summer-fashion",
      "title": "Stylish Man in White with Green Jeep | Tropical Summer Fashion",
      "prompt": "Stylish Man in White with Green Jeep | Tropical Summer Fashion。Classic green off-road Jeep；Crisp white linen button-down, sleeves rolled up；Stylish man with a beard and confident posture。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13797,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/96c7970ec3a04813b2b756b9ed32364f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-27f5195c7902de-abfd9759b8-320.webp",
          "640": "/prompt-template-images/tpl-27f5195c7902de-abfd9759b8-640.webp",
          "960": "/prompt-template-images/tpl-27f5195c7902de-abfd9759b8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:53:29.922Z"
    },
    {
      "id": "tpl-ace9dca53856c7",
      "slug": "modern-men-s-casual-fashion-t-shirt-jeans-and-white-sneakers",
      "title": "Modern Men's Casual Fashion: T-shirt, Jeans & White Sneakers",
      "prompt": "Modern Men's Casual Fashion: T-shirt, Jeans & White Sneakers。Studio portrait of a young man, same appearance as the reference, posing confidently with relaxed body language. Minimal studio lighting, soft directional light fully focused on him while background remains subtle. He is wearing a stylish casual outfit (casual shirt or tee, fitted jeans, clean sneakers). Blue studio wall background, clean professional look, high-resolution, sharp details, cinematic yet natural, DSLR depth of field, realistic textures.；confident, modern, composed；85mm lens, shallow depth of field。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13916,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8716a5a5a43049a1a8b2485214ed2781.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ace9dca53856c7-dc81306541-320.webp",
          "640": "/prompt-template-images/tpl-ace9dca53856c7-dc81306541-640.webp",
          "960": "/prompt-template-images/tpl-ace9dca53856c7-dc81306541-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:53:52.375Z"
    },
    {
      "id": "tpl-c58b98d92ee575",
      "slug": "stylish-man-in-linen-shirt-and-khaki-pants-summer-menswear",
      "title": "Stylish Man in Linen Shirt & Khaki Pants | Summer Menswear",
      "prompt": "Stylish Man in Linen Shirt & Khaki Pants | Summer Menswear。Medium-shot, eye-level ultra-realistic photograph of a stylish man with a dark beard and wavy hair, leaning against a rustic wooden door with a brick wall background. He is wearing a terracotta orange short-sleeve camp-collar shirt tucked into beige pleated tailored trousers, white sneakers, dark rectangular sunglasses, and a thin gold chain necklace. Lighting is warm and natural daylight, creating a clean, elegant old-money summer aesthetic. High-quality photorealistic image, ultra-sharp details, 8k resolution.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13939,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5148dff0ed1e4efcace8c8311bbb916a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c58b98d92ee575-c9b97e76d2-320.webp",
          "640": "/prompt-template-images/tpl-c58b98d92ee575-c9b97e76d2-640.webp",
          "960": "/prompt-template-images/tpl-c58b98d92ee575-c9b97e76d2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:54:24.132Z"
    },
    {
      "id": "tpl-6dcd347c96422f",
      "slug": "modern-urban-fashion-man-in-white-shirt-and-ripped-jeans",
      "title": "Modern Urban Fashion: Man in White Shirt & Ripped Jeans",
      "prompt": "Modern Urban Fashion: Man in White Shirt & Ripped Jeans。A stylish, confident young man leaning casually against a modern concrete pillar outdoors. He has thick, voluminous dark hair styled back, a well-groomed full beard, and wears sleek black rectangular sunglasses. Outfit includes a crisp white button-down shirt with the top buttons open, revealing a subtle gold chain, sleeves casually rolled up. He is wearing light-wash blue denim jeans with a single ripped knee for a relaxed yet fashionable look. Accessories include a black smartwatch on one wrist and a minimal ring on his finger. Pose shows one hand resting behind his head, the other relaxed by his side, body slightly angled, looking off to the side with a calm, confident expression. Urban outdoor environment with modern architectural elements and soft greenery in the background, background softly blurred with bokeh. Natural dayligh",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 14025,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2e0c247bccc04772819d61c94e5f277d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6dcd347c96422f-85daad2a59-320.webp",
          "640": "/prompt-template-images/tpl-6dcd347c96422f-85daad2a59-640.webp",
          "960": "/prompt-template-images/tpl-6dcd347c96422f-85daad2a59-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:54:44.862Z"
    },
    {
      "id": "tpl-15c8e8499076a3",
      "slug": "man-in-street-fashion-urban-style-cargo-pants-and-graphic-tee",
      "title": "Man in Street Fashion: Urban Style, Cargo Pants & Graphic Tee",
      "prompt": "Man in Street Fashion: Urban Style, Cargo Pants & Graphic Tee。A candid photograph of a young man leaning against a large glass building wall on a sunny day. Oversized khaki graphic t-shirt with abstract orange, white and black print. Black cargo pants with multiple pockets. White sneakers, sunglasses and wristwatch. Hands in pockets, looking to the side casually. Reflection visible on glass surface behind him. Background shows urban cityscape and clear blue sky. Bright direct sunlight creating sharp shadows. High realism, natural photography. Vertical 4:5 aspect ratio. Use my uploaded image for face reference with 100% accuracy — maintain original facial identity and hairstyle while generating.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 14279,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/90ce70b1f8684b6ca6abb6aa4aed723a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-15c8e8499076a3-da0568dd30-320.webp",
          "640": "/prompt-template-images/tpl-15c8e8499076a3-da0568dd30-640.webp",
          "960": "/prompt-template-images/tpl-15c8e8499076a3-da0568dd30-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:55:48.395Z"
    },
    {
      "id": "tpl-aa66932ece4590",
      "slug": "convenience-store-neon-portrait-by-bubblebrain",
      "title": "Convenience Store Neon Portrait (by @BubbleBrain)",
      "prompt": "35mm film photography with harsh convenience store fluorescent lighting mixed with colorful neon signs from outside, authentic film grain, high contrast, slight color cast, cinematic street editorial style, intimate medium shot, early 20s sexy Chinese female idol with ultra-realistic delicate refined Chinese features, seductive almond-shaped fox eyes with natural double eyelids, high nose bridge, small sharp V-shaped jawline, flawless porcelain skin with cool ivory undertone and visible specular highlights from fluorescent light, subtle skin texture and micro pores, natural dewy makeup with soft flush on cheeks, glossy natural pink lips slightly parted, subtle natural freckles across nose an",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 934,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "blocked",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-25ae037c088a19",
      "slug": "chibi-3d-mini-me-photo-effect-by-miratechtool",
      "title": "Chibi 3D Mini Me Photo Effect (by @miratechtool)",
      "prompt": "Mini \"chibi 3D\" versions of the same person appear around the original photo - sitting, climbing, playing, interacting with objects - with realistic shadows and depth. Keep base image unchanged. Add soft handwritten text: \"Little versions of me... living my quiet moments.\" Include tiny props text like \"You got this ♡\". Cinematic, cozy, viral aesthetic.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 960,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ac42ff0c26e9447ba7233b89921cec50.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-25ae037c088a19-73f287943a-320.webp",
          "640": "/prompt-template-images/tpl-25ae037c088a19-73f287943a-640.webp",
          "960": "/prompt-template-images/tpl-25ae037c088a19-73f287943a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:56:08.340Z"
    },
    {
      "id": "tpl-88c565fd627c3f",
      "slug": "rainy-street-golden-portrait-by-harboriis",
      "title": "Rainy Street Golden Portrait (by @harboriis)",
      "prompt": "Ultra-realistic cinematic street photography of a young man standing alone on a rainy urban sidewalk during golden hour sunset in Mumbai, India. He is leaning casually against a black metal roadside railing while looking down at his smartphone, wearing an oversized black hoodie, loose dark blue cargo jeans, and clean white sneakers. Messy textured black hair moving slightly in the wind. Moody introspective vibe. Wide-angle composition with dramatic depth and strong leading lines from the wet pavement and railings. Reflective rain-soaked street surface glowing with warm sunset light. Vintage street lamps lining the sidewalk. Historic Gothic architecture inspired by Chhatrapati Shivaji Maharaj",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 988,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/048db1070d1e4733b0ae20311a456cc1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-88c565fd627c3f-34c1179ae7-320.webp",
          "640": "/prompt-template-images/tpl-88c565fd627c3f-34c1179ae7-640.webp",
          "960": "/prompt-template-images/tpl-88c565fd627c3f-34c1179ae7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:56:49.103Z"
    },
    {
      "id": "tpl-d45eee785515b5",
      "slug": "cozy-cafe-editorial-portrait-by-sha-zdiii",
      "title": "Cozy Cafe Editorial Portrait (by @sha_zdiii)",
      "prompt": ". Ultra-realistic cozy Japanese-Korean café photography featuring a cute young [Japanese/Korean] couple sitting together naturally in a trendy aesthetic café. The young couple should look stylish and youthful, wearing [fashion style/outfit colors], smiling softly and enjoying desserts together. The table is beautifully filled with [desserts/foods] such as pancakes, strawberry cakes, macarons, croissants, pastries, iced coffees, matcha lattes, fruit desserts, and aesthetic drinks arranged in a visually satisfying composition. Add small aesthetic café props like [flowers/ribbons/books/candles/pearls/notebooks] on the table for a premium Pinterest moodboard feel. Soft [lighting style] lighting",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1008,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/eda9f6414ff243d19f1b31e6c79e9e67.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d45eee785515b5-d0d94cfcf7-320.webp",
          "640": "/prompt-template-images/tpl-d45eee785515b5-d0d94cfcf7-640.webp",
          "960": "/prompt-template-images/tpl-d45eee785515b5-d0d94cfcf7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:56:59.905Z"
    },
    {
      "id": "tpl-8c6fef7427d961",
      "slug": "retro-newsstand-fashion-scene-by-harboriis",
      "title": "Retro Newsstand Fashion Scene (by @harboriis)",
      "prompt": "A cinematic fashion editorial scene of 8 diverse young adults gathered around a vintage urban newsstand kiosk with a bold \"NEWSSTAND\" sign, set in a gritty indoor street environment with worn concrete floors, dark industrial walls, and subtle urban details. Newspapers fly dynamically through the air in mid-motion, creating layered depth and energy with natural motion blur. The group is styled in coordinated 90s-inspired retro streetwear - oversized jackets, layered fits, sunglasses, caps, and muted earth tones. (olive green, brown, cream, navy). Composition is carefully balanced: one subject leans casually against the kiosk holding a newspaper, one sits confidently on a cream vintage scooter",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1042,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/335bbc28d37c43838aa59d4d31976bcd.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8c6fef7427d961-075c87042f-320.webp",
          "640": "/prompt-template-images/tpl-8c6fef7427d961-075c87042f-640.webp",
          "960": "/prompt-template-images/tpl-8c6fef7427d961-075c87042f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:57:10.158Z"
    },
    {
      "id": "tpl-170650feddee87",
      "slug": "early-1990s-flash-portrait-by-bmx-ai13",
      "title": "Early 1990s Flash Portrait (by @bmx_ai13)",
      "prompt": "Early 1990s Flash Camera Portrait GPT image 2 on ChatGPT Prompt Template. Use the uploaded image as the main reference. Transform the uploaded photo into a realistic candid portrait with an early 1990s digital camera aesthetic. Preserve the subject’s identity, facial features, pose, outfit, and overall composition, but restyle the image with harsh blown-out flash highlights, subtle red-eye effect, low-resolution image quality, raw snapshot imperfections, nostalgic flash-filter styling, and a vintage timestamp look. The final image should feel candid, imperfect, and authentic, like an old retro party or personal snapshot taken with an early consumer digital camera. Keep the background dark or",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1056,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d2ebab9b78a84c3a8318fa6c0f5ca80f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-170650feddee87-249d76c662-320.webp",
          "640": "/prompt-template-images/tpl-170650feddee87-249d76c662-640.webp",
          "960": "/prompt-template-images/tpl-170650feddee87-249d76c662-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:57:35.395Z"
    },
    {
      "id": "tpl-392108523b2b64",
      "slug": "ink-glyph-portrait-by-harboriis",
      "title": "Ink Glyph Portrait (by @harboriis)",
      "prompt": "Use the uploaded photo as the main face reference. Preserve the exact facial structure, skin tone, beard shape, nose, eyes and expression from the reference image. A dramatic, high-impact portrait rendered in an expressive ink sketch and mixed-media illustration style, using the uploaded image for exact facial likeness and proportions. The man is shown in side profile, his presence intense and chaotic. His face and upper body are layered with cryptic handwritten text, symbols, and abstract glyphs, partially wrapping around facial contours, suggesting inner turmoil and hidden meaning He wears a dark, abstract jacket, heavily texture strokes, sharp angular linework, and vibrant ink creating a",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1106,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6ae549cc34a94ae192822ebf9733e819.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-392108523b2b64-42b3e89d93-320.webp",
          "640": "/prompt-template-images/tpl-392108523b2b64-42b3e89d93-640.webp",
          "960": "/prompt-template-images/tpl-392108523b2b64-42b3e89d93-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:57:46.066Z"
    },
    {
      "id": "tpl-c771763a622f27",
      "slug": "y2k-cyber-pop-editorial-shot-by-noorlewisx",
      "title": "Y2K Cyber-Pop Editorial Shot (by @noorlewisx)",
      "prompt": "Don’t alter my facial feature. Create me a wide editorial shot of a girl leaning dramatically across a cluttered floor/desk in a chaotic Y2K cyber-pop room, low front-facing angle with cinematic framing. Moody cool-toned lighting mixed with warm highlights, glossy flash photography feel, dreamy magazine-editorial atmosphere. Long sleek jet-black hair with center part, soft pale glam makeup, subtle blush, glossy gradient red lips, large doll-like eyes with soft eyeliner and lashes. Red fitted tank top and dark mini skirt, colorful manicure, slightly messy dramatic pose with arms stretched forward, intense direct gaze at camera. Surrounding scene filled with scattered random objects, cables, g",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1119,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4d1683a5ffca41779a7add62e2926ebe.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c771763a622f27-f557492617-320.webp",
          "640": "/prompt-template-images/tpl-c771763a622f27-f557492617-640.webp",
          "960": "/prompt-template-images/tpl-c771763a622f27-f557492617-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:58:26.243Z"
    },
    {
      "id": "tpl-298a4751911f98",
      "slug": "lego-miniature-city-editorial-by-frametheory058",
      "title": "LEGO Miniature City Editorial (by @frametheory058)",
      "prompt": "Use the uploaded reference image as the primary character reference. Create a premium vertical 4:5 editorial illustration of the same character from the reference image, sitting at a cozy craft table and building a LEGO-style miniature diorama of [CITY NAME]. Only the character remains organic and natural. Everything else must be built entirely from visible LEGO-style bricks: landmarks, streets, bridges, rivers, lakes, trees, vehicles, trains, people, cafés, shops, food stalls, parks, signs, boa",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1165,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/36c7aa0cdc6a4ccfa506e95f61fc2974.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-298a4751911f98-341ae2dcce-320.webp",
          "640": "/prompt-template-images/tpl-298a4751911f98-341ae2dcce-640.webp",
          "960": "/prompt-template-images/tpl-298a4751911f98-341ae2dcce-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:59:09.595Z"
    },
    {
      "id": "tpl-9e37c56a515f8a",
      "slug": "3d-designer-toy-portrait-by-iamsofiaijaz",
      "title": "3D Designer-Toy Portrait (by @iamsofiaijaz)",
      "prompt": "Stylized 3D designer-toy portrait, centered symmetrical close-up composition, maintain the exact face, hairstyle, and facial proportions of the character in the reference image, [GLASSES: e.g. oversized translucent cat-eye glasses / no glasses / chunky black frames], [EYES: e.g. sharp green eyes / dark brown eyes], [FACE DETAILS: e.g. freckles,, silver ear piercings], soft neutral facial expression with cool detached attitude, streetwear-inspired badges / no hat], [OUTFIT: e.g. chunky neon-gree",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1219,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/90532d7d5dbd40c79311a43d63f748c3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9e37c56a515f8a-c5d8c7c7a1-320.webp",
          "640": "/prompt-template-images/tpl-9e37c56a515f8a-c5d8c7c7a1-640.webp",
          "960": "/prompt-template-images/tpl-9e37c56a515f8a-c5d8c7c7a1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T13:59:30.839Z"
    },
    {
      "id": "tpl-233131bc7d5fc5",
      "slug": "cozy-bedroom-korean-girl-portrait-by-john-my07",
      "title": "Cozy Bedroom Korean Girl Portrait (by @john_my07)",
      "prompt": "Ultra-realistic cozy bedroom portrait of the same beautiful Korean girl from the previous images, maintaining identical facial appearance, silky long black hair, glossy eyes, soft blush makeup, youthful Korean beauty aesthetic, and realistic skin texture consistency. She is lying comfortably on her stomach across a soft cream-colored bed in her cozy bedroom at night, posing playfully toward the camera with a gentle relaxed smile. Her legs are bent upward behind her while resting her chin softly",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1246,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/61df2034c57a4268a97344779673ac09.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-233131bc7d5fc5-40e3ee5a35-320.webp",
          "640": "/prompt-template-images/tpl-233131bc7d5fc5-40e3ee5a35-640.webp",
          "960": "/prompt-template-images/tpl-233131bc7d5fc5-40e3ee5a35-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:00:02.011Z"
    },
    {
      "id": "tpl-4259fee028271f",
      "slug": "bubble-tea-shop-action-portrait-by-heyfatema",
      "title": "Bubble-Tea Shop Action Portrait (by @heyfatema)",
      "prompt": "Use case: identity-preserve style-transfer Asset type: vertical photorealistic action portrait for social post Primary request: create a dynamic bubble-tea shop action portrait using the uploaded portrait photo as the appearance reference for the person. Scene/backdrop: a bright modern bubble-tea counter interior with stainless steel panels, glass display edges, overhead circular lights, drink-making equipment, and a dramatic low-angle view from near the floor. Pink strawberry milk tea splashes",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1299,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/fad7f5b5e8a947a5930c0c2b32e1ba24.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4259fee028271f-e1de5c583f-320.webp",
          "640": "/prompt-template-images/tpl-4259fee028271f-e1de5c583f-640.webp",
          "960": "/prompt-template-images/tpl-4259fee028271f-e1de5c583f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:01:04.821Z"
    },
    {
      "id": "tpl-a62f93c040a7b2",
      "slug": "reference-based-portrait-consistency-by-mehvishs25",
      "title": "Reference-Based Portrait Consistency (by @mehvishs25)",
      "prompt": "Use the uploaded reference image as the exact facial identity reference for the girl. Maintain the same facial structure, eyes, nose, lips, hairstyle, skin tone, beauty details, and overall appearance consistency throughout the image. Ultra-realistic portrait of the same girl from the reference image standing beside the large classroom windows in an empty Korean classroom during daytime, posing from the front side while looking directly at the camera with a soft calm smile. One hand gently resting in her hair, relaxed confident posture, modern youthful Korean fashion aesthetic. Wearing a fitted long black ribbed top with full sleeves and light gray washed jeans, elegant casual styling. Long",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1369,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/42ded7e3c75e40dea1474a6c43255011.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a62f93c040a7b2-c573d3884a-320.webp",
          "640": "/prompt-template-images/tpl-a62f93c040a7b2-c573d3884a-640.webp",
          "960": "/prompt-template-images/tpl-a62f93c040a7b2-c573d3884a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:02:18.897Z"
    },
    {
      "id": "tpl-76a1ddb7c63042",
      "slug": "woodcut-engraving-portrait-style-by-zulkarnaimx",
      "title": "Woodcut Engraving Portrait Style (by @zulkarnaimx)",
      "prompt": "️ Black and white engraved portrait illustration of a person. Drawn in classic woodcut / linocut engraving style, high contrast black ink on textured off-white paper background. Fine cross-hatching and line shading to create depth and shadow, bold black ink shadows under chin and around hair, strong contour lines, traditional printmaking aesthetic. Minimal composition, centered portrait, no body visible, clean negative space, vintage editorial illustration style, ultra detailed linework, sharp crisp ink strokes, professional vector-ready engraving look, monochrome palette, dramatic contrast. Negative Prompt: color, watercolor, soft shading, blurred lines, low contrast, realistic photography,",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1480,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/12402921ce0a4a3d87552c6664d53072.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-76a1ddb7c63042-ce299c533b-320.webp",
          "640": "/prompt-template-images/tpl-76a1ddb7c63042-ce299c533b-640.webp",
          "960": "/prompt-template-images/tpl-76a1ddb7c63042-ce299c533b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:02:52.352Z"
    },
    {
      "id": "tpl-9154c426597148",
      "slug": "by-liyue-ai",
      "title": "写实感人物竖版照片 (by @liyue_ai)",
      "prompt": "生成一张 9:16 竖版写实感人物照片，参考高级手机自拍质感，但不要完全普通生活照。整体像是用 iPhone 前置摄像头在温馨卧室中拍摄的精致自拍，保留柔和美型、干净构图和自然高级感。画质为真实手机照片质感，有轻微噪点、轻微柔焦和自然光感，但人物依然精致、漂亮、肤质自然干净，不要变成粗糙低质照片。 画面中是一位成年东方女性，坐在温馨卧室床上，上半身近景自拍构图，镜头略微从上方俯拍，人物位于画面中央偏右，头部微微低下，视线安静看向右下方，表情自然、平静、温柔，嘴唇自然闭合，整体气质柔和、成熟、安静。 人物拥有浅蓝色或冰蓝色长发，发丝自然蓬松，有轻微凌乱感，部分头发垂落在脸侧和肩颈周围。人物保持精致写实美型，脸型柔和自然，五官清秀，皮肤白皙但不过度磨皮，可保留少量真实肤质纹理、细小毛孔、轻微肤色不均和几处很淡的小黑痣，但整体仍然干净、柔和、好看。不要明显暗沉，不要粗糙脏感。 人物身材丰腴，肩颈线条柔和，胸部饱满，不卡通化。服装为浅蓝色丝缎吊带睡裙，带白色蕾丝花边，胸前有简洁小蝴蝶结和自然褶皱，布料柔软贴合身体，呈现真实丝缎材质光泽。人物一只手自然轻轻拉住肩带或肩部附近衣料，手指数量正常，姿态自然。 背景为温馨卧室，有床铺、浅色床品、木质床头柜、暖黄色床头灯、窗帘和柔和室内光。背景轻微虚化，保留真实居家空间感。光线为室内暖光与自然光混合，略微偏暖，画面柔和、亲密、生活化，但保持干净高级。 整体风格：写实手机自拍、高级自然美型、轻微 iPhone 前置摄像头质感、柔和暖光、自然肤质、真实比例、温馨卧室、精致但不过度商业修图。 负面要求： 不要二次元，不要3D CG，不要摄影棚大片，不要",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1580,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/890f6f8abc744938840885908eafcbd1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9154c426597148-b16c87cd67-320.webp",
          "640": "/prompt-template-images/tpl-9154c426597148-b16c87cd67-640.webp",
          "960": "/prompt-template-images/tpl-9154c426597148-b16c87cd67-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:03:24.779Z"
    },
    {
      "id": "tpl-6df577ec57eeb7",
      "slug": "editorial-male-portrait-by-frametheory058",
      "title": "Editorial Male Portrait (by @frametheory058)",
      "prompt": "Ultra-realistic 8K editorial male portrait of the uploaded man, using his exact face as the ONLY identity reference — preserve 100% facial structure, jawline, hairstyle volume, beard texture, skin tone, eye shape, pores, and natural imperfections with zero beautification or face alteration. Luxury “quiet wealth” aesthetic blended with cinematic Instagram masculinity. Centered close-up composition, direct eye contact, calm dominant expression, slightly serious mood, no smile. Styled in a fitted black turtleneck under a premium black tailored blazer, no accessories. Dark emerald-green cinematic studio gradient background with soft atmospheric depth. Shot on an 85mm lens at f/1.8 with razor-sha",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1619,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f5a4486c5c9e40d9a32565959f43546f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6df577ec57eeb7-d2b1a7ea35-320.webp",
          "640": "/prompt-template-images/tpl-6df577ec57eeb7-d2b1a7ea35-640.webp",
          "960": "/prompt-template-images/tpl-6df577ec57eeb7-d2b1a7ea35-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:03:36.890Z"
    },
    {
      "id": "tpl-0ded18422282e9",
      "slug": "korean-beauty-ultra-realistic-portrait-by-zephyraleigh",
      "title": "Korean Beauty Ultra-Realistic Portrait (by @ZephyraLeigh)",
      "prompt": "low quality, blurry, distorted anatomy, extra fingers, bad hands, unrealistic smile, messy hair, cartoon, anime, watermark, logo, text, noisy image, oversaturated colors, poorly drawn face, low resolution, bad proportions. 1744x2336",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1666,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b06487072f4944a5b41bd6688de65cf9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0ded18422282e9-d23daeb484-320.webp",
          "640": "/prompt-template-images/tpl-0ded18422282e9-d23daeb484-640.webp",
          "960": "/prompt-template-images/tpl-0ded18422282e9-d23daeb484-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:03:49.261Z"
    },
    {
      "id": "tpl-7b6bf06aa5bbc7",
      "slug": "korean-beauty-fashion-portrait-by-sheldon056",
      "title": "Korean Beauty Fashion Portrait (by @Sheldon056)",
      "prompt": "Create a high-quality “chibi sticker diary portrait” based on the uploaded real-life photo. Preserve the subject’s original identity, realistic facial structure, hairstyle, hair color, glasses, outfit, pose, proportions, lighting, and background. Keep the main subject photorealistic and do not transform the entire image into a full illustration.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1718,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/37b2f33cda9c48699bf31ecfa653a6c7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7b6bf06aa5bbc7-e8d770584e-320.webp",
          "640": "/prompt-template-images/tpl-7b6bf06aa5bbc7-e8d770584e-640.webp",
          "960": "/prompt-template-images/tpl-7b6bf06aa5bbc7-e8d770584e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:04:10.264Z"
    },
    {
      "id": "tpl-3a8e789b310b54",
      "slug": "bold-monochrome-identity-portrait-by-harboriis",
      "title": "Bold Monochrome Identity Portrait (by @harboriis)",
      "prompt": "Use my uploaded image as the face reference.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1836,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6a5887c3766943a08fd33e80137f81c2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3a8e789b310b54-c2912d0c4c-320.webp",
          "640": "/prompt-template-images/tpl-3a8e789b310b54-c2912d0c4c-640.webp",
          "960": "/prompt-template-images/tpl-3a8e789b310b54-c2912d0c4c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:05:24.429Z"
    },
    {
      "id": "tpl-a73c0f2c1c4ca3",
      "slug": "identity-reference-beauty-portrait-by-heyfatema",
      "title": "Identity Reference Beauty Portrait (by @heyfatema)",
      "prompt": "Use only my uploaded portrait photo as the identity reference. Accurately preserve my real face shape, facial proportions, facial contours, skin tone, hairstyle outline, hair volume, hairline, and overall natural presence. Do not turn me into another person. Do not over-beautify the face. Do not create an influencer-style face, plastic skin, or anime look.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1901,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/56240feec10545c08e44dba317493813.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a73c0f2c1c4ca3-c764f62849-320.webp",
          "640": "/prompt-template-images/tpl-a73c0f2c1c4ca3-c764f62849-640.webp",
          "960": "/prompt-template-images/tpl-a73c0f2c1c4ca3-c764f62849-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:05:35.257Z"
    },
    {
      "id": "tpl-b5f952a24de7dd",
      "slug": "negative-prompt-portrait-template-by-zephyraleigh",
      "title": "Negative Prompt Portrait Template (by @ZephyraLeigh)",
      "prompt": "low quality, blurry, distorted face, extra fingers, bad hands, duplicate facial features, unrealistic reflection, cartoon, anime, watermark, logo, text, noisy image, oversaturated colors, poorly drawn eyes, bad anatomy, broken proportions, low resolution.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1927,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cef62e82b12c45d9a8c1589616cf663d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b5f952a24de7dd-e5bcd23ecc-320.webp",
          "640": "/prompt-template-images/tpl-b5f952a24de7dd-e5bcd23ecc-640.webp",
          "960": "/prompt-template-images/tpl-b5f952a24de7dd-e5bcd23ecc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:05:46.477Z"
    },
    {
      "id": "tpl-23a60b9361b1dc",
      "slug": "identity-reference-fashion-portrait-by-mehvishs25",
      "title": "Identity Reference Fashion Portrait (by @mehvishs25)",
      "prompt": "Use the uploaded reference image as the exact facial identity reference for the girl. Preserve her real facial structure, eye shape, nose, lips, jawline, skin tone, hairstyle essence, and overall appearance consistency throughout the entire poster. Maintain accurate identity realism with natural skin texture and authentic facial proportions. Create an avant-garde Tokyo street-fashion editorial collage poster with a sophisticated neo-Y2K Japanese magazine aesthetic. Inspired by underground Harajuku fashion zines, luxury streetwear campaigns, and raw urban print design. Composition built from layered torn-paper textures, distressed xerox scans, folded magazine scraps, scratched film overlays,",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1940,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/446343bc4bea471ba35874a4e0d88488.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-23a60b9361b1dc-92350a6ea8-320.webp",
          "640": "/prompt-template-images/tpl-23a60b9361b1dc-92350a6ea8-640.webp",
          "960": "/prompt-template-images/tpl-23a60b9361b1dc-92350a6ea8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:05:57.749Z"
    },
    {
      "id": "tpl-bb924c7cc2c337",
      "slug": "brand-identity-portrait-by-shinning1010",
      "title": "Brand Identity Portrait (by @Shinning1010)",
      "prompt": "Use my uploaded portrait photo as the only identity reference. Preserve only the person’s real facial features, face shape, hairstyle, hair color, skin tone, and overall temperament. Generate an ultra-realistic close-up portrait in natural light. The subject is shown in side profile, gently lowering her head toward a blooming white lily. The flower is placed in the foreground and covered with visible dewdrops. Warm golden backlight comes from the side and behind, creating a soft glowing rim light on the hair, with slight lens flare and a shallow depth of field. The background is a dark green natural blur. The expression is calm, soft, and natural, with the subject not looking at the camera.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1998,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d897f81d4d334d189af54258ba27b976.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-bb924c7cc2c337-d97326bccf-320.webp",
          "640": "/prompt-template-images/tpl-bb924c7cc2c337-d97326bccf-640.webp",
          "960": "/prompt-template-images/tpl-bb924c7cc2c337-d97326bccf-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:06:18.981Z"
    },
    {
      "id": "tpl-63971709b128d5",
      "slug": "outdoor-lifestyle-open-sky-portrait-by-shorelyn",
      "title": "Outdoor Lifestyle Open Sky Portrait (by @Shorelyn_)",
      "prompt": "Vibe: outdoor lifestyle · introspective · open sky",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2011,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b3a01151c4cc47009f4ae6eb2de96c14.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-63971709b128d5-a5da99f970-320.webp",
          "640": "/prompt-template-images/tpl-63971709b128d5-a5da99f970-640.webp",
          "960": "/prompt-template-images/tpl-63971709b128d5-a5da99f970-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:06:40.001Z"
    },
    {
      "id": "tpl-f16db0d93b7975",
      "slug": "by-liyue-ai-db6f8f",
      "title": "高级男性魅力人像 (by @liyue_ai)",
      "prompt": "生成一张具有强烈男性魅力和高级视觉冲击力的人像作品，画幅比例为 {画幅比例}。 这不是普通证件照，不是廉价写真，不是网红自拍，也不是夸张霸总风照片，而是一张兼具高级商业人像、电影人物海报、个人品牌视觉和社交平台传播感的男性魅力形象图。 如果用户上传了自拍头像：请以用户上传的自拍头像为核心参考，保留人物的真实身份识别度，包括脸型轮廓、五官比例、眉眼气质、发型基础、年龄感、肤色倾向和面部特征。在保持本人可识别的基础上，对人物进行高级视觉转译：优化面部光影结构；强化眉骨、鼻梁、下颌线和面部轮廓；提升眼神的稳定感和故事感；让发型更干净利落；让皮肤质感更自然清爽；让整体气质更成熟、更自信、更有身份感。 如果用户没有上传自拍头像：默认生成一位成年中国男性，五官端正自然，气质大方得体，干净成熟，身材匀称，肩颈舒展，发型清爽，表情冷静自信，整体符合中国大众审美中的高级男性魅力。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2024,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cb497bfb765946af93c65279045861c1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f16db0d93b7975-130da6b147-320.webp",
          "640": "/prompt-template-images/tpl-f16db0d93b7975-130da6b147-640.webp",
          "960": "/prompt-template-images/tpl-f16db0d93b7975-130da6b147-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:06:50.946Z"
    },
    {
      "id": "tpl-9e05a7df1644dd",
      "slug": "by-adam38363368936",
      "title": "沙滩场景丰腴人物写真 (by @Adam38363368936)",
      "prompt": "写实风格，超高精细。20岁出头的成年女性，黑色自然长发，透明感的肌肤，可爱而华丽的面容，带着自然且略带羞涩的微笑。背景是南国度假地的黄昏海滩，白沙、平静的海面、淡粉色与橙色的天空，远景是椰子树。女性穿着米白色的优雅简约比基尼，肩上轻轻披着一件白色薄纱衬衫。她站在沙滩上，双手轻轻交叠在身前，对着镜头露出灿烂的笑容。充满幸福感和余韵的氛围。人物位于画面中央，占据较大比例，并留出少许黄昏天空的空白。不添加任何文字或标志。注重清纯、透明感、华丽和特别感。这是一张高完成度、充满余韵的照片。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2043,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/44b66948bbdf4b668ee9b6140772aee9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9e05a7df1644dd-6d4f06c0f9-320.webp",
          "640": "/prompt-template-images/tpl-9e05a7df1644dd-6d4f06c0f9-640.webp",
          "960": "/prompt-template-images/tpl-9e05a7df1644dd-6d4f06c0f9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:07:01.818Z"
    },
    {
      "id": "tpl-7592c89a48882a",
      "slug": "photorealistic-editorial-seated-portrait-by-zulkarnaimx",
      "title": "Photorealistic Editorial Seated Portrait (by @zulkarnaimx)",
      "prompt": "Photorealistic editorial portrait of a relaxed young man seated on minimalist white stone stairs in soft directional sunlight, three-quarter full-body composition, centered framing with leading lines of the steps. He wears a light blue linen button-up shirt with open collar and rolled sleeves, beige slim chinos, and white leather sneakers with pale blue accents; black classic sunglasses, short neatly styled dark hair, warm medium skin tone, confident casual expression. Crisp natural leaf shadows cast on a pale wall in the background, high-key neutral palette, soft warm color grading, subtle film-like grain. Shallow depth of field, sharp subject, soft bokeh in background, balanced contrast, d",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2056,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/65c0868f71094709a1146c52d6d30366.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7592c89a48882a-3460f3a876-320.webp",
          "640": "/prompt-template-images/tpl-7592c89a48882a-3460f3a876-640.webp",
          "960": "/prompt-template-images/tpl-7592c89a48882a-3460f3a876-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:07:22.292Z"
    },
    {
      "id": "tpl-fac4236bba3ba6",
      "slug": "ink-manuscript-side-portrait-by-iamaiistudio",
      "title": "Ink Manuscript Side Portrait (by @iamaiistudio)",
      "prompt": "Use the uploaded photo as the primary face reference. Preserve the person's exact facial structure, skin tone, beard shape, nose, eyes, expression, likeness, and proportions from the reference image. Create a dramatic, high-impact side-profile portrait in an expressive ink sketch and mixed-media illustration style. The man should feel intense, chaotic, and emotionally charged, with his face and upper body layered in cryptic handwritten text, abstract symbols, and glyph-like marks that wrap around the facial contours, suggesting inner turmoil and hidden meaning. Dress him in a dark abstract jacket built from heavy textured strokes, sharp angular linework, vibrant ink accents, fine pen details",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2196,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/13108a8fff7b4d9cb9751c82c9370167.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fac4236bba3ba6-4163c6ac1e-320.webp",
          "640": "/prompt-template-images/tpl-fac4236bba3ba6-4163c6ac1e-640.webp",
          "960": "/prompt-template-images/tpl-fac4236bba3ba6-4163c6ac1e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:09:07.785Z"
    },
    {
      "id": "tpl-adf70bfc35ce55",
      "slug": "window-light-cinematic-portrait-by-ozayrr-irl",
      "title": "Window-Light Cinematic Portrait (by @Ozayrr_irl)",
      "prompt": "Use the exact same face from the reference image and generate a Ultra realistic cinematic portrait of that man with defined facial features, dark tousled hair, intense eyes. Shot from mid-chest up. Scene: sitting beside a large old wooden-framed window in a minimal dark room, early morning golden sunlight streaming through the glass in dramatic god rays visible light beams cutting through floating dust particles in the air. The window light strikes directly across one side of his face, creating razor-sharp light and shadow divide. Half his face brilliantly golden, half consumed in deep natural shadow. The window frame casts a cross-shadow pattern across his chest and shoulder. Dust particles",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2214,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0df6d58b933a47db98011f6ce818dd1a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-adf70bfc35ce55-467c5dbd6b-320.webp",
          "640": "/prompt-template-images/tpl-adf70bfc35ce55-467c5dbd6b-640.webp",
          "960": "/prompt-template-images/tpl-adf70bfc35ce55-467c5dbd6b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:09:28.601Z"
    },
    {
      "id": "tpl-17d0d96c1767f7",
      "slug": "futuristic-martial-arts-heroine-portrait-by-vireonixx",
      "title": "Futuristic Martial Arts Heroine Portrait (by @vireonixx)",
      "prompt": "Ultra-photorealistic cinematic portrait of a legendary futuristic martial arts heroine standing in the center of a luxury fashion-editorial composition. She wears an elegant crimson and black combat outfit inspired by contemporary haute couture and advanced athletic armor, featuring intricate embroidered patterns, premium silk textures, carbon-fiber accents, metallic details, and subtle illuminated elements integrated into the design. The character is captured in a dynamic low stance, one hand extended forward and the other resting near her waist, projecting calm confidence and immense strength. Her facial features are exceptionally realistic with natural beauty, perfectly balanced proportio",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2227,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b8978b40d20144f89569c8d57bba1f91.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-17d0d96c1767f7-3792925716-320.webp",
          "640": "/prompt-template-images/tpl-17d0d96c1767f7-3792925716-640.webp",
          "960": "/prompt-template-images/tpl-17d0d96c1767f7-3792925716-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:09:39.624Z"
    },
    {
      "id": "tpl-1ae140fcb81b47",
      "slug": "under-glass-worms-eye-crowd-shot-by-iamaiistudio",
      "title": "Under-Glass Worms-Eye Crowd Shot (by @iamaiistudio)",
      "prompt": "Camera placed directly beneath a completely transparent glass floor, pointing straight up. Pedestrians walk across the surface above. Pure blue sky fills the background. No buildings, walls, or edges in frame. The glass is perfectly seamless and nearly imperceptible. Extremely close viewpoint to the underside of the walking figures. People moving mostly left to right. Shoe soles fill the foreground up close.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2252,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/98f0232a5b5640d58c75bccceb58de3b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1ae140fcb81b47-478123e56a-320.webp",
          "640": "/prompt-template-images/tpl-1ae140fcb81b47-478123e56a-640.webp",
          "960": "/prompt-template-images/tpl-1ae140fcb81b47-478123e56a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:10:01.225Z"
    },
    {
      "id": "tpl-65afa60abd21c9",
      "slug": "plush-mascot-companion-portrait-by-doctorwasif",
      "title": "Plush Mascot Companion Portrait (by @doctorwasif)",
      "prompt": "Use the uploaded portrait as the identity reference and preserve the person's recognizable facial features, hairstyle, skin tone, expression, fashion sense, and overall presence. Create a premium full-body portrait of the same person alongside a large custom-designed plush companion that feels like their mascot alter ego. The plush should be inspired by the subject's mood, facial impression, styling, posture, and overall energy rather than being a generic animal or mascot. Automatically choose a creature concept that best matches the person's unique vibe, avoiding predictable or stereotype-based selections. The mascot must clearly be an oversized plush toy with soft fuzzy fabrics, rounded sh",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2310,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8998126215aa4f31ab719981bd981252.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-65afa60abd21c9-0ece4994de-320.webp",
          "640": "/prompt-template-images/tpl-65afa60abd21c9-0ece4994de-640.webp",
          "960": "/prompt-template-images/tpl-65afa60abd21c9-0ece4994de-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:10:10.493Z"
    },
    {
      "id": "tpl-2893634bf0bb93",
      "slug": "editorial-y2k-identity-grid-by-ciri-ai",
      "title": "Editorial Y2K Identity Grid (by @Ciri_ai)",
      "prompt": "A vertical collage of three YZK photos. Using the uploaded selfie as the ONLY and exclusive face reference, keep the facial features, and facial structure exactly the same as the reference image. The character poses against a neutral light background. A girl with a beautiful, voluminous hairstyle, seemingly styled with a brush, wearing foxy makeup and pronounced, angled lashes. In the first photo, she's very close to the camera, looking at it with one eye and winking. In the second photo, she's turned away, her head coquettishly turned toward the lens, her hairstyle slightly covering her face, but not too much. In the third photo, she's looking very close to the lens, her hair to the side, t",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2324,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b73bf8bb57544f9a9a3c3381c8185fa5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2893634bf0bb93-d0e8009391-320.webp",
          "640": "/prompt-template-images/tpl-2893634bf0bb93-d0e8009391-640.webp",
          "960": "/prompt-template-images/tpl-2893634bf0bb93-d0e8009391-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:10:32.725Z"
    },
    {
      "id": "tpl-1ca42341a2c106",
      "slug": "cool-grey-editorial-3x3-by-mind-boticni",
      "title": "Cool Grey Editorial 3x3 (by @Mind_Boticni)",
      "prompt": "Editorial 3x3 grid in a cool-grey seamless backdrop. Character (face characteristics 100% same as uploaded image) wearing a charcoal sleeveless dress. Lighting: large overhead softbox, faint side bounce. Shots include: 1. tight cheek + neck close-up with blurred finger foreground (85mm, f/1.8); 2. eyes locked to lens, top-light reflection visible (85mm, f/2.0); 3. monochrome chin-on-hand portrait with strong frame fill (50mm, f/2.2); 4. half-obscured over-shoulder shot through blurred dress strap (85mm, f/2.0); 5. head-on close-up with intersecting shadows across face (50mm, f/2.5); 6. angled raw portrait with tousled hair (85mm, f/2.2); 7. tight detail of hands resting near collarbone (50mm",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2337,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/3c111b098bcc4fe9ab65945969cc62a3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1ca42341a2c106-09fce9541c-320.webp",
          "640": "/prompt-template-images/tpl-1ca42341a2c106-09fce9541c-640.webp",
          "960": "/prompt-template-images/tpl-1ca42341a2c106-09fce9541c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:10:53.678Z"
    },
    {
      "id": "tpl-be3af0cb3cc223",
      "slug": "vintage-newsstand-double-exposure-by-aiwithzohaib",
      "title": "Vintage Newsstand Double Exposure (by @AiwithZohaib)",
      "prompt": "The generated image uses the uploaded image as a reference for the character, wearing a high-necked, tight-fitting black long-sleeved dress. A cluster of withered wood and orange-pink flowers lies beside an old newsstand, the grainy texture of vintage film interwoven, the blurred background with noticeable trailing shadows, and the double-image effect creating a fantastical atmosphere. A bewitchingly beautiful girl, carrying flowers, is shown in profile, her fair skin delicate and translucent. Her exquisite face is blurred with motion, the outline of her figure slightly swaying with the panning camera, the soft focus making the image even more hazy and languid. A warm-toned, low-saturation f",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2424,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/09f37c5b64bb47c282c3d9abcce0779d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-be3af0cb3cc223-369a09a897-320.webp",
          "640": "/prompt-template-images/tpl-be3af0cb3cc223-369a09a897-640.webp",
          "960": "/prompt-template-images/tpl-be3af0cb3cc223-369a09a897-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:11:37.483Z"
    },
    {
      "id": "tpl-97a7d6e2e5d9bb",
      "slug": "identity-locked-portrait-edit-by-kashberg-0",
      "title": "Identity-Locked Portrait Edit (by @Kashberg_0)",
      "prompt": "Use the uploaded portrait as the identity reference for the subject's face, hairstyle, facial structure, skin tone, expression, and overall impression. Create a high-quality realistic emotional portrait of the same person with a soft sad mood and visible tears. Core concept: - a delicate, emotionally touching close-up portrait - the subject looks quietly sad, as if holding back emotions - the mood should feel fragile, intimate, soft, and beautiful - the image should feel like a polished Korean-style emotional portrait Identity: - preserve the subject's recognizable identity - keep the same face shape, eyes, nose, lips, jawline, hairstyle, and overall vibe - do not make the face look generic",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2455,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a8e9e03dd19148b69c652890abfc7177.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-97a7d6e2e5d9bb-71f5c6218f-320.webp",
          "640": "/prompt-template-images/tpl-97a7d6e2e5d9bb-71f5c6218f-640.webp",
          "960": "/prompt-template-images/tpl-97a7d6e2e5d9bb-71f5c6218f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:11:58.480Z"
    },
    {
      "id": "tpl-a8adf83f5ddf63",
      "slug": "high-angle-cinematic-portrait-by-avelyrahnai",
      "title": "High Angle Cinematic Portrait (by @AvelyrahnAI)",
      "prompt": "Edit foto wanita tersebut menjadi potret High Angle Sinematik dari seorang wanita muda yang cantik dari sudut pandang belakang. Fokus utamanya adalah pada bahu, lengan, dan sebagian wajahnya yang menghadap ke samping dengan ekspresi tenang. Riasan flawess natural eye shadow semi peach-brown lembut, bulu mata lentik, blush on tipis peach lembut dengan lisptik glossy peach lembut, rambut lurusnya tersanggul keatas agak longgar sedikit ada helaian rambut samping kanan-kirinya membingkai wajahnya. Ia mengenakan atasan sweater rajut dengan model sabrina berwarna cokelat muda. Tekstur kulitnya terlihat sangat halus di bawah siraman cahaya matahari yang terfilter. Latar belakang di outdoor buram (b",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2542,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e02ceee05ec34b9fbb9231ab5b2b06d5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a8adf83f5ddf63-0cddb7e08d-320.webp",
          "640": "/prompt-template-images/tpl-a8adf83f5ddf63-0cddb7e08d-640.webp",
          "960": "/prompt-template-images/tpl-a8adf83f5ddf63-0cddb7e08d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:12:09.077Z"
    },
    {
      "id": "tpl-a48c65b3fff2f9",
      "slug": "chiaroscuro-hyper-realistic-portrait-by-iamsofiaijaz",
      "title": "Chiaroscuro Hyper-realistic Portrait (by @iamsofiaijaz)",
      "prompt": "Create a hyper-realistic 8K cinematic portrait of the uploaded person in a dramatic chiaroscuro style. The subject is seated at a three-quarter angle, leaning slightly forward with a relaxed yet commanding posture. His face is turned slightly away from the camera, not looking at the lens, with one side of the face sharply illuminated and the opposite side fading into deep, velvety black shadow. His expression is contemplative. His hands are near the chest in a natural, precise pose, with the fingers gently and correctly interlocked. One wrist clearly shows a luxury black chronograph watch with a detailed metal link bracelet, and one hand wears a subtle silver ring. He is dressed in a sharp b",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2563,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b944e2affe8043a7891a349ffeb6f968.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a48c65b3fff2f9-132d60664d-320.webp",
          "640": "/prompt-template-images/tpl-a48c65b3fff2f9-132d60664d-640.webp",
          "960": "/prompt-template-images/tpl-a48c65b3fff2f9-132d60664d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:12:19.884Z"
    },
    {
      "id": "tpl-653b105be758ca",
      "slug": "minimalist-vogue-editorial-cover-by-vireonixx",
      "title": "Minimalist Vogue Editorial Cover (by @vireonixx)",
      "prompt": "Create a sophisticated high-fashion magazine cover portrait using the provided reference image only for the subject's identity and facial features. Transform the scene into a minimalist Vogue-inspired editorial cover that emphasizes timeless style, intellectual elegance, and refined simplicity. COMPOSITION & FRAMING: Vertical magazine cover format, approximately 4:5 aspect ratio. Upper-torso portrait composition, framed from mid-abdomen to slightly above the head. Subject positioned centrally with balanced negative space around the figure for luxury editorial typography. Clean, uncluttered layout with strong visual breathing room. Direct engagement with the camera creates intimacy and author",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2611,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/86d969a5c4444da6b6a212daa9ed187e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-653b105be758ca-0c734d6e18-320.webp",
          "640": "/prompt-template-images/tpl-653b105be758ca-0c734d6e18-640.webp",
          "960": "/prompt-template-images/tpl-653b105be758ca-0c734d6e18-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:12:51.811Z"
    },
    {
      "id": "tpl-b5009dd47d2db4",
      "slug": "cinematic-street-photography-portrait-by-frametheory058",
      "title": "Cinematic Street Photography Portrait (by @frametheory058)",
      "prompt": "Create an ultra-realistic cinematic street photography portrait of me on a busy city street. Keep my face exactly the same as in the reference photo — same facial structure, eyes, nose, lips, hairstyle, skin tone, proportions, and overall identity. Do not alter, beautify, or reinterpret my appearance in any way. I am standing confidently in the center of the frame wearing an oversized black hoodie, relaxed cargo pants, and casual streetwear. My expression is playful, slightly mischievous, and natural, as if I’m proudly showing my creative side. I’m holding a large white poster board in front of me. The poster should contain only ONE hand-drawn sketch illustration of me. No multiple portraits",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2639,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1a0d2e44722b48a596793c5ba5f54d7e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b5009dd47d2db4-49bc23a842-320.webp",
          "640": "/prompt-template-images/tpl-b5009dd47d2db4-49bc23a842-640.webp",
          "960": "/prompt-template-images/tpl-b5009dd47d2db4-49bc23a842-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:13:18.386Z"
    },
    {
      "id": "tpl-209eab07e79ca6",
      "slug": "full-shot-man-white-chair-by-jamilai55",
      "title": "Full Shot Man White Chair (by @JamilAI55)",
      "prompt": "A full shot of a man sitting on a white chair with his legs crossed, wearing a dark button-down shirt, white pants, and white slides, uploaded face as reference, with an old-fashioned film camera on a tripod to his left, a potted green plant to his right, and various design-related elements scattered around him, including a notepad listing 'Creative Cloud' applications, a Polaroid photo with the words 'Creativity is Fun,' and text snippets like 'Be Different' and 'Dare to Stand Out,' all arranged in a collage style, with a color palette of muted blues, grays, and whites, and pops of color from the plant and text, creating a visually engaging and informative composition, reminiscent of a grap",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2723,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/48fdadd06e724ae980973275ad13895a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-209eab07e79ca6-02b21fd130-320.webp",
          "640": "/prompt-template-images/tpl-209eab07e79ca6-02b21fd130-640.webp",
          "960": "/prompt-template-images/tpl-209eab07e79ca6-02b21fd130-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:14:31.180Z"
    },
    {
      "id": "tpl-e81521bdf2a3d1",
      "slug": "eiffel-tower-low-angle-fashion-portrait-by-chaseunre",
      "title": "Eiffel Tower Low Angle Fashion Portrait (by @CHAseUnre)",
      "prompt": "에펠탑 중앙 하단에서 카메라를 아래로 당당하게 내려다보는 로우 앵글 포즈입니다. 상체는 프레임 우측을 향해 45도 틀어져 있고, 고개를 돌려 카메라를 내려다 보고 있습니다. 바람에 날리는 머리카락 사이로 세련되고 쿨한 표정을 짓고 있으며, 카메라를 아련하면서도 자신감 넘치는 눈빛으로 가만히 응시하고 있습니다. 몸에 부드럽게 밀착되는 정갈하고 심플한 화이트 반소매 라운드넥 티셔츠를 입고 있습니다. 머리카락은 바람을 맞아 자연스럽게 볼륨감이 살아서 얼굴 주변으로 흩날리고 있습니다. 실버 금속 테에 은은한 보랏빛이 도는 반투명 렌즈의 스퀘어 선글라스를 착용했으며, 촉촉한 연분홍색 립글로스를 바른 내추럴하고 깨끗한 메이크업입니다. 인물에 대한 직접 조명은 전혀 없으며 에펠탑 아래에서 은은하게 자연광이 있을 뿐입니다. 바닥에서 하늘을 수직에 가깝게 올려다보는 극단적인 로우 앵글(웜즈 아이 뷰)로 촬영되었습니다. 화면 전체를 거대하게 감싸며 가로지르는 파리 에펠탑의 정교하고 거대한 짙은 회색 철골 격자 구조물이 배경입니다.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2736,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9b93d61d995b470984719d4a657912d9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e81521bdf2a3d1-eb9eed8dd7-320.webp",
          "640": "/prompt-template-images/tpl-e81521bdf2a3d1-eb9eed8dd7-640.webp",
          "960": "/prompt-template-images/tpl-e81521bdf2a3d1-eb9eed8dd7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:14:41.681Z"
    },
    {
      "id": "tpl-dd5bf0c50669eb",
      "slug": "7-panel-emotion-grid-portrait-by-iamaiistudio",
      "title": "7-Panel Emotion Grid Portrait (by @iamaiistudio)",
      "prompt": "Full prompt: Grid layout with thin white gaps between panels and a subtle outer white border around the entire composition. Clean, modern UI aesthetic with slight rounded corners on every tile. Panel 1: Joyful (Yellow). Warm yellow gradient. Arms raised overhead. Eyes shut. Wide open laugh. High-energy pose. Panel 2: Shocked (Blue). Blue gradient. Both hands cupping cheeks. Eyes wide open. Mouth agape. Eyebrows arched high. Panel 3: Stern (Red). Solid red background. Arms folded. Brows furrowed. Lips pressed tight. Dark hoodie. Panel 4: Affectionate (Pink). Soft pink gradient. Cradling a small brown dog. Gentle smile. Cozy knit sweater. Panel 5: Confident (Purple). Purple gradient. One hand",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2801,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/12504eb03ef0432380101d463ccd45b1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-dd5bf0c50669eb-d8212048c4-320.webp",
          "640": "/prompt-template-images/tpl-dd5bf0c50669eb-d8212048c4-640.webp",
          "960": "/prompt-template-images/tpl-dd5bf0c50669eb-d8212048c4-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:15:12.642Z"
    },
    {
      "id": "tpl-45634ea130a075",
      "slug": "korean-webtoon-couple-selfie-by-taaruk",
      "title": "Korean Webtoon Couple Selfie (by @Taaruk_)",
      "prompt": "Transform the uploaded photo into a cute hand-painted Korean webtoon illustration of a happy couple taking a selfie outdoors. Soft pastel color palette, round expressive eyes, rosy cheeks, warm smiles, cozy romantic atmosphere, charming doodle elements floating around them (hearts, flowers, stars, swirls, sunshine icons). Lush green park or beach scenery in the background, bright sunny day, whimsical children's-book aesthetic, clean line art, soft painterly shading, adorable proportions, cozy cottagecore vibes, dreamy and cheerful mood, highly detailed digital illustration, storybook quality, kawaii aesthetic, gentle textures, vibrant yet soft colors, Instagram-worthy artwork, wholesome coup",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2917,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1e034d6d83d741fca27766d5728995b5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-45634ea130a075-4fc2177f8a-320.webp",
          "640": "/prompt-template-images/tpl-45634ea130a075-4fc2177f8a-640.webp",
          "960": "/prompt-template-images/tpl-45634ea130a075-4fc2177f8a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:16:40.117Z"
    },
    {
      "id": "tpl-1085d7f53f6ae5",
      "slug": "non-existent-1870s-vintage-photograph-by-arminn-ai",
      "title": "Non-Existent 1870s Vintage Photograph (by @Arminn_Ai)",
      "prompt": "Non Existence Vintage Photographs with GPT Image 2 📸 - Prompt 👇 a photographic image in the style of 1870, [SCENE DESCRIPTION], with [CHARACTERS described in period accurate clothing], [Describe the interaction]. The photo has an aged and worn appearance, as it was taken in 1870. It features prominent time-induced chemical stains, heavy grain, sepia toning, and deep scratches. Significantly reduce the sharpness so that the details of the [SUBJECT] are not crisp, making the [SUBJECT] blurry and low-fidelity. Greatly increase the wear of the photo, including small tears, missing corners, water damage, and small wormholes caused by insect damage. Add a prominent, jagged diagonal cut across the",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2930,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/66a8042f85f3419aa79f66ff8f717ced.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1085d7f53f6ae5-f051e32dba-320.webp",
          "640": "/prompt-template-images/tpl-1085d7f53f6ae5-f051e32dba-640.webp",
          "960": "/prompt-template-images/tpl-1085d7f53f6ae5-f051e32dba-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:16:50.416Z"
    },
    {
      "id": "tpl-348c6253d8f991",
      "slug": "dreamlike-cloud-face-portrait-by-iamaiistudio",
      "title": "Dreamlike Cloud Face Portrait (by @iamaiistudio)",
      "prompt": "prompt: Reimagine [NAME] as a dreamlike cloud portrait, keeping their face, expression, and defining features clearly recognizable while transforming the form into soft billowing clouds against a bright blue sky. The portrait should look like the face is materializing from or melting into the clouds, with gentle diffused natural light casting soft highlights and airy shadows for depth and realism. Avoid sharp edges, visible skin texture, or hard details, keeping the transition symbolic and organic. Preserve facial proportions, eyes, smile, and distinctive features through the cloud structure. Style: dreamy, ethereal, cinematic, surreal Lighting: volumetric sunlight, soft glow, natural Color",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 3064,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/949a058920e643a49b0de3328204c560.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-348c6253d8f991-5a22f63be8-320.webp",
          "640": "/prompt-template-images/tpl-348c6253d8f991-5a22f63be8-640.webp",
          "960": "/prompt-template-images/tpl-348c6253d8f991-5a22f63be8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:18:06.307Z"
    },
    {
      "id": "tpl-626ffb67b8a952",
      "slug": "face-preserved-ultra-realistic-portrait-by-rainlanded",
      "title": "Face-Preserved Ultra-Realistic Portrait (by @Rainlanded)",
      "prompt": "low quality, blurry, distorted face, bad anatomy, extra limbs, stiff pose, unnatural selfie angle, overexposed skin, harsh flash, plastic skin, overly bright colors, cheap fabric, messy background, cartoon style, exaggerated beauty filter, unrealistic eyes, artificial hair, bad hands, awkward arm, noisy image.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 3090,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/971d0cf43a55492187abba43c9bd3443.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-626ffb67b8a952-9c2daa2387-320.webp",
          "640": "/prompt-template-images/tpl-626ffb67b8a952-9c2daa2387-640.webp",
          "960": "/prompt-template-images/tpl-626ffb67b8a952-9c2daa2387-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:18:29.845Z"
    },
    {
      "id": "tpl-deb5b2ea3f43f4",
      "slug": "by-liyue-ai-8b0c44",
      "title": "深夜调酒师暗红酒吧封面写真 (by @liyue_ai)",
      "prompt": "深夜调酒师人物摄影：高级酒吧场景、暗红灯光、玻璃酒杯反光 + 黑衬衫、深酒红马甲、袖箍建立人物身份感 + 调酒动作、抬眼看镜头、金色边缘光建立封面气场。危险但克制的气质，深夜暗红酒吧封面风。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 3136,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d0021e5d98564fb3b18474cbeaa960f2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-deb5b2ea3f43f4-b39e1f9da1-320.webp",
          "640": "/prompt-template-images/tpl-deb5b2ea3f43f4-b39e1f9da1-640.webp",
          "960": "/prompt-template-images/tpl-deb5b2ea3f43f4-b39e1f9da1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:18:50.859Z"
    },
    {
      "id": "tpl-95492c90d80bb9",
      "slug": "affectionate-couple-portrait-with-engagement-ring-selfie",
      "title": "Affectionate Couple Portrait with Engagement Ring Selfie",
      "prompt": "Affectionate Couple Portrait with Engagement Ring Selfie。Match the reference framing: the entire smartphone screen is visible, shot as a mirror selfie capturing the couple inside the phone display.；Ultra-photoreal candid editorial mirror selfie taken through a smartphone interface. The phone fills most of the frame, with realistic glass reflections, slight smudges, and screen glare. Inside the phone display, a couple sits close in a warm indoor setting. The woman wears a floral dress and layered bracelets/rings; she poses with a playful confident smirk toward the camera. The man wears a light t-shirt and tinted glasses; he kisses her cheek affectionately while wrapping an arm around her. Hands are prominent: the phone is held close to the mirror, fingers and jewelry sharply rendered. Environment: cozy lounge or café interior with warm ambient lighting and subtle bokeh highlights. Composi。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 7917,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-8a1e4c80cfdef0",
      "slug": "kendrick-lamar-and-fan-portrait-cheerful-hotel-lobby-photo",
      "title": "Kendrick Lamar & Fan Portrait: Cheerful Hotel Lobby Photo",
      "prompt": "Kendrick Lamar & Fan Portrait: Cheerful Hotel Lobby Photo。A candid medium shot photograph of kendrick Lamar smiling with a female fan in a luxury hotel lobby. kendrick lamar wears a black shearling jacket, the woman wears a black puffer jacket with fur. Warm, soft indoor lighting from recessed ceiling lights. Wood paneling, marble floor, and a gold sculpture in the background.；Standing close, head tilted towards kendrick Lamar, lips pursed in a kissy face；The two main subjects, particularly kendrick Lamar’s smile。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 10034,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-67451316c35c21",
      "slug": "glamorous-woman-in-silver-dress-fashion-photoshoot",
      "title": "Glamorous Woman in Silver Dress | Fashion Photoshoot",
      "prompt": "Glamorous Woman in Silver Dress | Fashion Photoshoot。silver metallic chainmail / crystal mesh slip dress with draped neckline, reflective micro-texture, high-end couture feel；tack-sharp eyes and lips; detailed dress texture; background falls off smoothly。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 11588,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-ea5457c74faef1",
      "slug": "monaco-fashion-woman-overlooking-iconic-race-track",
      "title": "Monaco Fashion: Woman Overlooking Iconic Race Track",
      "prompt": "Monaco Fashion: Woman Overlooking Iconic Race Track。Rooftop terrace overlooking the Fairmont Hairpin turn of the Monaco Grand Prix in Monte Carlo；aramco, UBS, Heineken 0.0, MONTE-CARLO, CAFE DE PARIS on racetrack advertising barriers；Dense hillside with multi-story buildings, hotels, a prominent beige skyscraper, construction cranes, green trees, and distant mountains under a cloudy sky. Racetrack with red/white kerbing and vehicles below.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 11705,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-2956d4dd4d5f27",
      "slug": "pilates-studio-photo-woman-in-pink-leggings-and-crop-top",
      "title": "Pilates Studio Photo: Woman in Pink Leggings & Crop Top",
      "prompt": "Pilates Studio Photo: Woman in Pink Leggings & Crop Top。light pink Pilates grip socks；high-waisted dusty pink leggings；bright modern Pilates studio。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 11870,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-4b5d6d44143100",
      "slug": "elegant-woman-in-black-satin-slip-dress-fashion-portrait",
      "title": "Elegant Woman in Black Satin Slip Dress - Fashion Portrait",
      "prompt": "Elegant Woman in Black Satin Slip Dress - Fashion Portrait。black high-fashion dress (NOT a bodysuit). Choose ONE: (A) sleek black satin slip dress with a high-cut side opening and a draped neckline, OR (B) black halter-neck evening mini dress with an open side cutout but clearly a dress with skirt and hemline. Tasteful coverage, couture editorial silhouette.；profile seated/leaning pose with arched back, one hand resting on upper thigh/hip area, shoulders angled forward; elegant posture; dress hem/side drape visible；natural dark brown/black。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 12092,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-7ddae45322e297",
      "slug": "elegant-woman-in-embroidered-suit-in-botanical-greenhouse",
      "title": "Elegant Woman in Embroidered Suit in Botanical Greenhouse",
      "prompt": "Elegant Woman in Embroidered Suit in Botanical Greenhouse。tailored outfit integrated with leaf or branch-inspired elements；natural light, soft greenery shadows；Editorial fashion portrait。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13522,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-1d62d62e1099ae",
      "slug": "glamorous-woman-in-red-gown-fireworks-over-city-at-night",
      "title": "Glamorous Woman in Red Gown, Fireworks over City at Night",
      "prompt": "Glamorous Woman in Red Gown, Fireworks over City at Night。Black, faux fur, draped over arms；Dark, with fireworks exploding；Glamorous, celebratory, luxurious。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 13964,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-c1a9deee51f9b0",
      "slug": "london-fashion-street-portrait-by-shamiweb3",
      "title": "London Fashion Street Portrait (by @ShamiWeb3)",
      "prompt": "Photorealistic cinematic fashion video set on an elegant London shopping street inspired by Bond Street. A stylish British woman in her late 20s walks confidently past a luxury boutique. She wears gold earrings, a burgundy double-breasted blazer, matching mini skirt, a light blue ruffled silk blouse, a structured dark red leather shoulder bag, and metallic pointed heels. Her chestnut hair is styled in a sleek low bun. Her phone rings. She glances at the screen, stops gracefully, and answers. A male voice asks, “Hello there, can you please scan your outfit?” She smiles and replies in a soft British accent, “I guess so.” The camera performs a smooth head-to-toe scan, displaying elegant text la",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1388,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-ef2d7ae0363e37",
      "slug": "gamer-girl-with-retro-video-game-collection",
      "title": "Gamer Girl with Retro Video Game Collection",
      "prompt": "Gamer Girl with Retro Video Game Collection。intimate, playful, nostalgic, confidently casual with a strong gamer-at-home vibe；a dimly lit retro gamer room filled with densely packed shelves of action figures, boxed toys, handheld consoles, and vintage game cases; warm tungsten floor lamp providing ambient background glow; slight shadow falloff caused by the direct flash illuminating the foreground more prominently.；seated cross-legged on a couch, holding a game controller naturally in both hands。",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 7477,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-1e2d2c486b6afc",
      "slug": "luxury-portrait-with-tiny-alter-ego-by-professor-134",
      "title": "Luxury Portrait With Tiny Alter Ego (by @Professor_134)",
      "prompt": "- Ultra-cinematic luxury portrait of a fashionable young man standing confidently beside his tiny animated counterpart inside a sophisticated studio setup. The adult character has thick styled black hair, deep brown eyes, a perfectly trimmed beard, warm tan skin, and a calm charismatic smile. He wears an elegant matte-black tuxedo with a fitted black shirt, luxury wristwatch, and minimal jewelry, exuding a modern gentleman aesthetic. His posture is composed with hands clasped naturally in front of him while leaning subtly against a textured charcoal wall. Next to him stands a miniature stylized version of himself designed in high-end 3D animated character style, featuring oversized sparkling",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1084,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-1425e0b44fc0fb",
      "slug": "cosmic-garden-fantasy-portrait-by-doctoramna11",
      "title": "Cosmic Garden Fantasy Portrait (by @DoctorAmna11)",
      "prompt": "Ultra-realistic cinematic fantasy-science portrait of a beautiful young female scientist inside a futuristic bio-cosmic laboratory garden at night, inspired by dreamy sci-fi storytelling. She is leaning over a glowing holographic solar system projection floating above a sleek glass table, gently touching a luminous orbit line with curiosity and wonder. Her facial features are soft, elegant, and expressive with natural makeup, thick defined eyebrows, warm smile, glowing skin, and loosely tied dark brown hair with cinematic flyaway strands.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1796,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-78ab3d14b2a54e",
      "slug": "japanese-film-aesthetic-airport-portrait-by-bubblebrain",
      "title": "Japanese Film Aesthetic Airport Portrait (by @BubbleBrain)",
      "prompt": "Use case: photorealistic-natural. Asset type: editorial portrait variant, target composition 1600x1088 landscape. Primary request: Japanese negative film aesthetic, summer, soft natural sunlight, slightly overexposed highlights, low contrast, muted faded colors, subtle grain, nostalgic memory-like realism. Adult Korean female idol in her mid-20s, beautiful and calm, subtle sensual presence through natural gesture only, relaxed body line and effortless charm. Tasteful editorial portrait, no nudity, no explicit pose, no watermark, no readable text, no extra people. Scene/backdrop: Incheon airport observation deck near a glass wall, pale runway haze outside, empty metal benches, morning light,",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2095,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-d056fcb34b44cd",
      "slug": "fashion-casting-contact-sheet-by-ciri-ai",
      "title": "Fashion Casting Contact Sheet (by @Ciri_ai)",
      "prompt": "Black-and-white fashion casting contact sheet of [HUMAN] with [HAIR], arranged in a clean 2x2 grid of four close portrait frames against [BACKGROUND], wearing [CLOTHING] and [ACCESSORY]. Each frame shows a different expression and angle: [EXPRESSIONS]. Soft studio lighting, crisp monochrome contrast, natural skin texture, visible facial details, clean plain backdrop, subtle film grain, high-end editorial test shoot, minimal styling, intimate camera distance, professional portrait photography, aspect ratio 4:5.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2441,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-1ec049bf218cf9",
      "slug": "south-korea-graffiti-street-art-portrait-by-kashberg-0",
      "title": "South Korea Graffiti Street Art Portrait (by @Kashberg_0)",
      "prompt": "Create a viral CapCut-style South korea graffiti image from the uploaded person. Keep the face consistent. Add South korea jersey, full-body pose, giant hand-painted mural portrait in the background, South korea logo, South korea 2026 text, yellow and green football colors, concrete wall, clean poster composition, realistic 闪 photo foreground, illustrated thelifeafptfiti b--'ground,TikTok",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2892,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-76cf87bdd4bbad",
      "slug": "by-chaseunre",
      "title": "파리 가로등 기댄 감성 전신 포즈 (by @CHAseUnre)",
      "prompt": "[인물] 이미지1, 이미지2 참조. 파리의 길거리 표지판 기둥에 몸을 비스듬히 기대어 서 있는 전신 포즈입니다. 고개를 살짝 왼쪽으로 기울이고 눈을 감은 채 입술을 아주 약간 내밀며 나른하고 감성적인 표정을 짓고 있습니다. 왼손에는 테이크아웃 커피 컵을 가볍게 쥐고 있습니다. 배경: 파리 거리 분위기, 흐린 자연광.",
      "category": "人像与时尚摄影",
      "categorySlug": "portrait-fashion-photography",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 3122,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-cda42198d31c2d",
      "slug": "ben-10-cinematic-poster-photorealistic-and-animated-duo",
      "title": "Ben 10 Cinematic Poster: Photorealistic & Animated Duo",
      "prompt": "Ultra-high-resolution 8K studio portrait featuring a real human woman standing beside a stylized cartoon character of choice, full-body composition, both subjects clearly visible and centered. Human subject: young adult woman with natural smile, relaxed confident posture, realistic facial features, natural makeup, wearing modern casual clothing such as a knit sweater, fitted jeans or pants, and casual sneakers, hands relaxed or casually posed, photorealistic skin texture, detailed hair strands, soft facial highlights. Cartoon character: [INSERT CARTOON CHARACTER NAME OR STYLE], fully animated and stylized, vibrant saturated colors, smooth or plush-like surface texture, expressive large eyes,",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6418,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/fef2c39c437140288cca43348c17c73f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-cda42198d31c2d-a9d2f1c989-320.webp",
          "640": "/prompt-template-images/tpl-cda42198d31c2d-a9d2f1c989-640.webp",
          "960": "/prompt-template-images/tpl-cda42198d31c2d-a9d2f1c989-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:20:55.300Z"
    },
    {
      "id": "tpl-ca07ff59061383",
      "slug": "heartbreak-in-the-rain-cinematic-drama-of-separation",
      "title": "Heartbreak in the Rain: Cinematic Drama of Separation",
      "prompt": "Create a 9-panel cinematic storyboard set in a rainy, melancholic atmosphere. Show a young woman in a soaked dress standing beneath stone arches as a man walks away into the rain. Include close-ups of her emotional expression, a moment of their hands parting, shots of her crying against a pillar, and a final wide shot of her standing alone. Use soft, moody lighting, blue-gray tones, shallow depth of field, and dramatic raindrops. Panels should feel emotional, poetic, and film-like ---",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6482,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/64d397a20bf2498e84085358d01a33aa.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ca07ff59061383-0b51012794-320.webp",
          "640": "/prompt-template-images/tpl-ca07ff59061383-0b51012794-640.webp",
          "960": "/prompt-template-images/tpl-ca07ff59061383-0b51012794-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:21:30.555Z"
    },
    {
      "id": "tpl-f6200eb68ea347",
      "slug": "cheerful-woman-beautyverse-magazine-cover-2026-portrait",
      "title": "Cheerful Woman BeautyVerse Magazine Cover 2026 Portrait",
      "prompt": "Cheerful Woman BeautyVerse Magazine Cover 2026 Portrait。High-fashion magazine cover aesthetic with a touch of playful futuristic glow.；BeautyVerse。",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 9955,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b157f30e339c4eaf974e32a15e67af72.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f6200eb68ea347-e349afaa6a-320.webp",
          "640": "/prompt-template-images/tpl-f6200eb68ea347-e349afaa6a-640.webp",
          "960": "/prompt-template-images/tpl-f6200eb68ea347-e349afaa6a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:21:50.702Z"
    },
    {
      "id": "tpl-f110c65374c7f1",
      "slug": "fashion-blueprint-editorial-sheet-by-zephyraleigh",
      "title": "Fashion Blueprint Editorial Sheet (by @ZephyraLeigh)",
      "prompt": "Fashion blueprint sheet of a stylish young woman posing beside a bright orange wall, half-body fashion editorial view with detailed outfit annotations and luxury styling callouts. Long sleek dark hair, soft glam makeup, silver drop earrings, layered silver necklaces, fitted dark brown cropped tube top, oversized pastel mint-green blazer with structured shoulders, matching high-waisted wide-leg trousers, elegant silver chain detail attached to blazer, relaxed confident pose with one hand in pocket. Surrounding the model are fashion infographic elements, jewelry breakdowns, fabric texture descriptions, tailoring notes, pose analysis, accessory close-ups, cinematic sunlight reflections, modern",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1328,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6807b49b078b4892b96e9d8dd95ae783.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f110c65374c7f1-b9c9fb50c6-320.webp",
          "640": "/prompt-template-images/tpl-f110c65374c7f1-b9c9fb50c6-640.webp",
          "960": "/prompt-template-images/tpl-f110c65374c7f1-b9c9fb50c6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:23:19.056Z"
    },
    {
      "id": "tpl-42da5d8c50f3a9",
      "slug": "clean-tech-advertisement-poster-by-strength04-x",
      "title": "Clean Tech Advertisement Poster (by @Strength04_X)",
      "prompt": "- A clean tech advertisement poster. A stylish young woman in a white minimalist outfit tilts her head with eyes closed enjoying music beside a giant white wireless earbud case 2.5x her height open and glowing softly, \"AURA\" engraved on the case lid in silver. Pure clean white background with subtle soft shadows and faint sound wave lines. Ultra minimal thin sans-serif typography \"AURA\" in light grey filling the background.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1849,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/743faa91a7e54152923aafb1de912ec8.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-42da5d8c50f3a9-aa7a8b1cb3-320.webp",
          "640": "/prompt-template-images/tpl-42da5d8c50f3a9-aa7a8b1cb3-640.webp",
          "960": "/prompt-template-images/tpl-42da5d8c50f3a9-aa7a8b1cb3-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:24:47.636Z"
    },
    {
      "id": "tpl-296a4e3de5964f",
      "slug": "korean-fashion-collage-poster-prompt",
      "title": "Korean Fashion Collage Poster [Prompt**:]",
      "prompt": "Young Korean woman in ultra-realistic style in the uploaded image, elegant collage poster, fitted black t-shirt with minimalist logo, black denim shorts, black high-top Nike sneakers, long straight silky dark black hair with soft strands framing the face, glossy nude peach lips, Douyin-style makeup, winged eyeliner, soft pink blush, radiant skin, long eyelashes, dual composition with large portrait and full-length flowing hair, golden cinematic lighting, ink splash effects, luxurious white background, ultra-detailed, 8K, 3:4. **Output**: <img src=\"images/portrait_case258/output.jpg\" width=\"500\">",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2111,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "blocked",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-ce571b073888d1",
      "slug": "grunge-fashion-editorial-collage-prompt",
      "title": "Grunge Fashion Editorial Collage [Prompt**:]",
      "prompt": "A high-fashion editorial portrait of a stylish woman with a long, thick French side-braid hair, wearing sleek black designer sunglasses, a premium oversized beige t-shirt tucked into tailored beige trousers. She is wearing a minimalist thick gold chain necklace and a luxury silver watch, posing elegantly with one hand gently touching the back of her neck and looking away with a confident smile.The background is a creative grunge black-and-white collage art featuring a Pegasus illustration, a vintage police car, a classic Chanel perfume bottle, newspaper textures, and vinyl records with white sticker cutout borders. Cinematic studio lighting, sharp focus, magazine cover aesthetic, 8K resoluti",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2141,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c9282dfa5c7d4b43b9bffb2c8c056471.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ce571b073888d1-2b25091fb2-320.webp",
          "640": "/prompt-template-images/tpl-ce571b073888d1-2b25091fb2-640.webp",
          "960": "/prompt-template-images/tpl-ce571b073888d1-2b25091fb2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:25:40.789Z"
    },
    {
      "id": "tpl-b27fd0a9012f7b",
      "slug": "black-and-white-identity-collage-grid-by-mehvishs25",
      "title": "Black-and-White Identity Collage Grid (by @mehvishs25)",
      "prompt": "Edit the photo while preserving the subject’s exact facial features and identity. Create a high-resolution vertical portrait composition (9:16), ultra-detailed, sharp focus throughout, no background blur, rendered with a premium 8K editorial finish. Design the image as a sophisticated black-and-white fashion portrait collage arranged in a 2×3 grid, featuring six unique frames of the same young woman in a clean, minimalist indoor studio environment. The overall aesthetic should feel elegant, cinematic, intimate, and effortlessly stylish, inspired by timeless monochrome fashion editorials and luxury magazine photography. Hair is long, reaching the waist, colored a cool ash-brown with subtle gr",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2266,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e53474b52184465e9c2b9e7370722dea.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b27fd0a9012f7b-4ab3084fb8-320.webp",
          "640": "/prompt-template-images/tpl-b27fd0a9012f7b-4ab3084fb8-640.webp",
          "960": "/prompt-template-images/tpl-b27fd0a9012f7b-4ab3084fb8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:26:12.181Z"
    },
    {
      "id": "tpl-4ced4c3889eeb2",
      "slug": "nightlife-restaurant-flash-collage-by-zephyraleigh",
      "title": "Nightlife Restaurant Flash Collage (by @ZephyraLeigh)",
      "prompt": "Using the provided reference image, create an ultra-realistic candid nightlife fashion photoshoot of a beautiful young woman at a trendy upscale restaurant lounge at night. She has a slim figure, long voluminous dark brown hair, flawless glowing skin, soft glam makeup, glossy nude lips, subtle eyeliner, and an effortlessly confident expression. She is wearing a fitted deep red halter-neck crop top with a plunging neckline, paired with low-rise charcoal gray vintage-wash denim jeans. Accessories include a small black quilted shoulder bag with a silver chain strap, delicate bracelets, and minimal jewelry. Create a 3-photo vertical collage capturing different candid poses: 1. Looking down with",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2395,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "blocked",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-51ffbb89b7ae04",
      "slug": "japanese-fashion-collage-poster-by-mind-boticni",
      "title": "Japanese Fashion Collage Poster (by @Mind_Boticni)",
      "prompt": "Cinematic vertical collage featuring a Japanese woman in elegant fashion captured during golden sunset. Background composed of warm-toned rounded storyboard frames arranged diagonally, each showing soft monochrome motion scenes—running fingers through hair, walking on bridge, looking at skyline, soft smile in wind. The main subject is in rich color with glowing sunset highlights, wearing flowing rust-orange designer dress with natural fabric movement. Emotional storytelling mood, romantic cinematic tone, high-end fashion editorial poster style.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3462,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2261521e2af14c09ac5d2b48719471bc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-51ffbb89b7ae04-92559ecf1c-320.webp",
          "640": "/prompt-template-images/tpl-51ffbb89b7ae04-92559ecf1c-640.webp",
          "960": "/prompt-template-images/tpl-51ffbb89b7ae04-92559ecf1c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:28:45.350Z"
    },
    {
      "id": "tpl-0b06b90bf74576",
      "slug": "trash-polka-headphones-portrait-by-chillaikalan",
      "title": "Trash Polka Headphones Portrait (by @ChillaiKalan__)",
      "prompt": "​A high-detail digital painting of a young woman wearing large, vibrant red over-ear headphones, looking directly at the viewer with a piercing gaze. The art style is a fusion of stylized realism and urban abstract expressionism. Her hair is messy, light brown/blonde with loose strands and sharp, geometric shards integrated into the locks. The composition features heavy ink splatters, paint drips, and chaotic red and black brushstrokes reminiscent of 'trash polka' art.￼ The background is a clean, minimalist off-white, making the bold red accents and fine linework pop. High contrast, sharp focus on the eyes, cinematic lighting, 8k resolution, trendy street art aesthetic. ​Key Technical Elemen",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3728,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b31256a641fc45f0b76d0b090f06f081.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0b06b90bf74576-43cb21d59b-320.webp",
          "640": "/prompt-template-images/tpl-0b06b90bf74576-43cb21d59b-640.webp",
          "960": "/prompt-template-images/tpl-0b06b90bf74576-43cb21d59b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:29:41.249Z"
    },
    {
      "id": "tpl-d095d81f2dc8dc",
      "slug": "korean-editorial-fashion-moodboard-by-mind-boticni",
      "title": "Korean Editorial Fashion Moodboard (by @Mind_Boticni)",
      "prompt": "Create an ultra-realistic luxury fashion moodboard poster in a premium Korean editorial magazine style. A beautiful young woman stands elegantly in the center wearing a flowing ivory floral chiffon maxi dress with layered translucent fabric, tiny embroidered flowers, delicate lace trims, and soft movement in the fabric. Over it she wears a textured handmade mustard crochet cardigan with oversized sleeves and cozy vintage stitching details. She has long voluminous dark wavy hair with soft curtain bangs, glowing radiant skin, glossy peach makeup, subtle freckles, soft shimmer eyelids, glossy nude lips, and delicate gold jewelry including layered necklaces, pearl rings, and slim bracelets. She",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3841,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "blocked",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-39a7e278205220",
      "slug": "window-girl-fashion-editorial-by-iamaiistudio",
      "title": "Window Girl Fashion Editorial (by @iamaiistudio)",
      "prompt": "://t.co/yMuwrbQO3u Ultra-photoreal fashion editorial. A young woman sits casually inside the open window of a soft warm yellow house, one leg extended outward and raised, the other relaxed, one arm hanging freely. She wears a white satin midi slip dress with thin straps and fluid fabric, clean white over-ear headphones, and simple white flat shoes. She holds a loose bouquet of fresh yellow flowers in one hand. Expression: calm, relaxed confidence, gaze forward or slightly to the side. Architecture: simple rectangular window, white interior walls, clean uncluttered sunlit facade. Midday direct natural sunlight, crisp shadows. Camera: 35mm lens, centered full-body framing within the window fra",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5709,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/fc27c63282a54ecab554f8f58b5bb14d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-39a7e278205220-a37a47957e-320.webp",
          "640": "/prompt-template-images/tpl-39a7e278205220-a37a47957e-640.webp",
          "960": "/prompt-template-images/tpl-39a7e278205220-a37a47957e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:43:52.267Z"
    },
    {
      "id": "tpl-b8e2453244b909",
      "slug": "three-frame-nightlife-collage-by-mehvishs25",
      "title": "Three-Frame Nightlife Collage (by @mehvishs25)",
      "prompt": "Create image Create a photorealistic three-frame vertical nightlife collage inspired by the supplied reference image. Preserve the subject's facial identity, facial structure, skin tone, hairstyle, and overall appearance while placing her in a fashionable late-evening social setting. The subject is an adult woman in her mid-to-late twenties with long, voluminous dark brown hair styled in soft natural waves, radiant skin, refined soft-glam makeup, defined eyelashes, and glossy neutral-toned lips. Her expression feels warm, confident, and effortlessly playful. Wardrobe: A sophisticated black evening dress with a modern fitted silhouette, paired with delicate silver jewelry including rings and",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5743,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6ce167f46a7444d9beeec73b3abe42ff.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b8e2453244b909-8f09e184c1-320.webp",
          "640": "/prompt-template-images/tpl-b8e2453244b909-8f09e184c1-640.webp",
          "960": "/prompt-template-images/tpl-b8e2453244b909-8f09e184c1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:44:12.407Z"
    },
    {
      "id": "tpl-1c6923a3106c68",
      "slug": "romantic-comedy-poster-how-to-lose-a-guy-in-10-days",
      "title": "Romantic Comedy Poster: How to Lose a Guy in 10 Days",
      "prompt": "Romantic Comedy Poster: How to Lose a Guy in 10 Days。HOW TO LOSE A GUY IN 10 DAYS；High-key studio lighting with softbox key + gentle rim light; crisp edges, natural shadows.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6187,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/110214566c2145be8dca70c43a27e3e3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1c6923a3106c68-55e336feb8-320.webp",
          "640": "/prompt-template-images/tpl-1c6923a3106c68-55e336feb8-640.webp",
          "960": "/prompt-template-images/tpl-1c6923a3106c68-55e336feb8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:19:22.421Z"
    },
    {
      "id": "tpl-32a636ad8bfe11",
      "slug": "romantic-couple-in-rain-movie-poster-the-notebook",
      "title": "Romantic Couple in Rain Movie Poster - The Notebook",
      "prompt": "Romantic Couple in Rain Movie Poster - The Notebook。outdoor rainstorm, blurred natural background, no visible buildings；intimate embrace in the rain, faces close, emotional intensity；simple short-sleeve or cap-sleeve dress, soaked by rain, natural fabric。",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6216,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/14d22ec7237a40778f42814a0ec8d680.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-32a636ad8bfe11-7164e661fb-320.webp",
          "640": "/prompt-template-images/tpl-32a636ad8bfe11-7164e661fb-640.webp",
          "960": "/prompt-template-images/tpl-32a636ad8bfe11-7164e661fb-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:19:43.105Z"
    },
    {
      "id": "tpl-379f17faf74525",
      "slug": "cinematic-desert-walk-solitary-figure-in-orange-haze",
      "title": "Cinematic Desert Walk: Solitary Figure in Orange Haze",
      "prompt": "Cinematic Desert Walk: Solitary Figure in Orange Haze。A lone figure in a long coat walking across a barren landscape in thick orange-red fog.；cinematic silhouette。",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6328,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/92dd1816d37f43fbaea96ad4485022ac.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-379f17faf74525-b9bc24979d-320.webp",
          "640": "/prompt-template-images/tpl-379f17faf74525-b9bc24979d-640.webp",
          "960": "/prompt-template-images/tpl-379f17faf74525-b9bc24979d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:19:53.374Z"
    },
    {
      "id": "tpl-b7cbfdbd48fe79",
      "slug": "cinematic-turkish-history-first-parliament-building-event",
      "title": "Cinematic Turkish History: First Parliament Building Event",
      "prompt": "Cinematic Turkish History: First Parliament Building Event。modern buildings, cars, asphalt, neon, smartphones, wrong era clothing/armor, fantasy, anime, cartoon, text overlay, blurry, low-res, extra limbs。",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6362,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d5df2b920d524664a9deffa0567a0eb3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b7cbfdbd48fe79-1bf49b5ced-320.webp",
          "640": "/prompt-template-images/tpl-b7cbfdbd48fe79-1bf49b5ced-640.webp",
          "960": "/prompt-template-images/tpl-b7cbfdbd48fe79-1bf49b5ced-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:20:04.072Z"
    },
    {
      "id": "tpl-7060420a838c78",
      "slug": "google-nano-banana-ai-prompt-generator-for-cinematic-ufc-photos",
      "title": "Google Nano Banana AI Prompt Generator for Cinematic UFC Photos",
      "prompt": "all you have to do is copy and paste the JSON and you'll get images that look like a creative director made it comment \"nano\" and I'll DM it to you (must be following) ---",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6400,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1bfb97d44a954803b6eb11e37d24d9a9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7060420a838c78-6c609761ed-320.webp",
          "640": "/prompt-template-images/tpl-7060420a838c78-6c609761ed-640.webp",
          "960": "/prompt-template-images/tpl-7060420a838c78-6c609761ed-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:20:13.422Z"
    },
    {
      "id": "tpl-3a2508a794dd53",
      "slug": "tomb-raider-lara-croft-game-art-ancient-jungle-ruins",
      "title": "Tomb Raider Lara Croft Game Art - Ancient Jungle Ruins",
      "prompt": "Will probably get yelled at for this, but this was a single Google Nano Banana prompt without using the original uploaded as a reference ---",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6466,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9ee1c5316ca54b93b9abe2e689d60f88.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3a2508a794dd53-b9be4becac-320.webp",
          "640": "/prompt-template-images/tpl-3a2508a794dd53-b9be4becac-640.webp",
          "960": "/prompt-template-images/tpl-3a2508a794dd53-b9be4becac-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:21:15.700Z"
    },
    {
      "id": "tpl-2cf876030ffc24",
      "slug": "y2k-street-art-editorial-poster-by-kingofdairyque",
      "title": "Y2K Street-Art Editorial Poster (by @kingofdairyque)",
      "prompt": "hair instructions, controlling hairstyle, changing hairstyle, young female, young male, bad anatomy, extra fingers, deformed hands, stiff pose, awkward body lean, distorted sunglasses, warped face, asymmetrical eyes, blurry face, low quality, low resolution, muddy colors, overcluttered layout, too many stickers, unreadable typography, misspelled text, cheap poster design, random logos, watermark, cartoon-only style, duplicate subject, extra limbs, plastic skin.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1152,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/08a31e26c8634520964645f70b824668.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2cf876030ffc24-3afbe97788-320.webp",
          "640": "/prompt-template-images/tpl-2cf876030ffc24-3afbe97788-640.webp",
          "960": "/prompt-template-images/tpl-2cf876030ffc24-3afbe97788-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:22:01.096Z"
    },
    {
      "id": "tpl-7e7dc81de9ebc4",
      "slug": "fashion-collage-multi-style-portrait-by-mind-boticni",
      "title": "Fashion Collage Multi-Style Portrait (by @Mind_Boticni)",
      "prompt": "Create a premium 1:1 ultra-stylish fashion collage advertisement featuring the same young handsome bearded male model across multiple cinematic portrait styles inside one single high-end composition. The model should have sharp jawline, textured beard, messy stylish hair, attractive confident expression, modern masculine aura, and luxury Gen-Z street fashion styling. Entire mood should feel bold, dark, mysterious, and visually addictive — designed for viral social media aesthetics. Theme: midnig",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1180,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ebcad30c62194579b66a9b7eec95fe4b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7e7dc81de9ebc4-93d88a2a46-320.webp",
          "640": "/prompt-template-images/tpl-7e7dc81de9ebc4-93d88a2a46-640.webp",
          "960": "/prompt-template-images/tpl-7e7dc81de9ebc4-93d88a2a46-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:22:21.803Z"
    },
    {
      "id": "tpl-d2ccc8beee7dc1",
      "slug": "summer-campus-tesla-lifestyle-poster-by-shinning1010",
      "title": "Summer Campus Tesla Lifestyle Poster (by @Shinning1010)",
      "prompt": "Create a premium summer campus lifestyle Tesla poster focused mainly on an adult East Asian female model with a casual cute campus look. Use the uploaded portrait photo only for appearance and hairstyle, preserving face shape, facial features, hairstyle, skin tone, body proportion, and overall temperament. Scene: sunny summer university campus, clean tree-lined walkway, bright greenery, warm daylight, relaxed youthful lifestyle atmosphere. The model is the visual center, clear face, natural swee",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1286,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b9f13f014b224c52bd18e984c550e228.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d2ccc8beee7dc1-78637e7cb0-320.webp",
          "640": "/prompt-template-images/tpl-d2ccc8beee7dc1-78637e7cb0-640.webp",
          "960": "/prompt-template-images/tpl-d2ccc8beee7dc1-78637e7cb0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:23:05.961Z"
    },
    {
      "id": "tpl-562ac9a2ae414a",
      "slug": "portrait-collage-film-strip-poster-by-robertsmith-ai",
      "title": "Portrait Collage Film Strip Poster (by @robertsmith_ai)",
      "prompt": "High-end portrait collage poster in vertical format. The background contains four layered rounded strips displaying black-and-white film-like images of a curly-haired male model wearing dark sunglasses in varied poses. In front, a vivid color cutout of the same character is placed to the left, dressed in an unbuttoned soft pink shirt, styled like a luxury fashion campaign with dramatic lighting and depth.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1356,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bb930c5fcd9841df820b886f0f8a34ce.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-562ac9a2ae414a-f753bd2aaa-320.webp",
          "640": "/prompt-template-images/tpl-562ac9a2ae414a-f753bd2aaa-640.webp",
          "960": "/prompt-template-images/tpl-562ac9a2ae414a-f753bd2aaa-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:23:30.064Z"
    },
    {
      "id": "tpl-f91ce5821cd73c",
      "slug": "y2k-japanese-street-editorial-poster-by-noorlewisx",
      "title": "Y2K Japanese Street Editorial Poster (by @noorlewisx)",
      "prompt": "Create a bold Y2K Japanese street-editorial collage poster with a clean high-fashion magazine aesthetic, gritty paper textures, torn magazine cutouts, distressed ink splashes, and urban Tokyo-inspired design.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1606,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/06654314f8cf418bb0453da822d06f4c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f91ce5821cd73c-704ba45b71-320.webp",
          "640": "/prompt-template-images/tpl-f91ce5821cd73c-704ba45b71-640.webp",
          "960": "/prompt-template-images/tpl-f91ce5821cd73c-704ba45b71-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:23:42.920Z"
    },
    {
      "id": "tpl-54170c1fa9a606",
      "slug": "avant-garde-tokyo-fashion-zine-poster-by-john-my07",
      "title": "Avant-Garde Tokyo Fashion Zine Poster (by @john_my07)",
      "prompt": "Avant-garde Tokyo fashion zine poster with a refined neo-Y2K editorial aesthetic, inspired by underground Japanese street magazines and luxury urban campaigns. Layered collage composition featuring weathered paper textures, fragmented magazine clippings, faded xerox marks, distressed ink smears, scratched film overlays, and contemporary Harajuku-inspired graphic design. Primary visual: a dominant cinematic beauty portrait occupying the upper half of the poster, intense direct gaze with razor-sharp eye detail, naturally textured skin, softly glossy lips, loosely pinned messy hair strands, no eyewear, subtle moody rim lighting, calm yet powerful expression, photographed like a luxury street-fa",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1632,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ddb35c0ad42b48c89698b269121ecbbb.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-54170c1fa9a606-0e0002f780-320.webp",
          "640": "/prompt-template-images/tpl-54170c1fa9a606-0e0002f780-640.webp",
          "960": "/prompt-template-images/tpl-54170c1fa9a606-0e0002f780-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:24:04.260Z"
    },
    {
      "id": "tpl-9046d9ad679826",
      "slug": "y2k-japanese-street-collage-poster-by-kashberg-0",
      "title": "Y2K Japanese Street Collage Poster (by @Kashberg_0)",
      "prompt": "Create a bold Y2K Japanese street-editorial collage poster with a clean high-fashion magazine aesthetic, gritty paper textures, torn magazine cutouts, distressed ink splashes, and urban Tokyo-inspired design.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1783,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9cb83bd7674e452c9222bd1d481a0f88.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9046d9ad679826-0be25e769d-320.webp",
          "640": "/prompt-template-images/tpl-9046d9ad679826-0be25e769d-640.webp",
          "960": "/prompt-template-images/tpl-9046d9ad679826-0be25e769d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:24:15.100Z"
    },
    {
      "id": "tpl-591de7542dcabc",
      "slug": "streetwear-magazine-cover-portrait-by-harboriis",
      "title": "Streetwear Magazine Cover Portrait (by @harboriis)",
      "prompt": "vertical streetwear magazine cover template, in a warm chocolate brown color palette. The layout includes one large, high-fashion main portrait at the top and two smaller, candid polaroid-style photos layered at the bottom with torn-paper edges. The entire composition is covered in a distressed, vintage overlay with textured paper scratches. It features bold vertical Japanese typography on the left, a barcode in the top right corner, and various graphic design elements like stamps,technical text snippets, and grunge borders, creating a cohesive Japanese street-culture aesthetic.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1809,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/09543a7b46ce4c2d8fb8480f02fb743d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-591de7542dcabc-38984b22e5-320.webp",
          "640": "/prompt-template-images/tpl-591de7542dcabc-38984b22e5-640.webp",
          "960": "/prompt-template-images/tpl-591de7542dcabc-38984b22e5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:24:36.583Z"
    },
    {
      "id": "tpl-9cc7f808b69934",
      "slug": "automotive-design-deconstruction-poster-by-gdgtify",
      "title": "Automotive Design Deconstruction Poster (by @Gdgtify)",
      "prompt": "You are an AI automotive designer that deconstructs any object's aerodynamic philosophy, material science, and functional poetry to birth a drivable sculpture. SEMANTIC INFERENCE FRAMEWORK Kinetic DNA Analysis: Motion Signature: Is it about cutting through or flowing with? Power Source Metaphor: Does it suggest electric silence or combustion rage? Stance Philosophy: Does it crouch predatory or float serene? Transmutation Logic: When the object embodies: Sharp edges, aggressive angles, predatory stance, weapon-like intent → Manifest as: Track-Focused Hypercar (exposed carbon, active aero, GT3 energy) When the object embodies: Smooth curves, organic flow, biomimicry, effortless grace → Manifes",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1972,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/03be1a5347e847c58c7b4b8166b2b19a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9cc7f808b69934-e1cbb609e2-320.webp",
          "640": "/prompt-template-images/tpl-9cc7f808b69934-e1cbb609e2-640.webp",
          "960": "/prompt-template-images/tpl-9cc7f808b69934-e1cbb609e2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:25:08.340Z"
    },
    {
      "id": "tpl-b05ff3d085e669",
      "slug": "japanese-graffiti-portrait-poster-by-robertsmith-ai",
      "title": "Japanese Graffiti Portrait Poster (by @robertsmith_ai)",
      "prompt": "Create a high-detail portrait poster in a bold Japanese graffiti-inspired art style, combining modern urban street aesthetics with expressive Japanese visual culture. The poster should feature dynamic graffiti typography, layered spray-paint textures, hand-drawn symbols, abstract paint splashes, neon brush strokes, urban sticker elements, Japanese calligraphy accents, and decorative ornaments that strongly reinforce the energetic atmosphere of the design. The overall composition should feel artistic, rebellious, fashionable, and visually striking, while still maintaining a premium editorial poster quality instead of looking messy or overdone. Humanity somehow turned vandalism into luxury wal",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1985,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/656fd62605c1486b83588dd0375ebb2e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b05ff3d085e669-d431373261-320.webp",
          "640": "/prompt-template-images/tpl-b05ff3d085e669-d431373261-640.webp",
          "960": "/prompt-template-images/tpl-b05ff3d085e669-d431373261-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:25:19.586Z"
    },
    {
      "id": "tpl-cf408248bfde72",
      "slug": "pakistan-miniature-world-map-poster-by-aiwithaliya",
      "title": "Pakistan Miniature World Map Poster (by @AIwithAliya)",
      "prompt": "Create an ultra-detailed hyper-realistic 9:16 cinematic miniature world map of Pakistan, designed as a premium luxury travel-poster masterpiece where the entire country appears as a massive handcrafted floating island civilization suspended in soft atmospheric clouds. The terrain must showcase dramatic elevation and geographic diversity, including the towering snow-covered peaks of the Karakoram and Himalayas (featuring K2), lush green valleys of Hunza and Swat, dense forests, glowing rivers like the Indus, crystal-blue coastlines along the Arabian Sea, cascading waterfalls, expansive deserts like Thar and Cholistan, fertile farmland of Punjab, and serene lakes. Include futuristic cities ble",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2082,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6f8d81b7459344c98e1b810a76baa6a4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-cf408248bfde72-3b94c78359-320.webp",
          "640": "/prompt-template-images/tpl-cf408248bfde72-3b94c78359-640.webp",
          "960": "/prompt-template-images/tpl-cf408248bfde72-3b94c78359-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:25:30.774Z"
    },
    {
      "id": "tpl-a849ef88354114",
      "slug": "hand-torn-editorial-collage-by-realsigridjin",
      "title": "Hand-Torn Editorial Collage (by @realsigridjin)",
      "prompt": "Transform the attached image into a collage artwork. Make it appear as if hand-torn from newspapers, magazines, and flyers and pasted. Every single expression should be completed using large, torn pieces of paper. Represent in detail the torn edges, wrinkles, overlaps, and glue marks on the paper. Use relatively large pieces of paper, not too small, and place them randomly at different angles and directions, with the paper orientation rotated haphazardly. Create it to look like an actual collage roughly hand-pasted by a person.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3235,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a6b63976da664072a9be99167c61cbf0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a849ef88354114-4d1963a301-320.webp",
          "640": "/prompt-template-images/tpl-a849ef88354114-4d1963a301-640.webp",
          "960": "/prompt-template-images/tpl-a849ef88354114-4d1963a301-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:26:32.254Z"
    },
    {
      "id": "tpl-6062b7124f8b74",
      "slug": "glowing-sailboat-night-illustration-by-churvikv",
      "title": "Glowing Sailboat Night Illustration (by @churvikv)",
      "prompt": "A luminous sailboat, outlined in glowing golden light, floats serenely on dark, rippling water under a starry night sky. The sails, translucent and faintly blue, catch the ethereal light, while the hull is a solid, dark silhouette. Numerous tiny, twinkling golden stars are scattered across the black expanse above, and a crescent moon hangs softly to the right. Lush, vibrant green reeds and grasses sprout from smooth, grey stones in the foreground, their tips adorned with delicate, glowing golden florets. The water reflects the golden outline of the sailboat, creating a shimmering, warm glow that contrasts with the cool, deep darkness of the night. The scene is composed with a slightly low an",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3249,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/12fd0d538d5640de919f45de110ead6a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6062b7124f8b74-40853d042f-320.webp",
          "640": "/prompt-template-images/tpl-6062b7124f8b74-40853d042f-640.webp",
          "960": "/prompt-template-images/tpl-6062b7124f8b74-40853d042f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:26:53.581Z"
    },
    {
      "id": "tpl-48f797f6269b69",
      "slug": "dark-western-outlaw-poster-by-you1873118",
      "title": "Dark Western Outlaw Poster (by @you1873118)",
      "prompt": "高级电影感西部亡命徒海报，竖版 2:3 构图，暗黑西部游戏角色设定海报风格。 一个神秘蒙面牛仔与黑马站在荒漠边境，人物全身正面，宽檐牛仔帽压低，花纹面巾遮住下半张脸，深色长发，黑色皮革手套，黑色西部夹克与多层皮革装备，子弹带、左轮枪套、金属腰带扣、厚重长靴，肩上披着红棕色几何图案披毯，边缘破损飘动。人物姿态冷静危险，一只手靠近枪套。右侧黑马半身入镜，带白色额纹，缰绳细节清晰。 背景是暴风雨中的西部荒漠，闪电、乌云、远处峡谷岩壁、枯树、沙尘、烟雾、火星、泥地反光，氛围压抑史诗。 画面左侧是复古羊皮纸留白，右侧是黑暗风暴场景，强烈明暗分割。加入大号竖排英文标题、通缉令信息、人物档案、坐标、地图网格、细线框、圆形罗盘图形、小红色标记、签名印章等高级海报排版元素。 风格：黑色墨迹飞溅、旧纸纹理、电影级写实、暗黑西部、强烈明暗对比、皮革和金属超细节、尘土、泥点、划痕、烟雾、火星、边缘轮廓光、高级收藏级游戏海报、荒野大镖客氛围、艺术设定集质感、8K、高细节。",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3367,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/3ef5c6cbd2cd4cc7875ef4a15655643d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-48f797f6269b69-ead6207661-320.webp",
          "640": "/prompt-template-images/tpl-48f797f6269b69-ead6207661-640.webp",
          "960": "/prompt-template-images/tpl-48f797f6269b69-ead6207661-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:28:13.935Z"
    },
    {
      "id": "tpl-78610fb629bf31",
      "slug": "wildlife-infographic-reference-poster-by-sha-zdiii",
      "title": "Wildlife Infographic Reference Poster (by @sha_zdiii)",
      "prompt": ". Create a premium cinematic wildlife infographic poster centered around a rare or visually unique animal species such as (animal). The entire artwork must feel like a futuristic luxury wildlife dossier rather than a normal educational infographic. The animal should dominate the composition with intense photorealistic detail: ultra-detailed fur/scales, realistic eyes, moisture textures, cinematic shadows, environmental interaction, dramatic posture, visible muscle definition, floating particles, and powerful eye contact. The environment must fully match the chosen species: (environment). Build dense layered infographic storytelling around the animal using: • anatomy callouts • adaptation sys",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3403,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e23032f07b6042eda2e453620bd5574e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-78610fb629bf31-24cc97421f-320.webp",
          "640": "/prompt-template-images/tpl-78610fb629bf31-24cc97421f-640.webp",
          "960": "/prompt-template-images/tpl-78610fb629bf31-24cc97421f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:28:24.599Z"
    },
    {
      "id": "tpl-9e9467a9a55756",
      "slug": "ancient-civilization-miniature-diorama-by-naiknelofar788",
      "title": "Ancient Civilization Miniature Diorama (by @Naiknelofar788)",
      "prompt": "A highly detailed miniature diorama of an ancient civilization under construction, displayed directly on top of large rolled-out architectural blueprints spread across a realistic wooden drafting table. The scene features iconic historical architecture from [CIVILIZATION OR LOCATION], including partially completed monuments, temples, towers, walls, palaces, streets, or ceremonial structures at different stages of construction. Tiny craftsmen, builders, engineers, and workers interact naturally throughout the scene using historically accurate tools, scaffolding, ramps, cranes, carts, stone blocks, timber frameworks, and construction platforms. The miniature terrain blends seamlessly into the",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3446,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6e6e69e22186463d8684dfa7b1dd4878.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9e9467a9a55756-4a0af70e78-320.webp",
          "640": "/prompt-template-images/tpl-9e9467a9a55756-4a0af70e78-640.webp",
          "960": "/prompt-template-images/tpl-9e9467a9a55756-4a0af70e78-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:28:35.140Z"
    },
    {
      "id": "tpl-eaaac98c008118",
      "slug": "japanese-graffiti-portrait-by-iamaiistudio",
      "title": "Japanese Graffiti Portrait (by @iamaiistudio)",
      "prompt": "Design a high-detail portrait poster in a bold Japanese graffiti-inspired art style that fuses modern urban street aesthetics with expressive Japanese visual culture. Pack the poster with dynamic graffiti typography, layered spray-paint textures, hand-drawn motifs, abstract paint splashes, neon brush strokes, urban sticker elements, Japanese calligraphy accents, and decorative ornaments that amplify the energetic mood. Keep the overall composition artistic, rebellious, fashionable, and visually striking, yet still polished to premium editorial poster quality, never messy or overdone. The subject should NOT copy the exact pose or expression from any reference image. Instead, invent an entirel",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3616,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6063795a232947c7b75ffe7005e3e259.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-eaaac98c008118-95d034f129-320.webp",
          "640": "/prompt-template-images/tpl-eaaac98c008118-95d034f129-640.webp",
          "960": "/prompt-template-images/tpl-eaaac98c008118-95d034f129-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:28:58.485Z"
    },
    {
      "id": "tpl-86b81d07d8bf5c",
      "slug": "3d-liquid-art-poster-by-92digitalartart",
      "title": "3D Liquid Art Poster (by @92digitalartArt)",
      "prompt": "A mesmerizing and explosively colorful vertical poster featuring giant 3D liquid fluid sculpture forms, enormous glossy morphing blob shapes in vivid electric colors — a massive melting form in hot magenta pink flowing and dripping downward, intersecting with a giant swirling wave of electric cobalt blue, a third liquid mass in neon lime green curling upward like a breaking ocean wave, all three liquid forms colliding at the center in a spectacular splash explosion with hundreds of flying colorful droplets frozen mid-air, each liquid surface rendered with a perfect mirror-glossy finish reflecting the surrounding colors in dazzling distorted highlights, the background a clean bright white mak",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3658,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9895eff793814fe9adb9352d346a61ed.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-86b81d07d8bf5c-7f5ca8f615-320.webp",
          "640": "/prompt-template-images/tpl-86b81d07d8bf5c-7f5ca8f615-640.webp",
          "960": "/prompt-template-images/tpl-86b81d07d8bf5c-7f5ca8f615-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:29:19.068Z"
    },
    {
      "id": "tpl-c85b7ec0d3302e",
      "slug": "cubist-kawaii-vector-portrait-by-chillaikalan",
      "title": "Cubist Kawaii Vector Portrait (by @ChillaiKalan__)",
      "prompt": "Create a cute neo-expressionist cubist minimal vector portrait illustration, Picasso meets kawaii minimalism, inspired by stylized fashion editorials and playful modern art. Ultra-simplified exaggerated facial features with oversized abstract eyes, flat cartoon eye shapes, minimal black dots or single curved strokes, no realistic iris details, no eyelashes, extremely reduced facial detail. Tiny abstract nose drawn with one short angular line.￼ Small single-stroke lips, tiny soft geometric mouth shape, minimal expression marks, no realistic mouth anatomy. Rounded cheeks, dreamy innocent expression, playful asymmetrical proportions, elongated elegant neck, simplified geometric facial planes, s",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3714,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9f4a820980f44a9099ae1087a9288648.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c85b7ec0d3302e-e145d92d16-320.webp",
          "640": "/prompt-template-images/tpl-c85b7ec0d3302e-e145d92d16-640.webp",
          "960": "/prompt-template-images/tpl-c85b7ec0d3302e-e145d92d16-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:29:29.518Z"
    },
    {
      "id": "tpl-db0e4abf1c8904",
      "slug": "by-adam38363368936",
      "title": "泳装时尚杂志四宫格 (by @Adam38363368936)",
      "prompt": "泳装时尚杂志广告页面，4:3 ，日本模特， S型曲线，【颜色】色系。（变换姿势和风格，四宫格展示）",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3757,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/35c178937fdc401b83a968c2c96f0a66.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-db0e4abf1c8904-d95947ba2c-320.webp",
          "640": "/prompt-template-images/tpl-db0e4abf1c8904-d95947ba2c-640.webp",
          "960": "/prompt-template-images/tpl-db0e4abf1c8904-d95947ba2c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:29:51.863Z"
    },
    {
      "id": "tpl-bc01b445c3aaea",
      "slug": "monochrome-caricature-portrait-sheet-by-noor-ul-ain43",
      "title": "Monochrome Caricature Portrait Sheet (by @Noor_ul_ain43)",
      "prompt": "A stylized black-and-white pencil ink caricature portrait sheet featuring two distinct charismatic characters with contrasting face shapes and expressions. Drawn in a loose sketchbook style with visible construction lines, rough pencil strokes, expressive exaggerated facial proportions, modern caricature illustration aesthetic. Left character: handsome charismatic man with messy hair, sharp jawline, confident smirk, expressive sideways eyes, slim long face, casual t-shirt. Right character: muscular bald man with raised eyebrow, thick neck, strong jawline, dominant confident expression, casual t-shirt. Minimal shading, thin crosshatching, clean line art, monochrome aesthetic, white background",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3770,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a79b156ac8de4cb08f683f5b43ea94e7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-bc01b445c3aaea-746dadf25f-320.webp",
          "640": "/prompt-template-images/tpl-bc01b445c3aaea-746dadf25f-640.webp",
          "960": "/prompt-template-images/tpl-bc01b445c3aaea-746dadf25f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:30:02.821Z"
    },
    {
      "id": "tpl-e92b932339b73c",
      "slug": "3d-cg-by-liyue-ai",
      "title": "星河入梦 3D CG 插画 (by @liyue_ai)",
      "prompt": "一位成年东方幻想系女性角色，梦幻星河仙女风，3D CG 高精度插画质感，9:16 竖版构图，画面充满全息星河、流光粒子、银河丝带与柔雾光晕。 人物位于画面中央偏左，半身到大腿视角，身体呈优雅的 S 型动态站姿。她的上半身微微向一侧倾斜，腰部自然收束并轻轻扭转，胯部向相反方向形成柔和弧线，一侧肩膀略微抬起，另一侧肩膀自然放松，整体姿态像在星河中缓慢旋转，既轻盈又具有女性柔美。头部微微低垂，脸部呈三分之二侧脸，眼神温柔、安静、梦幻，神情清冷而优雅。 她拥有精致柔和的东方幻想系五官，白皙通透的肌肤，肌肤带有柔和的次表面散射与珍珠般高光，面部轮廓干净细腻，鼻梁纤细，嘴唇柔软，睫毛纤长。长发为淡银白色与浅粉紫色渐变，发丝被星风吹起，向画面右侧大面积飘散，形成流动感极强的弧线，与人物 S 型身体曲线相互呼应。 服装是一件梦幻星河礼裙，材质轻盈透明但保持优雅克制，肩部为柔软薄纱结构，胸口与腰部有银河般的渐变流光纹理，颜色以浅粉、淡蓝、薰衣草紫、珍珠白为主，局部点缀金色星尘。裙身像星云与薄纱融合而成，轻盈飘动，围绕人物身体形成螺旋状流光带，强调腰线、肩颈线与整体 S 型姿态，但不刻意暴露。 背景是梦幻宇宙星河空间，整体色调为淡粉色、浅蓝色、薰衣草紫与柔金色，充满细密星光、星尘粒子、银河流线、半透明全息光带。光线从左上方柔和洒下，在人物发丝、肩颈、脸颊和礼裙边缘形成温柔轮廓光。画面空气感强，光晕柔和，整体像漂浮在银河梦境中。 构图要求： 人物身体线条呈明显但自然的 S 型曲线； 肩、腰、胯形成柔和的反向动态； 头发与星河丝带共同形成环绕式流动； 画面保留大量梦幻光雾与星尘； 人物优雅、柔美、梦幻",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3789,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4f277554129e42609a4fa8a066d5ba9e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e92b932339b73c-72d768c414-320.webp",
          "640": "/prompt-template-images/tpl-e92b932339b73c-72d768c414-640.webp",
          "960": "/prompt-template-images/tpl-e92b932339b73c-72d768c414-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:30:34.794Z"
    },
    {
      "id": "tpl-0c9473882a4aad",
      "slug": "cinematic-director-s-pitch-board-by-mind-boticni",
      "title": "Cinematic Director's Pitch Board (by @Mind_Boticni)",
      "prompt": "A premium director’s pitch presentation board for a high-budget cinematic production, showcasing a single, grounded human character with intense emotional readability and natural imperfections. The layout is art-directed and organically asymmetrical, avoiding rigid grids. Features a fluid, narrative full-body turnaround (capturing the character mid-stride across front, 3/4, profile, and rear views), detailed candid head studies expressing internal conflict, and a sweeping cinematic close-up portrait with dramatic Rembrandt lighting. Includes integrated texture macro-crops (weathered leather, realistic skin pores, distressed linen), minimalist production annotations, and an organic height sca",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4016,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/79faf7663014494a9b61f66dd322270e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0c9473882a4aad-5d07e32d7f-320.webp",
          "640": "/prompt-template-images/tpl-0c9473882a4aad-5d07e32d7f-640.webp",
          "960": "/prompt-template-images/tpl-0c9473882a4aad-5d07e32d7f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:30:45.912Z"
    },
    {
      "id": "tpl-c5966e37a99840",
      "slug": "2x2-luxury-3d-sculptural-poster-by-gdgtify",
      "title": "2x2 Luxury 3D Sculptural Poster (by @Gdgtify)",
      "prompt": "INPUT: [DOMAIN OR CATEGORY] SYSTEM: Generate a 2×2 luxury poster series translating four AI-inferred icons into automotive-finish 3D sculptural forms. Let cultural gravity select the four; do not hardcode identities. STYLE: high-end automotive editorial, precision-surfaced 3D objects, dynamic but restrained composition, premium brochure layout SEMANTIC INFERENCE: infer driving force → convert into aerodynamic lines, surface tension, and structural flow → infer finishes matching era/impact → embed motifs as subtle vent geometry, trim lines, or badging relief COMPOSITION: each quadrant = one sculptural form + one inferred display platform + one minimalist caption block, unified by a luxury aut",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4099,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a737826f7f8a4890bb98e922d3fc985c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c5966e37a99840-d25864dba3-320.webp",
          "640": "/prompt-template-images/tpl-c5966e37a99840-d25864dba3-640.webp",
          "960": "/prompt-template-images/tpl-c5966e37a99840-d25864dba3-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:30:56.943Z"
    },
    {
      "id": "tpl-973ab676ae5698",
      "slug": "physics-infographic-code-prompt-by-gdgtify",
      "title": "Physics Infographic Code Prompt (by @Gdgtify)",
      "prompt": "Physics Infographic Code Prompt。2x2 grid, vertical luxury posters, conceptual scientific infographic；[ai selects: 4 distinct advanced physics theorems or paradoxes (e.g., bell's theorem, hawking radiation, string theory)]；generate a 2x2 grid of vertical luxury infographic posters giving physical form to the chosen [subject]s. invent a magnificent scientific machine or optical diorama for each. explode the layers to show quantum states, gravitational warping, equations, and subatomic scale. the design must feel like a classified schematic from a hyper-advanced, aesthetically obsessed civilization. semantic inference must make the invisible laws of physics breathtakingly visible.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4112,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ec88257bacc148a285fa8285bedbe10c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-973ab676ae5698-dd2f5e497a-320.webp",
          "640": "/prompt-template-images/tpl-973ab676ae5698-dd2f5e497a-640.webp",
          "960": "/prompt-template-images/tpl-973ab676ae5698-dd2f5e497a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:31:19.348Z"
    },
    {
      "id": "tpl-ae4a7a9b1ad7c4",
      "slug": "football-player-dynamic-poster-by-harboriis",
      "title": "Football Player Dynamic Poster (by @harboriis)",
      "prompt": "A dynamic mixed-media football poster featuring James Rodríguez in Colombia’s national team colors, designed with a bold street-art editorial aesthetic. The composition blends realistic sports photography with layered urban graphic design elements. Background features a gritty city basketball-court wall covered in oversized graffiti murals, torn posters, paint drips, neon spray textures, stickers, marker tags, and distressed concrete textures in yellow, blue, and red tones. James stands in an explosive action pose controlling the ball mid-motion, illuminated by dramatic cinematic lighting and colorful urban reflections. Typography: massive hand-painted graffiti lettering reading “JAMES RODRÍ",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4126,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/129d476f8177454f84d4888beb373283.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ae4a7a9b1ad7c4-2c6d29475e-320.webp",
          "640": "/prompt-template-images/tpl-ae4a7a9b1ad7c4-2c6d29475e-640.webp",
          "960": "/prompt-template-images/tpl-ae4a7a9b1ad7c4-2c6d29475e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:31:29.959Z"
    },
    {
      "id": "tpl-84112344fad6e3",
      "slug": "blueberry-lavender-soda-scrapbook-poster-by-john-my07",
      "title": "Blueberry Lavender Soda Scrapbook Poster (by @john_my07)",
      "prompt": "Vintage-inspired blueberry lavender soda scrapbook poster, dreamy artisanal cafe advertisement aesthetic, sparkling layered blueberry soda with lavender cream foam and translucent ice cubes, ultra-realistic beverage photography blended with playful hand-drawn doodles and pastel marker sketches, fizzy carbonation bubbles visible through the glass, soft purple-to-blue gradient drink tones with creamy white foam top, whimsical handwritten cafe notes and tiny ingredient arrows, sticker-book collage layout with torn paper textures and washi tape accents, cozy Korean dessert cafe moodboard style, delicate lavender flower doodles, bows, stars, tiny moons, blueberries, and sparkles surrounding the d",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4179,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/dbed55172cae42a185932ed4d2497c97.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-84112344fad6e3-f21289e836-320.webp",
          "640": "/prompt-template-images/tpl-84112344fad6e3-f21289e836-640.webp",
          "960": "/prompt-template-images/tpl-84112344fad6e3-f21289e836-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:31:39.512Z"
    },
    {
      "id": "tpl-d5a370187f196d",
      "slug": "scientific-concept-anchor-poster-by-gdgtify",
      "title": "Scientific Concept Anchor Poster (by @Gdgtify)",
      "prompt": "Anchor: The word \"[SCIENTIFIC CONCEPT (e.g., CARBON / DNA / GRAVITY)]\" :: where each letter is constructed from the molecular structure, atomic bonds, or physical diagrams associated with that concept ::4 Morphology: DNA — letters formed from double helix ladder rungs and backbone curves. CARBON — letters built from benzene ring hexagons and bond lines. GRAVITY — letters curve and stretch as if pulled toward a point mass, lower strokes elongated by gravitational lensing. All fully readable ::3 Material Physics: Scientific whiteboard aesthetic — white chalk or marker on dark ground. Or blueprint blue with white diagrammatic linework ::3 Illumination: Flat, even, academic — as if projected on",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4192,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/fcfbce83e0ef4abd876ce219f024594f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d5a370187f196d-6c76a03a7c-320.webp",
          "640": "/prompt-template-images/tpl-d5a370187f196d-6c76a03a7c-640.webp",
          "960": "/prompt-template-images/tpl-d5a370187f196d-6c76a03a7c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:32:32.813Z"
    },
    {
      "id": "tpl-18883d16eb2e3c",
      "slug": "basketball-poster-design-by-abs-uiux",
      "title": "Basketball Poster Design (by @abs_uiux)",
      "prompt": "Create a high-impact professional basketball poster design for a fictional live game event. Make it look like a premium modern sports promo poster for social media and print. Use a bold energetic composition with one heroic male basketball player in mid-air performing a powerful dunk as the main focus. Add dramatic arena lighting, a packed crowd atmosphere, motion streaks, flying dust, glowing sparks, and floating particles. Use an intense sports color palette of deep navy, black, orange, red, gold, and white with strong contrast and glowing highlights. Add clean, readable typography with a bold game title, team names, date, venue, and ticket info.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4231,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8995d16c661b4dcc886ea96938d507a8.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-18883d16eb2e3c-352081efcc-320.webp",
          "640": "/prompt-template-images/tpl-18883d16eb2e3c-352081efcc-640.webp",
          "960": "/prompt-template-images/tpl-18883d16eb2e3c-352081efcc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:33:05.294Z"
    },
    {
      "id": "tpl-d9da2e8ce89d8c",
      "slug": "by-rionaifantasy",
      "title": "角色卡三视图生成 (by @rionaifantasy)",
      "prompt": "把我生成这张照片女主角的角色卡片：包含正面侧面背面三视图，以及多表情面部特写，和手部不同动作的特写，保持女主角的外貌发型身材服饰气质完全不变",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4244,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/08ffb97dd8ad40978d98b78c626d85f3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d9da2e8ce89d8c-19c525b6fa-320.webp",
          "640": "/prompt-template-images/tpl-d9da2e8ce89d8c-19c525b6fa-640.webp",
          "960": "/prompt-template-images/tpl-d9da2e8ce89d8c-19c525b6fa-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:33:15.404Z"
    },
    {
      "id": "tpl-5c9ba1c74eb10e",
      "slug": "roland-garros-tennis-trailer-prompt",
      "title": "Roland Garros Tennis Trailer [Prompt**:]",
      "prompt": "Ultra cinematic 15-second tennis commercial for Roland Garros 2026. Hand-drawn ink-and-marker illustration aesthetic mixed with dynamic modern sports animation. Deep navy shadows, saturated clay orange courts, rough sketch textures, imperfect pen strokes, paper grain, energetic scribble motion lines. Every frame feels like an animated editorial sports illustration brought to life. Includes a full 0:00 to 0:15 shot flow with VFX, SFX, music direction, style references, and negative style constraints (not anime, not Pixar, not clean vector art). **Output**: <img src=\"images/poster_case314/output.jpg\" width=\"500\">",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4254,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5656c4626a2f47c88d0e484983325974.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5c9ba1c74eb10e-190551dab9-320.webp",
          "640": "/prompt-template-images/tpl-5c9ba1c74eb10e-190551dab9-640.webp",
          "960": "/prompt-template-images/tpl-5c9ba1c74eb10e-190551dab9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:33:36.360Z"
    },
    {
      "id": "tpl-d18e68b7e020d3",
      "slug": "papercut-chibi-diorama-prompt",
      "title": "Papercut Chibi Diorama [Prompt**:]",
      "prompt": "Cute layered paper-cut art style illustration of a chibi girl with big expressive eyes and long wavy black hair, designed like a 3D sticker character with a white outline border. The scene is made entirely from textured pastel paper craft layers with soft shadows and handcrafted details. Cozy whimsical environment with wooden bridges, colorful flowers, trees, clouds, amusement park elements, festival kites, and cute outdoor scenery. Soft pastel color palette, dreamy atmosphere, miniature diorama aesthetic, ultra-detailed paper texture, kawaii cartoon style, cinematic composition, depth layered papercraft, handcrafted scrapbook look, adorable fashion outfit, oversized shoes, playful pose, war",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4267,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/33f19ee1c9044cba9297234dc6fa47d1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d18e68b7e020d3-b92fae15ca-320.webp",
          "640": "/prompt-template-images/tpl-d18e68b7e020d3-b92fae15ca-640.webp",
          "960": "/prompt-template-images/tpl-d18e68b7e020d3-b92fae15ca-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:33:46.723Z"
    },
    {
      "id": "tpl-98ec6d6d3acf2f",
      "slug": "eagle-vs-lion-stadium-clash-prompt",
      "title": "Eagle vs Lion Stadium Clash [Prompt**:]",
      "prompt": "A colossal, highly detailed, realistic anthropomorphic Sun Eagle representing Argentina and a massive muscular anthropomorphic Golden Lion representing England. The Eagle wears the classic Argentina national football team jersey with sky-blue and white vertical stripes. The Lion wears the classic England white football kit with a red crest. Dramatic wide shot from a low angle, looking up at the two massive beasts facing off on a rain-slicked stadium pitch under bright realistic floodlights. Packed world-class football stadium at night, realistic turf, detailed seating, volumetric haze. Photorealistic sports photography mixed with cinematic fantasy, sharp details, natural skin and feather tex",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4280,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/66491d9d9da14db98cf20b5be77a57f5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-98ec6d6d3acf2f-78b69eae7a-320.webp",
          "640": "/prompt-template-images/tpl-98ec6d6d3acf2f-78b69eae7a-640.webp",
          "960": "/prompt-template-images/tpl-98ec6d6d3acf2f-78b69eae7a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:33:56.801Z"
    },
    {
      "id": "tpl-155d705aa0e6f6",
      "slug": "minimalist-automotive-poster-template-prompt",
      "title": "Minimalist Automotive Poster Template [Prompt**:]",
      "prompt": "Create a premium minimalist automotive poster for [CAR NAME / MODEL], inspired by luxury editorial car advertisements. Use a clean vertical 9:16 Instagram Reels/Story composition with a bold solid color background in [BACKGROUND COLOR]. The background color should match the car's personality, brand identity, era, and mood. Place the car as the main subject in the lower-middle area. The car should look realistic, premium, sharp, glossy, and detailed, with accurate proportions, clean reflections, crisp edges, studio-quality lighting, and a natural shadow under the vehicle. Behind the car, add huge oversized typography showing the car model name: \"[BIG WORD]\". Typography Direction: Choose a typ",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4383,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5deff5e0d6544751801d6f1ac8662326.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-155d705aa0e6f6-acc60f2465-320.webp",
          "640": "/prompt-template-images/tpl-155d705aa0e6f6-acc60f2465-640.webp",
          "960": "/prompt-template-images/tpl-155d705aa0e6f6-acc60f2465-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:34:08.187Z"
    },
    {
      "id": "tpl-76e4e0a9f17395",
      "slug": "surreal-inner-self-editorial-poster-prompt",
      "title": "Surreal Inner Self Editorial Poster [Prompt**:]",
      "prompt": "A hyper-realistic young man sitting inside the open cavity of a massive realistic human chest sculpture shaped like himself. The chest is hollow like a room, with soft fabric textures and dim ambient light inside. He wears cream cargo pants, a fitted white tank top, and vintage sneakers, staring downward thoughtfully. Background is an empty matte gray studio with lots of negative space. Typography: * Thin handwritten text: “I KEEP SEARCHING” * Huge stretched typography: “MYSELF” * Smaller type underneath: “BUT EVERY DOOR LEADS BACK TO ME” Soft moody lighting, introspective atmosphere, luxury fashion campaign style, surreal emotional storytelling, ultra detailed, 8k realism. Generate **Output",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4455,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9777d111d9f5498094ce52c36e9f1afc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-76e4e0a9f17395-fdb0b5e2e4-320.webp",
          "640": "/prompt-template-images/tpl-76e4e0a9f17395-fdb0b5e2e4-640.webp",
          "960": "/prompt-template-images/tpl-76e4e0a9f17395-fdb0b5e2e4-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:34:39.376Z"
    },
    {
      "id": "tpl-a7d4cf94bf56fa",
      "slug": "chibi-fashion-infographic-by-chi-vc",
      "title": "Chibi Fashion Infographic (by @chi_vc_)",
      "prompt": "Create a fashion infographic based on the reference image. Use the reference image mainly to understand the character’s identity, hairstyle, facial features, color impression, personality, and overall mood. Transform the character into a polished 3D chibi character with a large head, small body, expressive eyes, and soft cute proportions. Keep the character’s recognizable features, such as hairstyle, hair color, eye color, facial impression, and overall aura, while designing a new original outfit that naturally suits the character’s atmosphere. Do not simply copy the clothing from the reference image. Instead, create a coordinated fashion style that feels appropriate for this character’s per",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4481,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9fb15a395df346ed853bd183efd2e42d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a7d4cf94bf56fa-7c63a882bc-320.webp",
          "640": "/prompt-template-images/tpl-a7d4cf94bf56fa-7c63a882bc-640.webp",
          "960": "/prompt-template-images/tpl-a7d4cf94bf56fa-7c63a882bc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:34:49.889Z"
    },
    {
      "id": "tpl-5a6282b9ae6ad2",
      "slug": "torn-soda-can-fruit-ad-by-iamaiistudio",
      "title": "Torn Soda Can Fruit Ad (by @iamaiistudio)",
      "prompt": "A photorealistic, highly detailed commercial product shot of a standard aluminum [Type of Soda Can], perfectly centered on a minimal textured [Background Color] paper backdrop with subtle visible fibers. A single continuous horizontal torn paper strip crosses the full frame from the right edge to the left edge, with a barely noticeable upward diagonal slant toward the upper left. The tear passes through the can body and continues seamlessly across the background on both sides. Make the torn opening wide and dramatic, exposing a dense, glossy, vibrant mass of [Description of Fruit Segments/Sacs/Berries] packed tightly inside the can. At the far left end of the tear, roll the paper neatly into",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4521,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e2168601b31f4661a5257ade86c4a719.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5a6282b9ae6ad2-9e9e88bf31-320.webp",
          "640": "/prompt-template-images/tpl-5a6282b9ae6ad2-9e9e88bf31-640.webp",
          "960": "/prompt-template-images/tpl-5a6282b9ae6ad2-9e9e88bf31-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:35:33.747Z"
    },
    {
      "id": "tpl-6d55acf448d3d1",
      "slug": "by-anifun-ai",
      "title": "電子レンジ大明神キャラ設定ポスター (by @Anifun_AI)",
      "prompt": "電子レンジ大明神キャラ設定ポスター。{argument name=\"character name\" default=\"電子レンジ大明神 チンノスケ\"}；wide horizontal infographic character design sheet, 16:9, clean cream background with orange decorative borders, shrine motifs, sparkles and rays, high-detail cute anime mascot illustration, warm orange and gold palette, crisp vector-like line art with watercolor shading。",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4578,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/812bc4fae6b94276a248ebcd546fa3b9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6d55acf448d3d1-6a7cddafac-320.webp",
          "640": "/prompt-template-images/tpl-6d55acf448d3d1-6a7cddafac-640.webp",
          "960": "/prompt-template-images/tpl-6d55acf448d3d1-6a7cddafac-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:35:44.359Z"
    },
    {
      "id": "tpl-a2c8f82e214c22",
      "slug": "avant-garde-3d-caricature-portrait-by-iamaiistudio",
      "title": "Avant-Garde 3D Caricature Portrait (by @iamaiistudio)",
      "prompt": "Generate a highly stylized 3D caricature portrait with deliberate exaggerated deformation and a smooth, polished surface. Base the character on the ATTACHED REFERENCE PHOTO, keeping the subject's identity, skin tone, facial likeness, and distinctive features intact, while transforming them into a bold caricatured 3D figure featuring a stretched elongated neck, an oversized head, heavy drooping eyelids, full lips, and a slightly asymmetric face. The character should have clean, studio-quality skin with purposeful detail rather than random noise or texture. Accessorize boldly with round or oval glasses, hoop earrings, gold chains, head wraps or bandanas, and street-luxury fashion. Light with n",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4591,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/47490eb08cb642dfb0e1df89fbe758d4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a2c8f82e214c22-e04bc47ce7-320.webp",
          "640": "/prompt-template-images/tpl-a2c8f82e214c22-e04bc47ce7-640.webp",
          "960": "/prompt-template-images/tpl-a2c8f82e214c22-e04bc47ce7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:36:06.694Z"
    },
    {
      "id": "tpl-8a28e23eed26ec",
      "slug": "ink-noir-portrait-by-iamaiistudio",
      "title": "Ink Noir Portrait (by @iamaiistudio)",
      "prompt": "Dark, high-contrast noir-style portrait of [SUBJECT], drawn entirely with bold black ink lines and deliberate splatter. Deep shadows dominate the frame, with bright highlights carved out through empty white space. A subtle paper grain shows through. The mood is brooding, cinematic, and intense, like the most gripping panel in a graphic novel.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4604,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b96b43bd5d55462fada6c6ef18b9d629.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8a28e23eed26ec-8cd1870520-320.webp",
          "640": "/prompt-template-images/tpl-8a28e23eed26ec-8cd1870520-640.webp",
          "960": "/prompt-template-images/tpl-8a28e23eed26ec-8cd1870520-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:36:28.305Z"
    },
    {
      "id": "tpl-3d8d6de47bbd32",
      "slug": "berries-and-blossoms-infographic-poster-by-92digitalartart",
      "title": "Berries and Blossoms Infographic Poster (by @92digitalartArt)",
      "prompt": "A delightful vertical infographic poster in 9:16 format about berries and forest fruits, designed in a warm 3D cozy kawaii illustration style with soft rounded shapes, glossy textures, and a comforting pastel atmosphere, featuring a tall central floating garden diorama where oversized strawberries, blueberries, raspberries, blackberries, and tiny blossoms are arranged like a charming miniature world, each fruit rendered in plush 3D with cute faces, tiny highlights, and a toy-like finish; the scene includes little leaves, dew drops, honey jars, wooden baskets, and soft clouds of steam rising from a fresh fruit tart near the bottom, all surrounded by a gentle gradient background shifting from",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4665,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/09d80dbf4da34111a9830d2ca1771ca1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3d8d6de47bbd32-0f7821616f-320.webp",
          "640": "/prompt-template-images/tpl-3d8d6de47bbd32-0f7821616f-640.webp",
          "960": "/prompt-template-images/tpl-3d8d6de47bbd32-0f7821616f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:36:39.372Z"
    },
    {
      "id": "tpl-d734bc42f66d0e",
      "slug": "mid-century-editorial-illustration-system-by-goodmanprotocol",
      "title": "Mid-Century Editorial Illustration System (by @Goodmanprotocol)",
      "prompt": "Create a premium mid-century-inspired flat editorial illustration of [Subject], rendered in a refined handcrafted printmaking aesthetic. The artwork should feel like a sophisticated vintage children’s encyclopedia illustration combined with Scandinavian editorial design and retro nature-book graphics. Language: English 8K ultra-high resolution with a 3:4 aspect ratio STYLE: minimalist flat-shape illustration soft geometric simplification handcrafted gouache + risograph + silkscreen print texture subtle paper grain and dry ink imperfections muted refined color palette clean matte colors crisp neutral white balance bright museum-quality paper appearance no yellow tint no beige cast no sepia to",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4678,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5c91378904d044af821b5240ac7aeb18.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d734bc42f66d0e-02f9aec541-320.webp",
          "640": "/prompt-template-images/tpl-d734bc42f66d0e-02f9aec541-640.webp",
          "960": "/prompt-template-images/tpl-d734bc42f66d0e-02f9aec541-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:37:02.238Z"
    },
    {
      "id": "tpl-a8180a0059126a",
      "slug": "graphic-novel-eyes-banner-by-iamaiistudio",
      "title": "Graphic-Novel Eyes Banner (by @iamaiistudio)",
      "prompt": "Cinematic poster art: extreme close-up of a man's eyes filling a narrow horizontal band across the frame, deep black void above and below. Graphic-novel illustration style with bold red, black, and orange tones, heavy contrast, dramatic shadows, sharp highlights, raw gritty atmosphere. Eyes look fierce and emotionally charged, hair slightly disheveled.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4707,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/39f82687a98f487da3c49ce060ec950c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a8180a0059126a-4d9cd9921a-320.webp",
          "640": "/prompt-template-images/tpl-a8180a0059126a-4d9cd9921a-640.webp",
          "960": "/prompt-template-images/tpl-a8180a0059126a-4d9cd9921a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:37:33.962Z"
    },
    {
      "id": "tpl-ef8fa76957166d",
      "slug": "cosmic-campfire-concept-art-by-iamaiistudio",
      "title": "Cosmic Campfire Concept Art (by @iamaiistudio)",
      "prompt": "Create a surreal, cinematic, photorealistic 8k conceptual artwork set in an abstract cosmic void. Use a high-angle full shot with symmetrical balance, placing a magical campfire at the exact center between two seated characters against a pitch-black background with no visible environment. On the left, show an astronaut sitting on a rough gray rock, wearing a highly detailed realistic white space suit with the helmet on and a reflective visor. The astronaut holds a stick and roasts a marshmallow over the fire. On the right, show a young man sitting on a metal folding chair and leaning forward toward the flames. He has dark hair and wears a red and black plaid flannel shirt, blue jeans, and br",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4720,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0222e97bc6b740ddac1d7fd2850f218d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ef8fa76957166d-91303018ce-320.webp",
          "640": "/prompt-template-images/tpl-ef8fa76957166d-91303018ce-640.webp",
          "960": "/prompt-template-images/tpl-ef8fa76957166d-91303018ce-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:37:43.233Z"
    },
    {
      "id": "tpl-f50f35c96a5925",
      "slug": "mixed-media-editorial-portrait-by-iamaiistudio",
      "title": "Mixed-Media Editorial Portrait (by @iamaiistudio)",
      "prompt": "A mixed-media portrait of [SUBJECT] showing [EXPRESSION], looking [GAZE DIRECTION], styled with [ACCESSORY/STYLING]. Realistic identity rendered with bold black sketch strokes layered over torn newspaper collage fragments and acrylic paint splashes. Editorial print texture throughout, seamlessly blending photorealism with abstract expressionism. Premium poster aesthetic with a tactile, handmade feel. High contrast composition, ultra-detailed face and eyes. [PRIMARY COLORS] and [SECONDARY COLORS] palette.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4743,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1c0812a189fc40aea1233a6db9cded01.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f50f35c96a5925-fd0e18a32c-320.webp",
          "640": "/prompt-template-images/tpl-f50f35c96a5925-fd0e18a32c-640.webp",
          "960": "/prompt-template-images/tpl-f50f35c96a5925-fd0e18a32c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:38:05.234Z"
    },
    {
      "id": "tpl-1b3b48a97ba6b4",
      "slug": "glass-skeleton-study-desk-by-iamaiistudio",
      "title": "Glass Skeleton Study Desk (by @iamaiistudio)",
      "prompt": "Stylized 3D render of a clear glass skeleton with black-rimmed glasses, seated at a wooden desk, looking down at an open textbook while highlighting text with a yellow highlighter. A warm gold desk lamp on the right casts cozy yellow light with glossy reflections on the glass surface. The desk has a white coffee mug, stack of hardcover books, and scattered pens with pastel pink and yellow highlighters. Soft pink wall background. Warm, studious aesthetic. No text or watermarks.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4769,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4216e8ec067942aea523804cb3ae0bab.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1b3b48a97ba6b4-4c32070340-320.webp",
          "640": "/prompt-template-images/tpl-1b3b48a97ba6b4-4c32070340-640.webp",
          "960": "/prompt-template-images/tpl-1b3b48a97ba6b4-4c32070340-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:38:25.940Z"
    },
    {
      "id": "tpl-a2b370d44ae971",
      "slug": "sketch-portrait-breaking-paper-by-fujimoto-hina",
      "title": "Sketch Portrait Breaking Paper (by @Fujimoto_hina)",
      "prompt": "Sketch Portrait Breaking Paper。A hyper-realistic top-down photograph of a white sketch paper lying on a rustic wooden table. On the paper is an incredibly detailed graphite pencil sketch of a handsome young man with the exact facial features, hairstyle, glasses, smile, proportions, and expression from the uploaded reference image. The portrait is rendered in realistic graphite pencil shading with exceptional detail. He is wearing a modern black American-style jacket and shirt, with only the clothing rendered in full color while the face remains a pencil sketch. The man is holding a real photorealistic 3D black coffee mug labeled 'AEGON' that appears to break through the boundaries of the paper and extend into the real world. The coffee mug is rendered in full color with realistic reflections and texture. His hand holding the mug is also fully photorealistic and colored, seamlessly blendi",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4835,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c3c1c81c8e5b4fadb55c96986d87781b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a2b370d44ae971-5bbd9953d1-320.webp",
          "640": "/prompt-template-images/tpl-a2b370d44ae971-5bbd9953d1-640.webp",
          "960": "/prompt-template-images/tpl-a2b370d44ae971-5bbd9953d1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:38:55.960Z"
    },
    {
      "id": "tpl-1630c921ab020b",
      "slug": "passport-worlds-atlas-scene-by-iamaiistudio",
      "title": "Passport Worlds Atlas Scene (by @iamaiistudio)",
      "prompt": "Breathtaking 3D scene: a worn passport lays open, each visa stamp exploding into the places it represents. Every inked mark becomes a gateway—[CITY 1] emerges in miniature from one stamp with [DETAIL 1], [CITY 2] breaks through another with [DETAIL 2], [CITY 3] materializes with [DETAIL 3]. [LANDMARK 1], [LANDMARK 2], and [LANDMARK 3] rise at different scales across the pages. Flight paths sweep overhead as radiant golden arcs weaving between all the worlds. Coffee rings transform into lakes. Frayed edges dissolve into coastlines. [ATMOSPHERIC ELEMENT 1] drifts from one destination while [ATMOSPHERIC ELEMENT 2] swirls near another. Dramatic raking light, tilt-shift depth of field, 8K, UE5, c",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4858,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c64b102f32b142acb87e4c8daa7e09ca.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1630c921ab020b-7179a59306-320.webp",
          "640": "/prompt-template-images/tpl-1630c921ab020b-7179a59306-640.webp",
          "960": "/prompt-template-images/tpl-1630c921ab020b-7179a59306-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:39:27.740Z"
    },
    {
      "id": "tpl-7d77c07f3288bc",
      "slug": "chaotic-doodle-photo-portrait-by-shorelyn",
      "title": "Chaotic Doodle Photo Portrait (by @Shorelyn_)",
      "prompt": "Turn this photo into a chaotic funny doodle illustration, intentionally messy and low-skill, as if drawn quickly with a cheap marker, crayon, or worn-out felt pen on paper. Create exaggerated facial features with awkward proportions, uneven eyes, oversized head, tiny body, crooked smile, and clumsy anatomy while still keeping the person recognizable. Use rough childish sketch lines, shaky hand-drawn strokes, visible scribbles, overlapping outlines, accidental marks, and random doodles around the scene. Add a simple cartoon-style background with badly drawn buildings, trees, clouds, street elements, and uneven perspective. Coloring should look careless and imperfect, with visible stroke textu",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4875,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/348c11646cbe4a7cabb9ca573a18fa79.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7d77c07f3288bc-763c7284ac-320.webp",
          "640": "/prompt-template-images/tpl-7d77c07f3288bc-763c7284ac-640.webp",
          "960": "/prompt-template-images/tpl-7d77c07f3288bc-763c7284ac-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:39:38.365Z"
    },
    {
      "id": "tpl-eb9f6dc5f174da",
      "slug": "family-watercolor-fashion-sketch-by-aiwithzohaib",
      "title": "Family Watercolor Fashion Sketch (by @AiwithZohaib)",
      "prompt": "A stylish family standing together, digital watercolor and ink sketch illustration, fashion illustration style, white clean background with abstract beige brush strokes, soft lighting, expressive line art, casual modern clothing, denim jeans, black hijabs, relaxed happy pose, elegant minimal aesthetic, high detail, editorial sketch look.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4925,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5e8218cb6db14349b64a55329c7d406f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-eb9f6dc5f174da-a3cf7a74f8-320.webp",
          "640": "/prompt-template-images/tpl-eb9f6dc5f174da-a3cf7a74f8-640.webp",
          "960": "/prompt-template-images/tpl-eb9f6dc5f174da-a3cf7a74f8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:39:48.558Z"
    },
    {
      "id": "tpl-e9a5f2e03da659",
      "slug": "japanese-fashion-cover-illustration-by-iamaiistudio",
      "title": "Japanese Fashion Cover Illustration (by @iamaiistudio)",
      "prompt": "prompt: Create a high-end Japanese fashion magazine cover illustration. The subject is [XXX]. Use a minimalist, modern fashion-digital-illustration style with refined cel shading, crisp clean large color-block modeling, almost no visible linework, and elegant sharp edges. Keep a blue-and-white structural palette as the foundation, with restrained accents of coral red, misty purple, pale yellow, ash pink, sage green, silver gray, or similar soft secondary tones. The final image should stay minimal, premium, cohesive, and not flashy. Use a clean background, such as cobalt blue, royal blue, misty blue, or another pure large color field, with generous negative space. Strong sunlight enters from",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4939,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "blocked",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-b7486e4fed1460",
      "slug": "world-cup-hero-poster-by-goodmanprotocol",
      "title": "World Cup Hero Poster (by @Goodmanprotocol)",
      "prompt": "Create a cinematic ultra-detailed football poster of [PLAYER NAME] playing for [TEAM/COUNTRY], chest-up portrait, looking away from camera, dramatic team color rim lighting, floating embers, atmospheric smoke, premium sports marketing campaign style, photorealistic skin texture, highly detailed jersey with team crest, massive vertical typography displaying player's surname on the left side, \"FIFA WORLD CUP 2026\" text near bottom center, luxury editorial photography, AAA game key visual quality, Unreal Engine 5 rendering, ultra-sharp focus, high contrast, 8K masterpiece, smartphone wallpaper composition, character occupying 90% of frame. Composition: Vertical smartphone wallpaper (9:16 ratio)",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4999,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7e269dc9821c4ec6b3bb3ca6dcde7860.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b7486e4fed1460-15e4f0e290-320.webp",
          "640": "/prompt-template-images/tpl-b7486e4fed1460-15e4f0e290-640.webp",
          "960": "/prompt-template-images/tpl-b7486e4fed1460-15e4f0e290-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:40:09.434Z"
    },
    {
      "id": "tpl-64bd7f39a048ed",
      "slug": "sleep-deprived-chibi-creator-by-john-my07",
      "title": "Sleep-Deprived Chibi Creator (by @john_my07)",
      "prompt": "Use my uploaded photo as the sole facial reference. Preserve my exact identity, facial proportions, eye shape, skin tone, lip shape, nose structure, and all distinctive features with exceptional accuracy and no facial drift. Create a highly detailed cinematic 3D chibi-style character portrait inspired by top-tier animated films, luxury collectible figurines, and contemporary designer toy aesthetics. The character represents a brilliant AI-powered digital creator running on pure creativity and almost no sleep after a marathon night of editing and designing. Scene: Early morning inside a cozy creative studio. She sits drowsily on the edge of a weathered wooden workbench, legs gently swinging,",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5319,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d651ceebbffe4b8184615313dc0c9f7f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-64bd7f39a048ed-e0f709afa9-320.webp",
          "640": "/prompt-template-images/tpl-64bd7f39a048ed-e0f709afa9-640.webp",
          "960": "/prompt-template-images/tpl-64bd7f39a048ed-e0f709afa9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:40:20.813Z"
    },
    {
      "id": "tpl-dc66c7373c1ef5",
      "slug": "nordic-literary-editorial-illustration-by-iamaiistudio",
      "title": "Nordic Literary Editorial Illustration (by @iamaiistudio)",
      "prompt": "prompt: A minimalist modern editorial illustration. Style: Nordic lifestyle magazine meets Korean literary book cover meets indie architectural sketch. Natural eye-level composition, everyday setting. Color palette: creamy white, ivory, gray-beige, sage green, deep olive, ink black, tiny touches of grayish-pink. Thin black ink outlines, slightly hand-drawn feel. Highly abstracted shapes, elongated quiet silhouettes. Background textures: aged paper grain, scratches, ink spots, print noise. Shadows rendered as solid blocks of pure black or dark green, no gradients, no realistic lighting, no 3D rendering. Quiet, cool, literary, restrained aesthetic. High-end editorial and independent publicatio",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5519,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f85a6cb9e7b14cb58abf7d693a0366e1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-dc66c7373c1ef5-aaea21d086-320.webp",
          "640": "/prompt-template-images/tpl-dc66c7373c1ef5-aaea21d086-640.webp",
          "960": "/prompt-template-images/tpl-dc66c7373c1ef5-aaea21d086-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:40:42.544Z"
    },
    {
      "id": "tpl-a58ed73b2a2c51",
      "slug": "world-cup-match-poster-by-lukmanfebrianto",
      "title": "World Cup Match Poster (by @lukmanfebrianto)",
      "prompt": "Photorealistic movie poster designed by a professional graphic designer with this concept: - The background is the venue, [Name of The Stadium, Location] - Main image showing Captain from [Country] Team: [Name] wearing national team jersey head to head with Captain from [Country] Team: [Name] wearing national team jersey - Main title is '[Country] vs [Country]' - Behind the title, waving flag of [Country] and [Country] - Below main title, text '[Name of The Stadium] - [Location], [Date]' - At the top, 'World Cup 2026' logo",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5535,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d4508c9995cc43ef8ed5f195a4984dce.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a58ed73b2a2c51-8ee5ce6891-320.webp",
          "640": "/prompt-template-images/tpl-a58ed73b2a2c51-8ee5ce6891-640.webp",
          "960": "/prompt-template-images/tpl-a58ed73b2a2c51-8ee5ce6891-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:41:54.320Z"
    },
    {
      "id": "tpl-57f666f3e34897",
      "slug": "cinematography-analysis-frame-by-bmx-ai13",
      "title": "Cinematography Analysis Frame (by @bmx_ai13)",
      "prompt": "Create a cinematic fashion editorial photograph in a bright minimal bedroom, presented as a cinematography composition analysis frame. Main Image: A young adult female model kneeling on a soft white bed beside a large window with sheer white curtains. She is positioned on the left third of the frame, body aligned with the vertical rule-of-thirds grid line. Her body leans slightly backward, facing toward the glowing window light with a calm, distant, introspective expression. The right side of the image is filled with a large bright white luminous mass from overexposed daylight through sheer curtains, balancing the darker subject on the left. Lighting: Strong natural window light from the rig",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5555,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2771c84ae06046299ac2c65b4c4329ae.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-57f666f3e34897-fbfcfb3932-320.webp",
          "640": "/prompt-template-images/tpl-57f666f3e34897-fbfcfb3932-640.webp",
          "960": "/prompt-template-images/tpl-57f666f3e34897-fbfcfb3932-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:42:06.938Z"
    },
    {
      "id": "tpl-e953234a7d19f1",
      "slug": "crowd-mosaic-football-portrait-by-taaruk",
      "title": "Crowd Mosaic Football Portrait (by @Taaruk_)",
      "prompt": "Ultra-detailed crowd mosaic portrait of a legendary football player, created entirely from thousands of tiny people standing and walking on a vast white surface. From a distance, the crowd forms a hyper-realistic giant face and upper body portrait; up close, every individual person is clearly visible. Long cinematic shadows, aerial top-down perspective, massive scale, intricate human arrangement, photorealistic details, high contrast lighting, clean minimalist background, depth and dimension, masterpiece composition, ultra-sharp focus, 8K resolution, social art installation, human mosaic effect, volumetric lighting, realistic skin tones formed by crowd density, award-winning conceptual photo",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5623,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/aaa5b5ee886c4a8ea8b9001760a36e24.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e953234a7d19f1-fe88d83d8c-320.webp",
          "640": "/prompt-template-images/tpl-e953234a7d19f1-fe88d83d8c-640.webp",
          "960": "/prompt-template-images/tpl-e953234a7d19f1-fe88d83d8c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:42:49.059Z"
    },
    {
      "id": "tpl-929e775ca32adf",
      "slug": "surrealism-history-timeline-by-92digitalartart",
      "title": "Surrealism History Timeline (by @92digitalartArt)",
      "prompt": "A surrealist historical timeline infographic poster in 16:9 horizontal format inspired by Salvador Dalí, featuring a dreamlike desert landscape where a long melting clock transforms into a winding historical timeline path across the composition, with floating doors, stretched shadows, levitating drawers, cracked stone statues, and impossible reflections merging into one symbolic world; the timeline should run diagonally from left to right like a dream corridor, with key surrealism dates placed inside small elegant labels, including 1917, 1924, 1929, 1936, 1940s and 1960s, each date connected to a strange symbolic object such as an eye, an egg, a telephone, a bird cage, a face, or a candle, a",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5668,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9326a26ce8614c56b95bcbf1cdc3005e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-929e775ca32adf-8b80e2bd21-320.webp",
          "640": "/prompt-template-images/tpl-929e775ca32adf-8b80e2bd21-640.webp",
          "960": "/prompt-template-images/tpl-929e775ca32adf-8b80e2bd21-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:43:19.295Z"
    },
    {
      "id": "tpl-0e8b20fcb085d8",
      "slug": "luxury-birthday-poster-3-4-by-taaruk",
      "title": "Luxury Birthday Poster 3:4 (by @Taaruk_)",
      "prompt": "Professional luxury birthday poster, 3:4 ratio. Entire frame filled with a premium off white luxury paper textured wall. Large number “2” precisely carved in the wall with visible depth and realistic inner shadows. Inside the number: soft pink and pink balloons, subtle white flowers, elegant bouquet arrangement, premium celebration styling. A happy 2 year old child with preserved reference facial features, wearing a milky white T shirt and pink denim overalls, laughing naturally. Face, shoulder, one hand and one foot extend outside the number creating a realistic 3D effect. Warm cinematic sunlight from one side, soft rim light, photorealistic skin, premium studio photography, ultra realistic",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5696,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e7f2969df85742b4a320c96770c9a4be.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0e8b20fcb085d8-414bb81d4e-320.webp",
          "640": "/prompt-template-images/tpl-0e8b20fcb085d8-414bb81d4e-640.webp",
          "960": "/prompt-template-images/tpl-0e8b20fcb085d8-414bb81d4e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:43:41.937Z"
    },
    {
      "id": "tpl-fb7525beefc345",
      "slug": "iphone-candid-notebook-photo-by-iamaiistudio",
      "title": "iPhone Candid Notebook Photo (by @iamaiistudio)",
      "prompt": "://t.co/4zY2WLrQci Candid photo of a flat open notebook covered in black ballpoint pen handwriting. Notes look personal and authentic, with slightly messy lettering, crossed-out words, and underlined section headers. Angle slightly overhead, soft natural window light, no flash. Simple desk environment, iPhone camera aesthetic. #AIart #GPTImage2",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5798,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/06c9a69f42094e8e9d3729f9cbf12266.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fb7525beefc345-0afe78b57e-320.webp",
          "640": "/prompt-template-images/tpl-fb7525beefc345-0afe78b57e-640.webp",
          "960": "/prompt-template-images/tpl-fb7525beefc345-0afe78b57e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:44:21.973Z"
    },
    {
      "id": "tpl-e5748f10d337f4",
      "slug": "french-new-wave-film-still-by-iamaiistudio",
      "title": "French New Wave Film Still (by @iamaiistudio)",
      "prompt": "Black and white cinematic image in 1950s-60s French New Wave style. Two people standing close on a narrow Parisian street at dawn, not quite touching, intimacy expressed through proximity alone. She tilts slightly toward him; he gazes past her, deep in thought. Simple clothing: trench coats, knit sweaters, no excess. Natural faces, honest expressions, no glamour. Stone walls, shuttered windows, stacked cafe chairs, a bicycle leaning against the wall. Eye-level static camera, wide negative space, slightly imperfect composition. Soft diffused daylight, subtle 35mm film grain, gentle shadows. Emotion through stillness and silence, love present but unspoken. Godard and Truffaut aesthetic: restra",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5815,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0e6c4e71a2154bc3a00d4f1b3dc93a83.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e5748f10d337f4-4e41c1d9ac-320.webp",
          "640": "/prompt-template-images/tpl-e5748f10d337f4-4e41c1d9ac-640.webp",
          "960": "/prompt-template-images/tpl-e5748f10d337f4-4e41c1d9ac-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:44:31.794Z"
    },
    {
      "id": "tpl-2d78d4b5ef4e1d",
      "slug": "nighttime-japanese-theater-cinematic-by-preda2005",
      "title": "Nighttime Japanese Theater Cinematic (by @Preda2005)",
      "prompt": "Create a cinematic 16:9 wide image from the audience POV at a nighttime outdoor Japanese theater performance. The camera feels like a handheld smartphone recording from the crowd, with silhouetted audience heads and raised phones in the foreground. On stage, a cute plush capybara mascot girl named Capychan stands small but heroic, with a round chubby body, huge capybara hood, pineapple crown, yellow number 10 jersey, blonde-and-green hair, heterochromia eyes, and two glowing energy swords, one green and one gold. She faces a colossal original samurai robot with black, red and gold armor, glowing red eyes, and a massive mechanical katana. The stage has a traditional Japanese village gate, bam",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5828,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/71db633524dd4ef0b2aaf254f99254d0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2d78d4b5ef4e1d-2b33f6b01c-320.webp",
          "640": "/prompt-template-images/tpl-2d78d4b5ef4e1d-2b33f6b01c-640.webp",
          "960": "/prompt-template-images/tpl-2d78d4b5ef4e1d-2b33f6b01c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:44:53.541Z"
    },
    {
      "id": "tpl-5b1f2fbf02fcb5",
      "slug": "dopamine-burst-3d-poster-by-iamaiistudio",
      "title": "Dopamine Burst 3D Poster (by @iamaiistudio)",
      "prompt": "://t.co/iW2ocxdKQR prompt: Modern internet visual design excellence, Behance / Dribbble 3D illustration poster aesthetic, C4D-style soft-light rendering, high-saturation vibrant colors, dopamine color palette, abstract art direction, clean minimalist background, visually uplifting and cheerful, refined and intricate detail. Theme: Play Wildly. #AIart #GPTImage2",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5908,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/90a1cc8adfbc4b0fa1370d8c9ffaca32.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5b1f2fbf02fcb5-f102c83747-320.webp",
          "640": "/prompt-template-images/tpl-5b1f2fbf02fcb5-f102c83747-640.webp",
          "960": "/prompt-template-images/tpl-5b1f2fbf02fcb5-f102c83747-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:45:05.835Z"
    },
    {
      "id": "tpl-20a151077bd716",
      "slug": "hand-drawn-doodle-art-overlay-by-iamaiistudio",
      "title": "Hand-drawn Doodle Art Overlay (by @iamaiistudio)",
      "prompt": "://t.co/jBGrThiRdq prompt: Take the uploaded photo and keep the subject completely unchanged — same face, pose, framing, and lighting, no warping or distortion. Layer expressive hand-drawn illustrations on top that playfully interact with the person or scene. Have the doodles react to what's in the frame: follow gestures, amplify movement, trace body outlines, or bring in imaginative details that feel connected to the moment. The sketches should look deliberate, like someone drew straight onto the print with spontaneous yet thoughtful pen strokes. Go for a loose, slightly rough drawing style — wobbly lines, organic curves, a sketchbook aesthetic. Add handwritten words or short captions that",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5946,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6d754546b10b429fb694b87893df5321.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-20a151077bd716-a2d2dcd275-320.webp",
          "640": "/prompt-template-images/tpl-20a151077bd716-a2d2dcd275-640.webp",
          "960": "/prompt-template-images/tpl-20a151077bd716-a2d2dcd275-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:45:16.328Z"
    },
    {
      "id": "tpl-370a799b196942",
      "slug": "argentina-football-uniform-promo-by-aiwithaliya",
      "title": "Argentina Football Uniform Promo (by @AIwithAliya)",
      "prompt": "ARGENTINA NATIONAL TEAM \"NEW UNIFORM\" FORMAT Ultra-Premium Football Fashion SMM Promotional Poster Vertical 4:5 Instagram Hero Creative Global Sportswear Advertising Commercial Football Graphic Design Agency-Level Art Direction Behance Front Page Quality 8K UHD Hyper-Realistic Football × Fashion × Graphic Design Fusion Zero AI Slop Zero Generic Sports Posters Zero Match-Day Graphics Zero Editorial-Only Aesthetic CORE STRATEGY This is not a football poster. This is a national identity statement disguised as a uniform campaign. The design should feel like Argentina's biggest football billboard, a luxury sportswear campaign, and a World Cup legacy poster merged into one visual. The graphic desi",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6037,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/aa53daacf68c4ba998181d7f0691d0e5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-370a799b196942-bf25d90a0c-320.webp",
          "640": "/prompt-template-images/tpl-370a799b196942-bf25d90a0c-640.webp",
          "960": "/prompt-template-images/tpl-370a799b196942-bf25d90a0c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:46:43.871Z"
    },
    {
      "id": "tpl-4f8f7a205a3fae",
      "slug": "claymation-teen-girl-with-headphones-by-zephyraleigh",
      "title": "Claymation Teen Girl with Headphones (by @ZephyraLeigh)",
      "prompt": "Claymation Teen Girl with Headphones。Silence Everything Else。",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6193,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c42d511bf892413f9aa286b01bc64996.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4f8f7a205a3fae-c74975daa7-320.webp",
          "640": "/prompt-template-images/tpl-4f8f7a205a3fae-c74975daa7-640.webp",
          "960": "/prompt-template-images/tpl-4f8f7a205a3fae-c74975daa7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:47:14.281Z"
    },
    {
      "id": "tpl-2f5acce2338fa8",
      "slug": "ultra-realistic-trophy-sports-photography-by-goodmanprotocol",
      "title": "Ultra-realistic Trophy Sports Photography (by @Goodmanprotocol)",
      "prompt": "Ultra-realistic sports photography, documentary realism, premium commercial campaign style, immersive 9:16 vertical composition. The camera is positioned deep inside an opened luxury gift box, creating a dramatic first-person perspective from the hidden treasure itself. A magnificent golden FIFA World Cup trophy rests on elegant dark velvet fabric in the lower foreground, with realistic metallic reflections and authentic textures. Above the opened box stands [PLAYER NAME], leaning forward and looking directly into the box with an expression of determination, ambition, and hunger for glory. He reaches one hand naturally toward the trophy, symbolizing his dream of winning the FIFA World Cup 20",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6237,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/fea6db93b1824aa499b684aa4b594f43.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2f5acce2338fa8-a7c76b0ec7-320.webp",
          "640": "/prompt-template-images/tpl-2f5acce2338fa8-a7c76b0ec7-640.webp",
          "960": "/prompt-template-images/tpl-2f5acce2338fa8-a7c76b0ec7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:47:34.879Z"
    },
    {
      "id": "tpl-938ae96fbc84d7",
      "slug": "polish-prl-era-magazine-spread-by-riccardo-nero",
      "title": "Polish PRL Era Magazine Spread (by @Riccardo_Nero)",
      "prompt": "Create a full two-page spread from a fictional Polish color weekly magazine from the PRL era, late 1950s to early 1960s. The image should look like an authentic vintage printed magazine: yellowed paper, offset printing, halftone dots, slight ink misregistration, muted aged colors, retro Polish typography, visible center gutter, margins, page numbers, captions and column layout. Theme: a Syrena 105 proudly showcased in modern-day North Korea, presented as a satirical alternate-history Polish PRL magazine artifact. The spread must be clearly split into two pages. LEFT PAGE: A Polish illustrated magazine article about the official presentation of the Syrena 105 in Pyongyang. Show a large main p",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6401,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1e009d62c05542e888c26b0adb2961e7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-938ae96fbc84d7-0355422af9-320.webp",
          "640": "/prompt-template-images/tpl-938ae96fbc84d7-0355422af9-640.webp",
          "960": "/prompt-template-images/tpl-938ae96fbc84d7-0355422af9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:48:06.054Z"
    },
    {
      "id": "tpl-ab1a546382f235",
      "slug": "fifa-world-cup-2026-throne-poster-by-saasjunctionhq",
      "title": "FIFA World Cup 2026 Throne Poster (by @SaasJunctionHQ)",
      "prompt": "FIFA World Cup 2026 hero throne sports artwork. 🧵",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6441,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ab2407e69d974ab2a8c8e77cccbb3a86.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ab1a546382f235-a2f810609b-320.webp",
          "640": "/prompt-template-images/tpl-ab1a546382f235-a2f810609b-640.webp",
          "960": "/prompt-template-images/tpl-ab1a546382f235-a2f810609b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:48:17.004Z"
    },
    {
      "id": "tpl-13647851dfff11",
      "slug": "fifa-world-cup-country-emblem-badge-by-goodmanprotocol",
      "title": "FIFA World Cup Country Emblem Badge (by @Goodmanprotocol)",
      "prompt": "Create a FIFA World Cup 2026 country variant emblem in a bold, flat, typographic illustration style. Preserve the official FIFA World Cup 2026 stacked identity exactly: the digit “2” occupies the upper half and the digit “6” occupies the lower half, both center-aligned and forming one unified vertical portrait block, with the FIFA World Cup Trophy integrated through the center in the same arrangement as the official emblem. The numerals must be outline-only, never filled, rendered with thick bold strokes in a single color taken from the national flag palette of [COUNTRY NAME], with fully transparent interiors so the trophy remains visible. STRICTLY use a 9:16 vertical aspect ratio. Do not al",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6813,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b1b4d3d1280140ea812d5c774c95592d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-13647851dfff11-d8cbf6aa49-320.webp",
          "640": "/prompt-template-images/tpl-13647851dfff11-d8cbf6aa49-640.webp",
          "960": "/prompt-template-images/tpl-13647851dfff11-d8cbf6aa49-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:48:27.570Z"
    },
    {
      "id": "tpl-662bf858b48688",
      "slug": "luxury-historical-civilization-strategy-card-by-gdgtify",
      "title": "Luxury Historical Civilization Strategy Card (by @Gdgtify)",
      "prompt": "SYSTEM: Render the input as a luxury historical civilization stratigraphy poster. Do not hardcode dates unless inevitable. Infer the territorial expansion phases, economic foundation pillars, military innovation cycles, cultural assimilation patterns, and the geological layers of decline. SEMANTIC SOLVE: EMPIRE_AUTOPSY = (INFER(territorial_architecture FROM founding_core + expansion_vectors + frontier_fortifications + trade_route_control + vassal_networks) ::5) + (INFER(economic_pillars FROM agricultural_base + mineral_resources + taxation_system + currency_standard + labor_organization) ::4) + (INFER(military_innovation FROM weapon_technology + tactical_doctrine + logistics_chain + fortific",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6958,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6ba063a1a4104235bc0c0b6be89153ab.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-662bf858b48688-59067b263b-320.webp",
          "640": "/prompt-template-images/tpl-662bf858b48688-59067b263b-640.webp",
          "960": "/prompt-template-images/tpl-662bf858b48688-59067b263b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:48:49.161Z"
    },
    {
      "id": "tpl-e304f3f37d94ca",
      "slug": "sony-a7-by-iamaiistudio",
      "title": "Sony A7 分解结构图 (by @iamaiistudio)",
      "prompt": "Detailed exploded-view diagram of a Sony A7 mirrorless camera, with all internal components separated and clearly visible, each part labeled with its name. Technical product illustration style, clean white background, precise and informative layout.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6972,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/63dc652b9659444b884807a06bb0d576.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e304f3f37d94ca-e656c46bd9-320.webp",
          "640": "/prompt-template-images/tpl-e304f3f37d94ca-e656c46bd9-640.webp",
          "960": "/prompt-template-images/tpl-e304f3f37d94ca-e656c46bd9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:49:10.121Z"
    },
    {
      "id": "tpl-3084b6086fd07d",
      "slug": "by-iamaiistudio",
      "title": "仿生机械器官产品渲染 (by @iamaiistudio)",
      "prompt": "Ultra-realistic 3D anatomical human [organ] crafted from semi-translucent frosted polycarbonate with a milky matte finish that softly diffuses light. Features industrial injection-molded details, subtle micro-texture, and rounded edges with precise manufacturing seams. Interior reveals mechanical components in place of organic tissue — micro gears, pistons, circuitry, and engineered chambers seen through the translucent shell with a soft blur. A minimal white Apple logo is subtly embedded on the surface, understated and not overpowering. Diffused studio lighting, realistic plastic light refraction, gentle shadow underneath, centered framing, pure white background, ultra-detailed futuristic b",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6986,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4edc3b0366f14cd5abcf048535eae6f1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3084b6086fd07d-10b44ed297-320.webp",
          "640": "/prompt-template-images/tpl-3084b6086fd07d-10b44ed297-640.webp",
          "960": "/prompt-template-images/tpl-3084b6086fd07d-10b44ed297-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:49:30.862Z"
    },
    {
      "id": "tpl-876d64686be9ec",
      "slug": "wpa-by-92digitalartart",
      "title": "太阳风暴 WPA 海报 (by @92digitalartArt)",
      "prompt": "A 1930s WPA travel poster style infographic poster in 16:9 horizontal format about solar weather and space storms, designed to look exactly like a vintage Works Progress Administration national parks poster from the New Deal era, with flat gouache-style color fills, bold black outlines, dramatic perspective and zero photorealism; the background transitions from deep black space at the top to a glowing teal-green aurora sky at the bottom, divided into bold graphic bands of color in the WPA tradition; the central illustration shows the Sun in the upper left as a massive dramatic circle with stylized flat orange and yellow flame corona eruptions radiating outward, and a large coronal mass eject",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 7000,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d5635abb185d4149b729b686533a805a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-876d64686be9ec-f8e359b199-320.webp",
          "640": "/prompt-template-images/tpl-876d64686be9ec-f8e359b199-640.webp",
          "960": "/prompt-template-images/tpl-876d64686be9ec-f8e359b199-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:49:41.880Z"
    },
    {
      "id": "tpl-ee1558e26ea186",
      "slug": "by-iamaiistudio-9cd5b8",
      "title": "高级汽车规格海报 (by @iamaiistudio)",
      "prompt": "Generate a stunning premium car poster for [CAR MODEL]. Position the vehicle as the dominant centerpiece in a bold three-quarter side angle, visually striking and commanding full attention. Capture the full essence of the car with an aggressive stance, flawless proportions, luxury wheels, distinctive headlights, aerodynamic bodywork, spoilers, performance accents, and high-end design cues. Layer in crisp premium typography featuring the brand name, model designation, performance figures, horsepower rating, 0-60 time, top speed, engine details, and iconic milestones, seamlessly woven into the layout. Weave in subtle background motifs drawn from the car's history: ghost blueprint lines, motors",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 7014,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/008681d2cb384dfca85dc6d05a00607d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ee1558e26ea186-af2329d4e0-320.webp",
          "640": "/prompt-template-images/tpl-ee1558e26ea186-af2329d4e0-640.webp",
          "960": "/prompt-template-images/tpl-ee1558e26ea186-af2329d4e0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:49:52.678Z"
    },
    {
      "id": "tpl-3f5645709dd528",
      "slug": "3d-by-iamaiistudio",
      "title": "多巴胺 3D 城市海报 (by @iamaiistudio)",
      "prompt": "Top-tier internet marketing visual design, Behance / Dribbble inspired 3D illustration poster aesthetic, C4D rendering style, soft-light treatment, vivid high-saturation colors, dopamine-driven color palette, abstract artwork, clean minimalist background, fresh and lively feel, youthful and energetic vibe, polished and intricate. Theme: Urban Nomad Project.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 7041,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/539453eb93274ddbbbea811c1ef319b3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3f5645709dd528-6442e462c8-320.webp",
          "640": "/prompt-template-images/tpl-3f5645709dd528-6442e462c8-640.webp",
          "960": "/prompt-template-images/tpl-3f5645709dd528-6442e462c8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:50:03.220Z"
    },
    {
      "id": "tpl-d072c124008c92",
      "slug": "by-iamaiistudio-c8c382",
      "title": "方形专业广告海报 (by @iamaiistudio)",
      "prompt": "Generate a 1:1 square poster with a professional advertising design aesthetic, suitable for promoting a book, course, or event. Include the following text verbatim: Ad Creative Production As soon as you think of it, you can play with it. AI x browser game-making is genuinely fun. Sounds hard, but it is actually easy to start. Even if you don't know code, you can build your first one.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 7055,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7eb04bbac9b1479d9708c9785798687e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d072c124008c92-4fa3e6a719-320.webp",
          "640": "/prompt-template-images/tpl-d072c124008c92-4fa3e6a719-640.webp",
          "960": "/prompt-template-images/tpl-d072c124008c92-4fa3e6a719-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:50:36.541Z"
    },
    {
      "id": "tpl-286a244ccc57d8",
      "slug": "by-iamaiistudio-1573de",
      "title": "大片级动作电影镜头 (by @iamaiistudio)",
      "prompt": "Cinematic photorealistic action scene on a rain-soaked downtown street canyon. A dark-haired man in his 30s sprints toward the camera, soaked dark jacket and dark pants, mid-stride with a tense survival expression. Behind him, a massive urban explosion tears through a high-rise building -- fire, smoke, shattered concrete, glass, and metal debris blast outward. Exactly 3 damaged vehicles visible: a dark sedan left foreground with crumpled hood splashing through rainwater, a wrecked dark car right midground, and an overturned black SUV tilted up on the right. Wet asphalt reflects headlights and firelight. Dense debris frozen mid-air. Overcast stormy daylight, desaturated blue-gray palette with",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 7072,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0c96c5b261fa45528410cb49366260e5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-286a244ccc57d8-2dfbbdffdf-320.webp",
          "640": "/prompt-template-images/tpl-286a244ccc57d8-2dfbbdffdf-640.webp",
          "960": "/prompt-template-images/tpl-286a244ccc57d8-2dfbbdffdf-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:50:57.744Z"
    },
    {
      "id": "tpl-ed74ce57a5dac6",
      "slug": "by-naiknelofar788",
      "title": "编辑风墨线插画模板 (by @Naiknelofar788)",
      "prompt": "Cinematic editorial ink illustration of [HUMAN] in [SCENERY], looking back over the shoulder with realistic proportions, windblown hair and sharp confident gaze. Wearing [CLOTHING]. Loose expressive black ink linework, visible sketch construction lines, high-contrast shadows, sunlit rim glow, weathered paper texture, ink splatters, distressed print marks, realistic road-movie environment, limited three-color palette: [PALETTE], contemporary fashion poster illustration, aspect ratio 4:5.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 7086,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/90c6d6efa5ae4a8083264b57ea6934ec.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ed74ce57a5dac6-690746f68d-320.webp",
          "640": "/prompt-template-images/tpl-ed74ce57a5dac6-690746f68d-640.webp",
          "960": "/prompt-template-images/tpl-ed74ce57a5dac6-690746f68d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:51:09.220Z"
    },
    {
      "id": "tpl-ddeebbe1b3a276",
      "slug": "by-iamaiistudio-d3bc9a",
      "title": "等距地标微缩场景 (by @iamaiistudio)",
      "prompt": "Generate an isometric miniature 3D diorama of [COUNTRY NAME]'s iconic [FAMOUS STRUCTURE] landmark from a 45-degree top-down perspective. Use clean soft textures and realistic PBR materials with balanced, natural lighting. The elevated base features surrounding streets, landscape elements, and cultural details unique to the structure. Include tiny stylized figures of locals and tourists with detailed facial features. Set the background to solid [BACKGROUND COLOR]. Display [COUNTRY NAME] in bold text at the top center with [STRUCTURE NAME] on the next line, followed by a minimal architecture icon below. Adjust text color to ensure contrast.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 7101,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/400430d9fddd4dc28565315de7e02e2e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ddeebbe1b3a276-29736b203e-320.webp",
          "640": "/prompt-template-images/tpl-ddeebbe1b3a276-29736b203e-640.webp",
          "960": "/prompt-template-images/tpl-ddeebbe1b3a276-29736b203e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:51:19.370Z"
    },
    {
      "id": "tpl-81cc14c16e25ca",
      "slug": "ai-by-iamaiistudio",
      "title": "AI 音乐训练营活动海报 (by @iamaiistudio) [提示词:]",
      "prompt": "Generate a dramatic Japanese anime-style event promotional poster in vertical 4:5 format, ultra-detailed, cinematic, neon-lit, high contrast, styled like a polished social media announcement. Center-right subject: a beautiful anime girl from the waist up, long flowing deep blue hair blowing in the wind with small star hairpins, wearing a dark hoodie with large studio headphones around her neck. Her face is softly obscured by a rectangular blur. Background: glowing sunset-to-night city skyline with sparkling lights, music-energy particles, lens flares, and glowing petals. Color palette: electric blue, violet, magenta, gold, and sunset orange. Layer crisp Japanese typography integrated like a",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 7181,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9ef95ecb7530403d87a82f6ea775dc7f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-81cc14c16e25ca-6d1cf26955-320.webp",
          "640": "/prompt-template-images/tpl-81cc14c16e25ca-6d1cf26955-640.webp",
          "960": "/prompt-template-images/tpl-81cc14c16e25ca-6d1cf26955-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:51:40.912Z"
    },
    {
      "id": "tpl-cde6dbdc0644be",
      "slug": "soft-aesthetic-fashion-magazine-cover-by-simplyannisa",
      "title": "Soft Aesthetic Fashion Magazine Cover (by @SimplyAnnisa)",
      "prompt": "Ultra-realistic soft aesthetic fashion magazine cover portrait of a young East Asian girl with short messy black bob hair wearing a beige wide-brim hat, white blouse, oversized dark cardigan, and deep red ribbon bow tie. Minimal luxury Korean editorial vibe, warm beige monochrome palette, cinematic natural window light, soft shadows, dreamy atmosphere, shallow depth of field, photoreal skin texture, delicate facial features, calm expression, centered composition. Luxury typography layout design with huge serif title \"ELEGANCE\" at the top, handwritten script text \"Timeless\", elegant fashion magazine graphics, tiny editorial texts, minimalist premium branding, clean spacing, aesthetic magazine",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2069,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-88cedde3f51371",
      "slug": "playlist-mood-album-cover-by-getimg-ai",
      "title": "Playlist Mood Album Cover (by @getimg_ai)",
      "prompt": "Create an album cover inspired by this playlist: [playlist], translating its mood into colors, textures, objects, and cinematic composition, with no artist names. https://t.co/t1efbQ9sgP",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3630,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-bcb092c7be5cd2",
      "slug": "editorial-fashion-poster-by-zulkarnaimx",
      "title": "Editorial Fashion Poster (by @zulkarnaimx)",
      "prompt": "Editorial fashion poster featuring a full-body, stylish male model leaning casually against a light stone column in an upscale urban setting, wearing a slim-fit black button-down shirt tucked into tailored camel chinos with a slight cuff and a brown leather belt, polished dark brown leather loafers, classic black sunglasses and a minimalist wristwatch. Compose with generous left-side negative space reserved for bold typography and graphic elements: large stacked headline \"BLACK + CAMEL\" in black and camel tones, three-word tagline \"WARM • TIMELESS • EFFORTLESS,\" two circular color swatches (black and camel), and small outfit icons with labels for \"black shirt,\" \"camel chinos,\" and \"brown loa",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4205,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-b81910476a075c",
      "slug": "high-fashion-editorial-infographic-poster-by-hope-ai01",
      "title": "High Fashion Editorial Infographic Poster (by @Hope_Ai01)",
      "prompt": "A high-fashion editorial infographic poster featuring a stunning female fashion model standing confidently in the center against a clean luxury studio background. She is wearing an elegant Indo-Western fusion outfit — a richly embroidered long ethnic jacket fused with a modern fitted silhouette, stylish draped skirt/palazzo, intricate patterns, premium fabric textures, contemporary jewelry, and designer heels. The model looks glamorous, confident, and runway-ready. Around the model, create a professional fashion design chart layout with stylish annotation lines and labels pointing toward different outfit elements. Mention detailed fashion notes on the sides such as: Fabric Type, Embroidery D",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4218,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-3de2591fa75f8c",
      "slug": "mixed-media-train-platform-portrait-by-iamaiistudio",
      "title": "Mixed-Media Train Platform Portrait (by @iamaiistudio)",
      "prompt": "Mixed media portrait of a trendy young man standing on a KRL Jabodetabek Commuter Line platform at night. He poses confidently, one hand gripping the strap of an olive-green backpack, dressed in streetwear: oversized black layered hoodie, gray sweatpants, chunky sneakers. The background shows the train in full side view with its signature red stripe, doors wide open, lit by cinematic platform lighting against the city night sky. Surrounding the realistic subject are several cute 3D chibi versions of him, same face and outfit, each in a playful pose: one sitting on his shoulder, one climbing his leg, one peeking out of the backpack. Layered over the whole image: vivid hand-drawn doodle effect",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4617,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-20e28eb39941e6",
      "slug": "semi-3d-fashion-editorial-avatar-by-aiwithsynthia",
      "title": "Semi-3D Fashion Editorial Avatar (by @AIwithSynthia)",
      "prompt": "Create a premium high-resolution vector-cartoon / semi-3D illustration of the person from the reference image. Reimagine them in a stylish modern fashion-editorial look, sitting confidently on a sleek designer chair. Outfit: trendy T-shirt, fashionable skirt/pants, stylish sneakers, and bold sunglasses as the hero accessory. Exaggerate key facial features while maintaining recognizable likeness. Clean flat-colored background (single vibrant color), smooth lines, sharp details, soft studio lighting, luxury advertising aesthetic, centered composition with ample negative space for branding and headlines. Ultra-detailed, print-ready, billboard-quality, modern eyewear campaign style.",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4890,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-acff0eb8f93604",
      "slug": "destination-diorama-filmstrip-by-naiknelofar788",
      "title": "Destination Diorama Filmstrip (by @Naiknelofar788)",
      "prompt": "Destination Diorama Filmstrip。Every Frame a Destination。",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5130,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-d7d161fac95fb3",
      "slug": "japanese-ad-banner-2x2-grid-by-iamaiistudio",
      "title": "Japanese Ad Banner 2x2 Grid (by @iamaiistudio)",
      "prompt": "Japanese Ad Banner 2x2 Grid。2x2 grid of Japanese-style digital advertisement banners；soft pink gradient background。",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5971,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-3fdc78948646c5",
      "slug": "world-cup-national-team-fashion-poster-by-just-sharon7",
      "title": "World Cup National Team Fashion Poster (by @Just_sharon7)",
      "prompt": "Who's gonna win tonight? Are you team Mexico or team South Africa? GPT Image 2 Prompt SOUTH AFRICA NATIONAL TEAM \"NEW UNIFORM\" FORMAT Ultra-Premium Football Fashion SMM Promotional Poster Vertical 4:5 Instagram Hero Creative Global Sportswear Advertising Commercial Football Graphic Design Agency-Level Art Direction Behance Front Page Quality 8K UHD Hyper-Realistic Football × Fashion × Graphic Design Fusion Zero AI Slop Zero Generic Sports Posters Zero Match-Day Graphics Zero Editorial-Only Aesthetic CORE STRATEGY This is not a football poster. This is a national identity statement disguised as a uniform campaign. The design should feel like South Africa's biggest football billboard, a luxury",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6484,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-2f76bbc26d536e",
      "slug": "double-exposure-art-director-poster-by-iamaiistudio",
      "title": "Double Exposure Art Director Poster (by @iamaiistudio)",
      "prompt": "prompt: [PERSONE]. Act as a Senior Art Director. PHASE 1: PHOTOGRAPHIC COMPOSITION. - Layered Effect: Double exposure photo collage. Sharp action shot in the foreground; massive monumental silhouette in the background. - Overlap: The subject blends seamlessly with the background graphic elements. PHASE 2: CONTEXTUAL VIBE. - Identity Analysis: Automatically detect the core industry of [PERSONE] (Sport, Music, Cinema, or Business). - Pose and Props tailored to match their identity. PHASE 3: DYNAMIC BRAND COLORS. - Primary Color: Identify the most iconic color tied to [PERSONE] or their team or brand. Apply to the background, halftone textures, and smoke effects. - Accent Color: Choose a high-c",
      "category": "海报与插画",
      "categorySlug": "poster-illustration",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6838,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-f576abb597be84",
      "slug": "doodle-art-work-mode-young-woman-illustration-coffee-break",
      "title": "Doodle Art Work Mode: Young Woman Illustration, Coffee Break",
      "prompt": "Doodle Art Work Mode: Young Woman Illustration, Coffee Break。doodle art；blue linework；highlighter aesthetic, expressive gestures。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 1923,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/326fd23e053146c097c91a18ca843190.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f576abb597be84-5972e96b55-320.webp",
          "640": "/prompt-template-images/tpl-f576abb597be84-5972e96b55-640.webp",
          "960": "/prompt-template-images/tpl-f576abb597be84-5972e96b55-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:53:09.254Z"
    },
    {
      "id": "tpl-93b489fe2968b1",
      "slug": "bratz-rock-angelz-cartoon-woman-digital-art-pastel-aesthetic",
      "title": "Bratz Rock Angelz Cartoon Woman Digital Art | Pastel Aesthetic",
      "prompt": "Bratz Rock Angelz Cartoon Woman Digital Art | Pastel Aesthetic。Bratz Rock Angelz graphic on the chest；realistic face with soft cartoon outlines on the body；artsy digital scrapbook energy。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 2015,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/87c735ef39df49888922c63054d77ffb.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-93b489fe2968b1-4c40389ae1-320.webp",
          "640": "/prompt-template-images/tpl-93b489fe2968b1-4c40389ae1-640.webp",
          "960": "/prompt-template-images/tpl-93b489fe2968b1-4c40389ae1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:53:29.957Z"
    },
    {
      "id": "tpl-df387365f403ca",
      "slug": "realistic-watercolor-portrait-of-woman-in-traditional-dress",
      "title": "Realistic Watercolor Portrait of Woman in Traditional Dress",
      "prompt": "Realistic Watercolor Portrait of Woman in Traditional Dress。artistic, serene, tactile, cinematic watercolor-in-progress aesthetic；The illustration shows the same person from the uploaded photo in the same outfit and pose, painted in flowing watercolor strokes.；soft watercolor fashion illustration。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 2190,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/297e9a98c4f249e183713c42f31c9974.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-df387365f403ca-c1a68f4664-320.webp",
          "640": "/prompt-template-images/tpl-df387365f403ca-c1a68f4664-640.webp",
          "960": "/prompt-template-images/tpl-df387365f403ca-c1a68f4664-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:54:02.776Z"
    },
    {
      "id": "tpl-3613c248c47d21",
      "slug": "anime-and-photo-split-portrait-playful-digital-art-woman",
      "title": "Anime & Photo Split Portrait: Playful Digital Art Woman",
      "prompt": "Anime & Photo Split Portrait: Playful Digital Art Woman。bold cartoon, digital illustration；hyper-realistic + digital cartoon fusion；hyper-realistic with split real/cartoon effect。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎌 Anime & Manga",
      "sourceLine": 6613,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/83baaf8e6d274501b961133c474e823f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3613c248c47d21-432a7d3cd1-320.webp",
          "640": "/prompt-template-images/tpl-3613c248c47d21-432a7d3cd1-640.webp",
          "960": "/prompt-template-images/tpl-3613c248c47d21-432a7d3cd1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:54:33.550Z"
    },
    {
      "id": "tpl-d108e113ff3082",
      "slug": "woman-with-tom-and-jerry-characters-fashion-portrait",
      "title": "Woman with Tom and Jerry Characters Fashion Portrait",
      "prompt": "Woman with Tom and Jerry Characters Fashion Portrait。background'. (clean grey-blue backdrop；A stylish person with the same face.；interaction':。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "👗 Fashion Photography",
      "sourceLine": 11364,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b3f8e4731d5041908a1a09b2815cc687.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d108e113ff3082-530ddea593-320.webp",
          "640": "/prompt-template-images/tpl-d108e113ff3082-530ddea593-640.webp",
          "960": "/prompt-template-images/tpl-d108e113ff3082-530ddea593-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:58:03.387Z"
    },
    {
      "id": "tpl-a800d3f9c67f7d",
      "slug": "cozy-doodle-lifestyle-photo-by-sairah-0",
      "title": "Cozy Doodle Lifestyle Photo (by @Sairah_0)",
      "prompt": "(Cozy Aesthetic Girl in Park) Aesthetic lifestyle photography of a cute young woman sitting on a wooden park bench during autumn morning, wearing an oversized beige hoodie, white pants, and cream baseball cap, holding a takeaway coffee cup with eyes closed and peaceful smile, soft natural lighting, warm earthy tones, tote bag with kawaii face design beside her, bouquet of baby’s breath flowers, cozy calm vibe, cinematic depth of field, Pinterest aesthetic, soft brown and beige color palette. Add hand-drawn white doodles around the image including hearts, sparkles, arrows, clouds, smiley faces, and handwritten text like “coffee = my love”, “good morning”, “little things”, “Focus Believe Achie",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1132,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c850d89ba30145a68734ecdfd2d048fd.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a800d3f9c67f7d-cb13da7a2a-320.webp",
          "640": "/prompt-template-images/tpl-a800d3f9c67f7d-cb13da7a2a-640.webp",
          "960": "/prompt-template-images/tpl-a800d3f9c67f7d-cb13da7a2a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:58:48.091Z"
    },
    {
      "id": "tpl-b4023fcd215284",
      "slug": "anime-brand-campaign-portrait-by-chillaikalan",
      "title": "Anime Brand Campaign Portrait (by @ChillaiKalan__)",
      "prompt": "Semi-realistic anime style young Korean woman in the uploaded image, ORBIT brand campaign, oversized nuclear orange and white technical jacket, wide black pants, futuristic sneakers, vivid orange seamless backdrop, chrome silver props, circular orbital shapes, sharp flash photography, premium streetwear hype drop energy, clean fashion editorial.",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1260,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b5d35902f43543b888594ab5aa8909db.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b4023fcd215284-0a412fe8d4-320.webp",
          "640": "/prompt-template-images/tpl-b4023fcd215284-0a412fe8d4-640.webp",
          "960": "/prompt-template-images/tpl-b4023fcd215284-0a412fe8d4-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:00:02.006Z"
    },
    {
      "id": "tpl-36381dc87f0777",
      "slug": "3d-character-editorial-quartet-by-iamaiistudio",
      "title": "3D Character Editorial Quartet (by @iamaiistudio)",
      "prompt": "Create a vertical 2:3 ultra high definition series of four stylized 3D cartoon editorial renders. Use a polished toy-like character finish, smooth matte skin, expressive oversized eyes, crisp silhouettes, soft studio lighting with realistic cast shadows, subtle backdrop grain, and strong single-color art direction. Keep each image clean, premium, and sharply separated from the background, with no text, no watermark, and no logo. Image 1: a stylized cartoon woman in a fitted ribbed blue dress with thin straps, red sunglasses resting on short tousled brown hair, red bow high-heel sandals, standing in a playful curved pose with crossed legs against a solid vivid red matte studio wall. Side ligh",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4499,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/41f0da2f67b24f94ae1803c0b453fec4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-36381dc87f0777-4181b8ebbd-320.webp",
          "640": "/prompt-template-images/tpl-36381dc87f0777-4181b8ebbd-640.webp",
          "960": "/prompt-template-images/tpl-36381dc87f0777-4181b8ebbd-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:05:40.438Z"
    },
    {
      "id": "tpl-4de8ae53d2ad24",
      "slug": "vertical-character-concept-sheet-by-iamaiistudio",
      "title": "Vertical Character Concept Sheet (by @iamaiistudio)",
      "prompt": "prompt: Design a high-resolution vertical character concept poster with a luxurious pink and white aesthetic that blends elegance with edgy modern fashion. The layout should feel like a premium magazine profile with clean sections and precise grid alignment. Main subject: An original young woman (not based on any real person), with long silky dark hair featuring subtle pink highlights. She has a confident, calm expression with a slightly mysterious aura. She wears a black and pink hybrid outfit (merging streetwear with idol fashion) featuring glossy textures, lace details, and metallic accents. Lighting is soft but dramatic, with a neon pink glow set against dark tones. Top section: Large he",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7461,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c3d224fb7e81465c86904ab1486acad5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4de8ae53d2ad24-b6b5d76fff-320.webp",
          "640": "/prompt-template-images/tpl-4de8ae53d2ad24-b6b5d76fff-640.webp",
          "960": "/prompt-template-images/tpl-4de8ae53d2ad24-b6b5d76fff-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:08:19.177Z"
    },
    {
      "id": "tpl-5510072e813202",
      "slug": "fashion-design-layering-texture-and-sheer-fabric-diagram",
      "title": "Fashion Design: Layering, Texture & Sheer Fabric Diagram",
      "prompt": "{{USER_TEXT}} - Image input (if provided): {{USER_IMAGE}} ---",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 1739,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/dcaf5690d848464eaa34faa3ab7dfe50.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5510072e813202-639895ed24-320.webp",
          "640": "/prompt-template-images/tpl-5510072e813202-639895ed24-640.webp",
          "960": "/prompt-template-images/tpl-5510072e813202-639895ed24-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:51:54.074Z"
    },
    {
      "id": "tpl-b0cc85d1898399",
      "slug": "cute-3d-render-character-pink-hair-girl-with-modern-outfit",
      "title": "Cute 3D Render Character: Pink Hair Girl with Modern Outfit",
      "prompt": "Cute 3D Render Character: Pink Hair Girl with Modern Outfit。3D render / C4D / Octane Render；pastel pink bob cut with soft bangs, stylized 3D strands；fair with soft pink blush on cheeks。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 1756,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b7a51abebafb40b3a17b5261c2734233.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b0cc85d1898399-5c2f771c16-320.webp",
          "640": "/prompt-template-images/tpl-b0cc85d1898399-5c2f771c16-640.webp",
          "960": "/prompt-template-images/tpl-b0cc85d1898399-5c2f771c16-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:52:05.267Z"
    },
    {
      "id": "tpl-8c4032cd6a9931",
      "slug": "elon-musk-volcanic-rock-bust-3d-render-digital-art",
      "title": "Elon Musk Volcanic Rock Bust 3D Render - Digital Art",
      "prompt": "Elon Musk Volcanic Rock Bust 3D Render - Digital Art。Reimagine the subject as a hyper-real fragmented volcanic basalt construct, assembled from jagged, sharply defined basalt plates suspended in space. Each fragment is fully separated with clearly visible gaps, never touching or fused. Material detail: deep charcoal-black basalt with layered volcanic textures, rough porous surfaces, chipped edges, fine mineral grain, and realistic surface imperfections. Within the gaps only, a subtle internal glow radiates in rich ember tones—burnt orange, molten amber, hints of crimson and gold—suggesting internal heat without any surface glow, lava flow, or melting. Add natural mineral color variation across the basalt, including graphite greys, cool indigo shadows, iron-red undertones, and faint mineral speckling to enhance realism and depth. Lighting: cinematic studio setup with a cool blue-grey top。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 1799,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7efad340ce7d4bee995ffacb168dee15.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8c4032cd6a9931-5f2699f469-320.webp",
          "640": "/prompt-template-images/tpl-8c4032cd6a9931-5f2699f469-640.webp",
          "960": "/prompt-template-images/tpl-8c4032cd6a9931-5f2699f469-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:52:15.625Z"
    },
    {
      "id": "tpl-877f25b63e9fdf",
      "slug": "man-with-iconic-pop-culture-characters-photorealistic-ai",
      "title": "Man with Iconic Pop Culture Characters | Photorealistic AI",
      "prompt": "Man with Iconic Pop Culture Characters | Photorealistic AI。A hyperrealistic, editorial fashion photograph in a studio setting. A real human model with a natural, confident expression and a preserved face stands between giant, photorealistic 3D animated characters, Woody and Buzz Lightyear. The human wears a chunky knitted sweater in warm yellow and blue tones, high-waisted dark blue jeans, and clean white minimalist sneakers. Buzz Lightyear, rendered with incredible detail in his space ranger suit showing realistic plastic and scuff textures, poses heroically with hands on hips. Woody, slightly to the side, has a relaxed stance, tipping his hat with highly detailed fabric and leather textures on his cowboy attire. The background is a clean, split studio backdrop of sky blue and warm brown. Soft, professional studio lighting creates smooth shadows and highlights the contrasting textures o",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 1841,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/93905bc3afc64d9eb293f30ee2737044.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-877f25b63e9fdf-7ca59960e0-320.webp",
          "640": "/prompt-template-images/tpl-877f25b63e9fdf-7ca59960e0-640.webp",
          "960": "/prompt-template-images/tpl-877f25b63e9fdf-7ca59960e0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:52:27.296Z"
    },
    {
      "id": "tpl-c5d3505fdcef68",
      "slug": "3d-character-design-and-man-portrait-matching-outfits",
      "title": "3D Character Design & Man Portrait Matching Outfits",
      "prompt": "3D Character Design & Man Portrait Matching Outfits。Hyper-realistic studio photo of a stylish person using the uploaded reference face with exact facial likeness, proportions, and expression. The person is standing casually with legs crossed at the ankles, one arm wrapped around a giant Pixar-style 3D version of themselves. Outfit: navy blue hoodie, beige chinos, cream-colored sneakers. The Pixar 3D character has a slim, athletic body (NOT chubby or fat), identical outfit, same height scale as shown, same confident stance, one hand on hip. The Pixar character has the SAME playful facial expression as reference: clear mischievous smile with a DISTINCT wink (one eye closed, one eye open). Facial structure, eyebrows, jawline, nose, and smile must closely match the uploaded face. Clean soft pink backdrop, studio lighting, soft shadows, high detail, smooth Pixar-quality materials, realistic h。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 1870,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ab188becba4b4a5ebcc53c86692c988e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c5d3505fdcef68-7841599959-320.webp",
          "640": "/prompt-template-images/tpl-c5d3505fdcef68-7841599959-640.webp",
          "960": "/prompt-template-images/tpl-c5d3505fdcef68-7841599959-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:52:38.081Z"
    },
    {
      "id": "tpl-e4cc3e51eec8ef",
      "slug": "casual-man-photorealistic-photo-to-vector-art-character",
      "title": "Casual Man: Photorealistic Photo to Vector Art Character",
      "prompt": "Casual Man: Photorealistic Photo to Vector Art Character。64K DSLR ultra-sharp split-reality street art portrait using the uploaded image as exact face reference. Vertical frame, man leaning against a light-gray concrete wall. Left side photorealistic: red cap, black hoodie, loose gray knee-length shorts, white crew socks, red Nike sneakers, arms crossed, one foot on wall, natural soft daylight, realistic shadows, asphalt ground. Right side illustrated: same pose, outfit, proportions, stylized 2D cartoon with bold black outlines.",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 1891,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e78b3ec5eef4424cbff2e6ab75b6407a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e4cc3e51eec8ef-dbdb7f2819-320.webp",
          "640": "/prompt-template-images/tpl-e4cc3e51eec8ef-dbdb7f2819-640.webp",
          "960": "/prompt-template-images/tpl-e4cc3e51eec8ef-dbdb7f2819-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:52:58.704Z"
    },
    {
      "id": "tpl-64172153756f72",
      "slug": "black-panther-character-design-futuristic-neon-superhero",
      "title": "Black Panther Character Design - Futuristic Neon Superhero",
      "prompt": "Black Panther Character Design - Futuristic Neon Superhero。glowing 3D Black Panther emblem behind；sleek black futuristic bodysuit；neon purple glow with rim light effect。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎭 Character Design",
      "sourceLine": 2138,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8d6c4aefa80f44e59cc3d7bfaee3c324.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-64172153756f72-1f3b84c117-320.webp",
          "640": "/prompt-template-images/tpl-64172153756f72-1f3b84c117-640.webp",
          "960": "/prompt-template-images/tpl-64172153756f72-1f3b84c117-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:53:51.890Z"
    },
    {
      "id": "tpl-d82f129a3bac49",
      "slug": "anime-girls-winter-scene-fantasy-and-mystery-torii-gate",
      "title": "Anime Girls Winter Scene: Fantasy & Mystery Torii Gate",
      "prompt": "来年もよろしくお願いします。 ---",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎌 Anime & Manga",
      "sourceLine": 6735,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/05de41bad9184066a7e7473c4547d6da.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d82f129a3bac49-f3fb22394b-320.webp",
          "640": "/prompt-template-images/tpl-d82f129a3bac49-f3fb22394b-640.webp",
          "960": "/prompt-template-images/tpl-d82f129a3bac49-f3fb22394b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:54:43.441Z"
    },
    {
      "id": "tpl-a228632084add0",
      "slug": "cheerful-anime-vtuber-comic-strip-polka-luna-kanata",
      "title": "Cheerful Anime VTuber Comic Strip: Polka, Luna, Kanata",
      "prompt": "Google Nano Banana Pro ---",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎌 Anime & Manga",
      "sourceLine": 6751,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/66862a0f29ca429b9bfcc87cdcbad963.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a228632084add0-0eee361433-320.webp",
          "640": "/prompt-template-images/tpl-a228632084add0-0eee361433-640.webp",
          "960": "/prompt-template-images/tpl-a228632084add0-0eee361433-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:55:16.322Z"
    },
    {
      "id": "tpl-7a702c3ae1a7ae",
      "slug": "coffee-shop-art-anime-sketch-and-claymation-characters",
      "title": "Coffee Shop Art: Anime, Sketch & Claymation Characters",
      "prompt": "With Google Nano Banana Pro it's easy to combine different styles in a single image. In this photo we've included an anime character, a sketched character and a claymation one, all with just a prompt. ---",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎌 Anime & Manga",
      "sourceLine": 6767,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9b956ad363784c8b9e7a692da9801784.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7a702c3ae1a7ae-0e5c76d84d-320.webp",
          "640": "/prompt-template-images/tpl-7a702c3ae1a7ae-0e5c76d84d-640.webp",
          "960": "/prompt-template-images/tpl-7a702c3ae1a7ae-0e5c76d84d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:55:26.504Z"
    },
    {
      "id": "tpl-ce45d0c102423d",
      "slug": "hololive-vtuber-comic-strip-shiori-novella-and-friends-react",
      "title": "Hololive VTuber Comic Strip: Shiori Novella and Friends React",
      "prompt": "Google Nano Banana Pro ---",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎌 Anime & Manga",
      "sourceLine": 6783,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6c078be72cab43729f860548d8a9f06c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ce45d0c102423d-ece05aa1bf-320.webp",
          "640": "/prompt-template-images/tpl-ce45d0c102423d-ece05aa1bf-640.webp",
          "960": "/prompt-template-images/tpl-ce45d0c102423d-ece05aa1bf-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:55:36.662Z"
    },
    {
      "id": "tpl-801b4f3766630a",
      "slug": "comic-book-adventure-young-team-on-a-lost-city-mission",
      "title": "Comic Book Adventure: Young Team on a Lost City Mission",
      "prompt": "Google Nano Banana Pro & MULTIPLE characters in ONE comics generation with a storyline! Watch this prompt For the next 48 hours ONLY - get 1 Year UNLIMITED Google Nano Banana Pro on Higgsfield! For 12 hours: follow, like, retweet & comment = FREE 100 credits ---",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎌 Anime & Manga",
      "sourceLine": 6799,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/759a41764515444b90d66606a2d8af20.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-801b4f3766630a-4bff256ef8-320.webp",
          "640": "/prompt-template-images/tpl-801b4f3766630a-4bff256ef8-640.webp",
          "960": "/prompt-template-images/tpl-801b4f3766630a-4bff256ef8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:55:56.917Z"
    },
    {
      "id": "tpl-9fba7fbc55692c",
      "slug": "anime-sci-fi-pilot-in-spaceship-combat-intense-action",
      "title": "Anime Sci-Fi Pilot in Spaceship Combat - Intense Action",
      "prompt": "This will avoid triggering \"photoreal CGI\" and you won't have to do the whole \"behind the scenes\" trick. @venturetwins ---",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎌 Anime & Manga",
      "sourceLine": 6821,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/376f15f9b83343a58177b4d77c2a68e5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9fba7fbc55692c-1b9aa97dbb-320.webp",
          "640": "/prompt-template-images/tpl-9fba7fbc55692c-1b9aa97dbb-640.webp",
          "960": "/prompt-template-images/tpl-9fba7fbc55692c-1b9aa97dbb-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:57:01.002Z"
    },
    {
      "id": "tpl-119849265c98fa",
      "slug": "pikachu-vs-gyarados-pixel-art-pokemon-thunderbolt-battle",
      "title": "Pikachu vs. Gyarados Pixel Art - Pokemon Thunderbolt Battle",
      "prompt": "It even knows which moves should and should not be effective ---",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎌 Anime & Manga",
      "sourceLine": 6839,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b34b873e1ce84ae482ae6b4ae20945e4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-119849265c98fa-715bbcfcf0-320.webp",
          "640": "/prompt-template-images/tpl-119849265c98fa-715bbcfcf0-640.webp",
          "960": "/prompt-template-images/tpl-119849265c98fa-715bbcfcf0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:57:42.958Z"
    },
    {
      "id": "tpl-0ef5009142720d",
      "slug": "watercolor-fashion-sketch-by-naiknelofar788",
      "title": "Watercolor Fashion Sketch (by @Naiknelofar788)",
      "prompt": "Transform the uploaded photo into a full-body watercolor fashion illustration in the style of an elegant runway design sketch. Preserve the original outfit, pose, silhouette, colors, fabrics, accessories, shoes, hairstyle and overall styling from the photo. Do not redesign the clothing. Use elongated fashion-sketch proportions The clothing should remain realistic and recognizable, with accurate cut, fit, folds, fabric texture, prints and details. Style: high-fashion watercolor illustration, loose expressive ink lines, delicate pencil contour, transparent watercolor washes, soft shadows, painterly texture, minimalist editorial mood. White or very light background, clean composition, full body",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1028,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1792fbd19b92445d90bd7e3cfb1d20a1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0ef5009142720d-13c8779ddb-320.webp",
          "640": "/prompt-template-images/tpl-0ef5009142720d-13c8779ddb-640.webp",
          "960": "/prompt-template-images/tpl-0ef5009142720d-13c8779ddb-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:58:14.304Z"
    },
    {
      "id": "tpl-f7de095820ec3a",
      "slug": "origami-portrait-illustration-by-inshrah-ali",
      "title": "Origami Portrait Illustration (by @Inshrah_ali_)",
      "prompt": "Ultra-detailed origami paper art portrait of given picture, entirely crafted from meticulously folded paper layers and intricate geometric origami shapes. Realistic paper texture with visible creases and handcrafted folds, defining a low-poly facial structure. Elegant Japanese-inspired aesthetic. Layered paper background featuring delicate cherry blossoms, majestic mountains, stylized sun motifs, and abstract folded patterns. Luxurious gold, black, cream, and white color palette. she wears a football jersey made from artfully folded paper fabric. Dramatic cinematic studio lighting, casting ultra-realistic shadows and creating profound depth. A highly detailed handcrafted paper sculpture, pre",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1071,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0c6fd08e24e843c989d666cdbbdeb3bc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f7de095820ec3a-ee64699ae6-320.webp",
          "640": "/prompt-template-images/tpl-f7de095820ec3a-ee64699ae6-640.webp",
          "960": "/prompt-template-images/tpl-f7de095820ec3a-ee64699ae6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:58:37.165Z"
    },
    {
      "id": "tpl-fced03cfb69f23",
      "slug": "busan-travel-journal-illustration-by-sairah-0",
      "title": "Busan Travel Journal Illustration (by @Sairah_0)",
      "prompt": "Dreamy Busan Korea travel journal illustration, cozy vintage scrapbook aesthetic, watercolor and ink art style, red-haired girl sitting at a seaside café writing in a notebook, cream knitted cardigan, floral dress, cinematic ocean view, colorful Gamcheon Culture Village houses on cliffside, Korean signs, travel stamps, boarding pass, handwritten notes, postcards, maps, tape stickers, seashells, coffee cup, retro camera on wooden table, soft pastel tones, warm sunlight, detailed paper textures, w",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1193,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ea5600df1a7447fa9d4cb53c5b8fe039.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fced03cfb69f23-b53e1298b9-320.webp",
          "640": "/prompt-template-images/tpl-fced03cfb69f23-b53e1298b9-640.webp",
          "960": "/prompt-template-images/tpl-fced03cfb69f23-b53e1298b9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T14:59:51.157Z"
    },
    {
      "id": "tpl-770af3d98fdaaa",
      "slug": "pixar-3d-character-design-sheet-by-techiebysa",
      "title": "Pixar 3D Character Design Sheet (by @TechieBySA)",
      "prompt": "“Create a Pixar 3D style character design sheet. Clean white background. Two characters side by side with a clean dividing line. Bold brushstroke-style title at the top: PAUL vs THE POLE VAULT. Subtitle beneath: One pole. One shot. Straight up. LEFT SIDE — PAUL Large name in bold black. Underneath: \"The bar was never the problem.\" Hero portrait — Paul isolated on clean white. No background. Pixar 3D man, mid 20s, lean athletic build, electric blue athletics vest with thin gold stripe on shoulder, white shorts, white spikes with electric blue detail. Focused determined expression. Holding a long silver pole horizontally in both hands, slightly crouched forward. Just Paul on white. Three poses",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1499,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/22237e6566624e4cb24e32a25988eb2a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-770af3d98fdaaa-467b3b9b63-320.webp",
          "640": "/prompt-template-images/tpl-770af3d98fdaaa-467b3b9b63-640.webp",
          "960": "/prompt-template-images/tpl-770af3d98fdaaa-467b3b9b63-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:00:24.981Z"
    },
    {
      "id": "tpl-5985d48ba8eec1",
      "slug": "miki-style-line-art-portrait-by-chillaikalan",
      "title": "Miki Style Line Art Portrait (by @ChillaiKalan__)",
      "prompt": "​A precise line art illustration portrait in the distinctive Miki style, with clean, defined dark contours and minimal, subtle watercolor wash coloring. Subject: A gender-neutral single person with natural medium-length dark hair, wearing round wire-rimmed glasses and a simple dark blue-gray knit sweater, in a clean, soft profile view (facing either left or right). They hold a large bouquet of soft pink and white flowers (roses and small wildflowers) as seen in image_3/4, with one hand visible. Background: A minimalist background with a smooth, matte finish of a single color tone (e.g., warm beige or pale mint, as requested), with a very subtle, almost unnoticeable, watercolor paper texture.",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1649,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/fca4ebf855d14ef1877d59d2fbd0be62.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5985d48ba8eec1-c197e66708-320.webp",
          "640": "/prompt-template-images/tpl-5985d48ba8eec1-c197e66708-640.webp",
          "960": "/prompt-template-images/tpl-5985d48ba8eec1-c197e66708-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:00:45.364Z"
    },
    {
      "id": "tpl-865ea1a8caecd5",
      "slug": "artistic-sketch-portrait-young-man-by-iamsofiaijaz",
      "title": "Artistic Sketch Portrait Young Man (by @iamsofiaijaz)",
      "prompt": "Create a unique artistic sketch-style portrait of a modern young man wearing black sunglasses, with textured pencil and ink drawing effects mixed with abstract collage elements. Change the shirt color to deep olive green with soft watercolor shading. Add layered geometric frames around the face, expressive cross-hatching, ink splashes, handwritten typography notes, and contemporary fashion mood-board aesthetics. Keep the hairstyle detailed and voluminous with realistic sketch strokes. Use an off-white textured paper background with artistic grunge accents, dynamic composition, and editorial magazine-style illustration. High detail, cinematic lighting, modern urban art style, creative mixed-m",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1692,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/872bafb1ac0b4c03bbbc60fbbaed1b94.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-865ea1a8caecd5-68715e436f-320.webp",
          "640": "/prompt-template-images/tpl-865ea1a8caecd5-68715e436f-640.webp",
          "960": "/prompt-template-images/tpl-865ea1a8caecd5-68715e436f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:00:55.615Z"
    },
    {
      "id": "tpl-056923208238af",
      "slug": "switzerland-watercolor-travel-poster-by-sairah-0",
      "title": "Switzerland Watercolor Travel Poster (by @Sairah_0)",
      "prompt": "(Switzerland Poster)",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1744,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/602852feb1f8486a96f2b3c55be383a7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-056923208238af-5294acd9b5-320.webp",
          "640": "/prompt-template-images/tpl-056923208238af-5294acd9b5-640.webp",
          "960": "/prompt-template-images/tpl-056923208238af-5294acd9b5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:01:25.232Z"
    },
    {
      "id": "tpl-ff87d633e176f3",
      "slug": "flat-vector-editorial-pattern-illustration-by-goodmanprotocol",
      "title": "Flat Vector Editorial Pattern Illustration (by @Goodmanprotocol)",
      "prompt": "Create a sophisticated flat-vector editorial pattern illustration of [Chicago bulls], composed as a seamless lifestyle-art collage combining iconic landmarks, local culture, vacation scenes, and symbolic city objects.",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1862,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4a4f031760d64a39aa3f4bbb88cb01bc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ff87d633e176f3-6abd2290aa-320.webp",
          "640": "/prompt-template-images/tpl-ff87d633e176f3-6abd2290aa-640.webp",
          "960": "/prompt-template-images/tpl-ff87d633e176f3-6abd2290aa-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:02:16.734Z"
    },
    {
      "id": "tpl-a9d4a17fe0699e",
      "slug": "hollywood-luxury-anime-fashion-portrait-by-mind-boticni",
      "title": "Hollywood Luxury Anime Fashion Portrait (by @Mind_Boticni)",
      "prompt": "Create a premium 1:1 Hollywood-style luxury anime fashion editorial collage featuring the same stylish Japanese college male anime character with perfectly consistent facial identity across all frames. The character should have sharp anime facial design (clean jawline, expressive eyes, refined proportions) with ultra-detailed semi-realistic anime shading.Include multiple cinematic moments: close-up beauty anime portrait with soft glowing skin, walking through neon Tokyo streets in designer streetwear, sitting in modern university classroom with confident calm expression, rooftop golden hour silhouette with wind effects, and stylish mirror selfie in luxury dorm room.Use cinematic anime lighti",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1888,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bcd2d5a7af684ac1966d4d3aefdc445c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a9d4a17fe0699e-0f574cc7ef-320.webp",
          "640": "/prompt-template-images/tpl-a9d4a17fe0699e-0f574cc7ef-640.webp",
          "960": "/prompt-template-images/tpl-a9d4a17fe0699e-0f574cc7ef-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:02:37.845Z"
    },
    {
      "id": "tpl-e8246658dae539",
      "slug": "pixel-art-character-portrait-by-oggii-0",
      "title": "Pixel Art Character Portrait (by @oggii_0)",
      "prompt": "Create a cute and stylish pixel-art illustration based on the uploaded image in the style of:",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1914,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7846339bcaa54959b51f726d0e06f2c7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e8246658dae539-efad0e3399-320.webp",
          "640": "/prompt-template-images/tpl-e8246658dae539-efad0e3399-640.webp",
          "960": "/prompt-template-images/tpl-e8246658dae539-efad0e3399-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:02:47.844Z"
    },
    {
      "id": "tpl-f3d20091a7a68f",
      "slug": "pixar-3d-character-design-sheet-by-techiebysa-512d16",
      "title": "Pixar 3D Character Design Sheet (by @TechieBySA)",
      "prompt": "“Create a Pixar 3D style character design sheet. Clean white background. Two characters side by side with a clean dividing line. Bold brushstroke-style title at the top: STEVE VS THE PLANK. Subtitle beneath: 60 seconds. Feels like a week.",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1959,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/51891d761bf74d5dba27db77e69f9cf0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f3d20091a7a68f-1872c89b92-320.webp",
          "640": "/prompt-template-images/tpl-f3d20091a7a68f-1872c89b92-640.webp",
          "960": "/prompt-template-images/tpl-f3d20091a7a68f-1872c89b92-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:02:57.819Z"
    },
    {
      "id": "tpl-95bc3cde0db30a",
      "slug": "kawaii-character-side-profile-portrait-by-vibequirklabs",
      "title": "Kawaii Character Side Profile Portrait (by @VIBEQUIRKLABS)",
      "prompt": "Create a photorealistic editorial portrait of one 20-year-old Japanese or Korean female portrait subject with white frame, thin-frame glasses, worn normally on the face, lenses aligned over the eyes and small teardrop gemstone earring detail, delicate understated sparkle, natural basic body, about 160-165 cm visual height, balanced torso-to-leg ratio around 4:6, young seductive alluring beauty face, magnetic feminine facial balance, defined eyes and lips, collarbone-length layered hair, airy natural volume, soft face-framing movement, soft black-tea brown hair, muted brown-black salon tone. She is sitting on a chair that naturally fits the current scene. The setting is British record listeni",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2579,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/09bbeca4e4794fcea12f8145335680d0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-95bc3cde0db30a-c0a413eaff-320.webp",
          "640": "/prompt-template-images/tpl-95bc3cde0db30a-c0a413eaff-640.webp",
          "960": "/prompt-template-images/tpl-95bc3cde0db30a-c0a413eaff-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:03:08.378Z"
    },
    {
      "id": "tpl-c62b335b5fd5bb",
      "slug": "neon-doodle-gallery-snapshot-template-by-im-shahid7",
      "title": "Neon Doodle Gallery Snapshot Template (by @im_shahid7)",
      "prompt": "Create a 9:16 image in the \"Neon Doodle Gallery Snapshot\" style. Subject: [SUBJECT]. Subject action: [SUBJECT_ACTION]. Prop or product: [PRODUCT_OR_PROP]. Location: [kashmir]. Background elements: [wooden interior ]. Main handwritten text: \"[Focus mode on]\". Secondary handwritten text: \"[keep going]\". Accent symbol: [ACCENT_SYMBOL]. Wardrobe style: [WARDROBE_STYLE]. Use a realistic candid phone-photo as the base layer. The setting should feel specific and ordinary: visible walls, art, shelves, labels, tables, lamps, posters, people, bags, shadows, grain, and imperfect handheld framing. Draw a loud digital marker layer directly on top of the photo. Wrap the main subject with a thick hot-pink",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2973,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/96405d3ec30c42b7bfe3a8ad32895037.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c62b335b5fd5bb-8c099ac8ed-320.webp",
          "640": "/prompt-template-images/tpl-c62b335b5fd5bb-8c099ac8ed-640.webp",
          "960": "/prompt-template-images/tpl-c62b335b5fd5bb-8c099ac8ed-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:03:29.726Z"
    },
    {
      "id": "tpl-bea9bf49ee7ee9",
      "slug": "sharp-digital-portrait-illustration-by-jamilai55",
      "title": "Sharp Digital Portrait Illustration (by @JamilAI55)",
      "prompt": "Open Gemini / Grok / GPT Image 2.0 2. Upload your photo 3. Copy the prompt 4. Generate 5. Prompt ⤵️ Prompt 👇 Ultra-detailed digital portrait illustration of a confident young man with sharp facial features and intense dark eyes, looking directly into the camera. His hand covers the lower half of his face, creating a mysterious and powerful expression. Stylish voluminous black hair, wearing a deep red shirt over a black t-shirt, black wrist wrap, and a subtle gold chain. Dramatic red rim lighting outlining the hair, face, shoulders, and clothing against a pure black background. High-contrast cinematic lighting, dark moody atmosphere, bold shadows, comic-book and graphic novel style, semi-real",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 3103,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/09157e17903d446593925a24fa47f0cc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-bea9bf49ee7ee9-036ed6b0ad-320.webp",
          "640": "/prompt-template-images/tpl-bea9bf49ee7ee9-036ed6b0ad-640.webp",
          "960": "/prompt-template-images/tpl-bea9bf49ee7ee9-036ed6b0ad-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:03:52.339Z"
    },
    {
      "id": "tpl-9d0987f70c3a29",
      "slug": "food-photography-with-doodle-characters-by-taaruk-prompt-1-beach-cafe-cute-doodle-characters",
      "title": "Food Photography with Doodle Characters (by @Taaruk_) [Prompt 1 (Beach café + cute doodle characters):]",
      "prompt": "Aesthetic beachside café scene with a wooden table overlooking the ocean, bright daylight, soft shadows, tropical vibe. A delicious bowl of food and a coconut drink placed on the table. Add cute illustrated cartoon characters (fox, bunny, cat) sitting and relaxing around the food, with tiny hand-drawn doodles (hearts, sparkles, motion lines). Cozy wholesome mood, playful storytelling, mix of real photography and 2D illustration overlay, soft warm color grading, shallow depth of field, ultra-realistic food details, 4K.",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3209,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b01d38b1951140d2ac02eaf39d900f26.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9d0987f70c3a29-b699f5dde3-320.webp",
          "640": "/prompt-template-images/tpl-9d0987f70c3a29-b699f5dde3-640.webp",
          "960": "/prompt-template-images/tpl-9d0987f70c3a29-b699f5dde3-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:04:11.156Z"
    },
    {
      "id": "tpl-41f2f9c38bba62",
      "slug": "food-photography-with-doodle-characters-by-taaruk-prompt-2-food-flatlay-playful-illustrated-anno",
      "title": "Food Photography with Doodle Characters (by @Taaruk_) [Prompt 2 (Food flatlay + playful illustrated annotations):]",
      "prompt": "Top-down vibrant food flatlay featuring multiple crispy fried dishes (fish, shrimp, chicken) with dipping sauces on a dark textured table. Add playful hand-drawn doodles and tiny cartoon characters interacting with the food (surfing shrimp, holding signs, cooking, playing). Include fun handwritten labels like \"Golden Crunch\", \"Perfect Pairing\", \"Champion Fish\". Bright colors, high contrast, crispy texture details, steam effects, dynamic composition, social media food ad style, ultra-realistic, 4K.",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3215,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f92cab9f450549bcb15907ce511ac5ba.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-41f2f9c38bba62-97fed3ed6e-320.webp",
          "640": "/prompt-template-images/tpl-41f2f9c38bba62-97fed3ed6e-640.webp",
          "960": "/prompt-template-images/tpl-41f2f9c38bba62-97fed3ed6e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:04:22.088Z"
    },
    {
      "id": "tpl-c17ce0cc068e06",
      "slug": "food-photography-with-doodle-characters-by-taaruk-prompt-3-cozy-coffee-illustrated-storytelling",
      "title": "Food Photography with Doodle Characters (by @Taaruk_) [Prompt 3 (Cozy coffee + illustrated storytelling):]",
      "prompt": "Warm cozy coffee scene on a rustic wooden table with a cup of latte art on a yellow saucer, coffee beans and cinnamon sticks around, small bonsai plant nearby. Add cute animated doodle characters (coffee bean with wings, cat barista painting latte art) and flowing illustrated steam forming magical shapes. Include soft handwritten typography: \"Crafted Comfort – Your Daily Ritual\". Golden hour lighting, warm tones, soft glow, dreamy atmosphere, shallow depth of field, ultra-realistic + 2D illustration blend, 4K.",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3221,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/53051511b95e49fe8a78728669492fe3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c17ce0cc068e06-72ac073e53-320.webp",
          "640": "/prompt-template-images/tpl-c17ce0cc068e06-72ac073e53-640.webp",
          "960": "/prompt-template-images/tpl-c17ce0cc068e06-72ac073e53-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:04:35.621Z"
    },
    {
      "id": "tpl-5be071f74a7f29",
      "slug": "character-profile-sheet-by-iamsofiaijaz",
      "title": "Character Profile Sheet (by @iamsofiaijaz)",
      "prompt": "A stylish illustrated character profile sheet of a handsome young man sketchbook aesthetic, mixed media ink and watercolor style, highly detailed fashion portrait, messy dark curly hair, sharp blue eyes, short beard, confident expression, wearing a long black trench coat, dark casual clothes, brown leather backpack, rugged boots. The page layout includes multiple poses and close-up portraits, surrounded by handwritten notes, doodles, symbols, travel sketches, cameras, mountains, coding references, and adventure elements. Personality board design with handwritten text such as traveler, coder, photographer, teacher, sound engineer, Scorpio zodiac sign, river rafting, creative ideas, life goals",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3824,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d53b348d906e496884f7b5042e91c42a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5be071f74a7f29-7c066238d9-320.webp",
          "640": "/prompt-template-images/tpl-5be071f74a7f29-7c066238d9-640.webp",
          "960": "/prompt-template-images/tpl-5be071f74a7f29-7c066238d9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:04:47.293Z"
    },
    {
      "id": "tpl-8f0b450f320bc8",
      "slug": "sci-fi-character-concept-sheet-by-0kncn",
      "title": "Sci-Fi Character Concept Sheet (by @0kncn)",
      "prompt": "Create a 16:9 character concept sheet for a celestial voyager in an epic cinematic sci-fi fantasy aesthetic.",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3934,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0ae2a903df464184807228445b1d79a7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8f0b450f320bc8-98ea007d31-320.webp",
          "640": "/prompt-template-images/tpl-8f0b450f320bc8-98ea007d31-640.webp",
          "960": "/prompt-template-images/tpl-8f0b450f320bc8-98ea007d31-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:04:58.157Z"
    },
    {
      "id": "tpl-82d0c6c2de7dd3",
      "slug": "pixar-3d-character-design-sheet-by-techiebysa-aeaa0d",
      "title": "Pixar 3D Character Design Sheet (by @TechieBySA)",
      "prompt": "“Create a Pixar 3D style character design sheet. Clean white background. Two characters side by side with a clean dividing line. Bold brushstroke-style title at the top: CHAD VS THE GYM MIRROR. Subtitle beneath: One way mirror. One audience. Zero awareness. LEFT SIDE — CHAD Large name in bold black. Underneath: “Just needed a quick pump check.” Hero portrait — Chad isolated on clean white. No background. Pixar 3D man, late 20s, natural athletic build — genuinely fit but not cartoonishly huge. Ne",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3947,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/efe9167520e64b60a0d0668e555d4bc4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-82d0c6c2de7dd3-6dc87baf5b-320.webp",
          "640": "/prompt-template-images/tpl-82d0c6c2de7dd3-6dc87baf5b-640.webp",
          "960": "/prompt-template-images/tpl-82d0c6c2de7dd3-6dc87baf5b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:05:07.476Z"
    },
    {
      "id": "tpl-c05cf7bd9be865",
      "slug": "original-anime-dev-board-prompt",
      "title": "Original Anime Dev Board [Prompt**:]",
      "prompt": "Create a single vertical anime animation development board for an original emotional short film titled “The Girl and the Paper Boat”. The output must be ONE combined image containing: 1. an anime character design sheet 2. a cinematic storyboard page IMPORTANT: Create fully original anime characters. Do not imitate Studio Ghibli characters directly. Do not resemble any copyrighted anime characters. Keep the designs unique, soft, nostalgic, and emotionally warm. STYLE: Premium anime pre-production board. Mix loose hand-drawn storyboard sketches with beautiful semi-rendered anime keyframes. Use soft watercolor-style anime lighting, warm sunset colors, gentle shadows, red storyboard borders, blu",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4294,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/df16076b1ad84b48a25f4d530e6a9ec1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c05cf7bd9be865-25036f08ae-320.webp",
          "640": "/prompt-template-images/tpl-c05cf7bd9be865-25036f08ae-640.webp",
          "960": "/prompt-template-images/tpl-c05cf7bd9be865-25036f08ae-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:05:18.466Z"
    },
    {
      "id": "tpl-67578eb8e78643",
      "slug": "love-bites-cyberpunk-manga-cover-by-her19845",
      "title": "Love Bites Cyberpunk Manga Cover (by @her19845)",
      "prompt": "Generate a vintage vinyl album cover with a cyberpunk and manga aesthetic, grainy and worn. The background is dark and textured, with scratches and dust. At the top, the title \"LOVE BITES\" appears in large white and gray capital letters, with two red lines crossed out. To the left of the title is a red six-pointed star symbol with a central asterisk. Below the title is the text: \"BEAUTY IS POWER, SILENCE IS WAR.\" In the center is a monochrome manga-style illustration of the attached image. Behind it is a monochrome illustration of a 1990s JDM sports car. Includes multiple graphic details and logos: Top left: logos for \"STEREOPHONIC HIGH FIDELITY RECORDING,\" \"33 ⅓ RPM,\" and \"LP.\" Top right: a",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4962,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/25a7552cadc5467d9c31ab95d6f414a6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-67578eb8e78643-5a8727d605-320.webp",
          "640": "/prompt-template-images/tpl-67578eb8e78643-5a8727d605-640.webp",
          "960": "/prompt-template-images/tpl-67578eb8e78643-5a8727d605-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:05:52.231Z"
    },
    {
      "id": "tpl-cf9d403609c1f1",
      "slug": "cosmic-anime-villain-poster-by-taaruk",
      "title": "Cosmic Anime Villain Poster (by @Taaruk_)",
      "prompt": "Ultra-detailed anime villain portrait poster, dark cosmic background, legendary antagonist standing front-facing, one hand covering the lower face in a sinister pose, glowing eyes staring directly at the viewer, powerful aura exploding around the body, energy particles, nebula clouds, ink splashes, cosmic dust, dramatic rim lighting, high contrast shadows, cinematic anime illustration, sharp facial details, muscular physique, premium manga cover aesthetic, vibrant monochromatic color theme matching the character, giant distressed typography behind the character displaying the name in huge bold letters, Japanese kanji and English subtitles, character quote on the side, power stats panel, clas",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5413,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b8bb102adf7944838977eafecb9cbbf6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-cf9d403609c1f1-0741a774e3-320.webp",
          "640": "/prompt-template-images/tpl-cf9d403609c1f1-0741a774e3-640.webp",
          "960": "/prompt-template-images/tpl-cf9d403609c1f1-0741a774e3-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:06:12.323Z"
    },
    {
      "id": "tpl-4de9088bd0004b",
      "slug": "animated-character-design-sheet-by-0kncn",
      "title": "Animated Character Design Sheet (by @0kncn)",
      "prompt": "Create a highly detailed full-color character design sheet in 16:9 horizontal format for an original [CHARACTER TYPE / HERO / CREATURE / VILLAIN]. STYLE: stylized cinematic character design, high-quality animated feature look, clean readable shapes, strong silhouette, premium concept art presentation, bold graphic color palette, comic-book inspired energy, polished but production-ready design, clear anatomy and costume readability. CHARACTER IDENTITY: [CHARACTER NAME / ROLE] [AGE / SPECIES / BODY TYPE] [PERSONALITY ARCHETYPE] [POWER / SKILL / SPECIAL EQUIPMENT] MAIN DESIGN: The character should have a distinctive, memorable silhouette. Use a clear costume language with recognizable shapes, s",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5426,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9870494f2f714c65964caa74891b5a39.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4de9088bd0004b-57cbb8b2e0-320.webp",
          "640": "/prompt-template-images/tpl-4de9088bd0004b-57cbb8b2e0-640.webp",
          "960": "/prompt-template-images/tpl-4de9088bd0004b-57cbb8b2e0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:06:23.789Z"
    },
    {
      "id": "tpl-4731e466bc8b7b",
      "slug": "anime-character-concept-showcase-by-itspixieverse",
      "title": "Anime Character Concept Showcase (by @itsPixieVerse)",
      "prompt": "Create a high-end, asymmetric editorial CHARACTER CONCEPT SHOWCASE from these inputs: [STYLE]: highly polished stylized 3D CGI anime style, modern cinematic 3D magical girl aesthetic with clean soft-shading, vibrant magical reflections, and shimmering particle effects [SUBJECT_DESCRIPTION]: A beautiful celestial magical girl with cosmic powers. She wears an elegant, asymmetric mid-length dress made of deep midnight-blue fabric that subtly mimics a night sky filled with drifting constellations. The dress is detailed with intricate gold filigree along the hem, a single flowing white sleeve, and a delicate silver corset woven with stellar patterns. Softly glowing, semi-translucent ribbons of pu",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5871,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b4fb8951bbac4592be7673e6efd53600.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4731e466bc8b7b-9a0afddef6-320.webp",
          "640": "/prompt-template-images/tpl-4731e466bc8b7b-9a0afddef6-640.webp",
          "960": "/prompt-template-images/tpl-4731e466bc8b7b-9a0afddef6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:06:33.127Z"
    },
    {
      "id": "tpl-b1c4a867037ddb",
      "slug": "persona5-character-reference-card-by-iamrednights",
      "title": "Persona5 Character Reference Card (by @iamrednightS)",
      "prompt": "基于此角色和背景,请制作一份类似官方设定资料的角色资料卡。 ・包含三视图:正面、侧面和背面 ・添加角色面部表情的变化・分解并展示服装和装备的详细部分 ・添加色板・包含世界观设定的简要说明 ・总体上,使用有组织的布局(白色背景,插画风格)高分辨率、专业概念艺术风格",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7202,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8a98782a572c4876942a0ee70df17c5c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b1c4a867037ddb-cc6e253efc-320.webp",
          "640": "/prompt-template-images/tpl-b1c4a867037ddb-cc6e253efc-640.webp",
          "960": "/prompt-template-images/tpl-b1c4a867037ddb-cc6e253efc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:06:44.432Z"
    },
    {
      "id": "tpl-81750e04ab9a98",
      "slug": "mecha-girl-sea-city-key-visual-by-old-pgmrs-will",
      "title": "Mecha Girl Sea-City Key Visual (by @old_pgmrs_will)",
      "prompt": "A mecha girl mid-teens, pale skin smudged with soot and salt spray, sharp amber eyes with glowing HUD reticles, waist-length ash-white hair tied in a high ponytail whipping in the sea wind, matte gunmetal exoskeleton armor plating her shoulders, forearms and shins, exposed hydraulic pistons at the joints, chest rig with glowing cyan coolant lines, oversized oil-stained hangar jacket half slipping off one shoulder, a massive rail cannon resting on her right shoulder, dog tags and frayed red ribbon at her collar , standing off-center to the left on the rusted edge of a tilted steel platform jutting out over dark water, weight shifted onto one leg, left hand gripping the cannon strap, head turn",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7219,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b9e189d6e3bb47aa8f8ee1d01adbff74.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-81750e04ab9a98-301ff680d5-320.webp",
          "640": "/prompt-template-images/tpl-81750e04ab9a98-301ff680d5-640.webp",
          "960": "/prompt-template-images/tpl-81750e04ab9a98-301ff680d5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:06:55.473Z"
    },
    {
      "id": "tpl-c5f08ce4d4cabe",
      "slug": "gta-6-in-bangalore-flower-market-by-ismajc",
      "title": "GTA 6 in Bangalore Flower Market (by @ismajc)",
      "prompt": "GTA 6 in Bangalore Flower Market。Bangalore's market flower。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7232,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ea08041915934898aaab8933abadc92a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c5f08ce4d4cabe-c3a4c43381-320.webp",
          "640": "/prompt-template-images/tpl-c5f08ce4d4cabe-c3a4c43381-640.webp",
          "960": "/prompt-template-images/tpl-c5f08ce4d4cabe-c3a4c43381-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:07:06.125Z"
    },
    {
      "id": "tpl-2e6795b4ec0e8f",
      "slug": "stylized-3d-skater-character-by-iamaiistudio",
      "title": "Stylized 3D Skater Character (by @iamaiistudio)",
      "prompt": "Design a stylized 3D cartoon skater character with a premium animated-film look, mixing Pixar-like polish, Spider-Verse energy, and indie street-art attitude. Character details: - exaggerated proportions with long, skinny limbs - oversized hoodie in customizable pink - baggy ripped denim jeans - chunky sneakers - expressive tired-but-confident face - messy stylized hair - large headphones - backpack covered with pins and patches - standing naturally on a skateboard Visual style: Clean cinematic 3D render with soft global illumination, subtle chromatic aberration, ultra-detailed textures, smooth shading, playful but believable anatomy, high-end character design, stylized streetwear fashion, a",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7247,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/69d9c6e855fd406f835f71686cfb7ad1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2e6795b4ec0e8f-543512d369-320.webp",
          "640": "/prompt-template-images/tpl-2e6795b4ec0e8f-543512d369-640.webp",
          "960": "/prompt-template-images/tpl-2e6795b4ec0e8f-543512d369-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:07:47.702Z"
    },
    {
      "id": "tpl-5549d706772835",
      "slug": "3d-acrobat-jumping-editorial-cartoon-by-iamaiistudio",
      "title": "3D Acrobat Jumping Editorial Cartoon (by @iamaiistudio)",
      "prompt": "prompt: One complete 3D illustration, editorial exaggerated cartoon style, single standalone image, not a storyboard or multi-panel layout. Central character: a cartoon figure with a tiny head, chubby round torso, super-long limbs, huge hands and bulky shoes, slightly off-balance, caught mid-jump in a dramatic pose radiating tension and playful energy. The silhouette reads like a soft toy sculpture — plump, springy, and exaggerated, not anatomically realistic. Surface quality: matte rubber, fuzzy textile, knitted detail, clay-like feel, subtle fiber grain, handmade texture. Avoid shiny plastic, transparent glass, or high-spec reflections. Color: vibrant dopamine palette, high saturation, str",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7514,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ce77ef8a38a84ceaa0a412a1b76127eb.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5549d706772835-a4ba643441-320.webp",
          "640": "/prompt-template-images/tpl-5549d706772835-a4ba643441-640.webp",
          "960": "/prompt-template-images/tpl-5549d706772835-a4ba643441-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:08:30.016Z"
    },
    {
      "id": "tpl-4c676f2faafe2a",
      "slug": "3d-cg-by-liyue-ai",
      "title": "雨中灵姬东方幻想 3D CG 角色 (by @liyue_ai)",
      "prompt": "9:16 竖版，高精度 3D CG 东方幻想女性角色写真，3D CG oriental fantasy beauty portrait，anime-style 3D CG character art，semi-realistic 3D character render，镜头为大腿及上半身构图，画面主体是一位明确成年的年轻东方幻想系女性，视觉年龄约 20–26 岁，整体气质清冷、空灵、精致、安静，带有雨中水系精灵般的神秘感与高级感。整体不是平面插画，而是高完成度 3D CG 角色渲染，具有精致角色建模、真实材质表现、电影级冷调柔光与高级虚拟角色海报质感。 人物拥有精致的东方美型脸，小巧流畅的鹅蛋脸，皮肤冷白细腻，带轻微通透感与柔和皮肤着色，肌肤表面有细腻水珠与湿润反光。眼睛细长清澈，瞳色为冰蓝绿调，瞳孔有通透玻璃感与细致高光，眼神微垂，安静、疏离、略带脆弱感。睫毛纤长，眼妆干净克制，鼻梁秀气挺直，嘴唇柔软，唇色为低饱和裸粉色，嘴唇微启，神情冷静而迷人。 发型为短款蓝黑色渐变发，主色为浓黑与深海军蓝，发尾带冷调蓝色高光，发型为短层次波浪感短发，一侧额发自然垂落遮住部分脸颊，顶部带编发结构，发丝湿润、轻盈、细腻，具有高精度发丝建模与柔顺光泽。耳部佩戴精致蓝色水晶几何耳饰与金属耳骨夹，增强东方幻想与水元素气质。颈部佩戴白色高领装饰项圈与青蓝色宝石流苏细节，精致而高级。 服装为精致的东方幻想水系礼装，上半身穿着白色轻薄、湿润感的缎面的贴身长裙，布料柔软垂坠，带细腻高光和微透感，胸口与躯干线条以克制优雅的方式表现。外层披着一件宽松白色衬衫式轻纱外搭，自然滑落至手臂与腰侧，形成层叠褶皱与飘逸",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7549,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/677da59433304420920731b25968615b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4c676f2faafe2a-375c155d82-320.webp",
          "640": "/prompt-template-images/tpl-4c676f2faafe2a-375c155d82-640.webp",
          "960": "/prompt-template-images/tpl-4c676f2faafe2a-375c155d82-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:08:41.289Z"
    },
    {
      "id": "tpl-25aaac92574cc4",
      "slug": "by-goodmanprotocol",
      "title": "超现实卡通肖像模板 (by @Goodmanprotocol)",
      "prompt": "Vertical bizarre flat cartoon portrait of [SUBJECT from the attached photo] with a high geometric head shape, a long narrow neck, huge round eyes, a tiny mouth and an unflappable laugh, dressed in [CLOTHES from the photo], with a [OBJECT/CREATURE] sitting on their head like a living hat. Pure black outline, smooth color fills, simple face shapes, rare drawings on animal fur or skin, playful surreal character design, bold graphic palette [COLOR]. Background decorations: [ENVIRONMENT DECORATIONS from LOCATION/SCENE], made using simplified shapes, clear depth, a small amount of scenery from the environment and a clear cartoon perspective. Clear digital illustration, vertical framing in the form",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7578,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bcf03363a29f4ce9be46b1fbf445669c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-25aaac92574cc4-74fcfcf4a2-320.webp",
          "640": "/prompt-template-images/tpl-25aaac92574cc4-74fcfcf4a2-640.webp",
          "960": "/prompt-template-images/tpl-25aaac92574cc4-74fcfcf4a2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:09:13.910Z"
    },
    {
      "id": "tpl-af098a8698c70d",
      "slug": "template-7eedaefc",
      "title": "辉光档案官角色海报 [提示词:]",
      "prompt": "Vertical 9:16 full-body cinematic portrait of a single alien character, the Luminant Archivist, standing on a rocky ridge on the twilight band of an alien planet; the creature has a tall elongated body with three root-like legs forming a stable tripod, lower torso textured like smooth bark and sinew fused together; two long arms with four segmented joints each end in multifingered, tendril-like manipulators gently holding a glowing hexagonal plate; instead of a human head, the upper torso flares into a tall crown of layered translucent plates arranged like a vertical fan, each plate lit from within by faint cyan neural patterns, no face, no eyes, no mouth; along its back and shoulders grow r",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7641,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a5b064bb50074a47a36bd2183261426f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-af098a8698c70d-c82bc60748-320.webp",
          "640": "/prompt-template-images/tpl-af098a8698c70d-c82bc60748-640.webp",
          "960": "/prompt-template-images/tpl-af098a8698c70d-c82bc60748-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:09:34.942Z"
    },
    {
      "id": "tpl-1eaad748cf95a1",
      "slug": "japan-city-life-anime-art-urban-exploration-and-travel",
      "title": "Japan City Life Anime Art: Urban Exploration & Travel",
      "prompt": "Japan City Life Anime Art: Urban Exploration & Travel。Anime-style digital poster, GTA V–inspired comic grid, cinematic anime tone, nostalgic warmth mixed with urban energy；Anime-style digital poster, GTA V comic grid style, emotional urban storytelling；Japan Side Stories: City Life – Volume 1。",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🎌 Anime & Manga",
      "sourceLine": 6521,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-87a7dd80db7071",
      "slug": "anime-inspired-pastel-hoodie-portrait-by-de-mon010",
      "title": "Anime-Inspired Pastel Hoodie Portrait (by @de_mon010)",
      "prompt": "Semi-realistic anime-inspired portrait of a stylish man, delicate round-frame glasses, and a gentle confident expression. he wears an oversized pastel lilac hoodie with rolled sleeves paired with a flowing ivory joggers. Full-body composition, standing casually with relaxed posture. Behind his is an artistic collage of hand-drawn monochrome character studies, loose pencil sketches, manga panels, playful doodles, and handwritten notes scattered organically across the backdrop.Contemporary anime fashion illustration with mixed ink-and-pencil textures, clean linework, subtle cel shading, bright white background, magazine-cover aesthetic, highly detailed, ultra-sharp, vibrant yet elegant, 8K mas",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 2754,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-4c01f602a1ebfd",
      "slug": "40k-power-armour-squad-portrait-by-evaglitchai",
      "title": "40K Power Armour Squad Portrait (by @EvaGlitchAI)",
      "prompt": "Prompt of the Day: 40K POWER ARMOUR SQUAD ⚔️🛡️💜💚 Today’s Prompt of the Day turns your characters into a 40K-inspired warriors. Yes this was done before but i wanted to see how much better GPT 2 can do it now Use one character reference for a solo warrior, or attach multiple character references to create a full squad. The prompt is built to count every reference image and turn each one into a separate visible character, with no helmets covering their faces. Type your chosen scene into the SCENE SELECTOR at the top, then attach your character reference image or images. Try scenes like: a brutal battlefield charge a gothic starship boarding action a candlelit shrine world cathedral an industri",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7286,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-f16e17f2ce7efe",
      "slug": "template-638ff158",
      "title": "韩式舞蹈动作分解表 [提示词:]",
      "prompt": "[STYLE] black and white grayscale illustration, 3D rendered character, clean instructional reference sheet, white background, comic panel grid layout, technical diagram aesthetic [LAYOUT] 4x4 grid, 16 panels total, each panel divided by thin black borders, cells numbered 1 through 16, uniform panel dimensions [CHARACTER] young female dancer, athletic build, ponytail hairstyle, crop top and baggy pants, sneakers — same character across all panels [PANEL STRUCTURE - per cell] top-left: bold number badge + Korean title text center: full-body character pose illustration bottom-left: Korean description text (3-4 lines) overlay: motion arrows showing movement direction [ARROWS / MOTION INDICATORS]",
      "category": "角色设计与动漫",
      "categorySlug": "character-anime-design",
      "rawCategory": "🧍 Character Design Cases",
      "sourceLine": 7595,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-42b6c639d16b17",
      "slug": "woman-posing-with-red-lip-gloss-beauty-product-shoot",
      "title": "Woman Posing with Red Lip Gloss | Beauty Product Shoot",
      "prompt": "Woman Posing with Red Lip Gloss | Beauty Product Shoot。mix of tight close-ups and medium close-ups; product always readable when present；chrome lip product packaging with identical tube/cap design across panels；Ultra-photoreal beauty campaign contact sheet on a pure white seamless background. A 3x3 grid collage of nine panels featuring ONE model with hair worn down: voluminous, glossy, long dark waves with soft movement and lift at the roots. The model has a lean, fit, runway-like physique and an attractive high-fashion look. Skin is luminous with realistic texture and refined editorial retouch (no plastic smoothing). Makeup: defined brows, clean eyeliner, soft bronzy blush, and bold red lipstick. Product must stay consistent: a sleek chrome lip product tube and doe-foot applicator with the brand name 'BAGEL' printed clearly on the tube in a bold modern sans-serif. The tube shape, cap, c",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 920,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2a56733a0ba2458ebb504b8e4394c1b3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-42b6c639d16b17-daf1ee6475-320.webp",
          "640": "/prompt-template-images/tpl-42b6c639d16b17-daf1ee6475-640.webp",
          "960": "/prompt-template-images/tpl-42b6c639d16b17-daf1ee6475-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:20:06.640Z"
    },
    {
      "id": "tpl-44949d213ebb6c",
      "slug": "volt-goal-celebration-ad-by-ruzainameer",
      "title": "VOLT Goal Celebration Ad (by @RuzainaMeer)",
      "prompt": "Prompt 1: A high-energy commercial product advertisement for VOLT Energy Drink. A beautiful young woman in her mid-20s, wearing a green and white football jersey, is caught in a euphoric goal celebration — arms wide open, head thrown back, screaming with pure joy. She is holding a sleek VOLT Energy Drink can in one raised hand, electric blue liquid splashing dramatically around it. Stadium packed with roaring fans, golden confetti raining down, floodlights blazing. Bold text \"FEEL THE VOLT\" in electric yellow. Cinematic lighting, photorealistic commercial quality, 9:16 vertical format. Prompt 2: A beautiful young woman in a green and white football jersey is sitting in a packed stadium, casu",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 296,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/89478c4020b3434c966c94fb681afd35.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-44949d213ebb6c-8bb215452e-320.webp",
          "640": "/prompt-template-images/tpl-44949d213ebb6c-8bb215452e-640.webp",
          "960": "/prompt-template-images/tpl-44949d213ebb6c-8bb215452e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:24:38.257Z"
    },
    {
      "id": "tpl-b65cce8a76e863",
      "slug": "romantic-smartphone-couple-scene-product-shot-by-hmontilla",
      "title": "Romantic Smartphone Couple Scene Product Shot (by @hmontilla_)",
      "prompt": "Create a cozy cinematic romantic scene featuring two black smartphones standing vertically on a rustic wooden table, positioned side by side and slightly angled inward. Each phone displays a video call. On the left phone screen, show a smiling young woman with long brown hair, light skin, wearing a cream knitted sweater and a beige winter beanie with a pom-pom. She is looking warmly toward the other phone while raising her hand to form one half of a heart shape. On the right phone screen, show a smiling young man with light skin, subtle facial hair, wearing a gray winter beanie and a denim jacket with a soft shearling collar. He is looking toward the woman while raising his hand to form the",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 372,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e4e9e1659d1f47b78e997c641b785cd3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b65cce8a76e863-7378d8dea9-320.webp",
          "640": "/prompt-template-images/tpl-b65cce8a76e863-7378d8dea9-640.webp",
          "960": "/prompt-template-images/tpl-b65cce8a76e863-7378d8dea9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:25:22.080Z"
    },
    {
      "id": "tpl-b9e2183132cc77",
      "slug": "berry-splash-cafe-campaign-by-iamaiistudio",
      "title": "Berry Splash Cafe Campaign (by @iamaiistudio)",
      "prompt": "Prompt 1: Create a vibrant lifestyle food ad set inside a colorful, trendy cafe. Show a smiling woman in a bright hot pink blazer seated at a wooden table, lifting a spoon as she eats an acai berry bowl topped with strawberries, blueberries, banana slices, and granola. Keep a clearly branded \"Berry Loud\" jar on the table. Add playful retro cream bubble-letter typography that reads \"BERRY LOUD\". Use a tropical cafe interior with hanging plants, warm natural sunlight, a cheerful mood, a bold pink-and-teal palette, shallow depth of field, cinematic food-photography realism, high detail, and a polished commercial campaign finish. Format: vertical 9:16. Quality: ultra realistic, 4k. Prompt 2: Cre",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 489,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0e84ef3a60364b4894a7cb1c97b199af.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b9e2183132cc77-efb4ee9a1b-320.webp",
          "640": "/prompt-template-images/tpl-b9e2183132cc77-efb4ee9a1b-640.webp",
          "960": "/prompt-template-images/tpl-b9e2183132cc77-efb4ee9a1b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:26:13.537Z"
    },
    {
      "id": "tpl-1b474f0f9673d2",
      "slug": "foam-clogs-ad-poster-by-shinning1010",
      "title": "Foam Clogs Ad Poster (by @Shinning1010)",
      "prompt": "Create a premium vertical 4:5 commercial advertising poster for perforated foam clogs, making the shoes visually central, clean, and instantly legible. Use the uploaded portrait photo only for the woman’s appearance and hairstyle so the final result keeps a similar identity. Preserve face shape, facial features, hairstyle, skin tone, body proportion, and overall temperament only; do not copy the original expression, clothing, background, lighting, or pose. Style her in refined modern summer campaign wardrobe with effortless premium casual energy. Composition: a confident lifestyle fashion portrait with the woman seated or stepping forward in an airy sunlit architectural setting, the clogs cl",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 565,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f620a51eb6c542aa990dfc57b816dde4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1b474f0f9673d2-dda2b215ed-320.webp",
          "640": "/prompt-template-images/tpl-1b474f0f9673d2-dda2b215ed-640.webp",
          "960": "/prompt-template-images/tpl-1b474f0f9673d2-dda2b215ed-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:26:57.683Z"
    },
    {
      "id": "tpl-5ba9f88556dffb",
      "slug": "by-iamaiistudio-45ee58",
      "title": "无线耳机生活方式广告 (by @iamaiistudio)",
      "prompt": "Design a 9:16 vertical product infographic for Bolt True Wireless Earbuds with a high-end lifestyle ad feel. Composition & Framing Full-body shot of a young woman whose face, skin tone, and hairstyle match the reference photo exactly Slightly low camera angle close to the subject, fashion campaign style, for depth and visual presence She's seated casually on the floor, one knee up, one leg stretched toward the camera Foreground (Product) She holds an open Bolt earbud charging case out toward the viewer One earbud is visible inside the case, the other is in her ear The case is glossy white with \"BOLT\" branding Slight macro bokeh blur on the hand and case for cinematic depth Outfit & Style Mod",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 783,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/af20858f96134bcfa5d548163bf17af8.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5ba9f88556dffb-f63d2f9bc2-320.webp",
          "640": "/prompt-template-images/tpl-5ba9f88556dffb-f63d2f9bc2-640.webp",
          "960": "/prompt-template-images/tpl-5ba9f88556dffb-f63d2f9bc2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:28:12.939Z"
    },
    {
      "id": "tpl-1dbb836803d0a8",
      "slug": "thor-s-hand-grips-electrified-sprite-bottle-in-storm",
      "title": "Thor's Hand Grips Electrified Sprite Bottle in Storm",
      "prompt": "Thor's Hand Grips Electrified Sprite Bottle in Storm。Thor's glowing hand holding a floating Sprite bottle amidst crackling lightning and rain, Mjolnir in background, epic poster style. --ar 7:9；Hulk's giant hand hovering over a crushed Pepsi can embedded in pavement, smoky ruins, explosive action movie style. --ar 7:9；Doctor Strange's Hand。",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 666,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f185587d3b0b4c9395e8e452233fe642.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1dbb836803d0a8-4f471b4ca3-320.webp",
          "640": "/prompt-template-images/tpl-1dbb836803d0a8-4f471b4ca3-640.webp",
          "960": "/prompt-template-images/tpl-1dbb836803d0a8-4f471b4ca3-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:19:11.213Z"
    },
    {
      "id": "tpl-6f8bebdba710a5",
      "slug": "the-science-of-comfort-conceptual-furniture-ad-2024",
      "title": "The Science of Comfort | Conceptual Furniture Ad 2024",
      "prompt": "The Science of Comfort | Conceptual Furniture Ad 2024。comfort_vs_clinical；soft directional studio light, strong material definition。",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 747,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e2c355a5798643839abe336a451851d9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6f8bebdba710a5-855f13271c-320.webp",
          "640": "/prompt-template-images/tpl-6f8bebdba710a5-855f13271c-640.webp",
          "960": "/prompt-template-images/tpl-6f8bebdba710a5-855f13271c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:19:32.482Z"
    },
    {
      "id": "tpl-7ba804578cd726",
      "slug": "vibrant-orange-nail-polish-by-bagel-labs-beauty-product",
      "title": "Vibrant Orange Nail Polish by Bagel Labs - Beauty Product",
      "prompt": "Vibrant Orange Nail Polish by Bagel Labs - Beauty Product。product label must be readable and correct: Bagel symbol + 'Bagel Labs'；product label and bottle edges tack sharp; face slightly soft bokeh；clean high-key studio lighting, soft shadows, crisp specular highlights on glass and nails。",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 787,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/950ee9bfee114fc793edc5506431b928.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7ba804578cd726-4f040bc05d-320.webp",
          "640": "/prompt-template-images/tpl-7ba804578cd726-4f040bc05d-640.webp",
          "960": "/prompt-template-images/tpl-7ba804578cd726-4f040bc05d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:19:43.337Z"
    },
    {
      "id": "tpl-81163def04a4aa",
      "slug": "chanel-chance-perfume-luxury-product-photography-collection",
      "title": "Chanel Chance Perfume: Luxury Product Photography Collection",
      "prompt": "Chanel Chance Perfume: Luxury Product Photography Collection。The product (Pink Nike sneaker) must remain identical in shape, proportions, materials, colors, and branding across all frames.；Hyperreal, cinematic, polished, high-end editorial advertising look.",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1098,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4ec6e426193741818e1b96de0ca85e93.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-81163def04a4aa-4663fddc2f-320.webp",
          "640": "/prompt-template-images/tpl-81163def04a4aa-4663fddc2f-640.webp",
          "960": "/prompt-template-images/tpl-81163def04a4aa-4663fddc2f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:20:17.133Z"
    },
    {
      "id": "tpl-be4f685f08536c",
      "slug": "vintage-nomads-com-internet-software-box-and-cd-rom",
      "title": "Vintage Nomads.com Internet Software Box & CD-ROM",
      "prompt": "{your website} into a product box with a CD-Rom as if it was from 1995\" ---",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1183,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e728975d97ab48349e6cfd8442c2d33f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-be4f685f08536c-f1c3b0364b-320.webp",
          "640": "/prompt-template-images/tpl-be4f685f08536c-f1c3b0364b-640.webp",
          "960": "/prompt-template-images/tpl-be4f685f08536c-f1c3b0364b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:20:28.660Z"
    },
    {
      "id": "tpl-ac57689f0eb673",
      "slug": "amoxicillin-infographic-dosage-uses-side-effects",
      "title": "Amoxicillin Infographic: Dosage, Uses, Side Effects",
      "prompt": "Amoxicillin Infographic: Dosage, Uses, Side Effects。第5部分：带有简单警示图标（[药物相互作用]、[禁忌]、[副作用]）的注意事项网格，药物相互作用，禁忌，副作用你需要联网搜索；一张关于 [药物名称] 的高质量科普信息海报。；明亮的实验室无影灯光，干净透彻，强调无菌感与清晰度",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1230,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c7491aa826b9486c8253568884c52d75.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ac57689f0eb673-7c05705cbe-320.webp",
          "640": "/prompt-template-images/tpl-ac57689f0eb673-7c05705cbe-640.webp",
          "960": "/prompt-template-images/tpl-ac57689f0eb673-7c05705cbe-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:20:50.976Z"
    },
    {
      "id": "tpl-ef76d3ef0ab8c6",
      "slug": "futuristic-nike-air-force-1-sneaker-with-cosmic-glow",
      "title": "Futuristic Nike Air Force 1 Sneaker with Cosmic Glow",
      "prompt": "Futuristic Nike Air Force 1 Sneaker with Cosmic Glow。Nike Air Force sneaker；Bright starlight flares in the distance adding a cosmic aura；Glowing through cracks in surface, sole, and upper veins。",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1397,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d31034464e2a47ed96f8b056985e1fa3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ef76d3ef0ab8c6-4e18cd65a2-320.webp",
          "640": "/prompt-template-images/tpl-ef76d3ef0ab8c6-4e18cd65a2-640.webp",
          "960": "/prompt-template-images/tpl-ef76d3ef0ab8c6-4e18cd65a2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:21:01.711Z"
    },
    {
      "id": "tpl-305f2c8603a27c",
      "slug": "glowing-transparent-3d-render-gaming-and-lifestyle-products",
      "title": "Glowing Transparent 3D Render Gaming & Lifestyle Products",
      "prompt": "Glowing Transparent 3D Render Gaming & Lifestyle Products。sharp specular highlights and reflections across transparent surfaces；transparent black glass or polymer；ultra-modern transparent black hyperrealism。",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1511,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/06738e14659647b2a63a5d5a030fb2a4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-305f2c8603a27c-f37f39a518-320.webp",
          "640": "/prompt-template-images/tpl-305f2c8603a27c-f37f39a518-640.webp",
          "960": "/prompt-template-images/tpl-305f2c8603a27c-f37f39a518-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:21:32.322Z"
    },
    {
      "id": "tpl-a3d7c00c112cd5",
      "slug": "coca-cola-bottle-product-photography-with-ice-splash",
      "title": "Coca-Cola Bottle Product Photography with Ice Splash",
      "prompt": "Coca-Cola Bottle Product Photography with Ice Splash。A dynamic, sculptural arch of liquid and ice cubes erupting *around* and *behind* the bottle, framing it rather than obscuring it. The splash is elegant, not chaotic.；The irresistible coldness and explosive taste of the product.；Dramatic, high-contrast cinematic lighting (Rembrandt lighting on bottle).",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1566,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0bf370092f6d4756a9aa3938cdf24116.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a3d7c00c112cd5-ed38e91816-320.webp",
          "640": "/prompt-template-images/tpl-a3d7c00c112cd5-ed38e91816-640.webp",
          "960": "/prompt-template-images/tpl-a3d7c00c112cd5-ed38e91816-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:21:59.649Z"
    },
    {
      "id": "tpl-c29ef1b33ced50",
      "slug": "innovative-smartphone-beverage-ad-decamin-product-photo",
      "title": "Innovative Smartphone Beverage Ad | Decamin Product Photo",
      "prompt": "Innovative Smartphone Beverage Ad | Decamin Product Photo。Decamin；Cinematic, warm, magical。",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1614,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/419513139bf54b55beaa1b186cd2ec6a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c29ef1b33ced50-a95597c2f6-320.webp",
          "640": "/prompt-template-images/tpl-c29ef1b33ced50-a95597c2f6-640.webp",
          "960": "/prompt-template-images/tpl-c29ef1b33ced50-a95597c2f6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:22:51.416Z"
    },
    {
      "id": "tpl-00df1c1b5595c3",
      "slug": "e-commerce-main-image-miniature-diorama-skincare-advertisement-by-strength04-x",
      "title": "E-commerce Main Image - Miniature Diorama Skincare Advertisement (by @Strength04_X)",
      "prompt": "A hyper-realistic miniature diorama product advertisement featuring an oversized luxury skincare pump bottle labeled \"LUXEVEIL Skin Science - Radiance Nourishing Body Lotion\" in cream/beige with a polished gold pump top, placed on a circular platform. Tiny figurine construction workers dressed in yellow coveralls and white hard hats swarm around the bottle climbing scaffolding, painting the bottle with rollers, operating a tower crane, working near industrial tanks and pipework, and unloading a miniature flatbed truck. The scene includes metal scaffolding structures, industrial silos, orange traffic cones, wooden barricades, and storage barrels. The overall color palette is warm beige, cream",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 170,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/dbfc51453b744d8f8edac3dfbe82e527.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-00df1c1b5595c3-5926731e53-320.webp",
          "640": "/prompt-template-images/tpl-00df1c1b5595c3-5926731e53-640.webp",
          "960": "/prompt-template-images/tpl-00df1c1b5595c3-5926731e53-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:23:23.290Z"
    },
    {
      "id": "tpl-e55c4e1aa5cf01",
      "slug": "e-commerce-main-image-9-panel-product-tvc-storyboard-by-magncsans",
      "title": "E-commerce Main Image - 9-Panel Product TVC Storyboard (by @Magncsans)",
      "prompt": "Using the provided reference image, transform the single casual product photo into a polished e-commerce TVC storyboard board for a {argument name=\"video duration\" default=\"15-second\"} ad in a {argument name=\"aspect ratio\" default=\"9:16\"} vertical format, presented as a 9-panel grid. Keep the same blue-and-white ceramic ashtray as the product base, but restage it across cinematic advertising shots with warm premium lighting, shallow depth of field, and a refined lifestyle desktop environment. Add a dark storyboard layout with Chinese titles and timing for each panel. Include exactly 9 scenes: 1) environment-establishing wide shot with desk, books, window, and the product placed in context; 2",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 183,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c7f4b518db0b4670ad0021796b0130b0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e55c4e1aa5cf01-155eb42efc-320.webp",
          "640": "/prompt-template-images/tpl-e55c4e1aa5cf01-155eb42efc-640.webp",
          "960": "/prompt-template-images/tpl-e55c4e1aa5cf01-155eb42efc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:23:53.798Z"
    },
    {
      "id": "tpl-90937c1736e1e4",
      "slug": "ancient-palace-perfume-ad-by-iamaiistudio",
      "title": "Ancient Palace Perfume Ad (by @iamaiistudio)",
      "prompt": "Full prompt: Ancient Chinese palace perfume advertisement inspired by the legendary dancer Zhao Feiyan. A bronze bottle with gold-inlaid twisting lotus vines. Mysterious, cold, and haunting imperial harem atmosphere. Vertical portrait format, 9:16 ratio.",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 258,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f07c53263799453da3504345f9f90c60.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-90937c1736e1e4-437c138bb4-320.webp",
          "640": "/prompt-template-images/tpl-90937c1736e1e4-437c138bb4-640.webp",
          "960": "/prompt-template-images/tpl-90937c1736e1e4-437c138bb4-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:24:15.991Z"
    },
    {
      "id": "tpl-0a53e3ac206660",
      "slug": "lightning-storm-supercar-ad-by-iamrealsnow",
      "title": "Lightning Storm Supercar Ad (by @iamrealsnow)",
      "prompt": "Sports Car Made of Lightning Prompt: Supercar emerging from a storm cloud, body formed entirely from blue lightning bolts, wet reflective road, thunder exploding in background, cinematic action advertising, high-speed energy trails, ultra-detailed automotive render, luxury commercial photography, 8K.",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 313,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/54eb157e9f3e45f8be01cb9ecf1c2265.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0a53e3ac206660-7dcc05c529-320.webp",
          "640": "/prompt-template-images/tpl-0a53e3ac206660-7dcc05c529-640.webp",
          "960": "/prompt-template-images/tpl-0a53e3ac206660-7dcc05c529-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:24:58.939Z"
    },
    {
      "id": "tpl-9058e393e151b9",
      "slug": "luxury-jewelry-contrast-campaign-by-aziz4ai",
      "title": "Luxury Jewelry Contrast Campaign (by @aziz4ai)",
      "prompt": "Use the uploaded image as the one and only product reference. Preserve the jewelry exactly as it is, with high fidelity to its original design, shape, proportions, gemstone arrangement, metal tone, craftsmanship, setting, texture, and identity. Do not redesign, simplify, or alter the jewelry itself in any way. Keep the product accurate, luxurious, and instantly recognizable. Create an extraordinary luxury jewelry campaign image where the product is the absolute visual hero. Build a bold, artistic, and premium scene around it that feels cinematic, elegant, and visually unforgettable. The result must never feel like a basic catalog shot or a repetitive product render. For every generation, cre",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 327,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/66f3b1c4e9034affbeb573751269269e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9058e393e151b9-cb655d295f-320.webp",
          "640": "/prompt-template-images/tpl-9058e393e151b9-cb655d295f-640.webp",
          "960": "/prompt-template-images/tpl-9058e393e151b9-cb655d295f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:25:10.637Z"
    },
    {
      "id": "tpl-6fbfca63f2b74c",
      "slug": "luxury-chronograph-watch-ad-by-alwavenazca",
      "title": "Luxury Chronograph Watch Ad (by @AlwaveNazca)",
      "prompt": "A dramatic luxury product advertising image for a motorsport-inspired chronograph wristwatch in a dark studio. Center-left foreground, show a single stainless steel chronograph watch standing upright at a slight three-quarter angle, with a black dial, two red-accent subdials, slim silver hour markers, a tachymeter bezel, and visible crown and pushers on the right side. The watch has a black leather strap with bold red stitching along both edges and a sporty premium finish. To the right of the watch, place one black square presentation box slightly behind it, textured like leather, with red stitching around the lid and a silver embossed eye-shaped logo above the text \"NESS STUDIO\" and smaller",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 410,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/36eff422b99f4d9b96372eaf6e463b36.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6fbfca63f2b74c-4267cfa5c8-320.webp",
          "640": "/prompt-template-images/tpl-6fbfca63f2b74c-4267cfa5c8-640.webp",
          "960": "/prompt-template-images/tpl-6fbfca63f2b74c-4267cfa5c8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:25:42.744Z"
    },
    {
      "id": "tpl-c94bdd6e503265",
      "slug": "luxury-chocolate-campaign-system-by-speedai07",
      "title": "Luxury chocolate campaign system (by @SPEEDAI07)",
      "prompt": "Create a premium, square (1:1) product advertisement for a fictional luxury chocolate brand called Noirvelle Chocolat, inspired by high-end chocolate brands. The ad should feel like a high-end editorial campaign, combining luxury food photography, refined packaging design, and cinematic lighting. Use matte black wrapper, subtle gold foil, elegant serif typography, and realistic product rendering. Generate flavor variants such as Blood Orange Noir, Salted Pistachio Muse, and Raspberry Ember with distinct mood, color palette, ingredients, headline, and supporting copy. Keep the chocolate bar as hero centerpiece with subtle reflections, shallow depth of field, luxury minimalism, and a small CTA",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 423,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a509e77c26bc4d2399d0db7102a1ed96.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c94bdd6e503265-91a6b09827-320.webp",
          "640": "/prompt-template-images/tpl-c94bdd6e503265-91a6b09827-640.webp",
          "960": "/prompt-template-images/tpl-c94bdd6e503265-91a6b09827-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:25:52.682Z"
    },
    {
      "id": "tpl-0d1d0e2d47e23b",
      "slug": "luxury-fragrance-campaign-portrait-by-amynys",
      "title": "Luxury Fragrance Campaign Portrait (by @amynys)",
      "prompt": "Transform the uploaded portrait into a luxurious cinematic fragrance poster inspired by the dark seductive elegance of a high-fashion perfume campaign. Preserve her exact facial features, warm skin tone, confident expression, wavy brunette hair, and recognizable identity. Style her as a mysterious femme fatale with soft glossy lips, luminous skin, subtle smoky eyes, and an intense captivating gaze. Dress her in a black satin slip dress with delicate lace trim and a glamorous faux fur wrap slipping off her shoulders. Place her inside a moody Parisian-inspired luxury interior with black reflective walls, gold rim lighting, deep shadows, cinematic contrast, and sensual ambient lighting. Add ele",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 469,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1f0f1e649a0643b097fa1fb3e77f2521.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0d1d0e2d47e23b-428941eaa8-320.webp",
          "640": "/prompt-template-images/tpl-0d1d0e2d47e23b-428941eaa8-640.webp",
          "960": "/prompt-template-images/tpl-0d1d0e2d47e23b-428941eaa8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:26:03.070Z"
    },
    {
      "id": "tpl-c21f66da519534",
      "slug": "fast-food-hero-poster-by-shamsamin56",
      "title": "Fast Food Hero Poster (by @ShamsAmin56)",
      "prompt": "A cinematic 9:16 vertical composition featuring a gourmet \"Smokey Obsidian\" burger. WHAT: A towering burger with a charcoal brioche bun, thick Wagyu beef patty with visible sear marks, melting aged gruyère dripping like lava, and crispy maple-glazed bacon. FEEL: An atmosphere of \"Urban Indulgence.\" Dark, moody lighting with a single warm amber spotlight. Wisps of real hickory smoke curl around the bun. The texture is hyper-realistic you can see the salt crystals on the crust and the moisture on the heirloom tomato. SHOW: The burger is captured in a \"deconstructed gravity\" moment the top bun is slightly hovering, revealing the internal layers of house-made aioli and pickled red onions. TYPOGR",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 507,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e64777b7c26b475babb017b4a7b7ebfd.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c21f66da519534-bdc5600dae-320.webp",
          "640": "/prompt-template-images/tpl-c21f66da519534-bdc5600dae-640.webp",
          "960": "/prompt-template-images/tpl-c21f66da519534-bdc5600dae-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:26:24.195Z"
    },
    {
      "id": "tpl-4faf8450d4d731",
      "slug": "matcha-granola-ad-poster-by-sairah-0",
      "title": "Matcha Granola Ad Poster (by @Sairah_0)",
      "prompt": "(Matcha Granola Ad) Ultra-realistic premium food advertisement poster for a healthy breakfast granola brand, centered matte pouch packaging labeled “Matcha Oat Granola”, green monochrome aesthetic, flat lay composition, soft studio lighting, vibrant matcha green background, surrounded by kiwi slices, almonds, oats, chia seeds, matcha powder bowl, granola bowls, scattered ingredients, clean modern typography headline “SUPERFOOD MORNING BOWL”, handwritten annotation arrows with wellness benefits, luxury organic branding, natural shadows, high-end commercial food photography, minimal yet detailed layout, symmetrical composition, sharp focus, Instagram ad style, 8k detail, healthy lifestyle mark",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 526,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d650d30de5604ef29b0e95a5f6fbc869.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4faf8450d4d731-8f2aae1f06-320.webp",
          "640": "/prompt-template-images/tpl-4faf8450d4d731-8f2aae1f06-640.webp",
          "960": "/prompt-template-images/tpl-4faf8450d4d731-8f2aae1f06-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:26:34.760Z"
    },
    {
      "id": "tpl-7bde535954232e",
      "slug": "tropical-product-ad-poster-by-aiwithaliya",
      "title": "Tropical Product Ad Poster (by @AIwithAliya)",
      "prompt": "GPT Image 2 Prompt Create a creative commercial advertising poster for [PRODUCT NAME], a [PRODUCT TYPE], inspired by vibrant tropical product campaigns. Place the product as a large hero object on the center-right with realistic glossy reflections, sharp label details, and premium lighting. Add a stylish model sitting beside or slightly in front of the product, naturally interacting with it by [MODEL ACTION]. The model should look [MOOD], wearing [OUTFIT STYLE], and should not cover the product label. 👉 **浏览全部 22 个广告创意提示词案例 →**",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 550,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4fd7a033199a4bb8944d86ce39f8cef0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7bde535954232e-b6186810e5-320.webp",
          "640": "/prompt-template-images/tpl-7bde535954232e-b6186810e5-640.webp",
          "960": "/prompt-template-images/tpl-7bde535954232e-b6186810e5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:26:45.466Z"
    },
    {
      "id": "tpl-6608fed1b5d6d4",
      "slug": "energy-drink-stadium-ad-by-shorelyn",
      "title": "Energy Drink Stadium Ad (by @Shorelyn_)",
      "prompt": "Ultra realistic premium product advertising shot of a sleek aluminum energy drink can standing upright on a wet reflective surface inside a futuristic football stadium at night. The can design features vivid swirling rainbow brushstroke patterns in red, orange, yellow, green, and blue wrapping around the entire can, with a large glossy black and white soccer ball graphic in the center. Bold white distressed typography on the front reads “GOAL” with smaller clean modern text below saying “ENERGY DRINK”. Tiny premium icon details for energy, focus, and endurance near the bottom, along with “250 ml”. The can is covered in realistic cold water droplets and condensation, highly detailed metallic",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 581,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5c2da231521445b5a3b5af0751680823.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6608fed1b5d6d4-64d2e6afac-320.webp",
          "640": "/prompt-template-images/tpl-6608fed1b5d6d4-64d2e6afac-640.webp",
          "960": "/prompt-template-images/tpl-6608fed1b5d6d4-64d2e6afac-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:27:08.780Z"
    },
    {
      "id": "tpl-c4c658df26d999",
      "slug": "adidas-futuristic-drop-ad-poster-9-16-by-iamaiistudio",
      "title": "Adidas Futuristic Drop Ad Poster 9:16 (by @iamaiistudio)",
      "prompt": "Full prompt: Design a striking premium vertical advertising poster (9:16 format) for a fictional ultra-limited Adidas sneaker called \"ADIDAS AEROBLADE X - LIMITED DROP\". The creative direction should feel like a world-class agency campaign — original, futuristic, visually explosive. Main visual: A single hero sneaker floating center-frame, captured at a dramatic low angle as if levitating above a dark obsidian running track split by glowing energy cracks. The shoe combines knit mesh, sculpted foam, translucent panels, reflective stripes, and a carbon-fiber sole plate. Neon light trails swirl around it like captured speed. Particles and mist add motion and intensity. Background features faint",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 644,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/09a9dbc7b32e486f85e718aa9c7afc9f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c4c658df26d999-382545596c-320.webp",
          "640": "/prompt-template-images/tpl-c4c658df26d999-382545596c-640.webp",
          "960": "/prompt-template-images/tpl-c4c658df26d999-382545596c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:27:19.381Z"
    },
    {
      "id": "tpl-c402dac08037e3",
      "slug": "luxury-linen-texture-editorial-poster-by-zephyraleigh",
      "title": "Luxury Linen Texture Editorial Poster (by @ZephyraLeigh)",
      "prompt": "GPT Image 2 on ChatGPT 🪄 PROMPT ⬇ A photorealistic luxury editorial poster, 3:4 portrait ratio. Full frame covered in premium off-white Italian linen paper wall texture — warm ivory tone, subtle grain, ultra-tactile surface. Center of wall features a large precision-carved football-shaped archway with deep architectural relief — visible carved edges, realistic inner shadow depth, sculptural beveled detailing, premium craftsmanship aesthetic. Inside the carved football frame: cinematic stadium atmosphere — deep blue and white luxury smoke trails drifting elegantly, gold and silver championship confetti cascading, white orchid and rose floral arrangements with dark green foliage accents, premi",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 686,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/88c730cb25454e879be6c8cfcb3ba8e8.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c402dac08037e3-096fb2737d-320.webp",
          "640": "/prompt-template-images/tpl-c402dac08037e3-096fb2737d-640.webp",
          "960": "/prompt-template-images/tpl-c402dac08037e3-096fb2737d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:27:30.558Z"
    },
    {
      "id": "tpl-67a46da4aacb80",
      "slug": "luxury-watch-dramatic-beam-product-shot-by-meng-dagg695",
      "title": "Luxury Watch Dramatic Beam Product Shot (by @meng_dagg695)",
      "prompt": "A luxury watch emerges from darkness. Extreme macro shot of ticking gears and moving hands. Golden sparks and floating particles surround the watch. The camera circles the timepiece while dramatic light streaks reflect across the sapphire crystal. Slow-motion water splash freezes in midair around the watch. Mechanical components assemble themselves automatically. Cinematic black-and-gold environment, premium commercial lighting, ultra-realistic reflections, luxury lifestyle advertisement, powerful orchestral atmosphere, smooth camera motion, product hero shot, brand reveal, Hollywood-level commercial, 8K photorealism.",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 720,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/235e368106b84d43a8462ba59ca38035.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-67a46da4aacb80-455639b7fa-320.webp",
          "640": "/prompt-template-images/tpl-67a46da4aacb80-455639b7fa-640.webp",
          "960": "/prompt-template-images/tpl-67a46da4aacb80-455639b7fa-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:27:41.707Z"
    },
    {
      "id": "tpl-36b749087b3741",
      "slug": "by-iamaiistudio",
      "title": "奢华运动鞋编辑网格 (by @iamaiistudio)",
      "prompt": "Louis Vuitton luxury leather sneaker campaign. High-fashion editorial, avant-garde aesthetic. Aspect ratio 3:4. Materials: Full-grain calf leather, Monogram Embossed Canvas, Polished Gold Hardware. Color palette: Cognac Brown, Deep Obsidian, Champagne Gold. Lighting: High-contrast Chiaroscuro with soft-box key lighting. 9-cell editorial grid: Row 1, Heritage: - Hero side-profile: sneaker resting on a vintage LV trunk, side-lit to reveal the leather grain texture. - Extreme macro close-up: gold-tone \"LV\" lace aglets and precision stitching detail. - Dynamic shot: gold dust particles swirling around the sole as the shoe steps into frame. Row 2, Innovation: - Minimalist: sneaker balanced on top",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 748,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8c8001d7033e440c8d08f70403368fa0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-36b749087b3741-81378c4516-320.webp",
          "640": "/prompt-template-images/tpl-36b749087b3741-81378c4516-640.webp",
          "960": "/prompt-template-images/tpl-36b749087b3741-81378c4516-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:28:02.873Z"
    },
    {
      "id": "tpl-40d06e77630ca2",
      "slug": "9-frame-cinematic-storyboard-grid-by-guicastellanos1",
      "title": "9-Frame Cinematic Storyboard Grid (by @guicastellanos1)",
      "prompt": "for GPT-2: Create a single image storyboard with 9 cinematic frames arranged in a 3×3 grid. Each frame is a widescreen 16:9 panel with a film aspect ratio letterbox. Style: ultra-cinematic sci-fi blockbuster mixed with premium airline commercial. Think Blade Runner 2049 color grading meets a UEFA Champions League broadcast opener meets a luxury brand TVC.",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3989,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/afd56b1919a94821a030c056e0371b05.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-40d06e77630ca2-7f16929d03-320.webp",
          "640": "/prompt-template-images/tpl-40d06e77630ca2-7f16929d03-640.webp",
          "960": "/prompt-template-images/tpl-40d06e77630ca2-7f16929d03-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:28:54.718Z"
    },
    {
      "id": "tpl-a189583bfe8221",
      "slug": "vintage-1960s-beer-ad-poster-by-goodmanprotocol",
      "title": "Vintage 1960s Beer Ad Poster (by @Goodmanprotocol)",
      "prompt": "Authentic 1960s American advertising poster for [BREW], vintage mid-century commercial illustration, [PERSON DESCRIPTION] holding a frosty glass bottle of [BREW], bright optimistic lifestyle scene, nostalgic Americana atmosphere, bold [COLOR 1] and [COLOR 2] color palette, elegant retro typography, the text “[BREW]” prominently integrated into the poster design, authentic screen print texture, subtle paper grain, hand-painted illustration style, vintage Madison Avenue advertising aesthetic, clean composition, highly detailed, warm cinematic lighting, premium poster design, authentic 1960s print imperfections, painterly realism, soft brushwork, vertical composition 4:5",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4003,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b858996dfa884d359c52838cffd9e6f3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a189583bfe8221-e5548b337d-320.webp",
          "640": "/prompt-template-images/tpl-a189583bfe8221-e5548b337d-640.webp",
          "960": "/prompt-template-images/tpl-a189583bfe8221-e5548b337d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:29:14.134Z"
    },
    {
      "id": "tpl-2720f871b6502e",
      "slug": "furniture-product-sheet-layout-by-iamaiistudio",
      "title": "Furniture Product Sheet Layout (by @iamaiistudio)",
      "prompt": "://t.co/UuHTKEB9Ff Create a high-quality realistic 3D product showcase for a table, using a split-view layout (3:2 or 4:3 aspect ratio) on a neutral light gray or white background. Left side — Table Perspectives: - Top-down view: full tabletop shape, surface texture, and edge details - Side view: leg design, table height, and tabletop thickness - Front view: width, symmetry, and leg alignment Use consistent lighting with subtle shadows for realism. Right side — Material Breakdown: - Tabletop: solid or engineered wood, with a close-up wood texture swatch and clean sans-serif label - Legs: polished oak wood or metal, with a material texture swatch and consistent labeling - Frame: matte black s",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5841,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0165841e35b34b02996d6eb3bef0050e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2720f871b6502e-82c3ad4683-320.webp",
          "640": "/prompt-template-images/tpl-2720f871b6502e-82c3ad4683-640.webp",
          "960": "/prompt-template-images/tpl-2720f871b6502e-82c3ad4683-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:29:24.143Z"
    },
    {
      "id": "tpl-df21eaef3c42d9",
      "slug": "celestial-fantasy-oracle-storyboard-by-itspixieverse",
      "title": "Celestial Fantasy Oracle Storyboard (by @itsPixieVerse)",
      "prompt": "Create a premium cinematic 12-panel storyboard sheet for a celestial fantasy oracle reveal sequence featuring Astrielle, an ethereal cosmic sorceress who manipulates stars, destiny, and astral energy. The storyboard should feel like a high-budget fantasy anime film opening mixed with elegant cosmic magic cinematography. The sequence focuses on graceful character reveal, divine cosmic powers, elegant magical movements, reality-bending abilities, and a breathtaking final goddess-like ascension. Astrielle — celestial oracle with long flowing pastel pink hair, glowing amber eyes, elegant navy-and-gold cosmic dress decorated with star constellations, translucent layered fabrics, floating celestia",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6268,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7e710ba72aa9483ca09a776216d78ea4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-df21eaef3c42d9-90f310b14c-320.webp",
          "640": "/prompt-template-images/tpl-df21eaef3c42d9-90f310b14c-640.webp",
          "960": "/prompt-template-images/tpl-df21eaef3c42d9-90f310b14c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:29:35.349Z"
    },
    {
      "id": "tpl-933b1cc5dd00bb",
      "slug": "3d-product-mockup-smartphone-by-samann-ai",
      "title": "3D Product Mockup Smartphone (by @Samann_ai)",
      "prompt": "A highly realistic, premium 3D product mockup for a [INSERT BUSINESS TYPE HERE, e.g., modern clothing brand]. A sleek, modern smartphone is elegantly levitating at a dynamic angle in mid-air. Emerging seamlessly from the phone's screen is a continuous, wavy, physical ribbon of printed photos that elegantly flows and wraps around the device in a surreal, gravity-defying way. The photos on the flowing ribbon display stunning, high-quality images of [INSERT PRODUCT/SERVICE IMAGES HERE]. The background is a minimalist, warm beige and soft cream environment with a subtle, textured stone floor. The lighting consists of soft, diffused natural sunlight casting an elegant, diagonal window shadow on t",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6329,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/340a1637b25a47b79a14262bccc36db9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-933b1cc5dd00bb-fb5a43f77c-320.webp",
          "640": "/prompt-template-images/tpl-933b1cc5dd00bb-fb5a43f77c-640.webp",
          "960": "/prompt-template-images/tpl-933b1cc5dd00bb-fb5a43f77c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:29:46.620Z"
    },
    {
      "id": "tpl-8ccc5eb5c8ce6e",
      "slug": "pixar-3d-kebab-maker-storyboard-poster-by-techiebysa",
      "title": "Pixar 3D Kebab Maker Storyboard Poster (by @TechieBySA)",
      "prompt": "“Create a crisp, clean infographic storyboard poster for THE KEBAB MAKER. Wide 16:9 layout, white background, black borders, bold black typography, premium Pixar 3D stylized rendering, bright vivid colors — deep caramelized meat browns, vivid red tomatoes, fresh green lettuce, white garlic sauce, golden warm flatbread, warm Istanbul street light. Top header •THE KEBAB MAKER •TOTAL VIDEO TIME: 12 SECONDS •8 SHOTS · BOLD · SIZZLING · STRAIGHT FROM ISTANBUL •Legend icons: ACTION, HEAT, TIME HINT, INGREDIENT Same Pixar-style middle-aged Turkish male kebab maker throughout — thick dark mustache, white t-shirt, red and white striped apron, small outdoor Istanbul kebab street stand, vertical doner",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6895,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6835872ead99482ba92d92f4a90b1569.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8ccc5eb5c8ce6e-346061822b-320.webp",
          "640": "/prompt-template-images/tpl-8ccc5eb5c8ce6e-346061822b-640.webp",
          "960": "/prompt-template-images/tpl-8ccc5eb5c8ce6e-346061822b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:30:06.717Z"
    },
    {
      "id": "tpl-d6755a1f900776",
      "slug": "photorealistic-coca-cola-can-in-surreal-organic-landscape",
      "title": "Photorealistic Coca-Cola Can in Surreal Organic Landscape",
      "prompt": "Photorealistic Coca-Cola Can in Surreal Organic Landscape。Dense coverage of ultra-fine droplets, organic streaks, and crystal-clear refractions.；Vines glow subtly like lava-veined roots due to rim lighting.",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1005,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-80267ae0daa1cb",
      "slug": "showroom-still-life-merch-drop-by-iamaiistudio",
      "title": "Showroom Still Life Merch Drop (by @iamaiistudio)",
      "prompt": "Showroom Still Life Merch Drop。Showroom Still Life。",
      "category": "产品与电商广告",
      "categorySlug": "product-ecommerce-ads",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 600,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-a99668edf4744f",
      "slug": "chaotic-kitchen-freeze-frame-by-iamaiistudio",
      "title": "Chaotic Kitchen Freeze-Frame (by @iamaiistudio)",
      "prompt": "Surreal comedic freeze-frame inside a modern kitchen: a young man arches backward in an extreme acrobatic dodge, body exaggerated, while a kettle hangs suspended mid-air above him, hot tea exploding outward in a dramatic splash. In the background a woman stands with one arm extended, looking completely shocked as if she just accidentally launched the kettle. Wide-angle lens distortion, crisp liquid physics, dynamic action freeze, sharp details, realistic lighting, cinematic color grading, humorous storytelling, high-resolution digital art.",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9139,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a396da68f6b843c4b32de42ea04ee7f5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a99668edf4744f-46487df385-320.webp",
          "640": "/prompt-template-images/tpl-a99668edf4744f-46487df385-640.webp",
          "960": "/prompt-template-images/tpl-a99668edf4744f-46487df385-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:48:35.871Z"
    },
    {
      "id": "tpl-d5d89ada74d258",
      "slug": "famous-faces-minimalist-vector-art-and-flat-design-portraits",
      "title": "Famous Faces: Minimalist Vector Art & Flat Design Portraits",
      "prompt": "A single, isolated, strict duotone flat vector icon representing the face of [CHARACTER NAME]. **CONTENT SCOPE (FACE ONLY):** The design must represent ONLY the head, face, or helmet of [CHARACTER NAME]. Absolutely NO shoulders, torso, weapons, or accessories. **DYNAMIC DUOTONE COLOR PALETTE (MATERIAL DESIGN):** The entire image must use strictly ONLY TWO solid, flat colors chosen by the AI based on the character's lore, allegiance, or iconic appearance. 1. **Background Theme Color:** A moderate, pleasing solid flat color covering the entire canvas. 2. **Foreground Theme Color:** A second solid flat color used for the icon shape and the text, chosen to contrast well with the background. * **",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "⚡ Minimalist Icons",
      "sourceLine": 6861,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0b01602725704754abc073972b30f1f2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d5d89ada74d258-7e503f6d9f-320.webp",
          "640": "/prompt-template-images/tpl-d5d89ada74d258-7e503f6d9f-640.webp",
          "960": "/prompt-template-images/tpl-d5d89ada74d258-7e503f6d9f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:43:06.257Z"
    },
    {
      "id": "tpl-5f52d3ae28447b",
      "slug": "ai-rag-evolution-memory-systems-and-knowledge-graphs-infographic",
      "title": "AI RAG Evolution: Memory Systems & Knowledge Graphs Infographic",
      "prompt": "</text> ---",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "⚡ Minimalist Icons",
      "sourceLine": 6899,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/16093cf3992e4143a2afef193df80a15.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5f52d3ae28447b-46ffecd036-320.webp",
          "640": "/prompt-template-images/tpl-5f52d3ae28447b-46ffecd036-640.webp",
          "960": "/prompt-template-images/tpl-5f52d3ae28447b-46ffecd036-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:43:38.087Z"
    },
    {
      "id": "tpl-ec7f9e23ae2e98",
      "slug": "extreme-close-up-broken-pencil-graphite-and-wood-texture",
      "title": "Extreme Close-up: Broken Pencil, Graphite & Wood Texture",
      "prompt": "Prompt : Imagine a pencil tip seen through a microscope. Imagine how the pencil tip would look and create an image. ---",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "⚡ Minimalist Icons",
      "sourceLine": 6915,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/84b2e088a7bf4b73a666feec26dcc641.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ec7f9e23ae2e98-60bfe84582-320.webp",
          "640": "/prompt-template-images/tpl-ec7f9e23ae2e98-60bfe84582-640.webp",
          "960": "/prompt-template-images/tpl-ec7f9e23ae2e98-60bfe84582-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:43:47.835Z"
    },
    {
      "id": "tpl-deb00cc94c3241",
      "slug": "hand-holding-glowing-digital-icons-wifi-and-sound-waves",
      "title": "Hand Holding Glowing Digital Icons - WiFi & Sound Waves",
      "prompt": "Step 3: I didn't like the composition, so I used this prompt to adjust it: 'Change the angle. Adjust the hand so it grips the logo firmly and in a believable way.' Done. What a time to be a designer! ---",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "⚡ Minimalist Icons",
      "sourceLine": 6931,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5d4f988a88494e869921396675a67e75.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-deb00cc94c3241-fbad2ac2ac-320.webp",
          "640": "/prompt-template-images/tpl-deb00cc94c3241-fbad2ac2ac-640.webp",
          "960": "/prompt-template-images/tpl-deb00cc94c3241-fbad2ac2ac-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:44:08.797Z"
    },
    {
      "id": "tpl-5bb9847738f043",
      "slug": "gemini-3-prompting-best-practices-ai-prompt-engineering-guide",
      "title": "Gemini 3 Prompting Best Practices | AI Prompt Engineering Guide",
      "prompt": "Here are my Gemini 3 Prompting Best Practices for General Usage. https://philschmid.de/gemini-3-prompt-practices… - visualized by Google Nano Banana Pro ---",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "⚡ Minimalist Icons",
      "sourceLine": 6949,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cae52e1c67d04c29b64b4897633286e6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5bb9847738f043-99b19ee2ce-320.webp",
          "640": "/prompt-template-images/tpl-5bb9847738f043-99b19ee2ce-640.webp",
          "960": "/prompt-template-images/tpl-5bb9847738f043-99b19ee2ce-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:44:29.420Z"
    },
    {
      "id": "tpl-7a47aace1819b5",
      "slug": "fantasy-pixel-art-spell-and-ability-icons-game-ui-assets",
      "title": "Fantasy Pixel Art Spell & Ability Icons | Game UI Assets",
      "prompt": "on November 21st Higgsfield granted FREE access to Google's Google Nano Banana Pro Image model. #Higgsfield #HiggsfieldBanana #Nanobananapro #PR #インディーゲーム #Indiegame #kanaworksai ---",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "⚡ Minimalist Icons",
      "sourceLine": 6967,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e9c719e93ac54de08a45ab8538ae007d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7a47aace1819b5-29088e3d07-320.webp",
          "640": "/prompt-template-images/tpl-7a47aace1819b5-29088e3d07-640.webp",
          "960": "/prompt-template-images/tpl-7a47aace1819b5-29088e3d07-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:45:11.149Z"
    },
    {
      "id": "tpl-78e8e77f6f4e41",
      "slug": "interleukin-il-2-il-4-il-6-il-12-signaling-pathways",
      "title": "Interleukin (IL-2, IL-4, IL-6, IL-12) Signaling Pathways",
      "prompt": "I can’t get enough of Google Nano Banana Pro! The way it generates scientifically precise illustrations from simple prompts is nothing short of mind blowing! One of those true inflection points in the age of AI! Prompt: In multi panels create İL-2, IL-4, IL-12, IL-6 signaling pathways ---",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "⚡ Minimalist Icons",
      "sourceLine": 6985,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/312f7849c07e4d4f930e4f08c4f96406.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-78e8e77f6f4e41-becabfbc48-320.webp",
          "640": "/prompt-template-images/tpl-78e8e77f6f4e41-becabfbc48-640.webp",
          "960": "/prompt-template-images/tpl-78e8e77f6f4e41-becabfbc48-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:45:23.220Z"
    },
    {
      "id": "tpl-0dfc032a84121f",
      "slug": "sam-altman-bear-selfie-by-justingorya",
      "title": "Sam Altman Bear Selfie (by @JustinGorya)",
      "prompt": "generate image: Selfie of Sam Altman riding a bear Edit prompt: Remove the background make it transparent",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 8893,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/60b279b38bea4cfabdf5c49b293180e2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0dfc032a84121f-8c2adca705-320.webp",
          "640": "/prompt-template-images/tpl-0dfc032a84121f-8c2adca705-640.webp",
          "960": "/prompt-template-images/tpl-0dfc032a84121f-8c2adca705-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:45:35.831Z"
    },
    {
      "id": "tpl-a3fee508aebc20",
      "slug": "naturalist-style-food-specimen-cross-section-by-geekcatx",
      "title": "Naturalist-Style Food Specimen Cross-Section (by @GeekCatX)",
      "prompt": "一颗/一块/一枚【食物名称】,以博物学大师发现野外标本的方式解剖。 剖开、展开、固定--如同博物馆的珍贵藏品, 却以卡拉瓦乔为《国家地理》掌镜时的光线照亮。 每一个内部结构都以自身的材质真相发光。 截面锋利得近乎暴力。内部美丽得近乎神圣。 画面中呈现完整标本: 一半保持原状,展示【外表面描述:质感/颜色/纹理】; 另一半剖开至核心,【内部核心结构描述:最重要的1-2个内部视觉特征】清晰可见。 【补充1-2句该食物最具视觉张力的横截面细节描述】 背景:纯粹的黑丝绒。 【食物名称】悬浮其中,如同某件珍贵而危险的事物。 标注文字紧贴结构边缘,手写感衬线字体,绝不悬空飘浮。 画面包含以下标注,每处标注三行:第一行结构名称,第二行成分数据,第三行一句人话: 【结构01名称】 【成分/数据说明】 【这个结构在做什么,为什么重要】 【结构02名称】 【成分/数据说明】 【这个结构在做什么,为什么重要】 【结构03名称】 【成分/数据说明】 【这个结构在做什么,为什么重要】 【结构04名称】 【成分/数据说明】 【这个结构在做什么,为什么重要】 【结构05名称】 【成分/数据说明】 【这个结构在做什么,为什么重要】 【结构06名称】 【成分/数据说明】 【这个结构在做什么,为什么重要】 省略其他如果有继续保持这个格式 主标题,左上角,暖象牙白大写字体: 【食物名称】·解剖 斜体副标题紧随其下: 【一句揭示这种食物本质的话,不超过15字】 整体气质:奥杜邦博物插画×卡拉瓦乔光影×有史以来最美的科学摄影。 4K精度,标本照明,极致内部细节。 没有任何临床感,一切都鲜活。 写实风格,非示意图,非卡通",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 8908,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/dd1d3555197d4745a3a6abbd01bf4a09.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a3fee508aebc20-ee7eb1e909-320.webp",
          "640": "/prompt-template-images/tpl-a3fee508aebc20-ee7eb1e909-640.webp",
          "960": "/prompt-template-images/tpl-a3fee508aebc20-ee7eb1e909-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:46:07.452Z"
    },
    {
      "id": "tpl-b8eab119b6df67",
      "slug": "printable-paint-by-numbers-by-theroaringtoady",
      "title": "Printable Paint by Numbers (by @TheRoaringToady)",
      "prompt": "🎨 This GPT Image 2 prompt turns any image into a printable paint-by-numbers page. For best results, use ChatGPT in Thinking mode. I think we should call it numberfying. The intellectuals can call it Colorbookification. 😂 I tried it with a few TurboToadToken images and the results are wild. 🐸💛 Create it. Print it. Paint it. For kids, adults, and anyone who wants an easy creative activity. Try it and post your results in the comments. Prompt below 👇 Create a professional high-resolution paint-by-numbers template from the provided image as a single PNG only. Use an A4 portrait ratio canvas at 300 DPI with a pure white background. The main artwork must be a clean black-and-white line drawing con",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 8966,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ed0220b60475478082274f281c379d55.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b8eab119b6df67-192d2b37d6-320.webp",
          "640": "/prompt-template-images/tpl-b8eab119b6df67-192d2b37d6-640.webp",
          "960": "/prompt-template-images/tpl-b8eab119b6df67-192d2b37d6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:46:39.376Z"
    },
    {
      "id": "tpl-b676672466e225",
      "slug": "donut-heist-storyboard-sheet-by-mayorkingai",
      "title": "Donut Heist Storyboard Sheet (by @MayorKingAI)",
      "prompt": "Title: “THE DONUT HEIST” Subtitle: “15s Comedic Storyboard – 9 Shots” Style: full-color 3D animated storyboard sheet, cinematic cartoon characters, polished lighting, expressive faces, vibrant colors, red panel borders, blue camera/action arrows. Characters: chubby food-obsessed raccoon with striped tail. Small hyperactive squirrel with fluffy tail. Important: keep left-right continuity. Squirrel always rushes from screen left to right, looking toward the bench/raccoon, never away. Raccoon stays near the donut box. In panel 03, the raccoon hears rustling from screen left and looks that way. Each panel: timecode, shot type, camera move, short action note. 01 0–1.5s Wide/static: raccoon finds",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 8980,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/41eeebdb20de461fb6573f4ccfde8efd.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b676672466e225-4224ce794e-320.webp",
          "640": "/prompt-template-images/tpl-b676672466e225-4224ce794e-640.webp",
          "960": "/prompt-template-images/tpl-b676672466e225-4224ce794e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:46:51.523Z"
    },
    {
      "id": "tpl-dd00ce4bcd1513",
      "slug": "sourdough-baker-storyboard-by-techiebysa",
      "title": "Sourdough Baker Storyboard (by @TechieBySA)",
      "prompt": "“Create a crisp, clean infographic storyboard poster for THE SOURDOUGH BAKER. Wide 16:9 layout, white background, black borders, bold black typography, premium Pixar 3D stylized rendering, bright warm colors — creamy dough whites, golden crust browns, warm flour dust, rich amber kitchen light, pops of green from herbs on the windowsill. Top header: THE SOURDOUGH BAKER TOTAL VIDEO TIME: 12 SECONDS 8 SHOTS · WARM · SLOW · BAKED WITH LOVE Legend icons: ACTION, HEAT, TIME HINT, INGREDIENT Same Pixar-style young male baker throughout — flour-dusted white apron, warm rustic kitchen, wooden counter, morning light streaming through the window. And one recurring character — a fluffy orange cat who ta",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9015,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f5b10e0b712a455bab8d316985181086.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-dd00ce4bcd1513-04abfff28e-320.webp",
          "640": "/prompt-template-images/tpl-dd00ce4bcd1513-04abfff28e-640.webp",
          "960": "/prompt-template-images/tpl-dd00ce4bcd1513-04abfff28e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:47:11.799Z"
    },
    {
      "id": "tpl-50161f529ba5a3",
      "slug": "storyboard-grid-template-by-ericoolwong",
      "title": "Storyboard Grid Template (by @EricoolWong)",
      "prompt": "Based on the content【 *****】, create a storyboard image in 16:9 ratio, 4K resolution. 1️⃣ Basic Setup Main Title + Subtitle Aspect Ratio Layout Design (3-column × 9-scene storyboard grid) 2️⃣ Style Direction Director-inspired visual style Visual keywords (for example: Ridley Scott / low-saturation atmospheric sci-fi) 3️⃣ Storyboard Details For each scene, clearly describe: Camera shot Character action Visual progression / scene transition Sound effects / audio cues 4️⃣ Visual Guidelines Color palette and tone Cinematic language and lighting style (example: desaturated earthy tones + strong rim lighting) 5️⃣ Bottom Information Section Character profiles Overall mood / tone Audio timeline / so",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9030,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b586f6ce260145b092c423e4bdaba88b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-50161f529ba5a3-8a0b396448-320.webp",
          "640": "/prompt-template-images/tpl-50161f529ba5a3-8a0b396448-640.webp",
          "960": "/prompt-template-images/tpl-50161f529ba5a3-8a0b396448-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:47:22.615Z"
    },
    {
      "id": "tpl-1891543ec60f1a",
      "slug": "pancake-dad-storyboard-by-techiebysa",
      "title": "Pancake Dad Storyboard (by @TechieBySA)",
      "prompt": "Create a crisp, clean infographic storyboard poster for THE PANCAKE DAD. Wide 16:9 layout, white background, black borders, bold black typography, premium Pixar 3D stylized rendering, bright warm colors — golden pancake yellows, rich amber maple syrup, fresh blueberry blues and purples, creamy whites, warm morning kitchen light. Top header: •THE PANCAKE DAD •TOTAL VIDEO TIME: 12 SECONDS •8 SHOTS · GOLDEN · FLUFFY · SATURDAY MORNING •Legend icons: ACTION, HEAT, TIME HINT, INGREDIENT Same Pixar-style dad throughout — warm smile, casual home clothes, no apron or chef uniform, messy morning hair, cozy bright home kitchen, morning sunlight streaming through the window. A child’s drawing on the fr",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9066,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1804429c82ab45acad2300feb5f983fa.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1891543ec60f1a-00c51a2461-320.webp",
          "640": "/prompt-template-images/tpl-1891543ec60f1a-00c51a2461-640.webp",
          "960": "/prompt-template-images/tpl-1891543ec60f1a-00c51a2461-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:47:32.704Z"
    },
    {
      "id": "tpl-3643080a807407",
      "slug": "solar-desert-worldbuilding-kit-by-iamaiistudio",
      "title": "Solar Desert Worldbuilding Kit (by @iamaiistudio)",
      "prompt": "Build a full visual worldbuilding kit for a futuristic solar-powered desert civilization. Include multiple images covering architecture, characters, clothing, vehicles, and maps, all sharing one cohesive design language, with cinematic realism and ultra detailed finish.",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9098,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/18e1e74543f4497cb017d849c91677f4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3643080a807407-f08baa3954-320.webp",
          "640": "/prompt-template-images/tpl-3643080a807407-f08baa3954-640.webp",
          "960": "/prompt-template-images/tpl-3643080a807407-f08baa3954-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:47:44.171Z"
    },
    {
      "id": "tpl-fcdb399eac2785",
      "slug": "racer-character-model-sheet-by-itspixieverse",
      "title": "Racer Character Model Sheet (by @itsPixieVerse)",
      "prompt": "[layout_setup]: A comprehensive, full-page character model design sheet layout strictly on a pristine solid white background with no gradients, no environmental art, and no photorealistic elements whatsoever. [identity_module]: On the left side, large ultra-bold minimalist design typography spelling 'REINA VOSS' next to clean monospace text columns detailing character age 24, classification traits as underground circuit legend and drift specialist, tactical description blocks reading former getaway wheelman turned undefeated canyon queen with a photographic memory for road geometry and an obsessive ritual of wrapping her knuckles before every race. [turnaround_module]: Centered prominently o",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9111,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9950617815ec44f8939186634f7a5bc6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fcdb399eac2785-80a8db483d-320.webp",
          "640": "/prompt-template-images/tpl-fcdb399eac2785-80a8db483d-640.webp",
          "960": "/prompt-template-images/tpl-fcdb399eac2785-80a8db483d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:48:14.674Z"
    },
    {
      "id": "tpl-6cc03c1a0cecc6",
      "slug": "era-cube-visualizer-grid-by-gdgtify",
      "title": "Era Cube Visualizer Grid (by @Gdgtify)",
      "prompt": "I love these cube prompts for visualizing different eras. Pretty short but GPT Image 2 figures it out 2x2 grid, do this for different years of vastly different eras: ERA_TO_CUBE_SOLVER INPUT ::= [TOPIC], [ERA] STEP_1 :: infer era identity - time period or stage - dominant materials - key tools or artifacts - social/technical/cultural context - built environment or natural environment - representative agents or figures if relevant STEP_2 :: compress into cube - large objects define cuboid edges - medium objects build internal scenes - small objects fill gaps - top, side, and front faces remain visible - everything stays inside a strict rectangular volume STEP_3 :: create module text - large e",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9124,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/934205fbdb4a4e6ebec44ad43613f8c7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6cc03c1a0cecc6-030a53bb2d-320.webp",
          "640": "/prompt-template-images/tpl-6cc03c1a0cecc6-030a53bb2d-640.webp",
          "960": "/prompt-template-images/tpl-6cc03c1a0cecc6-030a53bb2d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:48:25.455Z"
    },
    {
      "id": "tpl-ba41335ba7d8fb",
      "slug": "innovation-reliquary-diagram-by-gdgtify",
      "title": "Innovation Reliquary Diagram (by @Gdgtify)",
      "prompt": "Have done so many of these prompts on inventions. Here is another way to visualize them with GPT Image 2 Function DrawInventionReliquary(input invention) Input Variable: [INSERT INVENTION] System Instruction: Generate a hyper-realistic \"Innovation Reliquary Exploded Diagram.\" 1. Semantic Extraction: AI infers: - Core problem solved - Mechanism - Historical era - Inventor culture - Materials - Failure points - Social impact 2. Container: Structure: floating exploded object inside a glass museum case. Every part is suspended on brass rods and fine tension wires. 3. Background: Patent-paper wall with faint diagrams, tolerances, labels, and archive stamps. 4. Integration: The invention’s key ins",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9152,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/219557b18f434e98b25ac6033cacfe57.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ba41335ba7d8fb-d5339e686e-320.webp",
          "640": "/prompt-template-images/tpl-ba41335ba7d8fb-d5339e686e-640.webp",
          "960": "/prompt-template-images/tpl-ba41335ba7d8fb-d5339e686e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:49:26.496Z"
    },
    {
      "id": "tpl-36396184027529",
      "slug": "90s-sitcom-fashion-character-lineup-by-taaruk",
      "title": "90s Sitcom Fashion Character Lineup (by @Taaruk_)",
      "prompt": "Full-body character lineup showcasing the same person transformed through six iconic 1990s fashion aesthetics, standing side-by-side in a clean studio composition. Each version features a unique outfit inspired by classic 90s sitcom culture: varsity college student, sophisticated business casual professional, colorful patterned sweater enthusiast, streetwear trendsetter, nerdy intellectual with suspenders and glasses, and vibrant hip-hop fashion icon. Consistent facial features across all versions, expressive poses, detailed clothing textures, oversized silhouettes, retro sneakers, loafers, accessories, layered outfits, bold color palettes, fashion illustration style, character design sheet,",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9201,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b7aae35e689f42119315c8ecd8185aa0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-36396184027529-08e016e349-320.webp",
          "640": "/prompt-template-images/tpl-36396184027529-08e016e349-640.webp",
          "960": "/prompt-template-images/tpl-36396184027529-08e016e349-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:49:37.531Z"
    },
    {
      "id": "tpl-7cdb700668d66e",
      "slug": "sql-collectible-toy-packaging-grid-by-gdgtify",
      "title": "SQL Collectible Toy Packaging Grid (by @Gdgtify)",
      "prompt": "SELECT * FROM Collectible_Toy_Packaging WHERE layout_format = '2x2_Quadrant_Grid' AND targets = ARRAY['[IP_1]', '[IP_2]', '[IP_3]', '[IP_4]'] AND quadrant_structure = ARRAY[ (Zone: 'Left_Column', Material: 'Printed_Cardboard', Content: 'Massive_Typography_Title_And_Inferred_Creator_Metadata'), (Zone: 'Center_Stage', Material: 'confection candy', Content: 'infer_main_character_and_diorama(target)'), (Zone: 'Right_Column', Material: 'Transparent_Glossy_Vacuum_Plastic_Blister_Pack', Content: 'infer_three_iconic_props(target)_As_3D_Miniatures_With_Text_Labels') ] AND color_grading = 'Vintage_Retro_Palette_Matching_Inferred_IP_Era' AND camera = 'Product_Photography_Front_Orthographic_View'",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9214,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/745b62de24bc45e0bca194e0b30d268d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7cdb700668d66e-a953adece1-320.webp",
          "640": "/prompt-template-images/tpl-7cdb700668d66e-a953adece1-640.webp",
          "960": "/prompt-template-images/tpl-7cdb700668d66e-a953adece1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:50:08.854Z"
    },
    {
      "id": "tpl-01d794ab82308e",
      "slug": "shattered-stone-style-transfer-by-samann-ai",
      "title": "Shattered Stone Style Transfer (by @Samann_ai)",
      "prompt": "Shattered Stone Style Transfer。Create a hyper-real 3D studio composition that recreates the main subject from the provided image as a fragmented stone assemblage. The subject must be built from separate, clearly detached rock pieces with small visible gaps between shards (no pieces merging). Material look: fragmented slate + sandstone shards with chiseled edges, crisp fractures, visible stone grain, micro-scratches, and realistic roughness. Color palette: predominantly dark slate with subtle warm-ochre sandstone accents. Lighting: soft studio key light from top-left, gentle fill, subtle contact shadows under each shard, realistic ambient occlusion in crevices, clean reflections kept minimal. Background: minimal off-white seamless backdrop, no texture. Framing: centered, clean, straight-on, subject fully readable. Add a few tiny debris chips floating or resting near the base for depth. Pr。",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9228,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7921300e23d8435c9f534f41a14c9155.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-01d794ab82308e-4035843cd6-320.webp",
          "640": "/prompt-template-images/tpl-01d794ab82308e-4035843cd6-640.webp",
          "960": "/prompt-template-images/tpl-01d794ab82308e-4035843cd6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:50:20.098Z"
    },
    {
      "id": "tpl-865eb296074d10",
      "slug": "continuous-run-glitch-storyboard-by-aimikoda",
      "title": "Continuous-Run Glitch Storyboard (by @aimikoda)",
      "prompt": "Use @[storyboard ref] as the authoritative director-approved storyboard blueprint for the sequence. Treat every storyboard panel as a consecutive shot within a single cinematic sequence. Follow panel order exactly and do not invent alternative coverage. Do not render the storyboard sheet itself. Preserve camera placement, framing, lens intent, shot scale, character staging, screen direction, environmental geography, prop placement, action choreography, continuity and emotional escalation shown by the storyboard. The storyboard is the primary source of truth for visual storytelling. Recreate the filmed sequence implied by the panels rather than the physical storyboard artwork. The entire vide",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9265,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6ac2efaccf144178976efad98a455c0c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-865eb296074d10-50c325b87b-320.webp",
          "640": "/prompt-template-images/tpl-865eb296074d10-50c325b87b-640.webp",
          "960": "/prompt-template-images/tpl-865eb296074d10-50c325b87b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:50:30.534Z"
    },
    {
      "id": "tpl-3208b462b2f76b",
      "slug": "action-storyboard-sheet-by-neural-aperture",
      "title": "Action Storyboard Sheet (by @neural_aperture)",
      "prompt": "Create a 16:9 image. [PROJECT CARD] Create a compact designed masthead, not a table. TITLE: KUROSHI VS ARACHNEX: BLITZ META LINE: relentless explosive / futuristic samurai vs spider-mech / max-dynamism one-take action PRIORITY: constant motion readability, one-take camera continuity, leg-cut and core-kill clarity, massive scale contrast MICRO BRIEF: Build a compact rough-sketch storyboard sheet for a 15-second Seedance BLITZ sequence where KUROSHI destroys ARACHNEX with uninterrupted high-speed katana choreography. [CONTINUITY HEADER] SEQUENCE ID: KUR-ARX-BLITZ-15S-STB REFERENCE PRIORITY: @image1 controls C1 KUROSHI identity, wardrobe, armor, helmet, cables, katana, proportions; @image2 cont",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9775,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f88137a214214475bbfca2d35cff2d06.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3208b462b2f76b-2f1e96c384-320.webp",
          "640": "/prompt-template-images/tpl-3208b462b2f76b-2f1e96c384-640.webp",
          "960": "/prompt-template-images/tpl-3208b462b2f76b-2f1e96c384-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:50:42.263Z"
    },
    {
      "id": "tpl-79b3367c056500",
      "slug": "churro-maker-storyboard-poster-by-techiebysa",
      "title": "Churro Maker Storyboard Poster (by @TechieBySA)",
      "prompt": "“Create a crisp, clean infographic storyboard poster for THE CHURRO MAKER. Wide 16:9 layout, white background, black borders, bold black typography, premium Pixar 3D stylized rendering, bright vivid colors — golden fried dough, sparkling white cinnamon sugar, rich dark chocolate sauce, vivid warm Spanish street food energy throughout. Top header: •THE CHURRO MAKER •TOTAL VIDEO TIME: 12 SECONDS • 8 SHOTS · GOLDEN · CRISPY · IRRESISTIBLE •Legend icons: ACTION, HEAT, TIME HINT, INGREDIENT Same Pixar-style young Spanish male street vendor throughout — warm smile, white t-shirt, red apron, small bright outdoor churro cart, morning sunshine, cobblestone street, warm golden light everywhere. Fresh,",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9801,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f5e1b19992694dddb167b599c4338ea1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-79b3367c056500-ecea1de3ab-320.webp",
          "640": "/prompt-template-images/tpl-79b3367c056500-ecea1de3ab-640.webp",
          "960": "/prompt-template-images/tpl-79b3367c056500-ecea1de3ab-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:50:58.271Z"
    },
    {
      "id": "tpl-041a43123ee256",
      "slug": "food-anime-storyboard-generator-by-tanabe-fragm",
      "title": "Food Anime Storyboard Generator (by @tanabe_fragm)",
      "prompt": "Create a professional anime production storyboard sheet for a **15-second cooking animation featuring authentic Edo-style Sushi (江戸前寿司 / 握り寿司)**. The cooking process should accurately reflect professional Tokyo high-end sushi restaurant techniques while delivering elegant anime-style food presentation and a **calm early summer atmosphere in a refined Tokyo sushi counter setting (初夏・静謐な高級寿司店の空気感)**. The storyboard should depict the complete preparation process of **maguro (tuna), toro (fatty tuna), and unagi (eel)** sushi while maintaining strict visual continuity across all panels. --- # Workflow Adaptation Rule Before creating the storyboard: 1. Follow authentic Edo-mae sushi counter workfl",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9849,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8ecae4a87db141c3ab6d80fc6ad65f26.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-041a43123ee256-10482002a1-320.webp",
          "640": "/prompt-template-images/tpl-041a43123ee256-10482002a1-640.webp",
          "960": "/prompt-template-images/tpl-041a43123ee256-10482002a1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:51:09.361Z"
    },
    {
      "id": "tpl-2859b5f4a2e847",
      "slug": "old-footage-restoration-with-gpt-image-2-by-curiousrefuge",
      "title": "Old Footage Restoration with GPT-Image 2 (by @CuriousRefuge)",
      "prompt": "Transform the attached image into a high resolution digital photo that looks like it was taken yesterday. Make it look like it was taken with a Canon EOS R6. Cinematic color grading and lighting. Keep details the same, only change the quality and resolution. Once GPT-Image 2 gives you the first ultra high quality image, upload the rest of your stills and input the following prompt: do the same for these attached photos Download all the ultra high quality images",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9922,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ea74a021fdf44f1b9b27b120317745f2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2859b5f4a2e847-0ea94e9886-320.webp",
          "640": "/prompt-template-images/tpl-2859b5f4a2e847-0ea94e9886-640.webp",
          "960": "/prompt-template-images/tpl-2859b5f4a2e847-0ea94e9886-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:51:40.342Z"
    },
    {
      "id": "tpl-e05e9bca2674ec",
      "slug": "4-architectural-styles-2-2-grid-by-gdgtify",
      "title": "4 Architectural Styles 2×2 Grid (by @Gdgtify)",
      "prompt": "2x2 grid, do this for 4 famous architectural styles. Anchor: [Architectural Style] :: [Geometric Essence & Period]. Each panel shows a representative building in that exact style with consistent camera angle and neutral sky background.",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9937,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a21553463247450f8156cd158b5da157.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e05e9bca2674ec-0e677a809c-320.webp",
          "640": "/prompt-template-images/tpl-e05e9bca2674ec-0e677a809c-640.webp",
          "960": "/prompt-template-images/tpl-e05e9bca2674ec-0e677a809c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:52:00.959Z"
    },
    {
      "id": "tpl-53f9ed1c8c9afa",
      "slug": "by-iamaiistudio",
      "title": "硬币金额编辑测试 (by @iamaiistudio)",
      "prompt": "Modify this photo so the total adds up to 244.5 baht. Adjust the number of coins in each stack until the combined value hits the target.",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9951,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0c0992dfa8944b20be3642f1dac6190c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-53f9ed1c8c9afa-62842c293f-320.webp",
          "640": "/prompt-template-images/tpl-53f9ed1c8c9afa-62842c293f-640.webp",
          "960": "/prompt-template-images/tpl-53f9ed1c8c9afa-62842c293f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:52:11.352Z"
    },
    {
      "id": "tpl-8683c2597e3928",
      "slug": "match-day-supporter-transformation-board-by-ai-gezgini",
      "title": "Match-Day Supporter Transformation Board (by @ai_gezgini)",
      "prompt": "Prompt: 👇 Create a premium 12-frame cinematic editorial transformation storyboard poster using the uploaded woman as the strict identity reference. USER INPUTS: Country = [WRITE A COUNTRY NAME] Reference Image = identity reference of the woman. ASPECT RATIO: 16:9 FORMAT: A clean 4-column x 3-row storyboard grid, 12 cinematic frames total. Each frame must feel like a high-end vlog / fashion transformation short film. Use elegant black editorial caption bars under each frame with readable numbered titles and short cinematic notes. IMPORTANT TEXT LANGUAGE RULE: All visible text inside the generated image must be in English only. This includes: - all frame titles - all subtitle captions - any sc",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9303,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-cd5bc510021854",
      "slug": "dust-bunny-nature-documentary-by-neuralaiinsight",
      "title": "Dust Bunny Nature Documentary (by @NeuralAIInsight)",
      "prompt": "Create a 16:9 image. [PROJECT CARD] Create a compact designed masthead, not a table. TITLE: THE DUST BUNNY NATURE DOCUMENTARY META LINE: macro wildlife realism / under-couch survival ecosystem / dry documentary comedy / 15-second natural-history chase PRIORITY: real nature-documentary seriousness, under-couch wilderness, dust bunny herd, fragile main dust bunny, household objects as landmarks, vacuum cleaner apex predator, survival chase, calm noble ending MICRO BRIEF: Eighteen-panel storyboard of a small dust bunny under a couch filmed like a wild animal surviving in a dangerous natural habitat. [CONTINUITY HEADER] SEQUENCE ID: DUST-BUNNY-DOC-18 REFERENCE PRIORITY: This storyboard controls",
      "category": "信息图、图标与规则模板",
      "categorySlug": "infographic-icon-rule-template",
      "rawCategory": "🧪 Comparison & Community Examples",
      "sourceLine": 9484,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-2e3be2f2109895",
      "slug": "woman-post-workout-hydration-fitness-and-gym-scene",
      "title": "Woman Post-Workout Hydration | Fitness & Gym Scene",
      "prompt": "Woman Post-Workout Hydration | Fitness & Gym Scene。rose gold fitness tracker, black hair ties on wrist；gym selfie aesthetic, smartphone front camera；N/A - direct gym photo。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 3148,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/3950369b5c9048789ca957a7002f5130.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2e3be2f2109895-d867ff8f47-320.webp",
          "640": "/prompt-template-images/tpl-2e3be2f2109895-d867ff8f47-640.webp",
          "960": "/prompt-template-images/tpl-2e3be2f2109895-d867ff8f47-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:52:33.144Z"
    },
    {
      "id": "tpl-403d154576f814",
      "slug": "young-woman-gym-selfie-on-yoga-mat-fitness-and-wellness",
      "title": "Young Woman Gym Selfie on Yoga Mat - Fitness & Wellness",
      "prompt": "Young Woman Gym Selfie on Yoga Mat - Fitness & Wellness。right hand holding a smartphone for a mirror selfie；light gym flooring with black yoga mat；fitness watch on wrist。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 3395,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/105425d0f16b4c2a909cd86023df4234.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-403d154576f814-b889782a7a-320.webp",
          "640": "/prompt-template-images/tpl-403d154576f814-b889782a7a-640.webp",
          "960": "/prompt-template-images/tpl-403d154576f814-b889782a7a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:53:56.688Z"
    },
    {
      "id": "tpl-9e0833173883a9",
      "slug": "lionel-messi-fan-photo-at-football-game-cheerful-selfie",
      "title": "Lionel Messi Fan Photo at Football Game - Cheerful Selfie",
      "prompt": "Lionel Messi Fan Photo at Football Game - Cheerful Selfie。Depict Lionel Messi with accurate, recognizable facial features, hairstyle, beard (if present), skin tone, and proportions.；Create a realistic iPhone-style medium close-up photo inside a football stadium at night, featuring the woman with her exact face from the reference image and Lionel Messi beside her, both posing playfully under bright stadium lights with a packed crowd in the background.；lush green football field with clear white lines。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 3486,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/662cc6f6cdf843dfb0c28c185f688b2d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9e0833173883a9-9f1e44c6e9-320.webp",
          "640": "/prompt-template-images/tpl-9e0833173883a9-9f1e44c6e9-640.webp",
          "960": "/prompt-template-images/tpl-9e0833173883a9-9f1e44c6e9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:54:09.459Z"
    },
    {
      "id": "tpl-9621b0233e0205",
      "slug": "happy-woman-post-workout-selfie-in-gym-fitness-and-health",
      "title": "Happy Woman Post-Workout Selfie in Gym | Fitness & Health",
      "prompt": "Happy Woman Post-Workout Selfie in Gym | Fitness & Health。gym selfie aesthetic。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 3574,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/707f1829282d4e98aa8ceec00d550dcc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9621b0233e0205-d8d51aa9aa-320.webp",
          "640": "/prompt-template-images/tpl-9621b0233e0205-d8d51aa9aa-640.webp",
          "960": "/prompt-template-images/tpl-9621b0233e0205-d8d51aa9aa-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:54:30.141Z"
    },
    {
      "id": "tpl-4de87831440f0d",
      "slug": "fitness-lifestyle-woman-workout-gear-and-apple-watch",
      "title": "Fitness Lifestyle: Woman, Workout Gear & Apple Watch",
      "prompt": "Fitness Lifestyle: Woman, Workout Gear & Apple Watch。clean_girl_fitness_lifestyle；smartwatch_fitness_stats_close_up；clean_minimal_fitness_look。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 4070,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1f0e063509b04b5cb2d12304fd8ae812.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4de87831440f0d-98b6d91b0e-320.webp",
          "640": "/prompt-template-images/tpl-4de87831440f0d-98b6d91b0e-640.webp",
          "960": "/prompt-template-images/tpl-4de87831440f0d-98b6d91b0e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:54:49.936Z"
    },
    {
      "id": "tpl-f7e24c66f26832",
      "slug": "young-woman-volleyball-player-clapping-indoor-sports-action",
      "title": "Young Woman Volleyball Player Clapping - Indoor Sports Action",
      "prompt": "Young Woman Volleyball Player Clapping - Indoor Sports Action。bright indoor sports lighting；natural sports makeup, light blush, subtle eyeliner；yellow and navy sleeveless volleyball jersey。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 4168,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/71c58069d85240ef9cb681d42c80faa4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f7e24c66f26832-29985b0e29-320.webp",
          "640": "/prompt-template-images/tpl-f7e24c66f26832-29985b0e29-640.webp",
          "960": "/prompt-template-images/tpl-f7e24c66f26832-29985b0e29-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:54:59.773Z"
    },
    {
      "id": "tpl-55ba4c45c633ad",
      "slug": "woman-in-ferrari-f1-racing-suit-with-helmet-on-race-track",
      "title": "Woman in Ferrari F1 Racing Suit with Helmet on Race Track",
      "prompt": "Woman in Ferrari F1 Racing Suit with Helmet on Race Track。Create a hyper-realistic cinematic image of a woman, using her exact face from the reference photo, standing on a Formula 1 race grid wearing a Ferrari F1 driver suit, holding a helmet, with a Ferrari car beside her.；official Ferrari Formula 1 driver racing suit (female fit), red with sponsor details；realistic highlights on racing suit and helmet。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 4248,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/997dbd946ef347a4ad42b86188b28e47.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-55ba4c45c633ad-df0cf70e91-320.webp",
          "640": "/prompt-template-images/tpl-55ba4c45c633ad-df0cf70e91-640.webp",
          "960": "/prompt-template-images/tpl-55ba4c45c633ad-df0cf70e91-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:55:09.188Z"
    },
    {
      "id": "tpl-c5a0954c365181",
      "slug": "woman-s-gym-selfie-fitness-fashion-and-workout-style",
      "title": "Woman's Gym Selfie: Fitness Fashion & Workout Style",
      "prompt": "Woman's Gym Selfie: Fitness Fashion & Workout Style。holding a orange iphone smartphone for a mirror selfie；casual fitness lifestyle photograph；sharp clothing textures and clear gym background。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 4341,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/72aa3d81af154f839059324667c3a07a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c5a0954c365181-e4d6f0236f-320.webp",
          "640": "/prompt-template-images/tpl-c5a0954c365181-e4d6f0236f-640.webp",
          "960": "/prompt-template-images/tpl-c5a0954c365181-e4d6f0236f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:55:20.664Z"
    },
    {
      "id": "tpl-db59128e9dd2b2",
      "slug": "woman-in-tennis-outfit-on-court-sports-fashion-portrait",
      "title": "Woman in Tennis Outfit on Court | Sports Fashion Portrait",
      "prompt": "Woman in Tennis Outfit on Court | Sports Fashion Portrait。A candid outdoor portrait of a young woman in tennis attire (black sports bra, black pleated skirt) holding a green and black tennis racquet on a sunlit tennis court. She has a high ponytail and a serious expression, looking directly at the camera. The background features a fence, umbrella, trees, hills, and a partly cloudy blue sky. The lighting is bright natural sunlight creating strong shadows.；Bright highlights on the subject's skin, hair, and the tennis net；Smooth skin, fabric texture of clothing, rough texture of court and fence。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 4434,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b16b09258d95452aaa89d9ca921cb194.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-db59128e9dd2b2-379758994f-320.webp",
          "640": "/prompt-template-images/tpl-db59128e9dd2b2-379758994f-640.webp",
          "960": "/prompt-template-images/tpl-db59128e9dd2b2-379758994f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:55:32.244Z"
    },
    {
      "id": "tpl-538ab0709730f4",
      "slug": "confident-woman-in-pink-activewear-at-modern-gym",
      "title": "Confident Woman in Pink Activewear at Modern Gym",
      "prompt": "Confident Woman in Pink Activewear at Modern Gym。High-fashion editorial slouch, confident；Confident, luxurious, sun-drenched；Solid pastel pink wall。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 4544,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bf882db758d145d38c2dcb22b06bb9dd.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-538ab0709730f4-d568605e79-320.webp",
          "640": "/prompt-template-images/tpl-538ab0709730f4-d568605e79-640.webp",
          "960": "/prompt-template-images/tpl-538ab0709730f4-d568605e79-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:56:12.999Z"
    },
    {
      "id": "tpl-291c3dd43b6836",
      "slug": "athletic-woman-in-gym-fitness-photography-and-activewear",
      "title": "Athletic Woman in Gym | Fitness Photography & Activewear",
      "prompt": "Athletic Woman in Gym | Fitness Photography & Activewear。Athletic/Tight；Athletic shorts；Gym equipment in background。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 4637,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c9dff247288c43ef9b26ceba9417ec4b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-291c3dd43b6836-f9bda7cd67-320.webp",
          "640": "/prompt-template-images/tpl-291c3dd43b6836-f9bda7cd67-640.webp",
          "960": "/prompt-template-images/tpl-291c3dd43b6836-f9bda7cd67-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:56:33.368Z"
    },
    {
      "id": "tpl-db70c32d75345a",
      "slug": "woman-in-gym-selfie-athletic-wear-and-fitness-pose",
      "title": "Woman in Gym Selfie: Athletic Wear & Fitness Pose",
      "prompt": "Woman in Gym Selfie: Athletic Wear & Fitness Pose。Fitness and lifestyle social media content；High-resolution mirror selfie；Exposed ceiling trusses。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 4715,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/db60fb8e4078436dbecd9c91ce48474f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-db70c32d75345a-d5680542a9-320.webp",
          "640": "/prompt-template-images/tpl-db70c32d75345a-d5680542a9-640.webp",
          "960": "/prompt-template-images/tpl-db70c32d75345a-d5680542a9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:56:43.281Z"
    },
    {
      "id": "tpl-25bf4d6c3be247",
      "slug": "fit-woman-gym-workout-squat-and-cable-cross-fitness",
      "title": "Fit Woman Gym Workout - Squat & Cable Cross Fitness",
      "prompt": "Fit Woman Gym Workout - Squat & Cable Cross Fitness。woman_doing_cable_crossover_exercise；bright_fitness_studio；cable_tension_visible。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 4834,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/436c52383ee74a738baedf850f961b42.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-25bf4d6c3be247-f1ee1dde1f-320.webp",
          "640": "/prompt-template-images/tpl-25bf4d6c3be247-f1ee1dde1f-640.webp",
          "960": "/prompt-template-images/tpl-25bf4d6c3be247-f1ee1dde1f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:56:53.223Z"
    },
    {
      "id": "tpl-ff577f20982f90",
      "slug": "young-woman-in-gym-selfie-with-headphones-fitness-portrait",
      "title": "Young Woman in Gym Selfie with Headphones - Fitness Portrait",
      "prompt": "Young Woman in Gym Selfie with Headphones - Fitness Portrait。close-up selfie angle from slightly above；white over-ear headphones resting around the neck；shallow with background slightly blurred。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "📸 Portrait Photography",
      "sourceLine": 8374,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/69e2d7821d304d67864cb262eedaf4f3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ff577f20982f90-a00f1a4c89-320.webp",
          "640": "/prompt-template-images/tpl-ff577f20982f90-a00f1a4c89-640.webp",
          "960": "/prompt-template-images/tpl-ff577f20982f90-a00f1a4c89-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:57:15.898Z"
    },
    {
      "id": "tpl-9e03d025976aaf",
      "slug": "cristiano-ronaldo-selfie-with-fan-at-stadium-sports-action",
      "title": "Cristiano Ronaldo Selfie with Fan at Stadium - Sports Action",
      "prompt": "Cristiano Ronaldo Selfie with Fan at Stadium - Sports Action。leaning slightly toward him in a casual selfie pose；stadium seating filled with fans；night sky with stadium floodlights。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 3232,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/618d77a9465d416ea4fa2aa4d81c1599.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9e03d025976aaf-a854243117-320.webp",
          "640": "/prompt-template-images/tpl-9e03d025976aaf-a854243117-640.webp",
          "960": "/prompt-template-images/tpl-9e03d025976aaf-a854243117-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:52:43.955Z"
    },
    {
      "id": "tpl-e5202701c7165d",
      "slug": "miniature-soccer-game-on-smartphone-screen-digital-sports",
      "title": "Miniature Soccer Game on Smartphone Screen - Digital Sports",
      "prompt": "Miniature Soccer Game on Smartphone Screen - Digital Sports。phone screen transformed into a miniature football stadium；miniature football players actively playing a match with dynamic poses；smartphone placed on a wooden table。",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "⚽ Sports & Action",
      "sourceLine": 3340,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/d0eda51d883640b1afe68b5a40ca6904.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e5202701c7165d-9f4d3c8a65-320.webp",
          "640": "/prompt-template-images/tpl-e5202701c7165d-9f4d3c8a65-640.webp",
          "960": "/prompt-template-images/tpl-e5202701c7165d-9f4d3c8a65-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:53:14.062Z"
    },
    {
      "id": "tpl-e9c95fd2676e9f",
      "slug": "nba-legend-mid-air-action-poster-by-taaruk",
      "title": "NBA Legend Mid-Air Action Poster (by @Taaruk_)",
      "prompt": "Dynamic NBA legend poster design, iconic basketball superstar in mid-air action pose performing dunk, jumpshot, or intense celebration, cinematic sports illustration style, highly detailed muscular anatomy, dramatic motion, realistic face with painterly polygon brush texture, explosive paint splashes behind character matching team colors, bold typography with player name in huge vertical letters, motivational quote text layout, sports stats and achievements infographic, clean minimal cream background, modern editorial composition.",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1705,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/96b136fa99a64bd59fe94039a05f792b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e9c95fd2676e9f-4eee0a090c-320.webp",
          "640": "/prompt-template-images/tpl-e9c95fd2676e9f-4eee0a090c-640.webp",
          "960": "/prompt-template-images/tpl-e9c95fd2676e9f-4eee0a090c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:57:26.958Z"
    },
    {
      "id": "tpl-95ee8822e4029e",
      "slug": "luxury-cycling-storyboard-poster-by-strength04-x",
      "title": "Luxury Cycling Storyboard Poster (by @Strength04_X)",
      "prompt": "- Step 1: Generate storyboard with GPT Image 2",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1770,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/48cd66575797432c9c70be5a7fac6e96.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-95ee8822e4029e-6ec22b76c5-320.webp",
          "640": "/prompt-template-images/tpl-95ee8822e4029e-6ec22b76c5-640.webp",
          "960": "/prompt-template-images/tpl-95ee8822e4029e-6ec22b76c5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:58:07.507Z"
    },
    {
      "id": "tpl-0bc1cf08cd2599",
      "slug": "cinematic-volleyball-sports-portrait-by-meng-dagg695",
      "title": "Cinematic Volleyball Sports Portrait (by @meng_dagg695)",
      "prompt": "Ultra-realistic cinematic sports portrait of a young athletic woman playing volleyball outdoors on a sunny tropical day, captured mid-action while gently tossing/spinning a colorful volleyball upward with one hand. She is standing on an outdoor sports court surrounded by green mesh fencing, lush tropical plants, palm leaves, and soft natural greenery in the background.",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1206,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-23c6ad39f8155a",
      "slug": "cinematic-football-portrait-poster-by-de-mon010",
      "title": "Cinematic Football Portrait Poster (by @de_mon010)",
      "prompt": "Ultra realistic cinematic football poster of a stylish young South Asian male footballer with voluminous messy black hair, sharp jawline, trimmed beard, glowing fair skin, wearing Portugal national team red jersey with number 7. Multi-layered dramatic sports collage composition with three different poses — smiling front portrait pointing at Portugal badge, intense side profile close-up, and back pose showing custom name “HASANUR 7” on jersey. Dynamic action shot at the bottom celebratingon football field with clenched fists and soccer ball. Dark stormy sky with lightning, glowing stadium lights, red smoke flares, flying embers, Portugal flag waving in background, intense red and blue cinemat",
      "category": "体育与动作场景",
      "categorySlug": "sports-action-scenes",
      "rawCategory": "🍌 Portrait & Photography Cases",
      "sourceLine": 1731,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-59abbb2f704c0e",
      "slug": "spring-garden-watercolor-couple-by-nooneishere2603",
      "title": "Spring Garden Watercolor Couple (by @NoOneIsHere2603)",
      "prompt": "Fashion editorial watercolor portrait illustration of a romantic young Korean couple in a blooming spring garden, standing close together in a soft intimate moment — the boy gently holding the girl's hand while she leans slightly toward him with a warm shy smile. The woman wears an elegant flowing blush-pink dress with delicate fabric movement, while the man wears a soft ivory-beige shirt layered with a light pastel cardigan, creating a dreamy romantic harmony. Soft Korean facial features, healthy glowing skin texture, subtle natural makeup, calm affectionate expressions, relaxed posture, gentle head tilt, slight three-quarter angle, waist-up framing. Set in a glowing May flower garden fille",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5393,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/78c54607ef264270904495c62cb92c63.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-59abbb2f704c0e-05d6cbbcc5-320.webp",
          "640": "/prompt-template-images/tpl-59abbb2f704c0e-05d6cbbcc5-640.webp",
          "960": "/prompt-template-images/tpl-59abbb2f704c0e-05d6cbbcc5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:13:14.536Z"
    },
    {
      "id": "tpl-cb0b557207c3aa",
      "slug": "miniature-man-resting-on-plant-seedling-photorealistic",
      "title": "Miniature Man Resting on Plant Seedling - Photorealistic",
      "prompt": "Miniature Man Resting on Plant Seedling - Photorealistic。Sitting relaxed on the ground, resting under a giant plant stem；Detailed textures of soil, pebbles, roots, and young seedlings；Shallow depth of field, soft blurred background (bokeh), crisp highly detailed foreground。",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5581,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e26a49117d8d4cdfa2429634815e1252.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-cb0b557207c3aa-9ba87216db-320.webp",
          "640": "/prompt-template-images/tpl-cb0b557207c3aa-9ba87216db-640.webp",
          "960": "/prompt-template-images/tpl-cb0b557207c3aa-9ba87216db-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:09:24.885Z"
    },
    {
      "id": "tpl-91447ef52c8d09",
      "slug": "alpine-village-and-majestic-snow-capped-mountains-landscape",
      "title": "Alpine Village & Majestic Snow-Capped Mountains Landscape",
      "prompt": "Alpine Village & Majestic Snow-Capped Mountains Landscape。bright clean midday sunlight from upper right, high-elevation alpine light；full-frame equivalent ~18mm ultra wide landscape lens, deep depth of field；steep emerald-green mountain terraces with bright mossy grass and scattered pink alpine flowers, layered with old trees and cliffs。",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5617,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9b3cfa53fb954be38a10d11acd610095.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-91447ef52c8d09-31d88b1ce1-320.webp",
          "640": "/prompt-template-images/tpl-91447ef52c8d09-31d88b1ce1-640.webp",
          "960": "/prompt-template-images/tpl-91447ef52c8d09-31d88b1ce1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:09:56.879Z"
    },
    {
      "id": "tpl-2a6eddb29c6a73",
      "slug": "pet-shop-illustration-educational-animal-supplies",
      "title": "Pet Shop Illustration | Educational Animal Supplies",
      "prompt": "{{pet shop}} scene and label every object with English words. Label format: - First line: English word - Second line: IPA pronunciation - Third line: {Chinese} translation ---",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5677,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bad03728396f497aa4555b1c88034090.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2a6eddb29c6a73-f977ccdcf9-320.webp",
          "640": "/prompt-template-images/tpl-2a6eddb29c6a73-f977ccdcf9-640.webp",
          "960": "/prompt-template-images/tpl-2a6eddb29c6a73-f977ccdcf9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:10:07.486Z"
    },
    {
      "id": "tpl-3fcc1013aefb47",
      "slug": "whimsical-cat-journey-sketch-to-photorealistic-forest",
      "title": "Whimsical Cat Journey: Sketch to Photorealistic Forest",
      "prompt": "Prompt : A cozy room where the wall looks like a giant paper illustration, flat ink lines and watercolor washes, yet a corner of the “paper wall” is peeled back, revealing a fully 3D forest behind it. The peeled edge curls outward like thick cardstock, casting a real shadow on the illustrated surface. The illusion: the 2D drawn objects (a drawn lamp, drawn shelf) cast realistic 3D shadows, while the 3D forest casts faint “ink” shadows as if it’s becoming a drawing. A cat sits half-in, half-out: front paws in 3D forest moss, back body in 2D sketch form, seamlessly blended. Soft morning light, gentle pastel palette, tactile paper fibers visible, high detail, whimsical but believable “mixed-dim",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5698,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/819a200856d1484284fa55a47f6d5be9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3fcc1013aefb47-055649ed2b-320.webp",
          "640": "/prompt-template-images/tpl-3fcc1013aefb47-055649ed2b-640.webp",
          "960": "/prompt-template-images/tpl-3fcc1013aefb47-055649ed2b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:10:30.222Z"
    },
    {
      "id": "tpl-516b873d5cd7de",
      "slug": "photorealistic-cloud-world-map-art-on-blue-sky",
      "title": "Photorealistic Cloud World Map Art on Blue Sky",
      "prompt": "Prompt : A photorealistic image of a cloud in the sky, uniquely shaped like all the continents of the world, with clear, distinct outlines of each continent visible within the cloud formation. The background is a bright blue sky with a few other smaller, normal clouds scattered around. The sunlight is subtly illuminating the cloud, highlighting its unique shape Generated on @LeonardoAi ---",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5756,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b8e315dc1e2745369f9460bc5cef39f3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-516b873d5cd7de-32944a7380-320.webp",
          "640": "/prompt-template-images/tpl-516b873d5cd7de-32944a7380-640.webp",
          "960": "/prompt-template-images/tpl-516b873d5cd7de-32944a7380-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:10:41.829Z"
    },
    {
      "id": "tpl-6362b9644129bc",
      "slug": "leaf-dragon-art-on-forest-floor-autumn-nature-photography",
      "title": "Leaf Dragon Art on Forest Floor: Autumn Nature Photography",
      "prompt": "wow, you don’t need long, detailed prompts to make something amazing on Google Nano Banana Pro! Prompt : A photorealistic image of a leaf that looks like it’s in the shape of a dragon. ---",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5774,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/94f939dfd41b4e6b8685bc2755d94bc9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6362b9644129bc-2dc7490cd9-320.webp",
          "640": "/prompt-template-images/tpl-6362b9644129bc-2dc7490cd9-640.webp",
          "960": "/prompt-template-images/tpl-6362b9644129bc-2dc7490cd9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:11:05.599Z"
    },
    {
      "id": "tpl-45e5ea89bee747",
      "slug": "epic-sunset-sky-sun-rays-piercing-dark-storm-clouds",
      "title": "Epic Sunset Sky: Sun Rays Piercing Dark Storm Clouds",
      "prompt": "Prompt on Google Nano Banana Pro : A dramatic sky photo where swirling storm clouds naturally form the unmistakable shape of a [SUBJECT]. The illusion should be “found shape”: at first it’s just clouds; then the creature silhouette pops out. Realistic lighting: sun rays breaking through, volumetric beams, deep contrast. No fantasy glow, pure cloud structure forming the subject. High resolution, cinematic, awe-inspiring. ---",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5792,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f3bc89da26c943f984d8f9889ef2fd7f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-45e5ea89bee747-517218a7c8-320.webp",
          "640": "/prompt-template-images/tpl-45e5ea89bee747-517218a7c8-640.webp",
          "960": "/prompt-template-images/tpl-45e5ea89bee747-517218a7c8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:12:18.506Z"
    },
    {
      "id": "tpl-effbcd059ef841",
      "slug": "aerial-suburban-landscape-houses-trees-and-fields",
      "title": "Aerial Suburban Landscape: Houses, Trees & Fields",
      "prompt": "2) Feed to Google Nano Banana Pro, prompt \"hand-drawn urban planning map\" ---",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5808,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/539118369fb14701900cbb4d450d9b19.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-effbcd059ef841-f7016f2ffa-320.webp",
          "640": "/prompt-template-images/tpl-effbcd059ef841-f7016f2ffa-640.webp",
          "960": "/prompt-template-images/tpl-effbcd059ef841-f7016f2ffa-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:12:40.978Z"
    },
    {
      "id": "tpl-dc353e1edd5d5d",
      "slug": "peacock-botanical-vintage-symmetrical-art-print-by-dotey",
      "title": "Peacock Botanical Vintage Symmetrical Art Print (by @dotey)",
      "prompt": "symmetrical design featuring two elegant blue peacocks with detailed feather patterns, surrounded by blue floral elements, intricate vintage botanical ornament, soft beige background, classical floral decor style with rich navy and sky blue details, decorative art illustration --ar 3:2",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3183,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b99ff35e245a40f6b3223753c6d5772d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-dc353e1edd5d5d-feec879757-320.webp",
          "640": "/prompt-template-images/tpl-dc353e1edd5d5d-feec879757-640.webp",
          "960": "/prompt-template-images/tpl-dc353e1edd5d5d-feec879757-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:12:52.624Z"
    },
    {
      "id": "tpl-9654e597270297",
      "slug": "anime-streetwear-mascot-poster-by-taaruk",
      "title": "Anime Streetwear Mascot Poster (by @Taaruk_)",
      "prompt": "Stylized anime streetwear brand poster of a fast-food mascot character, full-body dynamic pose, highly detailed manga/anime illustration, modern urban fashion outfit inspired by the restaurant brand colors and identity, oversized hoodie, tactical straps, sneakers, chains, branded accessories, holding signature food item, bold graphic typography, editorial magazine layout, Japanese text elements, logos, promotional stickers, menu-style side panels, grunge textures, paint splashes, distressed paper background, collectible poster aesthetic, cyber street fashion meets commercial advertising, vibrant red/orange/black/white color palette, dramatic lighting, ultra detailed line art, cel-shaded anim",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3389,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/dd3e27c787a547e8a57ce70534e6a150.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-9654e597270297-98b32c71ae-320.webp",
          "640": "/prompt-template-images/tpl-9654e597270297-98b32c71ae-640.webp",
          "960": "/prompt-template-images/tpl-9654e597270297-98b32c71ae-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:13:04.022Z"
    },
    {
      "id": "tpl-7939d510200da1",
      "slug": "greek-mythology-olympian-family-tree-by-92digitalartart",
      "title": "Greek Mythology Olympian Family Tree (by @92digitalartArt)",
      "prompt": "An Art Nouveau style historical infographic poster in 16:9 horizontal format about Greek mythology, featuring an elegant flowing composition inspired by classical decorative poster design, with ornate floral borders, curling vines, golden laurel motifs, and graceful asymmetrical linework; the central artwork should depict the Olympian family tree as a beautiful mythic tableau with Zeus, Hera, Athena, Apollo, Artemis, Poseidon, and Aphrodite arranged in a ceremonial vertical hierarchy around Mount Olympus, each god or goddess framed by stylized Art Nouveau halos, flowing hair, marble columns, peacocks, olive branches, stars, waves, and moon crescents, all drawn with elongated elegant contours",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6224,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c17fa23090c148038806bd4060ea825b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7939d510200da1-0bc07a06a0-320.webp",
          "640": "/prompt-template-images/tpl-7939d510200da1-0bc07a06a0-640.webp",
          "960": "/prompt-template-images/tpl-7939d510200da1-0bc07a06a0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:13:25.941Z"
    },
    {
      "id": "tpl-5c4189889afec7",
      "slug": "risograph-zine-rainforest-infographic-by-92digitalartart",
      "title": "Risograph Zine Rainforest Infographic (by @92digitalartArt)",
      "prompt": "A risograph zine print style infographic poster in 16:9 horizontal format exploring the biodiversity of tropical rainforests, designed to look exactly like an indie science zine printed with overlapping risograph ink layers; the entire composition should show the characteristic risograph printing imperfections: ink grain, slight misregistration between color layers, halftone dot patterns visible in midtones, and a tactile paper texture underneath everything; use a strict three-color risograph palette of fluorescent green, deep navy blue, and warm yellow, with rich overprinting where colors overlap creating unexpected secondary tones like teal where green meets blue and olive where green meet",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6471,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/71cdaf40ba6941f4b131ea42e4146baa.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5c4189889afec7-9c99b3be9b-320.webp",
          "640": "/prompt-template-images/tpl-5c4189889afec7-9c99b3be9b-640.webp",
          "960": "/prompt-template-images/tpl-5c4189889afec7-9c99b3be9b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:13:37.170Z"
    },
    {
      "id": "tpl-d08c57267ab47e",
      "slug": "bmx-rider-streetwear-mixed-media-collage-by-omnitrix204",
      "title": "BMX Rider Streetwear Mixed-Media Collage (by @omnitrix204)",
      "prompt": "Ultra-creative streetwear collage poster featuring a tattooed BMX rider and urban lifestyle athlete. Multiple cutout photographs arranged in a layered mixed-media composition. One large back-facing portrait wearing an oversized black graphic t-shirt and cap dominates the center. A second portrait faces the camera while lifting his shirt over part of his face, revealing intense eyes and tattooed arms. A dynamic BMX action shot performing a trick is positioned in the foreground. Torn paper edges, ripped poster textures, magazine cutouts, handwritten signatures, stickers, stamps, urban symbols, architectural photography, and layered graphic elements create a premium street culture aesthetic. Pr",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6941,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0d590def64084d3fb297f40d89cf9472.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d08c57267ab47e-adadfc3d17-320.webp",
          "640": "/prompt-template-images/tpl-d08c57267ab47e-adadfc3d17-640.webp",
          "960": "/prompt-template-images/tpl-d08c57267ab47e-adadfc3d17-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:13:47.525Z"
    },
    {
      "id": "tpl-fc966dd7488dcd",
      "slug": "four-seasons-tree-landscape-vibrant-nature-cycle",
      "title": "Four Seasons Tree Landscape - Vibrant Nature Cycle",
      "prompt": "Hyper-realistic digital illustration of {Scene}, presented as a single continuous composition showcasing the cycle of seasons. The scene flows seamlessly from left to right in a natural progression: Winter, Spring, Summer, and Autumn. The left side features cold snowy winter elements, gradually thawing into the fresh green buds and blooms of spring, then morphing into the lush vibrant vegetation and bright sunlight of summer, and finally transitioning into the golden, orange, and red hues of autumn on the far right. There are no visible dividing lines between seasons; the weather, lighting, and vegetation blend smoothly to create a unified and harmonious panorama. Rich in detail, symbolic of",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5714,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-65940b7c0ea1bf",
      "slug": "humorous-capuchin-monkey-at-computer-with-headphones",
      "title": "Humorous Capuchin Monkey at Computer with Headphones",
      "prompt": "Google Nano Banana Pro is FREE for 365 days on invideo - and unlimited - for all paid-plan signups before Nov 27. RT + comment “Banana” for a shot at our highest plan + $1000 credits. Okay, now go lose your bananas. ---",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🏔️ Nature & Landscapes",
      "sourceLine": 5738,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-59cd7f0dd6265c",
      "slug": "premium-streetwear-graphic-tee-by-j-smeaton99",
      "title": "Premium Streetwear Graphic Tee (by @j_smeaton99)",
      "prompt": "Create a high-end fashion product photo of a modern oversized streetwear T-shirt. The shirt features a large, professionally designed graphic print on the front. Design style: contemporary urban streetwear, bold typography mixed with futuristic geometric elements, clean vector artwork, subtle distressed textures, premium screen-print aesthetic, balanced composition, visually striking but wearable. Color palette: black, white, silver, and electric blue accents. The design should look like it belongs in a luxury streetwear collection. Photorealistic fabric texture, realistic folds, premium cotton material, studio lighting, fashion campaign quality, ultra-detailed, sharp focus, e-commerce ready",
      "category": "自然与风景",
      "categorySlug": "nature-landscape",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5730,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-cdffb34a78d611",
      "slug": "vintage-digital-camera-portrait-y2k-aesthetic-and-nostalgia",
      "title": "Vintage Digital Camera Portrait | Y2K Aesthetic & Nostalgia",
      "prompt": "Close-up, top-down shot of a black early 2000s compact digital camera resting on textured blue denim fabric. The rear LCD screen is illuminated, displaying a lo-fi, grainy, flash-lit selfie of a young woman. Subject on screen has dark wavy hair, heavy Y2K-style pink blush on cheeks and nose, winged eyeliner, and glossy lips, looking over her shoulder with a soft gaze. The camera body has visible buttons and a directional pad. Shallow depth of field with focus sharp on the LCD screen and slightly blurred edges. ——————————————— Google Nano Banana Pro is unlimited for a year for everyone joining @higgsfield_ai. Less than a day left, don’t miss it. ---",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6046,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/279c59a14bba4e8cb7fe925713d4c775.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-cdffb34a78d611-e54e2f4134-320.webp",
          "640": "/prompt-template-images/tpl-cdffb34a78d611-e54e2f4134-640.webp",
          "960": "/prompt-template-images/tpl-cdffb34a78d611-e54e2f4134-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:14:40.709Z"
    },
    {
      "id": "tpl-fb9995e80c9246",
      "slug": "vintage-paper-collage-set-by-sairah-0",
      "title": "Vintage Paper Collage Set (by @Sairah_0)",
      "prompt": "Aesthetic vintage paper collage portrait of a stylish woman taking a mirror selfie, made entirely from torn magazine and newspaper pieces, layered mixed-media artwork, neutral beige and brown tones, Vogue-inspired fashion editorial style, black sunglasses, sleek ponytail hairstyle, white corset top, silver jewelry, purple smartphone, textured ripped paper edges, handcrafted mosaic effect, realistic shadows and depth, chic typography cutouts, inspirational quotes scattered around, cozy luxury aesthetic, highly detailed analog collage art, soft warm lighting, Instagram moodboard vibe, premium editorial composition, ultra detailed, 4k Prompt : Vintage breakfast aesthetic collage made from torn",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3700,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/594af5df1e07486aaedbf62a0421f769.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fb9995e80c9246-378dc24f97-320.webp",
          "640": "/prompt-template-images/tpl-fb9995e80c9246-378dc24f97-640.webp",
          "960": "/prompt-template-images/tpl-fb9995e80c9246-378dc24f97-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:16:27.690Z"
    },
    {
      "id": "tpl-1853ab6d725ac5",
      "slug": "apollo-11-lunar-module-lm-5-eagle-blueprint-and-moon-render",
      "title": "Apollo 11 Lunar Module LM-5 Eagle Blueprint & Moon Render",
      "prompt": "An expert [DISCIPLINE] designer’s presentation board for [SUBJECT] — [ICONIC FEATURES / ERA], featuring black-and-white 2D technical drawings with annotations and dimensions on the left, an exploded axonometric diagram revealing [KEY INTERNAL COMPONENTS / MATERIALS] in the center, and a photorealistic 3D render of [SUBJECT] in [ICONIC ENVIRONMENT / SCENE] on the right, with [LIGHTING / ATMOSPHERE / MOTION DETAILS]; visual style transitions from [TECHNICAL / ARCHIVAL TONES] to [EMOTIONAL / ATMOSPHERIC COLOR PALETTE], clean grid layout, museum-grade industrial design presentation, ultra-detailed cinematic realism, title block reading “[TITLE] — [YEAR / VARIANT / TAGLINE]”. See ALTs for ideas -",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6010,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/fb2310a968114cbfb27576af6eac2bca.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1853ab6d725ac5-53d8144747-320.webp",
          "640": "/prompt-template-images/tpl-1853ab6d725ac5-53d8144747-640.webp",
          "960": "/prompt-template-images/tpl-1853ab6d725ac5-53d8144747-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:14:08.649Z"
    },
    {
      "id": "tpl-c62263f4457a40",
      "slug": "photorealistic-detective-board-vintage-cold-case-mystery",
      "title": "Photorealistic Detective Board - Vintage Cold Case Mystery",
      "prompt": "A detective's evidence board investigating [SUBJECT/MYSTERY]. Cork surface covered with pinned items: polaroid photographs with handwritten dates, a street map with circled locations, newspaper clippings with highlighted passages, sticky notes with theories and question marks, and printed documents with redacted black bars. Red string connects related evidence across the board, creating a web of connections. Thumbtacks in primary colors. A single bare bulb casts dramatic shadows. Coffee ring stains on some papers. The atmosphere is obsessive, late-night, noir—someone has been piecing this together for months. A few pins have fallen, suggesting frantic recent activity. Check ALTs for ideas --",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6028,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bcdf5439b86d48c3a161f178fda7aa94.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c62263f4457a40-e38522c051-320.webp",
          "640": "/prompt-template-images/tpl-c62263f4457a40-e38522c051-640.webp",
          "960": "/prompt-template-images/tpl-c62263f4457a40-e38522c051-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:14:29.248Z"
    },
    {
      "id": "tpl-184db96fbc1a6d",
      "slug": "vintage-patent-automatic-hat-tipping-device-steampunk-art",
      "title": "Vintage Patent: Automatic Hat-Tipping Device Steampunk Art",
      "prompt": "A vintage patent document for [INVENTION], styled after late 1800s United States Patent Office filings. The page features precise technical drawings with numbered callouts (Fig. 1, Fig. 2, Fig. 3) showing front, side, and exploded views. Handwritten annotations in fountain-pen ink describe mechanisms. The paper is aged ivory with foxing stains and soft fold creases. An official embossed seal and red wax stamp appear in the corner. A hand-signed inventor's name and date appear at the bottom. The entire image feels like a recovered archival document—authoritative, historic, and slightly mysterious. Check ALTs for ideas ---",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6064,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1ca8dfb3ae7a4795b401973c20a2a82f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-184db96fbc1a6d-2cb768bd2e-320.webp",
          "640": "/prompt-template-images/tpl-184db96fbc1a6d-2cb768bd2e-640.webp",
          "960": "/prompt-template-images/tpl-184db96fbc1a6d-2cb768bd2e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:14:51.429Z"
    },
    {
      "id": "tpl-94dea4e94d546a",
      "slug": "vintage-tarot-card-deck-collection-full-set-illustration",
      "title": "Vintage Tarot Card Deck Collection - Full Set Illustration",
      "prompt": "trying to push Google Nano Banana Pro to its limits. asked for a complete 78-card tarot deck. one prompt. it delivered ---",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6082,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/91e2fe3633cf4bfba9157df0f1765178.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-94dea4e94d546a-72241821ae-320.webp",
          "640": "/prompt-template-images/tpl-94dea4e94d546a-72241821ae-640.webp",
          "960": "/prompt-template-images/tpl-94dea4e94d546a-72241821ae-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:15:02.402Z"
    },
    {
      "id": "tpl-d055a3b09131aa",
      "slug": "historic-nyc-flatiron-building-and-1910s-cars-woodrow-wilson",
      "title": "Historic NYC Flatiron Building & 1910s Cars - Woodrow Wilson",
      "prompt": "After seeing folks visualize coordinates, we tried the prompt “Visualize 40.7422° N, 73.9880° W in 1916” and reran it several times, adding a decade with each go. Here’s a GIF compilation: ---",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6099,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/06205ac3c2b140be8eaa26566d578925.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d055a3b09131aa-e66aef3467-320.webp",
          "640": "/prompt-template-images/tpl-d055a3b09131aa-e66aef3467-640.webp",
          "960": "/prompt-template-images/tpl-d055a3b09131aa-e66aef3467-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:15:13.079Z"
    },
    {
      "id": "tpl-227e60f1601f34",
      "slug": "vintage-sepia-portrait-two-women-in-1930s-fashion",
      "title": "Vintage Sepia Portrait: Two Women in 1930s Fashion",
      "prompt": "Imagine you are a professional photo restorer. Restore this photo perfectly. Make it sharp and improve resolution. Get rid of scratches. Make it a way it would look if it was taken now. Photo of my great-grandmother. I use Google Nano Banana Pro in Adobe Firefly app. ---",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6115,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/103e31d016324c08bab86eb60118cbb3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-227e60f1601f34-0297fb1715-320.webp",
          "640": "/prompt-template-images/tpl-227e60f1601f34-0297fb1715-640.webp",
          "960": "/prompt-template-images/tpl-227e60f1601f34-0297fb1715-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:15:34.909Z"
    },
    {
      "id": "tpl-0bd3a08af45d51",
      "slug": "d-day-landing-wwii-soldiers-omaha-beach-black-white-photo",
      "title": "D-Day Landing WWII Soldiers Omaha Beach Black White Photo",
      "prompt": "\"create an image at [COORDINATES], [DATE & TIME].\" ---",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6133,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7806196cfa3848a6b4ecac679f0a2dae.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0bd3a08af45d51-d18b49b91d-320.webp",
          "640": "/prompt-template-images/tpl-0bd3a08af45d51-d18b49b91d-640.webp",
          "960": "/prompt-template-images/tpl-0bd3a08af45d51-d18b49b91d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:15:55.259Z"
    },
    {
      "id": "tpl-3faed06cd535d8",
      "slug": "big-lebowski-pixel-art-dude-walter-retro-game-screen",
      "title": "Big Lebowski Pixel Art: Dude, Walter, Retro Game Screen",
      "prompt": "Have fun! Share your bests. ---",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6149,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a76d84a9e44a4dad9a68c423d0699c06.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3faed06cd535d8-5f004b6909-320.webp",
          "640": "/prompt-template-images/tpl-3faed06cd535d8-5f004b6909-640.webp",
          "960": "/prompt-template-images/tpl-3faed06cd535d8-5f004b6909-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:16:05.783Z"
    },
    {
      "id": "tpl-4bc8827b5e4c8b",
      "slug": "candid-90s-party-photo-young-man-laughing-red-eye",
      "title": "Candid 90s Party Photo | Young Man Laughing, Red-Eye",
      "prompt": "A flash photography snapshot taken on a disposable camera in 1998. A man at a chaotic house party. Red-eye effect, harsh shadows, motion blur, and film grain. The composition is slightly tilted and messy. ---",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "📻 Vintage & Retro",
      "sourceLine": 6165,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4b43e678d6ae4f0a94db6869da1b0d69.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4bc8827b5e4c8b-3d4befeee8-320.webp",
          "640": "/prompt-template-images/tpl-4bc8827b5e4c8b-3d4befeee8-640.webp",
          "960": "/prompt-template-images/tpl-4bc8827b5e4c8b-3d4befeee8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:16:16.398Z"
    },
    {
      "id": "tpl-43efe91a4b8d01",
      "slug": "vintage-anatomic-book-plate-by-livybabie",
      "title": "Vintage Anatomic Book Plate (by @livybabie)",
      "prompt": "Edit the provided image into an antique anatomical book plate. Preserve the original character's pose, camera angle, body proportions, silhouette, gesture, and overall composition as closely as possible, but transform the subject into a refined anatomical study illustration. The final image should look like a vintage medical anatomy textbook page printed on aged ivory paper, with sepia stains, subtle paper fibers, worn edges, faint foxing marks, and archival ink texture. Convert the visible body into a clean anatomical sketch that reveals bones, superficial muscles, tendons, ligaments, and selected organ silhouettes in a didactic, non-gory, museum-quality style. Keep the anatomy elegant and",
      "category": "复古与怀旧",
      "categorySlug": "retro-nostalgia",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5599,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-bcfaf9a0692de7",
      "slug": "gemini-google-nano-banana-pro-7a8d9d",
      "title": "Gemini Google Nano Banana Pro",
      "prompt": "Create a hyper-realistic portrait of a cute Asian woman. She is sitting with her chin resting on her hand at a dark wooden table in front of a vintage-style café. Fashion & Outfit: She wears a shiny black leather jacket, slightly open to reveal a white inner top, showing a beautiful neckline. Matched with a fitted black mini-skirt set. She also wears black fishnet stockings. Add a fluffy fur hat over her outfit. Background: In front of a marble-grey café exterior, decorated with a Christmas theme. Include a realistic Christmas tree, pine decorations, and festive ornaments. Lighting & Tone: Warm orange tungsten lighting for an inviting, cozy atmosphere, combined with a strong direct flash hit",
      "category": "其他",
      "categorySlug": "others",
      "rawCategory": "✨ Miscellaneous",
      "sourceLine": 7276,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/36fec9a8ab0f45d0855594733a07d4f5.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-bcfaf9a0692de7-9e76ca4434-320.webp",
          "640": "/prompt-template-images/tpl-bcfaf9a0692de7-9e76ca4434-640.webp",
          "960": "/prompt-template-images/tpl-bcfaf9a0692de7-9e76ca4434-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:22:50.216Z"
    },
    {
      "id": "tpl-4e202c3b148fed",
      "slug": "google-nano-banana-pro",
      "title": "Google Nano Banana Pro",
      "prompt": "Google Nano Banana Pro。long sleeves, contrasting gold upper section, rhinestone accents；long sleeves, sparkly embellishments, lighter decorative pattern on chest；long sleeves with mesh and rhinestone accents, light gradient design on torso。",
      "category": "其他",
      "categorySlug": "others",
      "rawCategory": "✨ Miscellaneous",
      "sourceLine": 7007,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1bcd630768fe48aa9a8738a363fd38c1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4e202c3b148fed-467e54c376-320.webp",
          "640": "/prompt-template-images/tpl-4e202c3b148fed-467e54c376-640.webp",
          "960": "/prompt-template-images/tpl-4e202c3b148fed-467e54c376-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:22:09.939Z"
    },
    {
      "id": "tpl-4bec004d0960f6",
      "slug": "gemini-google-nano-banana-pro",
      "title": "Gemini Google Nano Banana Pro",
      "prompt": "Gemini Google Nano Banana Pro。Right hand raised near face, showing manicured nails with red French tips；Lying on stomach, propped up on elbows, legs raised and crossed at the ankles behind her；Warm, indoor ambient lighting。",
      "category": "其他",
      "categorySlug": "others",
      "rawCategory": "✨ Miscellaneous",
      "sourceLine": 7145,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b472a5da78c44133b647220dbfc3fd72.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-4bec004d0960f6-e7e7a76a2b-320.webp",
          "640": "/prompt-template-images/tpl-4bec004d0960f6-e7e7a76a2b-640.webp",
          "960": "/prompt-template-images/tpl-4bec004d0960f6-e7e7a76a2b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:22:19.841Z"
    },
    {
      "id": "tpl-cc85e93212c821",
      "slug": "gemini-google-nano-banana-pro-532274",
      "title": "Gemini Google Nano Banana Pro",
      "prompt": "Gemini Google Nano Banana Pro。dewy skin, defined eyebrows, long eyelashes, rosy blush, glossy lips；standing, hands pressed to cheeks, making a kissy face with eyes closed；long, wavy, silver grey hair, parted in the middle, falling over shoulders。",
      "category": "其他",
      "categorySlug": "others",
      "rawCategory": "✨ Miscellaneous",
      "sourceLine": 7185,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-817f79843dcc46",
      "slug": "modern-apple-store-in-urban-cityscape-minimalist-design",
      "title": "Modern Apple Store in Urban Cityscape - Minimalist Design",
      "prompt": "Modern Apple Store in Urban Cityscape - Minimalist Design。minimalist modern architecture with bold geometric shape；busy urban lifestyle, premium commercial vibe；luxury brand pop-up store。",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 5025,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bccaccf04a7c42229eccd944f54dea55.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-817f79843dcc46-bd8faca486-320.webp",
          "640": "/prompt-template-images/tpl-817f79843dcc46-bd8faca486-640.webp",
          "960": "/prompt-template-images/tpl-817f79843dcc46-bd8faca486-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:09:46.210Z"
    },
    {
      "id": "tpl-d471a6ceac0568",
      "slug": "hagia-sophia-istanbul-aerial-golden-hour-cityscape-bosphorus",
      "title": "Hagia Sophia Istanbul Aerial Golden Hour Cityscape Bosphorus",
      "prompt": "Hagia Sophia Istanbul Aerial Golden Hour Cityscape Bosphorus。If {INSERT_TIME_OF_DAY} is empty, default to golden hour daytime.；If {INSERT_WEATHER_CONDITION} is empty, default to a perfect golden hour sunset atmosphere with clear skies, warm tones and maximum natural visibility.；Lighting must follow physical laws. Golden hour must produce soft warm light, long shadows and real color temperature transitions. Night lighting must follow authentic ambient and artificial light patterns from the actual location.",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 5097,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f92de00535234014acdb56c1f70e4982.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d471a6ceac0568-e256ed10ee-320.webp",
          "640": "/prompt-template-images/tpl-d471a6ceac0568-e256ed10ee-640.webp",
          "960": "/prompt-template-images/tpl-d471a6ceac0568-e256ed10ee-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:10:48.857Z"
    },
    {
      "id": "tpl-b1e6121417b9a2",
      "slug": "giant-3d-kitten-billboard-in-tokyo-cityscape-shibuya",
      "title": "Giant 3D Kitten Billboard in Tokyo Cityscape - Shibuya",
      "prompt": "An enormous L-shaped glasses-free 3D LED screen situated prominently at a bustling urban intersection, designed in an iconic architectural style reminiscent of Shinjuku in Tokyo or Taikoo Li in Chengdu. The screen displays a captivating glasses-free 3D animation featuring [scene description]. The characters and objects possess striking depth and appear to break through the screen’s boundaries, extending outward or floating vividly in mid-air. Under realistic daylight conditions, these elements cast lifelike shadows onto the screen’s surface and surrounding buildings. Rich in intricate detail and vibrant colors, the animation seamlessly integrates with the urban setting and the bright sky ove",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 5161,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/75cc1e37527d44d7b2213ecae125ee15.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b1e6121417b9a2-8bc260bf51-320.webp",
          "640": "/prompt-template-images/tpl-b1e6121417b9a2-8bc260bf51-640.webp",
          "960": "/prompt-template-images/tpl-b1e6121417b9a2-8bc260bf51-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:10:58.479Z"
    },
    {
      "id": "tpl-734ebc4301555b",
      "slug": "cinematic-3d-night-market-alley-rainy-urban-street-scene",
      "title": "Cinematic 3D Night Market Alley | Rainy Urban Street Scene",
      "prompt": "open source prompt to 3D. create and explore entire worlds with your imagination using Google Nano Banana. https://sharp-ml.vercel.app built with @cursor_ai in 1hr. contributions welcome! ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 5181,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5b977fd7c4a34f8aaa2d4af34ec4ef40.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-734ebc4301555b-e0328fe749-320.webp",
          "640": "/prompt-template-images/tpl-734ebc4301555b-e0328fe749-640.webp",
          "960": "/prompt-template-images/tpl-734ebc4301555b-e0328fe749-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:11:08.282Z"
    },
    {
      "id": "tpl-82a007a336bf3a",
      "slug": "city-evolution-byzantion-constantinople-istanbul-map",
      "title": "City Evolution: Byzantion, Constantinople, Istanbul Map",
      "prompt": "Epic 3D isometric atlas scene: a massive ancient map of [SUBJECT] erupts from an unfurled parchment scroll, filling nearly the entire frame. Ink lines ignite into living terrain: mountain ranges push upward, cities rise in vertical layers, rivers glow and flow, borders burn softly in gold. Multiple civilizations [CIVILIZATION LAYERS] coexist in stacked time, their architectures phasing through one another as if time is folding. A carved timeline spirals across the map with engraved dates. All text in [LANGUAGE]. Extreme scale contrast, dense micro-detail everywhere, dramatic golden-hour light, volumetric dust, cinematic depth, 8K, UE5. Check ALTs for ideas @AdobeFirefly ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 5201,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7c5acac7a6064d08815d9aa0566f2415.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-82a007a336bf3a-73db5dc871-320.webp",
          "640": "/prompt-template-images/tpl-82a007a336bf3a-73db5dc871-640.webp",
          "960": "/prompt-template-images/tpl-82a007a336bf3a-73db5dc871-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:11:29.288Z"
    },
    {
      "id": "tpl-78d32d5a664a39",
      "slug": "spectacular-dragon-fireworks-over-vibrant-city-skyline",
      "title": "Spectacular Dragon Fireworks over Vibrant City Skyline",
      "prompt": "Fireworks form the shape of [SUBJECT] in the night sky above a waterfront city. The design is inspired by the colors, proportions, and silhouette of [SUBJECT], clearly readable and visually striking against the dark sky. Long-exposure, photorealistic fireworks photography with smoke trails, city skyline silhouette, and colorful reflections on the water. Cinematic composition, sharp detail, ultra-high-resolution 4K. Check ALTs for ideas ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 5219,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e8f56d0bf5dc43f4bb565cc38e70a522.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-78d32d5a664a39-c5415caee1-320.webp",
          "640": "/prompt-template-images/tpl-78d32d5a664a39-c5415caee1-640.webp",
          "960": "/prompt-template-images/tpl-78d32d5a664a39-c5415caee1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:11:39.682Z"
    },
    {
      "id": "tpl-a06eb7e98eb6ee",
      "slug": "new-york-city-time-blend-vintage-20s-and-modern-times-square",
      "title": "New York City Time Blend: Vintage 20s & Modern Times Square",
      "prompt": "A horizontal split-screen cinematic shot of {Scene}, seamlessly blending two different eras: {Era_A} on the left and {Era_B} on the right (default: about 100 years ago vs. present day). On the left side ({Era_A}): show era-appropriate architecture, interior or environment design, materials, vehicles, and props that clearly belong to that historical period. People wear authentic clothing from {Era_A}, including hairstyles, accessories, and typical items in their hands (such as books, umbrellas, instruments, letters, newspapers, etc.). The overall mood feels nostalgic and historically accurate. On the right side ({Era_B}): show the same {Scene} in the modern era, with updated architecture or r",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 5237,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/37c947c32fdc4f649ea4ec39b6c80a86.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a06eb7e98eb6ee-06285b2dc4-320.webp",
          "640": "/prompt-template-images/tpl-a06eb7e98eb6ee-06285b2dc4-640.webp",
          "960": "/prompt-template-images/tpl-a06eb7e98eb6ee-06285b2dc4-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:11:51.142Z"
    },
    {
      "id": "tpl-d00ec1f27b16e2",
      "slug": "giant-3d-red-panda-digital-billboard-in-urban-cityscape",
      "title": "Giant 3D Red Panda Digital Billboard in Urban Cityscape",
      "prompt": "An enormous L-shaped glasses-free 3D LED screen situated prominently at a bustling urban intersection, designed in an iconic architectural style reminiscent of Shinjuku in Tokyo or Taikoo Li in Chengdu. The screen displays a captivating glasses-free 3D animation featuring [scene description]. The characters and objects possess striking depth and appear to break through the screen’s boundaries, extending outward or floating vividly in mid-air. Under realistic daylight conditions, these elements cast lifelike shadows onto the screen’s surface and surrounding buildings. Rich in intricate detail and vibrant colors, the animation seamlessly integrates with the urban setting and the bright sky ove",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 5266,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/98a2ddfa0c4647bfa7132d7364193a10.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d00ec1f27b16e2-fa8a108490-320.webp",
          "640": "/prompt-template-images/tpl-d00ec1f27b16e2-fa8a108490-640.webp",
          "960": "/prompt-template-images/tpl-d00ec1f27b16e2-fa8a108490-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:12:00.885Z"
    },
    {
      "id": "tpl-f43883136b5f30",
      "slug": "new-york-city-3d-render-isometric-nyc-skyline-and-weather",
      "title": "New York City 3D Render | Isometric NYC Skyline & Weather",
      "prompt": "Prompt ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 5286,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/11bca7f1b30440e0890800de93b0c7eb.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f43883136b5f30-46ffda19d7-320.webp",
          "640": "/prompt-template-images/tpl-f43883136b5f30-46ffda19d7-640.webp",
          "960": "/prompt-template-images/tpl-f43883136b5f30-46ffda19d7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:12:11.484Z"
    },
    {
      "id": "tpl-b54df22434aac5",
      "slug": "ar-interior-design-industrial-modern-living-room-on-phone",
      "title": "AR Interior Design: Industrial Modern Living Room on Phone",
      "prompt": "People are finding insane ways to create 3D renderings, impossible shots, and ultra realistic AI influencers. 10 examples + prompt. Bookmark this 1. Google Nano Banana -> World Labs -> WebAR (threejs) ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5308,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cbc8625f873643c48fb84c2791d7b781.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b54df22434aac5-2045de3097-320.webp",
          "640": "/prompt-template-images/tpl-b54df22434aac5-2045de3097-640.webp",
          "960": "/prompt-template-images/tpl-b54df22434aac5-2045de3097-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:12:22.191Z"
    },
    {
      "id": "tpl-98b2b729231c40",
      "slug": "beijing-7-day-travel-itinerary-illustrated-guide-to-landmarks",
      "title": "Beijing 7-Day Travel Itinerary: Illustrated Guide to Landmarks",
      "prompt": "This prompt generates a vibrant, child-like crayon-style vertical (9:16) travel-journal illustration for a {City Name} trip, automatically creating a winding route with daily recommended attractions, cute doodles, local landmarks, foods, and playful handwritten notes. The tone is warm, fun, and full of childlike curiosity. --- Prompt --- Please create a vibrant, child-like crayon-style vertical (9:16) illustration titled “{City Name} Travel Journal.” The artwork should look as if it were drawn by a curious child using colorful crayons, featuring a soft, warm light-toned background (such as pale yellow), combined with bright reds, blues, greens, and other cheerful colors to create a cozy, pla",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5328,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/38a051ca7aaa4625b1ab821560ee291b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-98b2b729231c40-1e17e0c159-320.webp",
          "640": "/prompt-template-images/tpl-98b2b729231c40-1e17e0c159-640.webp",
          "960": "/prompt-template-images/tpl-98b2b729231c40-1e17e0c159-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:12:33.324Z"
    },
    {
      "id": "tpl-7cf701e2fc9cde",
      "slug": "abstract-3d-render-minimalist-geometric-architectural-pattern",
      "title": "Abstract 3D Render: Minimalist Geometric Architectural Pattern",
      "prompt": "Professional architectural photography 4x4 grid showcasing identical room layout transformed through 16 distinct interior design styles. All furniture placement, room geometry, and spatial composition must exactly match the provided depth map reference. Camera: consistent 3/4 angle, 24mm tilt-shift lens, f/8, tripod-mounted. Only materials, colors, textures, and decorative elements change—never position or scale of objects.CRITICAL CONSTRAINT: Furniture placement, room dimensions, window/door positions, and all object locations must remain pixel-perfect identical to the reference depth map across all 16 frames. The silhouette and spatial arrangement cannot change. ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5412,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/20ed27978ece46899a87b1385e9971cf.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7cf701e2fc9cde-023a116187-320.webp",
          "640": "/prompt-template-images/tpl-7cf701e2fc9cde-023a116187-640.webp",
          "960": "/prompt-template-images/tpl-7cf701e2fc9cde-023a116187-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:12:44.528Z"
    },
    {
      "id": "tpl-e6b23d21054930",
      "slug": "empty-living-room-with-bay-window-and-hardwood-floor",
      "title": "Empty Living Room with Bay Window & Hardwood Floor",
      "prompt": "Show me how this room would look with furniture in it ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5428,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0ab6882722304a8f80e0a558f1359ab6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e6b23d21054930-b647cfdb4a-320.webp",
          "640": "/prompt-template-images/tpl-e6b23d21054930-b647cfdb4a-640.webp",
          "960": "/prompt-template-images/tpl-e6b23d21054930-b647cfdb4a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:12:56.270Z"
    },
    {
      "id": "tpl-d303e318130859",
      "slug": "luxury-home-interior-design-with-wood-and-herringbone-floor",
      "title": "Luxury Home Interior Design with Wood & Herringbone Floor",
      "prompt": "Did some experimenting and figured out the workflow for AI design transformations: Start with a base image of a room with no furniture. Then prompt on Google Nano Banana Pro to add what you'd like (e.g. a cool door frame, loft, or pool). Take to Veo 3.1 as your start and end frames. Prompt: \"time lapse construction, fast motion as a construction workers bring a tree into the living room and then construct the loft and add the couch and lights.\" ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5444,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/55db2d8eda8b4c5dbfeb74f3c80d52c2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d303e318130859-94d74e75cc-320.webp",
          "640": "/prompt-template-images/tpl-d303e318130859-94d74e75cc-640.webp",
          "960": "/prompt-template-images/tpl-d303e318130859-94d74e75cc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:13:27.532Z"
    },
    {
      "id": "tpl-3140a317d20e03",
      "slug": "16-diverse-living-room-interior-designs-and-home-decor-inspiration",
      "title": "16 Diverse Living Room Interior Designs & Home Decor Inspiration",
      "prompt": "Google Nano Banana Pro for interior design mood boards. 16 styles, same space, one prompt prompt (at the end of the conversation): https://claude.ai/share/4b94f588-c6ae-47d7-9b42-9d95a4df4fbd… ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5466,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c33fb82c54494f4abae132a6333af703.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3140a317d20e03-f131f68d74-320.webp",
          "640": "/prompt-template-images/tpl-3140a317d20e03-f131f68d74-640.webp",
          "960": "/prompt-template-images/tpl-3140a317d20e03-f131f68d74-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:13:47.211Z"
    },
    {
      "id": "tpl-52213e57bb2ba4",
      "slug": "dystopian-mega-corp-skyscraper-futuristic-architecture-concept",
      "title": "Dystopian Mega-Corp Skyscraper: Futuristic Architecture Concept",
      "prompt": "Step 2: Scale this object up by 5000%. It is now the headquarters for a villainous mega-corporation in a Brutalist concrete future. Analyze the geometry to create habitable floors.\" Step 3 Output: 2x2 Grid. Grid 1 & 2: Blueprints of the \"Object turned into Tower\" showing elevator shafts and executive suites. Grid 3: Eye-level street view looking up at the concrete mega-structure in rain and fog. Tiny people for scale. Neon cyberpunk signs attached to the exterior. Grid 4: Interior shot of the lobby, retaining the plastic curves of the original object but rendered in cold concrete and glass. ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5484,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7995151b59724a75970dd664d7298f91.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-52213e57bb2ba4-77ac39e10f-320.webp",
          "640": "/prompt-template-images/tpl-52213e57bb2ba4-77ac39e10f-640.webp",
          "960": "/prompt-template-images/tpl-52213e57bb2ba4-77ac39e10f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:14:06.882Z"
    },
    {
      "id": "tpl-7910ec70ca1b41",
      "slug": "taj-mahal-architecture-and-gardens-serene-reflection-pool-view",
      "title": "Taj Mahal Architecture & Gardens: Serene Reflection Pool View",
      "prompt": "Google Nano Banana Pro just measured the Taj Mahal's dimensions with near-perfect precision. SOTA image generation that understands engineering drawings, technical specs, and real-world measurements. I built a prompt that converts any photo into an engineering-grade schematic inside Google Nano Banana Pro on @higgsfield_ai for free. Want the prompt? Follow, like, repost, and comment “Prompt”. . . . ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5523,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/819896859a9d4bc290ac1bbae432f74d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7910ec70ca1b41-8b4a6e9a0d-320.webp",
          "640": "/prompt-template-images/tpl-7910ec70ca1b41-8b4a6e9a0d-640.webp",
          "960": "/prompt-template-images/tpl-7910ec70ca1b41-8b4a6e9a0d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:14:17.855Z"
    },
    {
      "id": "tpl-fa157d1039d02f",
      "slug": "modern-house-exterior-residential-architecture-and-yard",
      "title": "Modern House Exterior | Residential Architecture & Yard",
      "prompt": "في البداية خذ صورة مثل الأولى ، ثم استخدم (Google Nano Banana Pro) واكتب هذه المطالبة (Prompt): \"غير واجهة المبنى إلى واجهة مودرن جميلة، وأضف مسبحاً وجلسة خارجية في الحوش\". بعد ذلك، اختر (Veo 3.1) من Gemini ، وارفع الصورة الأولى والصورة الثانية التي عدلت عليها، واكتب هذه المطالبة: \"لقطة بتقنية التايم لابس للبناء، حركة سريعة لعمّال البناء وهم يعملون على واجهة المبنى ويغيرونها، وأيضاً يحفرون للمسبح ويتم تعبئته بالماء، وهم يضعون الجلسة العربية وبقية التعديلات\". سيظهر لك فيديو مثل البوست في المرفق. يا الله أرونا إبداعاتكم ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5549,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2e7c51ff75a04f2aae93e8b46791da74.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fa157d1039d02f-0f4563dca8-320.webp",
          "640": "/prompt-template-images/tpl-fa157d1039d02f-0f4563dca8-640.webp",
          "960": "/prompt-template-images/tpl-fa157d1039d02f-0f4563dca8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:14:28.455Z"
    },
    {
      "id": "tpl-35a994c205e70b",
      "slug": "giant-pencil-cityscape-surreal-urban-construction",
      "title": "Giant Pencil Cityscape: Surreal Urban Construction",
      "prompt": "Transform [EVERYDAY OBJECT] into a massive real-world monument. Surface materials are physically accurate, with visible wear, scratches, dust, and scale references like people and vehicles. Shot from a low-angle cinematic perspective, realistic daylight, ultra-detailed textures. ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6450,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/875217222d3e48c8b4554bf04203a8aa.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-35a994c205e70b-8692ad2c88-320.webp",
          "640": "/prompt-template-images/tpl-35a994c205e70b-8692ad2c88-640.webp",
          "960": "/prompt-template-images/tpl-35a994c205e70b-8692ad2c88-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:14:39.432Z"
    },
    {
      "id": "tpl-eb5507d86b3160",
      "slug": "istanbul-line-art-travel-poster-by-miilesus",
      "title": "Istanbul Line-Art Travel Poster (by @miilesus)",
      "prompt": "Create a minimalist ultra-high-resolution travel poster in line-art style for ISTANBUL, portraying the city as a stylish everyday urban scene rather than a tourist postcard. MAIN COMPOSITION: Central composition features Istanbul’s most iconic everyday urban scene — a lively tram street in Karaköy, Kadıköy, Beyoğlu, Eminönü, or a Bosphorus-side pedestrian avenue filled with daily life. Foreground includes local residents, commuters, ferry passengers, café visitors, simit sellers, students, cyclists, street musicians, and shoppers naturally interacting within the city. People should authentically reflect modern Istanbul street fashion, layered urban lifestyle, and contemporary Turkish culture",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3263,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e9deb1f5d3324035a6c79671f7b024a1.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-eb5507d86b3160-cc0764c106-320.webp",
          "640": "/prompt-template-images/tpl-eb5507d86b3160-cc0764c106-640.webp",
          "960": "/prompt-template-images/tpl-eb5507d86b3160-cc0764c106-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:15:00.536Z"
    },
    {
      "id": "tpl-e50b7db60dd9b2",
      "slug": "play-doh-city-editorial-by-goodmanprotocol",
      "title": "Play-Doh City Editorial (by @Goodmanprotocol)",
      "prompt": "Create an ultra-charming 3:4 editorial illustration of a five-year-old child sitting at a cozy craft table, happily building a handmade Play-Doh miniature [City Name]. The entire world must clearly look sculpted by a real child using colorful Play-Doh clay - soft rounded shapes, uneven geometry, tiny fingerprints, squished textures, slightly crooked buildings, playful proportions, imperfect symmetry, and adorable handcrafted charm. The miniature city should include recognizable landmarks, bridges, rivers, cafés, food stalls, apartment buildings, parks, trains, buses, tiny clay people, trees, clouds, and playful neighborhood scenes. Dense with delightful micro-details while remaining organize",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3644,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9ae1bd93df4a47d0a73f61458a99d42c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e50b7db60dd9b2-d83fab8cd4-320.webp",
          "640": "/prompt-template-images/tpl-e50b7db60dd9b2-d83fab8cd4-640.webp",
          "960": "/prompt-template-images/tpl-e50b7db60dd9b2-d83fab8cd4-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:15:21.635Z"
    },
    {
      "id": "tpl-245fbf8617c745",
      "slug": "isometric-travel-poster-by-iamaiistudio",
      "title": "Isometric Travel Poster (by @iamaiistudio)",
      "prompt": "Design a vertical retro mid-century travel poster of [CITY NAME] showcasing [LANDMARK]. Stick to a tight 3-color scheme: cream-toned paper background, black technical line drawing, plus one [COLOR] accent. Aesthetic: minimalist isometric top-down aerial perspective with very fine cross-hatching and silkscreen print grain. Color rules: fill the entire sky in flat solid [COLOR], add small [COLOR] touches on rooftops or street details. Zero gradients allowed. Typography: large bold sans-serif \"[CITY NAME]\" at the top in cream, with the city's name in its native language set smaller in cream beneath it. #AIart #GPTImage2",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3672,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cfcb5189ae2c4a0f9df1a45a9f0382c6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-245fbf8617c745-b4477b36cb-320.webp",
          "640": "/prompt-template-images/tpl-245fbf8617c745-b4477b36cb-640.webp",
          "960": "/prompt-template-images/tpl-245fbf8617c745-b4477b36cb-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:15:43.110Z"
    },
    {
      "id": "tpl-434340f882543f",
      "slug": "vintage-travel-postage-stamp-by-iamsofiaijaz",
      "title": "Vintage Travel Postage Stamp (by @iamsofiaijaz)",
      "prompt": "Vintage travel postage stamp design featuring [CITY / COUNTRY], ultra-detailed illustrated souvenir stamp, elegant art deco typography spelling “[NAME]” across the center in large ornate serif letters, iconic landmarks and skyline of [PLACE], traditional cultural architecture, scenic local elements, palm trees / boats / streets / mountains depending on location, warm cinematic lighting, soft pastel sky, retro airmail aesthetics, aged paper texture, engraved print style, luxurious vintage tourism poster feel, intricate ornamental borders, postal cancellation mark with local language and English text, “3.50 AED” denomination, symmetrical composition, highly detailed linework, muted [COLOR PALE",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3686,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2b0b418f0cd149e5b0930891ba750dd7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-434340f882543f-c6f25653d9-320.webp",
          "640": "/prompt-template-images/tpl-434340f882543f-c6f25653d9-640.webp",
          "960": "/prompt-template-images/tpl-434340f882543f-c6f25653d9-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:16:04.809Z"
    },
    {
      "id": "tpl-b3c8d9f02a192b",
      "slug": "floating-island-travel-poster-by-naiknelofar788",
      "title": "Floating Island Travel Poster (by @Naiknelofar788)",
      "prompt": "Create a premium 9:16 hyper-realistic travel-poster of [COUNTRY NAME] in the same style as a luxury editorial miniature-map diorama: show the country as a recognizable floating island map with dramatic cliff edges, crystal-clear water, soft clouds, and a pure white background. Use a clean, elegant poster layout with large culturally appropriate typography for “[COUNTRY NAME]” at the top, using a font style inspired by the country’s identity, history, script, or visual culture, plus a short refi",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3895,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7e3cec2ec7614e6caf32716eebbc776a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b3c8d9f02a192b-e91a4ad8ac-320.webp",
          "640": "/prompt-template-images/tpl-b3c8d9f02a192b-e91a4ad8ac-640.webp",
          "960": "/prompt-template-images/tpl-b3c8d9f02a192b-e91a4ad8ac-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:16:15.873Z"
    },
    {
      "id": "tpl-76105d0ca46d2a",
      "slug": "vintage-monochrome-city-travel-poster-by-taaruk",
      "title": "Vintage Monochrome City Travel Poster (by @Taaruk_)",
      "prompt": "Vintage monochrome city travel poster illustration, detailed urban sketch aesthetic, clean architectural line art mixed with soft watercolor shading, modern Southeast Asian city atmosphere, minimalist green-and-cream color palette, elegant travel poster typography, large bold city name at the top, bilingual typography with Asian characters, highly detailed street life scene, busy urban crossroads, flyovers, buses, motorcycles, cafes, local restaurants, pedestrians crossing streets, shopping mall",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3908,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8430eca92d1843c58e576a0d4d01e432.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-76105d0ca46d2a-aa8e67668d-320.webp",
          "640": "/prompt-template-images/tpl-76105d0ca46d2a-aa8e67668d-640.webp",
          "960": "/prompt-template-images/tpl-76105d0ca46d2a-aa8e67668d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:16:27.303Z"
    },
    {
      "id": "tpl-7e08960f4819ba",
      "slug": "flat-vector-city-lifestyle-collage-by-goodmanprotocol",
      "title": "Flat-Vector City Lifestyle Collage (by @Goodmanprotocol)",
      "prompt": "Create a sophisticated flat-vector editorial pattern illustration of [Melbourne], composed as a seamless lifestyle-art collage combining iconic landmarks, local culture, vacation scenes, and symbolic city objects.",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3921,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/59d60d73f9524241ad471fe5ffe61530.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7e08960f4819ba-8aaff5f453-320.webp",
          "640": "/prompt-template-images/tpl-7e08960f4819ba-8aaff5f453-640.webp",
          "960": "/prompt-template-images/tpl-7e08960f4819ba-8aaff5f453-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:16:39.949Z"
    },
    {
      "id": "tpl-35af9c4db194da",
      "slug": "vintage-travel-collage-poster-by-sdhilip",
      "title": "Vintage Travel Collage Poster (by @sdhilip)",
      "prompt": "Vintage mixed-media travel collage poster, portrait orientation, themed around [COUNTRY].",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3963,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/3d0977aa1bab43478496e4bf1aef8320.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-35af9c4db194da-d72cf25c2f-320.webp",
          "640": "/prompt-template-images/tpl-35af9c4db194da-d72cf25c2f-640.webp",
          "960": "/prompt-template-images/tpl-35af9c4db194da-d72cf25c2f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:16:49.475Z"
    },
    {
      "id": "tpl-1f3933e7bc73ea",
      "slug": "premium-travel-infographic-poster-by-ankit-patel211",
      "title": "Premium Travel Infographic Poster (by @Ankit_patel211)",
      "prompt": "Create an ultra-premium editorial travel infographic poster about FRANCE in a clean vertical 3:4 ratio.",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3976,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2941f65e6ea44480b4c87d41015b9762.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1f3933e7bc73ea-2c244a55d2-320.webp",
          "640": "/prompt-template-images/tpl-1f3933e7bc73ea-2c244a55d2-640.webp",
          "960": "/prompt-template-images/tpl-1f3933e7bc73ea-2c244a55d2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:17:00.771Z"
    },
    {
      "id": "tpl-f254b94d81eea5",
      "slug": "travel-food-advertisement-poster-by-naiknelofar788",
      "title": "Travel Food Advertisement Poster (by @Naiknelofar788)",
      "prompt": "Ultra-detailed premium travel-food advertisement poster for [CITY/COUNTRY], vertical composition, inspired by luxury Lay’s-style chips advertising. A realistic chips packet placed at the bottom center as the main hero object, matching the exact premium commercial layout of a floating chips campaign.",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4139,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/233faaa2f58e43a298e6932c49c6407a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f254b94d81eea5-5e0450bf62-320.webp",
          "640": "/prompt-template-images/tpl-f254b94d81eea5-5e0450bf62-640.webp",
          "960": "/prompt-template-images/tpl-f254b94d81eea5-5e0450bf62-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:17:10.549Z"
    },
    {
      "id": "tpl-5c1ed4864bda6c",
      "slug": "vintage-watercolor-travel-poster-by-taaruk",
      "title": "Vintage Watercolor Travel Poster (by @Taaruk_)",
      "prompt": "Minimalist vintage travel poster in delicate watercolor and ink sketch style, elegant European travel illustration, soft neutral tones on textured ivory paper background, hand-painted cityscape with loose watercolor washes, fine architectural pen linework, cozy café storefronts, bicycles, cobblestone streets, flower-filled balconies, classic street lamps, soft atmospheric perspective, cinematic morning light, dreamy travel journal aesthetic, sophisticated typography layout with large serif country/city title at the top, handwritten subtitle and poetic tagline, small passport-style stamps, elegant editorial composition, airy negative space, timeless travel magazine design. Scene variations: •",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4152,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/59f23fc76d9a4fdfb36bd8bd73aea5bd.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5c1ed4864bda6c-edd5ab3fbb-320.webp",
          "640": "/prompt-template-images/tpl-5c1ed4864bda6c-edd5ab3fbb-640.webp",
          "960": "/prompt-template-images/tpl-5c1ed4864bda6c-edd5ab3fbb-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:17:22.173Z"
    },
    {
      "id": "tpl-df718b77e1ad43",
      "slug": "watercolor-european-travel-poster-prompt",
      "title": "Watercolor European Travel Poster [Prompt**:]",
      "prompt": "Elegant European city street travel poster, delicate watercolor and ink sketch illustration, hand-drawn architectural linework, soft pastel washes, urban streetscape with historic buildings, charming cafés, pedestrians strolling, outdoor terraces, detailed balconies, trees and flower boxes, loose expressive brushstrokes, architectural journal sketch style, travel diary aesthetic, white paper texture, minimal background, subtle paint splashes, fine pen outlines, sophisticated composition, light and airy atmosphere, vintage travel book illustration, high-detail watercolor rendering, muted earthy palette, European old-town charm, artistic perspective drawing, editorial illustration, premium sta",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4440,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/76de7f10d55e48838778b85b54dbec1a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-df718b77e1ad43-371f4312a6-320.webp",
          "640": "/prompt-template-images/tpl-df718b77e1ad43-371f4312a6-640.webp",
          "960": "/prompt-template-images/tpl-df718b77e1ad43-371f4312a6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:17:32.311Z"
    },
    {
      "id": "tpl-a58d306453abab",
      "slug": "miniature-city-travel-card-by-goodmanprotocol",
      "title": "Miniature City Travel Card (by @Goodmanprotocol)",
      "prompt": "Create a premium collectible travel-card illustration in vertical 4:5 format inspired by [CITY] and [COUNTRY]. A hand holding a beautifully designed collectible [CITY] travel card featuring elegant [LOCAL CULTURE / REGIONAL DESIGN]-inspired design (metro pass / museum pass / boarding pass / postcard / passport page / vintage travel ticket / luggage tag). Attached to and organically emerging from the card is a highly detailed miniature [ICONIC LANDMARK] souvenir charm or classic [CITY] toy object, naturally integrated into the scene as part of the collectible item — not simply placed on top. The miniature object transforms into and reveals a tiny immersive [CITY] world filled with iconic [CIT",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4539,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a2cb0f5432ff43c19d1250b864a35bef.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a58d306453abab-398e097135-320.webp",
          "640": "/prompt-template-images/tpl-a58d306453abab-398e097135-640.webp",
          "960": "/prompt-template-images/tpl-a58d306453abab-398e097135-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:17:43.166Z"
    },
    {
      "id": "tpl-88121561e253ee",
      "slug": "landmark-miniature-diorama-by-iamaiistudio",
      "title": "Landmark Miniature Diorama (by @iamaiistudio)",
      "prompt": "Isometric miniature diorama of [LANDMARK NAME], capturing its real-world structure and proportions on a small floating platform, surrounded by buildings and landscape details from [CITY / COUNTRY]. Physically accurate materials including stone, concrete, metal, and glass. True-to-life color palette, muted and realistic tones matching the actual landmark. Off-white studio background with soft natural lighting, gentle shadows, and clean composition. High-detail 3D render, premium architectural model aesthetic, no people, no text.",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4756,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/43babe3095db4afbbecf6023f756d7fb.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-88121561e253ee-eee58f3684-320.webp",
          "640": "/prompt-template-images/tpl-88121561e253ee-eee58f3684-640.webp",
          "960": "/prompt-template-images/tpl-88121561e253ee-eee58f3684-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:17:54.746Z"
    },
    {
      "id": "tpl-dfe19114d38137",
      "slug": "pastel-paper-collage-travel-poster-by-ciri-ai",
      "title": "Pastel Paper-Collage Travel Poster (by @Ciri_ai)",
      "prompt": "Create a refined wide landscape illustration of [CITY/SUBJECT], naturally featuring [ICONIC LANDMARK] as the main recognizable visual anchor. CORE STYLE: Depict [SUBJECT] as a calm, elegant, highly stylized scene in a toned-down pastel paper-collage poster style. The scene should feel minimal, clean, poetic, modern, cultured, leisurely, and softly cheerful rather than realistic. COMPOSITION: Use a spacious horizontal composition. Place [MAIN SUBJECT] as the central focus, clearly recognizable through its iconic [DISTINCTIVE FEATURES] rising above the layered scene. Surround it with simplified [CONTEXTUAL ELEMENTS]. Reinterpret in highly stylized illustrated forms using clean geometric shapes",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4782,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c9b02cc93a494bb0b383cac715cdc661.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-dfe19114d38137-7c2b1f81d1-320.webp",
          "640": "/prompt-template-images/tpl-dfe19114d38137-7c2b1f81d1-640.webp",
          "960": "/prompt-template-images/tpl-dfe19114d38137-7c2b1f81d1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:18:04.541Z"
    },
    {
      "id": "tpl-e8d6ba727addb1",
      "slug": "retro-automotive-travel-poster-template-by-iamaiistudio",
      "title": "Retro Automotive Travel Poster Template (by @iamaiistudio)",
      "prompt": "prompt: Create a vertical retro automotive travel poster featuring [CAR MODEL] either parked or driving through [SCENERY]. Use a bold 1970s printmaking style with a strict 4-color palette only: [COLORS]. Build the image with flat silkscreen-style color blocking, strong contrast shadows, simplified geometric reflections, slight ink misregistration, subtle paper grain, distressed print texture, and graphic halftone shading. Avoid gradients, photorealism, glossy 3D rendering, and modern digital polish. The car should feel iconic and graphic, with thick simplified contour shapes and a warm nostalgic travel-ad atmosphere. Include vintage advertisement typography that reads \"[TITLE]\" and integrate",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4904,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e4eb046a7bbd42d4ba1fbce67e2bdd8a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e8d6ba727addb1-b90656170e-320.webp",
          "640": "/prompt-template-images/tpl-e8d6ba727addb1-b90656170e-640.webp",
          "960": "/prompt-template-images/tpl-e8d6ba727addb1-b90656170e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:18:15.731Z"
    },
    {
      "id": "tpl-f34219c6c279c2",
      "slug": "3d-travel-ticket-by-aiwithkhan",
      "title": "3D Travel Ticket (by @AIwithkhan)",
      "prompt": "Photorealistic 3D travel ticket concept, a close-up human hand holding a large vintage “NYC All Access Pass” ticket in front of a clean cream-colored background. The ticket acts as a portal window into New York City, revealing a detailed miniature Manhattan street scene inside the cutout frame. A realistic yellow NYC taxi emerges out of the ticket in 3D onto a floating road platform, creating a pop-out effect. The Empire State Building rises dramatically behind the ticket, with hand-drawn sketch illustrations of the Statue of Liberty, Brooklyn Bridge, Broadway sign, and coffee cup surrounding the composition. Premium paper texture, cinematic lighting, warm golden-hour tones, ultra-detailed m",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5682,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/16bd59f7126a40cebbc3ab1dc9ac509b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f34219c6c279c2-4a2f14e4bf-320.webp",
          "640": "/prompt-template-images/tpl-f34219c6c279c2-4a2f14e4bf-640.webp",
          "960": "/prompt-template-images/tpl-f34219c6c279c2-4a2f14e4bf-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:18:28.204Z"
    },
    {
      "id": "tpl-45e826b37ef72b",
      "slug": "travel-planning-tabletop-scene-by-naiknelofar788",
      "title": "Travel Planning Tabletop Scene (by @Naiknelofar788)",
      "prompt": "A premium travel-planning tabletop scene for [LOCATION], photographed from a slightly elevated angle. A detailed map of [LOCATION] lies on a warm wooden desk under a cozy black desk lamp. Emerging from the map are handcrafted papercraft landmarks, iconic attractions, landscapes, and cultural highlights from [LOCATION], positioned in their approximate geographic locations. A tiny traveler character with a backpack and rolling suitcase follows a dotted red journey route across the map, creating a visual story of exploration. The traveler is mid-journey between destinations. A modern smartphone displays a \"[LOCATION] eSIM\" travel connectivity screen. Around the map are travel-planning accessori",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5780,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/35eda087cff24dc58aa967503c6c814b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-45e826b37ef72b-2f75d45a8c-320.webp",
          "640": "/prompt-template-images/tpl-45e826b37ef72b-2f75d45a8c-640.webp",
          "960": "/prompt-template-images/tpl-45e826b37ef72b-2f75d45a8c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:18:37.964Z"
    },
    {
      "id": "tpl-559b20a8993886",
      "slug": "travel-food-postcard-template-by-naiknelofar788",
      "title": "Travel Food Postcard Template (by @Naiknelofar788)",
      "prompt": "Create a hyper-realistic travel-food postcard scene. INPUTS: City: [CITY NAME] Local Delicacy: [LOCAL DELICACY] Background Location: [BACKGROUND LOCATION OR LANDMARK] SCENE: A real human hand is holding a vintage travel postcard in the foreground. Inside the postcard is a large, beautifully styled, ultra-realistic food photograph of [LOCAL DELICACY], captured like premium food advertising. The dish should appear larger than life, with rich textures, realistic details, appetizing presentation, natural lighting, subtle steam, shallow depth of field, and cinematic food photography. A single miniature traveler wearing a backpack sits naturally on the top edge of the postcard with legs dangling o",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6344,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/3a601679e3b04f5a85bd4c9aeea9b3c8.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-559b20a8993886-f08bbb73bc-320.webp",
          "640": "/prompt-template-images/tpl-559b20a8993886-f08bbb73bc-640.webp",
          "960": "/prompt-template-images/tpl-559b20a8993886-f08bbb73bc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:18:49.779Z"
    },
    {
      "id": "tpl-c5500a35aac465",
      "slug": "country-stylized-travel-poster-collage-by-iamaiistudio",
      "title": "Country Stylized Travel Poster Collage (by @iamaiistudio)",
      "prompt": "Full prompt: Design a stylized travel poster / graphic collage featuring [ALGERIA]. The central figure is a fashionable international tourist in [ALGERIA], visually distinct as a visitor rather than a local. Show the tourist in modern travel attire, with accessories like a camera, backpack, sunglasses, map, or suitcase, immersed in the culture and vibe of [ALGERIA]. Arrange the tourist in a bold composition surrounded by iconic buildings, streets, scenery, landmarks, transport, cuisine, signage, and cultural details specific to [ALGERIA]. Combine realistic character rendering with a graphic collage background featuring layered paper textures, torn poster edges, sticker accents, halftone dots",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6454,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ae93abb1a98946598915f26fd347c066.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c5500a35aac465-ec786f6f2e-320.webp",
          "640": "/prompt-template-images/tpl-c5500a35aac465-ec786f6f2e-640.webp",
          "960": "/prompt-template-images/tpl-c5500a35aac465-ec786f6f2e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:19:00.614Z"
    },
    {
      "id": "tpl-44976e9ce93988",
      "slug": "cozy-autumn-couple-illustration-in-city-street-scene",
      "title": "Cozy Autumn Couple Illustration in City Street Scene",
      "prompt": "Cozy Autumn Couple Illustration in City Street Scene。Hand-drawn colored pencil illustration with clean line art and slightly rough pencil outlines, combined with soft watercolor wash textures. Bright pastel colors, lighter and more vivid tones with natural saturation. Visible pencil strokes layered with subtle watercolor gradients. Warm and friendly tone, semi-cartoon realistic proportions. Simple facial features with dot eyes and small smiles. Flat yet detailed coloring, minimal shadows, soft highlights. Storybook illustration feel, cozy and cheerful atmosphere, children-book style, high clarity, no realism, no photo texture.；Illustration style: hand-drawn colored pencil illustration, clean line art with slightly rough pencil outlines, soft pastel coloring with increased brightness, lighter and more vivid color tones, enhanced saturation while staying natural, visible pencil strokes and。",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🌃 Urban Cityscapes",
      "sourceLine": 4920,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-28aed857856000",
      "slug": "art-studio-oil-painting-with-infinite-loop-and-easels",
      "title": "Art Studio Oil Painting with Infinite Loop & Easels",
      "prompt": "A shorthand prompt you can use to make recursive images with Google Nano Banana Pro is \"Droste effect\". > Droste effect without photography or people ---",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🏛️ Architecture & Interiors",
      "sourceLine": 5505,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-1fa26dd9432fef",
      "slug": "miniature-travel-world-poster-by-goodmanprotocol",
      "title": "Miniature Travel World Poster (by @Goodmanprotocol)",
      "prompt": "A cinematic hyper-detailed miniature travel diorama resting inside an open human palm, themed around [CITY/COUNTRY NAME] tourism and travel. A realistic passport and official travel visa card stand upright in the center of a tiny landscape inspired by the destination, surrounded by miniature travelers with luggage, scattered suitcases, local vegetation, iconic cultural elements, and detailed environmental textures matching the location. In the background, the famous skyline and landmark architecture of [CITY/COUNTRY NAME] rise softly with atmospheric depth, while the national flag waves beside the documents. A commercial airplane flies overhead in a bright blue sky with soft clouds. Ultra-re",
      "category": "城市与建筑空间",
      "categorySlug": "city-architecture-space",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3602,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-deb4afd48b6fb9",
      "slug": "one-prompt-ui-design-generation-by-austinit",
      "title": "One-Prompt UI Design Generation (by @austinit)",
      "prompt": "用这种风格帮我生成一套UI设计系统,包含网页、移动端、卡片、控件、按钮 以及其它",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7661,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a21aad562d6f49a6a220bc2c7ecaa535.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-deb4afd48b6fb9-208a35c792-320.webp",
          "640": "/prompt-template-images/tpl-deb4afd48b6fb9-208a35c792-640.webp",
          "960": "/prompt-template-images/tpl-deb4afd48b6fb9-208a35c792-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:30:17.035Z"
    },
    {
      "id": "tpl-17445bf84c98e5",
      "slug": "cyberpunk-neon-ui-design-system-by-azlnfvp",
      "title": "Cyberpunk Neon UI Design System (by @AZLnfvp)",
      "prompt": "用未来都市风格生成UI设计系统,灵感来自赛博朋克城市夜景,包含霓虹灯、玻璃建筑反射、高对比光影,配色以紫色、蓝色、粉色霓虹为主,设计网页Dashboard、移动端界面、卡片、按钮、控件等,视觉炫酷、层次丰富、科技感极强",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7674,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/87bc6b7097444b3e9b328c529de1686f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-17445bf84c98e5-0110f22d95-320.webp",
          "640": "/prompt-template-images/tpl-17445bf84c98e5-0110f22d95-640.webp",
          "960": "/prompt-template-images/tpl-17445bf84c98e5-0110f22d95-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:30:28.004Z"
    },
    {
      "id": "tpl-315838c5776971",
      "slug": "12-panel-storyboard-poster-by-bmx-ai13",
      "title": "12-Panel Storyboard Poster (by @bmx_ai13)",
      "prompt": "A super simple workflow: 2 character images → GPT Image 2.0 storyboard → Seedance 2.0 animation. Just upload two character images and use the prompt below in GPT Image 2.0 to generate a full storyboard on a single page. Prompt: Create a clean, colorful storyboard poster in a 3x4 grid layout with 12 panels on a single page. Title at the top: \"[MAIN TITLE]\" Each panel must include: a scene number in a small circle, a short scene title, a colorful illustrated image, a 1-2 line description under the image. Main characters must remain visually consistent across all 12 panels: Character 1: [describe main character in detail] Character 2: [describe second character in detail] Theme/story: [overall",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7687,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/917aeb1d1ade462fabf048a5d566dc21.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-315838c5776971-7b197d3458-320.webp",
          "640": "/prompt-template-images/tpl-315838c5776971-7b197d3458-640.webp",
          "960": "/prompt-template-images/tpl-315838c5776971-7b197d3458-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:30:38.221Z"
    },
    {
      "id": "tpl-617020c3776ce8",
      "slug": "handwritten-study-infographic-poster-by-yazoraiz",
      "title": "Handwritten Study Infographic Poster (by @YaZoraiz)",
      "prompt": "Aesthetic handwritten study infographic poster designed like a beautifully organized digital-notebook page, soft pastel color palette with gentle tones of baby pink, sky blue, mint green, lavender, and soft yellow highlights. The background is a realistic notebook paper grid texture with subtle shadows and paper grain for authenticity. The layout is clean and structured like high-quality study notes, featuring neatly written handwritten-style typography in smooth black ink and blue pen. Content is arranged in well-spaced bullet points, numbered sections, and small boxed highlights for key information. Important words are emphasized using pastel highlighter strokes in pink, yellow, and light",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7701,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f48c0d7779154d80a54f5169e284adb0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-617020c3776ce8-63f5551fef-320.webp",
          "640": "/prompt-template-images/tpl-617020c3776ce8-63f5551fef-640.webp",
          "960": "/prompt-template-images/tpl-617020c3776ce8-63f5551fef-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:30:59.005Z"
    },
    {
      "id": "tpl-cbe3e0cfff3c64",
      "slug": "brand-identity-moodboard-system-by-saasjunctionhq",
      "title": "Brand Identity Moodboard System (by @SaasJunctionHQ)",
      "prompt": "Full-blown brand identity system [BRAND NAME] — Brand Identity Moodboard STEP 1 — DECODE THE BRAND Extract from real brand guidelines only: - Colors: full official palette (primary, secondary, neutrals, accents) — exact, no approximations - Type: weight, width, tracking, capitalization character — applied identically across all cards - Copy: real slogans, campaigns, product names, manifesto phrases — zero invented text - World: the domain (sport / tech / fashion / music / etc.) — all imagery stays inside it STEP 2 — OUTPUT Single 16:9 flat image. Black (#000–#0A0A0A) background. 8 cards in an asymmetric 3-column grid. Uniform 8–12px gaps. Rounded corners 8–12px. Every card uses only Step 1 c",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7722,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0c738eef356449ee8428a09f82d8f89b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-cbe3e0cfff3c64-4356415a4f-320.webp",
          "640": "/prompt-template-images/tpl-cbe3e0cfff3c64-4356415a4f-640.webp",
          "960": "/prompt-template-images/tpl-cbe3e0cfff3c64-4356415a4f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:31:32.867Z"
    },
    {
      "id": "tpl-3c5685c83b09c2",
      "slug": "landscape-architecture-board-by-iamaiistudio",
      "title": "Landscape Architecture Board (by @iamaiistudio)",
      "prompt": "Generate a 3:4 vertical, competition-grade landscape architecture presentation board. The board blends photorealistic aerial rendering with refined architectural diagram language, in the style of a high-end international landscape competition submission. Mood: calm, atmospheric, regenerative, ecological, scientific yet poetic. Layout (three stacked zones): 1. Top zone: analytical ecological diagrams and mapping overlays. 2. Middle zone: a large aerial landscape rendering as the primary focal image. 3. Bottom zone: a continuous sectional cut through the ecological landscape system. Top analytical zone: • Simplified ecological maps with soft, transparent color overlays. • Ultra-thin linework i",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7736,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1bfe123b5f9041a8a680f30ef70a61a0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3c5685c83b09c2-4fd9905731-320.webp",
          "640": "/prompt-template-images/tpl-3c5685c83b09c2-4fd9905731-640.webp",
          "960": "/prompt-template-images/tpl-3c5685c83b09c2-4fd9905731-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:31:53.979Z"
    },
    {
      "id": "tpl-1e827b151f22b6",
      "slug": "graphic-design-portfolio-mockup-by-abs-uiux",
      "title": "Graphic Design Portfolio Mockup (by @abs_uiux)",
      "prompt": "Create a premium graphic design portfolio mockup in a professional creative studio style. Show a clean, elegant workspace presentation featuring multiple graphic design project cards arranged in a refined grid layout, a modern laptop screen displaying a portfolio homepage, and several printed posters laid out neatly on the desk and mounted on the wall. Use a polished creative-director aesthetic with soft shadows, subtle depth, realistic materials, and a high-end studio atmosphere. Include sleek typography placeholders, branding samples, editorial-style poster designs, business cards, stationery, notebook, pen, coffee cup, desk lamp, and small plant for a realistic studio setup. The design sh",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7750,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/40e317816b044b5fa9bdcf8989c8e0ab.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1e827b151f22b6-19edb48cbe-320.webp",
          "640": "/prompt-template-images/tpl-1e827b151f22b6-19edb48cbe-640.webp",
          "960": "/prompt-template-images/tpl-1e827b151f22b6-19edb48cbe-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:32:35.108Z"
    },
    {
      "id": "tpl-f1d8dc67ad7435",
      "slug": "neo-noir-character-design-board-by-mind-boticni",
      "title": "Neo-Noir Character Design Board (by @Mind_Boticni)",
      "prompt": "Create a cinematic realistic character design board for a high-budget neo-noir film production set in a rain-soaked futuristic city. Use a dark charcoal and electric cyan color palette with neon reflections in the background. Avoid generic grids or symmetrical layouts; composition should feel like a stylized director’s pitch board. Design a grounded human character with realistic anatomy, subtle imperfections, and strong emotional presence. Include full-body turnarounds, expressive head angles, cinematic portrait, wardrobe breakdown, fabric texture detail, and production notes. Background: blurred cyberpunk city lights, wet glass reflections, moody atmosphere, soft neon glow. Style: semi-rea",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7764,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/dfd8d2f5f73d403caadec15a88d2031c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f1d8dc67ad7435-0f00ebba3e-320.webp",
          "640": "/prompt-template-images/tpl-f1d8dc67ad7435-0f00ebba3e-640.webp",
          "960": "/prompt-template-images/tpl-f1d8dc67ad7435-0f00ebba3e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:32:54.946Z"
    },
    {
      "id": "tpl-8f86bf22e07701",
      "slug": "heliotropic-architecture-board-by-gdgtify",
      "title": "Heliotropic Architecture Board (by @Gdgtify)",
      "prompt": "16:9 autonomous kinetic architecture, the heliotropic tracking mechanics of [aerospace/solar tracking array] shaping an adaptive, luxury [outdoor architectural structure], sequence from [astronomical/solar path diagrams] to [robotic kinematic wireframes] to a programmable louvre abstraction to the final architectural installation, ai to infer smart-motor integration and weather-responsive materials utilizing [material 1] and [material 2], featuring time-lapse shadow projection diagrams, [aesthetic style] aesthetic, presentation layout: solar path charts at the top, robotic hinge details in the margins, stunning photorealistic architectural render below, [lighting style]. input: [deep space n",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7779,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9f3f1f3631244f2e98cbbbc022ec5ece.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8f86bf22e07701-089a00bdcd-320.webp",
          "640": "/prompt-template-images/tpl-8f86bf22e07701-089a00bdcd-640.webp",
          "960": "/prompt-template-images/tpl-8f86bf22e07701-089a00bdcd-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:33:05.113Z"
    },
    {
      "id": "tpl-1b115da32da602",
      "slug": "brand-identity-guideline-board-by-shorelyn",
      "title": "Brand Identity Guideline Board (by @Shorelyn_)",
      "prompt": "Using the uploaded logo for (Brand name) generate a high-end, agency-grade brand identity system poster. OBJECTIVE Create a complete, presentation-ready brand guideline board that looks like it was designed by a top branding studio. The result must feel commercial, realistic, and client-deliverable, not conceptual. INTELLIGENCE RULE (THIS IS WHAT YOU WERE MISSING) Before designing, analyze the logo and infer: 3 identity traits (based on analysis) COLOR SYSTEM (SMART GENERATION) Extract palette from logo automatically Include: Primary colors (3–5) Secondary colors (3–5) Accent colors Each must show: HEX codes labeled usage (primary / UI / highlight / background) Also generate: gradients color",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7792,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2df345a113a14c3fb43f7a3d8e751e50.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1b115da32da602-e3532c1200-320.webp",
          "640": "/prompt-template-images/tpl-1b115da32da602-e3532c1200-640.webp",
          "960": "/prompt-template-images/tpl-1b115da32da602-e3532c1200-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:34:39.797Z"
    },
    {
      "id": "tpl-ea5983cdbfd1cf",
      "slug": "die-cut-sticker-illustration-by-ciri-ai",
      "title": "Die-Cut Sticker Illustration (by @Ciri_ai)",
      "prompt": "Transform the uploaded image into a premium die-cut sticker illustration while keeping the main subject fully recognizable. Remove or simplify the original background and cleanly isolate the primary subject. Add a thick soft cream or beige sticker border around the entire silhouette with a subtle realistic drop shadow to create a floating sticker effect. Preserve important textures and details while slightly stylizing the image with enhanced colors, cinematic contrast, and a polished editorial l",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7908,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f8428a2bc4a54174a1ce1cac39890778.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ea5983cdbfd1cf-ce60ef0326-320.webp",
          "640": "/prompt-template-images/tpl-ea5983cdbfd1cf-ce60ef0326-640.webp",
          "960": "/prompt-template-images/tpl-ea5983cdbfd1cf-ce60ef0326-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:34:50.721Z"
    },
    {
      "id": "tpl-16c2407844eb90",
      "slug": "rider-waite-tarot-card-by-itsphotogptai",
      "title": "Rider-Waite Tarot Card (by @itsphotogptai)",
      "prompt": "Create a Tarot card based on what you know about me, in the classic style of Rider-Waite. Portray me as a drawn figure with an expressive, but slightly uneven black line of ink, with vivid fluctuations and variations in the stroke, with flat colors without shading. Add delicate visual elements of the Tarot around the figure. convey the texture of the paper and the feeling of a printed impression.",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7921,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c7d733a5b7984c04adfc050a9509422f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-16c2407844eb90-55d9fbc930-320.webp",
          "640": "/prompt-template-images/tpl-16c2407844eb90-55d9fbc930-640.webp",
          "960": "/prompt-template-images/tpl-16c2407844eb90-55d9fbc930-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:35:05.937Z"
    },
    {
      "id": "tpl-565ae511fecb8e",
      "slug": "brand-identity-guideline-board-by-ciri-ai",
      "title": "Brand Identity Guideline Board (by @Ciri_ai)",
      "prompt": "Using the uploaded logo for (Brand name) generate a high-end, agency-grade brand identity system poster. --- OBJECTIVE Create a complete, presentation-ready brand guideline board that looks like it was designed by a top branding studio. The result must feel commercial, realistic, and client-deliverable, not conceptual. --- INTELLIGENCE RULE (THIS IS WHAT YOU WERE MISSING) Before designing, analyze the logo and infer:3 identity traits (based on analysis) --- COLOR SYSTEM (SMART GENERATION) Extract palette from logo automatically Include: Primary colors (3–5) Secondary colors (3–5) Accent colors Each must show: HEX codes labeled usage (primary / UI / highlight / background) Also generate: grad",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7946,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/69b0074496934e31b405495189d0f0a0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-565ae511fecb8e-c8fb44ae2d-320.webp",
          "640": "/prompt-template-images/tpl-565ae511fecb8e-c8fb44ae2d-640.webp",
          "960": "/prompt-template-images/tpl-565ae511fecb8e-c8fb44ae2d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:35:16.471Z"
    },
    {
      "id": "tpl-171c2e20bb699a",
      "slug": "collectible-science-encyclopedia-card-by-iamaiistudio",
      "title": "Collectible Science Encyclopedia Card (by @iamaiistudio)",
      "prompt": "Create a high-quality vertical science encyclopedia infographic for [theme]. Make it feel less like a basic poster and more like a polished modular knowledge card with an encyclopedia, museum-guide, structured-information, and collectible reference-page aesthetic. The style should combine premium natural-history plates, modern encyclopedia spreads, lifestyle knowledge cards, and highly shareable social-media infographics. Include a clear and attractive main visual for the theme, several enlarged detail callouts, multiple rounded information modules, a strong title hierarchy, concise highlight tags, rich but readable educational copy, and a visual section such as ratings, key takeaways, or a",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7963,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6bdf2628dd8f4ba7b04559a3aa8d5ae7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-171c2e20bb699a-a4c63725bb-320.webp",
          "640": "/prompt-template-images/tpl-171c2e20bb699a-a4c63725bb-640.webp",
          "960": "/prompt-template-images/tpl-171c2e20bb699a-a4c63725bb-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:35:27.035Z"
    },
    {
      "id": "tpl-6d07ac6d1de651",
      "slug": "pet-world-cup-storyboard-sheet-by-camikaapp",
      "title": "Pet World Cup Storyboard Sheet (by @CamikaApp)",
      "prompt": "A professional pre-production storyboard sheet for a 12-second photorealistic short film, single landscape page, layout top to bottom: == TITLE BAR == Black bar across full width. Left: massive bold white text \"PET WORLD CUP\". Right: two outlined boxes \"TOTAL VIDEO TIME: 12 SECONDS\" and \"8 SHOTS · ENSEMBLE · COMEDY · CINEMATIC\". == ICON LEGEND == Four icon+label pairs in a row: soccer ball + \"BALL ACTION\"; paw + \"DUEL\"; hamster + \"MIGHTY MINI\"; trophy + \"VICTORY\". == MAIN GRID (8 panels, 2×4) == Each panel: thin white border, landscape 16:9. Number badge (1-8) top-left, teal \"~1.5s\" tag top-right, photorealistic still inside, bottom caption bar with icon + ALL-CAPS text. 1. [ball] \"PET WORLD",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7982,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/95bc66fb828c4066836d5fa1ce178426.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6d07ac6d1de651-6cfb380953-320.webp",
          "640": "/prompt-template-images/tpl-6d07ac6d1de651-6cfb380953-640.webp",
          "960": "/prompt-template-images/tpl-6d07ac6d1de651-6cfb380953-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:35:46.887Z"
    },
    {
      "id": "tpl-a3f063e6beba4c",
      "slug": "cinematic-contact-sheet-generator-by-kingnyaltut",
      "title": "Cinematic Contact Sheet Generator (by @KingNyalTut)",
      "prompt": "Given the scene context, generate the Cinematic Contact Sheet based on the instructions: <instruction> Analyze the entire composition of the input image. Identify ALL key subjects present (whether it's a single person, a group/couple, a vehicle, or a specific object) and their spatial relationship/interaction. Generate a cohesive 3x3 grid \"Cinematic Contact Sheet\" featuring 9 distinct camera shots of exactly these subjects in the same environment. You must adapt the standard cinematic shot types to fit the content (e.g., if a group, keep the group together; if an object, frame the whole object): Row 1 (Establishing Context): Extreme Long Shot (ELS): The subject(s) are seen small within the v",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8032,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f00a35398a1347779332ddc883019fbe.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a3f063e6beba4c-fe77238882-320.webp",
          "640": "/prompt-template-images/tpl-a3f063e6beba4c-fe77238882-640.webp",
          "960": "/prompt-template-images/tpl-a3f063e6beba4c-fe77238882-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:35:56.493Z"
    },
    {
      "id": "tpl-3672acda9eba80",
      "slug": "technical-food-annotation-infographic-by-iamaiistudio",
      "title": "Technical Food Annotation Infographic (by @iamaiistudio)",
      "prompt": "Generate an infographic image of any food item, combining a realistic photograph or photoreal render with technical annotation overlays placed directly on top. Use black ink-style line drawings and text (technical pen / architectural sketch look) on a pure white studio background. Include: key component labels, internal cutaway or exploded-view outlines, measurements and scale markers, material callouts and quantities, arrows indicating function or flow, simple schematic or sectional diagrams where relevant. Place the food name as a title inside a hand-drawn annotation box in one corner. The real object should remain clearly visible beneath the annotations. Annotations should feel sketched,",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8072,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/27dfdd0344f347f5b162c4b2337ee061.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-3672acda9eba80-1247c9da8c-320.webp",
          "640": "/prompt-template-images/tpl-3672acda9eba80-1247c9da8c-640.webp",
          "960": "/prompt-template-images/tpl-3672acda9eba80-1247c9da8c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:36:06.724Z"
    },
    {
      "id": "tpl-86e084afe562c6",
      "slug": "bazaar-heist-storyboard-card-by-aimikoda",
      "title": "Bazaar Heist Storyboard Card (by @aimikoda)",
      "prompt": "Create a 16:9 image. [PROJECT CARD] Create a compact designed masthead, not a table. TITLE: JIEL MARKET HANDS META LINE: sly fantasy theft / fast-paced bazaar caper / sharp kinetic energy PRIORITY: readable hand tricks, crowd geography, magical bag payoff MICRO BRIEF: C1 survives by stealing through a crowded market, chaining fast sleight-of-hand thefts until a witness grabs her arm and becomes her final stolen prize. [CONTINUITY HEADER] SEQUENCE ID: JIEL_MARKET_PICKPOCKET_MAGIC_BAG_12P REFERENCE PRIORITY: attached Jiel character sheet controls C1 face, body, wardrobe, proportions, hood, hair, belt, pouches, boots, wrapped hands; attached market image controls bazaar density, stall layout, w",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8085,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c09e3795754c4facacd33719252912ef.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-86e084afe562c6-196c889f63-320.webp",
          "640": "/prompt-template-images/tpl-86e084afe562c6-196c889f63-640.webp",
          "960": "/prompt-template-images/tpl-86e084afe562c6-196c889f63-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:36:18.217Z"
    },
    {
      "id": "tpl-56372d72dd3e45",
      "slug": "luxury-starter-pack-vision-board-by-mehvishs25",
      "title": "Luxury Starter Pack Vision Board (by @mehvishs25)",
      "prompt": "Ultra-detailed luxury feminine “Starter Pack” vision board poster featuring an adorable chibi-style girl as the central character, inspired by premium collectible dolls and Pinterest luxury aesthetics. She has huge sparkling brown eyes, long wavy black hair, soft glamorous makeup, glossy lips, delicate jewelry, and a confident yet cute expression. Outfit: elegant monochrome ivory-white fashion look consisting of a fitted blazer, cropped top, high-waisted mini skirt, sheer tights, luxury handbag, and stylish heels. Sophisticated, classy, feminine, and fashion-forward. Composition: the character stands in the center surrounded by an elaborate scrapbook-style collage pinned onto a warm beige ae",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8158,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/217f76630e6a41888efecd759f16cda9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-56372d72dd3e45-f36dd0369b-320.webp",
          "640": "/prompt-template-images/tpl-56372d72dd3e45-f36dd0369b-640.webp",
          "960": "/prompt-template-images/tpl-56372d72dd3e45-f36dd0369b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:36:50.960Z"
    },
    {
      "id": "tpl-5a54c5317398d0",
      "slug": "embossed-metal-logo-bas-relief-by-iamaiistudio",
      "title": "Embossed Metal Logo Bas-Relief (by @iamaiistudio)",
      "prompt": "Replace [BRAND NAME] with your brand and [COLOR] with your preferred metal tone. Act as a Senior CGI Artist. Create a premium bas-relief logo visualization where the brand mark appears embossed outward from a metallic surface, like a coin, hallmark stamp, or luxury seal. The logo rises as a unified raised form from the surface itself. Surface: One continuous material plane filling the entire canvas. Use the metal tone from [COLOR]: silver/grey becomes brushed steel, gold becomes warm brushed metal, black becomes anodized aluminum, white becomes matte ceramic, saturated colors become anodized colored metal. Apply radial brushed grain and fine film grain for tactility. Emboss: The brand's prim",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8210,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0b0d4639dc7b469fbefbb23913176c92.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5a54c5317398d0-0b1ce3f14d-320.webp",
          "640": "/prompt-template-images/tpl-5a54c5317398d0-0b1ce3f14d-640.webp",
          "960": "/prompt-template-images/tpl-5a54c5317398d0-0b1ce3f14d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:37:00.720Z"
    },
    {
      "id": "tpl-759a1ccbe2fe2a",
      "slug": "sculptural-fruit-packaging-design-by-iamaiistudio",
      "title": "Sculptural Fruit Packaging Design (by @iamaiistudio)",
      "prompt": "Professional product photography of a sculptural packaging design built for [Fruit Name]. The box is premium corrugated cardboard shaped and cut into the exact silhouette of a giant [Shape — spherical, curved, or elongated] [Fruit Name]. Outer surface is printed with a bold, minimal [Pattern — geometric hexagons / organic wavy lines / botanical line-art / horizontal ridges] that echoes the natural skin texture, rendered in a duo-tone scheme of [Color 1] and [Color 2]. Die-cut window panels expose the [Product Inside] nestled inside. Clean modern sans-serif text on the side reads \"[BRAND NAME]\". Eco details include a recycling icon and a sculpted corrugated [Stem / Leaf / Crown] on top. Soft",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8235,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1510a4e73b8b46f5b81bfd137f6b152a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-759a1ccbe2fe2a-7d7ddeac2d-320.webp",
          "640": "/prompt-template-images/tpl-759a1ccbe2fe2a-7d7ddeac2d-640.webp",
          "960": "/prompt-template-images/tpl-759a1ccbe2fe2a-7d7ddeac2d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:37:43.346Z"
    },
    {
      "id": "tpl-0b9b4020615174",
      "slug": "luxury-perfume-infographic-ad-by-iamrealsnow",
      "title": "Luxury Perfume Infographic Ad (by @iamrealsnow)",
      "prompt": "Ultra-premium luxury perfume infographic advertisement, centerpiece crystal perfume bottle with intricate glass detailing, surrounded by flowing liquid gold splashes and floating flower petals, elegant black and gold color palette, cinematic studio lighting, glossy reflections, fashion magazine quality, luxury beauty campaign design. Highly organized infographic layout with premium sections and elegant typography: • Fragrance Pyramid (Top Notes, Heart Notes, Base Notes) with luxury ingredient visuals. • Key Ingredients showcase with realistic botanical illustrations. • Longevity and Performance metrics using premium golden icons. • Bottle Design Breakdown with callout lines and annotations.",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8254,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ea3f18dc44e14264848e2948bf260fdc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0b9b4020615174-69e7e0a4e0-320.webp",
          "640": "/prompt-template-images/tpl-0b9b4020615174-69e7e0a4e0-640.webp",
          "960": "/prompt-template-images/tpl-0b9b4020615174-69e7e0a4e0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:37:54.079Z"
    },
    {
      "id": "tpl-7a08c46e346c9c",
      "slug": "aaa-game-loading-screen-portrait-by-yulikay",
      "title": "AAA Game Loading Screen Portrait (by @yulikay)",
      "prompt": "Step 1. Uploaded a reference selfie to Higgsfield. Generated the still loading screen using GPT Image 2. Prompt (you can adjust the details with your name, bio, etc.): Generate a hyper-realistic in-game cinematic still from a fictional unreleased AAA video game, rendered in Unreal Engine 5 with MetaHuman-quality character fidelity, Nanite-level environment detail, and full ray-traced lighting. The result should look indistinguishable from a real 4K screenshot pulled directly from a modern AAA title like Death Stranding 2, Hellblade 2: Senua's Saga, The Last of Us Part 2, Cyberpunk 2077, or Black Myth: Wukong. The character (right two-thirds of the frame) Render the uploaded person Image 1 as",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8280,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ddc5be6ebe8644a6912aeb40ab93116f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7a08c46e346c9c-3ae812d78d-320.webp",
          "640": "/prompt-template-images/tpl-7a08c46e346c9c-3ae812d78d-640.webp",
          "960": "/prompt-template-images/tpl-7a08c46e346c9c-3ae812d78d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:39:01.242Z"
    },
    {
      "id": "tpl-5af9156f1d6c1e",
      "slug": "energy-drink-storyboard-grid-by-strength04-x",
      "title": "Energy Drink Storyboard Grid (by @Strength04_X)",
      "prompt": "- Create a high-energy 16:9 energy drink advertising storyboard in 3x2 grid (6 frames), editorial layout, Monster/Red Bull style, matte black + electric green palette. Structured flow: pre-game locker room, can crack open close-up, first sip slow motion, athlete explosive start, peak performance moment, victory fist pump closure. Each frame split: top cinematic image (no text) + bottom storyboard notes. Underground sports aesthetic, zero to hundred mood, energy as superpower. A single energy drink can cracking open is the emotional center throughout. Add a bold heading at the top of the storyboard in aggressive bold font reading: NO LIMITS — AN ENERGY EDITORIAL. KLING AI 3.0 PROMPT :- This i",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8354,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/05e3cf6b6e97443da972ce8ea9486bd3.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5af9156f1d6c1e-f4a6d54e1c-320.webp",
          "640": "/prompt-template-images/tpl-5af9156f1d6c1e-f4a6d54e1c-640.webp",
          "960": "/prompt-template-images/tpl-5af9156f1d6c1e-f4a6d54e1c-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:39:22.213Z"
    },
    {
      "id": "tpl-1ae4a97daaea8e",
      "slug": "anime-short-film-dev-board-by-heyabhishek",
      "title": "Anime Short Film Dev Board (by @HeyAbhishek)",
      "prompt": "\"Create a single vertical anime development board for an original emotional short film titled \"One More Player\". Output ONE combined image with 2 sections: top section = character design sheet, bottom section = cinematic storyboard page. STYLE: ultra high-quality nostalgic late 90s / early 2000s anime movie look, premium hand-drawn animation style, beautifully painted backgrounds, rich environmental detail, cinematic composition, soft but highly refined shading, natural character anatomy, expressive faces, subtle texture, realistic wet ground reflections, warm cloudy sunset lighting, atmospheric depth, polished old-anime film aesthetic, visually stunning frame quality, clean studio-level pre",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8369,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/15f7f959c0474f2dbd19ddb87396e703.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1ae4a97daaea8e-52b9485505-320.webp",
          "640": "/prompt-template-images/tpl-1ae4a97daaea8e-52b9485505-640.webp",
          "960": "/prompt-template-images/tpl-1ae4a97daaea8e-52b9485505-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:39:33.348Z"
    },
    {
      "id": "tpl-20fedd1472ab54",
      "slug": "editorial-anatomy-infographic-poster-by-iamaiistudio",
      "title": "Editorial Anatomy Infographic Poster (by @iamaiistudio)",
      "prompt": "prompt: Ultra-clean editorial infographic poster (1080x1080 square), blending premium magazine design with lifestyle illustration and photography. **HEADLINE:** Bold, large sans-serif type centered at top: \"HUMAN LIVER\" **MAIN IMAGE:** High-detail 3D illustration of the human liver, showing the Right Lobe, Left Lobe, and Gallbladder. Color palette: terracotta, deep brownish-red, and soft coral tones. Background: clean, soft beige or off-white. Lighting: soft studio style. **POSTER SECTIONS:** * **Floating Fact Bubbles (top corners):** * \"Weight: ~1.5 kg (Heaviest internal organ)\" * \"Regeneration: Can regrow from just 25%\" * \"Location: Upper Right Abdomen\" * \"Blood Flow: Filters 1.4 L/min\" *",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8419,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ab0371290b3c46efa4a5f28193ae1f6a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-20fedd1472ab54-597316c5ce-320.webp",
          "640": "/prompt-template-images/tpl-20fedd1472ab54-597316c5ce-640.webp",
          "960": "/prompt-template-images/tpl-20fedd1472ab54-597316c5ce-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:39:53.840Z"
    },
    {
      "id": "tpl-de3f22a5bf21ed",
      "slug": "graphite-coffee-shop-storyboard-by-insmind-com",
      "title": "Graphite Coffee-Shop Storyboard (by @insmind_com)",
      "prompt": "Create a rough black-and-white graphite pencil storyboard in a 3x3 grid, nine 16:9 panels, with hand-drawn borders, panel numbers, motion arrows, music notes, and handwritten director notes. Storyboard for a premium animated coffee-shop hip-hop commercial for insMind. Keep the same young female barista throughout: expressive eyes, high messy bun with loose curls, white barista shirt with tiny pale-blue details, black neck scarf with a small insMind logo, dark fitted trousers, white flat shoes. Warm modern cafe interior, espresso machine, wooden counter, pastry case, large windows, soft daylight. Show these beats: opening push-in with the barista singing, steam wand frothing milk like stage s",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8475,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c1d726c536454c358ee746a236b1f986.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-de3f22a5bf21ed-afc823fb09-320.webp",
          "640": "/prompt-template-images/tpl-de3f22a5bf21ed-afc823fb09-640.webp",
          "960": "/prompt-template-images/tpl-de3f22a5bf21ed-afc823fb09-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:40:45.992Z"
    },
    {
      "id": "tpl-41e55e38dd18ea",
      "slug": "venice-travel-vlogger-collage-by-zarairahh",
      "title": "Venice Travel Vlogger Collage (by @ZaraIrahh)",
      "prompt": "Young female travel vlogger exploring Venice, Italy across 13 wildly candid, chaotic, funny, and uniquely Venetian moments, stunning with long windswept hair, effortless luxury European summer fashion, playful adventurous personality, authentic handheld iPhone collage aesthetic with natural imperfections, unfiltered travel energy, social media realism, spontaneous vacation chaos. Frame Breakdown Includes: — accidentally boarding the wrong vaporetto and enthusiastically waving at the dock before realizing she's headed in the opposite direction — struggling to drag an oversized suitcase over a steep stone canal bridge, laughing at the absurdity of it — getting completely lost in Venice's labyr",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8494,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ddcf0bf63f3e40d0a89d07a465533362.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-41e55e38dd18ea-78cb5e23c7-320.webp",
          "640": "/prompt-template-images/tpl-41e55e38dd18ea-78cb5e23c7-640.webp",
          "960": "/prompt-template-images/tpl-41e55e38dd18ea-78cb5e23c7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:40:56.303Z"
    },
    {
      "id": "tpl-c9678340101980",
      "slug": "modern-recipe-infographic-board-by-iamaiistudio",
      "title": "Modern Recipe Infographic Board (by @iamaiistudio)",
      "prompt": "Ultra-clean modern recipe infographic. Showcase your dish in a visually appealing finished form, sliced, plated, or portioned, floating slightly in perspective or angled view. Arrange ingredients, steps, and tips around the dish in a dynamic editorial layout, not top-down. Ingredients: include icons or mini illustrations for each ingredient with quantities, arranged in clusters, lists, or circular flows connected visually to the dish. Steps: show preparation steps with numbered panels, arrows, or lines forming a logical flow. Include small cooking icons (knife, pan, oven, timer) where helpful. Optional info: total calories, prep/cook time, servings, spice level displayed as clean bubbles or",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8512,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f17c93ceee9c40168a67c5bd29fdc295.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c9678340101980-ff80a61c26-320.webp",
          "640": "/prompt-template-images/tpl-c9678340101980-ff80a61c26-640.webp",
          "960": "/prompt-template-images/tpl-c9678340101980-ff80a61c26-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:41:37.948Z"
    },
    {
      "id": "tpl-a4d3d68ceb670b",
      "slug": "inner-signal-brand-poster-series-by-bmx-ai13",
      "title": "INNER SIGNAL Brand Poster Series (by @bmx_ai13)",
      "prompt": "INNER SIGNAL Brand Poster Series。Create a 6-poster brand identity series for a fictional creative studio named SIGNAL. Use only black, crimson red, and white. The posters should feel cinematic, premium, rebellious, and intelligent. Use high-contrast editorial visuals, deep shadows, red lighting, film grain, halftone texture, bold uppercase typography, and minimal logo repetition. Themes include dual identity, influence, vision, instinct, connection, and ambition.；Build identities that do not blend in. Designed for ambitious brands that want presence, confidence, and creative impact.；FEED THE INNER SIGNAL.",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8527,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/bd1cbd900d474092b30366d12c321fec.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a4d3d68ceb670b-9baccd3842-320.webp",
          "640": "/prompt-template-images/tpl-a4d3d68ceb670b-9baccd3842-640.webp",
          "960": "/prompt-template-images/tpl-a4d3d68ceb670b-9baccd3842-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:41:49.370Z"
    },
    {
      "id": "tpl-31c48a9068db17",
      "slug": "industrial-packaging-design-sheet-by-iamaiistudio",
      "title": "Industrial Packaging Design Sheet (by @iamaiistudio)",
      "prompt": "Full prompt: Using the attached image, create a professional industrial packaging design illustration sheet. Feature a centered hero 3D render with realistic materials, soft studio lighting, and commercial-grade finish quality. Surround the hero render with technical views: front, side, top, bottom, angled perspective, and flat layout. Include structural construction sketches, fold lines, seam details, and dimension arrows with measurements in millimeters. Show materials and finishes (matte, glossy print, plastic, paper, glass, etc.) using handwritten-style annotations. Add color swatches, realistic product illustrations, and subtle shadows. Background should resemble clean sketchbook paper,",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8604,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f83c686810e14b5fa00d3e7da624a77f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-31c48a9068db17-a7495c9a9f-320.webp",
          "640": "/prompt-template-images/tpl-31c48a9068db17-a7495c9a9f-640.webp",
          "960": "/prompt-template-images/tpl-31c48a9068db17-a7495c9a9f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:41:58.717Z"
    },
    {
      "id": "tpl-cf08a42896fa9c",
      "slug": "chrome-logo-editorial-system-by-iamaiistudio",
      "title": "Chrome Logo Editorial System (by @iamaiistudio)",
      "prompt": "prompt: [BRAND NAME]. You are a Senior 3D Product Visualization Artist and Cinematic Art Director specializing in luxury brand key visuals for high-end editorial and streetwear campaigns. PHASE 1: LOGO SUBJECT Identify the official logo/logotype of [BRAND NAME]. Render it with maximum fidelity to the original silhouette, proportions, and geometry — no distortion, no stylization. Extrude the logo into a solid 3D object with depth approximately 15–20% of its height. Coat all surfaces — front face, side extrusion, beveled edges — in hyper-polished liquid chrome (reflectance 0.98, near-perfect mirror). Apply full ray-traced environment reflections so the logo mirrors the surrounding sky gradient",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8625,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b3d001ed488e4556b1931ddfdaf62764.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-cf08a42896fa9c-4489e6ff4b-320.webp",
          "640": "/prompt-template-images/tpl-cf08a42896fa9c-4489e6ff4b-640.webp",
          "960": "/prompt-template-images/tpl-cf08a42896fa9c-4489e6ff4b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:42:08.301Z"
    },
    {
      "id": "tpl-7c0dcf5ffe3286",
      "slug": "skincare-ugc-storyboard-board-by-wanderingc76",
      "title": "Skincare UGC Storyboard Board (by @WanderingC76)",
      "prompt": "(Luxury AI UGC skincare campaign board), warm beige aesthetic, beautiful female influencer with glowing healthy skin, holding a skincare serum bottle toward the camera, natural smile, cozy bedroom environment, soft natural daylight, realistic home setting, elegant neutral decor. Large hero portrait on the left side. Right side featuring (6 UGC storyboard panels): (Hook Shot), (Product Introduction), (Product Application), (Lifestyle Shot), (Results Shot), (Call To Action). Each panel showing realistic influencer actions and natural expressions. Bottom section featuring (Key Ingredients Box) with elegant skincare icons and ingredient highlights. Additional product close-ups, serum texture sho",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8660,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/22d9966b9e3348cca037048c2e7d3f4f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7c0dcf5ffe3286-d5495fa5e2-320.webp",
          "640": "/prompt-template-images/tpl-7c0dcf5ffe3286-d5495fa5e2-640.webp",
          "960": "/prompt-template-images/tpl-7c0dcf5ffe3286-d5495fa5e2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:42:29.707Z"
    },
    {
      "id": "tpl-484b48cb6a0423",
      "slug": "by-kashberg-0",
      "title": "早期互联网作品集页面 (by @Kashberg_0)",
      "prompt": "Design a minimal early-internet personal profile webpage / digital portfolio landing page on a large white canvas with generous negative space and a thin pastel pink browser-style frame. In the center, place a black-and-white editorial portrait of [SUBJECT], featuring soft film grain, subtle scanner texture, and low-contrast photographic tones. Surround the portrait with scattered profile metadata labels and small star-bullet elements arranged asymmetrically, resembling a playful personal résumé. Include descriptors such as: ✦ creator ✦ model ✦ stylist ✦ DJ ✦ girl ✦ photographer ✦ collector ✦ dreamer In the top-left corner, create a colorful hand-drawn logo or personal brand mark. Beneath it",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8705,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c6ba5c61e58f4a2b98029507e182b3e4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-484b48cb6a0423-92b69cb5f8-320.webp",
          "640": "/prompt-template-images/tpl-484b48cb6a0423-92b69cb5f8-640.webp",
          "960": "/prompt-template-images/tpl-484b48cb6a0423-92b69cb5f8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:42:46.890Z"
    },
    {
      "id": "tpl-a581bd7f349b19",
      "slug": "by-iamaiistudio",
      "title": "吉祥物品牌识别设计表 (by @iamaiistudio) [提示词:]",
      "prompt": "吉祥物品牌识别设计表 (by @iamaiistudio) [提示词:]。{argument name=\"character description\" default=\"3D rendered cute Shiba Inu mascot wearing a green apron\"}；3 rows of front and side view line art with proportion guides；large high-resolution 3D mascot render holding tea cup。",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8768,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a69f990b95484964898ac54615f6471f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a581bd7f349b19-4f22d906bd-320.webp",
          "640": "/prompt-template-images/tpl-a581bd7f349b19-4f22d906bd-640.webp",
          "960": "/prompt-template-images/tpl-a581bd7f349b19-4f22d906bd-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:42:56.272Z"
    },
    {
      "id": "tpl-04c7c46059a8f3",
      "slug": "sitcom-intro-storyboard-sheet-by-kimakiyama81",
      "title": "Sitcom Intro Storyboard Sheet (by @KimAkiyama81)",
      "prompt": "Create a professional film production storyboard for a 15-second sitcom intro montage in a premium pitch deck presentation. Use multi-panel storyboard sheet layout, cinematic 16:9 framing per panel, clean panel borders, shot descriptions beneath each frame, timing notes, and transition indicators between panels. Maintain strict character consistency for Super Mei, Edvard, and Fenrir across all panels. Include a complete sequence of title flash, living room, backyard walkies, kitchen powers, convenience store raid, monster battle, bonus domestic comedy beats, closing hero shot, and logo slam. Visual style: cinematic sitcom, high-budget live-action network comedy, production-ready fidelity, no",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 7933,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-23d8fad34ebd1a",
      "slug": "by-iamaiistudio-84e66c",
      "title": "建筑风产品目录页 (by @iamaiistudio) [提示词:]",
      "prompt": "Create a vertical 3:4 product design catalog page with a warm neutral paper-like background. Top section — lifestyle hero shot: place the product (use the uploaded image as the exact reference, preserving its form, proportions, materials, and identity without redesign) center-dominant with generous whitespace. Setting is a minimal architectural interior with a textured plaster wall and subtle concrete/stone floor. Lighting is natural sunlight angled from the side, soft but casting high-contrast shadows. Render in editorial lifestyle photography style, high realism, warm and muted color grading. Bottom section — technical specification panel laid out in a clean modular grid: - Bottom left and",
      "category": "UI与社交媒体",
      "categorySlug": "ui-social-media",
      "rawCategory": "📱 UI & Social Media Mockup Cases",
      "sourceLine": 8866,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-5bcd71a5a92df2",
      "slug": "corporate-ecosystem-tree-sansan-business-vision-illustration",
      "title": "Corporate Ecosystem Tree: Sansan Business Vision Illustration",
      "prompt": "要怎么prompt才能让AI达到这种水平？ ---",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5860,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/314823f9b5db4309b7fe4d7f66c7c58b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5bcd71a5a92df2-11d7b624e2-320.webp",
          "640": "/prompt-template-images/tpl-5bcd71a5a92df2-11d7b624e2-640.webp",
          "960": "/prompt-template-images/tpl-5bcd71a5a92df2-11d7b624e2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:59:19.760Z"
    },
    {
      "id": "tpl-1074cf1b602360",
      "slug": "playful-banana-google-logo-search-page-design",
      "title": "Playful Banana Google Logo Search Page Design",
      "prompt": "A screenshot of the Google home page with a banana Google doodle, change I'm feeling lucky to be \"Go bananas\". No monkeys. ---",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5876,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a71eac93545e438c9c5a402495e5670e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-1074cf1b602360-d026384ba0-320.webp",
          "640": "/prompt-template-images/tpl-1074cf1b602360-d026384ba0-640.webp",
          "960": "/prompt-template-images/tpl-1074cf1b602360-d026384ba0-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:59:28.623Z"
    },
    {
      "id": "tpl-537b5f9e48fe04",
      "slug": "meesho-ipo-infographic-decoding-drhp-and-financials",
      "title": "Meesho IPO Infographic: Decoding DRHP & Financials",
      "prompt": "-> The results: Pick yours ---",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5892,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cca3608cb26640cd9900f3be84680000.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-537b5f9e48fe04-0be261e157-320.webp",
          "640": "/prompt-template-images/tpl-537b5f9e48fe04-0be261e157-640.webp",
          "960": "/prompt-template-images/tpl-537b5f9e48fe04-0be261e157-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:59:39.379Z"
    },
    {
      "id": "tpl-5327f1623f062f",
      "slug": "brand-logo-wax-seals-chatgpt-playboy-batman-lacoste",
      "title": "Brand Logo Wax Seals: ChatGPT, Playboy, Batman, Lacoste",
      "prompt": "Prompt below ---",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5908,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/1cb50ff3c7cc42c49775b6ac1defdfa9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-5327f1623f062f-f3a79143d5-320.webp",
          "640": "/prompt-template-images/tpl-5327f1623f062f-f3a79143d5-640.webp",
          "960": "/prompt-template-images/tpl-5327f1623f062f-f3a79143d5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T15:59:49.264Z"
    },
    {
      "id": "tpl-442bbef48728dc",
      "slug": "iconic-celebrity-brand-portraits-modern-graphic-design",
      "title": "Iconic Celebrity Brand Portraits | Modern Graphic Design",
      "prompt": "Prompt below ---",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5924,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a11332dc69614f2680cf9c52e4fbb3a9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-442bbef48728dc-30429ea4bc-320.webp",
          "640": "/prompt-template-images/tpl-442bbef48728dc-30429ea4bc-640.webp",
          "960": "/prompt-template-images/tpl-442bbef48728dc-30429ea4bc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:00:03.386Z"
    },
    {
      "id": "tpl-d894ea6cd6349e",
      "slug": "3d-metallic-brand-logos-dc-under-armour-kenzo-mitsubishi",
      "title": "3D Metallic Brand Logos: DC, Under Armour, Kenzo, Mitsubishi",
      "prompt": "Prompt below ---",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5940,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0b96997e91a843089ea199bd03ef4b64.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d894ea6cd6349e-a475117b06-320.webp",
          "640": "/prompt-template-images/tpl-d894ea6cd6349e-a475117b06-640.webp",
          "960": "/prompt-template-images/tpl-d894ea6cd6349e-a475117b06-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:00:24.419Z"
    },
    {
      "id": "tpl-f2381d128952b2",
      "slug": "pringles-monogram-logo-elegant-brand-design-on-red",
      "title": "Pringles Monogram Logo - Elegant Brand Design on Red",
      "prompt": "Use it ---",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5956,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8b154c61f1cb4afc8f84bdb31c7f5cb2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f2381d128952b2-078df5807f-320.webp",
          "640": "/prompt-template-images/tpl-f2381d128952b2-078df5807f-640.webp",
          "960": "/prompt-template-images/tpl-f2381d128952b2-078df5807f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:00:46.233Z"
    },
    {
      "id": "tpl-20dc6ea76ee00f",
      "slug": "3d-glass-logos-modern-brand-icon-design-and-rendering",
      "title": "3D Glass Logos: Modern Brand Icon Design & Rendering",
      "prompt": "Prompt below ---",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5972,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/06743021a9ad471e8afba84c9a95f2e2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-20dc6ea76ee00f-7d951234ae-320.webp",
          "640": "/prompt-template-images/tpl-20dc6ea76ee00f-7d951234ae-640.webp",
          "960": "/prompt-template-images/tpl-20dc6ea76ee00f-7d951234ae-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:00:57.135Z"
    },
    {
      "id": "tpl-2b94696efae35b",
      "slug": "awesome-google-nano-banana-pro-ai-image-prompts-and-image-generation",
      "title": "Awesome Google Nano Banana Pro: AI Image Prompts & Image Generation",
      "prompt": "Go grab it. ---",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5988,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/db76114912b74728a7e8d50f9616e578.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2b94696efae35b-6fa537f30f-320.webp",
          "640": "/prompt-template-images/tpl-2b94696efae35b-6fa537f30f-640.webp",
          "960": "/prompt-template-images/tpl-2b94696efae35b-6fa537f30f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:01:07.030Z"
    },
    {
      "id": "tpl-b1f4eeacc05fcd",
      "slug": "miniature-brand-universe-shoe-by-aiwithaliya",
      "title": "Miniature Brand Universe Shoe (by @AIwithAliya)",
      "prompt": "A high-performance running shoe transformed into a miniature brand universe. The shoe is the hero character, surrounded by floating speed trails, miniature running tracks, energetic mascot companions, stopwatch icons, clouds, and dynamic sports-inspired elements. Oversized bold typography integrated into the scene. Clean commercial 3D rendering, pastel orange, white, and gray color palette derived from the product, premium packaging aesthetics, soft gloss, graphic backgrounds, floating platforms, collectible toy-like charm. Modern consumer branding, cute yet premium, highly shareable social-media campaign visual, rich detail, centered composition, studio quality.",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 357,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/5ee5b2480ab84742851b5b3c7a3e80fe.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-b1f4eeacc05fcd-fa34823436-320.webp",
          "640": "/prompt-template-images/tpl-b1f4eeacc05fcd-fa34823436-640.webp",
          "960": "/prompt-template-images/tpl-b1f4eeacc05fcd-fa34823436-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:01:28.018Z"
    },
    {
      "id": "tpl-6ea36443063aeb",
      "slug": "surreal-brand-world-poster-by-saasjunctionhq",
      "title": "Surreal Brand World Poster (by @SaasJunctionHQ)",
      "prompt": "A hyper-detailed surreal advertising poster for [BRAND NAME]. BACKGROUND: A large deep-toned rounded rectangle in [BRAND NAME]'s signature brand color fills 90% of the frame. Behind the subject, massive cropped brand typography bleeds off-frame, letters constructed from the brand's core material texture, embossed and lit with sharp directional rim lighting. Subtle noise grain texture overlays the background. SUBJECT: Use the uploaded reference image. Preserve the subject's exact face and skin tone from the reference. The person faces camera in a three-quarter foreground stance, holding the brand's most iconic product directly toward the lens. EXPRESSION: Restyle the subject's facial expressi",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 436,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b490993c22ef4cc89618e2329a79023c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6ea36443063aeb-c87795c011-320.webp",
          "640": "/prompt-template-images/tpl-6ea36443063aeb-c87795c011-640.webp",
          "960": "/prompt-template-images/tpl-6ea36443063aeb-c87795c011-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:02:18.912Z"
    },
    {
      "id": "tpl-0b1b08b0e86c52",
      "slug": "kv-by-liyue-ai",
      "title": "可口可乐百事雪碧品牌 KV 对比 (by @liyue_ai)",
      "prompt": "品牌 KV 海报系列。使用统一提示词框架，针对不同饮料品牌调整视觉情绪色彩：可口可乐 → 热烈红色聚会感；百事可乐 → 年轻蓝色潮流感；雪碧 → 清爽绿色柠檬感。同一结构展现不同品牌 DNA。3 张对比输出。",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 734,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/efe23d8c119c4de8bc00eb9a155dbd1f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0b1b08b0e86c52-e3979b5021-320.webp",
          "640": "/prompt-template-images/tpl-0b1b08b0e86c52-e3979b5021-640.webp",
          "960": "/prompt-template-images/tpl-0b1b08b0e86c52-e3979b5021-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:02:29.627Z"
    },
    {
      "id": "tpl-541930f4d11bee",
      "slug": "obsidian-by-iamaiistudio",
      "title": "OBSIDIAN 咖啡品牌企划 (by @iamaiistudio) [提示词:]",
      "prompt": "Generate four cohesive high-end realistic editorial visuals for OBSIDIAN coffee brand. Cinematic, dark, mature aesthetic inspired by luxury sportswear and premium coffee advertising. Studio lighting that's dramatic yet controlled, photorealistic textures, clean compositional layout. Shot 1: Hero brand poster featuring 'OBSIDIAN' lettering with an artful coffee display — steam rising, beans scattered. Shot 2: Full product range — coffee bags, cans, and capsules arranged together. Shot 3: Tight packaging detail with tagline 'Coffee for grown-ups who chase flavor.' Shot 4: Lifestyle close-up of a steaming cup. Ultra-polished finish, crisp realistic materials, unified brand identity, no fantasti",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "📣 Ad Creative Cases",
      "sourceLine": 917,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/4779be7afdc24e5ab106c4cd59cf9121.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-541930f4d11bee-b50e49cd88-320.webp",
          "640": "/prompt-template-images/tpl-541930f4d11bee-b50e49cd88-640.webp",
          "960": "/prompt-template-images/tpl-541930f4d11bee-b50e49cd88-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:02:51.088Z"
    },
    {
      "id": "tpl-0d71dd29e56d43",
      "slug": "luxury-brand-ad-campaign-poster-by-techiebysa",
      "title": "Luxury Brand Ad Campaign Poster (by @TechieBySA)",
      "prompt": "A world-class luxury advertising campaign poster, 4:5 ratio, for [BRAND/PRODUCT], shot in a high-end photography studio, [COLOR] dramatic lighting with vivid color gels casting bold shadows, single hero product floating center frame with hyper-reflective surface catching light streaks, cinematic lens flare, deep rich background with gradient bloom, chrome and glass material feel, oversized bold editorial typography with the brand name, razor-sharp tagline in elegant thin font, extreme detail and texture on the product, smoke or liquid elements subtly in background, feels like Apple x Nike x Lamborghini had a campaign, shot on Hasselblad, photorealistic, magazine cover quality",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3196,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f611fcaa7de145549401032b198d74a6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0d71dd29e56d43-26161e3652-320.webp",
          "640": "/prompt-template-images/tpl-0d71dd29e56d43-26161e3652-640.webp",
          "960": "/prompt-template-images/tpl-0d71dd29e56d43-26161e3652-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:03:02.965Z"
    },
    {
      "id": "tpl-09454af4edd46f",
      "slug": "bangkok-swiss-typography-poster-by-shorelyn",
      "title": "Bangkok Swiss Typography Poster (by @Shorelyn_)",
      "prompt": "Create an ultra-high-resolution Swiss modernist typography travel poster for BANGKOK THAILAND in a premium 16:9 layout. CORE CONCEPT: A massive bold condensed sans-serif word “BANGKOK” dominates the center composition. Each individual letter acts as a precise geometric window containing minimalist flat-vector illustrations of iconic Bangkok landmarks and authentic urban life scenes. INSIDE THE LETTERS INCLUDE: Grand Palace Wat Arun Wat Pho Chao Phraya River Tuk-tuks BTS Skytrain Long-tail boats Chinatown signage Rooftop bars Street food stalls Temple roofs Bangkok modern skyline The scenes inside each letter must transition seamlessly across the typography, creating one continuous panoramic",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3476,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/520c9fd3e7a046e581b2d660ca236687.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-09454af4edd46f-c10a48a21b-320.webp",
          "640": "/prompt-template-images/tpl-09454af4edd46f-c10a48a21b-640.webp",
          "960": "/prompt-template-images/tpl-09454af4edd46f-c10a48a21b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:03:28.144Z"
    },
    {
      "id": "tpl-69556a8162ca0f",
      "slug": "3d-typography-travel-poster-by-naiknelofar788",
      "title": "3D Typography Travel Poster (by @Naiknelofar788)",
      "prompt": "Create a 3:2 premium 3D typography-based travel poster for [CITY], using luxury editorial destination advertising fused with realistic sculptural letterform architecture. The city name “[CITY]” must be the dominant subject, occupying most of the canvas. Build the letters as large, realistic, three-dimensional sculptural forms made from glossy painted material, polished ceramic, soft plaster, carved stone, sunlit architectural surfaces, or city-adaptive materials. Each letter should physically transform into the city’s identity: landmarks, skyline silhouettes, arches, towers, domes, bridges, windows, balconies, cultural patterns, coastal forms, or street details must grow directly out of the",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 3742,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/492648f4b28649308536ce9ca04f35c7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-69556a8162ca0f-583a41afa7-320.webp",
          "640": "/prompt-template-images/tpl-69556a8162ca0f-583a41afa7-640.webp",
          "960": "/prompt-template-images/tpl-69556a8162ca0f-583a41afa7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:03:39.411Z"
    },
    {
      "id": "tpl-28a3c6a6d3a44a",
      "slug": "brand-identity-oil-painting-by-iamaiistudio",
      "title": "Brand Identity Oil Painting (by @iamaiistudio)",
      "prompt": "Brand Identity Oil Painting。[BRAND NAME]。",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4636,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0f3b73ed8c98431c8d045e8e7f35e99c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-28a3c6a6d3a44a-ac4616f5f2-320.webp",
          "640": "/prompt-template-images/tpl-28a3c6a6d3a44a-ac4616f5f2-640.webp",
          "960": "/prompt-template-images/tpl-28a3c6a6d3a44a-ac4616f5f2-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:04:01.186Z"
    },
    {
      "id": "tpl-ddd0ea59a64d88",
      "slug": "scandinavian-branding-mockup-by-iamaiistudio",
      "title": "Scandinavian Branding Mockup (by @iamaiistudio)",
      "prompt": "://t.co/keLYasNByE prompt: Minimal personal branding identity mockup for a female entrepreneur or creator, displayed on a soft neutral background. Includes a framed portrait with elegant typography, a circular logo with a hand-drawn line-art face illustration, and branded merchandise: white tee, tote bag, and ceramic mug with the same logo print. Grid-style social media layout showing portrait photography, behind-the-scenes content, quote tiles, and solid color brand blocks in warm beige, cream, and muted terracotta. Soft natural lighting, premium lifestyle photography, Scandinavian-inspired aesthetic, balanced editorial composition, consistent brand typography, high-end creative agency pres",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5927,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/aa1e1c00ac9e4d069c260c098d75e34b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ddd0ea59a64d88-392c4ee969-320.webp",
          "640": "/prompt-template-images/tpl-ddd0ea59a64d88-392c4ee969-640.webp",
          "960": "/prompt-template-images/tpl-ddd0ea59a64d88-392c4ee969-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:04:22.569Z"
    },
    {
      "id": "tpl-fe55807778eda7",
      "slug": "satellite-terrain-letter-typography-map-by-iamaiistudio",
      "title": "Satellite Terrain Letter Typography Map (by @iamaiistudio)",
      "prompt": "Ultra-realistic overhead satellite view from orbit, a crisp modern editorial layout featuring 9 vertical panels arranged side by side on a white background, together spelling \"MADPENCIL\", each panel containing a single letter formed entirely from real Earth terrain and natural topography, no text overlays: Panel 1 (M): jagged mountain ridges and deep ravines composing a sharp angular \"M\", dramatic shadows, rocky surface Panel 2 (A): a meandering river through thick tropical forest shaping an \"A\", vivid contrast between water and canopy Panel 3 (D): vast desert sand dunes sculpted by wind into a smooth \"D\", warm earthy tones, gentle gradients Panel 4 (P): patchwork cropland and geometric farm",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6374,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c51d4288247444308377c592116f9f3e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fe55807778eda7-c42beec6bd-320.webp",
          "640": "/prompt-template-images/tpl-fe55807778eda7-c42beec6bd-640.webp",
          "960": "/prompt-template-images/tpl-fe55807778eda7-c42beec6bd-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:04:33.520Z"
    },
    {
      "id": "tpl-7119747a6d603b",
      "slug": "elegant-script-logo-redesigns-lacoste-tesla-ferrari",
      "title": "Elegant Script Logo Redesigns: Lacoste, Tesla, Ferrari",
      "prompt": "A flat, minimalist vector design featuring a highly stylized single letter monogram with the official brand logo below it, representing [BRAND NAME]. **MAIN ELEMENT (THE MONOGRAM):** The center of the design features ONLY the single first letter of \"[BRAND NAME]\". The style is \"Ornamental Vector Typography\" with high calligraphic artistry, mimicking bespoke luxury monograms. This is not a standard font; it is a Highly customized, artistic glyph with elegant flourishes, exaggerated swashes, or ornamental serifs. The lines are clean, precise, and perfectly smooth vector graphics. **SECONDARY ELEMENT (BRAND IDENTIFIER):** Directly below the main stylized letter, positioned centrally, include th",
      "category": "品牌与标志视觉",
      "categorySlug": "brand-logo-visual",
      "rawCategory": "🎨 Logo & Branding",
      "sourceLine": 5830,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-d600b47d5a258f",
      "slug": "refreshing-strawberry-juice-bottle-in-snowy-winter-scene",
      "title": "Refreshing Strawberry Juice Bottle in Snowy Winter Scene",
      "prompt": "Refreshing Strawberry Juice Bottle in Snowy Winter Scene。strawberry juice bottle；citrus blend juice bottle；tropical mixed Nestle juice bottle。",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1275,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c963afeca9aa450bb406080affa5d50c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-d600b47d5a258f-1ed8527af6-320.webp",
          "640": "/prompt-template-images/tpl-d600b47d5a258f-1ed8527af6-640.webp",
          "960": "/prompt-template-images/tpl-d600b47d5a258f-1ed8527af6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:04:54.083Z"
    },
    {
      "id": "tpl-81dbf817a6350a",
      "slug": "dynamic-chocolate-chip-cookies-and-milk-splash-food-photo",
      "title": "Dynamic Chocolate Chip Cookies & Milk Splash Food Photo",
      "prompt": "Dynamic Chocolate Chip Cookies & Milk Splash Food Photo。Dark chocolate chip cookies；Dark Chocolate Chip & Oat；Oat milk splash。",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2258,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8f88269b6f4348f38070615f49c021bc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-81dbf817a6350a-2aa7fdf1fd-320.webp",
          "640": "/prompt-template-images/tpl-81dbf817a6350a-2aa7fdf1fd-640.webp",
          "960": "/prompt-template-images/tpl-81dbf817a6350a-2aa7fdf1fd-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:05:25.220Z"
    },
    {
      "id": "tpl-08372480d2564a",
      "slug": "golden-fried-chicken-splashing-in-creamy-dill-sauce",
      "title": "Golden Fried Chicken Splashing in Creamy Dill Sauce",
      "prompt": "Golden Fried Chicken Splashing in Creamy Dill Sauce。Hyper-realistic hero shot of a luxurious fried chicken thigh floating in the center, surrounded by a splash of creamy white truffle sauce, with shaved mushrooms and fine powder of porcini dusting the motion. Golden skin shines under cinematic key light, background in warm yellow-beige hues with soft haze premium gourmet commercial, --ar 3:4；Creamy yellow with taupe haze；golden crouton crumble。",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2345,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f1796bd2c4394250a9f2dc13356b8f05.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-08372480d2564a-1b2276cb4f-320.webp",
          "640": "/prompt-template-images/tpl-08372480d2564a-1b2276cb4f-640.webp",
          "960": "/prompt-template-images/tpl-08372480d2564a-1b2276cb4f-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:05:37.295Z"
    },
    {
      "id": "tpl-fc5855cd4ee20b",
      "slug": "whimsical-miniature-construction-on-strawberry-drink",
      "title": "Whimsical Miniature Construction on Strawberry Drink",
      "prompt": "Whimsical Miniature Construction on Strawberry Drink。frappe_strawberry_construction；miniature construction workers；Strawberry Frappuccino。",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2455,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9cbc5d4a859848789a4244c8e90a7704.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-fc5855cd4ee20b-d55b35c2be-320.webp",
          "640": "/prompt-template-images/tpl-fc5855cd4ee20b-d55b35c2be-640.webp",
          "960": "/prompt-template-images/tpl-fc5855cd4ee20b-d55b35c2be-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:05:46.942Z"
    },
    {
      "id": "tpl-ff994b582b7a91",
      "slug": "taco-ingredients-breakdown-fresh-food-photography",
      "title": "Taco Ingredients Breakdown | Fresh Food Photography",
      "prompt": "Exploded view of the same taco, presented as a clean, commercial recipe-style breakdown. Exactly five ingredients, matching the first image, separated and arranged vertically from top to bottom, evenly spaced and perfectly aligned. Ingredient order (top → bottom): Fresh tomato salsa — 40 g Shredded cheddar cheese — 30 g Grilled chicken pieces — 80 g Crisp lettuce — 25 g Soft wheat taco tortilla — 60 g (bottom base) Add clear infographic-style annotations for each ingredient. Each annotation includes the ingredient name and its exact weight in grams, written exactly as listed above. Annotation design guidelines: – Clean sans-serif font, medium weight – Text placed inside minimal frames or box",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2572,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/6bf27bbd428149618ac8125ebfea4bf7.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ff994b582b7a91-65cd65f152-320.webp",
          "640": "/prompt-template-images/tpl-ff994b582b7a91-65cd65f152-640.webp",
          "960": "/prompt-template-images/tpl-ff994b582b7a91-65cd65f152-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:05:57.774Z"
    },
    {
      "id": "tpl-03d483e94e96df",
      "slug": "mcdonald-s-fast-food-flat-lay-social-media-ad",
      "title": "McDonald's Fast Food Flat Lay | Social Media Ad",
      "prompt": "Exploring more of Google Nano Banana Pro’s potential. Turning brands into scroll-stopping visuals. Generated with Google Nano Banana Pro on @higgsfield_ai - Prompt Ultra-wide-angle hyper-realistic top-down flat lay photography. A group of 4 real people sitting around a square dining table. The camera is pulled far back, creating significant negative space (empty floor area) around the people and the table, ensuring a clean, minimalist composition. The scene is [VIBE & ATTIRE]: The four people are dressed in [CLOTHING STYLE]. Their interactions are specific: [DESCRIBE ACTION OF EACH PERSON]. The table is a custom physical prop designed like an Instagram post: it has a solid white physical str",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2614,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/2c77ae8fb2e6497cad3a15d2105639b6.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-03d483e94e96df-3ce74f9f2a-320.webp",
          "640": "/prompt-template-images/tpl-03d483e94e96df-3ce74f9f2a-640.webp",
          "960": "/prompt-template-images/tpl-03d483e94e96df-3ce74f9f2a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:06:09.803Z"
    },
    {
      "id": "tpl-dcbd4651b30de2",
      "slug": "culinary-atlas-chicken-and-bacon-dishes-global-food-history",
      "title": "Culinary Atlas: Chicken & Bacon Dishes, Global Food History",
      "prompt": "Google Nano Banana Pro vs. GPT Image 1.5 for my food recommendation prompt. Just give it a couple of ingredients. <instruction> Inputs: Ingredients = [User Choice, e.g., Chicken, Bacon] Step 1: Global Analysis Analyze the ingredients. Select 4 Distinct Countries with a famous dish using these ingredients Goal: A \"Culinary Atlas\" Grid showing 4 different cultural variations of the ingredients. Layout Rule: Output Format: A 2x2 Grid. Content per Panel: Each of the 4 panels must show a Single Open Book Spread for that specific country. Inside Each Panel (The Book Spread Rule): Left Page (The History): 2D Vintage Sepia Sketches. A visual timeline or illustrated recipe of the dish (e.g., \"1850 ->",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2700,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9d59c2756df1444bb8184c3762723008.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-dcbd4651b30de2-006f6653f7-320.webp",
          "640": "/prompt-template-images/tpl-dcbd4651b30de2-006f6653f7-640.webp",
          "960": "/prompt-template-images/tpl-dcbd4651b30de2-006f6653f7-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:06:21.460Z"
    },
    {
      "id": "tpl-e0a446a2774cd1",
      "slug": "japanese-cuisine-miniature-okonomiyaki-and-food-history",
      "title": "Japanese Cuisine: Miniature Okonomiyaki & Food History",
      "prompt": "Analysis: Extract key ingredients, cooking techniques, and cultural food elements Goal: A cookbook where ingredients and dishes emerge in delicious detail Rules: Base: A vintage cookbook with stained pages and fabric cover, historical timeline of food Scene: 3D Miniature kitchen or market scene with chef & ingredients Details: Detailed food textures, steam effects, cooking implements Lighting: Warm kitchen lighting with golden hour quality Output: Single 4:5 image with appetizing details </instructions> ---",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2738,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/256e18df423047488ff59cb52f4bd6cd.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e0a446a2774cd1-a1d7a57320-320.webp",
          "640": "/prompt-template-images/tpl-e0a446a2774cd1-a1d7a57320-640.webp",
          "960": "/prompt-template-images/tpl-e0a446a2774cd1-a1d7a57320-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:06:31.811Z"
    },
    {
      "id": "tpl-0a5412f390a851",
      "slug": "mona-lisa-charcuterie-board-food-art-creative-culinary",
      "title": "Mona Lisa Charcuterie Board Food Art - Creative Culinary",
      "prompt": "Input A: Mona Lisa . <instructions> Act as a world class food expert and artist. Input A: Masterpiece painting (e.g., Mona Lisa, Starry Night, The Scream). Analyze composition, colors, mood, elements. Pick the right food ingredients relevant to the region that can be used in the painting. Goal: Large charcuterie platter replicating the painting using cured meats, cheeses, fruits, nuts, and other ingredients relevant to that region. Rules: decide which ingredients should be used for each part, so the painting looks as realistic as possible but is mainly made out of food. 2x2 grid: Panel 1: Original painting reference; Panel 2: Ingredient map; Panel 3: Overhead build; Panel 4: Final board with",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2762,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e9499e6e5856463488b1774f59c8d023.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0a5412f390a851-2b888ca5c6-320.webp",
          "640": "/prompt-template-images/tpl-0a5412f390a851-2b888ca5c6-640.webp",
          "960": "/prompt-template-images/tpl-0a5412f390a851-2b888ca5c6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:06:41.692Z"
    },
    {
      "id": "tpl-2a7bb31c84b796",
      "slug": "burger-hero-image-plus-9-cell-ad-storyboard-by-gdgtify",
      "title": "Burger hero image plus 9-cell ad storyboard (by @Gdgtify)",
      "prompt": "Prompt 1: Create a cinematic hero image of a gourmet cheeseburger on a dark stone surface with glossy brioche bun, melted cheese, crisp lettuce, tomato, grilled patty, sauce, realistic texture, appetizing steam, warm side light, shallow depth of field, premium food commercial style, no text/logos/watermark. Prompt 2: Create a 9-cell hybrid keyframe-to-transition storyboard sheet for a 15-second gourmet burger ad, moving from empty surface to ingredient assembly to final macro hero shot. Use large S cells and smaller T cells, motion arrows, ghosted ingredient positions, steam, sauce trails, and camera push-in icons. Style: premium food commercial, warm lighting, rich texture, appetizing, cine",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 196,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a35c495cb6b74e3c9a3b13b2230d4141.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-2a7bb31c84b796-d14b2a42bc-320.webp",
          "640": "/prompt-template-images/tpl-2a7bb31c84b796-d14b2a42bc-640.webp",
          "960": "/prompt-template-images/tpl-2a7bb31c84b796-d14b2a42bc-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:06:52.507Z"
    },
    {
      "id": "tpl-8a20aac45eb379",
      "slug": "doner-commercial-food-photography-set-by-iamaiistudio",
      "title": "Döner Commercial Food Photography Set (by @iamaiistudio)",
      "prompt": "prompt: 8K UHD hyper-realistic commercial food photography, 3:4 aspect ratio. 6 scenes, each on its own solid or gradient background: Scene 1, Döner slice explosion: Traditional Turkish döner (beef and lamb mix), paper-thin ribbons spiraling outward mid-air, white garlic sauce and red chili sauce splashing, fresh parsley leaves floating. Deep crimson red background. Scene 2, Dürüm wrap floating: Premium dürüm cut in half and floating vertically, cross-section revealing döner meat, lettuce, tomatoes, onions layered inside, white garlic yogurt sauce drizzling elegantly, subtle spice particles drifting. Warm terracotta orange background. Scene 3, Sauce pour drama: Mound of freshly sliced döner",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 213,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/72693efbbbf645b3b5c95c26705faa41.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-8a20aac45eb379-84ae557423-320.webp",
          "640": "/prompt-template-images/tpl-8a20aac45eb379-84ae557423-640.webp",
          "960": "/prompt-template-images/tpl-8a20aac45eb379-84ae557423-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:07:12.574Z"
    },
    {
      "id": "tpl-c1e4374a171856",
      "slug": "3d-pixel-food-transformation-by-iamaiistudio",
      "title": "3D Pixel Food Transformation (by @iamaiistudio)",
      "prompt": "A minimalist food photograph featuring a single [FOOD] on a clean matte white surface, caught mid-transformation into a 3D pixel art style. The left half is perfectly photorealistic while the right half dissolves into large floating geometric cubes, each cube exposing the food's vibrant colors, textures, and inner details. Soft studio lighting, gentle shadows, shallow depth of field, hyperrealistic meets geometric abstraction, subtle motion blur on the cubes. High resolution cinematic close-up composition. Full prompt:",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 242,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cfb819b8b86a40d09b1372589279668e.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c1e4374a171856-9e05a01a57-320.webp",
          "640": "/prompt-template-images/tpl-c1e4374a171856-9e05a01a57-640.webp",
          "960": "/prompt-template-images/tpl-c1e4374a171856-9e05a01a57-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:07:23.127Z"
    },
    {
      "id": "tpl-605946b41d8cbd",
      "slug": "plush-soda-can-product-shot-by-iamaiistudio",
      "title": "Plush Soda Can Product Shot (by @iamaiistudio)",
      "prompt": "prompt: A soda can featuring the label [BRAND NAME], constructed entirely from soft, colorful plush material, centered against a matching plush background in [BRAND NAME]'s brand colors. Pop Art and Memphis-inspired style, vibrant and premium at the same time. Crisp studio lighting that highlights every fiber, the plush texture, and the tactile softness of the material. Razor-sharp focus, vivid color saturation, clean shadows, sleek commercial product photography, minimalist composition, ultra-high resolution.",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🛒 E-commerce Cases",
      "sourceLine": 274,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e95eeeab2e144ac5a9ed9c46130f4c72.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-605946b41d8cbd-d149bc81b5-320.webp",
          "640": "/prompt-template-images/tpl-605946b41d8cbd-d149bc81b5-640.webp",
          "960": "/prompt-template-images/tpl-605946b41d8cbd-d149bc81b5-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:07:33.940Z"
    },
    {
      "id": "tpl-c7b0c5d59711d9",
      "slug": "viral-food-infographic-poster-by-amynys",
      "title": "Viral Food Infographic Poster (by @amynys)",
      "prompt": "Create a cinematic viral-style food poster for “Prediabetic Friendly Strawberry Cheesecake Overnight Oats” in a clean modern infographic aesthetic inspired by trendy TikTok and Pinterest recipe posters. The poster should feature a large realistic mason jar filled with creamy strawberry cheesecake overnight oats layered with visible chia seeds, sliced strawberries around the inside glass, a thick cheesecake yogurt layer on top, fresh strawberries, and crushed walnuts. The oats should look ultra creamy, indulgent, healthy, and photorealistic with soft natural lighting and shallow depth of field. Use a soft pink, cream, and white color palette with bold typography. The design should feel premiu",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4029,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/a446df254d00452589c56355a154ae69.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c7b0c5d59711d9-953b914f73-320.webp",
          "640": "/prompt-template-images/tpl-c7b0c5d59711d9-953b914f73-640.webp",
          "960": "/prompt-template-images/tpl-c7b0c5d59711d9-953b914f73-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:08:18.160Z"
    },
    {
      "id": "tpl-00c1804822e1fb",
      "slug": "retro-cafe-scrapbook-poster-by-j-smeaton99",
      "title": "Retro Cafe Scrapbook Poster (by @j_smeaton99)",
      "prompt": "Whimsical retro cafe scrapbook poster, dreamy pistachio rose latte aesthetic, layered iced pistachio drink with rose cream foam and milk gradients, ultra-realistic beverage photography blended with hand-drawn journal doodles, soft watercolor marker sketches, playful handwritten cafe notes, tiny arrows and ingredient callouts, sticker-book collage composition, pastel stationery aesthetic, cozy Korean cafe moodboard style, textured paper scraps and washi tape layers, sparkles, bows, cherries, and tiny floral doodles surrounding the drink, trendy Pinterest-inspired cafe branding, warm natural window lighting, creamy foam textures with realistic condensation droplets, rich pistachio green paired",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 4166,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/821ae4bf541441be97eaabd968322d4c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-00c1804822e1fb-54f4e90c68-320.webp",
          "640": "/prompt-template-images/tpl-00c1804822e1fb-54f4e90c68-640.webp",
          "960": "/prompt-template-images/tpl-00c1804822e1fb-54f4e90c68-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:08:28.738Z"
    },
    {
      "id": "tpl-241fbcb346f5a8",
      "slug": "origami-food-poster-by-gdgtify",
      "title": "Origami Food Poster (by @Gdgtify)",
      "prompt": "INPUT: [layered dish] SYSTEM: Render the input as a master-folded origami and paper-craft architectural sculpture. Do not hardcode paper types unless inevitable. Infer the fold-geometry logic, structural load-bearing creases, layer-separation mechanics, color-blocking strategy, and the tactile grain direction of the materials. SEMANTIC SOLVE: ORIGAMI_FOOD_AUTOPSY = (INFER(fold_geometry FROM mountain_valley_ratio + structural_crease_load + interlocking_tabs + negative_space_utilization) ::5) + (INFER(material_logic FROM paper_grain_direction + GSM_weight + surface_coating + edge_burnishing + adhesive_visibility) ::4) + (INFER(color_blocking FROM ingredient_color_mapping + contrast_hierarchy +",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 5637,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/ea4e1403a50a4e00b8a11bb4c16ac1a9.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-241fbcb346f5a8-52bedeb9d8-320.webp",
          "640": "/prompt-template-images/tpl-241fbcb346f5a8-52bedeb9d8-640.webp",
          "960": "/prompt-template-images/tpl-241fbcb346f5a8-52bedeb9d8-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:08:49.909Z"
    },
    {
      "id": "tpl-6ed4184a1dcc57",
      "slug": "food-ad-layered-dessert-by-iamaiistudio",
      "title": "Food Ad Layered Dessert (by @iamaiistudio)",
      "prompt": "://t.co/C2JI1bwCCZ prompt: A partially bitten realistic classic [brand] product resting on a plate, exposing layered dessert fills inside, cake crumbs scattered around, a used fork and knife lying nearby, against a softly blurred high-end restaurant background, a small white brand logo positioned at the top of the image with a fitting brand slogan in tiny text just beneath it. #AIart #GPTImage2",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🎨 Poster & Illustration Cases",
      "sourceLine": 6174,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/07f12f529df5489e9259a368c8e95b0f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6ed4184a1dcc57-369e1bd219-320.webp",
          "640": "/prompt-template-images/tpl-6ed4184a1dcc57-369e1bd219-640.webp",
          "960": "/prompt-template-images/tpl-6ed4184a1dcc57-369e1bd219-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:09:04.754Z"
    },
    {
      "id": "tpl-226f501af9b9d6",
      "slug": "midnight-spark-grape-soda-can-refreshing-product-photo",
      "title": "Midnight Spark Grape Soda Can: Refreshing Product Photo",
      "prompt": "Midnight Spark Grape Soda Can: Refreshing Product Photo。Ultra-realistic luxury beverage product photography of a sleek aluminum can, centered in the frame. The can is deep midnight purple, featuring elegant illustrations of grape clusters and green leaves, and is heavily covered in fresh, cold condensation droplets. Prominently labeled 'Midnight Spark – Bold & Juicy' in premium typography. A dramatic, symmetrical crown-shaped splash of vivid purple grape juice erupts violently upward and outward from immediately behind the can, catching the light. Studio lighting, high detail, 8k resolution, cinematic, macro lens focus on the can and droplets.；Luxury beverage shot for Midnight Spark grape drink.",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "📦 Product Photography",
      "sourceLine": 1199,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-a674b746684e19",
      "slug": "gourmet-burger-food-photography-appetizing-menu-design",
      "title": "Gourmet Burger Food Photography | Appetizing Menu Design",
      "prompt": "Gourmet Burger Food Photography | Appetizing Menu Design。Hyper-realistic hero shot of a rich hot burger hovering mid-air, glazed with miso butter and surrounded by a dynamic splash of umami cream, flecked with toasted seaweed powder and sesame seeds. Dramatic soft shadows sculpt the juicy patty and bun texture. Muted beige background, clean and warm umami-focused food ad, --ar 3:4。",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2400,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-64e71c08a5adbd",
      "slug": "delicious-burger-exploded-view-fresh-ingredients",
      "title": "Delicious Burger Exploded View - Fresh Ingredients",
      "prompt": "The burger fills approximately 90% of the frame, centered, fully visible, not a macro close-up. Exactly five clearly readable layers: glossy brioche bun, juicy beef patty, melted cheese, fresh lettuce, ripe tomato. Shot at a clean three-quarter angle to emphasize height, volume, and structure. Backdrop is bright, modern, and advertising-style: smooth vibrant gradient (warm amber → soft orange, or red → golden yellow), evenly lit, with subtle light falloff for depth. No texture, no clutter. Lighting is bold and appetizing: strong soft key light, controlled specular highlights on the bun, visible juice and gloss on the patty and cheese, crisp freshness on vegetables. Shadows are soft and direc",
      "category": "美食与饮品",
      "categorySlug": "food-beverage",
      "rawCategory": "🍽️ Food & Culinary",
      "sourceLine": 2642,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-92800940871e62",
      "slug": "conceptual-art-jester-s-existential-crisis-specimen-jars",
      "title": "Conceptual Art: Jester's Existential Crisis Specimen Jars",
      "prompt": "Conceptual Art: Jester's Existential Crisis Specimen Jars。极简物体研究；类型学序列布局；角色 vs 原型。",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 2796,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7e07e116d370433da1abdeceba81e18c.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-92800940871e62-97eaab7917-320.webp",
          "640": "/prompt-template-images/tpl-92800940871e62-97eaab7917-640.webp",
          "960": "/prompt-template-images/tpl-92800940871e62-97eaab7917-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:16:38.294Z"
    },
    {
      "id": "tpl-56fcbbc350fe28",
      "slug": "man-with-augmented-reality-music-players-on-urban-street",
      "title": "Man with Augmented Reality Music Players on Urban Street",
      "prompt": "Man with Augmented Reality Music Players on Urban Street。A hyper-realistic, cinematic 8k image of a man standing in a bustling Indian street market at night. He is wearing a plain grey t-shirt, green cargo pants, and white sneakers, holding a smartphone. The scene is overlaid with a detailed Augmented Reality (AR) visualization: numerous floating, translucent frosted-glass music player interface cards (resembling Spotify/Apple Music UI) orbiting the subject in 3D space. The cards feature colorful album artwork, progress bars, and playback controls with a soft, glowing border luminescence (bloom effect). The composition uses depth of field, with some cards blurred in the foreground and others sharp near the subject. The background features authentic Indian street elements: green and yellow auto-rickshaws, shop signs with Hindi text, and warm ambient street lighting contrasting with the co",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 2838,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/47058ddd0e8040e8af0e7e7f60bb3429.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-56fcbbc350fe28-e8def329ee-320.webp",
          "640": "/prompt-template-images/tpl-56fcbbc350fe28-e8def329ee-640.webp",
          "960": "/prompt-template-images/tpl-56fcbbc350fe28-e8def329ee-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:16:49.778Z"
    },
    {
      "id": "tpl-f7dc39902f3a68",
      "slug": "sci-fi-cyberpunk-male-character-portrait-neon-city-night",
      "title": "Sci-Fi Cyberpunk Male Character Portrait - Neon City Night",
      "prompt": "Sci-Fi Cyberpunk Male Character Portrait - Neon City Night。Abstract futuristic city lights, blurred neon signs, cyberpunk ambience；Generate an ultra-realistic cinematic close-up side-profile portrait with a futuristic cyberpunk atmosphere, deep emotional tension, and dramatic lighting.；High-end movie still, cyberpunk noir。",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 2868,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/589e02c6c99e4998a6757f2a60056d1f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f7dc39902f3a68-fffb72334d-320.webp",
          "640": "/prompt-template-images/tpl-f7dc39902f3a68-fffb72334d-640.webp",
          "960": "/prompt-template-images/tpl-f7dc39902f3a68-fffb72334d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:16:59.592Z"
    },
    {
      "id": "tpl-f0bcbdc3125b65",
      "slug": "totoro-and-man-at-rainy-bus-stop-my-neighbor-totoro-art",
      "title": "Totoro & Man at Rainy Bus Stop - My Neighbor Totoro Art",
      "prompt": "Totoro & Man at Rainy Bus Stop - My Neighbor Totoro Art。An ultra-realistic 8K UHD photograph of a rainy night scene at a rural Japanese bus stop. A person (based on the attached photos, with a normal build) is standing, holding a small red umbrella, wearing a red jumpsuit, blue boots, and a yellow t-shirt, looking to the side with an expression of apprehension and curiosity. Beside him, a gigantic, realistic Totoro creature, with wet fur and a leaf on its head, waits in the rain. The setting includes an aged bus stop sign, dense wet forest trees in the background, and the lighting comes from a dim lamppost and the moon, with realistic rain reflections on the wet asphalt. Wide shot. The face must be sharp and expressive.；Gigantic realistic Totoro。",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 2926,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/de3f647f02fa4fc18f8e9c2156602584.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-f0bcbdc3125b65-56a526da1d-320.webp",
          "640": "/prompt-template-images/tpl-f0bcbdc3125b65-56a526da1d-640.webp",
          "960": "/prompt-template-images/tpl-f0bcbdc3125b65-56a526da1d-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:17:32.668Z"
    },
    {
      "id": "tpl-a5dd9523764929",
      "slug": "alisa-fortin-career-journey-fantasy-map-professional",
      "title": "Alisa Fortin Career Journey Fantasy Map - Professional",
      "prompt": "Prompt tip: Download your LinkedIn profile is a PDF and give it to Google Nano Banana Pro with a simple prompt. ---",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 2983,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f18db64cdea54b2f838d496671fd91fc.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a5dd9523764929-c5cf63ac0a-320.webp",
          "640": "/prompt-template-images/tpl-a5dd9523764929-c5cf63ac0a-640.webp",
          "960": "/prompt-template-images/tpl-a5dd9523764929-c5cf63ac0a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:17:44.371Z"
    },
    {
      "id": "tpl-a6b26640388f3a",
      "slug": "surreal-banana-statue-of-liberty-black-friday-deal",
      "title": "Surreal Banana Statue of Liberty | Black Friday Deal",
      "prompt": "Retweet & reply \"EXTENDED\" in 8h - get 300 credits in DM. This deal has never existed in GenAI. ---",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 2999,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/925e12d6e1a64417a0f9b817b7f7b2f4.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a6b26640388f3a-b87d969863-320.webp",
          "640": "/prompt-template-images/tpl-a6b26640388f3a-b87d969863-640.webp",
          "960": "/prompt-template-images/tpl-a6b26640388f3a-b87d969863-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:17:54.732Z"
    },
    {
      "id": "tpl-a6ac1e5f1bc658",
      "slug": "joyful-child-riding-giant-bee-in-fantasy-wildflower-meadow",
      "title": "Joyful Child Riding Giant Bee in Fantasy Wildflower Meadow",
      "prompt": "1. high-definition, hyper-realistic macro photograph of a tiny, miniature girl with long dark hair wearing a flowing brown linen dress, sitting peacefully on the back of a large red ladybug with black spots. The ladybug is perched on a vibrant green leaf covered in glistening, translucent morning dew drops. The background is a soft, creamy bokeh of out-of-focus green foliage and golden sunlight. The lighting is warm and ethereal, capturing every detail of the dew drops and the texture of the ladybug's shell. 2. A high-definition macro photograph of a tiny, detailed adventurer riding on the back of a giant iridescent green dung beetle. The beetle has a shimmering metallic shell with hints of",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 3017,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/7dc20cb7ce34440887f44a4697633a2b.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a6ac1e5f1bc658-7114732d50-320.webp",
          "640": "/prompt-template-images/tpl-a6ac1e5f1bc658-7114732d50-640.webp",
          "960": "/prompt-template-images/tpl-a6ac1e5f1bc658-7114732d50-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:18:06.173Z"
    },
    {
      "id": "tpl-0a70eac6f24eff",
      "slug": "bugdroid-internal-scan-sci-fi-thermal-x-ray-robot-art",
      "title": "Bugdroid Internal Scan | Sci-Fi Thermal X-Ray Robot Art",
      "prompt": "The Google Android robot, presented in a high-contrast scientific studio render against a pure black void. This tight right-side profile features a false-color thermal X-ray aesthetic, where the transparent shell reveals a sharply detailed internal architecture of batteries, drivers, and sensors using a vibrant heatmap gradient. The colors shift from deep cool blues to intense yellows and red highlights, creating a futuristic, clinical look with orthographic perspective and a soft, neon-like glow. ---",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 3038,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/601100a78fc84fc79d3e8b439a3eabbe.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0a70eac6f24eff-2847d258a1-320.webp",
          "640": "/prompt-template-images/tpl-0a70eac6f24eff-2847d258a1-640.webp",
          "960": "/prompt-template-images/tpl-0a70eac6f24eff-2847d258a1-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:18:32.403Z"
    },
    {
      "id": "tpl-51870df4c07252",
      "slug": "cybernetic-samurai-gear-robots-and-sci-fi-city-scenes",
      "title": "Cybernetic Samurai Gear, Robots & Sci-Fi City Scenes",
      "prompt": "Panel 8) portrait of fierce cyber-samurai warrior centered on pure white background. Professional product photography style. ---",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 3054,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/b011535174f54d7089f54620591e7ad8.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-51870df4c07252-ab112f9f44-320.webp",
          "640": "/prompt-template-images/tpl-51870df4c07252-ab112f9f44-640.webp",
          "960": "/prompt-template-images/tpl-51870df4c07252-ab112f9f44-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:18:57.853Z"
    },
    {
      "id": "tpl-6d6fa386a6b6e5",
      "slug": "sci-fi-pilot-portrait-x-wing-hangar-star-wars-aesthetic",
      "title": "Sci-fi Pilot Portrait | X-wing Hangar | Star Wars Aesthetic",
      "prompt": "Role: You are a world-class unit still photographer for high-budget sci-fi films. Your task is to generate a photorealistic cinematic portrait in the visual tone of \"Rogue One: A Star Wars Story or \"Andor\". TOP PRIORITY-IDENTITY PRESERVATION: Use the exact person from the reference photo as the subject. Maintain the exact facial structure: nose, eyes, jawline, cheekbones, mouth Preserve skin tone and natural skin details (pores, freckles, moles, scars). Treat the subject as a real actor placed into a new scene. AESTHETIC REQUIREMENTS: Produce a photorealistic film still with: tangible textures (heavy canvas, scratched plastic, grease stains, industrial metal cinematic lighting and organic fi",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🚀 Fantasy & Sci-Fi",
      "sourceLine": 3070,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/c85feec37e71403393d3f3bfe29b6a31.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-6d6fa386a6b6e5-dd7052303a-320.webp",
          "640": "/prompt-template-images/tpl-6d6fa386a6b6e5-dd7052303a-640.webp",
          "960": "/prompt-template-images/tpl-6d6fa386a6b6e5-dd7052303a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:19:18.783Z"
    },
    {
      "id": "tpl-e3a1847b8edeb5",
      "slug": "intense-cinematic-zombie-apocalypse-survivor-scene",
      "title": "Intense Cinematic Zombie Apocalypse Survivor Scene",
      "prompt": "My photo as a 20 year-old American man, dressed for adventure, leaning against the back of a damaged sedan after a shootout. He held the pistol with his right hand while lying on the asphalt covered in glass shards and dust. His face looked tired and tense, slightly dirty with wounds on his face and legs. It was surrounded by zombies ready to attack. Natural daylight, an intense and realistic atmosphere like a modern action film scene, sharp focus with a cinematic bluish-gray color tone. ---",
      "category": "幻想与科幻",
      "categorySlug": "fantasy-sci-fi",
      "rawCategory": "🎬 Cinematic Posters",
      "sourceLine": 6498,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/cacaf3f32ba041439e829e98cec7fb7d.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-e3a1847b8edeb5-51d95f1280-320.webp",
          "640": "/prompt-template-images/tpl-e3a1847b8edeb5-51d95f1280-640.webp",
          "960": "/prompt-template-images/tpl-e3a1847b8edeb5-51d95f1280-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:19:29.822Z"
    },
    {
      "id": "tpl-ff715fac5551d9",
      "slug": "3d-render-whimsical-miniature-starbucks-coffee-shop-scene",
      "title": "3D Render: Whimsical Miniature Starbucks Coffee Shop Scene",
      "prompt": "{Brand Name} --- Prompt --- 3D chibi-style miniature concept store of {Brand Name}, creatively designed with an exterior inspired by the brand's most iconic product or packaging (such as a giant {brand's core product, e.g., chicken bucket/hamburger/donut/roast duck}). The store features two floors with large glass windows clearly showcasing the cozy and finely decorated interior: {brand's primary color}-themed decor, warm lighting, and busy staff dressed in outfits matching the brand. Adorable tiny figures stroll or sit along the street, surrounded by benches, street lamps, and potted plants, creating a charming urban scene. Rendered in a miniature cityscape style using Cinema 4D, with a bli",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 53,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/8606533a5d3b44e3bc7274b186560e2f.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-ff715fac5551d9-cc3d13fa1a-320.webp",
          "640": "/prompt-template-images/tpl-ff715fac5551d9-cc3d13fa1a-640.webp",
          "960": "/prompt-template-images/tpl-ff715fac5551d9-cc3d13fa1a-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:19:41.795Z"
    },
    {
      "id": "tpl-0ca0693d7fc384",
      "slug": "google-goog-stock-price-and-tech-city-3d-render",
      "title": "Google (GOOG) Stock Price & Tech City 3D Render",
      "prompt": "{User input, default 1:1} * Date: {User input, current date} * Company name or stock ticker: {User input} --- Company Name / Stock Ticker: Google Date: 12/3/2025 ---",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 75,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/f8e07cd3ed13444080cf31d98b9aa5bf.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-0ca0693d7fc384-862b592fce-320.webp",
          "640": "/prompt-template-images/tpl-0ca0693d7fc384-862b592fce-640.webp",
          "960": "/prompt-template-images/tpl-0ca0693d7fc384-862b592fce-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:20:09.571Z"
    },
    {
      "id": "tpl-45f7f2cfab0c70",
      "slug": "man-with-handcrafted-paper-art-origami-and-miniature-doll",
      "title": "Man with Handcrafted Paper Art: Origami & Miniature Doll",
      "prompt": "Man with Handcrafted Paper Art: Origami & Miniature Doll。Two complex origami objects, folded from paper with black and white printed text (similar to newspaper), rest on the table:；A raccoon figure in a quadrupedal stance, with distinctive facial details and stripes created by the paper's pattern and folds.；A humanoid boy (doll larger than the raccoon) standing, with a felt body and hair, disheveled brown hair, black eyes, light skin, wearing clothes (collared shirt, tie, and shorts) made of newspaper folds. The figure holds an open umbrella, also made of the same paper, supported by a thin handle.",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 257,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/250a5685fdf046a882d563a95cde9be0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-45f7f2cfab0c70-a8ed8538a6-320.webp",
          "640": "/prompt-template-images/tpl-45f7f2cfab0c70-a8ed8538a6-640.webp",
          "960": "/prompt-template-images/tpl-45f7f2cfab0c70-a8ed8538a6-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:20:20.215Z"
    },
    {
      "id": "tpl-7f7a974114b8c9",
      "slug": "photorealistic-miniature-construction-on-giant-kfc-french-fries",
      "title": "Photorealistic Miniature Construction on Giant KFC French Fries",
      "prompt": "Photorealistic Miniature Construction on Giant KFC French Fries。A surreal, hyper-realistic scene featuring miniature construction workers sculpting a giant crispy KFC drumstick using tiny tools and ladders.；A surreal, hyper-realistic scene of miniature workers operating tiny forklifts and conveyor belts to pile up giant KFC fries in a branded red carton.；A surreal, hyper-realistic scene where miniature workers carve a massive KFC chicken bucket like a monument.",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 298,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/647c415b814b4886b9730804fc31d285.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-7f7a974114b8c9-df9191604b-320.webp",
          "640": "/prompt-template-images/tpl-7f7a974114b8c9-df9191604b-640.webp",
          "960": "/prompt-template-images/tpl-7f7a974114b8c9-df9191604b-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:21:02.716Z"
    },
    {
      "id": "tpl-c37413d3538ac3",
      "slug": "donald-trump-miniature-in-suitcase-political-novelty",
      "title": "Donald Trump Miniature in Suitcase - Political Novelty",
      "prompt": "Donald Trump Miniature in Suitcase - Political Novelty。Create a hyper-realistic, ultra-detailed cinematic photo featuring a MINIATURE version of the person from the provided reference image (preserve facial likeness, skin tone, hairstyle, and overall identity). The tiny character is relaxing inside an OPEN vintage hard-shell suitcase that is used like a tiny bed. The suitcase sits on a clean stone/tile floor in a bright room with strong natural sunlight casting soft rectangular window shadows across the floor. ONLY VARIABLES: 1) Character: use the user reference photo for the person’s face and identity. 2) Theme/Genre: {THEME} COMPOSITION & SCALE: - The person must be clearly mini-sized (toy-scale) relative to the suitcase, with correct perspective and believable proportions. - The open suitcase interior is styled like a cozy miniature scene: pillow, textured blanket or towel, and themed",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 377,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e32b6b5fcf5446c8bc01148a6c2e91d2.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-c37413d3538ac3-e32609b510-320.webp",
          "640": "/prompt-template-images/tpl-c37413d3538ac3-e32609b510-640.webp",
          "960": "/prompt-template-images/tpl-c37413d3538ac3-e32609b510-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:21:13.733Z"
    },
    {
      "id": "tpl-543fa74c882121",
      "slug": "miniature-astronauts-on-pizza-slice-in-space-3d-render",
      "title": "Miniature Astronauts on Pizza Slice in Space | 3D Render",
      "prompt": "Miniature Astronauts on Pizza Slice in Space | 3D Render。Pizza Hut sign propped up behind slice, partially covered in space dust；Being converted into a space rocket; rocket boosters installed beneath；Large triangular Pizza Hut pepperoni slice。",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 485,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/9fdd51df8788427cb18074bfae87da0a.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-543fa74c882121-17289496ca-320.webp",
          "640": "/prompt-template-images/tpl-543fa74c882121-17289496ca-640.webp",
          "960": "/prompt-template-images/tpl-543fa74c882121-17289496ca-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:21:24.821Z"
    },
    {
      "id": "tpl-a75e7904421aa9",
      "slug": "bratislava-3d-miniature-cityscape-rainy-day-render",
      "title": "Bratislava 3D Miniature Cityscape | Rainy Day Render",
      "prompt": "Present a clear, 45° top-down isometric miniature 3D cartoon scene of [CITY], featuring its most iconic landmarks and architectural elements. Use soft, refined textures with realistic PBR materials and gentle, lifelike lighting and shadows. Integrate the current weather conditions directly into the city environment to create an immersive atmospheric mood. Use a clean, minimalistic composition with a soft, solid-colored background. At the top-center, place the title “[CITY]” in large bold text, a prominent weather icon beneath it, then the date (small text) and temperature (medium text). All text must be centered with consistent spacing, and may subtly overlap the tops of the buildings. Squar",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 612,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/0a0d5b15634346cdaff9f2234a4eaea0.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-a75e7904421aa9-26e6b3e898-320.webp",
          "640": "/prompt-template-images/tpl-a75e7904421aa9-26e6b3e898-640.webp",
          "960": "/prompt-template-images/tpl-a75e7904421aa9-26e6b3e898-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:21:36.484Z"
    },
    {
      "id": "tpl-62c40ae1847a3d",
      "slug": "paris-unfolded-3d-miniature-cityscape-on-french-flag",
      "title": "Paris Unfolded: 3D Miniature Cityscape on French Flag",
      "prompt": "A silk ribbon unfurls diagonally across the canvas, twisting gently in mid-air. Within the folds of the ribbon exists a miniature sculpted city of [CITY], carved as a 3D bas-relief emerging from woven fabric textures. Inside the ribbon: Landmarks, streets, and skyline rhythms of [CITY], flowing naturally with the ribbon’s curvature, layered in subtle depth. Style: Fabric realism fused with sculptural relief. Soft highlights, tactile folds, elegant poster design. Color palette: Derived from the national flag of [COUNTRY], woven seamlessly into the fabric tones. View & background: Top-down minimalist layout, off-white museum paper texture, strong negative space. Typography: Title: “[CITY] UNFO",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 633,
      "imageUrl": "https://platform-outputs.agnes-ai.space/images/text-to-image/2026/06/e40eb27aa6674027bdda011f507646ba.png",
      "imageOptimized": {
        "webp": {
          "320": "/prompt-template-images/tpl-62c40ae1847a3d-fc58737a8e-320.webp",
          "640": "/prompt-template-images/tpl-62c40ae1847a3d-fc58737a8e-640.webp",
          "960": "/prompt-template-images/tpl-62c40ae1847a3d-fc58737a8e-960.webp"
        }
      },
      "imageStatus": "done",
      "imageGeneratedAt": "2026-06-16T16:21:47.452Z"
    },
    {
      "id": "tpl-43ef92a31bb02c",
      "slug": "miniature-construction-crew-on-giant-pepsi-can-in-diner-scene",
      "title": "Miniature Construction Crew on Giant Pepsi Can in Diner Scene",
      "prompt": "Miniature Construction Crew on Giant Pepsi Can in Diner Scene。Giant Black Pepsi can；Miniature construction workers swarm；Pepsi Skyscraper Construction。",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 98,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    },
    {
      "id": "tpl-a36ecddb5192f0",
      "slug": "miniature-construction-on-air-jordan-1-sneaker-art-diorama",
      "title": "Miniature Construction on Air Jordan 1 Sneaker Art Diorama",
      "prompt": "Miniature Construction on Air Jordan 1 Sneaker Art Diorama。Miniature assembly crews climbing the sneaker like a construction site; some are using ropes to hoist the 'Nike' logo into place.；A massive, towering Air Jordan 1 sneaker standing vertically like a skyscraper.；Void-like black studio background to emphasize the scale and texture of the sneaker.",
      "category": "微缩场景与3D装置",
      "categorySlug": "miniature-3d-installation",
      "rawCategory": "🏙️ 3D Miniatures & Dioramas",
      "sourceLine": 400,
      "imageUrl": null,
      "imageOptimized": null,
      "imageStatus": "error",
      "imageGeneratedAt": null
    }
  ]
};

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
