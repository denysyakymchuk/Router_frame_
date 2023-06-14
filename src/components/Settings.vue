<template>
  <h1>Ustawienia routera</h1>

  <div class="section">
    <h2 class="section-title">Setting</h2>
    <div class="section-content">
      <div class="setting-group">
        <div class="setting-label">Ustawienia ogólne</div>
        <div class="setting-item">
          <label for="setting-username">Nazwa użytkownika:</label>
          <input type="text" id="setting-username" class="setting-input">
        </div>
        <div class="setting-item">
          <label for="setting-password">Hasło:</label>
          <input type="password" id="setting-password" class="setting-input">
        </div>
        <div class="setting-description">*Wpisz login i hasło dla uzyskania dostępu.</div>
      </div>

      <div class="setting-group">
        <div class="setting-label">Ustawienia sieci</div>
        <div class="setting-item">
          <label for="setting-ip">IP-address:</label>
          <input type="text" id="setting-ip" class="setting-input">
        </div>
        <div class="setting-item">
          <label for="setting-subnet">Maska podsieci:</label>
          <input type="text" id="setting-subnet" class="setting-input">
        </div>
        <div class="setting-item">
          <label for="setting-gateway">Gateway:</label>
          <input type="text" id="setting-gateway" class="setting-input">
        </div>
      </div>

      <button class="button">Zapisać</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1 {
  color: #333;
}

.section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.section-content {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.setting-group {
  margin-bottom: 20px;
}

.setting-label {
  font-weight: bold;
  color: #333;
}

.setting-item {
  margin-top: 10px;
}

.setting-input {
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

.setting-description {
  margin-top: 5px;
  color: #666;
}

.button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>