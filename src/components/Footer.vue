<template>
<div class="container-bottom">
    <div class="container body">
        <slot/>
    </div>
</div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Footer"
}
</script>

<style scoped>
.container-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}

.body {
    padding: 20px;
    background: #fff;
    display: flex;
    justify-content: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
}
</style>