<template>
  <div class="child-wrapper">
    <div class="monitor-header">
      <el-button type="primary" plain size="small">近1小时</el-button>
      <el-button type="primary" plain size="small">近3小时</el-button>
      <el-button type="primary" plain size="small">近12小时</el-button>
      <el-button type="primary" plain size="small">近24小时</el-button>
      <el-button type="primary" plain size="small">近1周</el-button>
      <el-button type="primary" plain size="small">近1月</el-button>
      <div class="header-right">
        自定义时间段：
        <el-date-picker size="small" v-model="value6" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00']">
        </el-date-picker>
      </div>
    </div>
    <div>
      <div class="schart-select">
        <el-select placeholder="请选择" size="small">
          <el-option>
            cpu使用率
          </el-option>
        </el-select>
        <span class="tips">你还可以添加4个监控项</span>
      </div>
      <schart class="schart-wrapper" :canvasId="canvasId" :type="type" :data="data" :options="options"></schart>
    </div>
  </div>
</template>
<script>
import Schart from 'vue-schart'
export default {
  data() {
    return {
      canvasId: 'myCanvas',
      type: 'line',
      data: [
        { name: '2014', value: 1342 },
        { name: '2015', value: 2123 },
        { name: '2016', value: 1654 },
        { name: '2017', value: 1795 }
      ],
      options: {
        title: '',
        autoWidth: true,
        fillColor: '#6c6ad5'
      }
    }
  },
  components: {
    Schart
  }
}
</script>
<style lang="scss" scoped>
.child-wrapper {
  height: 400px;
  .monitor-header {
    padding: 15px 0;
    .header-right {
      float: right;
    }
  }
  .schart-select{
    margin-top: 10px;
    .tips{
      font-size: 13px;
      color: #999;
      margin-left: 15px;
    }
  }
  .schart-wrapper {
    width: 100%;
    height: 400px;
  }
}
</style>
