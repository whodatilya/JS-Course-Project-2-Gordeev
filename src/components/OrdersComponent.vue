<template>
  <div>
    <div class="orders_header">Заказы</div>
      <div class="orders_wrapper">
        <ul>
          <li>

          </li>
        </ul>
      <button class="submit_button" @click="clearOrdered">Clear orders</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersComponent",
  methods: {
    getOrder(){
      localStorage.getItem('order')
    },
    clearOrdered(){
      localStorage.removeItem('order')
    }
  },
  props:{
    orderInfo:{
      type: String,
      default: 'Заказ'

    }
  }
}
;

</script>

<style scoped>
.orders_wrapper {
  width: 100%;
  height: 100%;
  min-height: 200px;
  margin-bottom: 20px;
  border-radius: 6px;
  text-align:center;
  vertical-align:middle;
  padding: 40px;
  background: #f8f8f8;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
</style>