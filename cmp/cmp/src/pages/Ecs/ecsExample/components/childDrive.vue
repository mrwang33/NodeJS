<template>
  <div class="child-wrapper">
    <div class="security-desc">
      <el-button type="primary" plain @click.native="dialogTableVisible = true">挂载云盘</el-button>
      <span class="tips">您还可以增加 10 块磁盘(云硬盘)</span>
    </div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <template slot="title">
          云市场云主机1 | 系统盘 | 40G
          <div class="title-right">
            <el-button type="text" disabled>卸载</el-button>
          </div>
        </template>
        <div class="ip-content">
          <div class="row clearfix">
            <div class="col">
              <span class="label">id:</span>
              <span class="text">44fd6d89-656fd4d-6fdf45</span>
            </div>
            <div class="col">
              <span class="label">名称:</span>
              <span class="text">云市场云市场1</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">描述:</span>
              <span class="text">---</span>
            </div>
            <div class="col">
              <span class="label">挂载点:</span>
              <span class="text">/dev/sad</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">创建时间:</span>
              <span class="text">2018-05-10 14:33:52</span>
            </div>
            <div class="col">
              <span class="label">启动盘:</span>
              <span class="text">是</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">镜像：</span>
              <span class="text">
                CentOS7.5（45820）noFirwall
              </span>
            </div>
            <div class="col">
              <span class="label">容量(GB):</span>
              <span class="text">40</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">备份数：</span>
              <span class="text">
                0
              </span>
            </div>
            <div class="col">
              <span class="label">可用分区:</span>
              <span class="text">计算池1（SSD云盘/高效云盘）</span>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col">
              <span class="label">类型：</span>
              <span class="text">
                高效云盘
              </span>
            </div>
            <div class="col">
              <span class="label">备份树:</span>
              <span class="text">---</span>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- modal 挂载磁盘 -->
    <el-dialog :visible.sync="dialogTableVisible">
      <template slot="title">
        挂载磁盘
      </template>
      <h4 class="dialog-title">云服务器名称：云主机云硬盘1</h4>
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
      <el-table ref="multipleTable" :data="gridData" :header-row-class-name="tableRowClassName" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="150">
        </el-table-column>
        <el-table-column prop="size" label="容量(GB)">
        </el-table-column>
        <el-table-column prop="startUp" label="启动盘">
        </el-table-column>
        <el-table-column prop="driveType" label="磁盘类型">
        </el-table-column>
        <el-table-column prop="optimizationType" label="优化类型">
        </el-table-column>
        <el-table-column prop="status" label="状态">
        </el-table-column>
        <el-table-column prop="zone" label="可用分区">
        </el-table-column>
        <el-table-column width="150" label="挂载点">
          <template slot-scope="scope">
            <el-select v-model="value" size="small" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </template>
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
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
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
      gridData: [
        {
          name: 'administrtor',
          size: '40',
          startUp: '是',
          driveType: '高效云盘',
          optimizationType: '---',
          status: '正在使用',
          zone: '计算池'
        },
        {
          name: 'administrtor',
          size: '40',
          startUp: '是',
          driveType: '高效云盘',
          optimizationType: '---',
          status: '正在使用',
          zone: '计算池'
        },
        {
          name: 'administrtor',
          size: '40',
          startUp: '是',
          driveType: '高效云盘',
          optimizationType: '---',
          status: '正在使用',
          zone: '计算池'
        }
      ],
      multipleSelection: [],
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
    handleSelectionChange(val) {
      this.multipleSelection = val
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
}
</style>
