<script>
import { store } from "../assets/data/store";
export default {
    name: "SkillsView",
    setup() {
        return { store }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="silver_color mb-5">My Skills</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
            <div class="col" v-for="skill in store.skills">
                <div class="d-flex flex-column align-items-center">
                    <img class="w-50 mb-3" :src="`${store.image_path}${skill.image}`" alt="">
                    <div class="text-center">
                        <span class="text-uppercase silver_color">{{ skill.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
