<template>
  <div class="content-wrapper pb-0">
    <h1 class="text-h6 text-center mb-5">ประวัติธุรกรรม</h1>
    <ul class="transactions-table">
      <li class="day-group">
        <div class="meta">
          <span class="label">07 ก.พ. 2022</span>
          <small class="count">1</small>
        </div>
        <ul class="transactions">
          <li class="transactions-item">
            <v-icon color="warning" class="avatar">mdi-gift</v-icon>
            <span class="detail">รับแคชแบค </span>
            <span class="date-time">07 ก.พ. 2022, 12:00</span>
            <span class="amount">200</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
        
<script>
export default {
  name: 'Transactions',
  layout: 'default',
  middleware: 'auth',
}
</script>
        
<style scoped>
.transactions-table {
  list-style: none;
  padding: 0;
  max-width: 620px;
  margin: 0 auto;
}

.transactions-table li .meta {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
}

.transactions-table li .meta .label {
  font-weight: 400;
  font-size: 12px;
}

.transactions-table li .meta .count {
  text-align: right;
  opacity: 0.5;
  font-weight: 400;
  font-size: 12px;
}

.transactions-table li .meta .count:after {
  content: 'รายการ';
  display: inline-block;
  margin-left: 5px;
}

.transactions {
  list-style: none;
  border: 1px solid #3e54d3;
  box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 8%),
    0 1px 0 hsl(0deg 0% 100% / 8%);
  border-radius: 15px;
  max-width: 620px;
  margin: 10px auto 0;
  padding: 20px;
}

.transactions-item {
  display: grid;
  grid-template-columns: 44px 2fr 1fr;
  grid-template-areas:
    'avatar detail amount'
    'avatar date-time amount';
  grid-column-gap: 10px;
  -moz-column-gap: 10px;
  column-gap: 10px;
  margin-bottom: 20px;
}

.transactions-item:last-child {
  margin-bottom: 0;
}

.transactions-item .avatar {
  grid-area: avatar;
  border-radius: 1000px;
  width: 44px;
  height: 44px;
  align-self: center;
  justify-self: start;
  place-self: center start;
}

.transactions-item .detail {
  grid-area: detail;
  align-self: end;
  justify-self: start;
  place-self: end start;
  line-height: 1.2;
  font-size: 14px;
}

.transactions-item .date-time {
  grid-area: date-time;
  align-self: start;
  justify-self: start;
  place-self: start start;
  font-size: 12px;
  opacity: 0.5;
  line-height: 1.2;
}

.transactions-item .amount {
  grid-area: amount;
  align-self: center;
  justify-self: end;
  place-self: center end;
  font-size: 14px;
  font-weight: 400;
}

.transactions-item .amount::after {
  font-size: 14px;
  margin-left: 0.5rem;
}
</style>