ServerEvents.recipes(event => {
    const id = (id) => `${global.namespace}:${id}`;
	const fuels = [
        'gtceu:coke_gem',
		'gtceu:coke_dust'
				  ];
	const midfuels = [
        'minecraft:coal',
		'gtceu:coal_dust',
		'minecraft:charcoal',
		'gtceu:charcoal_dust'
				  ];			  
	event.remove({ id:'gtceu:electrolyzer/bauxite_electrolysis' });
	event.remove({ type:'gtceu:electric_blast_furnace', output:'gtceu:aluminium_nugget' });
	// The Hood Method (LV)
	// Bauxite + C -> 2NaAlO2 + ash + CO2
	fuels.forEach(fuels => {
	var cutfuels = fuels.slice(fuels.indexOf(":")+1)	
	event.recipes.gtceu.electric_blast_furnace(id(`ebf/${cutfuels}/naalo2`))
		.itemInputs('gtceu:bauxite_dust', `${fuels}`)
		.itemOutputs('2x gtceu:sodium_alumate_dust')
		.chancedOutput('gtceu:ash_dust', 1000, 700)
		.outputFluids('gtceu:carbon_dioxide 1000')
		.blastFurnaceTemp(1800)
        .EUt(120)
		.duration(900)
		});
	midfuels.forEach(midfuels => {	
	var cutfuels = midfuels.slice(midfuels.indexOf(":")+1)
	event.recipes.gtceu.electric_blast_furnace(id(`ebf/${cutfuels}/naalo2`))
		.itemInputs('gtceu:bauxite_dust', `2x ${midfuels}`)
		.itemOutputs('2x gtceu:sodium_alumate_dust')
		.chancedOutput('gtceu:ash_dust', 2000, 500)
		.outputFluids('gtceu:carbon_dioxide 1000')
		.blastFurnaceTemp(1800)
        .EUt(120)
		.duration(1200)
		});
	// 2Na2Al2O4 + NaOH -> Aluminium Sludge
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/aluminium_sludge'))
		.itemInputs('2x gtceu:sodium_alumate_dust', 'gtceu:sodium_hydroxide_dust')
		.itemOutputs('gtceu:aluminium_sludge_dust')
        .EUt(24)
		.duration(600);
	// Aluminium Sludge -> Filtered Aluminium Sludge + ash
	event.recipes.gtceu.sifter(id('sifter/filtered_aluminium_sludge'))
		.itemInputs('gtceu:aluminium_sludge_dust')
		.itemOutputs('gtceu:filtered_aluminium_sludge_dust')
		.chancedOutput('gtceu:ash_dust', 7000, 500)
        .EUt(24)
		.duration(1200);
	// Filtered Aluminium Sludge + CO2 -> 2Al(OH)3 + 2NaCO3
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/aluminium_hydroxide/thug'))
		.itemInputs('gtceu:filtered_aluminium_sludge_dust')
		.inputFluids('gtceu:carbon_dioxide 1000')
		.itemOutputs('2x gtceu:aluminium_hydroxide_dust', '2x gtceu:soda_ash_dust')
        .EUt(24)
		.duration(600);
	// 2Al(OH)3 + 3CaCO3 -> Al2O3 + 3 Ca(OH)2 + 3 CO2
	event.recipes.gtceu.electric_blast_furnace(id('ebf/al2o3/thug'))
		.itemInputs('2x gtceu:aluminium_hydroxide_dust', '5x gtceu:calcite_dust')
		.itemOutputs('gtceu:aluminium_oxide_dust', '5x gtceu:calcium_hydroxide_dust')
		.outputFluids('gtceu:carbon_dioxide 1000')
		.blastFurnaceTemp(1800)
        .EUt(120)
		.duration(600)
	// Al2O3 + 3C -> 2Al(33%) + (3 CO2)
	fuels.forEach(fuels => {
	var cutfuels = fuels.slice(fuels.indexOf(":")+1)	
	event.recipes.gtceu.electric_blast_furnace(id(`ebf/${cutfuels}/aluminium_thug`))
		.itemInputs('gtceu:aluminium_oxide_dust', `3x ${fuels}`)
		.inputFluids('gtceu:oxygen 6000')
		.itemOutputs('6x gtceu:aluminium_nugget')
		.outputFluids('gtceu:carbon_dioxide 3000')
		.blastFurnaceTemp(1800)
        .EUt(120)
		.duration(1500)
		});
	midfuels.forEach(midfuels => {	
	var cutfuels = midfuels.slice(midfuels.indexOf(":")+1)
	event.recipes.gtceu.electric_blast_furnace(id(`ebf/${cutfuels}/aluminium_thug`))
		.itemInputs('gtceu:aluminium_oxide_dust', `6x ${midfuels}`)
		.inputFluids('gtceu:oxygen 6000')
		.itemOutputs('6x gtceu:aluminium_nugget')
		.outputFluids('gtceu:carbon_dioxide 3000')
		.blastFurnaceTemp(1800)
        .EUt(120)
		.duration(2000)
		});
		
// the Educated Method (MV)
	// Alumnium Oxide
	// Bauxite + 2NaOH -> 2NaAlO2 + Na2SiO3 +3H2O
	event.recipes.gtceu.electric_blast_furnace(id('ebf/naalo2/educated'))
		.itemInputs('gtceu:bauxite_dust', '2x gtceu:sodium_hydroxide_dust')
		.itemOutputs('2x gtceu:sodium_alumate_dust', 'gtceu:sodium_metasilicate_dust')
		.outputFluids('minecraft:water 3000')
		.blastFurnaceTemp(2700)
        .EUt(120)
		.duration(500)
		// with Al2o3
	event.recipes.gtceu.electric_blast_furnace(id('ebf/naalo2/al2o3/'))
		.itemInputs('gtceu:aluminium_oxide_dust', '2x gtceu:sodium_hydroxide_dust')
		.itemOutputs('2x gtceu:sodium_alumate_dust')
		.outputFluids('minecraft:water 1000')
		.blastFurnaceTemp(2700)
        .EUt(120)
		.duration(500)
	// 3H2O + CO2 + 2NaAlO2 -> 2Al(OH)3 + Na2CO3 <OR> 2H2O + NaAlO2 - (Al(OH)3) -> Al(OH)3 + NaOH
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/aluminium_hydroxide/educated/weak'))
		.itemInputs('2x gtceu:sodium_alumate_dust')
		.inputFluids('gtceu:carbon_dioxide 1000', 'minecraft:water 3000')
		.itemOutputs('2x gtceu:aluminium_hydroxide_dust', 'gtceu:soda_ash_dust')
        .EUt(64)
		.duration(500);
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/aluminium_hydroxide/educated/good'))
		.itemInputs('gtceu:sodium_alumate_dust')
		.notConsumable('gtceu:aluminium_hydroxide_dust')
		.inputFluids('minecraft:water 2000')
		.itemOutputs('gtceu:aluminium_hydroxide_dust', 'gtceu:sodium_hydroxide_dust')
        .EUt(64)
		.duration(250);
	// 2Al(OH)3 -> Al2O3 + 3H2O
	event.recipes.gtceu.electric_blast_furnace(id('ebf/al2o3/educated'))
		.itemInputs('2x gtceu:aluminium_hydroxide_dust')
		.itemOutputs('gtceu:aluminium_oxide_dust')
		.outputFluids('minecraft:water 3000')
		.blastFurnaceTemp(2700)
        .EUt(120)
		.duration(500)
		
	// Synthetic Cryolite Na3AlF6
	// 6 HF + Al(OH)3 -> H3AlF6 + 3 H2O
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/h3alf6'))
		.itemInputs('gtceu:aluminium_hydroxide_dust')
		.inputFluids('gtceu:hydrofluoric_acid 6000')
		.itemOutputs('gtceu:aluminium_hydrogen_fluoride_dust')
		.outputFluids('minecraft:water 3000')
        .EUt(64)
		.duration(500);
	// H3AlF6 + 3NaOH -> Na3AlF6 + H2O
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/na3alf6'))
		.itemInputs('gtceu:aluminium_hydrogen_fluoride_dust', '3x gtceu:sodium_hydroxide_dust')
		.outputFluids('minecraft:water 1000', 'gtceu:sodium_fluoroaluminate 1000')
        .EUt(64)
		.duration(500);
		
	// Aluminium Fluoride
	// 6 HF + SiO2 -> H2SiF6 + 2H2O
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/h2sif6'))
		.itemInputs('gtceu:silicon_dioxide_dust')
		.inputFluids('gtceu:hydrofluoric_acid 6000')
		.outputFluids('gtceu:hexafluorosilicic_acid 1000', 'minecraft:water 2000')
        .EUt(64)
		.duration(500);
	// H2SiF6 + Al2O3 + 3H2O -> AlF3 + SiO2 + 4H2O (simplified to 0h2o -> 1h2o)
	event.recipes.gtceu.electric_blast_furnace(id('ebf/alf3'))
		.itemInputs('gtceu:aluminium_oxide_dust')
		.inputFluids('gtceu:hexafluorosilicic_acid 1000')
		.itemOutputs('2x gtceu:aluminium_fluoride_dust', 'gtceu:silicon_dioxide_dust')
		.outputFluids('minecraft:water 1000')
		.blastFurnaceTemp(2700)
        .EUt(120)
		.duration(500);
		
	// Hall–Héroult Stare (Only in SuSy)
	// 2AlF3 + 2Na3AlF6 + 2Al2O3 -> 8Al + 12NaF + 3O + 12F
	event.recipes.gtceu.electrolyzer(id('electrolyzer/aluminium/hall'))
		.itemInputs('2x gtceu:aluminium_fluoride_dust', '2x gtceu:aluminium_oxide_dust')
		.inputFluids('gtceu:sodium_fluoroaluminate 2000')
		.itemOutputs('8x gtceu:aluminium_ingot', '12x gtceu:sodium_fluoride_dust')
		.outputFluids('gtceu:oxygen 3000', 'gtceu:fluorine 12000')
	    .EUt(120)
		.duration(500);

	// recycle Na2SiO3
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/na2sio3/decomposition'))
		.itemInputs('gtceu:sodium_metasilicate_dust')
		.inputFluids('minecraft:water 1000')
		.itemOutputs('2x gtceu:sodium_hydroxide_dust', 'gtceu:silicon_dioxide_dust')
        .EUt(30)
		.duration(200);
		
	// dural
	event.recipes.gtceu.mixer(id('mixer/dural'))
		.itemInputs('36x gtceu:aluminium_dust', '2x gtceu:copper_dust', 'gtceu:manganese_dust', 'gtceu:magnesium_dust')
		.itemOutputs('40x gtceu:dural_dust')
        .EUt(30)
		.circuit(5)
		.duration(4000);
	});
    