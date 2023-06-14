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
          <div class="flex">
            <div class="topButtons">
              <div class="quick">
              <router-link to="/quick" style="text-decoration: none;"><p style=" text-align: center; text-decoration: none; color: black;"  :class="{ 'clicked': isClicked }"
                                          @click="quickClick">Quick setup</p></router-link>
              </div>
              <div class="settings">
              <router-link to="/settings" style="text-decoration: none;"><p class="butSetting" style="text-decoration: none; color: black" :class="{ 'clicked': isClicked_set }"
                                             @click="settingClick">Settings</p></router-link>
              </div>

            </div>
            <div class="star">

              <select class="buttonSdlOption">
                <option value="">English</option>
            </select>
              <div class="btns">
                <img src="src/assets/Group%2016.png" width="33" height="44">
                <img src="src/assets/Group%2017.png" width="33" height="44" style="margin-top: 8px;">
                <img src="src/assets/Group%2018.png" width="33" height="44" style="margin-top: 10px; margin-left: 2px;">
              </div>
            </div>
          </div>
        </div>
          <div align="center">
            <router-view></router-view>
          </div>

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
      isClicked: true,
      isClicked_set: false,
    }
  },
  methods: {
    quickClick() {
      this.isClicked = true
      this.isClicked_set = false
    },
    settingClick() {
        this.isClicked_set = true;
        this.isClicked = false;
    }
  }
}
</script>

<style scoped>
.clicked {
  background-color: aliceblue;
  height: 50px;

}
</style>