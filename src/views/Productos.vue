<template>
  <div class="portafolio">

    <!-- ======= My Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <span>Mis Productos Design_</span>
          <h2>Ruanas & más...</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>



        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src="../assets/img/foto1.jpg" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-img"><img src="../assets/img/foto2.jpg" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" class="venobox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src="../assets/img/foto3.jpg" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" class="venobox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img"><img src="../assets/img/foto4.jpg" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" class="venobox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-img"><img src="../assets/img/foto5.jpg" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" class="venobox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src="../assets/img/foto6.jpg" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" class="venobox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

         
        </div>

      </div>
    </section><!-- End My Portfolio Section -->

     
  </div>
</template>

<script>
export default {

}
</script>


<style>
.portafolio {
  width: 100%;
  height: 200vh;
  background: url("../assets/img/foto11.jpg") top right , transparent;
  background-size: cover;
  position: relative;

}


.section-title { 
text-align: center;
color: white;
padding-top: 100px;
font: bold;

}
.portfolio #portfolio-flters {
  list-style: none;
  margin-bottom: 20px;

}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  margin: 0 10px 10px 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  padding: 7px 10px;
  text-transform: uppercase;
  color: white;
  transition: all 0.3s ease-in-out;
  border: 2px solid #fff;
}

.portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
  color: #f3a200;
  border-color: #ffb727;
}

.portfolio .portfolio-item {
  margin-bottom: 30px;
}

.portfolio .portfolio-item .portfolio-img {
  overflow: hidden;
}

.portfolio .portfolio-item .portfolio-img img {
  transition: all 0.8s ease-in-out;
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 15px;
  bottom: 0;
  z-index: 3;
  right: 15px;
  transition: all ease-in-out 0.3s;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0px;
}

.portfolio .portfolio-item .portfolio-info p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 0;
}

.portfolio .portfolio-item .portfolio-info .preview-link, .portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 40px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: #fff;
  transition: 0.3s;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover, .portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: #ffc041;
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 10px;
}

.portfolio .portfolio-item:hover .portfolio-img img {
  transform: scale(1.2);
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 30px;
}

.portfolio-details .portfolio-details-container {
  position: relative;
}

.portfolio-details .portfolio-details-carousel {
  position: relative;
  z-index: 1;
}

.portfolio-details .portfolio-details-carousel .owl-nav, .portfolio-details .portfolio-details-carousel .owl-dots {
  margin-top: 5px;
  text-align: left;
}

.portfolio-details .portfolio-details-carousel .owl-dot {
  display: inline-block;
  margin: 0 10px 0 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd !important;
}

.portfolio-details .portfolio-details-carousel .owl-dot.active {
  background-color: #ffb727 !important;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  position: absolute;
  right: 0;
  bottom: -70px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 50px;
}

.portfolio-details .portfolio-description h2 {
  width: 50%;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0 0 0 0;
}

@media (max-width: 768px) {
  .portfolio-details .portfolio-description h2 {
    width: 100%;
  }
  .portfolio-details .portfolio-info {
    position: static;
    margin-top: 30px;
  }
}

</style>