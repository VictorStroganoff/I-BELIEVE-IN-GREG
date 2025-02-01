ServerEvents.recipes(event => {
    const id = (id) => `${global.namespace}:${id}`;		
    const titanium_steel = [
        'gtceu:small_titanium_steel_gear',
        'gtceu:titanium_steel_ingot',
        'gtceu:titanium_steel_gear',
        'gtceu:double_titanium_steel_plate',
		'gtceu:titanium_steel_rod',
		'gtceu:titanium_steel_plate',
		'gtceu:titanium_steel_ring',
		'gtceu:titanium_steel_screw',
		'gtceu:titanium_steel_rotor',
		'gtceu:titanium_steel_bolt'
    ];	
	event.recipes.gtceu.electric_blast_furnace(id(`ebf/titanium_enriched_galvenized_steel`))
		.itemInputs('9x gtceu:steel_dust', '4x gtceu:lithium_dust')
		.inputFluids('gtceu:titanium_tetrachloride 1000')
		.itemOutputs('10x gtceu:titanium_steel_dust', '8x gtceu:lithium_chloride_dust')
		.blastFurnaceTemp(2650)
        .EUt(480)
		.duration(9000);
	event.recipes.gtceu.arc_furnace(id(`arc_furnace/titanium_steel_ingot`))
		.itemInputs('gtceu:titanium_steel_dust')
		.inputFluids('gtceu:oxygen 128')
		.itemOutputs('1x gtceu:titanium_steel_ingot')
        .EUt(160)
		.duration(300);
    titanium_steel.forEach(titanium_steel => {
			event.remove({ output: `${titanium_steel}`.replace("titanium_steel", "titanium_enriched_galvenized_steel") })
        var cuttitanium_steel = titanium_steel.slice(titanium_steel.indexOf(":")+1)
			event.recipes.gtceu.fluid_solidifier(id(`galvenization/${cuttitanium_steel}`))
				.itemInputs(`${titanium_steel}`)
				.inputFluids(Fluid.of('gtceu:zinc', 72))
				.itemOutputs(`${titanium_steel}`.replace("titanium_steel", "titanium_enriched_galvenized_steel"))
				.EUt(240)
				.duration(100);
			});
	});
