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
                    <el-button type="primary" plain @click.native="dialogVirtualIpVisible = true">申请虚拟IP地址</el-button>
                    <span class="tips">查看虚拟IP请至虚拟IP页签</span>
                    <div class="desc-right fr">
                        <el-input class="ecs-input" placeholder="请输入搜索内容"></el-input>
                        <el-button type="primary" plain>查询</el-button>
                        <el-button type="primary" plain>刷新</el-button>
                    </div>
                </div>
                <div class="table-wrapper">
                    <el-table @cell-click="goDetail" :cell-class-name="stressCol" :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
                        <el-table-column prop="IP" label="虚拟IP地址">
                        </el-table-column>
                        <el-table-column prop="network" label="绑定的云服务器(网卡)">
                        </el-table-column>
                        <el-table-column prop="elasticityIp" label="绑定的弹性IP">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click.native="dialogipVisible = true">绑定弹性IP</el-button>
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        更多
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item @click.native.stop.prevent="dialogEcsVisible = true">绑定云服务器</el-dropdown-item>
                                        <el-dropdown-item disabled divided>解绑云服务器</el-dropdown-item>
                                        <el-dropdown-item divided @click.native="open2">删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-collapse-item>
        </el-collapse>
        <!-- modal 绑定弹性IP -->
        <el-dialog :visible.sync="dialogipVisible">
            <template slot="title">
                绑定弹性IP
            </template>
            <div class="dialog-operate">
                <el-input class="dialog-input" size="small" placeholder="请输入弹性IP地址"></el-input>
                <div class="fr">
                    <el-button type="primary" size="small" plain>查询</el-button>
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
        <!-- modal 绑定云服务器 -->
        <el-dialog :visible.sync="dialogEcsVisible">
            <template slot="title">
                绑定云服务器
            </template>
            <h4 class="dialog-title">选择云服务器</h4>
            <div class="dialog-operate">
                状态：
                <el-select v-model="value" placeholder="请选择" size="small">
                    <el-option label="所有网卡" value="所有状态">
                    </el-option>
                </el-select>
                名称：
                <el-select v-model="value" placeholder="请选择" size="small">
                    <el-option label="所有网卡" value="administrator">
                    </el-option>
                </el-select>
                <div class="fr">
                    <el-button type="primary" size="small" plain>查询</el-button>
                    <el-button type="primary" size="small" plain>刷新</el-button>
                </div>
            </div>
            <el-table ref="multipleTable" :data="ecsData" :header-row-class-name="tableRowClassName" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="name" label="名称" width="150">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                </el-table-column>
                <el-table-column prop="mainNetIp" label="主网卡IP">
                </el-table-column>
                <el-table-column prop="privateIp" label="私有IP">
                </el-table-column>
            </el-table>
            <el-pagination class="pagination-wrapper" layout="prev, pager, next" :total="50">
            </el-pagination>
            <h4 class="dialog-title">选择云服务器</h4>
            <div>
                网卡：
                <el-select v-model="value" placeholder="请选择" size="small">
                    <el-option label="所有网卡" value="administrator">
                    </el-option>
                </el-select>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- modal 申请虚拟IP地址 -->
        <el-dialog :visible.sync="dialogVirtualIpVisible">
            <template slot="title">
                申请虚拟IP地址
            </template>
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="方式">
                    <el-radio-group size="small" @change="changeradio" v-model="radioType">
                        <el-radio-button label="自动分配"></el-radio-button>
                        <el-radio-button label="手动分配"></el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="IP" v-show="showhandle">
                    <div class="ecs-net">
                        <input type="text" class="net-input" value="192">
                        <span class="net-dot"></span>
                        <input type="text" class="net-input" value="168">
                        <span class="net-dot"></span>
                        <input type="text" class="net-input" value="1">
                        <span class="net-dot"></span>
                        <input type="text" class="net-input" value="72">
                    </div>
                    <p class="desc">可用网段：100.111.101.200</p>
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
      ecsData: [
        {
          name: 'administrator',
          status: '运行中',
          mainNetIp: '100.110.120.200',
          privateIp: '--'
        },
        {
          name: 'administrator',
          status: '运行中',
          mainNetIp: '100.110.120.200',
          privateIp: '--'
        },
        {
          name: 'administrator',
          status: '运行中',
          mainNetIp: '100.110.120.200',
          privateIp: '--'
        }
      ],
      tableData: [
        {
          IP: '10.100.122.200',
          network: '1.111.200.10',
          elasticityIp: '192.168.1.110'
        },
        {
          IP: '10.100.122.200',
          network: '1.111.200.10',
          elasticityIp: '192.168.1.110'
        },
        {
          IP: '10.100.122.200',
          network: '1.111.200.10',
          elasticityIp: '192.168.1.110'
        }
      ],
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
      dialogipVisible: false,
      dialogVirtualIpVisible: false,
      dialogEcsVisible: false,
      radioType: '自动分配',
      showhandle: false
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
        this.$router.push('/vpcDetail/childSubnet')
      }
    },
    changeradio(value) {
      if (value === '自动分配') {
        this.showhandle = false
      } else if (value === '手动分配') {
        this.showhandle = true
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
  .dialog-input {
    width: 70%;
  }
  .pagination-wrapper {
    margin: 20px 0;
    text-align: right;
  }
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
  .desc {
    font-size: 14px;
    color: #bfbfbf;
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
