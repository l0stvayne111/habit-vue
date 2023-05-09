<template>
    <div class="page">
        <div class="logo">
            <img src="../assets/logo.svg" alt="">
        </div>
        <div class="name">
            Habit
            <span>daily</span>
        </div>

        <Button @click="goHome">
            Живи проще!
        </Button>
    </div>
</template>

<script>

import Button from "@/components/Button.vue";

export default {
    name: "StartView",
    components: {Button},

    methods: {
        goHome() {
            this.$router.push('/home')
        }
    },
    mounted() {
        document.body.style.backgroundColor = '#D3F844'
    }
}
</script>

<style scoped>
.page {
    padding: 3rem 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.logo {
    width: 110px;
    height: 110px;
}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.name {
    font-weight: 800;
    font-size: 55px;
    line-height: .9;
    /* or 75% */
    text-align: center;
    letter-spacing: -0.01em;
    color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.name span {
    font-weight: 200;
}

/*.page button {*/
/*    background: #6C5CE7;*/
/*    color: #fff;*/
/*    display: inline-block;*/
/*}*/
</style>
