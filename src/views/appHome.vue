<script>
import axios from "axios"
import projectCard from "../components/projectCard.vue"

export default {
    name: "appHome",
    components: {
        projectCard
    },
    data() {
        return {
            localhost: 'http://127.0.0.1:8000/',
            projectsEndpoint: 'api/projects',
            projects: [],
            imagesPath: 'storage/'
        }

    },
    methods: {

    },
    mounted() {
        const fullUrl = this.localhost + this.projectsEndpoint;
        axios.get(fullUrl)
            .then(response => {
                this.projects = response.data.projects;
            })
            .catch(error => {
                console.error(error)
            })
    }
}
</script>
<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
            <div class="col" v-for="project in projects">
                <projectCard :project="project" :localhost="localhost" :imagesPath="imagesPath"></projectCard>
            </div>
        </div>
    </div>
</template>
<style></style>