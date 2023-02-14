<template>
  <div class="tags">
    <el-breadcrumb separator="/" style="padding:10px">
      <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path  }">{{ item.label }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="tagsName">
      <b>{{ tagsName }}</b>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data(){
    return{
    }
  },
  computed: {
    ...mapState({
      tags:state => state.tab.tabList
    }),
    ...mapState({
      tagsName:state => state.tab.tabName
    }),
  },
  mounted(){
  },
  methods:{
  }
}
</script>
<style lang="less" scoped>
.tags {
  margin:0 20px;
  .tagsName {
    margin-left:10px;
    padding-bottom:10px;
    font-size:12px
  }
}
/deep/.el-breadcrumb__item{
  color:#aaa;
  font-size:12px
}
/deep/.el-breadcrumb__inner.is-link{
  color:#aaa;
  font-size:12px
}
</style>