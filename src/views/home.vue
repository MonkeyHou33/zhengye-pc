<template>
  <div class="home">
    <div class="home-Breadcrumb">
        <p>首页/新增</p>
        <p>新增二级</p>
    </div>
    <!-- 第一个分割线 -->
    <home-divione />
    <!-- 协议主体表单 -->
    <div class="home-subject-agreement">
        <home-agreement/>
    </div>
    <!-- 第二个分割线 -->
    <homeDivitwo />
    <!-- 产品政策表单 -->
    <homeProduct />
    <!-- 第三个分割线 -->
    <home-divithree />
    <!-- 补充协议表单 -->
    <home-supplement />
    <home-save />
  </div>
</template>
<script>
import homeAgreement from '../components/home/homeAgreement.vue'
import homeProduct from '../components/home/homeProduct.vue'
import homeSupplement from '../components/home/homeSupplement.vue'
import homeDivione from '../components/home/homeDivione.vue'
import homeDivitwo from '../components/home/homeDivitwo.vue'
import homeDivithree from '../components/home/homeDivithree.vue'
import homeSave from '../components/home/homeSave.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    homeAgreement,
    homeProduct,
    homeSupplement,
    homeDivione,
    homeDivitwo,
    homeDivithree,
    homeSave
  }
}
</script>
<style scoped lang="less">
.home {
  background-color: #f5f5f5;
  .home-Breadcrumb {
    padding-top: 2px;
    height: 50px;
    background-color: #fff;
    p {
      padding-left: 30px; 
    }
  }
  .home-subject {
    margin:6px 10px;
    background-color:#f5f5f5;
    display:flex;
    justify-content: center;
    align-items: center;
    .home-subject-hr{
      width:45%;
      border:none;
      border-top:1px dashed #e9e9e9;
      margin-right:10px
    }
  }
  .home-subject-agreement {
    margin:0 20px
  }
}
</style>