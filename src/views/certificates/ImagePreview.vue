<template>
  <div class="card cert" id="printarea">
    <div class="card-image">
      <figure class="is-4by3">
        <img
          :width="width"
          class="cert-img"
          :src="cert.file + '?dummy=' + Math.random()"
          alt="Placeholder image"
        />
      </figure>
      <!-- <a class="is-primary" @click="generateReport">PDF</a> -->
    </div>
  </div>
</template>

<style>
@media print {
  * {
    display: none;
  }
  #printarea {
    display: block;
  }
}
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
import jsPDF from '@/assets/jspdf.min.js'
export default {
  props: ['cert', 'size', 'position', 'width'],
  methods: {
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
    generateReport () {
      /* eslint-disable */
      var doc = new jsPDF()
      const html = document.getElementById('printarea').innerHTML
      console.log(html)
      doc.html(html, {
        callback: function (doc) {
          doc.save()
        },
        x: 10,
        y: 10
      })
    }
  }
}
</script>
