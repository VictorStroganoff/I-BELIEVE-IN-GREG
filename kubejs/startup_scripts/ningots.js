GTCEuStartupEvents.registry('gtceu:material', event => {
	event.create('galvenized_steel')
		.ingot()
		.components('9x iron', '1x zinc')
		.color(0x838C95).iconSet(GTMaterialIconSet.METALLIC)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_RING)
		.fluidPipeProperties(2020, 150, true, false, false, false)
		.toolStats(new ToolProperty(12, 11, 1536, 3, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]));
	
	event.create('compressed_steel')
		.ingot()
		.components('1x steel')
		.color(0x77727c).iconSet(GTMaterialIconSet.METALLIC) //a49eaa
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_FRAME);
	
	event.create('magnetic_compressed_steel')
		.ingot()
		.components('1x steel')
		.color(0x77727c).iconSet(GTMaterialIconSet.MAGNETIC) //a49eaa
		.flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION);
	
	event.create('316n_stainless_steel_precursor')
		.dust()
		.components('60x molybdenum', '40x manganese', '15x silicon', '3x phosphorus', '2x nitrogen')
		.color(0x28477c).iconSet(GTMaterialIconSet.METALLIC);
	
	event.create('316n_stainless_steel')
		.ingot()
		.components('1320x steel', '360x chromium', '200x nickel', '60x molybdenum', '40x manganese', '15x silicon', '3x phosphorus', '2x nitrogen')
		.color(0x4e596a).iconSet(GTMaterialIconSet.METALLIC)
		.blastTemp(2200, 'low', 480, 700)
		.fluidPipeProperties(2365, 500, true, true, true, false)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROTOR)
		.toolStats(new ToolProperty(18, 13, 2048, 3, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))
	
	event.create('titanium_steel')
		.ingot()
		.components('9x steel', '1x titanium')
		.color(0xc8bdc3).iconSet(GTMaterialIconSet.METALLIC)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROTOR);
	
	event.create('titanium_enriched_galvenized_steel')
		.ingot()
		.components('9x titanium_steel', '1x zinc')
		.color(0x928c95).iconSet(GTMaterialIconSet.METALLIC)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROTOR)
		.fluidPipeProperties(2666, 660, true, true, true, false)
		.toolStats(new ToolProperty(18, 17, 2560, 4, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]));
		
	event.create('sodium_bromide')
		.dust()
		.components('1x sodium', '1x bromine')
		.color(0x584C4C);
		
	event.create('hydrobromic_acid')
		.fluid()
		.components('1x hydrogen', '1x bromine')
		.color(0x380C31);
		
	event.create('sodium_ethoxide')
		.dust()
		.components('2x carbon', '5x hydrogen', '1x oxygen', '1x sodium')
		.color(0xFFF4B6);
		
	event.create('hydrazine')
		.gas()
		.components('2x nitrogen', '4x hydrogen')
		.color(0x9063ba);
		
	event.create('butenone')
		.fluid()
		.components('3x carbon', '6x hydrogen', '1x oxygen')
		.color(0x8483A0);
		
	event.create('toluenesulfonic_acid')
		.fluid()
		.components('6x carbon', '6x hydrogen', '1x sulfur', '3x oxygen')
		.color(0xEAFAE6);
		
	event.create('betaketo_intermediate')
		.fluid()
		.color(0x28B7A4);
		
	event.create('fmcaproduct')
		.fluid()
		.color(0xB72893);
		
	event.create('2cyclopentenone')
		.gas()
		.components('5x carbon', '6x hydrogen', '1x oxygen')
		.color(0xFFF4B6);
		
	event.create('undone_2cyclopentenone')
		.fluid()
		.components('2x water', '5x carbon', '6x hydrogen', '1x oxygen')
		.color(0xFFF4B6);
		
	event.create('ethylene_chlorohydrin')
		.gas()
		.components('2x carbon', '5x hydrogen', '1x oxygen', '1x chlorine')
		.color(0xEAFFF7);
		
	event.create('ethylene_oxide')
		.gas()
		.components('2x carbon', '4x hydrogen', '1x oxygen')
		.color(0xFFFFEA);
		
	event.create('ethylene_glycol')
		.fluid()
		.components('2x carbon', '6x hydrogen', '2x oxygen')
		.color(0xE8E8E1);
		
	event.create('cyclopentanone')
		.gas()
		.components('5x carbon', '8x hydrogen', '1x oxygen')
		.color(0xFAFAFD);
		
	event.create('tribromocyclopentanone')
		.gas()
		.components('5x carbon', '5x hydrogen', '3x bromine', '1x oxygen')
		.color(0x6D5B3F);
		
	event.create('1_cdcx_precursor')
		.fluid()
		.color(0x6D5B3F);
		
	event.create('2_cdcx_precursor')
		.fluid()
		.color(0x6DFB3F);
		
	event.create('cubane_dicarboxylic_acid')
		.fluid()
		.components('10x carbon', '8x hydrogen', '4x oxygen')
		.color(0xA5A4A1);
		
	event.create('pyrithione')
		.fluid()
		.components('5x carbon', '5x hydrogen', '1x nitrogen', '1x oxygen', '1x sulfur')
		.color(0x9B9126);
		
	event.create('azobisisobutyronitrile')
		.fluid()
		.components('8x carbon', '12x hydrogen', '2x nitrogen')
		.color(0x269B8C);
		
	event.create('acetaldehyde')
		.gas()
		.components('2x carbon', '4x hydrogen', '1x oxygen')
		.color(0x8C9D9A);
		
	event.create('peracetic_acid')
		.fluid()
		.components('2x carbon', '4x hydrogen', '3x oxygen')
		.color(0x958C9D);
		
	event.create('propenal')
		.gas()
		.components('3x carbon', '4x hydrogen', '1x oxygen')
		.color(0x8E9D8C);
		
	event.create('pyridine')
		.fluid()
		.components('5x carbon', '5x hydrogen', '1x nitrogen')
		.color(0x8D4238);
		
	event.create('2_chloropyridine')
		.fluid()
		.components('5x carbon', '4x hydrogen', '1x nitrogen', '1x chlorine')
		.color(0x79388D);
		
	event.create('sodium_cyanide')
		.dust()
		.components('1x sodium', '1x carbon', '1x nitrogen')
		.color(0x2A888B);
		
	event.create('acetone_cyanohydrin')
		.fluid()
		.components('4x carbon', '7x hydrogen', '1x nitrogen', '1x oxygen')
		.color(0x35B1B6);
		
	event.create('diakylhydrazine')
		.fluid()
		.components('8x carbon', '14x hydrogen', '4x nitrogen')
		.color(0xB635AF);
		
	event.create('cubane')
		.gas()
		.components('8x carbon', '8x hydrogen')
		.color(0x0505C5);
		
	event.create('tungsten_hexachloride')
		.dust()
		.components('1x tungsten', '6x chlorine')
		.color(0x600871);
		
	event.create('tungsten_cubide')
		.ingot()
		.components('8x tungsten', '8x carbon')
		.blastTemp(4300, 'mid', 1536, 1600)
		.color(0x710808).iconSet(GTMaterialIconSet.METALLIC)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROTOR)
		.toolStats(new ToolProperty(32, 18, 5120, 4, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]));
});