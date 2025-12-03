

import { SectionType } from './types';

// Images
export const IMAGES = {
  HERO_BG: "https://picsum.photos/id/1050/1920/1080",
  OVERVIEW_GROWTH: "https://storage.googleapis.com/zhuboquanyi/%E6%88%90%E9%95%BF%E4%BD%93%E7%B3%BB.jpeg",
  OVERVIEW_BENEFITS: "https://storage.googleapis.com/zhuboquanyi/%E6%9D%83%E7%9B%8A%E4%BD%93%E7%B3%BB.jpeg",
  OVERVIEW_ALLOC: "https://storage.googleapis.com/zhuboquanyi/%E6%9D%83%E7%9B%8A%E5%88%86%E9%85%8D.jpeg",
  
  // Strategy Section Images
  TRENDS_CHART: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900", // Chart showing growth
  BUSINESS_BG: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1600&h=900", // Coins/Business
  TRAFFIC_NETWORK: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600&h=900", // Network connections
  MODEL_PATH: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600&h=900", // Team/Steps

  // Updated to Vertical Images for Growth
  GROWTH_1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=1200", 
  GROWTH_2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=1200",
  GROWTH_3: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=1200",
  // Updated to Vertical Images for Benefits
  BENEFIT_TRAFFIC: "https://picsum.photos/id/1041/800/1200",
  BENEFIT_MONEY: "https://picsum.photos/id/1033/800/1200",
  BENEFIT_SOCIAL: "https://picsum.photos/id/1025/800/1200",
  BENEFIT_HONOR: "https://picsum.photos/id/1015/800/1200",
  
  TRAFFIC_BG: "https://picsum.photos/id/1041/1200/800",
  MONEY_BG: "https://picsum.photos/id/1033/1200/800",
  SOCIAL_BG: "https://picsum.photos/id/1025/1200/800",
  HONOR_BG: "https://picsum.photos/id/1015/1200/800",
  CLIENT_BG: "https://picsum.photos/id/1/1200/800",
  INCENTIVE_TECH: "https://picsum.photos/id/1011/600/400",
  INCENTIVE_FUN: "https://picsum.photos/id/1012/600/400",
  INCENTIVE_ENT: "https://picsum.photos/id/1013/600/400",
};

export const OVERVIEW_DATA = [
  {
    id: 'growth',
    title: '主播成长体系',
    description: '从萌新到顶流的清晰晋升路径',
    image: IMAGES.OVERVIEW_GROWTH,
  },
  {
    id: 'benefits',
    title: '主播权益体系',
    description: '四大维度全方位赋能主播',
    image: IMAGES.OVERVIEW_BENEFITS,
  },
  {
    id: 'allocation',
    title: '权益分配机制',
    description: '科学公平的资源分发引擎',
    image: IMAGES.OVERVIEW_ALLOC,
  },
];

export const GROWTH_STEPS = [
  {
    id: '1',
    title: '积累粉丝',
    subtitle: 'ACCUMULATE FANS',
    description: '注册成为主播，开启直播生涯，通过优质内容吸引第一批核心粉丝。',
    image: IMAGES.GROWTH_1,
  },
  {
    id: '2',
    title: '签约激活',
    subtitle: 'SIGNING & ACTIVATION',
    description: '达到标准成为签约主播，正式激活官方成长体系，解锁专属后台权限。',
    image: IMAGES.GROWTH_2,
  },
  {
    id: '3',
    title: '进阶之路',
    subtitle: 'ROAD TO GLORY',
    description: '随着粉丝量级提升及任务完成，等级不断攀升，解锁更多独家核心权益。',
    image: IMAGES.GROWTH_3,
  },
];

export const BENEFITS_CATEGORIES = [
  { 
    id: SectionType.TRAFFIC, 
    title: '流量类', 
    subtitle: 'TRAFFIC',
    desc: '独占曝光，亿级流量扶持',
    image: IMAGES.BENEFIT_TRAFFIC
  },
  { 
    id: SectionType.MONETIZATION, 
    title: '变现类', 
    subtitle: 'MONETIZATION',
    desc: '多元收入，开启商业蓝海',
    image: IMAGES.BENEFIT_MONEY
  },
  { 
    id: SectionType.SOCIAL, 
    title: '社交类', 
    subtitle: 'SOCIAL',
    desc: '粉丝互动，排面拉满体验',
    image: IMAGES.BENEFIT_SOCIAL
  },
  { 
    id: SectionType.HONOR, 
    title: '荣誉类', 
    subtitle: 'HONOR',
    desc: '官方背书，加冕至高荣耀',
    image: IMAGES.BENEFIT_HONOR
  },
];

