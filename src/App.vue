<template>
  <HeadOfPage/>
  <TechnologiesMastred/>
</template>

<script>
import HeadOfPage from './components/Head.vue'
import TechnologiesMastred from './components/Technologies.vue'

export default {
  name: 'App',
  components: {
    HeadOfPage,
    TechnologiesMastred
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  background-color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
