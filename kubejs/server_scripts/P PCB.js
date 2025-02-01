ServerEvents.recipes(event => {
    const id = (id) => `${global.namespace}:${id}`;
	event.remove({ output:'gtceu:plastic_circuit_board' });
	event.replaceInput({ output: 'gtceu:plastic_printed_circuit_board' }, 'gtceu:plastic_circuit_board', 'gtceu:plastic_circuit_board')
	
	
	// CREATE
	event.recipes.gtceu.compression_chamber(id('compression_chamber/empty/pe'))
		.itemInputs('gtceu:polyethylene_plate', '2x minecraft:redstone_torch', '4x gtceu:fine_gold_wire')
		.itemOutputs('kubejs:empty_plastic_circuit_board')
		.duration(400)
		.perTick(true)
		.inputFluids('gtceu:air 400');
	event.recipes.gtceu.compression_chamber(id('compression_chamber/empty/pvc'))
		.itemInputs('gtceu:polyvinyl_chloride_plate', '2x minecraft:redstone_torch', '4x gtceu:fine_gold_wire')
		.itemOutputs('2x kubejs:empty_plastic_circuit_board')
		.duration(400)
		.perTick(true)
		.inputFluids('gtceu:air 400');
	event.recipes.gtceu.compression_chamber(id('compression_chamber/empty/ptfe'))
		.itemInputs('gtceu:polytetrafluoroethylene_plate', '2x minecraft:redstone_torch', '4x gtceu:fine_gold_wire')
		.itemOutputs('4x kubejs:empty_plastic_circuit_board')
		.duration(400)
		.perTick(true)
		.inputFluids('gtceu:air 400');
	event.recipes.gtceu.compression_chamber(id('compression_chamber/empty/pbi'))
		.itemInputs('gtceu:polybenzimidazole_plate', '2x minecraft:redstone_torch', '4x gtceu:fine_gold_wire')
		.itemOutputs('8x kubejs:empty_plastic_circuit_board')
		.duration(400)
		.perTick(true)
		.inputFluids('gtceu:air 400');
		
	// ETCH
	event.recipes.gtceu.laser_engraver(id('laser_engraver/etch_pcb'))
		.itemInputs('kubejs:empty_plastic_circuit_board')
		.itemOutputs('kubejs:etched_plastic_circuit_board')
		.notConsumable('#forge:lenses/light_blue')
		.EUt(120)
		.duration(400);
	
	// CLEANSE
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/cleanse_pcb'))
		.itemInputs('kubejs:etched_plastic_circuit_board')
		.itemOutputs('gtceu:plastic_circuit_board')
		.inputFluids('gtceu:sulfuric_acid 10')
		.outputFluids('gtceu:diluted_sulfuric_acid 14')
		.EUt(120)
		.duration(400);
	
});