<template>
  <div>
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <p class="managerName">{{ isCollapse ? '正也医药' : '上海正也医药有限公司'}}</p>
        <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name">
          <i class="el-icon-location"></i>
          <span>{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in haveChildren" :key="item.label" :index="item.label">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.label }}</span>
          </template>
          <el-menu-item-group v-for="subItem in item.children" :key="subItem.name" :index="subItem.name" >
            <el-menu-item :index="subItem.name" >{{ subItem.label }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: [
        {
          path:'/',
          name:'home',
          label:'首页展示页',
          icon:'s-home',
          url:'home/home'
        },
        {
          // path:'/mall',
          // name:'mall',
          label:'功能功能功能A',
          icon:'s-home',
          // url:'mallManage/mallManage'
          children: [
            {
              path:'/page1',
              name:'page1',
              label:'页面1',
              icon:'s-home',
              url:'other/pageOne'
            },
            {
              path:'/page2',
              name:'page2',
              label:'页面2',
              icon:'s-home',
              url:'other/pageTwo'
            },
          ]
        },
        {
          // path:'/user',
          // name:'user',
          label:'功能功能B',
          icon:'s-home',
          // url:'userManage/userManage'
          children: [
            {
              path:'/page1',
              name:'page1',
              label:'页面1',
              icon:'s-home',
              url:'other/pageOne'
            },
            {
              path:'/page2',
              name:'page2',
              label:'页面2',
              icon:'s-home',
              url:'other/pageTwo'
            },
          ]
        },
        {
          label:'功能功能C',
          icon:'s-home',
          children: [
            {
              path:'/page1',
              name:'page1',
              label:'页面1',
              icon:'s-home',
              url:'other/pageOne'
            },
            {
              path:'/page2',
              name:'page2',
              label:'页面2',
              icon:'s-home',
              url:'other/pageTwo'
            },
          ]
        },
        {
          // path:'/mall',
          // name:'mall',
          label:'功能功能功能D',
          icon:'s-home',
          // url:'mallManage/mallManage'
          children: [
            {
              path:'/page1',
              name:'page1',
              label:'页面1',
              icon:'s-home',
              url:'other/pageOne'
            },
            {
              path:'/page2',
              name:'page2',
              label:'页面2',
              icon:'s-home',
              url:'other/pageTwo'
            },
          ]
        },
        {
          // path:'/mall',
          // name:'mall',
          label:'功能功能E',
          icon:'s-home',
          // url:'mallManage/mallManage'
          children: [
            {
              path:'/page1',
              name:'page1',
              label:'页面1',
              icon:'s-home',
              url:'other/pageOne'
            },
            {
              path:'/page2',
              name:'page2',
              label:'页面2',
              icon:'s-home',
              url:'other/pageTwo'
            },
          ]
        },
        {
          // path:'/mall',
          // name:'mall',
          label:'功能功能F',
          icon:'s-home',
          // url:'mallManage/mallManage'
          children: [
            {
              path:'/page1',
              name:'page1',
              label:'页面1',
              icon:'s-home',
              url:'other/pageOne'
            },
            {
              path:'/page2',
              name:'page2',
              label:'页面2',
              icon:'s-home',
              url:'other/pageTwo'
            },
          ]
        }
      ]
    }
  },
  computed:{
    //导航栏收起展开显示不同公司名称
    isCollapse(){
      return this.$store.state.aside.isCollapse
    },
    //首页没有子菜单
    noChildren(){
      return this.menuData.filter( item => !item.children)
    },
    //其他路由有子菜单
    haveChildren(){
      return this.menuData.filter( item => item.children)
    },
  },
  methods:{
    handleOpen(){

    },
    handleClose(){

    },
  }
}
</script>
<style scoped lang="less">
.el-menu {
  border-right: solid 0;
  height: 100vh;
  .managerName {
    background: #545c64;
    color: #ddd;
    text-align: center;
    font-size: 14px;
  }
}
</style>