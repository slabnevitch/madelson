<template>
	<main class="main">
      <section class="sect sect-catalog">
        <div class="wrapper">
          <div class="sect__header">
            <div class="sect__title">Каталог готовых<br>матрасов</div>
          </div>
          <div class="sect__body">
            <div class="sect__descr">
              <p>В нашем каталоге представлены матрасы, которые мы производим на своем заводе. Первоклассные матрасы из лучших и самых современных материалов. </p>
              <div class="btn">Открыть каталог</div>
            </div>
            <div class="sect__img"><img src="@/assets/img/01.jpg"></div>
          </div>
        </div>
      </section>
      <section class="sect sect-constr">
        <div class="wrapper">
          <div class="sect__body">
            <div class="sect__descr da-for-img">
              <div class="sect__title">Конструктор матрасов</div>
              <p>В нашем каталоге представлены матрасы, которые мы производим на своем заводе. Первоклассные матрасы из лучших и самых современных материалов. </p>
              <div class="btn">Открыть конструктор</div>
            </div>
            <div data-da=".da-for-img,1199,1" class="sect__img"><img src="@/assets/img/02.png"></div>
          </div>
        </div>
      </section>
      <section class="sect sect-seo">
        <div class="wrapper">
          <div class="sect__title">Тексты описаний <br>нужные для SEO</div>
          <div class="sect__descr">
            <p>В нашем каталоге представлены матрасы, которые мы производим на своем заводе. Первоклассные матрасы из лучших и самых современных материалов. </p>
          </div>
        </div>
      </section><img src="@/assets/img/big-rounds.svg" class="big-rounds">
    </main>
</template>

<script>
	import {
DynamicAdapt} from '@/functions/dynamic-adaptive/da(es6).js'

export default {

  name: 'Content',

  data () {
    return {

    }
  },
  created(){
		console.log('cr')

  },
  mounted(){
		console.log('m')
	 // setTimeout(() => {
		var da = new DynamicAdapt("max");
		console.log(da)
		da.init();

	// }, 100)

	}
}
</script>

<style lang="css" scoped>
</style>