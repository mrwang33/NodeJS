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
                <div class="security-desc">
                    <span class="security-text">出方向规则 1</span>
                    <span class="security-text">入方向规则 1</span>
                    <span class="security-text">ID 1</span>
                </div>
                <div class="table-wrapper">
                    <el-table :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
                        <el-table-column prop="decoration" label="方向">
                        </el-table-column>
                        <el-table-column prop="type" label="类型">
                        </el-table-column>
                        <el-table-column prop="protocol" label="协议">
                        </el-table-column>
                        <el-table-column prop="protocolDesc" label="端口范围/ICMP类型">
                        </el-table-column>
                        <el-table-column prop="remote" label="远端">
                        </el-table-column>
                    </el-table>
                </div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
                <template slot="title">
                    VPN-KDSONFDLSIJDK
                    <div class="title-right">
                        <span class="net-text">Nic1:10.111.200.110</span>
                    </div>
                </template>
                <div class="security-desc">
                    <span class="security-text">出方向规则 1</span>
                    <span class="security-text">入方向规则 1</span>
                    <span class="security-text">ID 1</span>
                </div>
                <div class="table-wrapper">
                    <el-table :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
                        <el-table-column prop="decoration" label="方向">
                        </el-table-column>
                        <el-table-column prop="type" label="类型">
                        </el-table-column>
                        <el-table-column prop="protocol" label="协议">
                        </el-table-column>
                        <el-table-column prop="protocolDesc" label="端口范围/ICMP类型">
                        </el-table-column>
                        <el-table-column prop="remote" label="远端">
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
          decoration: '入方向',
          type: 'IPV4',
          protocol: 'ICMP',
          protocolDesc: 'Any',
          remote: '0.0.0.0/0'
        },
        {
          decoration: '入方向',
          type: 'IPV4',
          protocol: 'ICMP',
          protocolDesc: 'Any',
          remote: '0.0.0.0/0'
        },
        {
          decoration: '入方向',
          type: 'IPV4',
          protocol: 'ICMP',
          protocolDesc: 'Any',
          remote: '0.0.0.0/0'
        },
        {
          decoration: '入方向',
          type: 'IPV4',
          protocol: 'ICMP',
          protocolDesc: 'Any',
          remote: '0.0.0.0/0'
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
.child-wrapper /deep/ .el-table {
  .heading-row {
    th {
      background: rgba(108, 106, 213, 0.1) !important;
    }
  }
  td,
  th {
    text-align: center;
  }
}
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
    line-height: 40px;
    .security-text {
      margin-right: 25px;
    }
  }
}
</style>
