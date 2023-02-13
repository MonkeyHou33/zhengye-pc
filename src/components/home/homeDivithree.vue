<template>
  <div class="home-subject">
      <hr class="home-subject-hr"/>
        <span style="background-color: #4e8dfe;border-radius:50%;padding:0 5px;height:16px;font-size:12px;color:#fff">3</span>
        <span style="padding:0 10px;width:70px"><b>补充协议</b></span>
      <hr class="home-subject-hr"/>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.home-subject {
    margin:6px 10px;
    background-color:#f5f5f5;
    display:flex;
    justify-content: center;
    align-items: center;
    .home-subject-hr{
      width:45%;
      border:none;
      border-top:1px dashed #dcdcdc;
      margin-right:10px
    }
  }
</style>