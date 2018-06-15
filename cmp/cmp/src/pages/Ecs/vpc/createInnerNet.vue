<template>
  <div class="createDrive">
    <div class="title">
      <split :ecsTitle="title"></split>
    </div>
    <div class="content-wrapper">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="名称">
          <el-select class="ecs-select" size="small" v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="子网名称">
          <el-input size="small" class="ecs-input" placeholder="请输入子网名称"></el-input>
        </el-form-item>
        <el-form-item label="网段">
          <div class="ecs-net">
            <input type="text" class="net-input" value="192">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="168">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="1">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="72">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="33">
          </div>
        </el-form-item>
        <el-form-item label="网关">
          <div class="ecs-net">
            <input type="text" class="net-input" value="192">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="168">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="1">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="72">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="33">
          </div>
        </el-form-item>
        <el-form-item label="DNS服务器地址1">
          <div class="ecs-net">
            <input type="text" class="net-input" value="192">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="168">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="1">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="72">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="33">
          </div>
        </el-form-item>
        <el-form-item label="DNS服务器地址2">
          <div class="ecs-net">
            <input type="text" class="net-input" value="192">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="168">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="1">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="72">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="33">
          </div>
        </el-form-item>
        <el-form-item class="ecs-create">
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import split from 'base/split/split'
export default {
  data() {
    return {
      title: '云主机 / VPC / 创建内部网络',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      value: '',
      options: []
    }
  },
  components: {
    split
  }
}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.createDrive {
  padding: 10px 30px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  .title {
    padding-left: 10px;
    background: $body-color;
  }
  .content-wrapper {
    height: 100%;
    .el-form {
      width: 100%;
      height: 100%;
      padding: 50px 5% 0 20%;
      background: $body-color;
      box-sizing: border-box;
      .el-form-item {
        height: 30px;
        .ecs-input {
          width: 360px;
        }
        .ecs-select {
          margin-right: 15px;
        }
        .ecs-net {
          width: 200px;
          height: 32px;
          border: solid 1px rgba(108, 106, 213, 0.5);
          padding: 0 10px;
          font-size: 0;
          border-radius: 2px;
          box-sizing: border-box;
          .net-input,
          .net-dot {
            display: inline-block;
            color: #333;
          }
          .net-dot {
            width: 2px;
            height: 2px;
            border-radius: 1px;
            background: #333;
          }
          .net-input {
            width: 34px;
            text-align: center;
            font-size: $font-size-mini;
          }
        }
      }
      .ecs-create {
        margin-top: 100px;
      }
    }
  }
}
</style>
