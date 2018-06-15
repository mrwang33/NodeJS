<template>
  <div class="net-content clearfix">
    <div class="oparating">
      <p class="title">专有网络列表</p>
      <el-button class="btn-update" @click="onSubmit">刷新</el-button>
      <el-button class="btn-add" @click="createSecurity">创建专有网络</el-button>
    </div>
    <el-table class="ecs-table" @cell-click="goDetail" :cell-class-name="stressCol" :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
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
          <el-button @click.native="dialogUpdateVisible = true" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">释放</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="ecs-page">
      <el-pagination layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
    <!-- modal 修改 -->
    <el-dialog :visible.sync="dialogUpdateVisible">
      <template slot="title">
        修改
      </template>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="名称">
          <el-input placeholder="administrator" size="small" class="ecs-input"></el-input>
        </el-form-item>
        <el-form-item label="网络名称">
          <el-select v-model="value" placeholder="请选择" size="small">
            <el-option label="eip_new_web" value="administrator">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      ],
      value: 'eip_new_web',
      dialogUpdateVisible: false
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'heading-row'
      }
      return ''
    },
    onSubmit() {
      console.log('submit!')
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
        this.$router.push('/vpcDetail/childSubnet')
      }
    },
    createSecurity() {
      this.$router.push('/createproprietaryNet')
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
  .ecs-input{
    width: 300px;
  }
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
