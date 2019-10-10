
const Home = ()=>import('../pages/Home/home.vue')
const Classification = ()=>import('../pages/classification/classification') 
const Shop = ()=>import('../pages/Shop/Shop')
const Boku = ()=>import('../pages/Boku/Boku')
const General = ()=>import('../pages/General/General')

export default [
  {
    path: '/home',
    component: Home,
    meta:{
      isShowFooter: true,
      showHeader: true
    }
  },
  {
    path: '/classification',
    component: Classification,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/general',
    component: General,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/boku',
    component: Boku
  },
  {
    path: '/',
    redirect: '/home'
  }
]