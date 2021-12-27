<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">MEVN App</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item" v-if="!isLoggedIn">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item" v-if="!isLoggedIn">
                            <router-link class="nav-link" to="/register">Register</router-link>
                        </li>
                        <li class="nav-item" v-if="isLoggedIn">
                            <router-link class="nav-link" to="/profile">Profile</router-link>
                        </li>
                        <li class="nav-item" v-if="isLoggedIn">
                            <a @click.prevent="logoutUser" class="nav-link">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        ...mapActions(['logout']),
        logoutUser(){
            this.logout()
            // console.log(this.isLoggedIn)
            //!Non so perchè, ma il redirect verso la Login Page lo fa dal file Auth.js (forse perchè essendo globale, magari il logout può essere eventualmente implementato anche in altri componenti, non solo la Navbar)
            // this.$router.push('/login')
        }
    }

};
</script>

<style lang="scss">
</style>
