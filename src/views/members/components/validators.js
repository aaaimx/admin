export default {
  fullname: [
    {
      required: true,
      message: 'Please input Member Fullname',
      trigger: 'blur'
    }
  ],
  adscription: [
    {
      required: true,
      message: 'Please select an institute',
      trigger: 'blur'
    }
  ],
  roles: [
    {
      required: true,
      message: 'Please select role(s)',
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
