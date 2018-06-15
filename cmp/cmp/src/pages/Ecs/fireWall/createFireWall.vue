<template>
    <div class="createDrive">
        <div class="title">
            <split :ecsTitle="title"></split>
        </div>
        <div class="content-wrapper">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="名称">
                <el-input size="small" class="ecs-input" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input size="small" class="ecs-input" v-model="form.name"></el-input>
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
      title: '云主机 / 防火墙 / 创建防火墙',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
    .el-form  {
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
      }
      .ecs-create{
        margin-top: 60px;
      }
    }
  }
}
</style>
