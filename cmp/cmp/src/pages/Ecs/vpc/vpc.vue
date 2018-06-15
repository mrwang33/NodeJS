<template>
    <div class="vpc">
        <div class="header">
            <div class="title">云主机 / VPC</div>
            <router-link tag="div" to="/vpc/proprietaryNet"><el-button class="vpc-proprietary">专有网络</el-button></router-link>
            <router-link tag="div" to="/vpc/innerNet"><el-button class="vpc-inneNet">内部网络</el-button></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.vpc {
  width: 100%;
  height: 100%;
  padding: 0 30px;
  overflow-y: scroll;
  .header{
      padding: 20px 10px;
      background: $body-color;
      position: relative;
      margin-top: 10px;
      .router-link-active{
          .el-button{
              background: #6c6ad5;
              color: #fff;
          }
      }
      .el-button{
          position: absolute;
          top: 12px;
          padding: 12px 32px;
          color: #6c6ad5;
          border: solid 1px #6c6ad5;
          &.vpc-proprietary{
              right: 150px;
          }
          &.vpc-inneNet{
              right: 10px;
          }
      }
  }
}
</style>
