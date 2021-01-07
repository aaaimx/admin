<template>
  <div>
    <b-modal v-model="isImageModalActive">
      <ImagePreview :size="1.2" :cert="cert" />
    </b-modal>
    <div class="card" v-if="styleMode === 'card'">
      <div class="card-image">
        <ImagePreview
          @click="isImageModalActive = true"
          :size="0.35"
          :cert="cert"
        />
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
        <ImagePreview :size="1.2" :cert="cert" />
      </div>
      <div class="card-content">
        <article class="media">
          <div
            class="media-left is-hidden-mobile"
            @click="isImageModalActive = true"
          >
            <ImagePreview
              width="200px"
              :size="0.23"
              :cert="cert"
            />
          </div>
          <div class="media-content">
            <div class="content">
              <strong @click="isImageModalActive = true">{{ cert.to }}</strong>
              &nbsp;
              <small>{{ cert.uuid }}</small>
              <copy-to-clipboard :text="cert.uuid">
                <b-icon size="is-small" icon="clipboard" />
              </copy-to-clipboard>

              <br />
              <div v-text="cert.description"></div>
              <br />

              <b-tag type="is-primary">{{ cert.type }}</b-tag>
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
import ImagePreview from './ImagePreview'
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
  components: { ImagePreview },
  data () {
    return {
      isImageModalActive: false
    }
  }
}
</script>
