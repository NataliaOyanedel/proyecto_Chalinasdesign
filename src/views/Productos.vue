<template>

<div class="productos">
<div class="container">

<br>  <p class="titulo">Mis Productos DESIGN_</p>
<hr>

<div class="row">
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="../assets/img/fotoa.jpg"></div>
		<figcaption class="info-wrap">
				<h4 class="title">RUANA.BLACK.DESIGN</h4>
				<p class="desc">Disponible/Envíos a todo Chile</p>
	
		</figcaption>
		<div class="bottom-wrap">
			<a href="" class="btn btn-sm btn-primary float-right">Agregar al carro</a>	
			<div class="price-wrap h5">
				<span class="price-new">$19.990</span> 
			</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="../assets/img/fotob.jpg"> </div>
		<figcaption class="info-wrap">
				<h4 class="title">RUANA.BURDEO.DESIGN</h4>
				<p class="desc">Disponible/Envíos a todo Chile</p>
	
		</figcaption>
		<div class="bottom-wrap">
				<a href="" class="btn btn-sm btn-primary float-right">Agregar al carro</a>	
				<div class="price-wrap h5">
					<span class="price-new">$19.990</span> 
				</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="../assets/img/fotoc.jpg"></div>
		<figcaption class="info-wrap">
				<h4 class="title">RUANA.BEIGE.DESIGN</h4>
				<p class="desc">Disponible/Envíos a todo Chile</p>

		</figcaption>
		<div class="bottom-wrap">
				<a href="" class="btn btn-sm btn-primary float-right">Agregar al carro</a>	
				<div class="price-wrap h5">
					<span class="price-new">$19.990</span> 
				</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
</div> <!-- row.// -->

<br>
<br>

<div class="row">
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="../assets/img/foto1.jpg"></div>
		<figcaption class="info-wrap">
				<h4 class="title">RUANA.BEIGE.DESIGN</h4>
				<p class="desc">Disponible/Envíos a todo Chile</p>
	
		</figcaption>
		<div class="bottom-wrap">
			<a href="" class="btn btn-sm btn-primary float-right">Agregar al carro</a>	
			<div class="price-wrap h5">
				<span class="price-new">$19.990</span> 
			</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="../assets/img/foto2.jpg"> </div>
		<figcaption class="info-wrap">
				<h4 class="title">RUANA.YELLOW.DESIGN</h4>
				<p class="desc">Disponible/Envíos a todo Chile</p>
	
		</figcaption>
		<div class="bottom-wrap">
				<a href="" class="btn btn-sm btn-primary float-right">Agregar al carro</a>	
				<div class="price-wrap h5">
					<span class="price-new">$19.990</span> 
				</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="../assets/img/foto4.jpg"></div>
		<figcaption class="info-wrap">
				<h4 class="title">RUANA.BLACK.DESIGN</h4>
				<p class="desc">Disponible/Envíos a todo Chile</p>

		</figcaption>
		<div class="bottom-wrap">
				<a href="" class="btn btn-sm btn-primary float-right">Agregar al carro</a>	
				<div class="price-wrap h5">
					<span class="price-new">$19.990</span> 
				</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
</div> <!-- row.// -->


</div> 
<!--container.//-->

</div>
</template>

<script>
export default {

}
</script>


<style>

.productos { 
  background-image: url('../assets/img/foto66.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 200vh;

}

.titulo {
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: rosybrown;
}

.container { 
  padding: 80px;

}

.card-product .img-wrap {
    border-radius: 3px 3px 0 0;
    overflow: hidden;
    position: relative;
    height: 220px;
    text-align: center;
}
.card-product .img-wrap img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
}
.card-product .info-wrap {
    overflow: hidden;
    padding: 15px;
    border-top: 1px solid #eee;
}
.card-product .bottom-wrap {
    padding: 15px;
    border-top: 1px solid #eee;
}

.label-rating { margin-right:10px;
    color: #333;
    display: inline-block;
    vertical-align: middle;
}

.card-product .price-old {
    color: #999;
}


</style>