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
          <el-button type="primary" plain @click.native="dialogTableVisible = true">创建子网</el-button>
          <span class="tips">您还可以增加 10 个子网</span>
          <div class="desc-right fr">
            <el-input class="ecs-input" placeholder="请输入搜索内容"></el-input>
            <el-button type="primary" plain>查询</el-button>
            <el-button type="primary" plain>刷新</el-button>
          </div>
        </div>
        <div class="table-wrapper">
          <el-table @cell-click="goDetail" :cell-class-name="stressCol" :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
            <el-table-column prop="name" label="子网名称">
            </el-table-column>
            <el-table-column prop="status" label="状态">
            </el-table-column>
            <el-table-column prop="subnet" label="子网">
            </el-table-column>
            <el-table-column prop="net" label="网关">
            </el-table-column>
            <el-table-column prop="DNS" label="DNS服务器地址">
            </el-table-column>
            <el-table-column prop="DHCP" label="DHCP">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small">修改</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- modal 添加子网 -->
    <el-dialog :visible.sync="dialogTableVisible">
      <template slot="title">
        添加子网
      </template>
      <h4 class="dialog-title">云服务器名称：云主机云硬盘1</h4>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="名称">
          <el-input size="small" class="ecs-input" placeholder="请输入专有网络名称"></el-input>
        </el-form-item>
        <el-form-item label="子网网段">
          <div class="ecs-net">
            <input type="text" class="net-input" value="192">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="168">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="1">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="72">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="33">
          </div>
        </el-form-item>
        <el-form-item label="网关">
          <div class="ecs-net">
            <input type="text" class="net-input" value="192">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="168">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="1">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="72">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="33">
          </div>
        </el-form-item>
        <el-form-item label="DNS服务器地址1">
          <div class="ecs-net">
            <input type="text" class="net-input" value="192">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="168">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="1">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="72">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="33">
          </div>
        </el-form-item>
        <el-form-item label="DNS服务器地址2">
          <div class="ecs-net">
            <input type="text" class="net-input" value="192">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="168">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="1">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="72">
            <span class="net-dot"></span>
            <input type="text" class="net-input" value="33">
          </div>
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
export default {
  data() {
    return {
      activeName: '1',
      tableData: [
        {
          name: 'sub-Vpc',
          status: '正常',
          subnet: '10.100.122.200',
          net: '1.111.200.10',
          DNS: '192.168.1.110',
          DHCP: '启用'
        },
        {
          name: 'sub-Vpc',
          status: '正常',
          subnet: '10.100.122.200',
          net: '1.111.200.10',
          DNS: '192.168.1.110',
          DHCP: '启用'
        },
        {
          name: 'sub-Vpc',
          status: '正常',
          subnet: '10.100.122.200',
          net: '1.111.200.10',
          DNS: '192.168.1.110',
          DHCP: '启用'
        }
      ],
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
    stressCol({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return 'stress-col'
      }
      return ''
    },
    goDetail(row, column, cell, event) {
      const property = column['property']
      if (property === 'name') {
        this.$router.push('/subnetDetail/childPrivateIp')
      }
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
