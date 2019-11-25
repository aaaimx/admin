/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

// tables
import DataTableEvent from '@/views/table/complex-table-event'
import DataTableCert from '@/views/table/complex-table-cert'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'Events',
    icon: 'table'
  },
  children: [
    {
      path: 'complex-table',
      component: DataTableEvent,
      name: 'ComplexTable',
      meta: { title: 'Events' }
    },
    {
      path: 'complex-table',
      component: DataTableCert,
      name: 'ComplexTable',
      meta: { title: 'Certificates' }
    }
  ]
}
export default tableRouter
