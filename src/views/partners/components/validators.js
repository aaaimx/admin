export default {
  name: [
    {
      required: true,
      message: 'Please enter name',
      trigger: 'blur'
    }
  ],
  alias: [
    {
      required: true,
      message: 'Please enter alias',
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
