<template>
  <ul>
    <li>
      <nuxt-link :to="'/profile?prefix=' + name">
        <v-icon>mdi-account</v-icon>
        โปรไฟล์
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/deposit?prefix=' + name">
        <v-icon>mdi-tray-arrow-down</v-icon>
        ฝาก
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/withdraw?prefix=' + name">
        <v-icon>mdi-tray-arrow-up</v-icon>
        ถอน
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/transactions?prefix=' + name">
        <v-icon>mdi-history</v-icon>
        ประวัติ
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/games?prefix=' + name">
        <v-icon>mdi-nintendo-game-boy</v-icon>
        เข้าเล่นเกม
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/affiliate?prefix=' + name">
        <v-icon>mdi-human-greeting-proximity</v-icon>
        ชวนเพื่อน
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/promotions?prefix=' + name">
        <v-icon>mdi-gift</v-icon>
        โปรโมชั่น
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/contact?prefix=' + name">
        <v-icon>mdi-face-agent</v-icon>
        ติดต่อ
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/events?prefix=' + name">
        <v-icon>mdi-wallet-giftcard</v-icon>
        กิจกรรม
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapState('prefix', ['name']),
  },
  methods: {
    logout() {
      try {
        this.$auth.logout()
      } catch (error) {}
    },
  },
}
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 1rem 0 0 0;
  gap: 1rem;
  max-width: 640px;
  margin: 20px auto;
  border-top: 1px solid #3e54d3;
  box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 8%);
}

ul,
li {
  list-style: none;
  text-align: center;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 86px;
  border-radius: 5px;
  padding: 5px;
  color: #fff !important;
  font-weight: 400;
  transition: all 0.15s ease-in-out;
}

a.nuxt-link-active {
  background-color: #3e54d3;
  box-shadow: inset 0 1px 6px rgb(0 0 0 / 10%), 0 1px 0 hsl(0deg 0% 100% / 8%);
}
</style>