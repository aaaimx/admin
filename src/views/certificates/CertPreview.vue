<template>
  <div>
    <b-modal v-model="isImageModalActive">
      <figure class="is-4by3">
        <img :title="cert.uuid" :src="cert.file" />
      </figure>
    </b-modal>
    <div class="card" v-if="styleMode === 'card'">
      <div class="card-image">
        <figure class="is-4by3" @click="isImageModalActive = true">
          <img :src="cert.file" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-6">
              {{ cert.to }}
            </p>
            <b-tag type="is-primary">{{ cert.type }}</b-tag>
          </div>
        </div>

        <!-- <div class="content" v-if="!hideDescription">
          {{ cert.description }}
        </div> -->
      </div>
      <footer class="card-footer" v-if="styleMode === 'card'">
        <router-link
          :to="{ name: 'certificate.edit', params: { id: cert.uuid } }"
          class="card-footer-item"
          ><b-icon size="is-small" icon="pencil"></b-icon
        ></router-link>
        <a :href="cert.QR" target="_blank" class="card-footer-item"
          ><b-icon size="is-small" icon="qrcode"></b-icon
        ></a>
        <a class="card-footer-item"
          ><copy-to-clipboard :text="cert.uuid">
            <b-icon size="is-small" icon="clipboard" /> </copy-to-clipboard
        ></a>
      </footer>
    </div>
    <div class="card" v-else>
      <div class="card-image is-hidden-desktop">
        <figure class="is-4by3" @click="isImageModalActive = true">
          <img :src="cert.file" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <article class="media">
          <div class="media-left is-hidden-mobile">
            <figure @click="isImageModalActive = true">
              <img width="200px" :src="cert.file" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong @click="isImageModalActive = true">{{
                  cert.to
                }}</strong>
                &nbsp;
                <small>{{ cert.uuid }}</small>
                <copy-to-clipboard :text="cert.uuid">
                  <b-icon size="is-small" icon="clipboard" />
                </copy-to-clipboard>

                <br />
                {{ cert.description }}
                <br />

                <b-tag type="is-primary">{{ cert.type }}</b-tag>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 0.5rem !important;
}
.card-content {
  padding-left: 10px !important;
  padding-bottom: 10px !important;
}
</style>

<script>
export default {
  props: {
    cert: {
      type: Object
    },
    styleMode: {
      type: String,
      default: 'card'
    }
  },
  data () {
    return {
      isImageModalActive: false
    }
  }
}
</script>
