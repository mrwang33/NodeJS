<template>
    <div class="ecs-detail">
        <div class="header">
            <span class="title">云主机 / VPC / administer / sub-VPC</span>
            <span class="btn-wrapper">
                <el-button type="primary" plain>刷新</el-button>
            </span>
        </div>
        <div class="info-wrapper">
            <div class="base-info">
                <div class="title">基本信息</div>
                <div class="content">
                    <div class="row">
                        <span class="label">子网名称:</span>
                        <span class="info">sud vpc</span>
                    </div>
                    <div class="row">
                        <span class="label">ID:</span>
                        <span class="info">44fd6d89-656fd4d-6fdfdf45</span>
                    </div>
                    <div class="row">
                        <span class="label">子网:</span>
                        <span class="info">192.168.100.200</span>
                    </div>
                    <div class="row">
                        <span class="label">网关:</span>
                        <span class="info">10.100.110.200</span>
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
                        <span class="label">DNS服务器地址:</span>
                        <span class="info">192.168.1.100</span>
                    </div>
                    <div class="row">
                        <span class="label">VPN:</span>
                        <span class="info"><el-button type="text">立即申请</el-button></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="operating-wrapper">
            <div class="operate-tab">
                <router-link to="/subnetDetail/childPrivateIp" tag="span" class="operate-tab-item">
                    私有IP
                </router-link>
                <router-link to="/subnetDetail/childVirtualIp" tag="span" class="operate-tab-item">
                    虚拟IP
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
    height: 250px;
    margin-top: 10px;
    .base-info,
    .config-info {
      width: calc((100% - 10px) / 2);
      float: left;
      height: 250px;
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
            width: 120px;
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
