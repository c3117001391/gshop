// 自定义过滤器
import Vue from 'vue'
import moment from 'moment'
// 写解析函数
Vue.filter('date-format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(formatStr)
})
