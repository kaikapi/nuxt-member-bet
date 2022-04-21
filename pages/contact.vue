<template>
  <div class="content-wrapper">
    <h1 class="text-h6 text-center mb-5">ติดต่อ / แจ้งปัญหา</h1>
    <div class="content form">
      <p class="text-center my-8">
        หากคุณมีปัญหาการใช้งาน สามารถดูวิธีการแก้ปัญหาเบื้องต้นได้ที่หน้า หรือ
        ติดต่อเจ้าหน้าที่ของ GCLUBKING ผ่านทาง LINE
        <nuxt-link class="amber--text" to="/">@gclubking</nuxt-link>
        <br />
        เรายินดีให้บริการ และ ช่วยตอบปัญหาของท่าน ตลอด 24 ช.ม.
      </p>
      <div class="d-grid">
        <a href="javascript:void(0)" class="button success">
          ติดต่อพนักงานทางไลน์
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Contact',
  layout: 'default',
  head() {
    return {
      title: 'ติดต่อ / แจ้งปัญหา ' + this.name.toUpperCase(),
    }
  },
  computed: {
    ...mapState('prefix', ['name']),
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>