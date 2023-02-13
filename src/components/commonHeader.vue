<template>
  <div class="header">
    1
  </div>
</template>
<script>
// import { mapState } from 'vuex';
export default {
  data() {
    return {

    }
  },
  computed: {
    // ...mapState({
    //   tags:state => state.tab.tabList
    // })
  },
  mounted(){
    // console.log(this.tags,'tags')
  },
  methods: {
    chooseCollapse(){
      this.$store.commit('collapseMenu')
    },
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #545c64;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    
  }
  .right {
    color:#fff
  }
}
</style>