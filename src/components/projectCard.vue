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
    <router-link :to="{'name' : 'project', params:{slug:project.slug}}">
        <div class="card h-100 shadow">
            <div class="card-header">
                <h3 class="text-center mb-0">#{{ project.id }} {{ project.title }}</h3>
            </div>
            <div class="card-img-top text-center py-3">
                <img height=150 :src="localhost + imagesPath + project.Image" alt="">
            </div>
            <div class="card-footer">
                <a :href="project.repo"> {{ project.repo }}</a>
            </div>
        </div>
    </router-link>
</template>

<style></style>