export const TRAFFIC_BENEFITS = {
  title: "流量类权益",
  subtitle: "通过独占内容、权益获得流量",
  items: [
    {
      id: 't1',
      title: '主播主页',
      description: '游戏内经营自己的主页，上传攻略、视频，沉淀粉丝流量，直播时一键引流。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/468b6408-f947-4952-ba64-8848074d6f46/width=450/00020-2219808398.jpeg",
    },
    {
      id: 't2',
      title: '游戏内曝光',
      description: '教培专区、情报页等高热度区域直接引流到你的主播主页。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2a3e5950-8049-43c3-9828-984443194553/width=450/00028-2219808406.jpeg",
    },
    {
      id: 't3',
      title: '版本抢鲜体验',
      description: '新皮肤、新英雄、娱乐模式提前体验，获得全网独家首发关注。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e167c134-2e90-48e0-a7d5-0f6671041926/width=450/00004-3687355866.jpeg",
    },
    {
      id: 't4',
      title: '主播惊喜夜',
      description: '官方投入海量皮肤，主播直播间免费送礼，瞬间引爆直播间流量。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5c45e483-2d93-4a87-8d26-724d101d293d/width=450/00104-1835334994.jpeg",
    },
    {
      id: 't5',
      title: '官方互动',
      description: '与官方账号共创视频，官方查房互动，打造最有排面的官方认证主播。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7be9e5c4-72a3-48b4-87d2-0692576b9275/width=450/00115-1835335005.jpeg",
    },
  ]
};

export const MONETIZATION_BENEFITS = {
  title: "变现类权益",
  subtitle: "商业化权益让渡，获得额外收益",
  items: [
    {
      id: 'm1',
      title: '主播小店',
      description: '开启游戏商品售卖特权，直接售卖游戏道具，获得高额收益分成。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1359c55b-4835-4c46-95e2-2a94770144d2/width=450/00035-2219808413.jpeg",
    },
    {
      id: 'm2',
      title: '小店独家货品',
      description: '不定期给予限定皮肤或道具的大额独享折扣，提升转化收益。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/81df2204-c3e3-4d4e-b552-8c903a452d3d/width=450/00042-2219808420.jpeg",
    },
    {
      id: 'm3',
      title: '定制官方道具',
      description: '主播主题定制道具，端内星币售卖，根据销量享受梯度激励。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e82e6d62-8178-433e-b873-10e8d3568285/width=450/00057-2219808435.jpeg",
    },
    {
      id: 'm4',
      title: '定制虚拟点券卡',
      description: '主播联名专属点券卡，小店独家售卖，获得专属分成。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c2a51054-d84e-4e4b-b016-56247c7e96b8/width=450/00063-2219808441.jpeg",
    },
    {
      id: 'm5',
      title: '端内送礼',
      description: '沉淀端内粉丝，直播间外也能享受粉丝礼物分成。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a04f2c04-9457-410e-8f2c-633045231c6a/width=450/00078-2219808456.jpeg",
    },
  ]
};

export const SOCIAL_BENEFITS = {
  title: "社交类权益",
  subtitle: "独占社交体验，让你和粉丝倍儿有排面",
  items: [
    {
      id: 's1',
      title: '粉丝等级灯牌',
      description: '粉丝挂上专属灯牌，自定义粉丝权益，i播宝宝们快上车。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a31b262d-0453-485a-a309-8446c757c91c/width=450/00085-1835334975.jpeg",
    },
    {
      id: 's2',
      title: '灵宝嘴替',
      description: '巅峰赛太激烈？灵宝当嘴替：喜欢主播点关注，感谢宝宝送的666。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3842187b-4d43-4cc0-b384-5f532a229509/width=450/00092-1835334982.jpeg",
    },
    {
      id: 's3',
      title: '社群与机器人',
      description: '背靠微信手Q建立官方会员群，提供智能群机器人协助高效管理。',
      image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9c836940-0588-4224-8173-677a28498f45/width=450/00135-1835335025.jpeg",
    },
  ]
};

export const HONOR_BENEFITS = {
  title: "荣誉类权益",
  subtitle: "定期奖项评审，获得专属殊荣",
  items: [
    {
      id: 'h1',
      title: '年度颁奖典礼',
      description: '受邀参加年度线下盛典，走红毯，领大奖。',
      image: "https://picsum.photos/id/501/800/400",
    },
    {
      id: 'h2',
      title: '名人堂入驻',
      description: '顶尖主播入驻游戏内名人堂，永久记录你的高光时刻。',
      image: "https://picsum.photos/id/502/800/400",
    },
  ]
};

export const ALLOCATION_TYPES = [
  {
    title: '主播端',
    description: '注册主播后即可激活。整合游戏内所有流量、变现能力。随着等级成长，逐渐解锁更多功能模块。',
    image: IMAGES.CLIENT_BG,
    tags: ['工具赋能', '一站式管理', '数据看板'],
  },
  {
    title: '官方激励',
    description: '官方定期发布激励活动。随着等级成长，可报名更多类型活动。',
    image: IMAGES.INCENTIVE_TECH,
    tags: ['丰富活动', '精准匹配', '高效透明'],
  }
];
