<template>
  <div>
    <div>
      <div>
        <input type="radio">
        <span>Time</span>
        <span>$ xx.xx</span>
      </div>
      <button>Purchase</button>
      <button @click="this.$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "DisplayTicket",
  props: {
    ticketInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      listOfTicket:{}
    }
  },
  mounted() {
    console.log(this.$route.params.ticketInfo);
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
