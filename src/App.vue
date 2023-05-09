<template>
   <router-view></router-view>
</template>
<script>
export default {
    data() {
        return {
            habits: [

            ]
        }
    },
    methods: {
        addHabit(habit) {
            this.habits.push(habit)
        },
        deleteHabit(id) {
            this.habits = this.habits.filter(habit => habit.id !== id);
        },
        updateHabit(newHabit) {
            this.habits = this.habits.map(habit => habit.id === newHabit.id ? newHabit : habit)
        }
    }
}
</script>

<style>
.container {
    padding: 0 1rem;
    margin: 0 auto;
    max-width: 768px;
    width: 100%;
}

body {
    background: #FAFAFA;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}


nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>