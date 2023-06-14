<template>
  <h1>Ustawienia routera</h1>

  <div class="section">
    <h2>System Tools</h2>
    <div class="section-content">
      <p><strong>Reboot:</strong> Click the button below to restart the router.</p>
      <button class="button">Reboot</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "System"
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
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

h2 {
  margin-top: 20px;
  color: #333;
}

p {
  margin-bottom: 10px;
}

strong {
  color: #333;
}
</style>