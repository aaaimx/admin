<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import trae from "@/services/trae";
export default {
  name: "App",
  created() {
    const postForm = {
      status: 0,
      learn: ["string"],
      corum: 0,
      content: [
        {
          tema: "string",
          points: ["string"]
        }
      ],
      requirements: ["string"],
      material: ["string"],
      imgBanner: "https://imagesadc.s3.amazonaws.com/logos/logohor_bco2.png",
      nameCourse: "string",
      summary: "string",
      description: "string",
      startDate: "2019-10-31",
      endDate: "2019-10-31",
      price: 200,
      discount: 100,
      dateDiscount: "2019-10-31",
      created_at: "2019-10-31"
    };

  }
};
</script>
