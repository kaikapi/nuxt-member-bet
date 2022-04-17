<template>
  <div class="content-wrapper">
    <h1 class="text-h6 text-center yellow--text text--darken-2 mb-8">
      เข้าสู่ระบบ
    </h1>
    <form class="form">
      <div class="content form">
        <label for="username">เบอร์โทรศัพท์มือถือ</label>
        <v-text-field
          v-model="username"
          :rules="rules_phone"
          type="tel"
          color="yellow darken-2"
          outlined
          prepend-inner-icon="mdi-phone-dial"
          :background-color="primaryDarken"
          hide-details="auto"
          class="my-3"
        ></v-text-field>
        <label for="password">รหัสผ่าน หรือเลขบัญชีธนาคาร</label>
        <v-text-field
          v-model="password"
          :rules="rules_password"
          type="password"
          color="yellow darken-2"
          outlined
          prepend-inner-icon="mdi-shield-key"
          :background-color="primaryDarken"
          hide-details="auto"
          class="my-3"
        ></v-text-field>
      </div>
      <div class="action-block mt-8">
        <a href="javascript:void(0)" class="button warning" @click="onSubmit">
          เข้าสู่ระบบ
        </a>
      </div>
    </form>
    <div class="content pa-0 mt-8">
      <p>
        <nuxt-link
          :to="'/contact?prefix=' + name"
          class="yellow--text text--darken-2"
          >ลืมรหัสผ่าน</nuxt-link
        >
      </p>
      <p>
        ยังไม่มีบัญชีผู้ใช้?&nbsp;
        <nuxt-link
          :to="'/register?prefix=' + name"
          class="yellow--text text--darken-2"
          >สมัครสมาชิก?</nuxt-link
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
    username: '0918654712',
    password: 'asas',
  }),
  head() {
    return {
      title: 'เข้าสู่ระบบ ' + this.name.toUpperCase(),
    }
  },
  computed: {
    ...mapState('prefix', ['name']),
    ...mapState('color', ['primaryDarken']),
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      const payload = {
        data: {
          username: this.username,
          password: this.password,
        },
      }
      try {
        await this.$auth.loginWith('local', payload)
        this.$toast.success('คุณได้เข้าสู่ระบบแล้ว')
      } catch (error) {
        this.error = error
      }
    },
  },
}
</script>

<style scoped>
h1 {
  /* font-size: 1.25rem; */
  font-weight: 500;
}

.content {
  max-width: 375px;
  backdrop-filter: unset;
}

a {
  font-size: 0.875rem;
}

.v-btn:hover {
  transform: translateY(-0.25rem);
}
</style>