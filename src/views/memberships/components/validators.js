import { validateRequired } from '@/utils/rules'

export default {
  display_name: [
    {
      required: true,
      message: 'Please enter full name',
      trigger: 'blur'
    }
  ],
  type: [validateRequired],
  exp: [
    {
      required: true,
      message: 'Please input type',
      trigger: ['blur', 'change']
    }
  ]
}
