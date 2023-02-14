<template>
  <div class="header">
    <div class="header-list" v-for="item in headerList" :key="item.id" @click="clickHeader(item)">
      <el-button size="mini" :class="item.icon"></el-button>
      <el-button type="text" style="color:#ddd;font-size:18px" >{{item.label}}</el-button>
    </div>
    <div class="img-system">
      <img src="../assets/header.png" style="width:60px;height:60px;">
      <div style="display:flex;flex-direction:column;">
        <el-button type="text" style="color:#fff;font-size:24px;margin:0px;padding:0px"><b>销训通</b></el-button>
        <el-button type="text" style="color:#fff;font-size:12px;margin:0px;padding:0px">行为管理系统</el-button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      headerListModel:'',
      headerList: [
        {
          label:'首页',
          name:'home',
          icon:'el-icon-s-home',
          path:'/',
          url:'home/home'
        },
        {
          label:'主数据',
          name:'主数据',
          icon:'el-icon-s-home',
          path:'/pageAOne',
          url:'pageA/pageAOne'
        },
        {
          label:'辖区管理',
          name:'辖区管理',
          icon:'el-icon-s-home',
          path:'/pageBOne',
          url:'pageB/pageBOne'
        },
      ],
    }
  },
  computed: {
  },
  mounted(){
  },
  methods: {
    clickHeader(val){
      if(this.$route.path !== val.path && !(this.$route.path == '/home' && (val.path == '/'))){
        this.$router.push(val.path)
      }
      
      this.$store.commit('selectMenu',val)
      this.$store.commit('selectMenuName',val.label)
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #545c64;
  display: flex;
  justify-content: start;
  align-items: center;
  .header-list {
    margin-left:50px;
    .el-icon-s-home {
      font-size: 20px;
      border-radius: 10px;
      padding:8px;
      border:solid 0px;
      background-color:#ddd
    }
  }
  .img-system{
      margin-left:50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
}
</style>