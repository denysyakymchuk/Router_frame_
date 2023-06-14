<template>

  <div class="card">
    <h2>Wireless Settings</h2>
    <label class="card-label" for="ssid">Wi-Fi SSID:</label>
    <input class="card-input" type="text" id="ssid" name="ssid" value="Moja sieć"><br>

    <label class="card-label" for="channel">Wi-Fi Channel:</label>
    <select class="card-select" id="channel" name="channel">
      <option value="1">Channel 1</option>
      <option value="6" selected>Channel 6</option>
      <option value="11">Channel 11</option>
    </select><br>

    <label class="card-label" for="security">Security:</label>
    <select class="card-select" id="security" name="security">
      <option value="WEP">WEP</option>
      <option value="WPA">WPA</option>
      <option value="WPA2" selected>WPA2</option>
    </select><br>

    <label class="card-label" for="password">Wi-Fi Password:</label>
    <input class="card-input" type="password" id="password" name="password"><br>
  </div>
</template>

<script>
export default {
name: "Home"
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

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.card-input {
  padding: 5px;
  width: 200px;
  margin-bottom: 10px;
}

.card-select {
  padding: 5px;
  width: 200px;
  margin-bottom: 10px;
}

.card-submit {
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