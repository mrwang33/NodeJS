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
              <p class="title">防火墙列表</p>
              <el-button class="btn-update" @click="onSubmit">刷新</el-button>
              <el-button class="btn-add" @click="createFireWall">创建</el-button>
          </div>
          <el-table class="ecs-table"
            :data="tableData"
            :cell-class-name="stressCol"
            :header-row-class-name="tableRowClassName"
            @cell-click="goDetail"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态"
                width="180">
            </el-table-column>
            <el-table-column
                prop="VPC"
                label="VPC">
            </el-table-column>
            <el-table-column
                prop="description"
                label="描述">
            </el-table-column>
            <el-table-column
                prop="date"
                label="到期时间">
            </el-table-column>
            <el-table-column
                width="180"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">关闭</el-button>
                    <el-button type="text" size="small">删除</el-button>
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
      title: '云主机 / 防火墙',
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          VPC: '192.168.0.1',
          description: '512'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          VPC: '192.168.0.1',
          description: '512'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          VPC: '192.168.0.1',
          description: '512'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          VPC: '192.168.0.1',
          description: '512'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          status: '运行中',
          VPC: '192.168.0.1',
          description: '512'
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
    stressCol({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return 'stress-col'
      }
      return ''
    },
    goDetail(row, column, cell, event) {
      const property = column['property']
      if (property === 'name') {
        this.$router.push('/firewallDetail/childVPC')
      }
    },
    onSubmit () {
      console.log('submit!')
    },
    createFireWall () {
      this.$router.push('/createFireWall')
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
