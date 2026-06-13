import './DesignSystemPage.css';
import { useState } from 'react';
import {
  Badge,
  Button,
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  Field,
  Grid,
  Input,
  Row,
  Section,
  Select,
  SegmentedControl,
  Stack,
  Textarea,
} from '../components/ui';

// 颜色令牌清单：用于可视化设计系统色板。
const COLOR_TOKENS: { name: string; varName: string }[] = [
  { name: 'bg', varName: '--bg' },
  { name: 'surface', varName: '--surface' },
  { name: 'surface-warm', varName: '--surface-warm' },
  { name: 'border', varName: '--border' },
  { name: 'border-soft', varName: '--border-soft' },
  { name: 'fg', varName: '--fg' },
  { name: 'fg-2', varName: '--fg-2' },
  { name: 'muted', varName: '--muted' },
  { name: 'accent', varName: '--accent' },
  { name: 'meta', varName: '--meta' },
  { name: 'success', varName: '--success' },
  { name: 'warn', varName: '--warn' },
  { name: 'danger', varName: '--danger' },
];

const TYPE_SCALE: { token: string; sample: string }[] = [
  { token: '--text-4xl', sample: 'Display 66' },
  { token: '--text-3xl', sample: 'Heading 48' },
  { token: '--text-2xl', sample: 'Title 32' },
  { token: '--text-xl', sample: 'Subtitle 22' },
  { token: '--text-lg', sample: 'Lead 17' },
  { token: '--text-base', sample: 'Body 15' },
  { token: '--text-sm', sample: 'Small 13' },
  { token: '--text-xs', sample: 'Caption 12' },
];

const SPACE_TOKENS = ['--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6', '--space-8', '--space-12'];
const RADIUS_TOKENS = ['--radius-sm', '--radius-md', '--radius-lg', '--radius-pill'];

type DemoMode = 'text' | 'image' | 'multi';

/**
 * 设计系统预览页（仅开发环境）。
 * 纯前端渲染，集中展示色彩、字体、间距、圆角及通用组件，
 * 用于验证组件复用效果与样式还原质量。
 */
