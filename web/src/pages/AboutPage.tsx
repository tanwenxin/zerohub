import { usePreferences } from '../usePreferences';

const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || 'hi@aigeniv.xyz';
const serviceOwner = (import.meta.env.VITE_SERVICE_OWNER as string | undefined)?.trim();

export function AboutPage() {
  const { language } = usePreferences();

  if (language === 'en') {
    return (
      <article className="legal-page">
        <p className="eyebrow">About</p>
        <h1>About Agnes Frame Studio</h1>
        <p className="legal-lead">
          Agnes Frame Studio is an AI image and video workspace for calibrating ideas, developing
          visual drafts, and reviewing generated outputs before publication.
        </p>
        <section>
          <h2>What the service does</h2>
          <p>
            The product supports text-to-image, image-to-image, multi-image composition, text-to-video,
            image-to-video, multi-image video, and keyframe animation workflows.
          </p>
        </section>
        <section>
          <h2>Editorial position</h2>
          <p>
            Generated media should be treated as draft material. Users are expected to verify rights,
            factual context, likeness usage, and platform policy compliance before publishing.
          </p>
        </section>
        <section>
          <h2>Operator</h2>
          <p>{serviceOwner || 'Configure VITE_SERVICE_OWNER before production launch.'}</p>
          <p>{contactEmail || 'Configure VITE_CONTACT_EMAIL before production launch.'}</p>
        </section>
      </article>
    );
  }

  return (
    <article className="legal-page">
      <p className="eyebrow">About</p>
      <h1>关于 Agnes 显影室</h1>
      <p className="legal-lead">
        Agnes 显影室是一个 AI 图片与视频生成工作台，用于校准灵感、显影草图，并在发布前审查生成结果。
      </p>
      <section>
        <h2>服务能力</h2>
        <p>
          产品支持文生图、图生图、多图合成、文生视频、图生视频、多图视频和关键帧动画等工作流。
        </p>
      </section>
      <section>
        <h2>内容立场</h2>
        <p>
          生成媒体应被视为草稿素材。用户在发布前需要自行核验素材权利、事实语境、肖像授权和目标平台政策。
        </p>
      </section>
      <section>
        <h2>运营方</h2>
        <p>{serviceOwner || '生产发布前请配置 VITE_SERVICE_OWNER。'}</p>
        <p>{contactEmail || '生产发布前请配置 VITE_CONTACT_EMAIL。'}</p>
      </section>
    </article>
  );
}
