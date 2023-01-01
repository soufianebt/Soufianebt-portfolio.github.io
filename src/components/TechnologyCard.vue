<template>
  <div class="card p-2 col">
    <img class="card-img-top" :src="technologyImage" :alt="technologyName">
    <div class="card-body">
      <h5 class="card-title">{{technologyName}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnologyCard",
  props: {
    technologyName: String,
    technologyImage: String
  }
}
</script>

<style scoped>
.card {
  background-color: #2c3e50;
}
</style>