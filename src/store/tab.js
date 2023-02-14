export default {
  state: {
    tabList:[
      {
        path:'/',
        name:'home',
        label:'首页',
        icon:'s-home',
        url:'home/home'
      },
    ],//面包屑的数据
    tabName:'首页展示页'
  },
  mutations: {
    //更新面包屑
    selectMenu(state,value){
      //判断添加的数据是否为首页
      if(value.name !== 'home'){
        const index = state.tabList.findIndex(item => item.name === value.name)
        //如果不存在 == -1
        if(index == -1){
          state.tabList.push(value)
        }
      }
    },
    selectMenuName(state,value){
      state.tabName = value
    }
  }
}