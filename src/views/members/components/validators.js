export default {
  name: [
    {
      required: true,
      message: 'Please enter name',
      trigger: 'blur'
    }
  ],
  surname: [
    {
      required: true,
      message: 'Please enter surname',
      trigger: 'blur'
    }
  ],
  email: [
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change']
    }
  ]
}
