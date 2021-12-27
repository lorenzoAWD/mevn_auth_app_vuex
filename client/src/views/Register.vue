<template>
    <div class="form__wrapper">
        <h1>Register</h1>
        <form @submit.prevent="registerUser">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Username</label
                >
                <input
                    type="username"
                    class="form-control username"
                    for="username"
                    id="username"
                    v-model="username"
                    placeholder="Username"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Name</label
                >
                <input
                    type="name"
                    class="form-control name"
                    for="name"
                    id="name"
                    v-model="name"
                    placeholder="Name"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Email</label
                >
                <input
                    type="email"
                    class="form-control email"
                    for="email"
                    id="email"
                    v-model="email"
                    placeholder="Email"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                >

                <input
                    type="password"
                    class="form-control password"
                    for="password"
                    id="password"
                    v-model="password"
                    placeholder="Password"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                    >Confirm Password</label
                >

                <input
                    type="password"
                    class="form-control confirm_password"
                    for="confirm_password"
                    id="confirm_password"
                    v-model="confirm_password"
                    placeholder="Confiirm Password"
                />
            </div>
            <div class="submit__wrapper">

                <button type="submit" class="btn-submit btn btn-primary">Submit</button>
                <router-link to="/login">Already registered?</router-link>
            </div>
        </form>
    </div>
</template>


<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            name:"",
            username: "",
            email: "",
            password: "",
            confirm_password: "",


        }
    },
    methods:{
        ...mapActions(['register']),
        registerUser() {
            let user = {
                name: this.name,
                username: this.username,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password,
            }
            this.register(user).then( res => {
                console.log(res)
                if(res.data.success){
                    this.$router.push('/login')
                }
            }).catch(err => {
                console.log(`Errore di registrazione: ${err}`)
            })

        }
    }
};
</script>

<style lang="scss">
.form__wrapper{
    position: relative;
    width: 45vw;
    margin:3.75rem auto 0 auto;
    .submit__wrapper{
        position: relative;
        display: flex;
        align-items:center;
        margin-top: 2.5rem;
        .btn-submit{
            margin-right: 1.25rem;
        }
    }
}
</style>
