<template>
  <div class="card p-2 col school-container">
    <div class="box-container">
      <div class="row">
        <img :src="img" class="img-school col-3">
        <div class="col">
          <h3>{{school}}</h3>
          <i>{{location}}</i>
          <p>{{field}}</p>
        </div>
        <div class="col-2">
          <h3>-  {{date}}</h3>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationCard",
  props: {
    school: String,
    location : String,
    date : String,
    field : String,
    img  : String,
  }
}
</script>

<style scoped>
.img-school {
  width: 14rem;
  height: 12rem;
  margin: 2rem 5rem 1rem 1rem;
}

.school-container {
  background-color: #2c3e50;
  width: 80%;
  margin: auto;
}

</style>