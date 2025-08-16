// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`
}

const ROOTS_AUTH = '/auth'
export const ROOTS_HOME = '/'

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
}

export const PATH_PAGE = {
  productDetails: '/product',
  checkout: '/checkout',
  cart: '/cart',
  confirmation: '/confirmation',
  category: '/category',
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
}

export const PATH_DASHBOARD = {
  root: ROOTS_HOME,
  kanban: path(ROOTS_HOME, '/kanban'),
  calendar: path(ROOTS_HOME, '/calendar'),
  fileManager: path(ROOTS_HOME, '/files-manager'),
  permissionDenied: path(ROOTS_HOME, '/permission-denied'),
  blank: path(ROOTS_HOME, '/blank'),
  general: {
    app: path(ROOTS_HOME, '/app'),
    ecommerce: path(ROOTS_HOME, '/ecommerce'),
    analytics: path(ROOTS_HOME, '/analytics'),
    banking: path(ROOTS_HOME, '/banking'),
    booking: path(ROOTS_HOME, '/booking'),
    file: path(ROOTS_HOME, '/file'),
  },
  mail: {
    root: path(ROOTS_HOME, '/mail'),
    all: path(ROOTS_HOME, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_HOME, '/chat'),
    new: path(ROOTS_HOME, '/chat/new'),
    view: (name: string) => path(ROOTS_HOME, `/chat/${name}`),
  },
  user: {
    root: path(ROOTS_HOME, '/user'),
    new: path(ROOTS_HOME, '/user/new'),
    list: path(ROOTS_HOME, '/user/list'),
    cards: path(ROOTS_HOME, '/user/cards'),
    profile: path(ROOTS_HOME, '/user/profile'),
    account: path(ROOTS_HOME, '/user/account'),
    edit: (name: string) => path(ROOTS_HOME, `/user/${name}/edit`),
    demoEdit: path(ROOTS_HOME, `/user/reece-chung/edit`),
  },
  eCommerce: {
    root: path(ROOTS_HOME, '/e-commerce'),
    shop: path(ROOTS_HOME, '/e-commerce/shop'),
    list: path(ROOTS_HOME, '/e-commerce/list'),
    checkout: path(ROOTS_HOME, '/e-commerce/checkout'),
    new: path(ROOTS_HOME, '/e-commerce/product/new'),
    view: (name: string) => path(ROOTS_HOME, `/e-commerce/product/${name}`),
    edit: (name: string) => path(ROOTS_HOME, `/e-commerce/product/${name}/edit`),
    demoEdit: path(ROOTS_HOME, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    demoView: path(ROOTS_HOME, '/e-commerce/product/nike-air-force-1-ndestrukt'),
  },
  invoice: {
    root: path(ROOTS_HOME, '/invoice'),
    list: path(ROOTS_HOME, '/invoice/list'),
    new: path(ROOTS_HOME, '/invoice/new'),
    view: (id: string) => path(ROOTS_HOME, `/invoice/${id}`),
    edit: (id: string) => path(ROOTS_HOME, `/invoice/${id}/edit`),
    demoEdit: path(ROOTS_HOME, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_HOME, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  blog: {
    root: path(ROOTS_HOME, '/blog'),
    posts: path(ROOTS_HOME, '/blog/posts'),
    new: path(ROOTS_HOME, '/blog/new'),
    view: (title: string) => path(ROOTS_HOME, `/blog/post/${title}`),
    demoView: path(ROOTS_HOME, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
  governor: {
    view: (id: number) => path(ROOTS_HOME, `governor/${id}`),


  }
}