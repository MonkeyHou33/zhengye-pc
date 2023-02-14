<template>
  <div>
    <el-col :span="24">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#2a3139"
        text-color="#9f9fa1"
        active-text-color="#ffffff">
        <div style="display:flex;justify-content:center;align-items:center">
          <img src="../assets/header.png" style="width:120px;height:60px;">
        </div>
        <p class="managerName">上海正也医药有限公司</p>
        <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name" @click="clickMenu(item)">
          <i class="el-icon-location"></i>
          <span>{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in haveChildren" :key="item.label" :index="item.label">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.label }}</span>
          </template>
          <el-menu-item-group v-for="subItem in item.children" :key="subItem.name" :index="subItem.name">
            <el-menu-item :index="subItem.name" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
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
          url:'home/home',
        },
        {
          path:'/pageAOne',
          // name:'mall',
          label:'功能功能功能A',
          icon:'s-home',
          // url:'mallManage/mallManage'
          children: [
            {
              path:'/pageAOne',
              name:'pageAOne',
              label:'功能A页面1',
              icon:'s-home',
              url:'pageA/pageAOne'
            },
            {
              path:'/pageATwo',
              name:'pageATwo',
              label:'功能A页面2',
              icon:'s-home',
              url:'page/pageATwo'
            },
          ]
        },
        {
          path:'/pageBOne',
          // name:'user',
          label:'功能功能B',
          icon:'s-home',
          // url:'userManage/userManage'
          children: [
            {
              path:'/pageBOne',
              name:'pageBOne',
              label:'功能B，页面1',
              icon:'s-home',
              url:'pageB/pageBOne'
            },
            {
              path:'/pageBTwo',
              name:'pageBTwo',
              label:'功能B，页面2',
              icon:'s-home',
              url:'pageB/pageBTwo'
            },
          ]
        },
      ],
    }
  },
  computed:{
    //首页没有子菜单
    noChildren(){
      return this.menuData.filter( item => !item.children)
    },
    //其他路由有子菜单
    haveChildren(){
      return this.menuData.filter( item => item.children)
    },
  },
  mounted(){
  },
  methods:{
    clickMenu(item){
      //当页面的路由与跳转路由不一致时才允许跳转
      if(this.$route.path !== item.path && !(this.$route.path == '/home' && (item.path == '/'))){
        this.$router.push(item.path)
      }
      this.$store.commit('selectMenu',item)
      this.$store.commit('selectMenuName',item.label)
    },
  },
}
</script>
<style scoped lang="less">
.el-menu {
  border-right: solid 0;
  height: 100vh;
  .managerName {
    background: #2a3139;
    color: #bbbbb9;
    text-align: center;
    font-size: 14px;
  }
  
}

</style>