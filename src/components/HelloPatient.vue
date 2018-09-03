<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div>
          <ul>
              <li v-for="post in patients">{{post.uuid}} | {{post.display}}</li>
          </ul>
          <p v-if="pending">loading posts...</p>
          <p v-if="error">loading failed</p>
      </div>
 </div>
</template>

<script>

import Patient from '../services/patientService';

export default {
  name: 'HelloPatient',
  props: {
    msg: String,
  },
  data() {
    return {
      other_data: '',
    };
  },
  created() {
    const params = { q: 'Mic' };
    Patient.dispatch('queryPatients', { params });
    console.log(Patient.state);
  },
  computed: {
    error() {
      return Patient.state.error.patients;
    },
    pending() {
      return Patient.state.pending.patients;
    },
    patients() {
      return Patient.state.patients.results;
    },
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
