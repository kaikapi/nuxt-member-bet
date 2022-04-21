<template>
  <div class="content-wrapper">
    <div class="content form">
      <div class="cover">
        <div class="bank-logo" :style="{ background: bankIcons['scb'].color }">
          <v-img
            :src="bankIcons['scb'].image"
            :alt="bankIcons['scb'].nice_name"
          ></v-img>
        </div>
        <!-- <div v-if="customer" class="bank-detail">
          <small class="opacity--text">{{
            bankIcons['scb'].official_name_thai
          }}</small>
          <p>7522352121</p>
          <p>{{ customer.full_name }}</p>
        </div> -->
      </div>
    </div>
    <div :class="{ collapse: isCollapsed }" class="summary mt-5">
      <div class="balance">
        <div class="amount">
          <span class="label">ยอดเงินทั้งหมด</span>
          99
        </div>
        <div class="arrow">
          <a href="javascript:void(0)" @click="toggleSummary">
            <v-icon color="primary" class="text-h4"
              >mdi-chevron-{{ isCollapsed ? 'down' : 'up' }}</v-icon
            >
          </a>
        </div>
      </div>
      <div class="bonus affiliate">
        <div class="amount">
          <span class="label">คำแนะนำ</span>
          99
        </div>
        <div class="count-down">
          <span class="label">จะได้รับเงินใน</span>
          3 วัน 22:24:14
        </div>
      </div>
      <div class="bonus cashback">
        <div class="amount">
          <span class="label">แคชแบ็ค</span>
          99
        </div>
        <div class="count-down">
          <span class="label">จะได้รับเงินใน</span>
          3 วัน 22:24:14
        </div>
      </div>
    </div>

    <div class="summary bonus">
      <div class="amount">
        <span class="label">กระเป๋าโบนัส</span>
        0
      </div>
    </div>

    <div class="summary bonus">
      <div class="amount">
        <span class="label">ฟรีเกม</span>
        0
      </div>
    </div>

    <div class="action-block">
      <nuxt-link :to="'/games?prefix=' + name" class="button warning">
        เข้าเล่นเกม
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Profile',
  layout: 'default',
  middleware: 'auth',
  data: () => ({
    isCollapsed: false,
  }),
  computed: {
    ...mapState('prefix', ['name']),
    ...mapState({ bankIcons: 'bankIcons' }),
    // ...mapState('main', ['customerMain']),
    ...mapGetters({
      // bankIcons: 'bankIcons',
      // credit: 'main/credit',
      // customer: 'main/customer',
      // news: 'main/news',
      // new_subs: 'main/new_subs',
      // promotions: 'main/promotion_general',
    }),
  },
  created() {
    setTimeout(() => this.toggleSummary(), 2000)
  },
  mounted() {
    // this.getCustomerMain()
  },
  methods: {
    ...mapActions({
      getCustomerMain: 'main/getCustomerMain',
    }),
    toggleSummary() {
      this.isCollapsed = !this.isCollapsed
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.content {
  max-width: 640px;
  margin: 0 auto;
  backdrop-filter: unset;
}
</style>