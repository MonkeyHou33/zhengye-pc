<template>
  <div class="home">
    <div class="home-Breadcrumb">
      <p>首页/新增</p>
      <p>新增二级</p>
    </div>
    <div class="home-subject">
      <hr class="home-subject-hr" style="margin-right:20px"/>
        <span style="background-color: #4e8dfe;border-radius:50%;padding:0 5px;height:16px;font-size:12px;color:#fff">1</span>
        <span style="padding:0 10px"><b>协议主体</b></span>
      <hr class="home-subject-hr"/>
    </div>
    <div class="home-subject-agreement">
      <home-agreement/>
    </div>
  </div>
</template>
<script>
import homeAgreement from '../components/home/homeAgreement.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    homeAgreement
  }
}
</script>
<style scoped lang="less">
.home {
  background-color: #f5f5f5;
  .home-Breadcrumb {
    padding-top: 2px;
    height: 80px;
    background-color: #fff;
    p {
      padding-left: 30px; 
    }
  }
  .home-subject {
    margin:10px 20px;
    background-color:#f5f5f5;
    display:flex;
    justify-content: center;
    align-items: center;
    .home-subject-hr{
      width:45%;
      border:none;
      border-top:1px dashed #e9e9e9;
    }
  }
  .home-subject-agreement {
    margin:0 20px
  }
}
</style>