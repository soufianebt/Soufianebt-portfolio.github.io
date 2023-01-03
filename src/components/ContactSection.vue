<template>
  <section class="contact" id="contact">
    <h1 class="heading"> <span>contact</span> me </h1>
    <div class="row">
      <div class="content">
        <h3 class="title">contact info</h3>
        <div class="info">
          <h3> <i class="fas fa-envelope"></i> Soufianeboutahiri@gmail.com </h3>
          <h3> <i class="fas fa-phone"></i> +212 601-541327 </h3>
          <h3> <i class="fas fa-map-marker-alt"></i> Rabat, Morocco - 12050. </h3>
        </div>
      </div>
      <form class="container align-content-center col-5" action="">
        <input type="text" class="form-control mb-3 col-md-6" placeholder="name" >
        <input type="email" class="form-control mb-3 col-md-6" placeholder="email" >
        <input type="text" class="form-control mb-3 col-md-6"  placeholder="project" >
        <textarea name="" id="" cols="30" rows="10" class="form-control mb-3 col-md-6" placeholder="message"></textarea>
        <button type="submit" class="btn btn-primary mb-3 col-md-6"> send <i class="fas fa-paper-plane"></i> </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection"
}
</script>

<style scoped>

</style>