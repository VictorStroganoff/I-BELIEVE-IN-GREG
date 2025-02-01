ServerEvents.recipes(event => {
	const id = (id) => `${global.namespace}:${id}`;
		//Hydrobromic Acid
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/hbr'))
		.inputFluids('gtceu:hydrogen 1000', 'gtceu:bromine 1000')
		.outputFluids('gtceu:hydrobromic_acid 1000')
		.EUt(40)
		.duration(70);	
		//Sodium Ethoxide
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/naoet'))
		.itemInputs('gtceu:sodium_dust')
		.itemOutputs('gtceu:sodium_ethoxide_dust')
		.inputFluids('gtceu:ethanol 1000')
		.outputFluids('gtceu:hydrogen 1000')
		.EUt(120)
		.duration(100);	
		//Butenone
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/butenone'))
		.inputFluids('gtceu:acetone 1000', 'gtceu:formaldehyde 1000')
		.outputFluids('gtceu:butenone 1000', 'minecraft:water 1000')
		.EUt(480)
		.duration(100);		
		//p-TolueneSulfonic Acid
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/pts_acid'))
		.inputFluids('gtceu:toluene 1000', 'gtceu:sulfuric_acid 1000')
		.outputFluids('gtceu:toluenesulfonic_acid 1000', 'minecraft:water 1000')
		.EUt(320)
		.duration(90);			

		//MICHEAL MATH
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/betaketo'))
		.inputFluids('gtceu:acetone 2500', 'gtceu:butenone 2750')
		.itemInputs('3x gtceu:sodium_hydroxide_dust')
		.outputFluids('gtceu:betaketo_intermediate 8250')
		.EUt(700)
		.duration(500);
		//CYCLIC RAGEEEEEE
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/fmca_poopy'))
		.inputFluids('gtceu:butenone 2750')
		.itemInputs('22x gtceu:small_sodium_hydroxide_dust')
		.outputFluids('gtceu:fmcaproduct 8250')
		.EUt(760)
		.duration(1000);
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/fmca_good'))
		.inputFluids('gtceu:butenone 2750')
		.itemInputs('11x gtceu:small_sodium_ethoxide_dust')
		.outputFluids('gtceu:fmcaproduct 8250')
		.EUt(650)
		.duration(500);
		// DEHYDRATION SMILE
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/diluted2cyclopentenone'))
		.inputFluids('gtceu:fmcaproduct 5500', 'gtceu:toluenesulfonic_acid 2750')
		.outputFluids('gtceu:undone_2cyclopentenone 8250')
		.EUt(320)
		.duration(500);
		//Dialate.
	event.recipes.gtceu.distillery(id('chemical_reactor/2cyclopentenone'))
		.inputFluids('gtceu:undone_2cyclopentenone 3000')
		.outputFluids('gtceu:2cyclopentenone 1000')
		.EUt(220)
		.duration(100);
		
		// Let the poo flow...
	
		// Ethylene Chlorohydrin
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/ethylene_chlorohydrin'))
		.inputFluids('gtceu:ethylene 1000', 'gtceu:hypochlorous_acid 1000')
		.outputFluids('gtceu:ethylene_chlorohydrin 1000')
		.EUt(110)
		.duration(100);
		// Ethylene Oxide
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/ethylene_oxide'))
		.inputFluids('gtceu:ethylene_chlorohydrin 2000')
		.itemInputs('5x gtceu:calcium_hydroxide_dust')
		.outputFluids('gtceu:ethylene_oxide 2000', 'minecraft:water 1000')
		.itemOutputs('3x gtceu:calcium_chloride_dust')
		.EUt(240)
		.duration(100);
		// Ethylene Glycol
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/ethylene_glycol'))
		.inputFluids('gtceu:ethylene_oxide 1000', 'minecraft:water 1000')
		.outputFluids('gtceu:ethylene_glycol 2000')
		.EUt(180)
		.duration(100);
		
		// Cyclopentanone
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/cyclopentanone'))
		.inputFluids('gtceu:2cyclopentenone 1000', 'gtceu:hydrogen 2000')
		.notConsumable('gtceu:nickel_dust')
		.outputFluids('gtceu:cyclopentanone 1000')
		.EUt(1024)
		.duration(400);
		
		// CDCX
		// Tribromocyclopentanone
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/tribromocyclopentanone'))
		.inputFluids('gtceu:cyclopentanone 1000', 'gtceu:ethylene_glycol 1000', 'gtceu:hydrobromic_acid 3000')
		.outputFluids('gtceu:tribromocyclopentanone 1000')
		.EUt(768)
		.duration(300);
		// CDCX 1
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/cdcx1'))
		.inputFluids('gtceu:tribromocyclopentanone 1000')
		.itemInputs('1x gtceu:sodium_hydroxide_dust')
		.outputFluids('gtceu:1_cdcx_precursor 1000')
		.itemOutputs('2x gtceu:sodium_bromide')
		.EUt(800)
		.duration(300);
		// CDCX 2
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/cdcx2'))
		.inputFluids('gtceu:1_cdcx_precursor 1000', 'gtceu:sulfuric_acid 1000')
		.outputFluids('gtceu:2_cdcx_precursor 1000', 'gtceu:hydrobromic_acid 2000')
		.EUt(750)
		.duration(300);
		// Cubane Dicarboxylic Acid
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/cdcx_acid'))
		.inputFluids('gtceu:2_cdcx_precursor 1000')
		.notConsumable('gtceu:sodium_hydroxide_dust')
		.outputFluids('gtceu:cubane_dicarboxylic_acid 1000')
		.EUt(1024)
		.duration(300);
		
	// Cubane Synthesis
	// Precursors
		// Pyrithione line
		// Acetaldehyde
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/acetaldehyde'))
		.inputFluids('gtceu:ethanol 1000', 'gtceu:oxygen 1000')
		.outputFluids('gtceu:acetaldehyde 1000', 'minecraft:water 1000')
		.EUt(80)
		.duration(200);
		// Paracetic Acid
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/peracetic_acid'))
		.inputFluids('gtceu:acetaldehyde 1000', 'gtceu:oxygen 1000')
		.outputFluids('gtceu:peracetic_acid 1000')
		.EUt(100)
		.duration(200);
		// Propenal
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/propenal'))
		.inputFluids('gtceu:propene 1000', 'gtceu:oxygen 2000')
		.outputFluids('gtceu:propenal 1000', 'minecraft:water 1000')
		.EUt(440)
		.duration(100);
		// Pyridine
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/pyridine'))
		.inputFluids('gtceu:propenal 1000', 'gtceu:acetaldehyde 1000', 'gtceu:ammonia 1000')
		.outputFluids('gtceu:pyridine 1000', 'gtceu:hydrogen 2000')
		.EUt(640)
		.duration(200);
		// 2_chloropyridine
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/2_chloropyridine'))
		.inputFluids('gtceu:pyridine 1000', 'gtceu:chlorine 2000')
		.outputFluids('gtceu:2_chloropyridine 1000', 'gtceu:hydrochloric_acid 2000')
		.EUt(435)
		.duration(100);
		// Pyrithione
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/pyrithione'))
		.inputFluids('gtceu:2_chloropyridine 1000', 'gtceu:peracetic_acid 1000')
		.outputFluids('gtceu:pyrithione 1000')
		.EUt(880)
		.duration(100);
		
		// Azobisisobutyronitrile line
		// Sodium Cyanide
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/nacn'))
		.inputFluids('gtceu:formamide 1000')
		.itemInputs('9x gtceu:sodium_hydroxide_dust')
		.outputFluids('minecraft:water 2000')
		.itemOutputs('9x gtceu:sodium_cyanide_dust')
		.EUt(60)
		.duration(100);
		// Acetone Cyanohydrin
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/acetone_cyanohydrin'))
		.itemInputs('3x gtceu:sodium_cyanide_dust')
		.inputFluids('gtceu:acetone 1000', 'gtceu:sulfuric_acid 1000')
		.outputFluids('gtceu:acetone_cyanohydrin 1000')
		.EUt(120)
		.duration(100);
		// Hydrazine
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/hydrazine'))
		.inputFluids('gtceu:monochloramine 1000', 'gtceu:ammonia 1000')
		.outputFluids('gtceu:hydrazine 1000', 'gtceu:hydrochloric_acid 1000')
		.EUt(480)
		.duration(480);
		// Diakylhydrazine
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/diakylhydrazine'))
		.inputFluids('gtceu:acetone_cyanohydrin 2000', 'gtceu:hydrazine 1000')
		.outputFluids('gtceu:diakylhydrazine 1000', 'minecraft:water 2000')
		.EUt(540)
		.duration(480);
		//  azobisisobutyronitrile
		event.recipes.gtceu.chemical_reactor(id('chemical_reactor/azobisisobutyronitrile'))
		.inputFluids('gtceu:chlorine 2000', 'gtceu:diakylhydrazine 1000')
		.outputFluids('gtceu:azobisisobutyronitrile 1000', 'gtceu:hydrochloric_acid 2000')
		.EUt(540)
		.duration(480);
		
		//ZA CUBANE
	event.recipes.gtceu.chemical_reactor(id('chemical_reactor/cubane_synthesis'))
		.inputFluids('gtceu:cubane_dicarboxylic_acid 1000', 'gtceu:azobisisobutyronitrile 1', 'gtceu:pyrithione 1')
		.outputFluids('gtceu:cubane 1000', 'gtceu:carbon_dioxide 2000')
		.EUt(1800)
		.duration(500);
		
		// Tungsten Cubide line
		//  Tungsten Hexachloride
	event.recipes.gtceu.electric_blast_furnace(id('ebf/wcl6'))
		.itemInputs('gtceu:tungsten_dust')
		.itemOutputs('7x gtceu:tungsten_hexachloride_dust')
		.inputFluids('gtceu:chlorine 6000')
		.blastFurnaceTemp(3200)
        .EUt(1536)
		.duration(250)
		// Tungsten Cubide
	event.recipes.gtceu.electric_blast_furnace(id('ebf/w8c8'))
		.itemInputs('56x gtceu:tungsten_hexachloride_dust')
		.itemOutputs('1x gtceu:hot_tungsten_cubide_ingot')
		.inputFluids('gtceu:cubane 1000', 'gtceu:hydrogen 40000')
		.outputFluids('gtceu:hydrochloric_acid 48000')
		.blastFurnaceTemp(4300)
        .EUt(1536)
		.duration(250)
	event.recipes.gtceu.vacuum_freezer(id('vacuum_freezer/w8c8'))
		.itemInputs('gtceu:hot_tungsten_cubide_ingot')
		.itemOutputs('gtceu:tungsten_cubide_ingot')
        .EUt(480)
		.duration(168)
});