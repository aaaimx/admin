<template>
  <div>
    <div class="columns is-multiline is-desktop">
      <div
        v-for="cert in certificates"
        :key="cert.uuid"
        class="column is-half-tablet is-one-quarter-desktop"
      >
        <div class="card">
          <div class="card-image">
            <figure class="is-4by3">
              <img :src="cert.file" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content" style="padding: 10px">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">{{ cert.to }}</p>
                <p class="subtitle is-7">{{ cert.type }}</p>
              </div>
            </div>

            <!-- <div class="content">
                  {{cert.description}}
                </div> -->
          </div>
        </div>
      </div>
    </div>
    <Pagination :listQuery="listQuery" :total="total" />
  </div>
</template>

<script>
import { fetchList } from '@/api/certificates'
export default {
  props: ['event'],
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
