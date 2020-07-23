import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, email, min, integer } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required',
})

extend('integer', {
  ...integer,
  message: 'Please enter a number',
})

extend('email', {
  ...email,
  message: 'Please enter your email address in format: yourname@example.com',
})

extend('min', {
  ...min,
  message: 'This field requires a minimum of {length} characters',
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
