<template>
  <div class="resources-wrapper">
    <resource-aside></resource-aside>
    <div class="resources">
        <div class="section clearfix">
         <div class="review">
           <div class="heading">综述</div>
           <div class="ranger-wrapper">
             <el-progress type="circle" color="#36d0e5" :stroke-width="10" :percentage="25"></el-progress>
           </div>
           <ul class="callOut">
             <li class="callOut-item running">
                运行中<span class="stress">25</span>台
             </li>
             <li class="callOut-item expiring">
                即将过期<span class="stress">25</span>台
             </li>
             <li class="callOut-item expired">
                已过期<span class="stress">25</span>台
             </li>
           </ul>
         </div>
         <div class="config">
           <div class="heading">配置信息</div>
           <ul class="ranger-wrapper">
             <li class="ranger-item">
               <Progress vertical color="#6c6ad5" :stroke-width="10" hide-info :percent="25"></Progress>
             </li>
             <li class="ranger-item">
               <Progress vertical color="#6c6ad5" :stroke-width="10" hide-info :percent="55"></Progress>
             </li>
             <li class="ranger-item">
               <Progress vertical color="#6c6ad5" :stroke-width="10" hide-info :percent="85"></Progress>
             </li>
             <li class="ranger-item">
               <Progress vertical color="#6c6ad5" :stroke-width="10" hide-info :percent="15"></Progress>
             </li>
             <li class="ranger-item">
               <Progress vertical color="#6c6ad5" :stroke-width="10" hide-info :percent="5"></Progress>
             </li>
             <li class="ranger-item">
               <Progress vertical color="#6c6ad5" :stroke-width="10" hide-info :percent="95"></Progress>
             </li>
             <li class="ranger-item">
               <Progress vertical color="#6c6ad5" :stroke-width="10" hide-info :percent="65"></Progress>
             </li>
             <li class="ranger-item">
               <Progress vertical color="#6c6ad5" :stroke-width="10" hide-info :percent="100"></Progress>
             </li>
           </ul>
           <ul class="ranger-bar">
             <li class="ranger-bar-item">CPU</li>
             <li class="ranger-bar-item">RAM</li>
             <li class="ranger-bar-item">云硬盘</li>
             <li class="ranger-bar-item">VPC</li>
             <li class="ranger-bar-item">子网</li>
             <li class="ranger-bar-item">安全组</li>
             <li class="ranger-bar-item">弹性IP</li>
             <li class="ranger-bar-item">带宽</li>
           </ul>
         </div>
        </div>
        <div class="consumption">
         <div class="heading">我的费用</div>
         <div class="content">
           <ul class="tab">
             <li class="tab-item">账户概览</li>
             <li class="tab-item">消费信息</li>
           </ul>
           <ul class="tab-content">
             <li class="tab-content-item">
               <p class="title">账户余额</p>
               <div class="consum-left">
                 <div class="money">0.00</div>
                 <div class="recharge">充值</div>
               </div>
               <div class="consum-right">
                <span class="banner">代金券0张</span>
                <span class="banner">代金券0张</span>
                <span class="banner">代金券0张</span>
               </div>
             </li>
             <li class="tab-content-item consum-info">
               <p class="title">2月份</p>
               <div class="no-data">暂无任何消费信息 . . .</div>
             </li>
           </ul>
         </div>
        </div>
        <div class="our-resource-title">我的资源</div>
        <div class="resource-list clearfix">
           <div class="resource-item">
             <div class="heading">浙江一区（杭州）<span class="setting iconfont">&#xe609;</span></div>
             <div class="content clearfix">
               <div class="ranger-wrapper">
                  <el-progress type="circle" color="#36d0e5" :stroke-width="10" :percentage="25"></el-progress>
               </div>
               <ul class="badge-wrapper">
                 <li class="badge-item running">
                   运行中<span class="stress">4</span>台
                 </li>
                 <li class="badge-item creating">
                   近期创建<span class="stress">4</span>台
                 </li>
                 <li class="badge-item expiring">
                   即将过期<span class="stress">4</span>台
                 </li>
                 <li class="badge-item expired">
                   已过期<span class="stress">4</span>台
                 </li>
               </ul>
             </div>
             <ul class="bottom clearfix">
               <li class="bottom-item">
                 磁盘 0
               </li>
               <li class="bottom-item">
                 VPC 0
               </li>
               <li class="bottom-item">
                 镜像 0
               </li>
             </ul>
           </div>
           <div class="resource-item">
             <div class="heading">浙江一区（杭州）<span class="setting iconfont">&#xe609;</span></div>
             <div class="content clearfix">
               <div class="ranger-wrapper">
                  <el-progress type="circle" color="#36d0e5" :stroke-width="10" :percentage="25"></el-progress>
               </div>
               <ul class="badge-wrapper">
                 <li class="badge-item running">
                   运行中<span class="stress">4</span>台
                 </li>
                 <li class="badge-item creating">
                   近期创建<span class="stress">4</span>台
                 </li>
                 <li class="badge-item expiring">
                   即将过期<span class="stress">4</span>台
                 </li>
                 <li class="badge-item expired">
                   已过期<span class="stress">4</span>台
                 </li>
               </ul>
             </div>
             <ul class="bottom clearfix">
               <li class="bottom-item">
                 磁盘 0
               </li>
               <li class="bottom-item">
                 VPC 0
               </li>
               <li class="bottom-item">
                 镜像 0
               </li>
             </ul>
           </div>
           <div class="resource-item">
             <div class="heading">浙江一区（杭州）<span class="setting iconfont">&#xe609;</span></div>
             <div class="content clearfix">
               <div class="ranger-wrapper">
                  <el-progress type="circle" color="#36d0e5" :stroke-width="10" :percentage="25"></el-progress>
               </div>
               <ul class="badge-wrapper">
                 <li class="badge-item running">
                   运行中<span class="stress">4</span>台
                 </li>
                 <li class="badge-item creating">
                   近期创建<span class="stress">4</span>台
                 </li>
                 <li class="badge-item expiring">
                   即将过期<span class="stress">4</span>台
                 </li>
                 <li class="badge-item expired">
                   已过期<span class="stress">4</span>台
                 </li>
               </ul>
             </div>
             <ul class="bottom clearfix">
               <li class="bottom-item">
                 磁盘 0
               </li>
               <li class="bottom-item">
                 VPC 0
               </li>
               <li class="bottom-item">
                 镜像 0
               </li>
             </ul>
           </div>
        </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import ResourceAside from './components/toolbar.vue'
