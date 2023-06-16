<script>
export default{
    name: "pagenotfound"
}
</script>
<template>
    <div class="error_height silver_color container text-center d-flex flex-column align-items-center justify-content-center">
        <h1 id="error">ERROR 404</h1>  
        <h2 id="pageNotFound">Oops, page not found!</h2>      
    </div>
</template>

<style>
.error_height{
    height: 70vh;
}

#error, #pageNotFound{
    font-weight: 700;
    font-size: 20vh;
    margin: 0;
    line-height: 1;
    animation: light 1s steps(1) infinite;
}
#error + #pageNotFound{
    font-size: 3vh;
}
@keyframes light{
    66% {
        text-shadow: 0 0 20px #e900fe;
    }
    33% {
        text-shadow: 0 0 20px #6de33c;
    }
}
</style>