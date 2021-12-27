<template>
    <div class="error-banner">
        <div class="alert alert-danger" role="alert">
            {{error}}
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        // name: 'Errors',
        props: ['msg'],
        data() {
            return {
                boolError: false
            }
        },
        computed: {
            ...mapGetters(['error']),
        }
    }

</script>

<style lang="scss">
.error-banner {
    position: relative;
    width: 45vw;
    margin: 3.75rem auto 0 auto;
}
</style>
