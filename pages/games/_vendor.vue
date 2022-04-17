<template>
  <div class="content-wrapper">
    <v-img src="/images/banner/005.png"></v-img>
    <v-tabs v-model="tab" color="white" background-color="primary" show-arrows grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-row class="py-4 px-2">
          <v-col
            v-for="(game, index) in games"
            :key="index"
            sm="4"
            cols="12"
            class="pa-1"
          >
            <v-img
              src="/images/banner/005.png"
              class="img-vendor"
              :alt="'Vendor-' + index"
            ></v-img>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
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