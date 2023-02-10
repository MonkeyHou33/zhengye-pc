<template>
  <div>
    <el-container>
      <el-aside width="12%">
        <common-aside />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script>
import commonAside from '../components/commonAside.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    commonAside,
  }
}
</script>