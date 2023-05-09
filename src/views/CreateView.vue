<template>
    <div class="container">
        <Header :is-back-home="true">
            Новая привычка
        </Header>
        <Body>
        <div>
            <Input v-model="title" label="Название" type="text"/>
            <Select label="Частота"/>
            <Input v-model="color" label="Цвет" type="color"/>
            <Input label="Уведомлять" type="checkbox"/>
            <Input v-model="description" label="Описание" type="text"/>
        </div>
        </Body>
        <Footer>
            <Button :disabled="!isDisabled" @click="createHabit">
                Добавить привычку
            </Button>
        </Footer>
    </div>


</template>
<script>
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";
import Body from "@/components/Body.vue";


export default {
    name: "AboutView",
    components: {
        Input,
        Select,
        Header,
        Footer,
        Button,
        Body
    },
    data() {
        return {
            title: '',
            color: '#000',
            description: '',
            isDisabled: false
        }
    },
    methods: {
        createHabit() {
            const newHabbit = {
                id: Math.floor(Math.random() * 100),
                days: [false, false, false, false, false, false, false],
                color: this.color,
                title: this.title,
                description: this.description

            };
            this.$root.addHabit(newHabbit);
            this.$router.push('/home')
        },
        // isDisabled() {
        //     return Boolean(this.title) || Boolean(this.color) || Boolean(this.description)
        // }
    },
    watch: {
        title() {
            this.isDisabled = Boolean(this.title) && Boolean(this.color) && Boolean(this.description)
        },
        color() {
            this.isDisabled = Boolean(this.title) && Boolean(this.color) && Boolean(this.description)
        },
        description() {
            this.isDisabled = Boolean(this.title) && Boolean(this.color) && Boolean(this.description)
        }
    },
    mounted() {
        document.body.style.backgroundColor = '#fafafa'
    }

}
</script>

<style scoped>
.link {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
}
</style>

