<template>
  <div>
    <img class="logo" src="src/assets/Group9.png">
  </div>
  <div class="main">

    <div class="navigateField">
      <div class="navigation">
        <router-link to="/status"><img src="src/assets/Group%2010.png"></router-link>
        <router-link to="/wireless"><img src="src/assets/Group%2011.png"></router-link>
        <router-link to="/net"><img src="src/assets/Group%2012.png"></router-link>
        <router-link to="/setting"><img src="src/assets/Group%2013.png"></router-link>
        <router-link to="/system"><img src="src/assets/Group%2014.png"></router-link>
      </div>
      <div class="frame">
        <div style="background-color: #a9a9a9; height: 50px; width: 100%;">
        <div class="topNavigation">
          <div style="display: flex;">
            <div class="topButtons">
              <router-link to="/quick"><p style="width: 175px; margin-right: -50px; text-decoration: none">Quick setup</p></router-link>
              <router-link to="/settings"><p class="butSetting" style=" text-decoration: none;">Settings</p></router-link>
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
          <router-view></router-view>

        </div>

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