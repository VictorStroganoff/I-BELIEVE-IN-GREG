StartupEvents.registry('item', event => {
	event.create('empty_plastic_circuit_board')
		.texture('kubejs:item/pcb/empty_plastic_circuit_board')
		.tooltip('Not Yet a Good Board');
	
	event.create('etched_plastic_circuit_board')
		.texture('kubejs:item/pcb/etched_plastic_circuit_board')
		.tooltip('Almost a Good Board');
})