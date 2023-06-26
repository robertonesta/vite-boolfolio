<script>
import axios from "axios"

export default {
    name: "appHeader"
}
</script>

<template>
    <div class="container text-center d-flex justify-content-between align-items-center">
        <router-link class="text-decoration-none" :to="{ 'name': 'home' }">
            <h1 id="title" class="silver_color">&lt;nr&gt;</h1>
        </router-link>
        <nav class="nav justify-content-center align-items-center gap-3 silver_color">
            <router-link class="text-decoration-none mb-0 silver_color" :to="{ 'name': 'about' }">
                About me
            </router-link>
            <router-link class="text-decoration-none mb-0 silver_color" :to="{ 'name': 'projects' }">
                Projects
            </router-link>
            <router-link class="text-decoration-none mb-0 silver_color" :to="{ 'name': 'skills' }">
                My Skills
            </router-link>
            <router-link class="text-decoration-none mb-0 silver_color" :to="{ 'name': 'contacts' }">
                Contacts
            </router-link>
        </nav>
    </div>
</template>


<style lang="scss"></style>