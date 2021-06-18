import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
import { router } from './router.js'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    jwt : null,
    user : null,
    articlesliste : null,
    auteurid : null,
  },
  mutations: {
    loadJwt (state, jwt) {
      state.jwt=jwt
    },
    loadUser (state, user){
      state.user=user
    },
    loadAuteurId (state, id){
      state.auteurid=id
    },
    deconnect (state){
      state.user=null
      state.jwt=null
    },
    loadArticles (state, articles){
      state.articlesliste = articles
    },
    deleteArticle (state, id){
      var index = state.articlesliste.findIndex(function(item){
        return item.id === id
      });
      state.articlesliste.splice(index,1)

    },
    updateArticle (state,articleModif){
      var index = state.articlesliste.findIndex(function(item){
        return item.id === articleModif.id
      });
      var article =  state.articlesliste[index]
      article.nom = articleModif.nom
      article.contenu=articleModif.contenu
      state.articlesliste.splice(index,1,article)
    },
    addArticle (state,article){
       state.articlesliste.unshift(article);

    }

  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
