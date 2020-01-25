<template>
    <div class="container">
        <header class="header">
            <div class="header__container">
                <span class="header__logo">
                    Логотип
                </span>
                <button @click="toForm()" class="header__button">
                    Форма
                </button>
            </div>
        </header>
        <div class="leftLink">
            <a href="#files">
                Файлы
            </a>
        </div>
        <div class="rightLink">
            <a href="#location">
                Местоположение
            </a>
        </div>
        <div class="bottomLine"></div>
        <main class="content">
            <div class="content__intro">
                <h1>
                    Lorem ipsum dolor, consectetur adipiscing elit
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div class="content__cards">
                <h1>
                    Lorem ipsum dolor sit
                </h1>
                <div class="content__cards__items">
                    <div class="card" v-for="n in 12" :key="n">
                        <h3>
                            {{ getCardTitle() }}
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </p>
                    </div>
                </div>
            </div>
            <a id="location"></a>
            <div class="content__location">
                <h1>
                    Местоположение
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
                <div id="map" class="content__location__map"></div>
            </div>
            <a id="files"></a>
            <div class="content__files">
                <h1>
                    Файлы
                </h1>
                <FileList/>
            </div>
            <div class="content__outro">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
            </div>
        </main>
    </div>
</template>

<script>
import FileList from '../components/FileList.vue';

export default {
    name: 'About',
    components: {
        FileList,
    },
    data() {
        return {
            titles: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor',
                'Lorem ipsum',
            ],
        };
    },
    methods: {
        getCardTitle() {
            return this.titles[Math.floor(Math.random() * this.titles.length)];
        },
        toForm() {
            return this.$router.push({ name: 'form' });
        },
    },
    created() {
        ymaps.ready(() => {
            const myMap = new ymaps.Map('map', {
                coordinates: [55.75399400, 37.62209300],
                center: [59.92684110, 30.34467590],
                zoom: 16,
            });
            const placeMark =  new ymaps.Placemark([59.92662143, 30.34425143], {
                balloonContentHeader: '<a href="https://alertgroup.ru/">Наш сайт</a>',
                balloonContentBody: '<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span>',
                balloonContentFooter: '<a href="mailto:info@alertgroup.ru">Напишите нам!</a>'
            });
            myMap.geoObjects.add(placeMark);
        });
    },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/about';

</style>
