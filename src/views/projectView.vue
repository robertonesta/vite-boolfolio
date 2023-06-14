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
    },
}
</script>
<template>
    
</template>
<style></style>
