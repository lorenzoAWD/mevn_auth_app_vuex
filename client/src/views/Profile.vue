<template>
    <div>
        <h1>Profile</h1>
        <div class="card">
            <ol class="list-group list-group-numbered">
                <li class="list-group-item">Username: {{user.username}}</li>
                <li class="list-group-item">Email: {{user.email}}</li>
            </ol>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return{
            username: '',
            email:''

        }
    },
    computed:{
        ...mapGetters(['user'])
    },
    methods:{
        ...mapActions(['getProfile']),
        // userProfile(){
        //     this.getProfile().then(res => {
        //         this.username = res.data.user.username,
        //         this.email = res.data.user.email
        //     })
        // }
    },
    mounted(){
        // this.userProfile()
        this.getProfile()
    }
};
</script>

<style lang="scss">
</style>
