<template>
  <NavBar/>
  <HeadOfPage/>
  <About/>
  <EducationSection/>
  <TechnologiesMastred/>
  <Projects/>
  <ContactSection/>
</template>

<script>
import HeadOfPage from './components/Head.vue'
import TechnologiesMastred from './components/Technologies.vue'
import NavBar from "@/components/NavBar.vue";
import Projects from "@/components/Projects.vue";
import About from "@/components/About.vue";
import EducationSection from "@/components/EducationSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    HeadOfPage,
    TechnologiesMastred,
    Projects,
    About,
    EducationSection,
    ContactSection
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
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
