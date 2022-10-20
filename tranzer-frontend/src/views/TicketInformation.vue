<template>
  <div>
    <h1>Success</h1>
    <div>
    <qrcode-vue></qrcode-vue>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  name: "TicketInformation",
  components: {
    QrcodeVue,
  },
}
</script>

<style scoped>

</style>
