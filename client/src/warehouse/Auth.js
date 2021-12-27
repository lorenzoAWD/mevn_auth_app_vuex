import axios from 'axios'
import router from '../router'
// import router from '../router'

const state = {
    token: localStorage.getItem("token") || '',
    user: {},
    status: '',
    error: null
}

const getters = {
    // isLoggedIn: state => {
    //     if(state.token){
    //         return true
    //     }
    //     else{
    //         return false
    //     }
    // }
    isLoggedIn: state => !!state.token,
    user: state => state.user,
    authState: state => state.status,
    error: state => state.error
}

const actions = {
    // login: () =>
    async login({commit}, user){
        try{
            commit('login_request')
            let res = await axios.post('/api/users/login', user)
            if(res.data.success){
                const token = res.data.token
                const user = res.data.user
                // console.log(token, user)
                localStorage.setItem("token", token)
                axios.defaults.headers.common['Authorization'] = token
                commit('login_success',{token, user})
                // console.log(res)
            }
            return res
        }
        catch(err){
            // console.log(err)
            commit('login_error', err)
        }
    },
    async register({commit}, user){
        try{
            commit('register_request')
            let res = await axios.post('/api/users/register', user)
            if(res.data.success !== undefined || res.data.success){
                commit('register_success')
                // console.log(res)
            }
            return res

        }
        catch(err){
            commit('register_error', err)
        }
    },
    async getProfile({commit},){
        commit('profile_request')
        let res = await axios.get('/api/users/profile')
        commit('user_profile', res.data.user)
        return res
    },
    logout({commit}){
        localStorage.removeItem("token")
        commit('logout_success')
        delete axios.defaults.headers.common['Authorization']
        router.push('/login')
        return
    }
}

const mutations = {
    login_request(state){
        state.status = 'loading'
        state.error = null
    },
    login_success(state, {token, user}){
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    login_error(state,err){
        // console.log(err.response.data.msg)
        state.error = err.response.data.msg
    },
    register_request(state){
        state.status = 'loading'
        state.error = null
    },
    register_success(state){
        state.status = 'success'
        state.error = null
    },
    register_error(state, err){
        state.error = err.response.data.msg
    },
    profile_request(state){
        state.status = 'loading'
    },
    user_profile(state, user){
        state.user = user
        console.log(state.user)
    },
    logout_success(state){
        state.token = ''
        state.user = ''
        state.status = ''
        state.error = null
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
