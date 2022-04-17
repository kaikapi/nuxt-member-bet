<template>
  <v-navigation-drawer
    v-model="isDrawer"
    color="indigo accent-3"
    app
    fixed
    right
    temporary
  >
    <v-list>
      <v-list-item-group
        v-model="group"
        color="black"
        active-class="amber darken-3"
      >
        <v-list-item :to="'/?prefix=' + name" router exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'หน้าหลัก'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="loggedIn"
          :to="'/profile?prefix=' + name"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'โปรไฟล์'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="loggedIn" :to="'/games?prefix=' + name" router exact>
          <v-list-item-action>
            <v-icon>mdi-nintendo-game-boy</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'เข้าเล่นเกม'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="loggedIn"
          :to="'/deposit?prefix=' + name"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-tray-arrow-down</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'ฝาก'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="loggedIn"
          :to="'/withdraw?prefix=' + name"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-tray-arrow-up</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'ถอน'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="loggedIn"
          :to="'/transactions?prefix=' + name"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-history</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'ประวัติ'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/promotions?prefix=' + name" router exact>
          <v-list-item-action>
            <v-icon>mdi-gift</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'โปรโมชั่น'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="loggedIn"
          :to="'/events?prefix=' + name"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-wallet-giftcard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'กิจกรรม'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/contact?prefix=' + name" router exact>
          <v-list-item-action>
            <v-icon>mdi-face-agent</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'ติดต่อ'" />
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-5"></v-divider>

        <v-list-item
          v-if="!loggedIn"
          :to="'/register?prefix=' + name"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'สมัครสมาชิก'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="loggedIn" @click="logout">
          <v-list-item-action>
            <v-icon>mdi-power</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'ล็อกเอ้าท์'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-else :to="'/login?prefix=' + name" router exact>
          <v-list-item-action>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'เข้าสู่ระบบ'" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'SideBar',
  data() {
    return {
      group: null,
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
    ...mapState('prefix', ['name']),
    ...mapState('navigation', ['isDrawerVisible']),

    ...mapGetters({
      navItems: 'navigation/navItems',
    }),
    isDrawer: {
      get() {
        return this.isDrawerVisible
      },
      set(drawer) {
        this.toggleDrawerVisible(drawer)
      },
    },
  },
  watch: {
    group() {
      this.toggleDrawerVisible(false)
    },
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
.theme--dark.v-application.slide-sidebar .v-navigation-drawer {
  transform: translateX(100%) !important;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.v-navigation-drawer .v-list:not(.v-select-list) {
  background-color: transparent !important;
}

.v-list {
  padding: 1.5rem 1rem 1.5rem 0rem;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  padding-left: 1.25rem;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled):hover {
  border-left-color: #4d67ff;
}

.v-list-item-group .v-list-item--active {
  border-radius: 0 1.5rem 1.5rem 0;
  border-left: 0.5rem solid #fff !important;
  color: #fff;
}

.v-list-item--link:before {
  border-radius: 0 1.5rem 1.5rem 0;
}

.theme--dark.v-list-item--active:hover::before,
.theme--dark.v-list-item--active::before {
  opacity: 0;
}
</style>