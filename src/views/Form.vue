<template>
    <div class="container">
        <header class="header">
            <div class="header__container">
                <span class="header__logo">
                    Логотип
                </span>
                <button @click="toHome()" class="header__button">
                    Главная
                </button>
            </div>
        </header>
        <div class="leftLine"></div>
        <div class="rightLine"></div>
        <div class="bottomLine"></div>
        <main class="content">
          <div class="content__form">
            <h1>
              Lorem ipsum dolor
            </h1>
            <input v-model="info.phoneNumber" class="content__form__input" placeholder="Ваш телефон*" type="tel" name="phone">
            <button @click="sendForm()" class="content__form__button">
              Отправить
            </button>
            <span class="error" v-show="error">
              Заполните, пожалуйста, все поля
            </span>
            <div @click="checked = !checked" class="content__form__checkbox">
              <div class="box-container">
                <svg v-if="checked" width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0692308 2.72157C0.0230769 2.67541 0 2.60618 0 2.56003C0 2.51387 0.0230769 2.44464 0.0692308 2.39849L0.392308 2.07541C0.484615 1.98311 0.623077 1.98311 0.715385 2.07541L0.738462 2.09849L2.00769 3.46003C2.05385 3.50618 2.12308 3.50618 2.16923 3.46003L5.26154 0.252336H5.28462C5.37692 0.160029 5.51538 0.160029 5.60769 0.252336L5.93077 0.575413C6.02308 0.667721 6.02308 0.806182 5.93077 0.89849L2.23846 4.72926C2.19231 4.77541 2.14615 4.79849 2.07692 4.79849C2.00769 4.79849 1.96154 4.77541 1.91538 4.72926L0.115385 2.7908L0.0692308 2.72157Z" fill="#C78555"/>
                </svg>
              </div>
              <span class="label">
                Я принимаю условия
              </span>
            </div>
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
import Inputmask from 'inputmask';

export default {
  name: 'Form',
  data() {
    return {
      checked: false,
      error: false,
      info: {
        phoneNumber: '',
      },
    }
  },
  methods: {
    toHome() {
      return this.$router.push({ name: 'about' });
    },
    phoneMask() {
      var elem = document.querySelector('.content__form__input');
      var im = new Inputmask("+9(999)999-99-99");
      im.mask(elem);
    },
    sendForm() {
      if (!this.checked || this.info.phoneNumber[15] === '_') {
        this.error = true;
      } else {
        this.error = false;
        fetch('http://localhost:8080/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(this.info),
        })
      }

    }
  },
  mounted () {
    this.phoneMask();
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/form'

</style>
