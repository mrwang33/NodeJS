<template>
  <div class="header clearfix">
    <div class="header-left">
      <el-dropdown class="title">
        <span class="el-dropdown-link">
          控制台
          <span class="iconfont down-icon">&#xe600;</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>控制台</el-dropdown-item>
          <el-dropdown-item>控制台</el-dropdown-item>
          <el-dropdown-item>控制台</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="title">
        <span class="el-dropdown-link">
          地区
          <span class="iconfont down-icon">&#xe600;</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item of region" :key="item.id" :command="item.regionId">{{item.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="input-box">
        <input type="text" placeholder="搜索">
        <span class="iconfont search-icon">&#xe670;</span>
      </div>
    </div>
    <div class="user">
      <img class="avatar" src="../../common/images/avatar.png" alt="">
      <span class="iconfont down-icon">&#xe600;</span>
    </div>
    <ul class="header-right">
      <li>
        <span class="iconfont">&#xe648;</span>
      </li>
      <li>
        <span class="iconfont qianbao-icon">&#xe60d;</span>
      </li>
      <li class="active">
        <span class="iconfont">&#xe790;</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { getRegion, getLogin } from '../../axios/api'
export default {
  data() {
    return {
      region: [],
      userAccount: 'btkadmin',
      userType: '2'
    }
  },
  created() {},
  mounted() {
    this.getRegion()
    this.getLogin()
  },
  methods: {
    handleCommand(command) {
      // this.getLogin()
    },
    getRegion() {
      let that = this
      getRegion()
        .then(res => {
          that.region = res.data
          console.log(that.region)
        })
        .catch(err => {
          console.log(err, '请求错误')
        })
    },
    getLogin() {
      getLogin(this.userAccount, this.userType)
        .then(res => {
          // console.log(res.data)
          localStorage.setItem('projectId', res.data.project_id)
        })
        .catch(err => {
          console.log(err, '请求错误')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 55px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  .header-left {
    width: 55%;
    height: 55px;
    float: left;
    font-size: 15px;
    .title {
      display: inline-block;
      margin-right: 20px;
      margin-left: 25px;
      &:hover {
        cursor: pointer;
      }
      .down-icon {
        font-size: 13px;
        margin-left: 5px;
        color: #333;
      }
    }
    .input-box {
      width: 50%;
      display: inline-block;
      margin: 7px 0;
      border-bottom: solid 1px #e5e5e5;
      padding: 5px;
      input {
        width: 90%;
        background: #fff;
      }
      .search-icon {
        font-size: 20px;
      }
    }
  }
  .header-right {
    float: right;
    box-sizing: border-box;
    li {
      display: inline-block;
      height: 55px;
      line-height: 55px;
      margin-right: 40px;
      &.active {
        .iconfont {
          color: #6c6ad5;
        }
      }
      .iconfont {
        font-size: 30px;
        color: #bfbfbf;
      }
      .qianbao-icon {
        font-size: 26px;
      }
    }
  }
  .user {
    position: relative;
    float: right;
    height: 55px;
    margin-right: 20px;
    padding: 11px 5px;
    box-sizing: border-box;
    .avatar {
      display: inline-block;
      margin-left: 25px;
      margin-right: 16px;
    }
    .down-icon {
      position: absolute;
      color: #333;
      font-size: 13px;
      top: 24px;
      right: 0;
    }
  }
}
</style>
