export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "活动与社媒执行",
        "tagline": "活动筹备｜宣传物料｜渠道维护｜AI复盘",
        "items": [
          {
            "name": "AI资讯产品活动与社媒执行",
            "meta": "北京搜狐新媒体信息有限公司 · AI 产品运营实习生",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "活动执行：宣传准备、体验引导与现场支持",
              "内容物料：100+条内容，校对与博主协作",
              "渠道维护：标题、首图及内容A/B测试",
              "AI复盘：注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "高校活动与宣传支持",
        "tagline": "高校对接｜流程与材料｜公众号｜资料交接",
        "items": [
          {
            "name": "AI教育产品高校活动与宣传支持",
            "meta": "北京织知玄华智能科技有限公司 · 市场营销实习生",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "活动落地：高校对接、资料准备与现场答疑",
              "内容支持：100+条反馈整理，30+篇公众号内容",
              "合作跟进：需求分工、协议签署与资料交接",
              "反馈迭代：10条建议，期间核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品宣传与内容执行",
        "tagline": "新品调研｜拍摄剪辑｜渠道宣传｜周度复盘",
        "items": [
          {
            "name": "ZUS Coffee新品宣传与社媒内容执行",
            "meta": "Zuspresso (M) Sdn. Bhd. · 海外新媒体运营实习生",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "信息整理：用户偏好、社媒反馈与竞品内容",
              "内容执行：50条Instagram内容，英文文案与剪辑",
              "渠道配合：线上首发及FamilyMart素材与排期",
              "周度复盘：15+次内容复盘，协同粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Campaigns & Social Execution",
        "tagline": "Preparation · Materials · Channels · AI Reviews",
        "items": [
          {
            "name": "AI Information Product Campaigns & Social Execution",
            "meta": "Beijing Sohu New Media · AI Product Operations Intern",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Execution: promotional preparation, guided trials and on-site support",
              "Materials: 100+ posts, copy checks and creator coordination",
              "Channels: title, cover and content A/B tests",
              "AI review: registrations +50% versus prior week; first-topic rate approximately +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "University Events & Content Support",
        "tagline": "Coordination · Materials · WeChat · Documents",
        "items": [
          {
            "name": "AI Education University Events & Content Support",
            "meta": "Beijing Zhizhi Xuanhua Intelligent Technology · Marketing Intern",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Events: university coordination, materials and on-site questions",
              "Content: 100+ classified feedback items and 30+ WeChat pieces",
              "Cooperation: needs, responsibilities, signing and document handoff",
              "Iteration: 10 suggestions; core-feature usage +30% during the period"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Product Promotion & Content Execution",
        "tagline": "Research · Shooting & Editing · Channels · Reviews",
        "items": [
          {
            "name": "ZUS Coffee Product Promotion & Social Content Execution",
            "meta": "Zuspresso (M) Sdn. Bhd. · Overseas Social Media Operations Intern",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: user preferences, social feedback and competitor content",
              "Content: 50 Instagram posts, English copy and editing",
              "Channels: online launch and FamilyMart materials and schedules",
              "Review: 15+ content reviews; contributed to 11k+ follower growth"
            ]
          }
        ]
      }
    ]
  }
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
