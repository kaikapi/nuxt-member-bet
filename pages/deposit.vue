<template>
  <section id="deposit">
    <div class="content-wrapper pb-0">
      <h1 class="text-h6 text-center mb-5">ฝากเงิน</h1>
      <div class="content form d-grid pa-3 pa-md-5">
        <p class="text-center text-md-left">
          กรุณาโอนเงินจากบัญชีที่ท่านได้ลงทะเบียนไว้
          เข้าบัญชีที่กำหนดให้ด้านล่าง
        </p>
        <div class="content form">
          <div class="cover">
            <div
              class="bank-logo"
              :style="{ background: bankIcons['scb'].color }"
            >
              <v-img
                :src="bankIcons['scb'].image"
                :alt="bankIcons['scb'].nice_name"
              ></v-img>
            </div>
            <div class="bank-detail">
              <p>บัญชีที่ท่านลงทะเบียนไว้</p>
              <p>7522352121</p>
              <p>ธีรวุฒิ เชื้อตาพระ</p>
            </div>
          </div>
        </div>
        <v-icon class="my-5">mdi-arrow-down</v-icon>
        <div class="content form mb-3">
          <div class="cover">
            <div
              class="bank-logo"
              :style="{ background: bankIcons['scb'].color }"
            >
              <v-img
                :src="bankIcons['scb'].image"
                :alt="bankIcons['scb'].nice_name"
              ></v-img>
            </div>
            <div class="bank-detail">
              <p>บัญชี {{ name }}</p>
              <p>7522352121</p>
              <p>ธีรวุฒิ เชื้อตาพระ</p>
            </div>
          </div>
        </div>
        <p class="text-center">
          <v-icon color="warning">mdi-content-copy</v-icon>
          <a href="javascript:vod(0)" class="warning--text" @click="copy">
            คัดลอก
          </a>
        </p>
        <p class="text-center text-md-left note mt-10">
          * เมื่อโอนแล้วยอดเงินจะเข้าในระบบโดยอัตโนมัติ ภายใน 15 นาที
          ท่านสามารถเช็คยอดเงินได้ที่&nbsp;
          <nuxt-link :to="'/profile?prefix=' + name" class="warning--text"
            >หน้าโปรไฟล์</nuxt-link
          >
        </p>
      </div>
    </div>
  </section>
</template>
        
<script>
import { mapState } from 'vuex'

export default {
  name: 'Deposit',
  layout: 'default',
  middleware: 'auth',
  computed: {
    ...mapState('prefix', ['name']),
    ...mapState({ bankIcons: 'bankIcons' }),
  },
  methods: {
    copy() {
      this.$toast.success('คัดลอกแล้ว')
    },
  },
}
</script>
        
<style scoped>
.note {
  font-size: 85%;
}

.note a {
  text-decoration: none;
}
</style>