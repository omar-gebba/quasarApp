"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _quasar = require("quasar");

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
  users: {}
};
/*                                        MUTATIONS                                                 */
///////////////////////////********************************************///////////////////////////

var mutations = {
  registerUser: function registerUser(state, payload) {
    _vue["default"].set(state.users, payload.id, payload.data);
  }
};
/*                                        ACTIONS                                               */
///////////////////////////********************************************/////////////////////////////

var actions = {
  registerUser: function registerUser(_ref, data) {
    var commit = _ref.commit,
        dispatch = _ref.dispatch;
    var userID = (0, _quasar.uid)(),
        payload = {
      id: userID,
      data: data
    };
    commit("registerUser", payload);
    dispatch('saveUsersToLocalStorage');
  },
  saveUsersToLocalStorage: function saveUsersToLocalStorage(_ref2) {
    var state = _ref2.state;

    /// save Data to Local Storage
    _quasar.LocalStorage.set('users', state.users);
  }
};
/*                                        GETTERS                                             */
///////////////////////////********************************************////////////////////////

var getters = {
  users: function users(state) {
    return state.users;
  }
}; ///////////////////////////********************************************////////////////////////

var _default = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;