function soap() {
	Ti.include('/ui/common/mashups/suds.js');
	var window = Ti.UI.createWindow();
	var label = Ti.UI.createLabel({
	    top: 10,
	    left: 10,
	    width: 'auto',
	    height: 'auto',
	    text: 'Contactando al servidor de Incidentes...'
	});
	
	window.add(label);
	
	
	var url = "http://192.168.100.106:8080/SilvaWebService/ccastro";
	var callparams = {
	    
	      parameter: 'ct_usuario' };
	
	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://ccastro/'
	});
	
	try {
		//alert ('Entre al try');
	    suds.invoke('RegresaCadena', callparams, function(xmlDoc) {
	    	
	        var results = xmlDoc.documentElement.getElementsByTagName('RegresaCadenaResponse');
	       // alert (results.item(0));
	        if (results && results.length>0) {
	            var result = results.item(0);
	            
	            label.text = ' ' + results.item(0).text + '  .';
	        } else {
	            label.text = 'Oops, could not determine result of SOAP call.';
	        }
	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}
	
	return window;
};



function login(useriPhone, passiPhone) {
	
	var resultadoLogion;
	var respuesta;
	Ti.include('/ui/common/suds.js');
	var url = "http://192.168.2.5:8080/SilvaWebService/ccastro";
	
	var callparams = {
	    
	      user: useriPhone, 
	      pass: passiPhone
	      
	      };
	
	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://ccastro/'
	});
	
	try {
		Ti.API.info("Entre al try");
	    respuesta = suds.invoke('login', callparams, function(xmlDoc) {
	    	
	        var results = xmlDoc.documentElement.getElementsByTagName('loginResponse');
	       
	        if (results && results.length>0) {
	        	
	            var result = results.item(0);
	            
	            resultadoLogion = results.item(0).text;
	            
	            Ti.API.info ('Resultado Logion dentro del if ' + resultadoLogion);
	            
	            if(resultadoLogion =='exito'){
					//se cambia la propiedad de autenficacion a verdadero
					Titanium.App.Properties.setBool('autentificacion', true);
					//Se activa el evento autentificacion, para cerrar la ventana autentificacion
					//y abrir la de la aplicacion
					Ti.App.fireEvent('autentificacion');
					alert('Usuario válido');
				}
				else
					alert('Usuario invalido');
		
	
	
	            
	            
	        }
	        
	        else {
	            alert('Oops, could not determine result of SOAP call.');
	            //return resultadoLogion;
	        }
	        
	        
	        return resultadoLogion;
	    });
	} 
	
	
	
		catch(e) {
	    
	    	Ti.API.error('Error: ' + e);
	    //return resultadoLogion;
	};
	
	
	return respuesta;
	
};


function enviaPosicion() {
	Ti.include('/ui/common/mashups/suds.js');
	var window = Ti.UI.createWindow();
	var label = Ti.UI.createLabel({
	    top: 10,
	    left: 10,
	    width: 'auto',
	    height: 'auto',
	    text: 'Contactando al servidor de Incidentes...'
	});
	
	window.add(label);
	
	
	var url = "http://10.102.202.148:8080/SilvaWebService/ccastro";
	var callparams = {
	    
	      Latitud: '19.407277',
	      Longitud: '-99.407277' 
	      
	      };
	
	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://ccastro/'
	});
	
	try {
		//alert ('Entre al try');
	    suds.invoke('obtenerPosicion', callparams, function(xmlDoc) {
	    	
	        var results = xmlDoc.documentElement.getElementsByTagName('RegresaCadenaResponse');
	       // alert (results.item(0));
	        if (results && results.length>0) {
	            var result = results.item(0);
	            
	            label.text = ' ' + results.item(0).text + '  .';
	        } else {
	            label.text = 'Oops, could not determine result of SOAP call.';
	        }
	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}
	
	return window;
};



//module.exports = soap;