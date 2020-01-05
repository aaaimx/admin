import { validEmail, validURL } from './validate'

export const validateRequired = {
  required: true,
  message: 'This field is required',
  trigger: 'blur'
}

export const validateEmail = {
  validator: (rule, value, callback) => {
    if (!validEmail(value)) {
      callback(new Error('Please enter the correct email'))
    } else {
      callback()
    }
  }
}

export const validatePassword = {
  validator: (rule, value, callback) => {
    if (!value.length) {
      callback(new Error('The password can not be less than 6 digits'))
    } else {
      callback()
    }
  }
}

export const validateSourceUri = {
  validator: (rule, value, callback) => {
    if (value) {
      if (validURL(value)) {
        callback()
      } else {
        callback(new Error('Invalid URL format'))
      }
    } else {
      callback()
    }
  }
}
