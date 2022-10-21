<template>
  <form class="w-full max-w-lg">
    <div class=" flex flex-wrap bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block text-gray-700 text-sm font-bold py-2">Origin:</label>
        <input
          class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="ticketRequest.origin" type="text" placeholder="From">
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block text-gray-700 text-sm font-bold py-2">Destination:</label>
        <input
          class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="ticketRequest.destination" type="text" placeholder="To">
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 py-2 md:mb-0">
        <label class="block text-gray-700 text-sm font-bold py-3">Travel Class:</label>
        <input
          class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="ticketRequest.travel_class" type="number">
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 py-2 md:mb-0">
        <label class="block text-gray-700 text-sm font-bold py-3">Number of Person:</label>
        <input
          class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="ticketRequest.n_persons" type="number">
      </div>
      <div class="md:w-1/2 md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            Train Preferred
          </span>
        </label>
      </div>
      <div class="md:w-1/2 md:items-center mb-6 text-left	">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            Tram Preferred
          </span>
        </label>
      </div>
      <div class="md:w-1/2 md:items-center mb-6 text-left	">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            Bus Preferred
          </span>
        </label>
      </div>
      <div class="md:w-1/2 md:items-center mb-6 text-left	">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            Subway Preferred
          </span>
        </label>
      </div>
      <div class="w-full px-3 mb-6 py-2 md:mb-0 text-left">
        <label class="block text-gray-700 text-sm font-bold py-3">Arrival Time:</label>
        <input
          class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="ticketRequest.arrival_time" type="number">
      </div>
      <div class="w-full px-3 mb-6 py-2 md:mb-0 text-left">
        <div>
          <label class="block text-gray-700 text-sm font-bold py-3">First Name:</label>
          <input
            class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="passenger.firstName" type="text">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold py-3">Last Name:</label>
          <input
            class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="passenger.lastName" type="text">
        </div>
        <div class="py-2">
          <label class="block text-gray-700 text-sm font-bold py-3">Age:</label>
          <input
            class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="passenger.age" type="number">
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button" @click="addPassenger">
          Add customer
        </button>
      </div>
      <div class="py-3" v-for="passenger in ticketRequest.passengers">
        First Name: {{ passenger.firstName }}
        Last Name: {{ passenger.lastName }}
        Age: {{ passenger.age }}
      </div>
    </div>


    <button @click="requestTrip">Submit request</button>
  </form>
</template>

<script>
import DisplayTicket from "./DisplayTicket.vue";
import { requestTicketInfo } from "../api";

export default {
  name: "UserRequestTrip",
  components: { DisplayTicket },
  data() {
    return {
      ticketRequest: {
        origin: "amsterdam",
        destination: "london",
        travel_class: 1,
        train_preferred: false,
        tram_preferred: false,
        bus_preferred: false,
        subway_preferred: false,
        n_persons: 2,
        arrival_time: "",
        passengers: []
      },
      passenger: {
        firstName: "",
        lastName: "",
        age: ""
      }
    };
  },
  methods: {
    requestTrip() {
      console.log(this.ticketRequest);
      requestTicketInfo(this.ticketRequest).then(response => {
        console.log(response);
      });
      console.log(response.data.reference)
      this.$router.push({
        name: "viewtrip",
        params: {
          ticketInfo: this.ticketRequest
        }
      });
    },
    addPassenger() {
      this.ticketRequest.passengers.push(this.passenger);
      console.log(this.ticketRequest);
    }
  }
};
</script>

<style scoped>

</style>
