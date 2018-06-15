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
        <p class="title">安全组列表</p>
        <el-button class="btn-update" @click="onSubmit">刷新</el-button>
        <el-button class="btn-add" @click="createSecurity">创建</el-button>
      </div>
      <el-table class="ecs-table" @cell-click="goDetail" :data="tableData" :cell-class-name="stressCol" :header-row-class-name="tableRowClassName" style="width: 100%">
        <el-table-column prop="name" label="安全组名称" width="180">
        </el-table-column>
        <el-table-column prop="id" label="安全组ID" width="180">
        </el-table-column>
        <el-table-column prop="out" label="出方向规则">
        </el-table-column>
        <el-table-column prop="into" label="入方向规则">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="date" label="到期时间">
        </el-table-column>
        <el-table-column width="180" label="操作">
          <template slot-scope="scope">
            <el-button @click.native="dialogUpdateSG = true" type="text" size="small">修改</el-button>
            <el-button @click.native="deleteSG" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="clickRules">配置规则</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="ecs-page">
        <el-pagination layout="prev, pager, next" :total="50">
        </el-pagination>
      </div>
    </div>
    <!-- modal 安全组详情 -->
    <el-dialog :visible.sync="dialogDetailVisible">
      <template slot="title">
        安全组详情
      </template>
      <div class="dialog-operate">
        <el-button type="primary" plain @click.native="addRule">添加规则</el-button>
        <span class="operate-tips">ID：dfjls_sakdfls_000011_dff212002_26596dklsdkl</span>
      </div>
      <el-table class="ecs-table" :data="tableDetail" :header-row-class-name="tableRowClassName" style="width: 100%">
        <el-table-column prop="direction" label="方向">
        </el-table-column>
        <el-table-column prop="type" label="类型">
        </el-table-column>
        <el-table-column prop="protocol" label="协议">
        </el-table-column>
        <el-table-column prop="portRange" label="端口范围/ICMP类型">
        </el-table-column>
        <el-table-column prop="remote" label="远端">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click.native="deleteSGRule" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加规则 -->
    <el-dialog class="sg-dialog" :visible.sync="dialogAddRule">
      <template slot="title">
        添加规则
      </template>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="协议类型">
          <el-select class="ecs-select" size="small" @change="changeProtocol" v-model="form.protocolValue" placeholder="请选择">
            <el-option v-for="item in form.protocolTyle" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="规则方向">
          <el-radio v-model="form.directionlValue" label="入方向">入方向</el-radio>
          <el-radio v-model="form.directionlValue" label="出方向">出方向</el-radio>
        </el-form-item>
        <el-form-item label="类型" v-show="ICMPshow">
          <el-select class="ecs-select" size="small" v-model="form.ICMPValue" placeholder="请选择">
            <el-option v-for="item in form.ICMP" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="端口范围" v-show="portRangeShow">
          <el-input size="small" class="ecs-input" placeholder="示例：20或20～30"></el-input>
        </el-form-item>
        <el-form-item label="源地址">
          <el-radio v-model="radio" label="1">ip地址</el-radio>
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
          <el-radio v-model="radio" label="2">安全组</el-radio> <br>
          <el-select class="ecs-select" size="small" v-model="value" placeholder="请选择">
            <el-option v-for="item in form.options" :label="item.label" :key="item.value" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddRule = false">取 消</el-button>
        <el-button type="primary" @click="dialogAddRule = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- modal 修改安全组名称 -->
    <el-dialog :visible.sync="dialogUpdateSG">
      <template slot="title">
        修改安全组名称
      </template>
      <el-form ref="form" label-width="120px">
        <el-form-item label="名称">
          <el-input style="width:300px" size="small" placeholder="administrator" value="administrator"></el-input>
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
      title: '云主机 / 安全组',
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          out: '2',
          into: '3',
          description: 'default'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          out: '2',
          into: '3',
          description: 'default'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          out: '2',
          into: '3',
          description: 'default'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          out: '2',
          into: '3',
          description: 'default'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          out: '2',
          into: '3',
          description: 'default'
        },
        {
          date: '2018-11-25',
          name: 'administrator',
          id: 'dhdhdjsvkdvvnsdklvjdf',
          out: '2',
          into: '3',
          description: 'default'
        }
      ],
      tableDetail: [
        {
          direction: '出方向',
          type: 'ipv4',
          protocol: 'Any',
          portRange: 'Any',
          remote: 'Any'
        },
        {
          direction: '出方向',
          type: 'ipv4',
          protocol: 'Any',
          portRange: 'Any',
          remote: 'Any'
        },
        {
          direction: '入方向',
          type: 'ipv4',
          protocol: 'Any',
          portRange: 'Any',
          remote: 'Any'
        }
      ],
      dialogDetailVisible: false,
      dialogAddRule: false,
      dialogUpdateSG: false,
      radio: '1',
      value: '',
      portRangeShow: true,
      ICMPshow: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        ICMPValue: '',
        ICMP: [],
        protocolValue: 'TCP',
        directionlValue: '出方向',
        protocolTyle: [
          {
            value: 'TCP',
            label: 'TCP'
          },
          {
            value: 'UDP',
            label: 'UDP'
          },
          {
            value: 'ICMP',
            label: 'ICMP'
          },
          {
            value: 'Any',
            label: 'Any'
          }
        ],
        direction: [
          {
            value: '出方向',
            label: '出方向'
          },
          {
            value: '入方向',
            label: '入方向'
          }
        ]
      }
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
    stressCol({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return 'stress-col'
      }
      return ''
    },
    goDetail(row, column, cell, event) {
      const property = column['property']
      if (property === 'name') {
        this.dialogDetailVisible = true
      }
    },
    onSubmit() {
      console.log('submit!')
    },
    addRule() {
      this.dialogDetailVisible = false
      this.dialogAddRule = true
    },
    createSecurity() {
      this.$router.push('/createSecurity')
    },
    clickRules() {
      this.$router.push('/SGrules/intoDecoration')
    },
    changeProtocol(value) {
      if (value === 'TCP' || value === 'UDP') {
        this.portRangeShow = true
        this.ICMPshow = false
      }
      if (value === 'ICMP') {
        this.portRangeShow = false
        this.ICMPshow = true
      }
      if (value === 'Any') {
        this.portRangeShow = false
        this.ICMPshow = false
      }
    },
    deleteSG() {
      this.$confirm(
        '<h4>确定要删除该安全组吗?</h4><p>删除安全组，弹性云服务器将不受此安全组规则的保护!</p>',
        '删除安全组',
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
    },
    deleteSGRule() {
      this.$confirm(
        '<h4>删除规则可能影响您的弹性云服务器使用，确定删除此规则吗?</h4><p>删除安全组规则会影响该安全组作用的弹性云服务器!</p>',
        '删除安全组规则',
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
  .sg-dialog {
    .el-form {
      width: 100%;
      height: 100%;
      padding: 50px 0 0 10%;
      background: $body-color;
      box-sizing: border-box;
      .el-form-item {
        height: auto;
        .ecs-input {
          width: 360px;
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
}
</style>
