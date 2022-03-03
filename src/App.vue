<template>
  <div id="app">
    <all-users/>
  </div>
</template>

<script>
import allUsers from "./components/allUsers";
export default {
  name: "app",
  components:{
    allUsers
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
