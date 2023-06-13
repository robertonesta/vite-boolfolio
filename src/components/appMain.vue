<script>
import axios from "axios"

export default {
    name: "appMain",
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
                <div class="card h-100 shadow">
                    <div class="card-header">
                        <h3 class="text-center mb-0">#{{ project.id }} {{ project.title }}</h3>
                    </div>
                    <div class="card-img-top text-center py-3">
                        <img height=150 :src="localhost + imagesPath + project.Image" alt="">
                    </div>
                    <div class="card-body d-flex justify-content-between">
                        <div class="text-start">
                            <ul class="p-0">
                                <h5>Type</h5>
                                <li class="text-uppercase">{{ project.type?.name }}</li>
                            </ul>
                        </div>
                        <div class="text-end">
                            <h5>Technology/ies</h5>
                            <ul>
                                <li v-for="technology in project.technologies">{{ technology.name }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a :href="project.repo"> {{ project.repo }}</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<style lang="scss"></style>