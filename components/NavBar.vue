<template>
  <v-app-bar app fixed>
    <v-toolbar-title v-text="prefix" />
    <v-spacer />
    <v-app-bar-nav-icon
      class="d-sm-none"
      @click.stop="isDrawerVisible = !isDrawerVisible"
    />
    <v-btn
      :to="navItems[2].to"
      rounded
      large
      text
      class="d-none d-sm-inline-flex"
      >โปรโมชั่น
    </v-btn>
    <v-btn
      :to="navItems[3].to"
      rounded
      large
      text
      class="d-none d-sm-inline-flex"
      >ติดต่อพนักงาน
    </v-btn>
    <v-btn
      :to="navItems[0].to"
      color="indigo accent-3"
      rounded
      large
      class="d-none d-sm-inline-flex ms-3"
      >สมัครสมาชิก
    </v-btn>
    <v-btn
      :to="navItems[1].to"
      color="amber darken-3"
      elevation="8"
      rounded
      large
      class="d-none d-sm-inline-flex ms-3"
      >เข้าสู่ระบบ
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      prefix: 'partner/getPrefix',
      getDrawerVisible: 'navigation/getDrawerVisible',
      navItems: 'navigation/getNavItems',
    }),
    isDrawerVisible: {
      get() {
        return this.getDrawerVisible
      },
      set(drawer) {
        this.toggleDrawerVisible(drawer)
      },
    },
  },
  mounted() {
    this.changeIp()
    this.changePrefix(
      this.$route.query.prefix ? this.$route.query.prefix : this.prefix
    )
    this.changeNavTo()
  },
  methods: {
    ...mapActions({
      changeIp: 'partner/changeIp',
      changePrefix: 'partner/changePrefix',
      toggleDrawerVisible: 'navigation/toggleDrawerVisible',
      changeNavTo: 'navigation/changeNavTo',
    }),
  },
}
</script>

<style scoped>
.v-toolbar__title {
  font-weight: 200;
  padding: 2rem;
  transform: translateX(-2rem);
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #e60073;
}

@media (min-width: 960px) {
  .v-toolbar__title {
    font-size: 2rem;
  }
}
</style>