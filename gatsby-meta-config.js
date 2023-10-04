module.exports = {
  title: `unoung.Devlog`,
  description: `개발로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://unoung.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `권선영`,
    bio: {
      role: `개발자`,
      description: ['경험과 경험을 잇는', '감각적인', '영화를 좋아하는', '옷을 좋아하는'],
      thumbnail: 'itsme.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: 'https://github.com/unoung', // `https://github.com/zoomKoding`,
      linkedIn: 'https://www.linkedin.com/in/sunyoung-kwon-63327a278',
      email: 'unoung@icloud.com', // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.07 ~ 2023.07',
        activity: 'GML Frontend',
      },
      {
        date: '2023.06 ~ ',
        activity: '경조사 관리 어플 얼마나 개발',
        links: {
          github: 'https://github.com/HowMuchPay',
        },
      },
      {
        date: '2023.08 ~ ',
        activity: '어메이징 티켓 Frontend',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {},
    ],
  },
};
