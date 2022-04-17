<template>
  <div class="content-wrapper pb-0">
    <h1 class="text-h6 text-center mb-5">ยืนยันตัวตน</h1>
    <v-card class="verify">
      <v-img
        src="/images/banner/007.png"
        class="red--text align-end"
        :style="{ backgroundColor: primaryDarken }"
      >
      </v-img>
      <v-card light class="example-verify">
        <h2 class="text-h6 mb-3">ตัวอย่างการยืนยันตัวตน</h2>
        <v-img
          src="/images/banner/008.jpeg"
          class="mb-5"
          width="250"
          height="160"
          :style="{ backgroundColor: primaryDarken }"
        >
        </v-img>
        <div>
          สมัครเล่น: <span class="red--text">{{ name }}</span>
        </div>
        <div>ผู้สมัคร: <span class="red--text">ชื่อ และนามสกุล</span></div>
        <div>วันที่สมัคร: <span class="red--text">วัน/เดือน/ปี พ.ศ.</span></div>
      </v-card>
      <v-card-title v-text="'การยืนยันตัวตน'"></v-card-title>
      <v-card-text>
        <ul>
          <li>
            ถ่ายรูปหน้าบัตรประชาชน พร้อมระบุรายละเอียด
            เป็นลายมือตนเองลงในกระดาษ.
          </li>
          <li>
            หากลูกค้าเลือกรับโปรโมชั่นในการสมัครใหม่
            ไม่อนุญาตให้สมาชิกใช้หลายบัญชี.
          </li>
        </ul>
      </v-card-text>
      <div class="select-file">
        <v-file-input
          v-model="file"
          :rules="rules"
          accept="image/png, image/jpeg"
          color="yellow darken-2"
          label="เลือกรูปภาพ"
          placeholder="เลือกรูปภาพ ยืนยันตัวจน"
          prepend-icon="mdi-camera"
          hide-details="auto"
          outlined
        >
        </v-file-input>
      </div>
      <v-card-actions>
        <div class="action-block">
          <a href="javascript:void(0)" class="button warning"> ยืนยันตัวตน </a>
        </div>
      </v-card-actions>
      <v-card-text>
        <span class="red--text"
          >หมายเหตุ: หากทางทีมงานตรวจสอบพบว่า
          <span class="text-decoration">ผู้เล่นใช้หลายบัญชี</span> หรือ
          <span class="text-decoration">สมัครโดยบุคคลคนเดียวกัน</span>
          การคำนวณโบนัสนี้จะถูกยกเลิกและอาญัติเงินในบัญชีลูกค้าทันที</span
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Verify',
  layout: 'default',
  middleware: 'auth',
  data: () => ({
    file: null,
    rules: [
      (value) =>
        !value || value.size < 4000000 || 'รูปภาพต้องมีขนาดไม่เกิน 4 MB!',
    ],
  }),
  computed: {
    ...mapState('prefix', ['name']),
    ...mapState('color', ['primaryDarken']),
  },
}
</script>

<style scoped>
.verify {
  position: relative;
  max-width: 640px;
  margin: 0 auto;
}

.example-verify {
  position: relative;
  max-width: 375px;
  padding: 20px;
  margin: 20px auto 0 auto;
}

.example-verify div {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
}

.select-file {
  max-width: 240px;
  margin: 0 auto;
}

.text-decoration {
  text-decoration: red;
}
</style>