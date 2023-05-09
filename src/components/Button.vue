<template>
    <button class="Button" :type="type">
        <slot/>
    </button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Button",
    props: {
        type: {
            type: String,
            default: "button"
        }
    }
}
</script>

<style scoped>
.Button {
    display: inline-block;
    margin: 0;
    border: none;
    overflow: visible;
    font: inherit;
    color: inherit;
    text-transform: none;
    -webkit-appearance: none;
    border-radius: 0;
    box-sizing: border-box;
    padding: 0 30px;
    vertical-align: middle;
    font-size: 14px;
    line-height: 46px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: .1s ease-in-out;
    transition-property: color, background-color, border-color, opacity;
    background: #5C4DCF;
    color: #D3F844;
    border-radius: 6px;
}
.Button:disabled {
    opacity: .5;
}

</style>