<script setup>
</script>

<template>
  <div class="not-found-container">
    <div class="card">
      <div class="error-code">404</div>

      <h1>Página no encontrada</h1>

      <p>
        Lo sentimos, la página que buscas no existe o fue movida a otra ubicación.
      </p>

      <a href="/" class="btn-home">
        🏠 Volver al inicio
      </a>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    135deg,
    #4f46e5 0%,
    #7c3aed 50%,
    #ec4899 100%
  );

  padding: 20px;
}

.card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.2);

  border-radius: 24px;
  padding: 50px 40px;

  text-align: center;
  max-width: 550px;
  width: 100%;

  color: white;

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 0 40px rgba(255, 255, 255, 0.1);
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 10px;

  background: linear-gradient(90deg, #fff, #ffd166);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1 {
  font-size: 2rem;
  margin-bottom: 15px;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 30px;
}

.btn-home {
  display: inline-block;

  padding: 14px 28px;
  border-radius: 12px;

  background: white;
  color: #4f46e5;

  text-decoration: none;
  font-weight: 700;

  transition: all 0.3s ease;
}

.btn-home:hover {
  transform: translateY(-4px) scale(1.05);

  box-shadow:
    0 10px 25px rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }

  h1 {
    font-size: 1.6rem;
  }

  .card {
    padding: 35px 25px;
  }
}
</style>