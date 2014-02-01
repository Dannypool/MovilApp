/**
 * @author Dan
 */

var vOpcionesIncidente = Ti.UI.currentWindow;
vOpcionesIncidente.title = 'Opciones De Incidente';
vOpcionesIncidente.backgroundColor='#fff';



var lOpcionesIncidente = Ti.UI.createLabel({
	color: '#000',
	text: 'Seleccione una opcion:',
	top:'5%',
	left: '5%',
	font: {fontSize:16,fontFamily:'Arial'}
})

var btnAceptar = Ti.UI.createButton({
	title: 'Aceptar',
	bottom: '20%',
	left: '25%',
	width: '50%'
})
// Menu de Opciones
var pOpcionesIncidente = Ti.UI.createPicker({
	top: '10%',
	left: '2%',
	font: {fontSize:14,fontFamily:'Arial'}
	
})

var pDatos = [];
pDatos[0]=Ti.UI.createPickerRow({title:'Incidente Atendido'});
pDatos[1]=Ti.UI.createPickerRow({title:'Sin Novedad'});
pDatos[2]=Ti.UI.createPickerRow({title:'Llamada De Broma'});
pDatos[3]=Ti.UI.createPickerRow({title:'Recategorizar Tipo'});
pDatos[4]=Ti.UI.createPickerRow({title:'Recategorizar Gravedad'});

pOpcionesIncidente.add(pDatos);
pOpcionesIncidente.selectionIndicator = true;

//incluir variables a ventana


vOpcionesIncidente.add(lOpcionesIncidente);
vOpcionesIncidente.add(pOpcionesIncidente);
vOpcionesIncidente.add(btnAceptar);


// EVENTOS
btnAceptar.addEventListener('click',function(e){
	
	if (pOpcionesIncidente.getSelectedRow(0).title == 'Recategorizar Tipo') {
		Titanium.App.Properties.setBool('vRecategorizarTipo', true);
		Ti.App.fireEvent('vRecategorizarTipo');
	}
	if (pOpcionesIncidente.getSelectedRow(0).title == 'Recategorizar Gravedad') {
		Titanium.App.Properties.setBool('vRecategorizarGravedad', true);
		Ti.App.fireEvent('vRecategorizarGravedad');
		}
		
	if(pOpcionesIncidente.getSelectedRow(0).title == 'Incidente Atendido' || pOpcionesIncidente.getSelectedRow(0).title == 'Sin Novedad' || pOpcionesIncidente.getSelectedRow(0).title == 'Llamada De Broma'){
			alert('El Incidente Se Atendio: ' + pOpcionesIncidente.getSelectedRow(0).title);
			Titanium.App.Properties.setBool('Atendido', true);
			Ti.App.fireEvent('Atendido');
		}
	
	
})
