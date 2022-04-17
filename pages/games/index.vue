<template>
  <div class="content-wrapper">
    <v-tabs
      v-model="tab"
      show-arrows
      color="white"
      background-color="transparent"
      @change="filterVendor"
    >
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="mt-1 pa-2">
      <v-tab-item v-for="item in items" :key="item">
        <v-row>
          <v-col
            v-for="(game, index) in games"
            :key="index"
            sm="6"
            cols="12"
            class="pa-1"
          >
            <nuxt-link :to="'/games/' + game">
              <v-img
                src="/images/banner/005.png"
                class="img-vendor"
                :alt="'Vendor-' + index"
              ></v-img>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
        
<script>
export default {
  name: 'Games',
  layout: 'default',
  middleware: 'auth',
  data: () => ({
    games: ['game1', 'game2', 'game3', 'game4', 'game5'],
    tab: null,
    items: ['เกมยอดนิยม', 'เกมใหม่ล่าสุด', 'เกมโปรด'],
  }),
  methods: {
    filterVendor() {},
  },
}
</script>
        
<style scoped>
.v-tab:before,
.v-tab.v-tab--active {
  background-color: #3f54d2;
  border-radius: 0.5rem 0.5rem 0 0;
}

.img-vendor {
  border-radius: 0.5rem;
}
</style>