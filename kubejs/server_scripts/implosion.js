ServerEvents.recipes(event => {
	// pre compression
    const id = (id) => `${global.namespace}:${id}`;
	const explosives = [
        'gtceu:industrial_tnt',
		'2x gtceu:dynamite',
		'4x minecraft:tnt',
		'8x gtceu:powderbarrel'
						];
	explosives.forEach(explosives => {
	var cutexplosives = explosives.slice(explosives.indexOf(":")+1)	
	event.recipes.gtceu.implosion_compressor(id(`implosion/compressed_steel/${cutexplosives}/`))
		.itemInputs('16x gtceu:steel_ingot', `${explosives}`)
		.chancedOutput('16x gtceu:compressed_steel_ingot', 9000, 0)
		.chancedOutput('gtceu:dark_ash_dust', 2500, 0)
        .EUt(30)
		.duration(20)
		});
	// beautiful things
	
	// for this machine I use the golden ratio of 1eu/t ==> 3.125mb air/t
	// this is according to the LV Gas Collector on Overworld

	// compressing steel
	event.recipes.gtceu.compression_chamber(id('compression_chamber/steel'))
		.itemInputs('gtceu:steel_ingot')
		.itemOutputs('gtceu:compressed_steel_ingot')
		.duration(20)
		.perTick(true)
		.inputFluids('gtceu:air 200');



});