//Ti.include('/ui/common/soap.js');
var win = Ti.UI.currentWindow;
var map = Ti.Map.createView({
	height : 350,
	top: 110,
	mapType: Titanium.Map.STANDARD_TYPE,
	region: {
		latitude: 19.5044,
		longitude:-99.147087,
		latitudeDelta:0.5,
		longitudeDelta:0.5	},
	animate: true,
	regionFit: true,
	userLocation: true
});

var viewDatos = Ti.UI.createView({
	top: 0 ,
	left : 0 ,
	width: 320 ,
	height : 110 ,
	backgroundColor: '#000'
});

var lbDirecion = Ti.UI.createLabel({
	text: 'Direccion Del Incidente',
	textAlign: 'center',
	top: "5%" ,
	left : "5%" ,
	width: '20%',
	height: '50%',
	color: '#FFF'
});

var lbdatosDirecion = Ti.UI.createLabel({
	text: Ti.API.DirInc,
	textAlign: 'center',
	top: "5%" ,
	left : "25%" ,
	width: '75%',
	height: '50%',
	color: '#FFF'
});

var btnRegresar = Ti.UI.createButton({
	title: 'Regresar',
	bottom: "5%" ,
	right : "5%" ,
	width: '50%',
	height: '30%',
	
});


var longitude;
var latitude;
var origin;
var destination;
var anotUnidad;

//DistanceFilter...
Titanium.Geolocation.distanceFilter = 10;
//apple now requires this parameter so it can inform the user //of why you are accessing their location data
Ti.Geolocation.purpose = "To obtain user location for trackingdistance travelled.";
Titanium.Geolocation.getCurrentPosition(function(e){
	if (e.error)
{
// La geoposicion no esta disponible
	alert('Lo sentimos, la geolocalizacion no esta permitida en su dispositivo');
	return;
}
//Obtener coordenadas actuales
longitude = e.coords.longitude;
latitude = e.coords.latitude;
var altitude = e.coords.altitude;
var heading = e.coords.heading;
var accuracy = e.coords.accuracy;
var speed = e.coords.speed;
var timestamp = e.coords.timestamp;
var altitudeAccuracy = e.coords.altitudeAccuracy;
//Aplicando cordenasas a la region
map.region = {
	latitude: latitude,
	longitude: longitude,
	latitudeDelta:0.5,
	longitudeDelta:0.5
};



//Origen y destino

origin = latitude + "," + longitude;
destination = Ti.API.latInc + "," + Ti.API.longInc;

});


//Anotacion de la unidad
anotUnidad = [
	Ti.Map.createAnnotation({
		latitude: latitude,
		longitude: longitude,
		title: 'Unidad',
		subtitle: 'Ubicacion de la Unidad',
		animate: true,
		pincolor: 'blue',
		//leftButton: 'appcelerator.gif'
	}),
	Ti.Map.createAnnotation({
		latitude: Ti.API.latInc,
		longitude: Ti.API.longInc,
		title: 'Incidente',
		subtitle: 'Ubicacion de Incidente',
		animate: true,
		pincolor: Ti.Map.ANNOTATION_RED,
		//leftButton: 'appcelerator.gif'
	})
];


//intanciar botones
var btnRuta = Ti.UI.createButton({
	bottom : 0,
	//width : 200,
	right: '25%',
	height : 50,
	left : '25%',
	title : 'Ruta mas corta'
});

viewDatos.add(lbDirecion);
viewDatos.add(lbdatosDirecion);
viewDatos.add(btnRegresar);
map.addAnnotations(anotUnidad);
win.add(viewDatos);
win.add(map);
win.add(btnRuta);
win.open();

// load module

var gd = require('de.codewire.google.directions');

// retrieve location
var waypoints = [];
var activeRoutes = [];

var removeAllRoutes = function() {
	for(var idx in activeRoutes) {
		var route = activeRoutes[idx];
		map.removeRoute(route);
	}
	activeRoutes = [];
};

btnRegresar.addEventListener('click', function(e){
	win.close();
});

/**
 * Simple route.
 */
btnRuta.addEventListener('click', function() {
	removeAllRoutes();

	gd.getRoute({
		origin : origin, // required
		destination : destination, // required
		color : '#0080ff', // defaults to '#FF0000'
		mode : gd.travelModes.walking, // defaults to driving
		name : 'single',
		callback : function(response) {
			if(response.status == 'OK') {
				map.setRegion({
					latitude : response.route.points[0].latitude,
					longitude : response.route.points[0].longitude,
					longitudeDelta : 1,
					latitudeDelta : 1
				});

				map.addRoute(response.route);
				activeRoutes.push(response.route);
				
				// loop each point to get distance, duration & instruction
				for(var idx in response.route.points) {
					var point = response.route.points[idx]; 
					if(point.isMaster) {
						var distance = point.distance;
						var duration = point.duration;
						var instruction = point.instruction;
					}
				}
				
			} else {
				/**
				 * Error handling.
				 * The Error object contains "status" & msg properties.
				 */
				alert(response.msg);
			}
		}
	});
});

win.addEventListener('android:back', function (e) {
  win.close();  
});
/**
 * Route with custom way points.
 */

