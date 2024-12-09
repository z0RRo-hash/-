<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-column">
        <h4 class="footer-title">ПОЛЕЗНЫЕ ССЫЛКИ</h4>
        <ul class="footer-links">
          <li><a href="#">Доставка</a></li>
          <li><a href="#">Оплата</a></li>
          <li><a href="#">Акции</a></li>
          <li><a href="#">Политика конфиденциальности</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">ОПЛАТА</h4>
        <p class="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
        <div class="footer-payment">
          <img src="@/assets/visa.png" alt="Visa" />
          <img src="@/assets/mastercard.png" alt="Mastercard" />
        </div>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">КОНТАКТЫ</h4>
        <ul class="footer-contacts">
          <li>
            <img src="@/assets/phone.png" alt="Телефон" />
            <span>8 (812) 234-56-55</span>
          </li>
          <li>
            <img src="@/assets/phone.png" alt="Телефон" />
            <span>8 (812) 234-56-55</span>
          </li>
          <li>
            <img src="@/assets/email.png" alt="Email" />
            <span>ojjo@ojjo.ru</span>
          </li>
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">СОЦИАЛЬНЫЕ СЕТИ</h4>
        <p class="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
        <div class="footer-socials">
          <img src="@/assets/youtube.png" alt="YouTube" />
          <img src="@/assets/vk.png" alt="VK" />
          <img src="@/assets/facebook.png" alt="Facebook" />
          <img src="@/assets/telegram.png" alt="Telegram" />
          <img src="@/assets/etsy.png" alt="Etsy" />
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2020 OJJO jewelry</span>
      <span><a href="#">Договор публичной офферты</a></span>
      <span><a href="#">Контрагентам</a></span>
      <span><a href="#">Сделано Figma.info</a></span>
    </div>
  </footer>
    
</template>

<style scoped>

.footer {
  background-color: white;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  text-align: left;
}

.footer-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.footer-links,
.footer-contacts {
  list-style: none;
  padding: 0;
}

.footer-links li,
.footer-contacts li {
  margin-bottom: 10px;
}

.footer-links a,
.footer-contacts span {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.footer-contacts img {
  vertical-align: middle;
  margin-right: 10px;
}

.footer-payment img,
.footer-socials img {
  width: 40px;
  height: auto;
  margin-right: 10px;
}

.footer-text {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}

.footer-bottom {
  border-top: 1px solid #ccc;
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #555;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-bottom span {
  margin: 5px 10px;
}

.footer-bottom a {
  text-decoration: none;
  color: #555;
}
</style>
