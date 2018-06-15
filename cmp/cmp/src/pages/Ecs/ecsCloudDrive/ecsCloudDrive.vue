<template>
  <div class="ecs">
    <div class="header">
      <split :ecsTitle="title"></split>
      <div class="search-drive">
        <el-input type="text" class="drive-input"></el-input>
        <el-button class="btn-drive">搜索</el-button>
      </div>
    </div>
    <div class="content clearfix">
      <div class="oparating">
        <p class="title">云硬盘列表</p>
        <el-button class="btn-update" @click="onSubmit">刷新</el-button>
        <el-button class="btn-add" @click="createDrive">创建</el-button>
      </div>
      <el-table class="ecs-table" :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
        <el-table-column prop="name" label="硬盘名称" width="180">
        </el-table-column>
        <el-table-column prop="type" label="硬盘类型" width="180">
        </el-table-column>
        <el-table-column prop="size" label="硬盘容量">
        </el-table-column>
        <el-table-column prop="startUp" label="启动盘">
        </el-table-column>
        <el-table-column prop="status" label="硬盘状态">
        </el-table-column>
        <el-table-column prop="date" label="到期时间">
        </el-table-column>
        <el-table-column prop="zone" label="可用分区">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small" disabled>挂载</el-button>
            <el-button type="text" size="small">卸载</el-button>
            <el-dropdown>
              <span class="el-dropdown-link">
                更多
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="open2">删除</el-dropdown-item>
                <el-dropdown-item disabled divided>扩容</el-dropdown-item>
                <el-dropdown-item divided>创建备份</el-dropdown-item>
                <el-dropdown-item divided>创建快照</el-dropdown-item>
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
  </div>
</template>
<script>
import split from 'base/split/split'
export default {
  data() {
    return {
      title: '云主机 / 云硬盘',
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          type: 'CS1.0',
          size: '512',
          startUp: 'Centos1.0',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          type: 'CS1.0',
          size: '512',
          startUp: 'Centos1.0',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          type: 'CS1.0',
          size: '512',
          startUp: 'Centos1.0',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          type: 'CS1.0',
          size: '512',
          startUp: 'Centos1.0',
          zone: 'caxa12.cd'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          type: 'CS1.0',
          size: '512',
          startUp: 'Centos1.0',
          zone: 'caxa12.cd'
        }
      ]
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log(rowIndex)
      if (rowIndex === 0) {
        return 'heading-row'
      }
      return ''
    },
    onSubmit() {
      console.log('submit!')
    },
    createDrive() {
      this.$router.push('/createDrive')
    },
    open2() {
      this.$confirm(
        '<h4>确定要对云硬盘进行删除操作吗?</h4><p>删除操作无法恢复!</p>',
        '删除云硬盘',
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
.ecs {
  width: 100%;
  height: 100%;
  padding: 10px 30px 70px;
  overflow-y: scroll;
  .header {
    padding: 0 20px;
    background: $body-color;
    box-sizing: border-box;
    .search-drive {
      margin-top: 20px;
      padding-bottom: 20px;
      .drive-input {
        width: 80%;
      }
      .btn-drive {
        float: right;
        background: #6c6ad5;
        color: #fff;
        padding: 12px 32px;
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
