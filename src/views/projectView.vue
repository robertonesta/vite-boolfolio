<script>
import axios from 'axios';

export default {
    name: "ProjectView",
    data(){
        return{
            localhost: 'http://127.0.0.1:8000/',
            projectsEndpoint: 'api/projects',
            imagesPath: 'storage/',
            project: null
        }
    }, 
    mounted() {
        axios
        .get(this.localhost + this.projectsEndpoint + "/" + this.$route.params.slug )
        .then(response =>{
            if(response.data.success){
                this.project = response.data.project
            } else {
                this.$router.push({
                    name: "pagenotfound"
                })
            }
        })
        .catch(error => {
            console.error(error)
        })
    },
}
</script>

<template>
<div class="container" v-if="this.project">
    <div class="row">
        <div class="col">
            <div class="card shadow">
                <div class="card-header text-center">
                    <h2>{{project.title}}</h2>
                </div>
                <div class="card-img-top text-center py-3" v-if="this.project.Image">
                    <img :src="localhost + imagesPath + project.Image" alt="project.title">
                </div>
                <div v-else>
                    <img class="w-100" src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png" alt="project.title">
                </div>
                <div class="card-body d-flex justify-content-between text-uppercase">
                    <div class="Types text-start">
                        <h3>Type</h3>
                        <ul class="ps-0" v-if="this.project.type">
                            <li>{{ project.type.name }}</li>
                        </ul>
                        <ul v-else>
                            <li>N/A</li>
                        </ul>
                    </div>
                    <div class="Technologies text-end">
                        <h3>Technologies</h3>
                        <ul class="py-0" v-if="this.project.technologies.length > 0">
                            <li v-for="technology in project.technologies">{{ technology.name }}</li>
                        </ul>
                        <ul v-else>
                            <li>N/A</li>
                        </ul>
                    </div>
                </div>
                <div class="card-footer text-center py-3 fw-bold">
                    <span>Check out the whole project code at: </span><a class="text-decoration-none" :href="project.repo">{{ project.repo }}</a>
                </div>                
            </div>
        </div>
    </div>
</div>    
</template>
<style></style>
