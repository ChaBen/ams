import { createWebHistory, createRouter } from 'vue-router'

import Monitoring from '@/views/monitoring/index.vue'
import Monitoring2 from '@/views/monitoring/monitoring2.vue'
// 관리-USER 관리
import Institutional from '@/views/management/user/institutional.vue'
import User from '@/views/management/user/user.vue'

// 관리-마스터 관리
import LocalServer from '@/views/management/master/local.vue'
import AgencySensor from '@/views/management/master/asensor.vue'
import Msterilizer from '@/views/management/master/sterilizer.vue'
import MasterSensor from '@/views/management/master/msensor.vue'
// 관리-설정관리
import Measuring from '@/views/management/setting/measuring.vue'
import SettingSensor from '@/views/management/setting/sensor.vue'
import Group from '@/views/management/setting/group.vue'
import Sterilizer from '@/views/management/setting/sterilizer.vue'
// 관리-장애관리
import LiveError from '@/views/management/error/live_error.vue'
import Error from '@/views/management/error/error.vue'
import LoginHistory from '@/views/management/error/login_history.vue'

// 현황
import Unregistered from '@/views/current/current/unregistered.vue'
import Instrument from '@/views/current/current/instrument.vue'
import Average from '@/views/current/current/average.vue'
import Sensorperiod from '@/views/current/current/sensorperiod.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/management/user/institutional',
    name: 'Institutional',
    component: Institutional
  },
  {
    path: '/management/user/user',
    name: 'User',
    component: User
  },
  {
    path: '/management/master/local',
    name: 'LocalServer',
    component: LocalServer
  },
  {
    path: '/management/master/asensor',
    name: 'AgencySensor',
    component: AgencySensor
  },
  {
    path: '/management/master/msensor',
    name: 'MasterSensor',
    component: MasterSensor
  },
  {
    path: '/management/master/sterilizer',
    name: 'Msterilizer',
    component: Msterilizer
  },
  {
    path: '/management/setting/measuring',
    name: 'Measuring',
    component: Measuring
  },
  {
    path: '/management/setting/sensor',
    name: 'SettingSensor',
    component: SettingSensor
  },
  {
    path: '/management/setting/sterilizer',
    name: 'Sterilizer',
    component: Sterilizer
  },
  {
    path: '/management/setting/group',
    name: 'Group',
    component: Group
  },
  {
    path: '/management/error/liveerror',
    name: 'LiveError',
    component: LiveError
  },
  {
    path: '/management/error/error',
    name: 'Error',
    component: Error
  },
  {
    path: '/management/error/history',
    name: 'LoginHistory',
    component: LoginHistory
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: Monitoring
  },
  {
    path: '/monitoring2',
    name: 'Monitoring2',
    component: Monitoring2
  },
  {
    path: '/current/current/unregistered',
    name: 'Unregistered',
    component: Unregistered
  },
  {
    path: '/current/current/instrument',
    name: 'Instrument',
    component: Instrument
  },
  {
    path: '/current/current/average',
    name: 'Average',
    component: Average
  },
  {
    path: '/current/current/sensorperiod',
    name: 'Sensorperiod',
    component: Sensorperiod
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
