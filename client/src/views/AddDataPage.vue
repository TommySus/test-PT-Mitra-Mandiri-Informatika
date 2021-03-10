<template>
  <div class="addPage">
    <h1><b>Master Karyawan</b></h1>
    <div class="addBox">
      <div class="titleAddEmployee">
        <h2>Add Data Karyawan</h2>
      </div>
      <div>
        <form class="inputForm" @submit.prevent="confirmationAddEmployee">
          <div class="inputName">
            <label for="nama">Nama</label>
            <input v-model="name" type="text" required>
          </div>
          <div  class="inputBirthDate">
            <label for="Tanggal Lahir">Tanggal Lahir</label>
            <input v-model="birth_date" type="date" required>
          </div>
          <div  class="inputPosition">
            <label for="Jabatan">Jabatan</label>
            <select v-model="PositionId">
                <option v-for="Position in allPosition" :key="Position.id" :value="Position.id">{{Position.name}}</option>
            </select>
          </div>
          <div  class="inputIdNumber">
            <label for="NIP">NIP</label>
            <input v-model="id_number" type="number" required>
          </div>
          <div  class="inputGender">
            <label for="Jenis Kelamin" class="genderLabel">Jenis Kelamin</label>
            <div class="genderRadioButton">
              <div class="maleRadioButton">
                <input v-model="gender" type="radio" id="male" name="gender" value=1>
                <label for="male">Pria</label><br>
              </div>
              <div class="femaleRadioButton">
                <input v-model="gender" type="radio" id="female" name="gender" value=2>
                <label for="female">Wanita</label><br>
              </div>
            </div>
          </div>
          <div class="buttonForm">
            <button @click="backHome" class="cancel">Kembali</button>
            <button class="addNewEmployeeButton" type="submit">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'AddPage',
  data () {
    return {
      allPosition: [],
      PositionId: '',
      name: '',
      birth_date: '',
      gender: '',
      id_number: ''
    }
  },
  methods: {
    confirmationAddEmployee () {
      Swal.fire({
        title: 'Apakah anda akan menyimpan data ini?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.addEmployee()
        }
      })
    },
    errorMessage (errorMessage) {
      Swal.fire({
        title: errorMessage,
        icon: 'error',
        confirmButtonText: 'back'
      })
    },
    backHome () {
      this.$router.push({ path: '/' })
    },
    fetchPosition () {
      this.$store.dispatch('fetchPosition')
        .then(({ data }) => {
          this.allPosition = data
        })
        .catch(error => {
          this.errorMessage(error.response.data.message)
        })
    },
    addEmployee () {
      const payload = {
        PositionId: this.PositionId,
        name: this.name,
        birth_date: this.birth_date,
        gender: this.gender,
        id_number: this.id_number
      }
      this.$store.dispatch('addEmployee', payload)
        .then(({ data }) => {
          Swal.fire(
            'Success!',
            'Data sudah ditambahkan',
            'success'
          )
          this.$router.push({ path: '/' })
        })
        .catch(error => {
          this.errorMessage(error.response.data.message)
        })
    }
  },
  created () {
    this.fetchPosition()
  }
}
</script>

<style>
  .addBox {
    border: 3px solid black;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .addBox .titleAddEmployee{
    width: 100%;
    height: 100%;
    border-bottom: 3px solid black;
  }
  .addBox .titleAddEmployee h2{
    float: left;
    margin-left: 10px;
  }
  .inputForm {
    display: flex;
    flex-direction: column;
    width: 1200px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .genderRadioButton {
    display: flex;
    flex-direction: row;
    float: right;
    align-items: center;
    margin-right: 300px;
  }
  .genderRadioButton .maleRadioButton, .genderRadioButton .femaleRadioButton{
    margin-right: 40px;
    font-size: 20px;
  }
  input[type='radio'] {
    transform: scale(1.5);
    margin-right: 10px;
  }
  .buttonForm .cancel, .buttonForm .addNewEmployeeButton{
    width: 150px;
    margin-left: 30px;
    height: 40px;
    font-size: 20px;
    background-color: black;
    color: white;
    opacity: 0.8;
    border-radius: 5px;
    cursor: pointer;
  }
  .buttonForm .cancel:hover, .buttonForm .addNewEmployeeButton:hover {
    opacity: 1;
  }
  .inputForm .inputName label, .inputForm .inputBirthDate label, .inputForm .inputPosition label, .inputForm .inputIdNumber label, .inputForm .inputGender .genderLabel {
    float: left;
    margin-left: 200px;
    font-weight: bold;
    font-size: 25px;
  }
  .inputForm .inputName input, .inputForm .inputBirthDate input, .inputForm .inputIdNumber input {
    float: right;
    margin-right: 200px;
    height: 30px;
    width: 400px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
  }
  .inputForm .inputPosition select,  .inputForm .inputGender select {
    float: right;
    margin-right: 200px;
    height: 45px;
    width: 413px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
  }
  .inputForm .inputName, .inputForm .inputBirthDate, .inputForm .inputPosition, .inputForm .inputIdNumber, .inputForm .inputGender {
    margin-bottom: 30px;
  }
</style>
