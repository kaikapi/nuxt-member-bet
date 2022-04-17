<template>
  <v-app-bar app fixed>
    <nuxt-link :to="'/?prefix=' + name" class="v-toolbar__title white--text">
      {{ name }}
    </nuxt-link>
    <v-spacer />
    <v-app-bar-nav-icon
      class="d-md-none"
      @click.stop="toggleDrawerVisible(!isDrawerVisible)"
    />
    <ul>
      <li v-if="loggedIn">
        <nuxt-link :to="'/profile?prefix=' + name">โปรไฟล์</nuxt-link>
      </li>
      <li v-if="loggedIn">
        <nuxt-link :to="'/games?prefix=' + name">เข้าเล่นเกม</nuxt-link>
      </li>
      <li v-if="loggedIn">
        <nuxt-link :to="'/deposit?prefix=' + name">ฝาก</nuxt-link>
      </li>
      <li v-if="loggedIn">
        <nuxt-link :to="'/withdraw?prefix=' + name">ถอน</nuxt-link>
      </li>
      <li v-if="loggedIn">
        <nuxt-link :to="'/transactions?prefix=' + name">ประวัติ</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/promotions?prefix=' + name">โปรโมชั่น</nuxt-link>
      </li>
      <li v-if="loggedIn">
        <nuxt-link :to="'/events?prefix=' + name">กิจกรรม</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/contact?prefix=' + name">ติดต่อ</nuxt-link>
      </li>
      <li v-if="!loggedIn">
        <nuxt-link :to="'/register?prefix=' + name">สมัครสมาชิก</nuxt-link>
      </li>
      <li>
        <a v-if="loggedIn" href="javascript:void(0)" @click="logout"
          >ล็อกเอ้าท์</a
        >
        <nuxt-link v-else :to="'/login?prefix=' + name">เข้าสู่ระบบ</nuxt-link>
      </li>
    </ul>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState('auth', ['loggedIn']),
    ...mapState('prefix', ['name', 'imageLogo']),
    ...mapState('navigation', ['isDrawerVisible']),
  },
  methods: {
    ...mapActions({
      toggleDrawerVisible: 'navigation/toggleDrawerVisible',
    }),
    logout() {
      try {
        this.$auth.logout()
      } catch (error) {}
    },
  },
}
</script>

<style scoped>
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: #5067e7;
  transition: transform 0.6s cubic-bezier(0.34, 1.1, 0.75, 1);
}

.v-app-bar.v-toolbar.v-app-bar--is-scrolled {
  transform: translateY(-56px) !important;
  transition: transform 0.8s cubic-bezier(0.34, 1.1, 0.75, 1);
}

.v-toolbar__title {
  font-weight: 200;
  padding: 2rem;
  transform: translateX(-1rem);
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 1px;
}

.img-logo {
  max-width: 80px;
  transform: translate(1rem, 1rem);
}

ul {
  display: none;
  list-style: none;
}

ul li {
  padding: 0 1rem;
}

ul li a {
  color: #fff;
  opacity: 0.5;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
}

ul li a.nuxt-link-active,
ul li a:hover {
  opacity: 1;
}

@media (min-width: 960px) {
  .v-app-bar.v-app-bar--fixed {
    position: relative;
  }

  ul {
    display: flex;
  }

  .v-toolbar__title {
    font-size: 1.5rem;
  }
}
</style>