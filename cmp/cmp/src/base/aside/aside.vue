<template>
  <div class="aside">
    <div class="aside-header">Ch<span class="stress">i</span>na Un<span class="stress">i</span>com</div>
    <ul>
        <li class="aside-item"
          v-for="(items,index) of navList"
          :key="index"
          :class="{'active':items.active}"
          @click="handleClickFirst(items,index)">
            <span class="iconfont" :class="items.icon"></span>
            {{items.name}}
            <span v-if="items.list.length>0" class="iconfont icon-down">&#xe600;</span>
            <ul class="second-ul" v-show="items.show">
              <li class="child-item"
                v-for="(item,i) of items.list"
                :key="i"
                :class="{'active':item.active}"
                @click.stop.prevent="handleClickSend(item,index)">{{item.name}}</li>
            </ul>
        </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data() {
    return {
      navList: [
        {
          name: '概览',
          icon: 'icon-gailan',
          active: true,
          show: false,
          list: []
        },
        {
          name: '云主机',
          icon: 'icon-yunzhujijiankong',
          active: false,
          show: false,
          list: [
            {
              name: '实例',
              active: true
            },
            {
              name: '云硬盘',
              active: false
            },
            {
              name: '弹性IP',
              active: false
            },
            {
              name: 'VPC',
              active: false
            },
            {
              name: '安全组',
              active: false
            },
            {
              name: '防火墙',
              active: false
            }
          ]
        },
        {
          name: '云桌面',
          icon: 'icon-yunzhuomian',
          active: false,
          show: false,
          list: []
        },
        {
          name: '对象存储',
          icon: 'icon-cunchu-duixiangcunchu',
          active: false,
          show: false,
          list: []
        },
        {
          name: '续费管理',
          icon: 'icon-tequanshouxufei',
          active: false,
          show: false,
          list: []
        }
      ]
    }
  },
  methods: {
    handleClickFirst(item, index) {
      this.navList.forEach((items, i) => {
        Vue.set(items, 'active', false)
        Vue.set(items, 'show', false)
      })
      Vue.set(item, 'active', true)
      Vue.set(item, 'show', true)
      switch (item.name) {
        case '概览':
          this.$router.push('/')
          break
        case '云主机':
          this.$router.push('/ecsExa')
          break
      }
    },
    handleClickSend(item, index) {
      this.navList[index].list.forEach(lists => {
        Vue.set(lists, 'active', false)
      })
      Vue.set(item, 'active', true)
      switch (item.name) {
        case '实例':
          this.$router.push('/ecsExa')
          break
        case '云硬盘':
          this.$router.push('/ecsCloudDrive')
          break
        case '弹性IP':
          this.$router.push('/elasticityIp')
          break
        case 'VPC':
          this.$router.push('/vpc/proprietaryNet')
          break
        case '安全组':
          this.$router.push('/securityGroup')
          break
        case '防火墙':
          this.$router.push('/fireWall')
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~common/scss/variable.scss';
.aside {
  width: 180px;
  float: left;
  height: 100%;
  background: $nav-color;
  color: #fff;
  .aside-header {
    text-align: center;
    padding: 24px 0;
    font-size: 20px;
    .stress {
      color: #6c6ad5;
    }
  }
  .aside-item {
    position: relative;
    line-height: 40px;
    font-size: 15px;
    .iconfont {
      margin-right: 10px;
      margin-left: 15px;
      color: #6c6ad5;
    }
    .icon-down {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 12px;
      opacity: 0.2;
    }
    &:hover {
      cursor: pointer;
    }
    &.active:after {
      position: absolute;
      content: '';
      width: 2px;
      height: 40px;
      background: #6c6ad5;
      top: 0;
      left: 0;
    }
    .child-item {
      font-size: 14px;
      padding-left: 45px;
      background: #101b24;
      &.active {
        background: #6c6ad5;
      }
    }
  }
}
</style>
