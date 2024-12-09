<template>
  <div class="catalog-page">
    <header class="catalog-header">
      <nav class="catalog-nav">
        <ul class="catalog-nav-list">
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/about">О нас</router-link></li>
          <li><router-link to="/catalog" class="active">Каталог</router-link></li>
          <li><router-link to="/basket">Корзина</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="catalog-main">
      <h1 class="catalog-title">Страница каталога</h1>
      <div class="catalog-grid">
        <div v-for="item in items" :key="item.id" class="catalog-item">
          <img :src="item.image" :alt="item.title" class="catalog-item-image" />
          <h3 class="catalog-item-title">{{ item.title }}</h3>
          <p class="catalog-item-brand">{{ item.brand }}</p>
          <p class="catalog-item-price">{{ item.price }}</p>
          <button @click="addToCart(item)" class="buy-button">Купить</button>
        </div>
      </div>
      <button class="load-more-button">Показать еще</button>
    </main>
  </div>
  <Footer />
</template>

<script setup>
import itemImage from '@/assets/item1.jpg';
import { defineProps } from 'vue';
import Footer from '../components/Footer.vue';

const props = defineProps({
  cartItems: {
    type: Array,
    default: () => []
  },
  addToCart: {
    type: Function,
    required: true
  }
})

const items = [
  { id: 1, title: 'Подвеска', brand: 'Dolce & Gabbana', price: '175 000 ₽', image: itemImage },
  { id: 2, title: 'Серьги', brand: 'Chanel', price: '200 000 ₽', image: itemImage },
  { id: 3, title: 'Кольцо', brand: 'Gucci', price: '150 000 ₽', image: itemImage },
  { id: 4, title: 'Браслет', brand: 'Prada', price: '120 000 ₽', image: itemImage },
  { id: 5, title: 'Часы', brand: 'Rolex', price: '1 000 000 ₽', image: itemImage },
  { id: 6, title: 'Брошь', brand: 'Cartier', price: '300 000 ₽', image: itemImage },
]
</script>

<style scoped>
.catalog-page
{
  font-family: Arial, sans-serif;
  background: white;
}

.catalog-header
{
  background-color: #000;
  padding: 10px 0;
}

.catalog-nav
{
  display: flex;
  justify-content: center;
}

.catalog-nav-list
{
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.catalog-nav-list li a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}

.catalog-nav-list li a.active {
  font-weight: bold;
  text-decoration: underline;
}

.catalog-main {
  padding: 40px 20px;
  text-align: center;
}

.catalog-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 0 auto;
  max-width: 1200px;
}

.catalog-item {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.catalog-item:hover {
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}

.catalog-item-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 15px;
}

.catalog-item-title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 5px;
  color: #222;
}

.catalog-item-brand {
  color: #777;
  margin-bottom: 10px;
  font-size: 14px;
}

.catalog-item-price {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.buy-button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
}

.buy-button:hover {
  background-color: #333;
}

.load-more-button {
  margin: 30px auto 0;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: 0.3s ease;
}

.load-more-button:hover {
  background-color: #333;
}
</style>