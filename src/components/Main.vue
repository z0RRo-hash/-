<template>
  <main class="main-content">
    <section class="events-section">
      <h2 class="events-subtitle">К мероприятиям</h2>
      <h3 class="events-title">Настоящая красота здесь!</h3>
      <div class="events-grid">
        <div class="event-item">
          <img src="@/assets/rings.jpg" alt="Кольца" class="event-image" />
        </div>
        <div class="event-item">
          <img src="@/assets/earrings.jpg" alt="Серьги" class="event-image" />
        </div>
        <div class="event-item">
          <img src="@/assets/pendants.jpg" alt="Подвески" class="event-image" />
        </div>
        <div class="event-item">
          <img src="@/assets/cufflinks.jpg" alt="Запонки" class="event-image" />
        </div>
        <div class="event-item">
          <img src="@/assets/bracelets.jpg" alt="Браслеты" class="event-image" />
        </div>
        <div class="event-item">
          <img src="@/assets/watches.jpg" alt="Часы" class="event-image" />
        </div>
      </div>
    </section>

    <section class="articles-section">
      <h2 class="articles-title">Полезные статьи</h2>
      <h3 class="articles-subtitle">Лучшие советы по подбору дорогих подарков</h3>
      <div class="articles-grid">
        <div class="article-item">
          <img src="@/assets/article1.jpg" alt="Как выбрать кольцо для своей будущей жены" class="article-image" />
        </div>
        <div class="article-item">
          <img src="@/assets/article2.jpg" alt="Запонки для мужчин: 7 ключевых правил покупки аксессуара" class="article-image" />
        </div>
        <div class="article-item">
          <img src="@/assets/article3.jpg" alt="Как выбрать обручальные кольца молодоженам" class="article-image" />
        </div>
      </div>
    </section>

    <section class="social-section">
      <h2 class="social-hashtag">#ojjo_jewelry</h2>
      <h3 class="social-title">Мы в социальных сетях</h3>
      <div class="social-grid">
        <div class="social-item">
          <img src="@/assets/social1.jpg" alt="Social Media 1" class="social-image" />
        </div>
        <div class="social-item">
          <img src="@/assets/social2.jpg" alt="Social Media 2" class="social-image" />
        </div>
        <div class="social-item">
          <img src="@/assets/social3.jpg" alt="Social Media 3" class="social-image" />
        </div>
        <div class="social-item">
          <img src="@/assets/social4.jpg" alt="Social Media 4" class="social-image" />
        </div>
        <div class="social-item">
          <img src="@/assets/social5.jpg" alt="Social Media 5" class="social-image" />
        </div>
        <div class="social-item">
          <img src="@/assets/social6.jpg" alt="Social Media 6" class="social-image" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main-content {
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

.events-section {
  margin-bottom: 80px;
  margin-top: 25px;
}

.events-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.events-subtitle {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
  
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.event-item {
  text-align: center;
}

.event-image {
  width: 100%;
  height: auto;
}

.articles-section {
  margin-bottom: 80px;
}

.articles-title {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
}

.articles-subtitle {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.article-item {
  text-align: center;
}

.article-image {
  width: 100%;
  height: auto;
}

.social-section {
  margin-bottom: 50px;
}

.social-hashtag {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
}

.social-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 0;
  max-width: 900px;
  margin: 0 auto;
}

.social-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.social-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
