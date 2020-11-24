"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*                                        STATES                                                 */
///////////////////////////********************************************///////////////////////////
var state = {
  generic: {
    ID1: {
      id: 249,
      transit_id: null,
      device_name: "10417",
      plate_number: "‭١٤٩‬‭ص‌ر‌م‬",
      country: "EGY",
      date_time: "2019-07-30, 13:56:31",
      speed: "1192",
      confidence_number: "065",
      brand: "BRAND",
      model: "MODEL",
      color: "COLOR",
      car_class: "CLASS",
      path: "./ftp",
      source1: "10417_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-56-31-428__1192_065.jpg",
      source2: "10417_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-56-31-428__1192_065_CTX_2.jpg",
      source3: "10417_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-56-31-428__1192_065_CTX_3.jpg",
      source4: "10415_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-53-31-428__1192_065_CTX_2.jpg",
      source5: "10415_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-53-31-428__1192_065_CTX_3.jpg",
      source6: " ",
      source7: " ",
      source8: " ",
      match_result: '{"result":"not_found"}',
      violation_type: null
    },
    ID2: {
      id: 250,
      transit_id: null,
      device_name: "11415",
      plate_number: "1II",
      country: "EGY",
      date_time: "2019-07-30, 14:03:55",
      speed: "437",
      confidence_number: "033",
      brand: "BRAND",
      model: "MODEL",
      color: "COLOR",
      car_class: "CLASS",
      path: "./ftp",
      source1: "10415_1II_EGY_2019-07-30-14-03-55-135__437_033.avi",
      source2: "10415_1II_EGY_2019-07-30-14-03-55-135__437_033_CTX_1.jpg",
      source3: "10415_1II_EGY_2019-07-30-14-03-55-135__437_033_CTX_2.jpg",
      source4: "10415_1II_EGY_2019-07-30-14-03-55-135__437_033_CTX_3.jpg",
      source5: "10415_1II_EGY_2019-07-30-14-03-55-135__437_033_CTX_4.jpg",
      source6: "10415_1II_EGY_2019-07-30-14-03-55-135__437_033_CTX_5.jpg",
      source7: "10415_1II_EGY_2019-07-30-14-03-55-135__437_033_CTX_6.jpg",
      source8: " ",
      match_result: '{"result":"not_found"}',
      violation_type: null
    },
    ID3: {
      id: 251,
      transit_id: null,
      device_name: "12415",
      plate_number: "11V11T",
      country: "EGY",
      date_time: "2019-07-30, 13:31:29",
      speed: "683",
      confidence_number: "033",
      brand: "BRAND",
      model: "MODEL",
      color: "COLOR",
      car_class: "CLASS",
      path: "./ftp",
      source1: "10415_11V11T_EGY_2019-07-30-13-31-29-664__683_033.avi",
      source2: "10415_11V11T_EGY_2019-07-30-13-31-29-664__683_033.jpg",
      source3: "10415_11V11T_EGY_2019-07-30-13-31-29-664__683_033_CTX_1.jpg",
      source4: "10415_11V11T_EGY_2019-07-30-13-31-29-664__683_033_CTX_3.jpg",
      source5: "10415_11V11T_EGY_2019-07-30-13-31-29-664__683_033_CTX_4.jpg",
      source6: "10415_11V11T_EGY_2019-07-30-13-31-29-664__683_033_CTX_5.jpg",
      source7: "10415_11V11T_EGY_2019-07-30-13-31-29-664__683_033_CTX_6.jpg",
      source8: " ",
      match_result: '{"result":"not_found"}',
      violation_type: null
    },
    ID4: {
      id: 252,
      transit_id: null,
      device_name: "13415",
      plate_number: "‭١٤٩‬‭ص‌ر‌م‬",
      country: "EGY",
      date_time: "2019-07-30, 13:53:31",
      speed: "1192",
      confidence_number: "065",
      brand: "BRAND",
      model: "MODEL",
      color: "COLOR",
      car_class: "CLASS",
      path: "./ftp",
      source1: "10415_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-53-31-428__1192_065.avi",
      source2: "10415_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-53-31-428__1192_065.jpg",
      source3: " ",
      source4: " ",
      source5: " ",
      source6: " ",
      source7: " ",
      source8: " ",
      match_result: '{"result":"not_found"}',
      violation_type: null
    },
    ID5: {
      id: 253,
      transit_id: null,
      device_name: "14417",
      plate_number: "1II",
      country: "EGY",
      date_time: "2019-07-30, 14:05:58",
      speed: "437",
      confidence_number: "033",
      brand: "BRAND",
      model: "MODEL",
      color: "COLOR",
      car_class: "CLASS",
      path: "./ftp",
      source1: "10417_1II_EGY_2019-07-30-14-05-58-135__437_033_CTX_3.jpg",
      source2: " ",
      source3: " ",
      source4: " ",
      source5: " ",
      source6: " ",
      source7: " ",
      source8: " ",
      match_result: '{"result":"not_found"}',
      violation_type: null
    },
    ID6: {
      id: 254,
      transit_id: null,
      device_name: "15417",
      plate_number: "11V11T",
      country: "EGY",
      date_time: "2019-07-30, 13:32:29",
      speed: "683",
      confidence_number: "033",
      brand: "BRAND",
      model: "MODEL",
      color: "COLOR",
      car_class: "CLASS",
      path: "./ftp",
      source1: "10417_11V11T_EGY_2019-07-30-13-32-29-664__683_033_CTX_1.jpg",
      source2: "10417_11V11T_EGY_2019-07-30-13-32-29-664__683_033_CTX_3.jpg",
      source3: " ",
      source4: " ",
      source5: " ",
      source6: " ",
      source7: " ",
      source8: " ",
      match_result: '{"result":"not_found"}',
      violation_type: null
    },
    ID7: {
      id: 255,
      transit_id: null,
      device_name: "16417",
      plate_number: "‭١٤٩‬‭ص‌ر‌م‬",
      country: "EGY",
      date_time: "2019-07-30, 13:56:31",
      speed: "1192",
      confidence_number: "065",
      brand: "BRAND",
      model: "MODEL",
      color: "COLOR",
      car_class: "CLASS",
      path: "./ftp",
      source1: "10417_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-56-31-428__1192_065.jpg",
      source2: "10417_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-56-31-428__1192_065_CTX_2.jpg",
      source3: "10417_‭١٤٩‬‭ص‌ر‌م‬_EGY_2019-07-30-13-56-31-428__1192_065_CTX_3.jpg",
      source4: " ",
      source5: " ",
      source6: " ",
      source7: " ",
      source8: " ",
      match_result: '{"result":"not_found"}',
      violation_type: null
    },
    ID8: {
      id: 256,
      transit_id: null,
      device_name: "17417",
      plate_number: "1II",
      country: "EGY",
      date_time: "2019-07-30, 14:05:58",
      speed: "437",
      confidence_number: "033",
      brand: "BRAND",
      model: "MODEL",
      color: "COLOR",
      car_class: "CLASS",
      path: "./ftp",
      source1: "10417_1II_EGY_2019-07-30-14-05-58-135__437_033_CTX_1.jpg",
      source2: "10417_1II_EGY_2019-07-30-14-05-58-135__437_033_CTX_2.jpg",
      source3: "10417_1II_EGY_2019-07-30-14-05-58-135__437_033_CTX_3.jpg",
      source4: " ",
      source5: " ",
      source6: " ",
      source7: " ",
      source8: " ",
      match_result: '{"result":"not_found"}',
      violation_type: null
    }
  },
  search: "",
  searchBy: "device_name"
};
/*                                        MUTATIONS                                                 */
///////////////////////////********************************************///////////////////////////

var mutations = {
  setSearch: function setSearch(state, value) {
    ///search
    state.search = value;
  },
  defineSearch: function defineSearch(state, value) {
    /// search by a value
    state.searchBy = value;
  }
};
/*                                        ACTIONS                                               */
///////////////////////////********************************************/////////////////////////////

var actions = {
  setSearch: function setSearch(_ref, value) {
    var commit = _ref.commit;
    ///search
    commit("setSearch", value);
  },
  defineSearch: function defineSearch(_ref2, value) {
    var commit = _ref2.commit;
    ///serach by a value
    commit('defineSearch', value);
  }
};
/*                                        GETTERS                                             */
///////////////////////////********************************************////////////////////////

var getters = {
  dataFiltered: function dataFiltered(state) {
    /// filter data to search
    var datafiltered = {};

    if (state.search) {
      Object.keys(state.generic).forEach(function (key) {
        var data = state.generic[key],
            defineSearch = data[state.searchBy].toLowerCase(),
            search = state.search.toLowerCase();

        if (defineSearch.includes(search)) {
          datafiltered[key] = data;
        }
      });
      return datafiltered;
    }

    return state.generic;
  },
  generic: function generic(state, getters) {
    var dataFiltered = getters.dataFiltered;
    return dataFiltered;
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