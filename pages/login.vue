<template>
  <section id="login">
    <v-img
      :src="require('~/assets/images/banner/003.png')"
      alt="images banner"
      class="img-banner"
    ></v-img>
    <div class="content-wrapper">
      <v-row>
        <v-col sm="5" class="pa-5 pa-sm-0 mx-auto">
          <div class="content pa-6">
            <h1 class="text-center mb-10">เข้าสู่ระบบ</h1>
            <v-text-field
              :rules="rules_phone"
              type="tel"
              color="amber darken-3"
              outlined
              label="เบอร์โทรศัพท์มือถือ"
              prepend-inner-icon="mdi-phone-dial"
              class="mb-5"
            ></v-text-field>
            <v-text-field
              :rules="rules_password"
              type="password"
              color="amber darken-3"
              outlined
              label="รหัสผ่าน หรือเลขบัญชีธนาคาร"
              prepend-inner-icon="mdi-shield-key"
            ></v-text-field>
            <p class="text-right mb-8">
              <nuxt-link class="amber--text" to="/">ลืมรหัสผ่าน</nuxt-link>
            </p>
            <div class="d-flex justify-center">
              <v-btn color="amber darken-3" elevation="8" large rounded
                >เข้าสู่ระบบ</v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'default',
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
  }),
  head() {
    return {
      title: 'LOGIN ' + this.$store.getters['partner/getPrefix'],
    }
  },
}
</script>

<style scoped>
.content-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  padding: 0;
}

a {
  font-size: 0.875rem;
}

.v-btn:hover {
  transform: translateY(-0.25rem);
}
</style>