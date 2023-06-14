<template>

  <div class="section">
    <h2 class="section-title">Quick Setup</h2>
    <div class="section-content">
      <div class="setup-item">
        <div class="setup-label">Nazwa sieci (SSID):</div>
        <div class="setup-info">Moja Siec</div>
      </div>

      <div class="setup-item">
        <div class="setup-label">Kanał:</div>
        <div class="setup-info">6</div>
      </div>

      <div class="setup-item">
        <div class="setup-label">Bezpieczeństwo:</div>
        <div class="setup-info">WPA2</div>
      </div>

      <div class="setup-item">
        <div class="setup-label">Hasło:</div>
        <div class="setup-info">********</div>
      </div>

      <button class="button">Zapisz</button>
    </div>
  </div></template>

<script>
export default {
  name: "Quick"
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

.setup-item {
  margin-bottom: 10px;
}

.setup-label {
  font-weight: bold;
}

.setup-info {
  margin-left: 20px;
}
</style>