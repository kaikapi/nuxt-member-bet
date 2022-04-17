<template>
  <section id="home">
    <div class="content">Home Index</div>
    <div class="content mt-5 pa-0">
      <template v-if="news">
        <v-carousel
          cycle
          height="auto"
          progress
          progress-color="red"
          hide-delimiter-background
          hide-delimiters
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(item, i) in news"
            :key="i"
            :src="item.image_url"
          ></v-carousel-item>
        </v-carousel>
      </template>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'default',
  computed: {
    ...mapState('main', ['customerMain']),
    ...mapGetters({
      banks: 'banks/get_bank',
      credit: 'main/credit',
      customer: 'main/customer',
      news: 'main/news',
      new_subs: 'main/new_subs',
      promotions: 'main/promotion_general',
    }),
  },
}
</script>
