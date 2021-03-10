<template>
  <div>
   <table class="fixed_header">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Tanggal Lahir</th>
          <th>Jabatan</th>
          <th>NIP</th>
          <th>Jenis Kelamin</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
          <RowTable
            v-for="(Employee, index) in allEmployee"
            :key="Employee.id"
            :Employee="Employee"
            :index="index"
          />
      </tbody>
    </table>
  </div>
</template>

<script>
import RowTable from './rowTable'

export default {
  props: ['allEmployee'],
  components: {
    RowTable
  },
  computed: {
  }
}
</script>

<style>
.fixed_header{
  min-width: 400px;
  table-layout: fixed;
  border-collapse: collapse;
  margin-bottom: 50px;
}

.buttonBoard {
  display: flex;
  flex-direction: row;
}

.allButton {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
}

.allButton .editBtn {
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 28px;
  border-radius: 10px;
  background-color: black;
  color: white;
  opacity: 0.8;
}

.allButton .deleteBtn {
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 28px;
  border-radius: 10px;
  background-color: rgb(204, 31, 31);
  color: white;
  opacity: 0.8;
}

.allButton .editBtn:hover, .allButton .deleteBtn:hover {
  opacity: 1;
}

.allButton .editBtn, .allButton .deleteBtn {
  cursor: pointer;
  margin-right: 10px;
}

.fixed_header tbody{
  display:block;
  width: 100%;
  overflow: auto;
  height: 300px;
}

.fixed_header thead tr {
  display: block;
}

.fixed_header thead {
  background: black;
  color:#fff;
}

.fixed_header th, .fixed_header td{
  padding: 5px;
  text-align: left;
  width: 200px;
}

.fixed_header td{
  border: solid black 2px;
}

.fixed_header tr:nth-child(even){
  background-color: #f2f2f2;
}
</style>
