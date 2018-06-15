<template>
    <div class="child-wrapper">
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    VPN-KDSONFDLSIJDK
                    <div class="title-right">
                        <span class="net-text">Nic1:10.111.200.110</span>
                    </div>
                </template>
                <div class="security-desc clearfix">
                    <span class="tips">查看虚拟IP请至虚拟IP页签</span>
                    <div class="desc-right fr">
                        <el-input class="ecs-input" placeholder="请输入搜索内容"></el-input>
                        <el-button type="primary" plain>查询</el-button>
                        <el-button type="primary" plain>刷新</el-button>
                    </div>
                </div>
                <div class="table-wrapper">
                    <el-table @cell-click="goDetail" :cell-class-name="stressCol" :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
                        <el-table-column prop="ip" label="IP地址">
                        </el-table-column>
                        <el-table-column prop="use" label="用途">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: '1',
      tableData: [
        {
          use: '网关',
          ip: '10.100.122.200'
        },
        {
          use: '网关',
          ip: '10.100.122.200'
        },
        {
          use: '网关',
          ip: '10.100.122.200'
        },
        {
          use: '网关',
          ip: '10.100.122.200'
        }
      ]
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'heading-row'
      }
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.child-wrapper /deep/ .el-collapse-item {
  margin-top: 10px;
  .el-collapse-item__header {
    height: 40px;
    line-height: 40px;
    background-color: rgba(108, 106, 213, 0.5);
    border-radius: 2px 2px 0px 0px;
    padding-left: 15px;
    margin-bottom: 0;
    .el-collapse-item__arrow {
      line-height: 40px;
    }
    .title-right {
      float: right;
      padding-right: 10px;
    }
  }
  .el-collapse-item__wrap {
    width: 100%;
    border-radius: 0px 0px 2px 2px;
    border: solid 1px rgba(108, 106, 213, 0.5);
    border-top-color: #fff;
    padding: 0 10px;
    box-sizing: border-box;
  }
}
.child-wrapper {
  height: 400px;
  .security-desc {
    padding: 15px 0;
    .security-text {
      margin-right: 25px;
    }
    .tips {
      color: #999;
      font-size: 14px;
      margin-left: 15px;
    }
    .desc-right {
      width: 50%;
      text-align: right;
    //   margin-bottom: 15px;
      .ecs-input {
        width: 220px;
        margin-right: 20px;
      }
    }
  }
  .el-form  {
      width: 100%;
      height: 100%;
      padding: 20px 5% 0 10%;
      background: $body-color;
      box-sizing: border-box;
      .el-form-item {
        height: 30px;
        .ecs-input {
          width: 300px;
        }
        .ecs-select {
          margin-right: 15px;
        }
        .ecs-net{
          width: 200px;
          height: 32px;
          border: solid 1px rgba(108, 106, 213, 0.5);
          padding: 0 10px;
          font-size: 0;
          border-radius: 2px;
          box-sizing: border-box;
          .net-input,.net-dot{
            display: inline-block;
            color: #333;
          }
          .net-dot{
            width: 2px;
            height: 2px;
            border-radius: 1px;
            background: #333;
          }
          .net-input{
            width: 34px;
            text-align: center;
            font-size: $font-size-mini;
          }
        }
      }
    }
}
</style>
