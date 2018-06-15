<template>
  <div class="child-wrapper">
    <div class="security-desc">
      <el-button type="primary" plain @click.native="dialogTableVisible = true">添加网卡</el-button>
      <span class="tips">您还可以增加 10 块网卡</span>
    </div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <template slot="title">
          100.11.58.12 I 192.168.1.128
          <div class="title-right">
            <el-button type="text">管理私有IP地址</el-button>
            <el-button type="text">更改安全组</el-button>
            <el-button type="text" disabled>卸载</el-button>
          </div>
        </template>
        <div class="ip-content">
          <div class="row clearfix">
            <div class="col">
              <span class="label">网卡IP:</span>
              <span class="text">44fd6d89-656fd4d-6fdf45</span>
            </div>
            <div class="col">
              <span class="label">状态:</span>
              <span class="text">激活</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">弹性IP:</span>
              <span class="text">192.168.1.232 / 30M</span>
            </div>
            <div class="col">
              <span class="label">子网:</span>
              <span class="text">sub-net / DIPSC</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">安全组:</span>
              <span class="text">VPN-2156pdk45</span>
            </div>
            <div class="col">
              <span class="label">私有IP地址:</span>
              <span class="text">10.100.111.200</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">源/目的检查：</span>
              <span class="text">
                <el-switch v-model="value2" active-color="#6c6ad5" inactive-color="#bfbfbf">
                </el-switch>
              </span>
            </div>
            <div class="col">
              <span class="label">MAC地址:</span>
              <span class="text">f3:e5:d5:b7</span>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- modal 绑定弹性IP -->
    <el-dialog :visible.sync="dialogTableVisible">
      <template slot="title">
        添加网卡
      </template>
      <h4 class="dialog-title">云服务器名称：云主机云硬盘1</h4>
      <div class="dialog-content">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="类型">
            <el-radio-group v-model="labelType" size="small">
              <el-radio-button label="虚拟私有云">虚拟私有云</el-radio-button>
              <el-radio-button label="内部网络">内部网络</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="虚拟私有云">
            {{form.name}}
          </el-form-item>
          <el-form-item label="安全组">
            <el-select size="small" v-model="value" placeholder="请选择">
              <el-option v-for="item in form.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="子网">
            <el-select size="small" v-model="value" placeholder="请选择">
              <el-option v-for="item in form.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="私有IP地址">
            <el-input class="ecs-input" size="small" placeholder="自动分配IP地址"></el-input>
          </el-form-item>
        </el-form>
      </div>
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
          decoration: '入方向',
          type: 'IPV4',
          protocol: 'ICMP',
          protocolDesc: 'Any',
          remote: '0.0.0.0/0'
        },
        {
          decoration: '入方向',
          type: 'IPV4',
          protocol: 'ICMP',
          protocolDesc: 'Any',
          remote: '0.0.0.0/0'
        },
        {
          decoration: '入方向',
          type: 'IPV4',
          protocol: 'ICMP',
          protocolDesc: 'Any',
          remote: '0.0.0.0/0'
        },
        {
          decoration: '入方向',
          type: 'IPV4',
          protocol: 'ICMP',
          protocolDesc: 'Any',
          remote: '0.0.0.0/0'
        }
      ],
      value2: true,
      dialogTableVisible: false,
      labelType: '虚拟私有云',
      value: '',
      form: {
        name: 'VPC-dl552',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
      }
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
  .ecs-input{
    width: 360px;
  }
}
</style>
