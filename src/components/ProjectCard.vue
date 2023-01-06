<template>
  <div class="card p-2 col">
    <!--TODO :    make images carossel-->
   <img class="img-fluid techno-img" :src="projectImages[0]" :alt="projectName">
    <div class="card-body">
      <h5 class="card-title">{{projectName}}</h5>
      <p class="card-text">{{projectDescription}}</p>
    </div>
    <div class="card-footer">
      <a :href="projectLink" class="btn btn-primary">Go to project</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    projectName: String,
    projectImages: Array,
    projectDescription: String,
    projectLink: String
  }
}
</script>

<style scoped>
.card {
  background-color: #2c3e50;
}

.techno-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

</style>