<template>
  <div class="ecs">
      <div class="header">
          <split :ecsTitle="title"></split>
          <div class="search-drive">
              <el-input type="text" class="drive-input"></el-input><el-button class="btn-drive">搜索</el-button>
          </div>
      </div>
      <div class="content clearfix">
          <div class="oparating">
              <p class="title">弹性IP列表</p>
              <el-button class="btn-update" @click="onSubmit">刷新</el-button>
              <el-button class="btn-add" @click="createIp">申请弹性IP</el-button>
          </div>
          <el-table class="ecs-table"
            :data="tableData"
            :header-row-class-name="tableRowClassName"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="type"
                label="状态">
            </el-table-column>
            <el-table-column
                prop="size"
                label="绑定私有IP">
            </el-table-column>
            <el-table-column
                prop="startUp"
                label="外部网络">
            </el-table-column>
            <el-table-column
                prop="status"
                label="带宽大小">
            </el-table-column>
            <el-table-column
                prop="date"
                label="到期时间">
            </el-table-column>
            <el-table-column
                prop="zone"
                label="可用分区">
            </el-table-column>
            <el-table-column
                width="220"
                label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" disabled>释放</el-button>
                    <el-button type="text" size="small">绑定</el-button>
                    <el-button type="text" size="small">解绑</el-button>
                </template>
            </el-table-column>
          </el-table>
          <div class="ecs-page">
              <el-pagination
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
          </div>
      </div>
  </div>
</template>
<script>
import split from 'base/split/split'
export default {
  data () {
    return {
      title: '云主机 / 弹性IP',
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
    tableRowClassName ({ row, rowIndex }) {
      console.log(rowIndex)
      if (rowIndex === 0) {
        return 'heading-row'
      }
      return ''
    },
    onSubmit () {
      console.log('submit!')
    },
    createIp () {
      this.$router.push('/createIp')
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
    .search-drive{
        margin-top: 20px;
        padding-bottom: 20px;
        .drive-input{
            width: 80%;
        }
        .btn-drive{
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
        right: 160px;
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
