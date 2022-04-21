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
            <div class="vendor">
              <v-img
                src="/images/banner/003.png"
                class="img-vendor"
                :alt="'Vendor-' + index"
              ></v-img>
              <div class="vendor-bg">
                <p class="text-h5 mb-0">{{game}}</p>
                <small class="d-block yellow--text text--darken-2 my-5"
                  >ประเภทเกม
                </small>
                <nuxt-link :to="'/games/' + game" class="button warning"
                  >เล่นเกม</nuxt-link
                >
              </div>
            </div>
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
    items: ['เกมยอดนิยม', 'เกมใหม่ล่าสุด'],
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

.vendor {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  min-height: 200px;
}

.vendor .img-vendor {
  position: absolute;
  width: 16rem;
  height: auto;
  bottom: 0;
  right: 0;
  border-radius: 0.5rem;
  transition: width 0.3s ease-in-out;
}

.vendor .vendor-bg {
  width: 100%;
  min-height: 180px;
  background-color: #3f54d2;
  border-radius: 0.5rem;
  padding: 1rem;
}

.button:hover {
  transform: translateY(0);
}

@media (max-width: 600px) {
  .vendor .img-vendor {
    width: 10rem;
  }
}
</style>