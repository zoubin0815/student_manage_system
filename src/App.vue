<template>
  <div class="wrapper">
    <system-header></system-header>
    <system-menu></system-menu>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import systemHeader from "./components/systemHeader"
import systemMenu from "./components/systemMenu"

export default {
  components:{
    systemHeader,
    systemMenu
  }
}
</script>

<style>

</style>