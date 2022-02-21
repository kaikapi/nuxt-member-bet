<template>
  <v-app dark>
    <SideBar />
    <Navbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '~/components/NavBar.vue'
import SideBar from '~/components/SideBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    SideBar,
  },
}
</script>

<style scoped>
.theme--dark.v-application {
  background-image: url('assets/images/bg/bg-page-in.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-blend-mode: color-dodge;
}

.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: transparent;
  box-shadow: none;
}

.theme--dark.v-app-bar.v-toolbar.v-sheet.v-app-bar--is-scrolled {
  backdrop-filter: brightness(80%) blur(5px);
  box-shadow: 0 20px 30px -20px rgb(0 0 0 / 10%);
}
</style>