<template>
  <div>
    <div class="profile_header">Контактная информация</div>
    <div class="profile_wrapper">
      <ul style="list-style-type: none;">
        <h1>Имя</h1>
        <li> <input type="text" name="" required v-model="name"></li>
        <h1>Фамилия</h1>
        <li> <input type="text" name="" required v-model="surname"></li>
        <h1>Email</h1>
        <li > <input type="email" name="" required="" v-model="email"></li>
        <h1>Адрес</h1>
        <li style="margin-bottom: 10px;"><input type="text" name="" required="" v-model="address"></li>
        <li>
          <button class="btn" @click="persist">
            Сохранить
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      address: '',
    }
  },
  methods: {
    persist() {
      const addProfile = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        address: this.address
      }
      localStorage.setItem('profile', JSON.stringify(addProfile))
      alert('Данные сохранены!')
    }
    },

  mounted() {
    const profile = JSON.parse(localStorage.getItem('profile'))
    const isProfileEmpty = !(profile.name && profile.surname && profile.email && profile.address)
    if (!isProfileEmpty) {
      this.name = profile.name
      this.surname = profile.surname
      this.email = profile.email
      this.address = profile.address
    }
  },

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