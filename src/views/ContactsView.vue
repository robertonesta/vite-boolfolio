<script>
import axios from 'axios';

export default {
    name:"ContactsView",
    data(){
        return{
            name: '',
            email: '',
            message: '',
            errors: {},
            loading: false,
            success: false
        }
    },
    methods: {
        submitForm(){
            
           
            let data = {
                name: this.name,
                email: this.email,
                message: this.message,
            };

            axios
            .post('http://127.0.0.1:8000/api/contacts', data)
            .then(response =>{
                console.log(response);
                if(!response.data.success){
                    this.errors = response.data.errors
                } else {
                    this.name = '',
                    this.email = '',
                    this.message = ''
                }
                this.loading = false
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
<template>
    <div class="container">
        <h2 class="silver_color">Contacts</h2>
        <section class="contact-me py-5">

            <div class="alert alert-primary" role="alert" v-if="success">
                <strong>Message Received!</strong> We'll chat you back ASAP!
            </div>

            <form @submit.prevent="submitForm()">
                <div class="mb-3">
                  <label for="name" class="form-label silver_color">Name</label>
                  <input type="text"
                    class="form-control" v-model="name" name="name" id="name" aria-describedby="helpId" placeholder="Mario Rossi">
                  <small id="helpname" class="form-text silver_color">Type your full name</small>
                </div>

                <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
                    {{ error }}
                </p>

                <div class="mb-3">
                  <label for="email" class="form-label silver_color">Email</label>
                  <input type="text"
                    class="form-control" v-model="email" name="email" id="email" aria-describedby="helpId" placeholder="Mario@Rossi.com">
                  <small id="helpemail" class="form-text silver_color">Type your email</small>
                </div>

                <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-danger">
                    {{ error }}
                </p>

                <div class="mb-3">
                    <label for="message" class="form-label silver_color">Message</label>
                    <textarea class="form-control" name="message" id="message" rows="8" v-model="message">
                    </textarea>
                </div>

                <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-danger">
                    {{ error }}
                </p>

                <button type="submit" class="btn btn-primary" :disabled="loading">
                    <i class="fa-solid fa-rocket silver_color"></i>
                    Send
                </button>
            </form>
        </section>

    </div>
</template>
<style>

</style>
