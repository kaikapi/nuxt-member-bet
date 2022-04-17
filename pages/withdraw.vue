<template>
  <section id="withdraw">
    <div class="content-wrapper">
      <h1 class="text-h6 text-center mb-5">ถอนเงิน</h1>
      <div class="content form">
        <p class="opacity--text">ถอนเงินเข้าบัญชีธนาคาร</p>
        <div class="cover">
          <div class="bank-logo" :style="{ background: banks['scb'].color }">
            <v-img
              :src="banks['scb'].image"
              :alt="banks['scb'].nice_name"
            ></v-img>
          </div>
          <div class="bank-detail">
            <small class="opacity--text">{{
              banks['scb'].official_name_thai
            }}</small>
            <p>7522352121</p>
            <p>ธีรวุฒิ เชื้อตาพระ</p>
          </div>
        </div>
      </div>
      <div class="content form mt-5">
        <p class="opacity--text">ยอดเงินที่ถอนได้</p>
        <p>
          <span class="font-weight-bold text-h4">100.0</span>
          <span class="font-weight-bold text-h5">฿</span>
        </p>
        <label for="">จำนวนเงินที่ต้องการถอน</label>
        <v-text-field
          v-model="amount"
          :rules="rules_phone"
          type="tel"
          color="yellow darken-2"
          :background-color="primaryDarken"
          outlined
          placeholder="0.0"
          class="mt-3"
        ></v-text-field>
        <small>* ถอนขั้นต่ำ 200 บาท</small>
        <div class="action-block">
          <v-btn
            type="submit"
            color="yellow darken-2"
            elevation="10"
            large
            rounded
            block
            :disabled="true"
            >ถอนเงิน</v-btn
          >
        </div>
      </div>
    </div>
  </section>
</template>
        
<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Withdraw',
  layout: 'default',
  middleware: 'auth',
  data: () => ({
    rules_amount: [
      (value) => !!value || 'กรุณากรอกจำนวนเงิน',
      // (value) => (value || '').length <= 10 || 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
      // (value) => {
      //   const pattern = /^[0-9]{10}$/
      //   return pattern.test(value) || 'หมายเลขโทรศัพท์ไม่ถูกต้อง'
      // },
    ],
    amount: null,
  }),
  computed: {
    ...mapState('prefix', ['name']),
    ...mapState('color', ['primaryDarken']),
    ...mapGetters({
      banks: 'banks/banks',
    }),
  },
  methods: {
    copy() {
      this.$toast.success('คัดลอกแล้ว')
    },
  },
}
</script>
        
<style scoped>
</style>