<template>
  <div class="HeadOfPage">
    <img class="photo" alt="Soufiane Photo" src="../assets/SoufianeBOUTAHIRI.png">
    <h1 class="title">Soufiane BOUTAHIRI</h1>
    <h2 class="subtitle">Développeur Web</h2>
  </div>
  <div class="About">
    <h1 class="title">À propos</h1>
    <p class="text">Je suis ingenieur logiciel passionné par l'architecture et le devops. <br>
      Je suis actuellement ingeniur logiciel a Orange Bussiness Service.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HeadOfPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.title {
  font-size: 2em;
  font-weight: bold;
  margin: 0;
}
.subtitle {
  font-size: 1.5em;
  font-weight: normal;
  margin: 0;
}
.text {
  font-size: 1.2em;
  font-weight: normal;
  margin: 0;
}
.About {
  margin: 50px 0 0;
}
</style>
