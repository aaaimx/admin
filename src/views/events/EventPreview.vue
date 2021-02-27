<template>
  <div>
    <b-field
      :label="
        `${event.type || 'Title'}: ${event.title} (${event.place || 'AAAIMX'})`
      "
    >
      <p class="subtitle is-6">
        {{ event.date_start | shortDatetime }} - {{ event.date_end | shortDatetime }} ({{
          event.hours || 0
        }}
        horas para CC)
      </p>
    </b-field>
    <b-field label="Aditional information">
      <p
        class="subtitle is-6"
        v-html="event.description"
        v-linkified
        style="white-space: pre-line;"
      ></p>
    </b-field>
    <b-field label="Availability (Participants)">
      <p class="subtitle is-6">
        {{ event.corum || 'No establecido' }}
      </p>
    </b-field>
  </div>
</template>

<script>
export default {
  props: ['event']
}
</script>
