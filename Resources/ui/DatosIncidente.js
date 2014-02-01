/**
 * @author Dan
 */
var vDatosIncidente = Ti.UI.currentWindow;
	vDatosIncidente.backgroundColor='#fff';

var lTipo = Ti.UI.createLabel({
	text: 'Tipo De Incidente',
	textAlign: 'center',
	width: '20%',
	height: '12%',
	top: '1%',
	left: '5%'
});

var lDescripcionTipo = Ti.UI.createLabel({
	text: Ti.API.tipoInc,
	textAlign: 'center',
	width: '67%',
	height: '12%',
	top: '1%',
	left: '25%'
});

var lGravedad = Ti.UI.createLabel({
	text: 'Gravedad Del Incidente',
	textAlign: 'center',
	width: '20%',
	height: '13%',
	top: '13%',
	left: '5%'

});


var lDescripcionGravedad = Ti.UI.createLabel({
	text: Ti.API.gravedadInc,
	textAlign: 'center',
	width: '67%',
	height: '13%',
	top: '13%',
	left: '25%'
});

var lDireccion = Ti.UI.createLabel({
	text: 'Direccion Del Incidente',
	textAlign: 'center',
	width: '20%',
	height: '13%',
	top: '25%',
	left: '5%'
});


var lDescripcionDireccion = Ti.UI.createLabel({
	text: Ti.API.DirInc,
	textAlign: 'center',
	width: '67%',
	height: '13%',
	top: '25%',
	left: '25%'
});

// Este boton abre un mapa con la ruta mas corta
var bRuta = Ti.UI.createButton({
	title: 'Mostrar Mapa',
	width: '50%',
	height: 45,
	top: '50%',
	right: '25%'
})

// Este boton va al siguiente menu
var bArribo = Ti.UI.createButton({
	title: 'Arribo Al Lugar Del Accidente',
	width: '80%',
	height: 58,
	top: '70%',
	right: '10%'
})

//Incuir en pantalla

vDatosIncidente.add(lTipo);
vDatosIncidente.add(lDescripcionTipo);
vDatosIncidente.add(lGravedad);
vDatosIncidente.add(lDescripcionGravedad);
vDatosIncidente.add(lDireccion);
vDatosIncidente.add(lDescripcionDireccion);
vDatosIncidente.add(bRuta);
vDatosIncidente.add(bArribo);


//EVENTOS

bArribo.addEventListener('click', function(e){
    Titanium.App.Properties.setBool('vOpcionesIncidente', true);
	Ti.App.fireEvent('vOpcionesIncidente');	
});

bRuta.addEventListener('click', function(e){
    Titanium.App.Properties.setBool('vMapa', true);
	Ti.App.fireEvent('vMapa');	
});

