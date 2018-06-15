<template>
  <div class="toolbar">
      <ul class="tab">
          <li class="tab-item active"><i class="iconfont">&#xe8c9;</i></li>
          <li class="tab-item"><i class="iconfont">&#xe8c2;</i></li>
          <li class="tab-item"><i class="iconfont">&#xe8bc;</i></li>
      </ul>
      <div class="content">
          <div class="title">常用操作</div>
          <div class="banner-content">
              <span class="banner active">创建云主机</span>
              <span class="banner">账单</span>
              <span class="banner">续费管理</span>
              <span class="banner"><i class="iconfont">&#xe617;</i></span>
          </div>
          <div class="title">公告</div>
          <ul class="bulletin-content">
            <li class="bulletin-item">2018年浙江联通综合云推出最新
            优惠活动 <a href="#" class="bulletin-link">赶快来参加>></a>
            </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.toolbar {
  width: 220px;
  height: 100%;
  background: $body-color;
  float: right;
  .tab {
    font-size: 0;
    .tab-item {
      display: inline-block;
      width: 33.3%;
      padding-top: 13px;
      padding-bottom: 5px;
      text-align: center;
      border-bottom: solid 1px #eee;
      .iconfont {
        font-size: 24px;
        color: #bfbfbf;
      }
      &.active {
        border-bottom-color: #6c6ad5;
        .iconfont {
          color: #6c6ad5;
        }
      }
    }
  }
  .content {
    padding: 0 10px;
    box-sizing: border-box;
    .title {
      margin-top: 15px;
      font-size: $font-size-small;
      line-height: 16px;
      &:after {
        content: '';
        display: block;
        height: 1px;
        width: 30px;
        background: #6c6ad5;
        margin-top: 3px;
      }
    }
    .banner-content {
      font-size: 0;
      .banner {
        display: inline-block;
        margin-top: 8px;
        margin-right: 10px;
        width: calc((100% - 10px) / 2);
        height: 30px;
        background-color: rgba(108, 106, 213, 0.5);
        color: #fff;
        text-align: center;
        line-height: 30px;
        font-size: $font-size-mini;
        &:nth-child(2n) {
          margin-right: 0;
        }
        &.active {
          background: rgba(108, 106, 213, 1);
        }
        &:last-child {
          background: #fff;
          border: dotted 1px rgba(108, 106, 213, 0.5);
          box-sizing: border-box;
          .iconfont {
            color: rgba(108, 106, 213, 0.5);
            font-size: 12px;
          }
        }
      }
    }
    .bulletin-item {
      margin-top: 8px;
      font-size: $font-size-mini;
      line-height: 18px;
      margin-bottom: 10px;
      &:before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background: #6c6ad5;
        margin-right: 10px;
      }
      .bulletin-link {
        color: #6c6ad5;
      }
    }
  }
}
</style>
