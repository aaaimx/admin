import { validateRequired, validateEmail } from '@/utils/rules'
export default {
  name: [validateRequired],
  surname: [validateRequired],
  email: [validateEmail]
}
