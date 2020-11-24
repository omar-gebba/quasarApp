import { uid } from "quasar";
import Vue from "vue";
import { LocalStorage } from 'quasar'


/*                                        STATES                                                 */

///////////////////////////********************************************///////////////////////////
const state = {
  users: {}
};

/*                                        MUTATIONS                                                 */
///////////////////////////********************************************///////////////////////////
const mutations = {
  registerUser(state, payload) {
    Vue.set(state.users, payload.id, payload.data)
  }
};

/*                                        ACTIONS                                               */
///////////////////////////********************************************/////////////////////////////

const actions = {
  registerUser({ commit, dispatch }, data) {
    let userID = uid(),
      payload = {
        id: userID,
        data: data
      };
    commit("registerUser", payload);
    dispatch('saveUsersToLocalStorage')
  },
  saveUsersToLocalStorage({ state }) {                     /// save Data to Local Storage
    LocalStorage.set('users', state.users)
},
};

/*                                        GETTERS                                             */
///////////////////////////********************************************////////////////////////

const getters = {
  users: state => {
    return state.users
  }
};

///////////////////////////********************************************////////////////////////
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
