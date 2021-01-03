<template>
  <footer v-show="isFooterBarVisible" class="footer">
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
          <div class="level-item">&copy; {{ year }}, AAAIMX</div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="logo">
              <a href="https://www.aaaimx.org">
                <img
                  src="https://www.aaaimx.org/img/sprites/aaaimx-transparent.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'

export default {
  name: 'FooterBar',
  computed: {
    year () {
      return dayjs().year()
    },
    ...mapState(['isFooterBarVisible'])
  }
}
</script>
