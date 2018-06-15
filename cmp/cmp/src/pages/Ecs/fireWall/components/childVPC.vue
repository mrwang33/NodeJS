<template>
    <div class="child-wrapper">
        <div class="security-desc clearfix">
            <el-button type="primary" plain @click.native="dialogAddVpc=true">添加</el-button>
            <div class="desc-right fr">
                <el-input class="ecs-input" placeholder="请输入搜索内容"></el-input>
                <el-button type="primary" plain>查询</el-button>
                <el-button type="primary" plain>刷新</el-button>
            </div>
        </div>
        <el-table :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
            <el-table-column prop="ID" label="ID">
            </el-table-column>
            <el-table-column prop="name" label="名称">
            </el-table-column>
            <el-table-column prop="status" label="状态">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small">取消关联</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- modal 添加关联VPC -->
        <el-dialog :visible.sync="dialogAddVpc">
            <template slot="title">
                添加关联VPC
            </template>
            <div class="dialog-operate">
                <el-input style="width:400px" size="small" placeholder="请输入ID名称"></el-input>
                <div class="fr">
                    <el-button type="primary" size="small" plain>查询</el-button>
                    <el-button type="primary" size="small" plain>刷新</el-button>
                </div>
            </div>
            <el-table ref="multipleTable" :data="vpcList" :header-row-class-name="tableRowClassName" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="ID" label="id" width="200">
                </el-table-column>
                <el-table-column prop="name" label="名称">
                </el-table-column>
                <el-table-column prop="status" label="状态">
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
      activeName: '1',
      tableData: [
        {
          ID: '44fd6d89-656fd4d-6fdfdf45',
          name: 'administror',
          status: '正常'
        },
        {
          ID: '44fd6d89-656fd4d-6fdfdf45',
          name: 'administror',
          status: '正常'
        },
        {
          ID: '44fd6d89-656fd4d-6fdfdf45',
          name: 'administror',
          status: '正常'
        }
      ],
      vpcList: [
        {
          ID: '44fd6d89-656fd4d-6fdfdf45',
          name: 'administror',
          status: '正常'
        },
        {
          ID: '44fd6d89-656fd4d-6fdfdf45',
          name: 'administror',
          status: '正常'
        },
        {
          ID: '44fd6d89-656fd4d-6fdfdf45',
          name: 'administror',
          status: '正常'
        }
      ],
      dialogAddVpc: false
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
.child-wrapper {
  height: 400px;
  .security-desc {
    padding: 15px 0;
    .desc-right {
      width: 50%;
      text-align: right;
      .ecs-input {
        width: 220px;
        margin-right: 20px;
      }
    }
  }
  .el-form {
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
      .ecs-net {
        width: 200px;
        height: 32px;
        border: solid 1px rgba(108, 106, 213, 0.5);
        padding: 0 10px;
        font-size: 0;
        border-radius: 2px;
        box-sizing: border-box;
        .net-input,
        .net-dot {
          display: inline-block;
          color: #333;
        }
        .net-dot {
          width: 2px;
          height: 2px;
          border-radius: 1px;
          background: #333;
        }
        .net-input {
          width: 34px;
          text-align: center;
          font-size: $font-size-mini;
        }
      }
    }
  }
}
</style>
