<template>
  <div class="card p-2 col school-container">
    <div class="box-container">
      <div class="row align-items-center">
        <img :src="img" class="img-school col-3 row">
        <div class="col">
          <h3>{{school}}</h3>
          <i>{{location}}</i>
          <p>{{field}}</p>
        </div>
        <div class="col-sm-s col-md-3">
          <h5 class="card-text" >-  {{date}}</h5>
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
  align-items: center;
  margin: auto;
  padding-left: 2rem;
}

.school-container {
  background-color: #2c3e50;
  width: 80%;
  margin: auto;
}

</style>