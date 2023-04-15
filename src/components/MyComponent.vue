<template>
  <div>
    <img class="logo" src="src/assets/Group9.png">
  </div>
  <div class="main">

    <div class="navigateField">
      <div class="navigation">
      <img src="src/assets/Group%2010.png">
      <img src="src/assets/Group%2011.png">
      <img src="src/assets/Group%2012.png">
      <img src="src/assets/Group%2013.png">
      <img src="src/assets/Group%2014.png">
    </div>
      <div class="frame">
        <div style="background-color: #a9a9a9; height: 50px; width: 100%;">
        <div class="topNavigation">
          <div style="display: flex;">
            <div class="topButtons">
              <p style="width: 175px">Quick setup</p>
              <p class="butSetting">Settings</p>
              <select class="buttonSdlOption">
                <option value="">English</option>
              </select>
            </div>
            <div style="display: flex; margin-left: 10%;">
              <img src="src/assets/Group%2016.png" width="33" height="44">
              <img src="src/assets/Group%2017.png" width="33" height="44" style="margin-top: 8px;">
              <img src="src/assets/Group%2018.png" width="33" height="44" style="margin-top: 10px; margin-left: 2px;">
            </div>
          </div>
        </div>
        </div>
        <img src="src/assets/Group%2020.png" class="mainImgFrame">
        <br>
        <img src="src/assets/Group%2021.png" class="secondImgFrame">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      msg: 'Hello'
    }
  }
}
</script>

<style scoped>

</style>