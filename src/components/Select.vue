<template>

    <div class="Select">
        <span class="label">{{ label }}</span>
        <select>
            <option value="1">Ежедневно</option>
            <option value="2">Ежемесячно</option>
            <option value="3">Ежегодно</option>
        </select>
    </div>

</template>

<script>
export default {
// eslint-disable-next-line vue/multi-word-component-names
    name: "Select",
    props: {
        label: {
            label: String,
            default: ""
        }
    }
}
</script>

<style scoped>
.Select {
    border: 1px solid #DFE6E9;
    background: #fff;
    border-radius: .5rem;
    overflow: hidden;
    height: 53px;
    padding: 1px 0 1px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}

select {
    max-width: 100%;
    border: 0 none;
    height: 100%;
    vertical-align: middle;
    outline: 0;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0 50px 0 10px;
    background: #fff url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.99998 0C8.2652 0 8.51955 0.105357 8.70709 0.292893C8.89463 0.48043 8.99998 0.734784 8.99998 1V12.586L13.292 8.292C13.385 8.19903 13.4953 8.12527 13.6168 8.07495C13.7383 8.02464 13.8685 7.99874 14 7.99874C14.1315 7.99874 14.2617 8.02464 14.3831 8.07495C14.5046 8.12527 14.615 8.19903 14.708 8.292C14.801 8.38498 14.8747 8.49535 14.925 8.61683C14.9753 8.73831 15.0012 8.86851 15.0012 9C15.0012 9.13149 14.9753 9.26169 14.925 9.38317C14.8747 9.50465 14.801 9.61503 14.708 9.708L8.70798 15.708C8.61509 15.8011 8.50474 15.875 8.38325 15.9254C8.26176 15.9758 8.13152 16.0018 7.99998 16.0018C7.86845 16.0018 7.7382 15.9758 7.61671 15.9254C7.49522 15.875 7.38487 15.8011 7.29198 15.708L1.29198 9.708C1.19901 9.61503 1.12525 9.50465 1.07493 9.38317C1.02462 9.26169 0.998718 9.13149 0.998718 9C0.998718 8.86851 1.02462 8.73831 1.07493 8.61683C1.12525 8.49535 1.19901 8.38498 1.29198 8.292C1.47975 8.10423 1.73443 7.99874 1.99998 7.99874C2.13147 7.99874 2.26167 8.02464 2.38315 8.07495C2.50463 8.12527 2.61501 8.19903 2.70798 8.292L6.99998 12.586V1C6.99998 0.734784 7.10534 0.48043 7.29287 0.292893C7.48041 0.105357 7.73477 0 7.99998 0Z' fill='%23DFE6E9'/%3E%3C/svg%3E%0A") no-repeat 85% 50%;

    letter-spacing: -0.01em;
    font-weight: 400;
    font-size: 16px;
    color: #2D3436;
}

.label {
    font-size: 1rem;
    letter-spacing: -0.01em;
    font-weight: 400;
    color: #A7ABAD;
    margin-right: .5rem;
}
</style>