window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300
	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	var planetas = [
                { 
                 imagen: "img/mercurio.jpg",                
                 porcentaje: 0.03,
                 objeto : 0,
                 pos:-380
                },
                {
                 imagen: "img/venus.jpg",
                 porcentaje: 0.08,
                 objeto : 0,
                 pos:-200
                },
                {
                 imagen: "img/tierra.jpg",
                 porcentaje: 0.09,
                 objeto : 0,
                 pos:-30
                },
                { 
                 imagen: "img/marte.jpg",
                 porcentaje: 0.05,
                 objeto : 0,
                 pos:100
                }];
	for(var i = 0; i < planetas.length; i++)
	{		    	
		planetas[i].objeto = crearPlaneta({
											tamano : tamanoJupiter * planetas[i].porcentaje,
			  								imagen : planetas[i].imagen});
				escena.add(planetas[i].objeto);
		    	planetas[i].objeto.position.x = planetas[i].pos;
		    //console.log(tamanoJupiter * planetas[i].porcentaje);
		    //console.log(planetas[i].imagen);
	}
		var jupiter = crearPlaneta({
											tamano 	: tamanoJupiter,
											imagen	: 'img/jupiter.jpg'
									  });
			escena.add(jupiter);
			var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
			camara.position.y = 160;
			camara.position.z = 400;
			camara.lookAt(jupiter.position);
			jupiter.position.x = 500;
			//planetas
			escena.add(camara);
			function renderizar()
			{
				jupiter.rotation.y += 0.001;
				for(var i = 0; i < planetas.length; i++)
				{		    	
					planetas[i].objeto.rotation.y += 0.01;
				}
				lienzo.render(escena, camara);
				requestAnimationFrame(renderizar);
			}
			renderizar();
};




