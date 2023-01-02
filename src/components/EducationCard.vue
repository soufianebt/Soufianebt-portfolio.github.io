<template>
  <div class="card p-2 col bg-black">
    <div class="box-container">
      <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <span>{{ educationDate }}</span>
        <h3>{{educationMajor}}</h3>
        <p>{{educationDescription}}</p>
        <p>{{educationSchool}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationCard",
  props: {
    educationMajor: String,
    educationSchool : String,
    educationDate : String,
    educationField : String,
    educationDescription  : String,
  }
}
</script>

<style scoped>

</style>