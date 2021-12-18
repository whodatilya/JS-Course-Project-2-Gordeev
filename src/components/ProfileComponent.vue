<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputName" class="form-label">Имя</label>
      <input type="text" class="form-control" id="exampleInputName">
    </div>
    <div class="mb-3">
      <label for="exampleInputSurname" class="form-label">Фамилия</label>
      <input type="text" class="form-control" id="exampleInputSurname">
    </div>
    <div class="mb-3">
      <label for="exampleInputFatherName" class="form-label">Отчество</label>
      <input type="email" class="form-control" id="exampleInputFatherName">
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail" class="form-label">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail">
    </div>

    <button type="button" class="btn btn-primary">Подтвердить</button>
  </form>
</template>

<script>
export default {
  name: "ProfileComponent"
};
</script>

<style lang="css">

</style>