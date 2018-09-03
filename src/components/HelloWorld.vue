<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import Patient from '../services/patientService';

    export default {
  name: 'HelloWorld',
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
    //this.$store.dispatch('queryPatients', { params });
    Patient.dispatch('queryPatients', { params });
      console.log(Patient.state);
  },
  computed: mapState(Patient.state, {
    patients: state => state.patients.patients,
    pending: state => state.pending,
    error: state => state.error,
  }),
  methods: {
    ...mapActions([
      'queryPatients',
    ]),
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
