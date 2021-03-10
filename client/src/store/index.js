import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees: []
  },
  mutations: {
    getAllEmployee (state, payload) {
      state.employees = payload
    }
  },
  actions: {
    fetchEmployee (context) {
      return axios({
        method: 'GET',
        url: '/'
      })
        .then(({ data }) => {
          context.commit('getAllEmployee', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchEmployeeById (context, payload) {
      return axios({
        method: 'GET',
        url: '/' + payload.id
      })
    },
    fetchPosition (context) {
      return axios({
        method: 'GET',
        url: '/position'
      })
    },
    deleteEmployee (context, payload) {
      return axios({
        method: 'PATCH',
        url: '/delete/' + payload.id
      })
    },
    addEmployee (context, payload) {
      return axios({
        method: 'POST',
        url: '/',
        data: {
          name: payload.name,
          birth_date: payload.birth_date,
          PositionId: payload.PositionId,
          gender: payload.gender,
          id_number: payload.id_number
        }
      })
    },
    editEmployee (context, payload) {
      return axios({
        method: 'PUT',
        url: '/edit/' + payload.id,
        data: {
          name: payload.name,
          birth_date: payload.birth_date,
          PositionId: payload.PositionId,
          gender: payload.gender,
          id_number: payload.id_number
        }
      })
    }
  },
  modules: {
  }
})
