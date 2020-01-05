import { validatePassword, validateRequired } from '@/utils/rules'

module.exports = {
  username: [validateRequired],
  password: [validateRequired, validatePassword]
}
