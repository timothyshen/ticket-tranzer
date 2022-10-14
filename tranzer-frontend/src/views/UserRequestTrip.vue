<template>
  // TODO: add a button to trigger the upload
  <div>
    <div>
      <form >
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" v-model="passenger.fristName"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" v-model="passenger.lastName"><br>
        <label for="age" ></label>
        <input type="text" id="age" name="age" v-model="passenger.age"><br><br>
        <input type="submit" value="Submit" @click="addPassenger">
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "UserRequestTrip",
  data() {
    return {
      ticketInfo:{
        from: "",
        to: "",
        date: "",
        time: "",
        price: "",
        seats: "",
        car: "",
        driver: "",
        passengers: [],
        status: "",
      },
      passenger: {
        fristName: "",
        lastName: "",
        age:""
      }
    };
  },
  methods: {
    async requestTrip() {
      const { data } = await axios.post(
        "http://localhost:3000/api/trips",
        this.ticketInfo
      );
      console.log(data);
    },
    async addPassenger() {

      console.log(data);
    },
  },
}
</script>

<style scoped>

</style>
