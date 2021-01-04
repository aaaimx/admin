<template>
  <div class="card cert">
    <div class="card-image">
      <figure class="is-4by3">
        <img
          :width="width"
          class="cert-img"
          :src="cert.file"
          alt="Placeholder image"
        />
        <div
          v-if="!cert.has_custom_file"
          class="description"
          :style="{ 'font-size': size + 'vw', position: position }"
          v-html="cert.description"
        ></div>
      </figure>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: Cooper;
  src: url('../../assets/CooperHewitt.otf');
}

.cert img {
  text-align: center;
}

/* https://css-tricks.com/fitting-text-to-a-container/ */
.cert .description {
  font-family: Copper;
  color: #003138;
  position: absolute;
  top: 60%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.cert strong {
  color: #003138 !important;
}
</style>

<script>
export default {
  props: ['cert', 'size', 'position', 'width']
}
</script>
