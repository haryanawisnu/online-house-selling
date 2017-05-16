import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    house: {
      _id: '',
      title: '',
      price: '',
      description: '',
      name: '',
      phone: '',
      img: '',
      lat: -6.260708,
      lang: 106.781638
    },
    list_house: [],
    status: ''
  },
  mutations: {
    seedlistData(state) {
      axios.get('http://localhost:3000/house')
        .then(function(response) {
          console.log('Masuk ' + response);
          state.list_house = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    setStatus(state, data) {
      if (data.action == 'update') {
        state.house = state.list_house[data.index];
      }
      state.status = data.action
    },
    emptyhouse(state) {
      state.house._id = ''
      state.house.title = ''
      state.house.price = ''
      state.house.description = ''
      state.house.name = ''
      state.house.phone = ''
      state.house.img = ''
      state.house.lat = -6.260708
      state.house.lang = 106.781638
    }
  },
  actions: {
    create({
      commit
    }, data) {
      axios.post('http://localhost:3000/house', {
          title: data.title,
          price: data.price,
          description: data.description,
          name: data.name,
          phone: data.phone,
          img: data.img,
          lat: data.lat,
          lang: data.lang
        })
        .then(function(response) {
          console.log('Masuk ' + JSON.stringify(response));
          commit('seedlistData')
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    update({
      commit
    }, data) {
      axios.put('http://localhost:3000/house/' + data._id, {
          title: data.title,
          price: data.price,
          description: data.description,
          name: data.name,
          phone: data.phone,
          img: data.img,
          lat: data.lat,
          lang: data.lang
        })
        .then(function(response) {
          console.log('Update ' + JSON.stringify(response));
          commit('seedlistData')
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteData({
      commit
    }, data) {

      axios.delete('http://localhost:3000/house/' + data)
        .then(function(response) {
          console.log('Delete ' + JSON.stringify(response));
          commit('seedlistData')
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    seedList({
      commit
    }) {
      commit('seedlistData')
    },
    setStatus({
      commit
    }, data) {
      commit('setStatus', data);
    },
    emptyhouse({
      commit
    }) {
      commit('emptyhouse');
    }
  },
  getters: {
    house(state) {
      return state.house
    },
    list_house(state) {
      return state.list_house
    },
    status(state) {
      return state.status
    }
  }
})
