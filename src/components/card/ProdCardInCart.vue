<template>
  <div class="main-wrapper">
    <ModalComponent
        v-if="isInfoModalVisible"
        :modalTitle="productData.make_and_model"
        @closeModal="closeInfoModal"
        @rightButtonAction="closeInfoModal"

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
    <div class="start-column">
      <label>
        {{ number + 1 }}
        <input type="checkbox" v-model="productData.checked" />
      </label>
    </div>
    <div class="img-wrapper">
      <img
          class="img"
          :src="productData.image"
          height="100%"
          width="100%"
          ref="myImg"
      />
    </div>
    <button
        style=
            "height: 25px;
             width: 50px;
             margin-top: 65px"
        class="card__show-info"
        @click="showModalInfo"

    >
      Инфо
    </button>
    <div class="card-info-wrapper">
      <div class="card-name" style="margin-top: 60px">
        {{ productData.make_and_model }}
      </div>
      <div class="card-info" style="margin-top: 65px">{{ productData.info }}</div>
    </div>
    <div class="price" style="margin-top: 65px; font-weight: bold">{{ productData.price }}₽</div>
    <div class="last-column">
      <label class="input-label" style="margin-top: 40px">
        Колличество
        <input
            class="input"
            type="number"
            min="1"
            max="99"
            v-model="productData.quantity"
            @input="counterHandler(productData.quantity)"
        />
      </label>
      <div class="delete" @click="deleteFromCart">удалить</div>
    </div>
  </div>
</template>

<script>
import ModalComponent from "../modal/ModalComponent";
export default {
  name: "ProdCardInCart",
  components:{
    ModalComponent
  },
  data() {
    return {
      isInfoModalVisible: false,
      productDataSend: {},
    };
  },
  props: {
    productData: {
      type: Object,
      default: function () {
        return {};
      },
    },
    number: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.$set(this.productData, "checked", false);

  },
  methods: {
    showModalInfo(){
      this.isInfoModalVisible = true;
    },
    closeInfoModal(){
      this.isInfoModalVisible = false;
    },
    counterHandler() {
      this.$emit("counterHandler");
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #b8b8b8;
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(5, 20, 191, 0.2);
  min-height: 160px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.main-wrapper > div {
  margin: 6px;
}

.img-wrapper {
  width: 120px;
  height: 120px;
  align-self: center;
}

.card-info-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 240px;
  max-height: 136px;
  overflow: hidden;
}

.card-info-wrapper > div {
  margin: 6px;
}

.input-label {
  width: 100px;
  margin: 4px;
}

.input {
  width: 100%;
}

.start-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.start-column > label {
  min-width: 40px;
}

.last-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.delete {
  color: #e64f5c;
}

.delete:hover {
  color: #75282e;
  cursor: pointer;
}
</style>
