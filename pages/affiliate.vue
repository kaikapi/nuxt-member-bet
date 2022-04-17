<template>
  <div class="content-wrapper">
    <h1 class="text-h6 text-center mb-5">ชวนเพื่อนเล่น</h1>
    <div class="bonus affiliate mb-5">
      <div class="amount">
        <span class="label">คำแนะนำ</span>
        99
      </div>
      <div class="count-down">
        <span class="label">จะได้รับเงินใน</span>
        3 วัน 22:24:14
      </div>
    </div>
    <div class="content form text-center">
      <p>ลิงก์ชวนเพื่อน</p>
      <v-img
        src="/images/logo/qr-code.png"
        alt="Qr code affiliate"
        class="qr-code"
      ></v-img>
      <p>https://czbet.net/login?prefix=gclubking</p>
      <p>
        <v-icon color="warning">mdi-content-copy</v-icon>
        <a href="javascript:vod(0)" class="warning--text" @click="copy">
          คัดลอก
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Affiliate',
  layout: 'default',
  middleware: 'auth',
  methods: {
    copy() {
      this.$toast.success('คัดลอกแล้ว')
    },
  },
}
</script>

<style scoped>
.bonus {
  max-width: 640px;
  margin: 0 auto;
  padding-top: 20px;
  background-color: hsla(0, 0%, 100%, 0.2);
}

.qr-code {
  width: 140px;
  height: 140px;
  margin: 0 auto;
}
</style>