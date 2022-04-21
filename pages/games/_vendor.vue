<template>
  <div class="content-wrapper">
    <v-img src="/images/banner/005.png"></v-img>
    <v-tabs
      v-model="tab"
      color="white"
      background-color="primary"
      show-arrows
      grow
    >
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-row class="py-5 px-3">
          <v-col
            v-for="(game, index) in games"
            :key="index"
            sm="3"
            cols="6"
            class="pa-5"
          >
            <v-img
              src="/images/banner/003.png"
              class="img-vendor"
              :alt="'Vendor-' + index"
            ></v-img>
            <p class="text-center text-h5">{{ game }}</p>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: 'Vendor',
  layout: 'default',
  middleware: 'auth',
  data() {
    return {
      games: ['game1', 'game2', 'game3', 'game4', 'game5'],
      tab: null,
      items: ['เกมทั้งหมด', 'สล็อต', 'ยิงปลา', 'บาคาร่า'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style scoped>
.img-vendor {
  border-radius: 0.5rem;
}
</style>