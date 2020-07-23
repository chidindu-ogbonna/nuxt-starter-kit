import Vue from 'vue'
import Notification from 'vue-notification'

Vue.use(Notification)

export default (context, inject) => {
  inject('notify', Vue.notify)
}
