ServerEvents.recipes(event => {
	const id = (id) => `${global.namespace}:${id}`;
	event.recipes.gtceu.mixer(id('mixer/316n_precursor'))
		.itemInputs('60x gtceu:molybdenum_dust', '40x gtceu:manganese_dust', '15x gtceu:silicon_dust', '3x gtceu:phosphorus_dust')
		.inputFluids('gtceu:nitrogen 2000')
		.itemOutputs('120x gtceu:316n_stainless_steel_precursor_dust')
        .EUt(120)
		.circuit(5)
		.duration(2400);
	event.recipes.gtceu.mixer(id('mixer/316n'))
		.itemInputs('51x gtceu:steel_dust', '18x gtceu:chromium_dust', '10x gtceu:nickel_dust', '6x gtceu:316n_stainless_steel_precursor_dust')
		.itemOutputs('85x gtceu:316n_stainless_steel_dust')
        .EUt(120)
		.circuit(5)
		.duration(2400);
});