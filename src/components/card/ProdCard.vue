<template>
  <div class="card-wrapper">

    <ModalComponent
        v-if="isInfoModalVisible"
        :modalTitle="productData.make_and_model"
        right-button-title="В корзину"
        @closeModal="closeInfoModal"
        @rightButtonAction="addToCart"
    >
      <img class="img" :src="productData.image" height="50%" width="50%" alt="img"  style="margin-right: 18px" />
      <div>
        <p>Price - {{ productData.price }}₽</p>
        <p>Model - {{ productData.make_and_model }}</p>
        <p>Doors - {{ productData.doors }}</p>
        <p>Car type - {{ productData.car_type }}</p>
        <p>Kilometrage - {{ productData.kilometrage }}km</p>
        <p>Color - {{ productData.color }}</p>
        <p>Drive type - {{ productData.drive_type }}</p>
        <p>Transmission - {{ productData.transmission }}</p>
      </div>

    </ModalComponent>
    <div class="card-header">
    </div>
    <div class="img-wrapper">
      <img class="img" :src="productData.image" height="100%" width="100%" alt="img" />
    </div>
    <div class="card-info-wrapper" style="text-align: center">
      <div class="price">{{ productData.price }}₽</div>
      <br>
      <div class="card-name">{{ productData.make_and_model }}</div>
      <br>
      <div class="card-info">{{ productData.kilometrage }} km</div>
    </div>
    <div class="footer">
      <button
          class="card__show-info"
          @click="showModalInfo"

      >
        Подробнее</button>
      <button
          type="button"
          class="btn add-to-card"
          @click="addToCart"
      >
        В корзину
      </button>
    </div>

  </div>
</template>

<script>
import ModalComponent from "../modal/ModalComponent";
export default {
  name: "ProdCard",
  components:{
    ModalComponent
  },
  data() {
    return {
      isInfoModalVisible: false,
      productDataSend: {},
    };
  },
  mounted() {
    this.productDataSend.id = this.productData.uid;
    this.productDataSend.make_and_model = this.productData.make_and_model;
    this.productDataSend.doors = this.productData.doors;
    this.productDataSend.car_type = this.productData.car_type;
    this.productDataSend.kilometrage = this.productData.kilometrage;
    this.productDataSend.color = this.productData.color;
    this.productDataSend.drive_type = this.productData.drive_type;
    this.productDataSend.transmission = this.productData.transmission;
    this.productDataSend.price = this.productData.price;
    this.productDataSend.image = this.productData.image;
    this.productDataSend.quantity = 1;
  },
  props: {
    productData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    showModalInfo(){
      this.isInfoModalVisible = true;
    },
    closeInfoModal(){
      this.isInfoModalVisible = false;
    },
    addToCart() {
      this.$emit("addToCart", this.productDataSend);
    }
  }
};
</script>

<style lang="css">
.card-wrapper {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

}

.img-wrapper {
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  padding: 50px;
}

.card-info-wrapper {
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 16px;
  width: 100%;
  min-height: 60px;
}

.card-header {
  margin-bottom: 6px;
}

.price {
  font-weight: bold;
}

.card-info {
  color: #545454;
  height: 60px;
  overflow: hidden;
}
.card__show-info{
  background: #ff005e;
  color: white;
  border: 0;
  border-radius: 50px;
  height: 38px;
  width: 100px;
  font-weight: bold;
  font-size: 1em;
}
.card__show-info:hover{
  background: #e3004b;
  cursor: pointer;
}

.card__show-info:active{
  background: #b3003c;
}

.btn {
  background: #005bff;
  color: white;
  border: 0;
  border-radius: 50px;
  height: 38px;
  width: 100px;
  font-weight: bold;
  font-size: 1em;
}

.btn:hover {
  background: #0c57d7;
  cursor: pointer;
}

.btn:active {
  background: #063587;
}

.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
</style>