<template>
    <div class="form__wrapper">
        <h1>Login</h1>
        <!-- <Errors :msg="errorMessage" /> -->
        <form @submit.prevent="loginUser">
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
            <div class="submit__wrapper">

                <button type="submit" class="btn-submit btn btn-primary">Submit</button>
                <router-link to="/register">Need an account?</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
// import Errors from '@/components/Errors'
export default {
    data(){
        return {
            username: "",
            password: "",
            errorMessage: ""

        }
    },
    components:{
        // Errors
    },
    methods:{
        ...mapActions(['login']),
        loginUser() {
            let user = {
                username: this.username,
                password: this.password
            }
            this.login(user).then(res => {
                // console.log(res)
                if(res){
                    this.$router.push('/profile')
                }
            })
            .catch( err => {
                console.log(err)
                this.errorMessage = 'errore'
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
