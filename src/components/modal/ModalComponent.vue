<template>
  <div class="modal_wrapper" ref="modal_wrapper">
    <div class="modal">
      <div class="modal__header">
        <span>{{ modalTitle }}</span>
        <span>
      <i
          @click="closeModal"
          class="material-icons"
      >
        close</i>
    </span>
      </div>
      <div class="modal__content">
        <slot>

        </slot>
      </div>
      <div class="modal__footer">
        <button class="close_modal" @click="closeModal">Закрыть</button>
        <button
            class="submit_button"
            @click="rightButtonAction"
        >
          {{ rightButtonTitle }}
        </button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    rightButtonTitle:{
      type: String,
      default: 'Ok'
    },
    modalTitle:{
      type: String,
      default: 'Modal title'
    },
  },
  data() {
    return {}
  },
  methods:{
    closeModal(){
      this.$emit('closeModal')
    },
    rightButtonAction(){
      this.$emit('rightButtonAction')
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function(item){
      if(item.target === vm.$refs['modal_wrapper']){
        vm.closeModal();
      }
    })
  }
};
</script>

<style lang="css">
.modal_wrapper{
  height: 100000px;
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

}
.modal{
  z-index: 10;
  position: fixed;
  top: 200px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  width: 700px;
  padding: 16px;
}
.modal__header, .modal__footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal__content{
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit_button{
  padding: 8px;
  border-style: hidden;
  border-radius: 50px;
  background: #005bff;
  color: white;
  font-weight: 700;
}
.close_modal{
  border-style: hidden;
  background: #ff005e;
  border-radius: 50px;
  padding: 8px;
  color: #ffffff;
  font-weight: 700;

}


</style>