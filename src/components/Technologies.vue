<template>
<div class="technlogys">
<h2>Technologies Mastred</h2>
<div class="row row-cols-1 row-cols-md-6 g-4" >
 <technologCard v-for="technology in technologies" :key="technology.id"  :technologyName="technology.name" :technologyImage="technology.image"/>
</div>
</div>
</template>

<script>
 import technologCard from "./TechnologyCard.vue";



export default {
  name: 'TechnologiesMastred',
  components: {
  technologCard
  },
  data() {
    return {
      technologies: [
        { id: 1,
          name: 'Java',
          image: 'https://www.vectorlogo.zone/logos/java/java-icon.svg'},
        {
          id: 2,
          name: 'linux',
          image: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg'
        },
        {
          id: 3,
          name: 'sql server',
          image: 'https://www.vectorlogo.zone/logos/microsoft_sql_server/microsoft_sql_server-icon.svg'},
        {
          id: 4,
          name: 'Spring boot',
          image: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg'
        },
        {
          id: 5,
          name: 'c#',
          image: 'https://www.vectorlogo.zone/logos/dotnet/dotnet-icon.svg'
        },
        {
          id: 6,
          name: 'Vue.js',
          image: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg'
        },
        {
          id: 7,
          name: 'Angular',
          image: 'https://www.vectorlogo.zone/logos/angular/angular-icon.svg'
        },
        {
          id: 8,
          name: 'Node.js',
          image: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
        },
        {
          id: 9,
          name: 'ionic',
          image: 'https://www.vectorlogo.zone/logos/ionicframework/ionicframework-icon.svg'
        },
        {
          id: 10,
          name: 'Android',
          image: 'https://www.vectorlogo.zone/logos/android/android-icon.svg'
        },
        {
          id: 11,
          name: 'Git',
          image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>