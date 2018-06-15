<template>
    <div class="ecs-detail">
        <div class="header">
            <span class="title">云主机 / VPC / administer</span>
            <span class="btn-wrapper">
                <el-button type="primary" plain>刷新</el-button>
            </span>
        </div>
        <div class="info-wrapper">
            <div class="base-info">
                <div class="title">基本信息</div>
                <div class="content">
                    <div class="row">
                        <span class="label">名称:</span>
                        <span class="info">云市场云主机1</span>
                    </div>
                    <div class="row">
                        <span class="label">ID:</span>
                        <span class="info">44ft</span>
                    </div>
                    <div class="row">
                        <span class="label">子网:</span>
                        <span class="info">1个</span>
                    </div>
                </div>
            </div>
            <div class="config-info">
                <div class="title">配置信息</div>
                <div class="content">
                    <div class="row">
                        <span class="label">状态:</span>
                        <span class="info">正常</span>
                    </div>
                    <div class="row">
                        <span class="label">网络名称:</span>
                        <span class="info">计算池1</span>
                    </div>
                    <div class="row">
                        <span class="label">网络状态:</span>
                        <span class="info">---</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="operating-wrapper">
            <div class="operate-tab">
                <router-link to="/vpcDetail/childSubnet" tag="span" class="operate-tab-item">
                    子网
                </router-link>
            </div>
            <router-view class="content"></router-view>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.ecs-detail {
  width: 100%;
  height: 100%;
  padding: 10px 30px 10px;
  overflow-y: scroll;
  .header {
    padding: 15px 20px;
    background: $body-color;
    font-size: 0;
    .title,
    .btn-wrapper {
      display: inline-block;
    }
    .title {
      width: 30%;
      font-size: 15px;
      color: #333;
    }
    .btn-wrapper {
      width: 70%;
      text-align: right;
    }
  }
  .info-wrapper {
    height: 200px;
    margin-top: 10px;
    .base-info,
    .config-info {
      width: calc((100% - 10px) / 2);
      float: left;
      height: 200px;
      background: $body-color;
      padding: 0 20px;
      box-sizing: border-box;
      .title {
        padding: 10px 0;
        border-bottom: dotted 1px rgba(108, 106, 213, 0.3);
      }
      .content {
        margin-top: 7px;
        padding-left: 15%;
        box-sizing: border-box;
        .row {
          padding: 10px 0;
          span {
            display: inline-block;
          }
          .label {
            width: 90px;
            text-align: right;
            color: #999;
          }
          .info {
            margin-left: 20px;
            color: #333;
          }
        }
      }
    }
    .base-info {
      margin-right: 10px;
    }
  }
  .operating-wrapper {
    padding: 0 20px;
    margin-top: 10px;
    background: $body-color;
    height: auto;
    .operate-tab {
      border-bottom: dotted 1px rgba(108, 106, 213, 0.3);
      padding: 15px 0;
      .operate-tab-item {
        display: inline-block;
        width: 160px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #6c6ad5;
      }
      .operate-tab-item:hover{
          cursor: pointer;
      }
      .router-link-active {
        background: #6c6ad5;
        color: #fff;
      }
    }
    .content{
        height: auto;
        padding-bottom: 20px;
    }
  }
}
</style>
