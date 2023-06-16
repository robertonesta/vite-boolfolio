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
            imagesPath: 'storage/',
            currentPage: 1,
            prevfullUrl: null,
            nextfullUrl: null,
        }

    },
    methods: {
        prevPage(fullUrl) {
            this.getProjects(fullUrl);
        },
        nextPage(fullUrl) {
            this.getProjects(fullUrl);
        },
        getProjects(fullUrl) {
            axios.get(fullUrl)
                .then(response => {
                    this.projects = response.data.projects.data;
                    this.nextfullUrl = response.data.projects.next_page_url;
                    this.prevfullUrl = response.data.projects.prev_page_url;
                    this.currentPage = response.data.projects.current_page;
                })
                .catch(error => {
                    console.error(error)
                })
        }

    },
    mounted() {
        const fullUrl = this.localhost + this.projectsEndpoint;
        this.getProjects(fullUrl)
    }
}
</script>
<template>
    <div class="container">
        <div class=" row row-cols-1 row-cols-md-2 g-5">
            <div class="col" v-for="project in projects">
                <projectCard :project="project" :localhost="localhost" :imagesPath="imagesPath"></projectCard>
            </div>
        </div>
        <nav aria-label="Page navigation" class="py-5 text-center" v-if="projects">
            <ul class="pagination align-items-center justify-content-center">
                <li class="page-item">
                    <button class="page-link" aria-label="Previous" @click="prevfullUrl ? prevPage(prevfullUrl) : ''">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li>
                    <button class="page-link" aria-label="current_page">
                        <span aria-hidden="true">{{ this.currentPage }}</span>
                    </button>
                </li>
                <li class="page-item">
                    <button class="page-link" aria-label="Next" @click="nextfullUrl ? nextPage(nextfullUrl) : ''">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style></style>