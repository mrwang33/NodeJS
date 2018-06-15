<template>
  <div id="app" class="clearfix">
    <cmp-aside></cmp-aside>
    <div class="cmp-content">
      <cmp-header></cmp-header>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import CmpAside from 'base/aside/aside'
import CmpHeader from 'base/header/header'
export default {
  name: 'App',
  components: {
    CmpAside,
    CmpHeader
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  min-width: 1370px;
  height: 100vh;
  overflow-x: scroll;
  .cmp-content {
    width: calc(100% - 180px);
    margin-left: 180px;
    height: 100%;
    min-width: 1190px;
  }
}
</style>
