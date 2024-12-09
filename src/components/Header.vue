<template>
  <header class="custom-header" :style="currentBackgroundStyle">
    <nav class="custom-header-nav">
      <router-link to="/" class="custom-header-link">Главная</router-link>
      <a href="#" class="custom-header-link">О нас</a>
      <img src="@/assets/logo.png" alt="OJJO Logo" class="custom-header-logo" />
      <router-link to="/catalog" class="custom-header-link">Каталог</router-link>
      <router-link to="/basket" class="custom-header-link">Корзина</router-link>
    </nav>
    <div class="custom-header-content">
      <h1 class="custom-header-title">Долго, дорого, богато!</h1>
      <router-link to="/catalog">
        <button class="custom-header-button">Каталог изделий</button>
      </router-link>
    </div>

    <button class="slider-button slider-button-left" @click="prevBackground">&#10094;</button>
    <button class="slider-button slider-button-right" @click="nextBackground">&#10095;</button>

    <footer class="custom-footer">
      <div class="custom-footer-logos">
        <img
          src="@/assets/coco-footer-logo.svg"
          alt="COCO Fine Jewelry Logo"
          class="custom-footer-logo"
        />
        <img
          src="@/assets/coco-footer-logo.svg"
          alt="COCO Fine Jewelry Logo"
          class="custom-footer-logo"
        />
        <img
          src="@/assets/coco-footer-logo.svg"
          alt="COCO Fine Jewelry Logo"
          class="custom-footer-logo"
        />
        <img
          src="@/assets/coco-footer-logo.svg"
          alt="COCO Fine Jewelry Logo"
          class="custom-footer-logo"
        />
        <img
          src="@/assets/coco-footer-logo.svg"
          alt="COCO Fine Jewelry Logo"
          class="custom-footer-logo"
        />
        <img
          src="@/assets/coco-footer-logo.svg"
          alt="COCO Fine Jewelry Logo"
          class="custom-footer-logo"
        />
      </div>
    </footer>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';

import bg1 from '@/assets/background.jpg';
import bg2 from '@/assets/background2.jpg';

const backgrounds = [bg1, bg2] 

const currentIndex = ref(0)

const currentBackgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${backgrounds[currentIndex.value]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
})

function nextBackground() {
  currentIndex.value = (currentIndex.value + 1) % backgrounds.length
}

function prevBackground() {
  currentIndex.value = (currentIndex.value - 1 + backgrounds.length) % backgrounds.length
}
</script>

<style scoped>
.custom-header {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
}

.custom-header-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0);
}

.custom-header-link {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}

.custom-header-logo {
  height: 50px;
}

.custom-header-content {
  margin-bottom: 50px;
}

.custom-header-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
  padding-top: 300px;
}

.custom-header-button {
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: transparent;
  border: 2px solid white;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
}

.custom-header-button:hover {
  background: white;
  color: black;
}

.custom-footer {
  background: rgba(0, 0, 0, 0);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-footer-logos {
  display: flex;
  gap: 20px;
}

.custom-footer-logo {
  height: 50px;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s ease;
  user-select: none;
}

.slider-button:hover {
  background: rgba(0,0,0,0.7);
}

.slider-button-left {
  left: 30px;
}

.slider-button-right {
  right: 30px;
}
</style>