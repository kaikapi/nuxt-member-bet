<template>
  <div class="content-wrapper pb-0">
    <h1 class="text-h6 text-center">กิจกรรม</h1>
    <div class="event">
      <v-tabs
        v-model="tab"
        show-arrows
        color="white"
        background-color="transparent"
        @change="filterVendor"
      >
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="mt-1 pa-2">
        <v-tab-item v-for="item in items" :key="item">
          <v-card light class="card-event">
            <v-img
              src="/images/banner/005.png"
              :style="{ backgroundColor: primaryDarken }"
            ></v-img>
            <v-card-title>กิจกรรมแนะนำเพื่อนประจำเดือนเมษายน</v-card-title>
            <v-card-text>
              เพียงแนะนำเพื่อนครบตามจำนวนด้านล่าง ยิ่งแนะนำยิ่งได้รับเงินโบนัส
              สูงสุดจำนวน 10,000 บาท
            </v-card-text>

            <v-timeline align-top dense>
              <v-timeline-item small>
                <v-row class="pt-1">
                  <v-col cols="3">
                    <small>เพื่อน 1 คน</small>
                  </v-col>
                  <v-col>
                    <small> โบนัส 50฿</small>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item small>
                <v-row class="pt-1">
                  <v-col cols="3">
                    <small>เพื่อน 5 คน</small>
                  </v-col>
                  <v-col>
                    <small> โบนัส 300฿</small>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item small>
                <v-row class="pt-1">
                  <v-col cols="3">
                    <small>เพื่อน 10 คน</small>
                  </v-col>
                  <v-col>
                    <small> โบนัส 650฿</small>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>

            <v-card-title>เงื่อนไขการรับรางวัล</v-card-title>
            <v-card-text>
              <ul>
                <li>
                  เพื่อนที่แนะนำมาจะต้องมียอดเงินที่ใช้เล่นเกมอย่างน้อย 100 บาท
                  ระหว่างวันที่ 1 เมษายน ถึง วันที่ 30 เมษายน 2565.
                  ไม่นับยอดใช้เงินจากการซื้อโปรโมชันและการใช้โบนัส.
                </li>
                <li>แจกรางวัลวันที่ 1 พฤษภาคม 2565.</li>
                <li>
                  รางวัลที่ได้จะเป็นเงินในกระเป๋าโบนัส ซึ่งจะต้องทำโรลโอเวอร์ 1
                  เท่าของยอดเงินรางวัล.
                </li>
              </ul>
            </v-card-text>

            <v-card-actions>
              <div class="action-block">
                <nuxt-link
                  :to="'/affiliate?prefix=' + name"
                  class="button warning mb-10"
                >
                  แนะนำเพื่อนเลย
                </nuxt-link>
              </div>
            </v-card-actions>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>
        
<script>
import { mapState } from 'vuex'

export default {
  name: 'Events',
  layout: 'default',
  middleware: 'auth',
  data: () => ({
    tab: null,
    items: ['แนะนำเพื่อน'],
  }),
  head() {
    return {
      title: ' กิจกรรม-แนะนำเพื่อน',
    }
  },
  computed: {
    ...mapState('color', ['primaryDarken']),
  },
}
</script>
        
<style scoped>
.event {
  position: relative;
  max-width: 640px;
  margin: 0 auto;
}

.card-event {
  border-radius: 15px;
}
</style>