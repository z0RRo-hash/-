<template>
  <div class="about-page">
    <header class="about-header">
      <nav class="about-nav">
        <ul class="about-nav-list">
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/about" class="active">О нас</router-link></li>
          <li><router-link to="/catalog">Каталог</router-link></li>
          <li><router-link to="/basket">Корзина</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="about-main">
      <h1 class="about-title">О нас</h1>
      <p class="about-text">
        Добро пожаловать в наш интернет-магазин ювелирных изделий! Мы – команда профессионалов, которая с любовью и вниманием подходит к каждому клиенту. 
        Наша миссия – предоставить уникальные украшения, которые подчеркнут вашу индивидуальность и стиль.
      </p>
      <p class="about-text">
        В нашем ассортименте представлены эксклюзивные кольца, подвески, браслеты и серьги от ведущих мировых брендов, таких как Dolce & Gabbana, Cartier, Tiffany & Co. 
        Мы предлагаем только самые качественные изделия, выполненные из благородных металлов и украшенные драгоценными камнями.
      </p>
      <p class="about-text">
        Мы ценим каждого клиента и стремимся создать для вас лучший сервис. Наши специалисты готовы помочь с выбором подходящего украшения для любого случая – 
        будь то свадьба, день рождения или просто желание порадовать себя.
      </p>
      <p class="about-text">
        Спасибо, что выбрали нас. Мы уверены, что наши изделия принесут вам радость и станут прекрасным дополнением к вашему образу.
      </p>
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue';
</script>

<style scoped>
.about-page {
  font-family: Arial, sans-serif;
}

.about-header {
  background-color: #000;
  padding: 10px 0;
}

.about-nav {
  display: flex;
  justify-content: center;
}

.about-nav-list {
  list-style: none;
  display: flex;
  gap: 20px;
}

.about-nav-list li a {
  color: #fff;
  text-decoration: none;
}

.about-nav-list li a.active {
  font-weight: bold;
  text-decoration: underline;
}

.about-main {
  padding: 40px 20px;
  text-align: center;
}

.about-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-text {
  font-size: 18px;
  color: #555;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 20px;
}
</style>
