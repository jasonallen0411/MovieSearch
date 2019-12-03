// Init F7 Vue Plugin
Framework7.use(Framework7Vue);

// Init Page Components
Vue.component('page-movieSearch', {
  data: function(){
    return {
      url: "http://www.omdbapi.com/?apikey=7ad73765&t=",
      movieSearch: "",
      movieInfo: "",
      movieInfo2: "",
      movieInfo3: "",
      // movieInfo4: "",
      movieInfo5: "",
      movieInfo6: "",
      movieInfo7: "",
      moviePoster: ""
      }
  },

  methods: {
      getMovieInfo: function(){
        fetch(this.url + this.movieSearch)
        .then( result => result.json())
        .then(movieInfo => {
          this.movieInfo = movieInfo.Title;
          this.moviePoster = movieInfo.Poster; 
          console.log(movieInfo);
        })
        .then(fetch(this.url + this.movieSearch)
        .then( result => result.json())
        .then(movieInfo2 => {
           this.movieInfo2 = movieInfo2.Year; 
          console.log(this.movieInfo2);
        }))
        .then(fetch(this.url + this.movieSearch)
        .then( result => result.json())
        .then(movieInfo3 => {
           this.movieInfo3 = movieInfo3.Rated; 
          console.log(this.movieInfo3);
        }))
        // .then(fetch(this.url + this.movieSearch)
        // .then( result => result.json())
        // .then(movieInfo4 => {
        //    this.movieInfo4 = movieInfo4.Poster; 
        //   console.log(this.movieInfo4);
        // }))
        .then(fetch(this.url + this.movieSearch)
        .then( result => result.json())
        .then(movieInfo5 => {
           this.movieInfo5 = movieInfo5.Runtime; 
          console.log(this.movieInfo5);
        }))
        .then(fetch(this.url + this.movieSearch)
        .then( result => result.json())
        .then(movieInfo6 => {
           this.movieInfo6 = movieInfo6.Genre; 
          console.log(this.movieInfo6);
        }))
        .then(fetch(this.url + this.movieSearch)
        .then( result => result.json())
        .then(movieInfo7 => {
           this.movieInfo7 = movieInfo7.Director; 
          console.log(this.movieInfo7);
        }))
      }
  },
  template: '#page-movieSearch'
});
Vue.component('page-form', {
  template: '#page-form'
});
Vue.component('page-dynamic-routing', {
  template: '#page-dynamic-routing'
});
Vue.component('page-not-found', {
  template: '#page-not-found'
});

// Init App
new Vue({
  el: '#app',
  data: function () {
    return {

      // data: function(){
      //   return {
      //     url: "http://www.omdbapi.com/?apikey=7ad73765&t=",
      //     movieSearch: "",
      //     movieInfo: "",
      //     movieData: ""
      //     }
      // },

      // methods: {
      //     getMovieInfo: function(){
      //       fetch(this.url + movieSearch)
      //       .then( result => result.json())
      //       .then(movInfo => {
      //         console.log(movInfo);
      //         this.movInfo = movInfo.result.Title;
      //         console.log(this.movInfo);
      //       })
      //     }
      // },
      // Framework7 parameters here
      f7params: {
        root: '#app', // App root element
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: [
          {
            path: '/movieSearch/',
            component: 'page-movieSearch'
          },
          {
            path: '/form/',
            component: 'page-form'
          },
          {
            path: '/dynamic-route/blog/:blogId/post/:postId/',
            component: 'page-dynamic-routing'
          },
          {
            path: '(.*)',
            component: 'page-not-found',
          },
        ],
      }
    }
  },
});