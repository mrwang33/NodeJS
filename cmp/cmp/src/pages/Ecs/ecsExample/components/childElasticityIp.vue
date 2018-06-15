<template>
  <div class="child-wrapper">
    <div class="security-desc">
      <el-button type="primary" plain @click.native="dialogTableVisible = true">绑定弹性IP</el-button>
      <el-button type="primary" plain>查看弹性IP</el-button>
    </div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <template slot="title">
          100.11.58.12 | 192.168.1.128
          <div class="title-right">
            <el-button type="text" @click.native.stop.prevent="open2">解绑</el-button>
          </div>
        </template>
        <div class="ip-content">
          <div class="row clearfix">
            <div class="col">
              <span class="label">弹性IP:</span>
              <span class="text">192.168.1.110</span>
            </div>
            <div class="col">
              <span class="label">创建时间:</span>
              <span class="text">2018-05-11</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">状态:</span>
              <span class="text">绑定</span>
            </div>
            <div class="col">
              <span class="label">宽带名称:</span>
              <span class="text">2云市场云主机1</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">已绑定私有IP:</span>
              <span class="text">10.111.100.200</span>
            </div>
            <div class="col">
              <span class="label">宽带大小:</span>
              <span class="text">20M</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">ID:</span>
              <span class="text">fa:da:56:e7</span>
            </div>
            <div class="col">
              <span class="label">宽带ID:</span>
              <span class="text">f3:e5:d5:b7</span>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <template slot="title">
          100.11.58.12 I 192.168.1.128
          <div class="title-right">
            <el-button type="text">解绑</el-button>
          </div>
        </template>
        <div class="security-desc">
          <el-button type="primary" plain>绑定弹性IP</el-button>
          <el-button type="primary" plain>查看弹性IP</el-button>
        </div>
        <div class="ip-content">
          <div class="row clearfix">
            <div class="col">
              <span class="label">弹性IP:</span>
              <span class="text">192.168.1.110</span>
            </div>
            <div class="col">
              <span class="label">创建时间:</span>
              <span class="text">2018-05-11</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">状态:</span>
              <span class="text">绑定</span>
            </div>
            <div class="col">
              <span class="label">宽带名称:</span>
              <span class="text">2云市场云主机1</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">已绑定私有IP:</span>
              <span class="text">10.111.100.200</span>
            </div>
            <div class="col">
              <span class="label">宽带大小:</span>
              <span class="text">20M</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">ID:</span>
              <span class="text">fa:da:56:e7</span>
            </div>
            <div class="col">
              <span class="label">宽带ID:</span>
              <span class="text">f3:e5:d5:b7</span>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- modal 绑定弹性IP -->
    <el-dialog :visible.sync="dialogTableVisible">
      <template slot="title">
        绑定弹性IP
      </template>
      <h4 class="dialog-title">云服务器名称：云主机云硬盘1</h4>
      <div class="dialog-operate">
        选择网卡：
        <el-select v-model="value" placeholder="请选择" size="small">
          <el-option label="所有网卡" value="所有网卡">
          </el-option>
        </el-select>
        <div class="fr">
          <el-button type="primary" size="small" plain>刷新</el-button>
        </div>
      </div>
      <el-table ref="multipleTable" :data="gridData" :header-row-class-name="tableRowClassName" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="弹性IP" width="150">
          <template slot-scope="scope">{{ scope.row.ip }}</template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
        </el-table-column>
        <el-table-column prop="bandwidth" label="带宽大小" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: '',
      value: '',
      gridData: [
        {
          ip: '10.111.100.200',
          status: '运行中',
          bandwidth: '50M'
        },
        {
          ip: '10.111.100.200',
          status: '运行中',
          bandwidth: '50M'
        },
        {
          ip: '10.111.100.200',
          status: '运行中',
          bandwidth: '50M'
        }
      ],
      multipleSelection: [],
      dialogTableVisible: false
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'heading-row'
      }
      return ''
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    open2() {
      this.$confirm(
        '<h4>确定要解绑该弹性IP吗？</h4>',
        '解除弹性IP',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          dangerouslyUseHTMLString: true,
          customClass: 'form-modal'
        }
      )
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>
<style lang="scss" scoped>
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
  }
  .ip-content {
    margin-top: 10px;
    .row {
      height: 40px;
      line-height: 40px;
      .col {
        width: 50%;
        float: left;
        padding-left: 10%;
        .label,
        .text {
          display: inline-block;
        }
        .label {
          color: #bfbfbf;
        }
        .text {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
