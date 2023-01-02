<template>
  <div class="projects m-5">
    <h2 >Projects</h2>
    <div class="row row-cols-1 row-cols-md-6 g-4" >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :projectName="project.name"
        :projectImages="project.images"
        :projectDescription="project.description"
        :projectLink="project.link"/>
      </div>
    </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Projects',
  components: {ProjectCard},
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Dwirty',
          images: [
            require("@/assets/Images/Dwirty/LOGO1.png"),
            ]
          ,
          link: 'https://github.com/soufianebt/Dwerty-Location',
          description: 'Dwerty location est un espace pour les résidents marocains et non marocains ainsi que pour les touristes dans lequel ils peuvent chercher et trouver un bon logement qui répond à leurs attentes'
          },
        {
          id: 2,
          name: 'MyCoiffeur',
          images: [
            require("@/assets/Images/MyCoiffeur/My coiffeur.png"),
            ],
          link: 'https://github.com/soufianebt/Dwerty-Location',
          description: 'My coiffeur'
          },
        {
          id: 3,
          name: 'KALAH',
          images: [
            require("@/assets/Images/Kalah.png"),
            ],
          link: 'https://github.com/soufianebt/KALAH',
          description: 'kalah'
          },
        {
          id: 4,
          name: 'dirty Location mobile',
          images: [
            require("@/assets/Images/Dwirty/LOGO1.png"),
            ],
          link: 'https://github.com/soufianebt/DwertyLocation_app',
          description: 'Dwerty location est un espace pour les résidents marocains et non marocains ainsi que pour les touristes dans lequel ils peuvent chercher et trouver un bon logement qui répond à leurs attentes'
          },
        {
          id: 5,
          name: 'Litifli',
          images: [
             require("@/assets/Images/litifli/logo.png"),
        ],
          link: 'https://github.com/soufianebt/Liteflit',
          description: 'Litefli is a platform dedicated to medical centers and Moroccan citizens to manage vaccination appointments for babies.'
          },
        {
          id: 6,
          name: 'contactApp',
          images: [
            require("@/assets/Images/ContactApp/ContactApp.png")
          ],
          link: 'https://github.com/soufianebt/contactApp'
          ,
          description: 'Contacte App It is a cross-platform application developed with Ionic, Cordova, Angular, fireBase technologies (As part of an academic project). Our application provides its users with a telephone contact management,'
          },
      ]
    }
  },
}
</script>

<style scoped>
</style>