import { useEffect, useRef, useState, type ElementType } from 'react';
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Compass,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Sparkles,
  Target,
  Workflow
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type SplitTextLiteProps = {
  text: string;
  className?: string;
  by?: 'chars' | 'words';
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'strong';
};

function SplitTextLite({ text, className = '', by = 'chars', as = 'span' }: SplitTextLiteProps) {
  const Tag = as as ElementType;
  if (as === 'p' && by === 'words') {
    return <Tag className={`split-text ${className}`}>{text}</Tag>;
  }

  const parts = by === 'words' ? text.split(/(\s+)/) : Array.from(text);
  let index = 0;

  return (
    <Tag className={`split-text ${className}`} aria-label={text}>
      {parts.map((part, partIndex) => {
        if (by === 'words' && /^\s+$/.test(part)) {
          return part;
        }

        const delay = index++ * (by === 'words' ? 42 : 34);
        return (
          <span className="split-unit" style={{ animationDelay: `${delay}ms` }} aria-hidden="true" key={`${part}-${partIndex}`}>
            {part}
          </span>
        );
      })}
    </Tag>
  );
}

const profile = {
  name: '郭文屹',
  role: 'AI Operator · FDE · Brand Strategist',
  phone: '17879602356',
  email: '3134695843@qq.com',
  school: '厦门大学嘉庚学院',
  major: '广告学',
  graduation: '2028.07',
  cities: '厦门 / 杭州 / 广州等可协商',
  internship: '可协商，支持长期实习'
};

const lightStreaks = Array.from({ length: 18 }, (_, index) => index);

function assetPath(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}

function getOptimizedProjectImage(image: string) {
  return assetPath(image.replace('/media/projects/', 'media/projects/optimized/').replace(/\.(jpe?g|png)$/i, '.webp'));
}

const metrics = [
  { value: '300+', label: '单个项目用户问卷 / 访谈 / 实地测试' },
  { value: '80+', label: '校园活动流程衔接与现场执行' },
  { value: '70+', label: '团队 AI 贴纸商用模板产出' },
  { value: '30%', label: '店铺销售转化提升' }
];

const projects = [
  {
    title: '武夷亭品牌营销策划与产品运营',
    period: '2026.05 - 至今',
    role: '品牌营销 / 产品运营',
    accent: 'Brand Growth',
    summary:
      '面向品牌小红书曝光与达人合作需求，建立达人建联、官号内容、账号诊断与矩阵号风格化的运营闭环。',
    points: ['每周达人建联 10+', '每周产出 3 篇官号内容', 'GPT / Gemini 诊断账号问题', 'Codex 辅助矩阵号风格成型'],
    impact: [
      { value: '82 位', label: '目前建联博主' },
      { value: '20 篇', label: '小红书帖子产出' }
    ],
    images: [
      '/media/projects/wuyiting-01.jpg',
      '/media/projects/wuyiting-02.jpg',
      '/media/projects/wuyiting-03.jpg'
    ],
    gradient: 'project-a'
  },
  {
    title: '水豚记账',
    period: '2026.04 - 2026.06',
    role: 'PO / 前端设计',
    accent: 'Product Build',
    summary:
      '针对大学生旅行“想去但难规划”的痛点，负责产品构思、框架、功能链路设计，并使用Codex 搭建前端页面与交互逻辑。',
    points: ['独立发布 MVP 1.0', '测试 300+ 用户', '迭代预算参考与行程规划', '打通内容种草与反馈收集体验'],
    impact: [{ value: '全链路', label: '参与产品的搭建与设计' }],
    images: [
      '/media/projects/capybara-01.jpg',
      '/media/projects/capybara-02.jpg',
      '/media/projects/capybara-03.jpg'
    ],
    gradient: 'project-b'
  },
  {
    title: '美图 AI 贴纸项目',
    period: '2025.12 - 至今',
    role: '市场部 / 设计部负责人',
    accent: 'AIGC Template',
    summary:
      '推动 AI贴纸项目 从创意进入执行阶段，负责模板调研、风格参考、视觉方向梳理与团队任务协调。',
    points: ['个人产出商用模板 20+', '团队模板产出 70+', '完成前期调研与模板规划', '提升市场与设计方向对齐效率'],
    impact: [],
    images: [
      '/media/projects/sticker-01.jpg',
      '/media/projects/sticker-02.png',
      '/media/projects/sticker-03.jpg'
    ],
    gradient: 'project-c'
  },
  {
    title: 'AI 情绪印花设计平台',
    period: '2025.12 - 至今',
    role: 'AI 小组组长 / 矩阵号运营',
    accent: 'AI Ops System',
    summary:
      '围绕平台早期定位，完成用户场景、市场调研、模板方向整合，并将内部研发内容转化为对外传播素材。',
    points: ['用户场景梳理', '市场调研与模板方向整合', '矩阵号选题策划', '内容拆分与账号发布规划'],
    impact: [],
    images: [
      '/media/projects/emotion-01.png',
      '/media/projects/emotion-02.png',
      '/media/projects/emotion-03.png'
    ],
    gradient: 'project-d'
  }
];

