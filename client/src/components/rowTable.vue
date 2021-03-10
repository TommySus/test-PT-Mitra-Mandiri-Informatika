<template>
          <tr>
              <td>{{index + 1}}</td>
                <td>{{Employee.name}}</td>
                <td>{{ getDate }}</td>
                <td>{{Employee.Position.name}}</td>
                <td>{{Employee.id_number}}</td>
                <td>{{getGender}}</td>
                <td>
                    <div class="buttonBoard">
                        <div class="allButton">
                            <div @click="goToEditPage" class="editBtn">&#128393;</div>
                            <div @click="confirmationDelete" class="deleteBtn">&#128465;</div>
                        </div>
                    </div>
                </td>
          </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  props: ['Employee', 'index'],
  methods: {
    goToEditPage () {
      this.$router.push({ path: '/editKaryawan/' + this.Employee.id })
    },
    errorMessage (errorMessage) {
      Swal.fire({
        title: errorMessage,
        icon: 'error',
        confirmButtonText: 'back'
      })
    },
    deleteData () {
      const payload = {
        id: this.Employee.id
      }
      this.$store.dispatch('deleteEmployee', payload)
        .then(({ data }) => {
          this.$store.dispatch('fetchEmployee')
          Swal.fire(
            'Deleted!',
            'Data sudah terhapus',
            'success'
          )
        })
        .catch(error => {
          this.errorMessage(error.response.data.message)
        })
    },
    confirmationDelete () {
      Swal.fire({
        title: 'Apakah anda akan menghapus data ini?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteData()
        }
      })
    }
  },
  computed: {
    getGender () {
      let gender = this.Employee.gender

      if (gender === 1) {
        gender = 'pria'
      } else {
        gender = 'wanita'
      }
      return gender
    },
    getDate () {
      const date = this.Employee.birth_date
      const year = date.slice(0, 4)
      let month = date.slice(5, 7)
      const day = date.slice(8, 10)

      switch (month) {
        case '01': month = 'Januari'; break
        case '02': month = 'Februari'; break
        case '03': month = 'Maret'; break
        case '04': month = 'April'; break
        case '05': month = 'Mei'; break
        case '06': month = 'Juni'; break
        case '07': month = 'Juli'; break
        case '08': month = 'Agustus'; break
        case '09': month = 'September'; break
        case '10': month = 'Oktober'; break
        case '11': month = 'November'; break
        case '12': month = 'Desember'; break
      }

      return `${Number(day) + 1} ${month} ${year}`
    }
  }
}
</script>

<style>

</style>
