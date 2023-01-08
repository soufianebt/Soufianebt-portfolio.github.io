<template>
  <div class="page-head container pt-3">
    <img class="portfolio-img img-fluid rounded-circle m-5" alt="Soufiane Photo" src="../assets/soufianeBoutahiri.jpg">
    <h1 class="title">Soufiane BOUTAHIRI</h1>
    <h2 class="subtitle">Software engineer</h2>
  </div>
  <div class="home" >
    <p class="text-center head-text">I am a software engineer, passionate about Dot Net and JavaScript based web technologies with a great ability to learn and adapt, and I am very interested in micro-services architectures and agile methodologies.
    </p>
    <a href="#about"><button class="btn btn-secondary">About Me </button></a>
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
.home {
  margin: 50px 0 0;
}
.portfolio-img{
  width: 20rem;
  height: 20rem;
}
.head-text {
  width: 35%;
  margin: auto;
  padding-bottom: 2rem;

}
</style>
