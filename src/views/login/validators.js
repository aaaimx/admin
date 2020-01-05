import { validatePassword, validateRequired } from '@/utils/rules'

export default {
  username: [validateRequired],
  password: [validateRequired, validatePassword]
}
