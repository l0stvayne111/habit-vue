<template>
    <div @click="onClickCard" class="habit-card" :style="{ '--color' : color }">
        <div class="row habit-card-container">
            <div class="title">
                {{ title }}
            </div>
            <div class="days">
                <div
                    class="day-container"
                    v-for="(item, index) in days" :key="index">
                    <span>{{ weekday[index] }}</span>
                    <div
                            :class="{active: item}"
                            @click.stop="onClickDay(index)"
                            class="day"/>
                </div>
            </div>
        </div>

        <div class="description" ref="description" :style="{ height: isOpen ? descriptionHeight + 'px' : 0 }">
            <div class="description-container">
                <div class="description-text">
                    {{ description }}
                </div>
                <button @click="deleteCard(id)" type="button">
                    Удалить
                </button>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: "HabitCard",
    props: {
        id: {
            id: Intl,
            default: 0
        },
        title: {
            title: String,
            default: ''
        },
        color: {
            color: String,
            default: '#6C5CE7'
        },
        initialDays: {
            initialDays: Array,
            default: [false, false, false, false, false, false, false]
        },
        description: {
            description: String,
            default: ""
        },
    },
    data() {
        return {
            days: [],
            isOpen: false,
            descriptionHeight: 0,
            weekday: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
        };
    },
    mounted() {
        this.days = this.initialDays.slice();
    },
    methods: {
        onClickDay(index) {
            this.days[index] = !this.days[index];
            this.$emit('update', {
                id: this.id,
                days: this.days,
                color: this.color,
                title: this.title,
                description: this.description
            })
        },
        onClickCard() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.$nextTick(() => {
                    this.descriptionHeight = this.$refs.description.scrollHeight;
                });
            } else {
                this.descriptionHeight = 0;
            }
        },
        deleteCard(cardId) {
            this.$emit('delete', cardId);
        }
    }
}
</script>

<style scoped>


.habit-card {
    border-radius: .5rem;
    border: 1px solid #DFE6E9;
    background: #fff;
    position: relative;
    min-height: 53px;
    margin-bottom: 16px;
}

.habit-card-container {
    height: 53px;
    padding: 0 20px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.description {
    width: 100%;
    flex-shrink: 0;
    overflow: hidden;
    transition: height 0.3s;
}

.description-container {
    padding: 10px 20px;

}

.description-container button {
    margin-top: 1rem;
    margin-left: auto;
    outline: 0;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    border: 1px solid var(--color);
    color: var(--color);
    font-size: .9rem;
    padding: 8px 15px;
    display: block;
}

.description-container button:active,
.description-container button:hover {
    color: #fff;
    background: var(--color);
}

.description-text {
    letter-spacing: -0.01em;
    font-size: .9rem;
    font-weight: 300;
    color: #A7ABAD;
}

.title {
    font-size: 1rem;
    color: #2D3436;
    margin-right: .5rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    letter-spacing: -0.01em;
}

.days {
    display: flex;
    align-items: center;
    margin-top: -12px;
}

.day {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    border-radius: 50%;
    border: 1px solid #2D3436;
    margin: 0 3px;
}

.day-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.day-container span {
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 3px;

}

.day.active {
    background: var(--color);
    border-color: var(--color);
}

.habit-card::before {
    content: '';
    position: absolute;
    left: -1px;
    top: -1px;
    bottom: -1px;
    background: var(--color);
    width: 7px;
    border-top-left-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
}
</style>