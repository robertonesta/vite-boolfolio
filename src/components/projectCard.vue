<script>
export default{
    name: "projectCard",
    props:{
        localhost: String,
        project: Object,
        imagesPath: String
    },
}
</script>
<template>
    <div class="card bg-transparent h-100 border-0 shadow">
        <router-link class="text-decoration-none silver_color" :to="{'name' : 'project', params:{slug:project.slug}}">
            <div class="card-header border-0">
                <h3 class="text-center mb-0 text-decoration-none">#{{ project.id }} {{ project.title }}</h3>
            </div>
            <div class="card-img-top border-0 text-center">
                <img class="img-fluid py-0" :src="localhost + imagesPath + project.Image" alt="">
            </div>
        </router-link>
            <div class="card-footer bg-transparent text-center border-0">
                <a class="text-decoration-none silver_color" target="_blank" :href="project.repo"> {{ project.repo }}</a>
            </div>
        </div>
</template>

<style></style>