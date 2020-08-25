var app2 = new Vue({
  el: '#app2',

  data: {
    myTitle: 'Hello World!',
    avatar: "https://images-na.ssl-images-amazon.com/images/I/51w1opglAOL._SX316_BO1,204,203,200_.jpg"
  }
});

const app1 = new Vue({
    el: '#app1',
    data: {
        name: 'Mir',
        message: 'Hello world'
    }
});

const app3 = new Vue({
    el: "#app3",

    data: {
        username: 'myUsername',
        password: '*********'
    },

    methods: {
        celebrate: function() {
          alert('we are celebrating!')
        }
      }
});

var app4 = new Vue({
  el: '#app4',

  data: {
    myTitle: 'Hello World!'
  }
});

//coontinue from: https://scotch.io/courses/getting-started-with-vuejs/vue-templating-basics
