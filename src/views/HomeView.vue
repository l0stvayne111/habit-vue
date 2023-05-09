<template>
    <div class="container">
        <Header>
            Привычки
        </Header>
        <Body>


        <div class="error" v-if="habits.length <= 0">
            <div>У вас нет привычек</div>
            <p>Создайте новую привычку чтобы начать отмечать дни</p>
        </div>

        <HabitCard
                :id="habit.id"
                v-for="habit in habits"
                :key="habit.id"
                :initialDays="habit.days"
                :color="habit.color"
                :title="habit.title"
                :description="habit.description"
                @delete="deleteHabit"
                @update="updateHabit"
        />

        </Body>
        <Footer>
            <Button>
                <router-link class="link" to="/create">Новая привычка</router-link>
            </Button>
        </Footer>
    </div>
</template>


<script>
// @ is an alias to /src

import HabitCard from "@/components/HabitCard.vue";
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Body from "@/components/Body.vue";

export default {
    name: 'HomeView',
    components: {
        Body,
        Footer,
        Header,
        Button,
        HabitCard
        // HelloWorld
    },
    computed: {
        habits() {
            return this.$root.habits
        }
    },
    methods: {
        deleteHabit(id) {
            this.$root.deleteHabit(id)
        },
        updateHabit(habit) {
            this.$root.updateHabit(habit)
        }
    },
    mounted() {
        document.body.style.backgroundColor = '#fafafa'
    }
}
</script>


<style scoped>


.error {
    text-align: center;
    margin-top: 3rem;
    font-size: 1.2rem;
    padding: 1.5rem;
    border: 1px solid #e4e4e4;
    border-radius: .5rem;
}

.error p {
    color: #A7ABAD;
    font-weight: 300;
    font-size: .9rem;
    margin-top: 6px;
}

.link {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
}
</style>


