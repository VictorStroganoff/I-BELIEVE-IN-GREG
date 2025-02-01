ServerEvents.recipes(event => {
    const id = (id) => `${global.namespace}:${id}`;
    const steel = [
        'gtceu:small_steel_gear',
        'gtceu:steel_ingot',
        'gtceu:steel_gear',
        'gtceu:double_steel_plate',
		'gtceu:steel_rod',
		'gtceu:steel_plate',
		'gtceu:steel_ring',
		'gtceu:steel_screw',
		'gtecu:steel_rotor',
		'gtecu:steel_bolt'
    ];
	
	steel.forEach(steel => {
    event.remove({ output: `${steel}`.replace("steel", "galvenized_steel") })
	});
	
    steel.forEach(steel => {
        var cutsteel = steel.slice(steel.indexOf(":")+1)
        event.recipes.gtceu.steam_solidifier(id(`galvenization/${cutsteel}`))
            .itemInputs(`${steel}`)
			.inputFluids(Fluid.of('gtceu:zinc', 72))
            .itemOutputs(`${steel}`.replace("steel", "galvenized_steel"))
            .duration(500);
        event.recipes.gtceu.fluid_solidifier(id(`galvenization/${cutsteel}`))
            .itemInputs(`${steel}`)
			.inputFluids(Fluid.of('gtceu:zinc', 72))
            .itemOutputs(`${steel}`.replace("steel", "galvenized_steel"))
			.EUt(20)
            .duration(100);
    });
});
