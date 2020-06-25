<template>
  <div class="footer">
<!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <h3>Chalinas Design_</h3>
      <p>Acogedoras Ruanas que impulsan nuestra cultura e identidad nacional.</p>
      <div class="social-links">

        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
   
      </div>
      <div class="copyright">
        &copy; Copyright <strong><span>ChalinasDesign_</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
       
        Designed by <a href="">ChalinasDesign_</a>
      </div>
    </div>
  </footer><!-- End Footer -->
   
  </div>
</template>

<script>





export default {
  
}
</script>
<style >

#footer {
  background: url("../assets/img/fondo-footer.jpg") top center no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 80px 0;
  position: relative;
}

#footer::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}

#footer .container {
  position: relative;
}

#footer h3 {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  position: relative;
  font-family: "Satisfy", serif;
  padding: 0;
  margin: 0 0 15px 0;
}

#footer p {
  font-size: 15;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
}

#footer .social-links {
  margin: 0 0 40px 0;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #ffb727;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: #f3a200;
  color: #fff;
  text-decoration: none;
}

#footer .copyright {
  margin: 0 0 5px 0;
}

#footer .credits {
  font-size: 13px;
}

</style>