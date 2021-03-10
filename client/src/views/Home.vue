<template>
  <div class="home">
    <h1><b>Master Karyawan</b></h1>
    <div class="table">
      <div class="titleEmployeeList">
        <h2>List Karyawan</h2>
      </div>
      <button class="addEmployeeBtn" @click="toAddPage">Tambah</button>
      <DataTable
        :allEmployee="allEmployees"
      />
    </div>
  </div>
</template>

<script>
import DataTable from '../components/dataTable'

export default {
  name: 'Home',
  data () {
    return {
      allEmployee: []
    }
  },
  components: {
    DataTable
  },
  methods: {
    toAddPage () {
      this.$router.push({ path: '/addKaryawan' })
    },
    fetchEmployee () {
      this.$store.dispatch('fetchEmployee')
    }
  },
  computed: {
    allEmployees () {
      return this.$store.state.employees
    }
  },
  created () {
    this.fetchEmployee()
  }
}
</script>

<style scoped>
  .table {
    border: 3px solid black;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .table .titleEmployeeList{
    width: 100%;
    height: 100%;
    border-bottom: 3px solid black;
  }
  .table .titleEmployeeList h2{
    float: left;
    margin-left: 10px;
  }
  .table .addEmployeeBtn {
    background-color: white;
    color: black;
    width: 170px;
    height: 40px;
    margin-bottom: 20px;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 0 9px #999;
    transition: 0.5s;
  }
  .table .addEmployeeBtn:active {
    transition: 0.5s;
    background-color: black;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
</style>
