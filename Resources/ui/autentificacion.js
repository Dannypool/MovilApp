var autentificacion = Titanium.UI.currentWindow;  
 autentificacion.backgroundColor='#fff';

//campo de texto correo
var tUsuario = Titanium.UI.createTextField({  
    color:'#336699',  
    top:'200dp',  
    left:'60dp',  
    width:'200dp',  
    height:'40dp',  
    hintText:'Usuario',    
});  
autentificacion.add(tUsuario);  
 
//campo de texto para Contrasena
var tContrasena = Titanium.UI.createTextField({  
    color:'#336699',  
    top:'245dp',  
    left:'60dp',  
    width:'200dp',  
    height:'40dp',  
    hintText:'Contrasena',  
    passwordMask:true,    
});  
autentificacion.add(tContrasena);  

//boton para validar usuario
var autentificacionBtn = Titanium.UI.createButton({  
    title:'Iniciar sesion',  
    top:'300dp',  
    width:'150dp',  
    height:'40dp',
    left:'85dp',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontSize:24}  
});  
autentificacion.add(autentificacionBtn);

//se autentifica si los campos no estan vacios
//y si usuario y Contrasena son 'admin' XD

Ti.include('/ui/common/soap.js');

autentificacionBtn.addEventListener('click', function(e){
	
	if(tUsuario.value!='' && tContrasena.value!=''){
		
			var val = login(tUsuario.value, tContrasena.value);
		
			Ti.API.info('Valor de Val después del envío: ' + val);
			
			
		}
		else
			alert('Usuario Y Constraseña son necesarios');
		
	   
});