const strengths = [
  {
    icon: <Code2 size={24} />,
    title: '产品搭建',
    text: '能从痛点、角色、功能链路出发，用低成本方式搭出 MVP，并通过反馈快速迭代。'
  },
  {
    icon: <Bot size={24} />,
    title: 'AIGC 工作流',
    text: '熟悉 ChatGPT、Gemini、Codex、Stitch、通义千问、豆包，通过AI 赋能极大提高工作与任务处理效率，形成固定工作流。'
  },
  {
    icon: <ChartNoAxesCombined size={24} />,
    title: '运营增长',
    text: '具备小红书内容运营、公众号排版、博主建联、矩阵号运营和用户反馈整理经验。'
  },
  {
    icon: <Compass size={24} />,
    title: '市场调研',
    text: '能通过问卷、访谈、实地访问、竞品研究和模板调研，将模糊需求整理成可执行方向。'
  },
  {
    icon: <Workflow size={24} />,
    title: 'vibe coding',
    text: '用 Codex 快速把想法转成页面、交互和可预览原型，把运营与产品判断落到真实界面。'
  },
  {
    icon: <Megaphone size={24} />,
    title: '品牌策划',
    text: '广告学背景，覆盖品牌营销、内容选题、公关策划、整合传播与视觉方向梳理。'
  }
];

