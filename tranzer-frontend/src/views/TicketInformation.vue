<template>
  <div>
    <h1 class="my-4 text-3xl align-center">Success</h1>
    <div class="px-4 py-3">
      <qrcode-vue :size="size" :value="ticket"></qrcode-vue>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import {getTicketInfo} from "../api";
export default {
  name: "TicketInformation",
  components: {
    QrcodeVue,
  },
  data() {
    return {
      ticket: '',
      size: 200,
    };
  },
  computed: {

  },
  mounted() {
    getTicketInfo(localStorage.getItem("reference_id")).then((response) => {
      this.ticket = "success";
      console.log(this.ticket);
    });
  },
  methods: {

  },
}
</script>

<style scoped>

</style>
