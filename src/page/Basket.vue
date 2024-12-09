<template>
  <div class="basket-page">
    <header class="basket-header">
      <nav class="basket-nav">
        <ul class="basket-nav-list">
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/about">О нас</router-link></li>
          <li><router-link to="/catalog">Каталог</router-link></li>
          <li><router-link to="/basket" class="active">Корзина</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="basket-main">
      <h1 class="basket-title">Ваша корзина</h1>
      <div v-if="groupedItems.length" class="basket-items-container">
        <ul class="basket-items-list">
          <li v-for="(gItem, index) in groupedItems" :key="index" class="basket-item">
            <div class="basket-item-info">
              <h3 class="basket-item-title">{{ gItem.item.title }}</h3>
              <p class="basket-item-brand">{{ gItem.item.brand }}</p>
              <p class="basket-item-price">{{ gItem.item.price }}</p>
              <p class="basket-item-quantity">Количество: {{ gItem.quantity }}</p>
            </div>
            <button class="remove-button" @click="removeFromCart(gItem.item)">Удалить</button>
          </li>
        </ul>
        <div class="basket-actions">
          <button class="checkout-button" @click="checkoutCart">Оформить заказ</button>
        </div>
      </div>
      <div v-else class="empty-message">
        <p>Ваша корзина пуста.</p>
        <router-link to="/catalog" class="go-catalog">Перейти в каталог</router-link>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import Footer from '../components/Footer.vue';

const props = defineProps({
  cartItems: {
    type: Array,
    default: () => []
  },
  removeFromCart: {
    type: Function,
    required: true
  },
  checkoutCart: {
    type: Function,
    required: true
  }
})

const groupedItems = computed(() => {
  const map = new Map()
  for (const item of props.cartItems) {
    const key = item.title
    if (!map.has(key)) {
      map.set(key, { item: item, quantity: 1 })
    } else {
      map.get(key).quantity++
    }
  }
  return Array.from(map.values())
})
</script>

<style scoped>
.basket-page {
  font-family: Arial, sans-serif;
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.basket-header {
  background-color: #000;
  padding: 10px 0;
}

.basket-nav {
  display: flex;
  justify-content: center;
}

.basket-nav-list {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.basket-nav-list li a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}

.basket-nav-list li a.active {
  font-weight: bold;
  text-decoration: underline;
}

.basket-main {
  flex: 1;
  padding: 40px 20px;
  text-align: center;
}

.basket-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
}

.empty-message {
  margin-top: 50px;
  font-size: 18px;
  color: #555;
}

.empty-message .go-catalog {
  display: inline-block;
  margin-top: 20px;
  background: #000;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.basket-items-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.basket-items-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.basket-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.basket-item-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.basket-item-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #222;
}

.basket-item-brand {
  font-size: 14px;
  color: #555;
  margin: 0;
}

.basket-item-price {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
}
.basket-item-quantity {
  font-size: 14px;
  color: #333;
  margin: 5px 0 0 0;
}

.remove-button {
  background: #c00;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
}

.remove-button:hover {
  background: #a00;
}

.basket-actions {
  margin-top: 30px;
  text-align: right;
}

.checkout-button {
  background: #000;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
}

.checkout-button:hover {
  background: #333;
}
</style>