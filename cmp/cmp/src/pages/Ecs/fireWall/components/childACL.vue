<template>
    <div class="child-wrapper">
        <div class="security-desc clearfix">
            <el-button class="addrules" size="small" type="primary" plain @click.native="dialogAddrules=true">添加规则</el-button>
            动作：
            <el-select v-model="value" placeholder="请选择" size="small">
                <el-option label="所有动作" value="所有动作">
                </el-option>
            </el-select>
            协议：
            <el-select v-model="value" placeholder="请选择" size="small">
                <el-option label="所有协议" value="所有协议">
                </el-option>
            </el-select>
            源地址：
            <el-select v-model="value" placeholder="请选择" size="small">
                <el-option label="0.0.0.0" value="0.0.0.0">
                </el-option>
            </el-select>
            <el-button class="search-btn" type="primary" size="small" plain>搜索</el-button>
            <div class="desc-right fr">
                <el-button type="primary" size="small" plain>刷新</el-button>
            </div>
        </div>
        <el-table :data="tableData" :header-row-class-name="tableRowClassName" style="width: 100%">
            <el-table-column prop="action" label="动作">
            </el-table-column>
            <el-table-column prop="protocol" label="协议">
            </el-table-column>
            <el-table-column prop="remoteAddr" label="源地址">
            </el-table-column>
            <el-table-column prop="remotePortRange" label="源端口范围">
            </el-table-column>
            <el-table-column prop="targetAddr" label="目的地址">
            </el-table-column>
            <el-table-column prop="targetPortRange" label="目的端口范围">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click.native="dialogUpdateRules = true">修改</el-button>
                    <el-button type="text" size="small">删除</el-button>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            更多
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item disabled>向前插规则</el-dropdown-item>
                            <el-dropdown-item disabled divided>向后插规则</el-dropdown-item>
                            <el-dropdown-item divided>关闭</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </template>
            </el-table-column>
        </el-table>
        <!-- 添加规则 -->
        <el-dialog :visible.sync="dialogAddrules">
            <template slot="title">
                添加规则
            </template>
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="动作">
                    <el-select class="ecs-select" size="small" v-model="form.actionValue" placeholder="请选择">
                        <el-option v-for="item in form.action" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="协议">
                    <el-select class="ecs-select" size="small" v-model="form.protocolValue" placeholder="请选择">
                        <el-option v-for="item in form.protocolTyle" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="源地址">
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
                <el-form-item label="目的地址">
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
                <el-button @click="dialogAddRule = false">取 消</el-button>
                <el-button type="primary" @click="dialogAddRule = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 修改规则 -->
        <el-dialog :visible.sync="dialogUpdateRules">
            <template slot="title">
                修改规则
            </template>
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="动作">
                    <el-select class="ecs-select" size="small" v-model="form.actionValue" placeholder="请选择">
                        <el-option v-for="item in form.action" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="协议">
                    <el-select class="ecs-select" size="small" v-model="form.protocolValue" placeholder="请选择">
                        <el-option v-for="item in form.protocolTyle" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="源地址">
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
                <el-form-item label="目的地址">
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
                <el-button @click="dialogAddRule = false">取 消</el-button>
                <el-button type="primary" @click="dialogAddRule = false">确 定</el-button>
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
          action: '允许',
          protocol: 'ANY',
          remoteAddr: '0.0.0.0',
          remotePortRange: '0',
          targetAddr: '0.0.0.0',
          targetPortRange: '0'
        },
        {
          action: '允许',
          protocol: 'ANY',
          remoteAddr: '0.0.0.0',
          remotePortRange: '0',
          targetAddr: '0.0.0.0',
          targetPortRange: '0'
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
      value: '',
      form: {
        protocolValue: 'TCP',
        actionValue: '允许',
        action: [
          {
            value: '允许',
            label: '允许'
          },
          {
            value: '不允许',
            label: '不允许'
          }
        ],
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
        ]
      },
      dialogAddrules: false,
      dialogUpdateRules: false
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
    width: 100%;
    padding: 15px 0;
    .addrules {
      margin-right: 20px;
    }
    .search-btn {
      margin-left: 20px;
    }
    .desc-right {
      text-align: right;
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
