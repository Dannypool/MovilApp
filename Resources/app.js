//Si no existe la propiedad 'autentificacion' la creamos con un valor 'false'
if(!Titanium.App.Properties.hasProperty('autentificacion')) {
	Titanium.App.Properties.setBool('autentificacion', false);
}


Ti.include('/ui/common/soap.js');







var tipo = 'Tipo';
var gravedad= 'Gravedad';
var Direccion = 'Dirección'
var latitud = '19.407277';
var longitud = '-99.407277';






Ti.API.tipoInc = tipo;
Ti.API.gravedadInc = gravedad;
Ti.API.DirInc = Direccion;
Ti.API.latInc = latitud;
Ti.API.longInc = longitud;

//Se crean la ventana para autentificar y una para la aplicacion
var autentificacion = Ti.UI.createWindow({url:'/ui/autentificacion.js'});
var aplicacion = Ti.UI.createWindow({url:'/ui/aplicacion.js'});
var vDatosIncidente = Ti.UI.createWindow({url:'/ui/DatosIncidente.js'});
var vOpcionesIncidente = Ti.UI.createWindow({url:'/ui/opcionesIncidente.js'});
var vMapa = Ti.UI.createWindow({url:'/ui/mapa.js'});
var vRecategorizarTipo = Ti.UI.createWindow({url:'/ui/recategoizarTipo.js'});
var vRecategorizarGravedad = Ti.UI.createWindow({url:'/ui/recategorizarGravedad.js'});




//Si 'login' es 'true' el usuario esta 'autentificado'
if(Titanium.App.Properties.getBool('autentificacion')) {
	//Se accesa a la aplicacion
		aplicacion.open();
		
	}else{
	//Se va a que inicie sesion 	
		autentificacion.open();
	};

//Este se activan cuando se desautentifica el usuario, se cierra
//la ventana de la aplicacion y se abre la de autentificacion
Ti.App.addEventListener('desautentificacion', function(e) {
	autentificacion.open();
	aplicacion.close();
});

//Este se activan cuando se autentifica el usuario, se cierra 
//la ventana de autentificacion y se abre la de la aplicacion
Ti.App.addEventListener('autentificacion', function(e) {
	aplicacion.open();
	autentificacion.close();
	
});


Ti.App.addEventListener('vDatosIncidente', function(e) {
	vDatosIncidente.open();
	aplicacion.close();
});

Ti.App.addEventListener('vOpcionesIncidente', function(e) {
	vOpcionesIncidente.open();
	vDatosIncidente.close();
	vMapa.close();
});

Ti.App.addEventListener('regresar', function(e) {
	vMapa.close();
});

Ti.App.addEventListener('vMapa', function(e) {
	vMapa.open();
});

Ti.App.addEventListener('vRecategorizarTipo', function(e) {
	vRecategorizarTipo.open();
});

Ti.App.addEventListener('vRecategorizarGravedad', function(e) {
	vRecategorizarGravedad.open();
});


//Incidente Incidente Modificado Tipo
Ti.App.addEventListener('Modificado Tipo', function(e) {
	vDatosIncidente.open();
	vOpcionesIncidente.close();
	vRecategorizarTipo.close();
});


//Incidente Incidente Modificado Gravedad
Ti.App.addEventListener('Modificado Gravedad', function(e) {
	vDatosIncidente.open();
	vOpcionesIncidente.close();
	vRecategorizarGravedad.close();
});

//Incidente Incidente Modificado Gravedad
Ti.App.addEventListener('Atendido', function(e) {
	aplicacion.open();
	vOpcionesIncidente.close();
	
});
