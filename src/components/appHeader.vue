<script>
import axios from "axios"

export default {
    name: "appHeader"
}
</script>

<template>
<div class="container text-center d-flex justify-content-between align-items-center">
    <router-link class="text-decoration-none" :to="{'name' : 'home'}">
        <h1 class="text-dark">&lt;Roberto Nesta Boolfolio&gt;</h1>
    </router-link>
    <nav class="nav justify-content-center align-items-center gap-3">
      <a class="nav-link px-0 text-dark" href="https://github.com/robertonesta" target="_blank"><i class="fa-brands fa-github"></i>My Github</a>
      <router-link class="text-decoration-none mb-0 text-dark" :to="{'name' : 'about'}">
        About me
    </router-link>
    <router-link class="text-decoration-none mb-0 text-dark" :to="{'name' : 'contacts'}">
        Contacts
    </router-link>
    </nav>
</div>        
</template>


<style lang="scss">

</style>