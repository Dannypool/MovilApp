/**
 * @author dan
 */
var vRecategorizarTipo = Ti.UI.currentWindow;
vRecategorizarTipo.title = 'Recategorizar Tipo De Incidente';
vRecategorizarTipo.backgroundColor='#fff';

var lOpcionesIncidente = Ti.UI.createLabel({
	color: '#000',
	text: 'Recategorizar Tipo:',
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
	vRecategorizarTipo.close();
  
})

btnAceptar.addEventListener('click', function(e) {
	Titanium.App.Properties.setBool('Modificado Tipo', true);
	Ti.App.fireEvent('Modificado Tipo');
  
})

// Menu de Opciones
var pOpcionesRecategorizar = Ti.UI.createPicker({
	top: '10%',
	left: '2%',
	font: {fontSize:14,fontFamily:'Arial'}
	
})

var pDatos = [];
pDatos[0]=Ti.UI.createPickerRow({title:'Incendio'});
pDatos[1]=Ti.UI.createPickerRow({title:'Indundacion'});
pDatos[2]=Ti.UI.createPickerRow({title:'Terremoto'});
//Datos[3]=Ti.UI.createPickerRow({title:'Recategorizar Tipo'});
//pDatos[4]=Ti.UI.createPickerRow({title:'Recategorizar Gravedad'});

pOpcionesRecategorizar.add(pDatos);
pOpcionesRecategorizar.selectionIndicator = true;

vRecategorizarTipo.add(lOpcionesIncidente);
vRecategorizarTipo.add(pOpcionesRecategorizar);
vRecategorizarTipo.add(btnAceptar);
vRecategorizarTipo.add(btnCancelar);
