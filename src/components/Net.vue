<template>
  <form action="/save-settings" method="post">

    <h2>Bezpeczeństwo</h2>
    <label for="firewall">Włączyć firewall:</label>
    <input type="checkbox" id="firewall" name="firewall" checked><br><br>

    <label for="vpn">Włączyć VPN:</label>
    <input type="checkbox" id="vpn" name="vpn"><br><br>

    <h2>Zapisać zmiany</h2>
    <input type="submit" value="Zapisać">
  </form>

  <h2>Network Status</h2>
  <p>Stan połączenia: <strong>Podłaczaone</strong></p>
  <p>IP-address: <strong>192.168.0.1</strong></p>
  <p>MAC-address: <strong>00:11:22:33:44:55</strong></p>
</template>

<script>
export default {
  name: "Net"
}
</script>

<style scoped>

</style>