import { sendEmail } from '@/api/email'
import { publishCert }  from '@/api/certificate'

const certsMixin = {
  methods: {
    publish (row, published) {
      row.loading = true
      publishCert(row.uuid, published).then(
        res => {
          this.$message({
            message: 'Certificate status changed',
            type: 'success'
          })
          row.published = published
          row.loading = false
        },
        err => {
          row.loading = false
          this.$message({
            message: 'Something went wrong:( Try Again!',
            type: 'error'
          })
        }
      )
    },
    sendEmail (row) {
      this.$prompt('Please input an e-mail', 'Send by email', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputValue: 'rnovelo.cruz98@gmail.com',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email'
      })
        .then(({ value }) => {
          row.sending = true
          sendEmail({
            subject: 'CERTIFICATE OF ' + row.type,
            message: `CERTIFICATE OF ${row.type}: ${row.to}`,
            sent: 1,
            context: {
              ...row,
              email: value,
              thumbnail: row.file.replace('download', 'preview')
            },
            recipients: [value],
            template: 'CERTIFICATE'
          }).then(
            res => {
              console.log(res)
              row.sending = false
              this.$notify({
                title: 'Success',
                message: 'Certificate send',
                type: 'success',
                duration: 2000
              })
            },
            err => {
              console.log(err)
            }
          )
        })
        .catch(() => {
          row.sending = false
          this.$message({
            type: 'info',
            message: 'Email canceled'
          })
        })
    }
  }
}

export default certsMixin
