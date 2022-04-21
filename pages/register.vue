<template>
  <div class="content-wrapper">
    <h1 class="text-h6 text-center yellow--text text--darken-2">สมัครสมาชิก</h1>
    <div class="step-register">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1"> </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="step > 2" step="2"> </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="false" step="3"> </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1" class="pa-0">
            <v-form ref="formUser" v-model="validF1">
              <div class="content form">
                <label for="phone">เบอร์โทรศัพท์มือถือ</label>
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  type="tel"
                  outlined
                  color="yellow darken-2"
                  prepend-inner-icon="mdi-phone-dial-outline"
                  :background-color="primaryDarken"
                  hide-details="auto"
                  required
                  class="my-3"
                ></v-text-field>
                <label for="password">รหัสผ่าน</label>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  type="password"
                  outlined
                  color="yellow darken-2"
                  prepend-inner-icon="mdi-shield-key"
                  :background-color="primaryDarken"
                  hide-details="auto"
                  required
                  class="my-3"
                ></v-text-field>
                <label v-if="!$route.query.refer" for="reference"
                  >แหล่งที่มา
                </label>
                <v-select
                  v-if="!$route.query.refer"
                  v-model="reference"
                  :rules="referenceRules"
                  :items="references"
                  item-text="name"
                  item-value="name"
                  item-color="light"
                  color="yellow darken-2"
                  prepend-inner-icon="mdi-account-voice"
                  :background-color="primaryDarken"
                  menu-props="auto"
                  hide-details="auto"
                  required
                  outlined
                  class="my-3"
                ></v-select>
                <div class="action-block mt-8">
                  <a
                    href="javascript:void(0)"
                    class="button dark"
                    @click="onChangeStep(1, 2)"
                  >
                    ดำเนินการต่อ
                  </a>
                </div>
              </div>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="2" class="pa-0">
            <v-form ref="formAccount" v-model="validF2">
              <div class="content form">
                <label for="bankCompany">ธนาคาร</label>
                <v-select
                  v-model="bankCompany"
                  :rules="bankCompanyRules"
                  :items="banks"
                  item-text="name_th"
                  item-value="name_eng"
                  item-color="light"
                  color="yellow darken-2"
                  prepend-inner-icon="mdi-bank"
                  :background-color="primaryDarken"
                  menu-props="auto"
                  hide-details="auto"
                  required
                  outlined
                  class="my-3"
                ></v-select>
                <label for="accountNumber">หมายเลขบัญธนาคาร</label>
                <v-text-field
                  v-model="accountNumber"
                  :rules="accountNumberRules"
                  type="number"
                  outlined
                  color="yellow darken-2"
                  prepend-inner-icon="mdi-numeric"
                  :background-color="primaryDarken"
                  hide-details="auto"
                  required
                  class="my-3"
                ></v-text-field>
                <div class="actions mt-8">
                  <a
                    href="javascript:void(0)"
                    class="button dark"
                    @click="onChangeStep(2, 3)"
                  >
                    ดำเนินการต่อ
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="button danger"
                    @click="onChangeStep(2, 1)"
                  >
                    ย้อนกลับ
                  </a>
                </div>
              </div>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="3" class="pa-0">
            <div class="content form">
              <p class="opacity--text">รายละเอียดการสมัคร</p>
              <div v-if="validF2 && accountVerify" class="cover mb-5">
                <div
                  class="bank-logo"
                  :style="{
                    background: bankIcons[bankCompany.toLowerCase()].color,
                  }"
                >
                  <v-img
                    :src="bankIcons[bankCompany.toLowerCase()].image"
                    :alt="bankIcons[bankCompany.toLowerCase()].official_name"
                  ></v-img>
                </div>
                <div class="bank-detail">
                  <small class="opacity--text">{{
                    bankIcons[bankCompany.toLowerCase()].official_name_thai
                  }}</small>
                  <p>{{ accountNumber }}</p>
                  <p>{{ accountName }}</p>
                  <p>{{ phone }}</p>
                </div>
              </div>
              <label for="promotions">โปรโมชั่น</label>
              <v-select
                v-model="promotion"
                :items="promotionItems"
                item-text="name"
                item-value="id"
                item-color="light"
                color="yellow darken-2"
                prepend-inner-icon="mdi-gift"
                :background-color="primaryDarken"
                menu-props="auto"
                hide-details="auto"
                outlined
                class="my-3"
                @change="onChangePromotion($event)"
              ></v-select>
              <small v-if="promotion">
                เงื่อนไขโปรโมชั่น:
                <span class="yellow--text text--darken-2">
                  {{ promotionDetail }}
                </span>
              </small>
            </div>
            <div class="actions mt-8">
              <a
                href="javascript:void(0)"
                class="button warning"
                @click="onSubmitRegister"
              >
                สมัครสมาชิก
              </a>
              <a
                href="javascript:void(0)"
                class="button danger"
                @click="onChangeStep(3, 2)"
              >
                ย้อนกลับ
              </a>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Register',
  layout: 'default',
  middleware: 'isLoggedIn',
  data: () => ({
    step: 1,
    validF1: false,
    validF2: false,
    phone: '',
    phoneRules: [
      (value) => !!value || 'กรุณากรอก หมายเลขโทรศัพท์',
      (value) => (value || '').length <= 10 || 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
      (value) => {
        const pattern = /^[0-9]{10}$/
        return pattern.test(value) || 'หมายเลขโทรศัพท์ไม่ถูกต้อง'
      },
    ],
    password: '',
    passwordRules: [
      (value) => !!value || 'กรุณากรอก รหัสผ่าน หรือเลขบัญชีธนาคาร',
      (value) =>
        (value || '').length >= 8 || 'รหัสผ่าน หรือเลขบัญชีธนาคารไม่ถูกต้อง',
    ],
    reference: '',
    referenceRules: [(value) => !!value || 'กรุณาเลือก แหล่งที่มาของท่าน'],
    accountVerify: false,
    accountName: '',
    bankCompany: '',
    bankCompanyRules: [(value) => !!value || 'กรุณาเลือก บัญชีธนาคาร'],
    accountNumber: '',
    accountNumberRules: [(value) => !!value || 'กรุณากรอก เลขบัญชีธนาคาร'],
    promotion: null,
    promotionItems: [],
    promotionDetail: '',
  }),
  head() {
    return {
      title: 'สมัครสมาชิก ' + this.name.toUpperCase(),
    }
  },
  computed: {
    ...mapState('prefix', ['name']),
    ...mapState('color', ['primaryDarken']),
    ...mapState({
      banks: 'banks',
      bankIcons: 'bankIcons',
      references: 'references',
      promotions: 'promotions',
    }),
  },
  mounted() {
    this.getReferences()
  },
  methods: {
    ...mapActions({
      getBanks: 'getBanks',
      getReferences: 'getReferences',
      getPromotions: 'getPromotions',
    }),
    async onChangeStep(oldStep, nextStep) {
      switch (nextStep) {
        case 2:
          this.$refs.formUser.validate()
          if (this.validF1 && oldStep === 1) {
            try {
              const checkPhone = await this.$axios.$post('auth/phone-check', {
                phone: this.phone,
              })
              if (checkPhone.status) {
                await this.getBanks()
                this.step = nextStep
              } else {
                this.$toast.error(checkPhone.message)
              }
            } catch (e) {}
          } else {
            this.step = nextStep
          }

          break

        case 3:
          this.$refs.formAccount.validate()
          if (this.validF2 && oldStep === 2) {
            try {
              const verifyBank = await this.$axios.$post('auth/bank-verify', {
                account_number: this.accountNumber,
                bank_name_eng: this.bankCompany,
              })

              if (verifyBank.status) {
                this.accountVerify = verifyBank.status
                this.accountName = verifyBank.data.accountName
                await this.getPromotions()
                this.promotionItems = [
                  { id: null, name: 'ไม่รับโปรโมชั่น' },
                  ...this.promotions,
                ]
                this.step = nextStep
              } else {
                this.$toast.error(verifyBank.message)
              }
            } catch (e) {}
          } else {
            this.step = nextStep
          }

          break

        default:
          this.step = nextStep
          break
      }
    },
    onChangePromotion(id) {
      if (id)
        this.promotionDetail = this.promotions.find((f) => f.id === id).detail
    },
    async onSubmitRegister() {
      const user = {
        phone: this.phone,
        password: this.password,
        reference: this.reference,
        account_number: this.accountNumber,
        bank_name_eng: this.bankCompany.toUpperCase(),
        promotion_id: this.promotion ? `${this.promotion}` : '',
      }

      try {
        const register = await this.$axios.$post('auth/register', user)
        if (register.status) {
          const payload = {
            data: {
              phone: this.phone,
              password: this.password,
            },
          }

          await this.$auth.loginWith('local', payload)
          this.$toast.success('คุณได้เข้าสู่ระบบแล้ว')
        } else {
          this.$toast.error(register.message)
        }
      } catch (error) {}
    },
  },
}
</script>

<style scoped>
.theme--dark.v-list {
  background: #3f54d2 !important;
}

h1 {
  font-size: 1.25rem;
  font-weight: 500;
}

.bank-logo {
  width: 100px;
  height: 100px;
}

.form,
.step-register {
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

.theme--dark.v-stepper {
  background-color: transparent;
}

.v-stepper__header {
  max-width: 240px;
  margin: 0 auto;
}

.v-stepper__header,
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: unset;
}
</style>