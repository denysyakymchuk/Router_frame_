<template>
  <h1>Ustawienia routera</h1>

  <form action="/save-settings" method="post">
    <h2>Ustawienia sieci</h2>
    <label for="ssid">SSID:</label>
    <input type="text" id="ssid" name="ssid" value="Moja sieć" required><br>

    <label for="password">Hasło:</label>
    <input type="password" id="password" name="password" required><br>

    <label for="ip">IP-address routera:</label>
    <input type="text" id="ip" name="ip" value="192.168.0.1" required><br>

    <label for="subnet">Maska podsieci:</label>
    <input type="text" id="subnet" name="subnet" value="255.255.255.0" required><br>

    <h2>Bezpeczenstwo</h2>
    <label for="firewall">Firewall:</label>
    <input type="checkbox" id="firewall" name="firewall" checked><br>

    <label for="vpn">Włączyć VPN:</label>
    <input type="checkbox" id="vpn" name="vpn"><br>

    <h2>Zapisać zmiany</h2>
    <input type="submit" value="Zapisać">
  </form>

  <h2>Network Status</h2>
  <p>Stan połączenia: <strong>Połączono</strong></p>
  <p>IP-address: <strong>192.168.0.1</strong></p>
  <p>MAC-address: <strong>00:11:22:33:44:55</strong></p>
</template>

<script>
export default {
  name: "Setting"
}
</script>

<style scoped>
hr {
  border: none;
  height: 1px;
  background-color: #333;
  margin: 20px 0;
}
<style>
 body {
   font-family: Arial, sans-serif;
   margin: 20px;
 }

h1 {
  color: #333;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  padding: 5px;
  width: 200px;
  margin-bottom: 10px;
}

input[type="checkbox"] {
  margin-bottom: 10px;
}

input[type="submit"] {
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