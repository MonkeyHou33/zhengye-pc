<template>
  <div>
    <el-container>
      <el-aside width="12%">
        <common-aside />
      </el-aside>
      <el-container>
        <el-header>
          <common-header/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import commonAside from '../components/commonAside.vue'
import commonHeader from '../components/commonHeader.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    commonAside,
    commonHeader
  }
}
</script>
<style scope>
.el-header {
  padding:0;
}
main.el-main {
  padding:0;
  background-color: #f5f5f5;
}
</style>  