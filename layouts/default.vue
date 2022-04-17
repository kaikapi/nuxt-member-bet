<template>
  <v-app
    :class="{ 'slide-sidebar': isDrawerVisible }"
    :style="{ backgroundColor: primary }"
  >
    <SideBar />
    <Navbar />
    <v-main>
      <Nuxt />
      <Menu v-if="loggedIn" />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Navbar from '~/components/NavBar.vue'
import SideBar from '~/components/SideBar.vue'
import Menu from '~/components/Menu.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    SideBar,
    Menu,
  },
  data: () => ({ active: 4 }),
  computed: {
    ...mapState('color', ['primary']),
    ...mapState('auth', ['loggedIn']),
    ...mapState('prefix', ['name']),
    ...mapState('navigation', ['isDrawerVisible']),
  },
  mounted() {
    // this.changeIp()
    this.changePrefix(
      this.$route.query.prefix ? this.$route.query.prefix : this.name
    )
  },
  methods: {
    ...mapActions({
      changeIp: 'prefix/changeIp',
      changePrefix: 'prefix/changePrefix',
    }),
  },
}
</script>

<style scoped>
.v-application {
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.v-application.slide-sidebar {
  transform: translateX(-256px);
}

.v-btn > .v-btn__content .v-icon {
  font-size: 1.75rem;
}

.v-item-group.v-bottom-navigation .v-btn {
  padding: 0;
}

@media (min-width: 960px) {
  .v-main {
    padding-top: 0 !important;
  }
}
</style>