<template>
<div id="education">
  <h3>Education</h3>
  <div  v-for="education in educations" :key="education.id">
    <EducationCard
                   :school="education.school"
                   :location="education.location"
                   :date="education.date"
                   :field="education.field"
                   :img="education.img"/>
  </div>
</div>
</template>

<script>
import EducationCard from "./EducationCard.vue";
export default {

  name: "EducationSection",
  components: {EducationCard},
  data() {
    return {
      educations: [
        {
          id: 1,
          school: 'National School of Computer Science and Systems Analysis',
          location: 'Rabat, Morocco',
          date: '2019-2022',
          field: 'Master Degree in Web&Mobile Computing Engineering',
          img: require("@/assets/Images/Schools/ENSIAS.png"),
        },
        {
          id: 2,
          school: 'Faculty of Sciences Rabat',
          location: 'Rabat, Morocco',
          date: '2017-2019',
          field: 'DEUG in Applied Mathematics',
          img: require("@/assets/Images/Schools/fsr.png")
        },
        {
          id:3,
          school: 'Lyce Abou Bakr Errazi',
          location: 'Skhirat, Morocco',
          date: '2017',
          field: 'Baccalaureate in Applied Mathematics-A',
          img: require("@/assets/Images/Schools/Zakariya_Razi.jpg")
          }
      ]
    }
  }
}
</script>

<style scoped>

</style>