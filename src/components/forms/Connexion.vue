<template>
  <div class='mt-4'>
    <h2>Connexion</h2>
    <div class='container'>
      <form>
        <div class='form-group'>
          <label for='exampleInputEmail1'>Adresse mail</label>
          <input
            v-model='email'
            type='email'
            class='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          >
        </div>
        <div class='form-group'>
          <label for='exampleFormControlTextarea1'>Mot de passe</label>
          <input v-model='password' type="password" class='form-control' id='exampleFormControlTextarea1' rows='3'/>
        </div>
        <div style='display: flex;justify-content: center;margin-bottom: 1rem'>
          <button class='btn btn-primary' @click='connect($event)' v-show='!formSent'>Connexion</button>
          <Circle2 v-show='formSent' style='justify-content: center;'/>
        </div>
        <router-link to="/creationCompte">pas de compte ? Inscrivez-vous ! </router-link>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import {Circle2} from 'vue-loading-spinner';
  export default {
    name: 'Connexion',
    data () {
      return {
        email: '',
        password: '',
        formSent: false
      }
    },
    components : {
      Circle2,
    },
    methods: {
      connect: function (event) {
        if(!this.formSent) {
          event.preventDefault();
          this.formSent = true;
          console.log(this.email);
          console.log(this.password);
          axios
            .post('http://localhost:5000/', {
              email: this.email,
              password: this.password
            }, {headers: {'Access-Control-Allow-Origin': '*', 'Accept': '*'}})
            .then(response => {
              if (response.data.jwt != null) {
                this.$store.commit('loadJwt', response.data.jwt);
                this.$store.commit('loadUser', this.email);
                console.log(this.$store.state.jwt);
                axios.get('http://localhost:5000/article/auteur/'+this.email).then(res => {
                  var id = res.data[0]._id;
                  this.$store.commit('loadAuteurId',id);
                  this.$router.push('mesArticles');
                });
              }
            })
            .catch(error => {
              console.log(error);
              this.formSent = false;
            });
        }
      }
    }
  }
</script>