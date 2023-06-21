<script>
import { store } from "../assets/data/store";
export default {
  name: "AboutView",
  setup() {
    return { store }
  }
}
</script>
<template>
  <div class="container">
    <div class="py-5">
      <h2 class="silver_color mb-3">About Me</h2>
      <p class="silver_color">
        Hi folks, I'm Roberto, 30yo guy from Puglia, Italy. Before becoming a Full Stack Web Dev I studied Foreign Languages in Bari. This department has given me a full open-mindnessess about the World, both my own culture and especially those of others. <br> My journey in the world of programming started in the mid December 2022, when I decided to undertake the Boolean Careers training course, learning the basics of 360-degree programming both on the Front End and on the Back End. So I started 700 hours of live online course to become Full Stack Web Developer, learning: HTML, CSS, Javascript, Vue, PHP, Laravel. The course required a full-time commitment and as in a real school, a 24/7 participation in all activities is required.
      </p>
    </div>
    <div class="text-center py-5">
      <h2 class="silver_color mb-3">My Skills</h2>
      <div class="d-flex py-1 justify-content-between align-items-center">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-6">
          <div class="col px-2 py-1" v-for="skill in store.skills">
            <div class="card h-100">
              <div class="card-body d-flex align-items-center justify-content-center">
                <img class="w-75 h-80" :src="`${store.image_path}${skill.image}`" alt="">
              </div>
              <div class="card-footer">
                <span class="text-uppercase silver-color">{{ skill.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
