<script>
import axios from "axios"

export default {
    name: "appMain",
    data(){
        return{
            localhost: 'http://127.0.0.1:8000/',
            projectsEndpoint: 'api/projects',
            projects: [], 
            imagesPath: 'storage/'           
        }

    }, 
    methods:{

    },
    mounted(){
        const fullUrl = this.localhost + this.projectsEndpoint;
        axios.get(fullUrl)
        .then(response => {
            this.projects = response.data.projects;
        })
        .catch(error =>{
            console.error(error)
        })
    }
}

</script>

<template>

    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
            <div class="col" v-for="project in projects">
                <div class="card h-100">
                    <div class="card-header">
                        <h3 class="text-center">#{{project.id}} {{ project.title }}</h3>
                    </div>
                    <div class="card-body text-center">
                        <img height=150 :src="localhost + imagesPath + project.Image" alt="">
                    </div>
                    <div class="card-footer">
                        <h6>Type:</h6>
                        <ul>
                            <li>{{ project.type?.name }}</li>
                        </ul>
                        <h6>Technology/ies used:</h6>
                        <ul>
                            <li>{{ project.technology?.name }}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<style lang="scss">

</style>