<template>
    <div class="Input">
        <span v-if="type !== 'text'" class="label">{{ label }}</span>
        <input @input="$emit('update:modelValue', $event.target.value)"
               :placeholder="placeholder"
               :type="type">
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Input",
    props: {
        modelValue: {
            type: String,
        },
        type: {
            type: String,
            default: "text"
        },
        label: {
            type: String,
            default: ""
        }
    },
    computed: {
        placeholder() {
            if (this.type === 'text') {
                return this.label
            }
            return ''
        }
    }
}
</script>

<style scoped>
.Input {
    border: 1px solid #DFE6E9;
    background: #fff;
    border-radius: .5rem;
    overflow: hidden;
    height: 53px;
    padding: 1px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}

input[type='text'] {
    height: 100%;
    display: block;
    width: 100%;
}

input[type='text']::placeholder {
    color: #e4e4e4;
    font-size: 1rem;
}

input[type='color'] {
    -webkit-appearance: none;
    border: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    padding: 0;
//margin: .5rem;
}

input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
}

input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
}

input {
    border: none;
    outline: 0;
    font-size: 1rem;
    color: #2c3e50;
}

input[type="text"]::placeholder {
    font-size: 1rem;
    letter-spacing: -0.01em;
    font-weight: 400;
    color: #A7ABAD;
}

input[type="checkbox"] {
    background-position: left center;
    border-radius: 2em;
    transition: background-position .15s ease-in-out;
    width: 3rem;
    float: left;
    vertical-align: top;
    background-repeat: no-repeat;
    background-size: contain;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    print-color-adjust: exact;
    height: 1.75rem;
    border: 1px solid #DFE6E9;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
}

input[type="checkbox"]:checked {
    background-color: #5C4DCF;
    border-color: #5C4DCF;
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.label {
    font-size: 1rem;
    letter-spacing: -0.01em;
    font-weight: 400;
    color: #A7ABAD;
    margin-right: .5rem;
}
</style>