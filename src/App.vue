<script setup>
import { reactive, onMounted } from  'vue'
import Moralis from 'moralis'

import { contractAddress, contractABI } from './contract/constants.js'

const state = reactive({ count: 0, userAuth: '' })

const login = async () => {
  let user = Moralis.User.current();
 if(!user) {
   user = await Moralis.authenticate()
    .then((user) => {
      console.log("logged in user:", user);
      console.log(user.get("ethAddress"));
      state.userAuth = user.get('ethAddress')
    })
    .catch((error) => {
      console.log(error)
    })
 } 
}

const logOut = async () => {
  await Moralis.User.logOut();
  state.userAuth = ''
}

const initWeb3 = async () => {
  try {
    window.web3 = await Moralis.enable();
    let contract_instance = new web3.eth.Contract(
      contractABI,
      contractAddress
    );

  console.log(contract_instance)
  } catch (error) {
   console.log(error) 
  }
}

onMounted(() => {
  initWeb3()
})

</script>

<template>
<div>
  <div class="container text-center">
    <h2>{{ state.userAuth ? `Welcome ${state.userAuth}` : 'Please login' }}</h2>
    <button @click="login" class="btn btn-primary mr-5">Authenticate</button><br>
    <div class="p-4"></div>
    <button @click="logOut" class="btn btn-primary">Logout</button>
  </div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
