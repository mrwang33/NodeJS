<template>
    <div class="SGrules">
        <div class="header">
            <div class="title">云主机 / 安全组 / 配置规则</div>
            <router-link tag="div" to="/SGrules/intoDecoration"><el-button class="into-decoration">入方向</el-button></router-link>
            <router-link tag="div" to="/SGrules/outDecoration"><el-button class="out-decoration">出方向</el-button></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.SGrules {
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
          &.into-decoration{
              right: 150px;
          }
          &.out-decoration{
              right: 10px;
          }
      }
  }
}
</style>
