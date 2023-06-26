<script>
import axios from "axios"
import projectCard from "../components/projectCard.vue"

export default {
    name: "appHome",
    components: {
        projectCard
    },
        
}
</script>
<template>
<div class="vh jumbotron py-5">
    <div class="px-5 d-flex justify-content-around align-items-center">     
      <div class="me-3">
        <h1 id="title" class="jumbo_title fw-bold text-uppercase silver_color">
            Roberto Nesta
        </h1>
        <h1 id="title" class="jumbo_title text-uppercase silver_color">web developer</h1>
      </div>
        <div class="ms-3">
          <img class="pic" src="../assets/img/pic.jpg" alt="">
      </div>
    </div>
  </div>    
</template>
<style>
.vh{
    height: calc(100vh - 226px);
}
.pic {
  border-radius: 50%;
  width: 400px;
  aspect-ratio: 1/1;
}
.jumbo_title{
    font-size: 5rem;
}

  </style>