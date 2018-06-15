<template>
  <div class="createEcs">
    <div class="title">
      <split :ecsTitle="title"></split>
    </div>
    <div class="content-wrapper">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="外部网络">
          <el-select class="ecs-select" size="small" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="带宽名称">
          <el-input class="ecs-input" type="text" size="small"></el-input>
        </el-form-item>
        <el-form-item label="带宽大小">
          <el-slider v-model="value8" show-input>
          </el-slider>
        </el-form-item>
        <el-form-item label="数量">
          <el-input class="ecs-input-number" type="number" size="small"></el-input>
        </el-form-item>
        <el-form-item class="ecs-create">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
      title: '云主机 / 弹性IP / 创建弹性IP',
      value8: '',
      value: '',
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
      options: [{
          value: 1,
          label: '黄金糕'
        }]
    }
  },
  methods: {
    onSubmit() {}
  },
  components: {
    split
  }
}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.createEcs {
  padding: 10px 30px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  .title {
    padding-left: 10px;
    background: $body-color;
  }
  .content-wrapper {
    min-height: 100%;
    background: $body-color;
    .el-form {
      width: 100%;
      height: 100%;
      padding: 50px 5% 100px 20%;
      box-sizing: border-box;
      .el-form-item {
        height: 30px;
        .ecs-input {
          width: 360px;
        }
        .ecs-input-number {
          width: 192px;
        }
        .ecs-select {
          margin-right: 15px;
        }
      }
      .ecs-create {
        margin-top: 60px;
      }
    }
  }
}
</style>
