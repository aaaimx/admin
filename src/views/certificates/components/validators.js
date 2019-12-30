export default {
  to: [
    {
      required: true,
      message: 'Please enter facilitator',
      trigger: 'blur'
    }
  ],
  type: [
    {
      required: true,
      message: 'Please input type',
      trigger: ['blur', 'change']
    }
  ]
}
