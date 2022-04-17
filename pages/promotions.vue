<template>
  <div class="content-wrapper">
    <h1 class="text-h6 text-center yellow--text text--darken-2 mb-8">
      โปรโมชั่นของเรา
    </h1>
    <v-row>
      <v-col
        v-for="(promotion, index) in promotions"
        :key="index"
        md="4"
        sm="6"
        cols="12"
        class="pa-4 pa-sm-3"
      >
        <v-card>
          <v-img
            class="white--text align-end"
            height="auto"
            :src="promotion.image_profile_path"
          >
          </v-img>
          <v-card-title class="amber--text pb-0">{{
            promotion.name
          }}</v-card-title>
          <v-card-text class="text--primary pb-4">
            <div>{{ promotion.detail }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  layout: 'default',
  head() {
    return {
      title: 'โปรโมชั่นของเรา ' + this.name.toUpperCase(),
    }
  },
  computed: {
    ...mapState('prefix', ['name']),
    ...mapState('promotion', ['promotions']),
  },
  mounted() {
    this.getPromotions()
  },
  methods: {
    ...mapActions({
      getPromotions: 'promotion/getPromotions',
    }),
  },
}
</script>

<style scoped>
</style>