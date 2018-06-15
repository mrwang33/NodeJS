<template>
  <div class="ecs">
    <div class="header">
      <split :ecsTitle="title"></split>
      <el-form :inline="true" :model="formInline" class="ecs-form demo-form-inline">
        <el-form-item label="名称">
          <el-input v-model="formInline.user" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.region" placeholder="运行中">
            <el-option label="运行中" value="运行中"></el-option>
            <el-option label="关闭" value="关闭"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="规格">
          <el-select v-model="formInline.region" placeholder="4核8G">
            <el-option label="2核2G" value="2核2G"></el-option>
            <el-option label="4核8G" value="4核8G"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content clearfix">
      <div class="oparating">
        <p class="title">实例列表</p>
        <el-button class="btn-update">刷新</el-button>
        <el-button class="btn-add" @click="createEcs">创建</el-button>
      </div>
      <el-table class="ecs-table" @cell-click="goDetail" :data="tableData" :cell-class-name="stressCol" :header-row-class-name="tableRowClassName" style="width: 100%">
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="180">
        </el-table-column>
        <el-table-column prop="flavor" label="规格">
        </el-table-column>
        <el-table-column prop="Image" label="镜像">
        </el-table-column>
        <el-table-column prop="privateIp" label="私有ip">
        </el-table-column>
        <el-table-column prop="date" label="到期时间">
        </el-table-column>
        <el-table-column prop="zone" label="可用分区">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">远程登录</el-button>
            <el-dropdown>
              <span class="el-dropdown-link">
                更多
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>开机</el-dropdown-item>
                <el-dropdown-item disabled divided>关机</el-dropdown-item>
                <el-dropdown-item disabled divided>变更规则</el-dropdown-item>
                <el-dropdown-item disabled divided>重装系统</el-dropdown-item>
                <el-dropdown-item disabled divided>切换操作系统</el-dropdown-item>
                <el-dropdown-item divided>重启</el-dropdown-item>
                <el-dropdown-item divided @click.native="open2">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <div class="ecs-page">
        <el-pagination layout="prev, pager, next" :total="50">
        </el-pagination>
      </div>
    </div>
    <!-- 弹框 -->
    <el-dialog title="删除云主机" :visible.sync="centerDialogVisible" width="30%" top="40vh" center>
      <h4>确定要对云服务器进行删除操作吗？</h4>
      <span>删除操作无法恢复，且系统盘将随云服务器一并删除！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getEcsInfo } from '../../../axios/api.js'
import split from 'base/split/split'
export default {
  data() {
    return {
      title: '云主机 / 实例',
      ecsInfo: [],
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          flavor: '2核4G',
          Image: 'Centos1.0',
          privateIp: '192.168.0.1',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          flavor: '2核4G',
          Image: 'Centos1.0',
          privateIp: '192.168.0.1',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          flavor: '2核4G',
          Image: 'Centos1.0',
          privateIp: '192.168.0.1',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          flavor: '2核4G',
          Image: 'Centos1.0',
          privateIp: '192.168.0.1',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          flavor: '2核4G',
          Image: 'Centos1.0',
          privateIp: '192.168.0.1',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          flavor: '2核4G',
          Image: 'Centos1.0',
          privateIp: '192.168.0.1',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          flavor: '2核4G',
          Image: 'Centos1.0',
          privateIp: '192.168.0.1',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          flavor: '2核4G',
          Image: 'Centos1.0',
          privateIp: '192.168.0.1',
          zone: 'caxa12.cd'
        }
      ],
      centerDialogVisible: false
    }
  },
  mounted() {
    this.getEcs()
  },
  methods: {
    getEcs() {
      setTimeout(() => {
        getEcsInfo().then(res => {
          console.log(res)
        })
      }, 300)
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'heading-row'
      }
      return ''
    },
    stressCol({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return 'stress-col'
      }
      return ''
    },
    goDetail(row, column, cell, event) {
      const property = column['property']
      if (property === 'name') {
        this.$router.push('/ecsDetail/childDrive')
      }
    },
    createEcs() {
      this.$router.push('/createEcs')
    },
    openmodal() {
      this.$confirm('确定要对云服务器进行删除操作吗', '提示', {
        title: '删除云主机',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error',
        center: true
      })
        .then(() => {
          this.message({
            type: 'success',
            message: '删除成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    open2() {
      this.$confirm(
        '<h4>确定要对云服务器进行删除操作吗?</h4><p>删除操作无法恢复，且系统盘将随云服务器一并删除!</p>',
        '删除云主机',
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
  },
  components: {
    split
  }
}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.ecs /deep/ .el-table {
  .heading-row {
    th {
      background: rgba(108, 106, 213, 0.1) !important;
    }
  }
  td,
  th {
    text-align: center;
  }
  .stress-col {
    color: #6c6ad5;
    cursor: pointer;
  }
  .el-dropdown {
    margin-left: 8px;
  }
  .el-dropdown-link {
    font-size: 12px;
    color: rgba(108, 106, 213, 0.5);
    font-weight: 500;
  }
  .el-dropdown-link:hover {
    cursor: pointer;
  }
}
.ecs {
  width: 100%;
  height: 100%;
  padding: 10px 30px 70px;
  overflow-y: scroll;
  .header {
    padding: 0 20px;
    background: $body-color;
    box-sizing: border-box;
    .ecs-form {
      padding-top: 25px;
      .btn-search {
        background: #6c6ad5;
        border-color: #6c6ad5;
        padding: 12px 32px;
        margin-left: 200px;
      }
    }
  }
  .content {
    margin-top: 10px;
    padding: 0 20px 60px 20px;
    background: $body-color;
    .oparating {
      position: relative;
      .title {
        padding-top: 25px;
        padding-bottom: 30px;
        font-size: $font-size-small;
        border-bottom: dotted 1px rgba(108, 106, 213, 0.3);
      }
      .btn-update,
      .btn-add {
        position: absolute;
        top: 20px;
        padding: 12px 32px;
        border: none;
        color: #fff;
      }
      .btn-add {
        right: 0;
        background: #6c6ad5;
      }
      .btn-update {
        right: 119px;
        background: #36d0e5;
      }
    }
    .ecs-table {
      margin-top: 30px;
    }
    .ecs-page {
      margin-top: 20px;
      float: right;
    }
  }
}
</style>
