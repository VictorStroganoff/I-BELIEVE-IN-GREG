////////////////////////////////
// Aluline, Thug and Educated //
////////////////////////////////

GTCEuStartupEvents.registry('gtceu:material', event => {
	event.create('sodium_alumate')
		.dust()
		.components('1x sodium', '1x aluminium', '2x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xb3b3ff).iconSet(GTMaterialIconSet.DULL);
		
	event.create('aluminium_sludge')
		.dust()
		.components('1x aluminium', '1x sodium', '3x oxygen', '1x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x003366).iconSet(GTMaterialIconSet.DULL);
		
	event.create('filtered_aluminium_sludge')
		.dust()
		.components('1x aluminium', '1x sodium', '3x oxygen', '1x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x0033aa).iconSet(GTMaterialIconSet.DULL);
		
	event.create('sodium_metasilicate')
		.dust()
		.components('2x sodium', '1x silicon', '3x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xecf9f9).iconSet(GTMaterialIconSet.DULL);
		
	event.create('aluminium_hydrogen_fluoride')
		.dust()
		.components('3x hydrogen', '1x aluminium', '6x fluorine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xeceff9).iconSet(GTMaterialIconSet.DULL);
		
	event.create('sodium_fluoroaluminate')
		.liquid(300)
		.components('3x sodium', '1x aluminium', '6x fluorine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xc4e3ed);

	event.create('aluminium_fluoride')
		.dust()
		.components('1x aluminium', '3x fluorine')
		.color(0x4fc9ab).iconSet(GTMaterialIconSet.SHINY)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	
	event.create('aluminium_hydroxide')
		.dust()
		.components('1x aluminium', '3x oxygen', '3x hydrogen')
		.color(0x0f0faf).iconSet(GTMaterialIconSet.DULL)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
		
	event.create('aluminium_oxide')
		.dust()
		.components('2x aluminium', '3x oxygen')
		.color(0x9f9faf).iconSet(GTMaterialIconSet.SHINY)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
		
	event.create('hexafluorosilicic_acid')
		.liquid(300)
		.components('2x hydrogen', '1x silicon', '6x fluorine')
		.color(0x36b0b0)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

	event.create('sodium_fluoride')
		.dust()
		.components('1x sodium', '1x fluorine')
		.color(0x1f5f0f).iconSet(GTMaterialIconSet.SHINY);
	
	// Dural
	event.create('dural')
		.ingot()
		.components('36x aluminium', '2x copper', '1x magnesium', '1x manganese')
		.blastTemp(1600, 'low', 120, 500)
		.fluidPipeProperties(1400, 300, true, false, false, false)
		.color(0x66b3ff).iconSet(GTMaterialIconSet.METALLIC)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROTOR)
		.toolStats(new ToolProperty(12, 11, 1536, 3, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]));
});