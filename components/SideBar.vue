<template>
  <v-navigation-drawer
    v-model="isDrawerVisible"
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
        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SideBar',
  data() {
    return {
      group: null,
    }
  },
  computed: {
    ...mapGetters({
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
  watch: {
    group() {
      this.toggleDrawerVisible(false)
    },
  },
  methods: {
    ...mapActions({
      toggleDrawerVisible: 'navigation/toggleDrawerVisible',
    }),
  },
}
</script>

<style scoped>
.v-navigation-drawer .v-list:not(.v-select-list) {
  background-color: transparent;
}

.v-list {
  padding: 1.5rem 1rem 1.5rem 0rem;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  border-left: 0.5rem solid transparent;
}

.v-list-item-group .v-list-item--active {
  border-radius: 0 1.5rem 1.5rem 0;
  border-left: 0.5rem solid #fff !important;
  color: #fff;
}

.theme--dark.v-list-item--active:hover::before,
.theme--dark.v-list-item--active::before {
  opacity: 0;
}
</style>