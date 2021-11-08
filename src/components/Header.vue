<template>
	<header class="header" :class="{opened: menuOpen}">
      <div class="mobile-menu" :class="{opened: menuOpen}">
        <ul class="mobile-menu__list">
          <li class="mobile-menu__item"><a href="" class="mobile-menu__link">Каталог готовых матрасов</a></li>
          <li class="mobile-menu__item"><a href="" class="mobile-menu__link">Конструктор матрасов</a></li>
          <li class="mobile-menu__item"><a href="" class="mobile-menu__link">Доставка и гарантия</a></li>
          <li class="mobile-menu__item"><a href="" class="mobile-menu__link">Модели пользователей</a></li>
          <li class="mobile-menu__item"><a href="" class="mobile-menu__link">Контакты</a></li>
        </ul>
      </div>
      <div class="wrapper">
        <div class="header__left">
          <div class="toggle-mnu" @click="menuOpen = !menuOpen"
          	:class="{on: menuOpen}"><span></span></div>
          	<a href="#" class="header__logo"><img src="@/assets/img/logo.svg"></a>
          <ul class="header__menu menu-header">
            <li class="menu-header__item"><a href="" class="menu-header__link">Доставка и гарантия</a></li>
            <li class="menu-header__item"><a href="" class="menu-header__link">Модели пользователей</a></li>
            <li class="menu-header__item"><a href="" class="menu-header__link">Контакты</a></li>
          </ul>
        </div>
        <div class="header__right">
          <ul class="header__icons icons-header">
            <li class="icons-header__item"><a href="" class="icons-header__link"><img src="@/assets/img/icons-svg/account.svg"></a></li>
            <li class="icons-header__item"><a href="" class="icons-header__link"><img src="@/assets/img/icons-svg/cart.svg"></a></li>
            <li class="icons-header__item"><a href="" class="icons-header__link"><img src="@/assets/img/icons-svg/favorites.svg"></a></li>
            <li class="icons-header__item icons-header__item--phone"><a href="tel:+78009563532" class="icons-header__link header__phone">
                <div class="phone-icon"><img src="@/assets/img/icons-svg/phone.svg"></div><span>+ 7 800 956 35 32</span></a></li>
          </ul>
        </div>
      </div>
    </header>
</template>

<script>
export default {

  name: 'Header',

  data () {
    return {
    	menuOpen: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>