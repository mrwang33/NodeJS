import Vue from 'vue'
import Router from 'vue-router'
import resourcePool from 'pages/resourcePool/resourcePool'
import ecsExample from 'pages/Ecs/ecsExample/ecsExample'
import createEcs from 'pages/Ecs/ecsExample/createEcs'
import ecsDetail from 'pages/Ecs/ecsExample/ecsDetail'
import childDrive from 'pages/Ecs/ecsExample/components/childDrive'
import childNetwork from 'pages/Ecs/ecsExample/components/childNetwork'
import childElasticityIp from 'pages/Ecs/ecsExample/components/childElasticityIp'
import childSecurity from 'pages/Ecs/ecsExample/components/childSecurity'
import childMonitor from 'pages/Ecs/ecsExample/components/childMonitor'
import ecsCloudDrive from 'pages/Ecs/ecsCloudDrive/ecsCloudDrive'
import createDrive from 'pages/Ecs/ecsCloudDrive/createDrive'
import elasticityIp from 'pages/Ecs/elasticityIp/elasticityIp'
import createIp from 'pages/Ecs/elasticityIp/createIp'
import fireWall from 'pages/Ecs/fireWall/fireWall'
import firewallDetail from 'pages/Ecs/fireWall/firewallDetail'
import childVPC from 'pages/Ecs/fireWall/components/childVPC'
import childACL from 'pages/Ecs/fireWall/components/childACL'
import createFireWall from 'pages/Ecs/fireWall/createFireWall'
import securityGroup from 'pages/Ecs/SecurityGroup/SecurityGroup'
import createSecurity from 'pages/Ecs/SecurityGroup/createSecurity'
import SGrules from 'pages/Ecs/SecurityGroup/SGrules'
import createRules from 'pages/Ecs/SecurityGroup/createRules'
import intoDecoration from 'pages/Ecs/SecurityGroup/components/intoDecoration'
import outDecoration from 'pages/Ecs/SecurityGroup/components/outDecoration'
import vpc from 'pages/Ecs/vpc/vpc'
import vpcDetail from 'pages/Ecs/vpc/vpcDetail'
import subnetDetail from 'pages/Ecs/vpc/subnetDetail'
import childSubnet from 'pages/Ecs/vpc/components/childSubnet'
import childPrivateIp from 'pages/Ecs/vpc/components/childPrivateIp'
import childVirtualIp from 'pages/Ecs/vpc/components/childVirtualIp'
import proprietaryNet from 'pages/Ecs/vpc/components/proprietaryNet'
import innerNet from 'pages/Ecs/vpc/components/innerNet'
import createproprietaryNet from 'pages/Ecs/vpc/createproprietaryNet'
import createInnerNet from 'pages/Ecs/vpc/createInnerNet'

Vue.use(Router)

/* eslint-disable */
export default new Router({
  routes: [{
      path: '/',
      name: 'resourcePool',
      component: resourcePool
    },
    {
      path: '/ecsExa',
      name: 'ecsExample',
      component: ecsExample
    },
    {
      path: '/vpc',
      name: 'vpc',
      component: vpc,
      children: [
        {
          path: 'proprietaryNet',
          component: proprietaryNet
        },
        {
          path: 'innerNet',
          component: innerNet
        }
      ]
    },
    {
      path: '/vpcDetail',
      component: vpcDetail,
      children: [
        {
          path: 'childSubnet',
          component: childSubnet
        }
      ]
    },
    {
      path: '/subnetDetail',
      component: subnetDetail,
      children: [{
        path: 'childPrivateIp',
        component: childPrivateIp
      },{
        path: 'childVirtualIp',
        component: childVirtualIp
      }]
    },
    {
      path: '/createproprietaryNet',
      component: createproprietaryNet
    },
    {
      path: '/createInnerNet',
      component: createInnerNet
    },
    {
      path: '/createEcs',
      component: createEcs
    },
    {
      path: '/ecsDetail',
      component: ecsDetail,
      children: [
        {
          path: '',
          component: childDrive
        },
        {
        path: 'childDrive',
        component: childDrive
        },
        {
        path: 'childNetwork',
        component: childNetwork
        },
        {
        path: 'childElasticityIp',
        component: childElasticityIp
        },
        {
        path: 'childSecurity',
        component: childSecurity
        },
        {
        path: 'childMonitor',
        component: childMonitor
        }
      ]
    },
    {
      path: '/ecsCloudDrive',
      component: ecsCloudDrive
    },
    {
      path: '/createDrive',
      component: createDrive
    },
    {
      path: '/elasticityIp',
      component: elasticityIp
    },
    {
      path: '/createIp',
      component: createIp
    },
    {
      path: '/fireWall',
      component: fireWall
    },
    {
      path: '/firewallDetail',
      component: firewallDetail,
      children: [
        {
          path: 'childVPC',
          component: childVPC
        },
        {
          path: 'childACL',
          component: childACL
        }
      ]
    },
    {
      path: '/createFireWall',
      component: createFireWall
    },
    {
      path: '/securityGroup',
      component: securityGroup,
    },
    {
      path: '/SGrules',
      component: SGrules,
      children: [
        // {
        //   path: '',
        //   component: intoDecoration
        // },
        {
          path: 'intoDecoration',
          component: intoDecoration
        },
        {
          path: 'outDecoration',
          component: outDecoration
        }
      ]
    },
    {
      path: '/createRules',
      component: createRules,
    },
    {
      path: '/createSecurity',
      component: createSecurity
    }
  ]
})
