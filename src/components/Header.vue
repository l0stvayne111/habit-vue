<template>
    <header>
        <div v-if="isBackHome" @click="goBack" class="back">
            <svg width="32" height="32" viewBox="0 0 20 20">
                <polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"></polyline>
            </svg>
        </div>
        <div class="title">
            <slot/>
        </div>
    </header>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    props: {
        isBackHome: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        goBack() {
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
header {
    padding: 26px 0;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 21px;
    /* identical to box height, or 88% */
    text-align: center;
    letter-spacing: -0.01em;

    display: flex;
    align-items: center;


    position: relative;

    color: #6C5CE7;
}

.title {
    margin: 0 auto;
}
.back {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-start;
}
</style>