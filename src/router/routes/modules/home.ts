const home = [
  {
    path: '/home',
    name: 'dataGovernance',
    component: () => import('~/pages/home/index.vue'),
    meta: {
      title: 'dataGovernance'
    }
  },
  {
    path: '/hero',
    name: 'Hero',
    component: () => import('~/pages/home/components/Hero.vue')
  },
  {
    path: '/StoreTest',
    name: 'StoreTest',
    component: () => import('~/pages/home/components/StoreTest.vue')
  }
];

export default home;