function App() {
  const siteRef = useRef<HTMLElement | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let didRequestVideo = false;
    const requestVideo = () => {
      if (didRequestVideo) return;
      didRequestVideo = true;
      setShouldLoadHeroVideo(true);
    };

    const loadTimer = window.setTimeout(() => {
      requestVideo();
    }, 6000);

    window.addEventListener('pointerdown', requestVideo, { once: true });
    window.addEventListener('scroll', requestVideo, { once: true, passive: true });

    return () => {
      window.clearTimeout(loadTimer);
      window.removeEventListener('pointerdown', requestVideo);
      window.removeEventListener('scroll', requestVideo);
    };
  }, []);

  useEffect(() => {
    if (!shouldLoadHeroVideo) return;

    const video = heroVideoRef.current;
    if (!video) return;

    video.load();
    void video.play().catch(() => {});
  }, [shouldLoadHeroVideo]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        gsap.set('.split-unit, .nav, .hero-content, .section-block, .project-card, .strength-card, .metric-card', {
          clearProps: 'all',
          opacity: 1
        });
        return;
      }

      const opening = gsap.timeline({
        defaults: { ease: 'expo.out' }
      });

      gsap.set('.hero-content', {
        clipPath: 'inset(19% 0% 18% 0%)',
        y: 42,
        scale: 0.985,
        transformOrigin: '50% 52%'
      });
      gsap.set('.nav', { y: -38, opacity: 0, scale: 0.98 });
      gsap.set('.hero-kicker', { y: 24, opacity: 0 });
      gsap.set('.hero-copy', { y: 26, opacity: 0 });
      gsap.set('.hero-actions, .hero-footer', { y: 26, opacity: 0 });

      opening
        .to('.hero-content', {
          clipPath: 'inset(0% 0% 0% 0%)',
          y: 0,
          scale: 1,
          duration: 1.55
        })
        .to('.nav', { y: 0, opacity: 1, scale: 1, duration: 1.15 }, 0.16)
        .to('.hero-kicker', { y: 0, opacity: 1, duration: 1.05 }, 0.42)
        .fromTo(
          '.hero-title .split-unit',
          { yPercent: 132, scaleY: 0.42, opacity: 0, rotateX: -24 },
          {
            yPercent: 0,
            scaleY: 1,
            opacity: 1,
            rotateX: 0,
            duration: 1.25,
            stagger: 0.045,
            ease: 'expo.out'
          },
          0.56
        )
        .fromTo(
          '.hero-role .split-unit',
          { yPercent: 118, scaleY: 0.58, opacity: 0 },
          {
            yPercent: 0,
            scaleY: 1,
            opacity: 1,
            duration: 1.05,
            stagger: 0.055,
            ease: 'power4.out'
          },
          0.96
        )
        .to('.hero-copy', { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out' }, 1.22)
        .to('.hero-actions, .hero-footer', { y: 0, opacity: 1, duration: 1, stagger: 0.12 }, 1.48);

      gsap.utils.toArray<HTMLElement>('.section-block, .contact-section').forEach((section) => {
        const eyebrow = section.querySelector('.section-eyebrow');
        const majorTitleUnits = section.querySelectorAll(
          '.section-heading h2 .split-unit, .experience-copy h2 .split-unit, .contact-grid h2 .split-unit'
        );
        const stagedCards = section.querySelectorAll(
          '.metric-card, .project-card, .strength-card, .education-card, .contact-card, .contact-strip a, .contact-strip span'
        );

        ScrollTrigger.create({
          trigger: section,
          start: 'top 74%',
          once: true,
          onEnter: () => {
            const sectionTimeline = gsap.timeline({ defaults: { ease: 'power4.out' } });

            if (eyebrow) {
              sectionTimeline.from(eyebrow, { x: -96, opacity: 0, duration: 0.95 }, 0);
            }

            if (majorTitleUnits.length) {
              sectionTimeline.from(
                majorTitleUnits,
                {
                  yPercent: 126,
                  scaleY: 0.48,
                  opacity: 0,
                  duration: 1.08,
                  stagger: 0.018
                },
                0.08
              );
            }

            if (stagedCards.length) {
              sectionTimeline.from(
                stagedCards,
                {
                  y: 120,
                  opacity: 0,
                  clipPath: 'inset(14% 0% 0% 0%)',
                  duration: 1.05,
                  stagger: 0.09
                },
                majorTitleUnits.length ? 0.34 : 0.08
              );
            }
          }
        });
      });

      gsap.utils.toArray<HTMLElement>('.section-block .split-text, .contact-section .split-text').forEach((textBlock) => {
        if (textBlock.closest('.hero')) return;
        if (textBlock.matches('.section-heading h2, .experience-copy h2, .contact-grid h2')) return;

        const units = textBlock.querySelectorAll('.split-unit');
        if (!units.length) return;

        ScrollTrigger.create({
          trigger: textBlock,
          start: 'top 86%',
          once: true,
          onEnter: () => {
            gsap.from(units, {
              yPercent: 112,
              opacity: 0,
              scaleY: 0.72,
              duration: 0.86,
              stagger: textBlock.closest('h2, h3, strong') ? 0.02 : 0.012,
              ease: 'power4.out'
            });
          }
        });
      });

      const allowProjectParallax = window.matchMedia('(min-width: 900px)').matches && !ScrollTrigger.isTouch;

      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        const images = card.querySelectorAll('.collage-image');
        const collage = card.querySelector('.project-collage');

        ScrollTrigger.create({
          trigger: card,
          start: 'top 76%',
          once: true,
          onEnter: () => {
            gsap.from(images, {
              y: 86,
              opacity: 0,
              scale: 1.08,
              clipPath: 'inset(0% 0% 100% 0%)',
              duration: 1.28,
              stagger: 0.14,
              ease: 'power4.out'
            });
          }
        });

        if (allowProjectParallax && collage) {
          gsap.to(collage, {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.1
            }
          });
        }
      });
    },
    { scope: siteRef }
  );

  return (
    <main className="site-shell" ref={siteRef}>
      <section id="hero" className="hero section-full">
        <div className="video-field" aria-hidden="true">
          <video
            className="hero-video"
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload={shouldLoadHeroVideo ? 'metadata' : 'none'}
            poster={assetPath('media/hero-poster.webp')}
          >
            {shouldLoadHeroVideo ? <source src={assetPath('media/hero-background.mp4')} type="video/mp4" /> : null}
          </video>
          <div className="video-grade" />
          <div className="lightfall-field">
            {lightStreaks.map((item) => (
              <span key={item} />
            ))}
          </div>
          <div className="video-noise" />
          <div className="video-orbit orbit-one" />
          <div className="video-orbit orbit-two" />
          <div className="video-scan" />
        </div>

        <nav className="nav">
          <a className="brand" href="#hero" aria-label="回到首页">
            <span>文艺</span>
            <small>Portfolio / 2026</small>
          </a>
          <div className="nav-links">
            <a href="#experience">经历</a>
            <a href="#projects">项目</a>
            <a href="#strengths">优势</a>
            <a href="#contact">联系</a>
          </div>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            <Mail size={16} />
            联系我
          </a>
        </nav>

        <div className="container hero-content">
          <div className="hero-kicker">
            <span>新版本</span>
            <span>AI 运营</span>
            <span>前沿部署工程</span>
            <span>品牌策划</span>
          </div>
          <SplitTextLite text="郭文屹" as="h1" className="hero-title" />
          <SplitTextLite text={profile.role} className="hero-role" by="words" />
          <SplitTextLite
            text="广告学本科在读，把 vibe coding 产品搭建、AIGC 工作流、运营增长与市场调研组合成可落地的项目推进能力。"
            as="p"
            className="hero-copy"
            by="words"
          />
          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              查看项目
              <ArrowUpRight size={18} />
            </a>
            <a href={`tel:${profile.phone}`} className="ghost-button">
              <Phone size={18} />
              {profile.phone}
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span>Available for internship</span>
          <span>{profile.cities}</span>
          <span>{profile.internship}</span>
        </div>
      </section>

      <section id="experience" className="section-block">
        <div className="container experience-grid">
          <div className="portrait-panel">
            <div className="portrait">
              <div className="portrait-core">文艺</div>
              <div className="portrait-ring" />
            </div>
            <div className="portrait-meta">
              <span>AI 运营师</span>
              <span>前沿部署工程师 FDE</span>
              <span>品牌策划师</span>
            </div>
          </div>

          <div className="experience-copy">
            <p className="section-eyebrow">Profile</p>
            <SplitTextLite text="在运营、产品与 AI工具之间， 搭建能被验证的增长原型。" as="h2" by="words" />
            <SplitTextLite
              text={`我是厦门大学嘉庚学院广告学本科在读学生，预计 ${profile.graduation} 毕业。 过往项目覆盖品牌营销、内容运营、产品 MVP 搭建、 博主建联、矩阵号运营与 AIGC 内容辅助，熟悉调研访谈、内容选题、产品迭代和跨角色推进。`}
              as="p"
              by="words"
            />

            <div className="contact-strip">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`}>
                <Phone size={18} />
                {profile.phone}
              </a>
              <span>
                <MapPin size={18} />
                {profile.cities}
              </span>
            </div>

            <div className="education-card">
              <div>
                <span>Education</span>
                <strong>
                  {profile.school} · {profile.major}
                </strong>
              </div>
              <div>
                <span>GPA</span>
                <strong>3.14 / 4.00 · 专业前 20%</strong>
              </div>
              <div>
                <span>Graduation</span>
                <strong>{profile.graduation}</strong>
              </div>
            </div>
          </div>

          <div className="metrics-grid">
            {metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <SplitTextLite text={metric.value} as="strong" />
                <SplitTextLite text={metric.label} by="words" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-block projects-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Selected Work</p>
            <SplitTextLite text="精选项目" as="h2" />
            <SplitTextLite text={'把品牌、内容、调研和产品原型\n连成一条执行链路。'} as="p" by="words" />
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.gradient}-card`} key={project.title}>
                <div className={`project-visual ${project.gradient}`}>
                  <span>{project.accent}</span>
                  <div className="project-collage">
                    {project.images.map((image, imageIndex) => (
                      <img
                        className={`collage-image collage-image-${imageIndex + 1}`}
                        src={getOptimizedProjectImage(image)}
                        alt={`${project.title} 视觉素材 ${imageIndex + 1}`}
                        key={image}
                        decoding="async"
                        fetchPriority="low"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="visual-line line-a" />
                  <div className="visual-line line-b" />
                  <div className="visual-block" />
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <SplitTextLite text={project.period} by="words" />
                    <SplitTextLite text={project.role} by="words" />
                  </div>
                  <SplitTextLite text={project.title} as="h3" />
                  <SplitTextLite text={project.summary} as="p" by="words" />
                  <div className="project-tags">
                    {project.points.map((point) => (
                      <span key={point}>
                        <SplitTextLite text={point} by="words" />
                      </span>
                    ))}
                  </div>
                  {project.impact.length > 0 ? (
                    <div className={`project-impact ${project.impact.length === 1 ? 'single-impact' : ''}`}>
                      {project.impact.map((item) => (
                        <div key={item.label}>
                          <SplitTextLite text={item.value} as="strong" by="words" />
                          <SplitTextLite text={item.label} by="words" />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="strengths" className="section-block">
        <div className="container">
          <div className="section-heading compact">
            <p className="section-eyebrow">Capabilities</p>
            <SplitTextLite text="个人优势" as="h2" />
          </div>
          <div className="strength-grid">
            {strengths.map((strength) => (
              <article className="strength-card" key={strength.title}>
                <div className="strength-icon">{strength.icon}</div>
                <SplitTextLite text={strength.title} as="h3" />
                <SplitTextLite text={strength.text} as="p" by="words" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-full">
        <div className="container contact-grid">
          <div>
            <p className="section-eyebrow">Contact</p>
            <SplitTextLite text="让下一个项目，从一个可验证的原型开始。" as="h2" by="words" />
            <SplitTextLite
              text="目标实习方向：内容运营 / 新媒体运营 / 用户运营 / 产品运营。也欢迎围绕 AI 运营、FDE、品牌策划与 MVP 搭建展开合作。"
              as="p"
              by="words"
            />
          </div>
          <div className="contact-card">
            <div className="contact-card-top">
              <Sparkles size={24} />
              <span>Open to long-term internship</span>
            </div>
            <a href={`mailto:${profile.email}`}>
              <Mail size={20} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`}>
              <Phone size={20} />
              {profile.phone}
            </a>
            <span>
              <BriefcaseBusiness size={20} />
              {profile.internship}
            </span>
            <span>
              <Target size={20} />
              {profile.cities}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