export function DesignSystemPage() {
  const [mode, setMode] = useState<DemoMode>('text');

  return (
    <div className="ds-page">
      <Section>
        <Container>
          <Eyebrow>DESIGN SYSTEM / PREVIEW</Eyebrow>
          <h1 className="ds-title">Agnes 设计系统预览</h1>
          <p className="ui-lead">
            仅用于开发环境校验设计令牌与通用组件。所有元素均来自 <code>components/ui</code> 与全局令牌。
          </p>
        </Container>
      </Section>

      {/* 颜色 */}
      <Container as="section" className="ds-block">
        <Eyebrow>COLOR TOKENS</Eyebrow>
        <h2>颜色</h2>
        <div className="ds-swatches">
          {COLOR_TOKENS.map((token) => (
            <div className="ds-swatch" key={token.varName}>
              <span className="ds-swatch-chip" style={{ background: `var(${token.varName})` }} />
              <strong>{token.name}</strong>
              <code>{token.varName}</code>
            </div>
          ))}
        </div>
      </Container>

      {/* 字体 */}
      <Container as="section" className="ds-block">
        <Eyebrow>TYPOGRAPHY</Eyebrow>
        <h2>字体与字号</h2>
        <Card>
          <Stack>
            {TYPE_SCALE.map((item) => (
              <div className="ds-type-row" key={item.token}>
                <span style={{ fontSize: `var(${item.token})`, lineHeight: 1.1 }}>{item.sample}</span>
                <code>{item.token}</code>
              </div>
            ))}
            <p className="ds-mono">Mono · var(--font-mono) · 0123456789</p>
          </Stack>
        </Card>
      </Container>

      {/* 间距与圆角 */}
      <Container as="section" className="ds-block">
        <Eyebrow>SPACING & RADIUS</Eyebrow>
        <h2>间距与圆角</h2>
        <Grid cols={2}>
          <Card>
            <h3>间距</h3>
            <div className="ds-space-list">
              {SPACE_TOKENS.map((token) => (
                <div className="ds-space-row" key={token}>
                  <span className="ds-space-bar" style={{ width: `var(${token})` }} />
                  <code>{token}</code>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3>圆角</h3>
            <div className="ds-radius-list">
              {RADIUS_TOKENS.map((token) => (
                <div className="ds-radius-item" key={token}>
                  <span className="ds-radius-box" style={{ borderRadius: `var(${token})` }} />
                  <code>{token}</code>
                </div>
              ))}
            </div>
          </Card>
        </Grid>
      </Container>

      {/* 按钮 */}
      <Container as="section" className="ds-block">
        <Eyebrow>BUTTONS</Eyebrow>
        <h2>按钮</h2>
        <Card>
          <Row>
            <Button variant="primary">Primary</Button>
            <Button>Default</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </Row>
          <Row className="ds-gap-top">
            <Button variant="primary" size="sm">
              Small primary
            </Button>
            <Button size="sm">Small default</Button>
            <ButtonLink to="/design-system" variant="ghost" size="sm">
              ButtonLink
            </ButtonLink>
          </Row>
        </Card>
      </Container>

      {/* 徽标 */}
      <Container as="section" className="ds-block">
        <Eyebrow>BADGES</Eyebrow>
        <h2>徽标</h2>
        <Card>
          <Row>
            <Badge>Default</Badge>
            <Badge tone="ok">OK</Badge>
            <Badge tone="warn">Warn</Badge>
            <Badge tone="danger">Danger</Badge>
          </Row>
        </Card>
      </Container>

      {/* 卡片 */}
      <Container as="section" className="ds-block">
        <Eyebrow>CARDS</Eyebrow>
        <h2>卡片</h2>
        <Grid cols={3}>
          <Card as="article">
            <Badge tone="ok">card</Badge>
            <h3>标准卡片</h3>
            <p>玻璃命令面，带投影与渐变背景。</p>
          </Card>
          <Card variant="tile" as="article">
            <Badge>tile</Badge>
            <h3>Tile 卡片</h3>
            <p>带角部光晕装饰，用于能力陈列。</p>
          </Card>
          <Card flat as="article">
            <Badge tone="warn">flat</Badge>
            <h3>无投影卡片</h3>
            <p>用于列表内或嵌套场景。</p>
          </Card>
        </Grid>
      </Container>

      {/* 表单 */}
      <Container as="section" className="ds-block">
        <Eyebrow>FORMS</Eyebrow>
        <h2>表单控件</h2>
        <Card>
          <Stack>
            <SegmentedControl<DemoMode>
              ariaLabel="演示模式"
              value={mode}
              onChange={setMode}
              options={[
                { value: 'text', label: '文生图' },
                { value: 'image', label: '图生图' },
                { value: 'multi', label: '多图合成' },
              ]}
            />
            <Field label="Prompt" htmlFor="ds-prompt">
              <Textarea id="ds-prompt" defaultValue="深色科技产品海报，悬浮的 AI 影像生成核心，蓝色自动化光轨" />
            </Field>
            <div className="ui-grid-2">
              <Field label="输出尺寸" htmlFor="ds-size">
                <Select id="ds-size" defaultValue="1024">
                  <option value="1024">1024 × 1024</option>
                  <option value="1536">1536 × 1024</option>
                  <option value="768">1024 × 768</option>
                </Select>
              </Field>
              <Field label="Seed" htmlFor="ds-seed">
                <Input id="ds-seed" placeholder="留空随机" />
              </Field>
            </div>
          </Stack>
        </Card>
      </Container>

      {/* 布局 */}
      <Container as="section" className="ds-block">
        <Eyebrow>LAYOUT</Eyebrow>
        <h2>布局栅格</h2>
        <Stack>
          <Grid cols={3}>
            <div className="ds-cell">grid-3</div>
            <div className="ds-cell">grid-3</div>
            <div className="ds-cell">grid-3</div>
          </Grid>
          <Grid cols={2}>
            <div className="ds-cell">grid-2</div>
            <div className="ds-cell">grid-2</div>
          </Grid>
          <Row>
            <div className="ds-cell">row</div>
            <div className="ds-cell">row</div>
            <div className="ds-cell">row</div>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}
