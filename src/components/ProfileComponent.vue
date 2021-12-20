<template>
  <div>
    <div class="profile_header">Контактная информация</div>
    <div class="profile_wrapper">
      <ul style="list-style-type: none;">
        <h1>Имя</h1>
        <li> <input type="text" required v-model="name"></li>
        <h1>Email</h1>
        <li > <input type="email" required v-model="email"></li>
        <h1>Адрес</h1>
        <li style="margin-bottom: 10px;"><input type="text" required v-model="address"></li>
        <h1>Номер телефона</h1>
        <li style="margin-bottom: 30px;"><input type="number" required v-model="phone"></li>
        <li>
          <button class="submit_button" @click="saveAccount">
            Сохранить
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "ProfileComponent",
  data() {
    return {
      name: '',
      email: '',
      address: '',
      phone: ''
    }
  },
  methods: {
    saveAccount() {
      const savedProfile =
          {name: this.name, email: this.email, address: this.address, phone: this.phone};
      this.$store.dispatch('saveAccount', savedProfile);
      alert('Аккаунт добавлен!')
    }
  },
  computed: {
    ...mapGetters(['getProfile']),
  },
  mounted() {
    const profile = this.$store.getters.getProfile;
    this.name = profile.username;
    this.email = profile.email;
    this.address = profile.address;
    this.phone = profile.phone;
  }
}
</script>

<style lang="css">
.profile_header {
  margin-bottom: 5px;
}
input{
  width: 300px;
  border-style: dashed;
  text-align: center;
}

.profile_wrapper {
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