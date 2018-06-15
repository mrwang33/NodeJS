<template>
    <div class="createEcs">
        <div class="title">
            <split :ecsTitle="title"></split>
        </div>
        <div class="content-wrapper">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="虚机名称">
                <el-input size="small" class="ecs-input" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="可用分区">
                <el-tag class="active">caxa12.cd</el-tag>
                <el-tag>caxa12.cd</el-tag>
                <el-tag>caxa12.cd</el-tag>
                <el-tag>caxa12.cd</el-tag>
                <el-tag>caxa12.cd</el-tag>
              </el-form-item>
              <el-form-item label="规格大小">
                <el-tag class="active">2核2G</el-tag>
                <el-tag>2核2G</el-tag>
                <el-tag>2核2G</el-tag>
                <el-tag>2核2G</el-tag>
                <el-tag>2核2G</el-tag>
              </el-form-item>
              <el-form-item label="系统盘">
                  <el-select class="ecs-select" size="small" v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in form.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                      <el-select size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in form.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="数据盘">
                      <el-select class="ecs-select" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in form.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      <el-select size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in form.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="公共镜像">
                      <el-select class="ecs-select" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in form.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      <el-select size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in form.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="VPC">
                      <el-select class="ecs-select" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in form.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="子网">
                      <el-select class="ecs-select" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in form.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="安全组">
                      <el-select class="ecs-select" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in form.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="弹性IP">
                        <el-tag class="active">不使用</el-tag>
                        <el-tag>自动分配</el-tag>
                        <el-tag>使用已有</el-tag>
                    </el-form-item>
                    <el-form-item label="登录">
                      <el-select class="ecs-select" size="small" v-model="value" placeholder="密码">
                        <el-option
                          v-for="item in form.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      <!-- <p>1、密码登录方式创建的Linux云服务器，如需使用SSH密码方式登录，请先使用云服务器页面的远程登录功能登录云服务器，开启SSH密码登录方式。</p>
                      <p>1、密码登录方式创建的Linux云服务器，如需使用SSH密码方式登录，请先使用云服务器页面的远程登录功能登录云服务器，开启SSH密码登录方式。</p> -->
                    </el-form-item>
                    <el-form-item label="用户名">
                      Root
                    </el-form-item>
                    <el-form-item label="密码">
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
      title: '云主机 / 实例 / 创建云主机',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        options: []
      }
    }
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
    .el-form  {
      width: 100%;
      height: 100%;
      padding: 50px 5% 100px 20%;
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
