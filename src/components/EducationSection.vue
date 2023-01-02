<template>
<div>
  <h3>Education</h3>
  <div  v-for="education in educations" :key="education.id">
    <EducationCard  :educationMajor="education.name"
                   :educationSchool="education.school"
                   :educationDate="education.date"
                   :educationField="education.field"
                   :educationDescription="education.description"/>
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
          name: 'State Engineer',
          school: 'National School of Computer Science and Systems Analysis',
          date: '2019-2022',
          field: 'Web and Network',
          description: 'State Engineer (Bac +5) in Computer Science'
        },
        {
          id: 2,
          name: 'DEUG',
          school: 'Faculty of Sciences Rabat',
          date: '2017-2019',
          field: 'Mathematics',
          description: 'DEUG in Applied Mathematics'
        },
        {
          id:3,
          name: 'Baccalaureate',
          school: 'Lyce Abou Bakr Errazi',
          date: '2017',
          field: 'Mathematics',
          description: 'Baccalaureate in Applied Mathematics-A'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>