/**
 * @author dan
 */
var vRecategorizarGravedad = Ti.UI.currentWindow;
vRecategorizarGravedad.title = 'Recategorizar Tipo De Incidente';
vRecategorizarGravedad.backgroundColor='#fff';


var lOpcionesIncidente = Ti.UI.createLabel({
	color: '#000',
	text: 'Recategorizar Gravedad:',
	top:'5%',
	left: '5%',
	font: {fontSize:16,fontFamily:'Arial'}
})

var btnAceptar = Ti.UI.createButton({
	title: 'Aceptar',
	bottom: '20%',
	left: '15%',
	width: '30%'
})

var btnCancelar = Ti.UI.createButton({
	title: 'Cancelar',
	bottom: '20%',
	right: '15%',
	width: '30%'
})

btnCancelar.addEventListener('click', function(e){
	vRecategorizarGravedad.close();
  
})

btnAceptar.addEventListener('click', function(e) {
	Titanium.App.Properties.setBool('Modificado Gravedad', true);
	Ti.App.fireEvent('Modificado Gravedad');
  
})


// Menu de Opciones
var pOpcionesRecategorizar = Ti.UI.createPicker({
	top: '10%',
	left: '2%',
	font: {fontSize:14,fontFamily:'Arial'}
	
})

var pDatos = [];
pDatos[0]=Ti.UI.createPickerRow({title:'Bajo Impacto'});
pDatos[1]=Ti.UI.createPickerRow({title:'Alto Impacto'});
pDatos[2]=Ti.UI.createPickerRow({title:'Critico'});
//Datos[3]=Ti.UI.createPickerRow({title:'Recategorizar Tipo'});
//pDatos[4]=Ti.UI.createPickerRow({title:'Recategorizar Gravedad'});

pOpcionesRecategorizar.add(pDatos);
pOpcionesRecategorizar.selectionIndicator = true;

vRecategorizarGravedad.add(lOpcionesIncidente);
vRecategorizarGravedad.add(pOpcionesRecategorizar);
vRecategorizarGravedad.add(btnAceptar);
vRecategorizarGravedad.add(btnCancelar);
vRecategorizarGravedad.addEventListener('android:back', function (e) {
  Titanium.App.Properties.setBool('vOpcionesIncidente', true);
	Ti.App.fireEvent('vOpcionesIncidente');	
});