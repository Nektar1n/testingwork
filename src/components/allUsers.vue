<template>
  <div id="app">
    <UserDescription v-if="infoUser" :infoUser="infoUser" @extbtn="extbtn" ></UserDescription>
    <!--    <h1>{{postsCount}}</h1>-->
    <div id="users_wrapper">
    <h1>User list</h1>
    <div class="users">
      <div class="user" v-for="user in validUsers" :key="user.id" @click="infoUser=user, blurApp()">
        <h2>{{user.name}}</h2>
        <p>{{user.email}}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import UserDescription from "./UserDescription";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  computed: mapGetters(["validUsers", "postsCount"]),
  data(){
    return{
      nameUser:'',
      infoUser:null
    }
  },
  methods: {...mapActions(["fetchUsers"]),
    sayHey(){
      console.log(this.infoUser)
      console.log('heu')
    },
    extbtn() {
      this.infoUser=null
      document.getElementById('users_wrapper').style.opacity='1'
    },
    blurApp(){
      document.getElementById('users_wrapper').style.opacity='0.5'
    }

  },
  components: {
    UserDescription
  },
  async mounted() {
    // this.$store.dispatch("fetchPosts");
    this.fetchUsers();
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin: 60px auto;*/

}
.users{
  margin: 90px  auto;
  display: flex;
  flex-wrap: wrap;
  width: 810px;
}
.user {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  width: 400px;
  cursor: pointer;
  transition:all .2s ease ;
}
.user:hover{
  background-color: gray;
  color: white;
}
@media (max-width: 800px) {
  .users{
    width: 410px;
  }
  .user{
    width: 90%;
  }
}
/*#title_list{*/
/*  position: absolute;*/
/*  top: 0; left: 0; bottom: 0; right: 50px;*/
/*  margin: auto;*/
/*}*/


</style>