import { Progress } from 'iview'
export default {
  components: {
    ResourceAside,
    Progress
  }
}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.resources-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  overflow-y: scroll;
  .resources {
    margin-right: 240px;
    margin-left: 20px;
    .section {
      width: 100%;
      height: 300px;
      .review {
        width: 30%;
        height: 300px;
        float: left;
        margin-right: 10px;
        background: $body-color;
        .heading {
          margin: 10px;
          font-size: $font-size-small;
          &:before {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: #6c6ad5;
            border-radius: 5px;
            margin-right: 5px;
          }
        }
        .ranger-wrapper {
          margin: 30px auto 28px;
          text-align: center;
        }
        .callOut {
          padding: 0 20px;
          box-sizing: border-box;
          .callOut-item {
            display: block;
            width: 50%;
            float: left;
            margin-bottom: 10px;
            color: #666;
            &::before {
              content: '';
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 5px;
            }
            &.running {
              &:before {
                background: #36d0e5;
              }
              .stress {
                color: #36d0e5;
              }
            }
            &.expiring {
              &:before {
                background: #6c6ad5;
              }
              .stress {
                color: #6c6ad5;
              }
            }
            &.expired {
              &:before {
                background: #fb7065;
              }
              .stress {
                color: #fb7065;
              }
            }
          }
        }
      }
      .config {
        width: calc(70% - 10px);
        height: 300px;
        float: left;
        background: $body-color;
        .heading {
          margin: 10px;
          font-size: $font-size-small;
          &:before {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: #6c6ad5;
            border-radius: 5px;
            margin-right: 5px;
          }
        }
        .ranger-wrapper {
          margin: 5px 20px;
          height: 220px;
          border-left: solid 1px #e5e5e5;
          border-bottom: solid 1px #e5e5e5;
          font-size: 0;
          .ranger-item {
            width: 12.5%;
            height: 100%;
            display: inline-block;
            text-align: center;
          }
        }
        .ranger-bar {
          margin: 5px 20px;
          font-size: 0;
          .ranger-bar-item {
            display: inline-block;
            width: 12.5%;
            text-align: center;
            font-size: $font-size-mini;
            line-height: 16px;
          }
        }
      }
    }
    .consumption {
      margin-top: 10px;
      height: 240px;
      background: $body-color;
      .heading {
        padding: 10px;
        font-size: $font-size-small;
        &:before {
          content: '';
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #6c6ad5;
          border-radius: 5px;
          margin-right: 5px;
        }
      }
      .content {
        height: 180px;
        margin: 0 30px 20px 30px;
        border: solid 1px rgba(108, 106, 213, 0.2);
        box-sizing: border-box;
        .tab {
          font-size: 0;
          .tab-item {
            display: inline-block;
            width: 50%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: rgba(108, 106, 213, 0.2);
            font-size: $font-size-mini;
          }
        }
        .tab-content {
          font-size: 0;
          .tab-content-item {
            display: block;
            width: 50%;
            position: relative;
            float: left;
            &:first-child:after {
              content: '';
              display: block;
              position: absolute;
              top: 10%;
              right: 0;
              width: 1px;
              height: 80%;
              background: rgba(108, 106, 213, 0.2);
            }
            .title {
              position: absolute;
              color: #999;
              left: 10px;
              top: 10px;
              font-size: $font-size-mini;
            }
            .consum-left {
              width: 50%;
              float: left;
              .money {
                text-align: center;
                font-size: 40px;
                margin: 30px 0 15px;
              }
              .recharge {
                width: 90%;
                margin: 0 auto;
                height: 30px;
                background-color: #6c6ad5;
                color: #fff;
                text-align: center;
                line-height: 30px;
                font-size: $font-size-small;
              }
            }
            .consum-right {
              width: 50%;
              float: left;
              .banner {
                display: block;
                margin: 15px 20px;
                height: 30px;
                background-color: rgba(108, 106, 213, 0.3);
                line-height: 30px;
                padding-left: 30px;
                font-size: $font-size-mini;
                color: #666;
              }
            }
            &.consum-info {
              .no-data {
                color: #bfbfbf;
                text-align: center;
                padding-top: 30px;
                font-size: $font-size-mini;
              }
            }
          }
        }
      }
    }
    .our-resource-title {
      height: 40px;
      background: $body-color;
      line-height: 40px;
      padding-left: 10px;
      margin-top: 20px;
      &:before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #6c6ad5;
        border-radius: 5px;
        margin-right: 5px;
      }
    }
    .resource-list {
      width: 100%;
      height: 100%;
      margin-top: 10px;
      padding-bottom: 50px;
      .resource-item {
        width: calc((100% - 20px) / 2);
        float: left;
        height: 280px;
        background: $body-color;
        margin-right: 20px;
        margin-bottom: 10px;
        font-size: $font-size-mini;
        box-sizing: border-box;
        &:nth-child(2n) {
          margin-right: 0;
        }
        .heading {
          position: relative;
          padding: 14px 19px;
          color: #666;
          .setting {
            position: absolute;
            right: 10px;
            top: 7px;
          }
        }
        .content {
          height: 190px;
          padding-top: 35px;
          box-sizing: border-box;
          .ranger-wrapper,
          .badge-wrapper {
            width: 50%;
            float: left;
          }
          .ranger-wrapper {
            text-align: center;
          }
          .badge-item {
            margin-bottom: 10px;
            font-size: $font-size-small;
            color: #666;
            &:before {
              content: '';
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 5px;
            }
            &.running {
              &:before {
                background: #36d0e5;
              }
              .stress {
                color: #36d0e5;
              }
            }
            &.creating {
              &:before {
                background: #6c6ad5;
              }
              .stress {
                color: #6c6ad5;
              }
            }
            &.expiring {
              &:before {
                background: #584153;
              }
              .stress {
                color: #584153;
              }
            }
            &.expired {
              &:before {
                background: #ff6b50;
              }
              .stress {
                color: #ff6b50;
              }
            }
          }
        }
        .bottom {
          font-size: 0;
          .bottom-item {
            display: inline-block;
            height: 40px;
            width: 33.3%;
            color: #999;
            font-size: $font-size-small;
            text-align: center;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
