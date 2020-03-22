// index.js
const store = new Vuex.Store({
  state: {
    version: "0.0.0",
    countries: [
      {name: "World", code: "OWID_WRL", checked: true},
      {name: "USA", code: "USA", checked: true},
      {name: "Canada", code: "CAN", checked: false},
      {name: "Mexico", code: "Mex", checked: false},
      {name: "United Kingdom", code: "GBR", checked: false},
      {name: "France", code: "FRA", checked: false},
      {name: "Germany", code: "GBR", checked: false},
      {name: "Spain", code: "ESP", checked: true},
      {name: "Italy", code: "ITA", checked: true},
      {name: "China", code: "CHN", checked: false},
      {name: "India", code: "IND", checked: false},
      {name: "Iran", code: "IRN", checked: true},
    ],
    casesUrl: "https://ourworldindata.org/grapher/total-cases-covid-19?country=",
    newCasesUrl: "https://ourworldindata.org/grapher/daily-cases-covid-19?country=",
    deathsUrl: "https://ourworldindata.org/grapher/total-deaths-covid-19?country=",
    newDeathsUrl: "https://ourworldindata.org/grapher/daily-deaths-covid-19?country=",
  },
  
  getters: {},
  mutations: {},  
  actions: {}
});



const app = new Vue({ 
  el: '#app',
  store,
  data: {
    title:  'Vue!',
    dummy: false,
  },

  computed: { 
    version () {
      return this.$store.state.version;
    },
    countries () {
      return this.$store.state.countries;
    },
    countryCodes () {
      let str = "";
      const arr = this.$store.state.countries;
      
      for (let i = 0; i < arr.length; ++i) {
        if (arr[i].checked)
        str += arr[i].code + "+";
      }

      console.log(str.slice(0, -1));
      return str;
    },
    cases () {
      console.log(this.$store.state.casesUrl + this.countryCodes);
      return this.$store.state.casesUrl + this.countryCodes;
    },
    newCases () {
      return this.$store.state.newCasesUrl + this.countryCodes;
    },
    deaths () {
      console.log(this.$store.state.deathsUrl + this.countryCodes);
      return this.$store.state.deathsUrl + this.countryCodes;
    },
    newDeaths () {
      return this.$store.state.newDeathsUrl + this.countryCodes;
    },
  },

  methods: {},
  mounted() {},
});
