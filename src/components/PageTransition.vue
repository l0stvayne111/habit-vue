<template>
    <transition name="page-transition" mode="out-in">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: "PageTransition"
}
</script>


<style>
.page-transition-enter-active,
.page-transition-leave-active {
    transition: opacity 0.5s;
}

.page-transition-enter,
.page-transition-leave-to {
    opacity: 0;
}
</style>