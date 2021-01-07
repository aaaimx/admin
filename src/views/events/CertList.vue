<template>
  <div v-if="certificates.length">
    <div class="columns is-multiline is-desktop" >
      <div
        v-for="cert in certificates"
        :key="cert.uuid"
        class="column is-half-tablet is-one-quarter-desktop"
      >
        <CertPreview :cert="cert" hide-description />
      </div>
    </div>
    <Pagination :listQuery="listQuery" :total="total" />
  </div>
</template>

<script>
import CertPreview from '@/views/certificates/CertPreview'
import { fetchList } from '@/api/certificates'
export default {
  props: ['event'],
  components: { CertPreview },
  data () {
    return {
      certificates: [],
      total: 0,
      isLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        offset: 0
      }
    }
  },
  mounted () {
    this.getData(this.event)
  },
  watch: {
    listQuery: {
      handler (val) {
        this.getData(this.event)
      },
      deep: true
    }
  },
  methods: {
    getData (event) {
      this.isLoading = true
      this.listQuery.offset = this.listQuery.limit * (this.listQuery.page - 1)
      fetchList({ event, ...this.listQuery }).then(res => {
        this.certificates = res.results
        this.total = res.count
      })
    }
  }
}
</script>
