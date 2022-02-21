<template>
  <section id="contact">
    <div class="content-wrapper">
      <v-row>
        <v-col sm="6" class="pa-5 pa-sm-0 mx-auto">
          <div class="content pa-6">
            <h1 class="text-center">ติดต่อ / แจ้งปัญหา</h1>
            <p class="text-center my-8">
              หากคุณมีปัญหาการใช้งาน สามารถดูวิธีการแก้ปัญหาเบื้องต้นได้ที่หน้า
              <nuxt-link class="amber--text" to="/"
                >คำถามที่พบบ่อย FAQ</nuxt-link
              >
              หรือ ติดต่อเจ้าหน้าที่ของ GCLUBKING ผ่านทาง LINE
              <nuxt-link class="amber--text" to="/">@gclubking</nuxt-link>
              <br />
              เรายินดีให้บริการ และ ช่วยตอบปัญหาของท่าน ตลอด 24 ช.ม.
            </p>
            <div class="d-flex justify-center mb-8">
              <v-btn color="light-green accent-4" elevation="8" large rounded
                >ติดต่อพนักงานทางไลน์</v-btn
              >
            </div>
            <p class="text-center">
              <nuxt-link class="amber--text" to="/"
                >คำถามที่พบบ่อย FAQ</nuxt-link
              >
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.v-btn:hover {
  transform: translateY(-0.25rem);
}

@media (min-width: 960px) {
  .content-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    padding: 0;
  }
}
</style>