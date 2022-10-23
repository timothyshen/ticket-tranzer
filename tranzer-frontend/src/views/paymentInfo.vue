<template>
  <form class="">
    <p class="py-5">Card Payment</p>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Card Holder
        </label>
        <input
            v-model="cardHolder"
            class="appearance-none block w-full bg-white shadow-lg text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password" type="text" placeholder="Card Name">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Card Number
        </label>
        <input
            v-model="cardNum"
            class="appearance-none block w-full bg-white shadow-lg text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password" type="number" placeholder="Card Number">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          Expired Date
        </label>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <select
              name=""
              id=""
              v-model="month"
              class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          >
            <option value="" selected disabled>MM</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
              name=""
              id=""
              v-model="year"
              class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          >
            <option value="" selected disabled>YY</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
          <input
              type="text"
              v-model="cvv"
              class="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Security code"
              maxlength="3"
          />
        </div>
        <button
            @click="pay"
            class="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">Pay Now
        </button>
      </div>
    </div>
  </form>

</template>

<script>
import {purchaseTicket} from "../api";

export default {
  name: "paymentInfo",
  data() {
    return {
      cardNum: "",
      cardHolder: "",
      cvv: "",
      month: "",
      year: "",
    };
  },
  computed: {
    date() {
      return this.month + "/" + this.year;
    },
  },
  methods: {
    pay() {
      let paymentInfo = {
        cardNum: this.cardNum,
        cardHolder: this.cardHolder,
        cvv: this.cvv,
        date: this.date,
      };
      console.log(localStorage.getItem("reference_id"));
      purchaseTicket({
        userid: this.cardHolder,
        ticketId: this.cvv,
        referenceId: localStorage.getItem("reference_id"),
        purchaseDate: this.date,
        purchaseAmount: 100
      })
          .then((res) => {
            alert("Payment Successful");
            this.$router.push("/ticket");
          })
          .catch((err) => {
            console.log(err);
          });
    }
  },
}
</script>

<style scoped>

</style>
