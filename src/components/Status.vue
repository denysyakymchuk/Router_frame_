<template>
  <h1>Status</h1>

  <div class="status">
    <div class="status-item">
      <div class="status-label">Stan:</div>
      <div class="status-info">Włączony</div>
    </div>

    <div class="status-item">
      <div class="status-label">IP-address:</div>
      <div class="status-info">192.168.0.1</div>
    </div>

    <div class="status-item">
      <div class="status-label">Speed:</div>
      <div class="status-info">100 Мb/с</div>
    </div>

    <div class="status-item">
      <div class="status-label">Podłączone urządzenia:</div>
      <ul class="status-devices">
        <li class="status-device">Urządzenie 1</li>
        <li class="status-device">Urządzenie 2</li>
        <li class="status-device">Urządzenie 3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
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

.status {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
}

.status-heading {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.status-item {
  margin-bottom: 10px;
}

.status-label {
  font-weight: bold;
}

.status-info {
  margin-left: 20px;
}

.status-devices {
  margin-top: 10px;
}

.status-device {
  list-style: none;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
</style>