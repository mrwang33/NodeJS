<template>
    <div class="net-content clearfix">
        <div class="oparating">
            <p class="title">内部网络列表</p>
            <el-button class="btn-update" @click="onSubmit">刷新</el-button>
            <el-button class="btn-add" @click="createSecurity">创建内部网络</el-button>
        </div>
        <el-table class="ecs-table" :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
            <el-table-column prop="name" label="VPC名称" width="180">
            </el-table-column>
            <el-table-column prop="id" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="netName" label="网络名称">
            </el-table-column>
            <el-table-column prop="status" label="状态">
            </el-table-column>
            <el-table-column prop="date" label="到期时间">
            </el-table-column>
            <el-table-column width="180" label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                    <el-button type="text" size="small">释放</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="ecs-page">
            <el-pagination layout="prev, pager, next" :total="50">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import split from 'base/split/split'
export default {
  data() {
    return {
      tableData: [
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          status: '运行中',
          netName: 'eip_new_web',
          description: 'default'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          status: '运行中',
          netName: 'eip_new_web',
          description: 'default'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          status: '运行中',
          netName: 'eip_new_web',
          description: 'default'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          status: '运行中',
          netName: 'eip_new_web',
          description: 'default'
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
    createSecurity() {
      this.$router.push('/createInnerNet')
    }
  },
  components: {
    split
  }
}
</script>
<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.net-content /deep/ .el-table {
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
.net-content {
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
      right: 170px;
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
</style>
