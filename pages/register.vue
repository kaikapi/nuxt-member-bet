<template>
  <div class="content-wrapper">
    <h1 class="text-h6 text-center yellow--text text--darken-2 mb-8">
      สมัครสมาชิก
    </h1>
    <form class="form">
      <div class="content form">
        <label for="phone">เบอร์โทรศัพท์มือถือ</label>
        <v-text-field
          :rules="rules_phone"
          type="tel"
          outlined
          color="yellow darken-2"
          prepend-inner-icon="mdi-phone-dial"
          :background-color="primaryDarken"
          hide-details="auto"
          class="my-3"
        ></v-text-field>
        <label for="password">รหัสผ่าน</label>
        <v-text-field
          :rules="rules_password"
          type="password"
          outlined
          color="yellow darken-2"
          prepend-inner-icon="mdi-shield-key"
          :background-color="primaryDarken"
          hide-details="auto"
          class="my-3"
        ></v-text-field>
        <label for="">แหล่งที่มา</label>
        <v-select
          :items="items"
          color="yellow darken-2"
          prepend-inner-icon="mdi-account-voice"
          :background-color="primaryDarken"
          menu-props="auto"
          hide-details="auto"
          outlined
          class="my-3"
        ></v-select>
      </div>
      <div class="action-block mt-8">
        <a href="javascript:void(0)" class="button warning"> สมัครสมาชิก </a>
      </div>
    </form>
    <div class="content action pa-0 mt-8">
      <p>
        มีบัญชีผู้ใช้แล้ว?&nbsp;
        <nuxt-link
          :to="'/login?prefix=' + name"
          class="yellow--text text--darken-2"
          >เข้าสู่ระบบ?</nuxt-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'default',
  middleware: 'isLoggedIn',
  data: () => ({
    phone: '',
    rules_phone: [
      (value) => !!value || 'กรุณากรอก หมายเลขโทรศัพท์',
      (value) => (value || '').length <= 10 || 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
      (value) => {
        const pattern = /^[0-9]{10}$/
        return pattern.test(value) || 'หมายเลขโทรศัพท์ไม่ถูกต้อง'
      },
    ],
    rules_password: [
      (value) => !!value || 'กรุณากรอก รหัสผ่าน หรือเลขบัญชีธนาคาร',
      (value) =>
        (value || '').length >= 6 || 'รหัสผ่าน หรือเลขบัญชีธนาคารไม่ถูกต้อง',
    ],
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    step: 1,
  }),
  head() {
    return {
      title: 'สมัครสมาชิก ' + this.name.toUpperCase(),
    }
  },
  computed: {
    ...mapState('prefix', ['name']),
    ...mapState('color', ['primaryDarken']),
  },
}
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  font-weight: 500;
}

.form {
  max-width: 400px;
  margin: 0 auto;
}

.content.action {
  max-width: 400px;
  backdrop-filter: unset;
}

a {
  font-size: 0.875rem;
}

.v-btn:hover {
  transform: translateY(-0.25rem);
}
</style>