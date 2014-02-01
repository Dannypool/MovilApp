var baseWin = Titanium.UI.createWindow({
	backgroundColor : '#fff'
});

var vTramitirPosicion = Titanium.UI.currentWindow;  
 vTramitirPosicion.backgroundColor='#fff';

var lPosicion = Ti.UI.createLabel({
	text: 'Transmitiendo Posicion',
	font: {fontSize:20,fontFamily:'Arial'}
});

var btnAux = Ti.UI.createButton({
	title: 'Simular Incidente'
});


vTramitirPosicion.add(lPosicion);
vTramitirPosicion.add(btnAux);

btnAux.addEventListener('click', function(e){
	
	var dNuevaAsignacion = Ti.UI.createAlertDialog({
    buttonNames: ['Aceptar'],
    message: 'Se le a asignado un nuevo incidente',
    title: 'Nueva Asignacion'
  });
  dNuevaAsignacion.addEventListener('click', function(e){
    Titanium.App.Properties.setBool('vDatosIncidente', true);
		Ti.App.fireEvent('vDatosIncidente');	
  });
  dNuevaAsignacion.show();
	var now = new Date().getTime()
    var delta = new Date( now + (2 * 1000) );
    var deltaMS = delta - now;
 
    var intent = Ti.Android.createServiceIntent({
        url : 'ExampleService.js'
    });
    intent.putExtra('interval', deltaMS);
    intent.putExtra('message' , 'This is that little extra');
    Ti.Android.startService(intent);
	
	

});


var navGroup = Ti.UI.iPhone.createNavigationGroup({
	window : vTramitirPosicion
});

vTramitirPosicion.navGroup = navGroup;
baseWin.add(navGroup);
baseWin.open();