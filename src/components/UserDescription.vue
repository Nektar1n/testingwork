<template>
  <div class="user_info">
    <div class="user_wrapper">
      <button @click="extbtn" class="extbtn">exit</button>
    <h1>{{infoUser.name}}</h1>
      <hr>
      <h2>Phone: {{infoUser.phone}}</h2>
      <h2>Website: {{infoUser.website}}</h2>
      <h2>Address:</h2>
      <ul>
        <li>street: {{infoUser.address.street}}</li>
        <li>suite: {{infoUser.address.suite}}</li>
        <li>city: {{infoUser.address.city}}</li>
        <li>zipcode: {{infoUser.address.zipcode}}</li>
      </ul>
      <h2>Company:</h2>
      <ul>
        <li>name: {{infoUser.company.name}}</li>
        <li>catchPhrase: {{infoUser.company.catchPhrase}}</li>
        <li>bs: {{infoUser.company.bs}}</li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "UserDescription",
  props:{
    infoUser:{
      type:Object
    }
  },methods:{
    extbtn(){
      this.$emit("extbtn", null);
    }
  }

}
</script>

<style scoped>
.user_info{
    width: 500px;
    height: 500px;
    background-color: darkseagreen;
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
    margin: auto;
  z-index: 30;
  }
.user_wrapper{
  position: relative;
}
.extbtn{
  position: absolute;
  top: -20px;
  right: 5px;
  height: 30px;
  width: 30px;
  padding: 2px;
  background: none;
  border: 2px solid black;
  cursor: pointer;
  border-radius: 2px;
  transition: all .1s ease;
}
.extbtn:hover{
  color: white;
  border: 2px solid white;
  transform: scale(1.1);
}
li{
  text-align: left;
}
h2{
  text-align: left;
  margin-left: 30px;
}

hr{
  width: 300px;
  border: none;
  outline: 1px solid gray;
}
@media (max-width: 800px) {
  .user_info{
    width: 300px;
    font-size: 15px;
    height: 550px;
  }
  hr{
    width: 150px;
  }
}
</style>
