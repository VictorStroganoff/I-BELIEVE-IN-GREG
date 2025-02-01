GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('compression_chamber')
        .category('compression_chamber')
        .setEUIO('in')
        .setMaxIOSize(9, 9, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SPRAY_CAN_TOOL);
});
StartupEvents.registry('block', event => {
    event.create('compressed_steel_casing')
        .hardness(10)
        .resistance(50)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
		.tagBlock("forge:mineable/wrench")
        .textureAll('gtceu:block/casings/implosion/implosion');
		});
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('compression_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['compression_chamber'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HHHHHHH', 'HHFFFHH', 'HFFGFFH', 'HFGGGFH', 'HFFGFFH', 'HHFFFHH', 'HHHHHHH')
            .aisle('HHFFFHH', 'H#####H', 'F#####F', 'F#####F', 'F#####F', 'H#####H', 'HHFFFHH')
            .aisle('HFFGFFH', 'F#####F', 'F#####F', 'G#####G', 'F#####F', 'F#####F', 'HFFGFFH')
            .aisle('HFGGGFH', 'F#####F', 'G#####G', 'G#####G', 'G#####G', 'F#####F', 'HFGGGFH')
            .aisle('HFFGFFH', 'F#####F', 'F#####F', 'G#####G', 'F#####F', 'F#####F', 'HFFGFFH')
            .aisle('HHFFFHH', 'H#####H', 'F#####F', 'F#####F', 'F#####F', 'H#####H', 'HHFFFHH')
            .aisle('HHHHHHH', 'HHFFFHH', 'HFFGFFH', 'HFGCGFH', 'HFFGFFH', 'HHFFFHH', 'HHHHHHH')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('H', Predicates.blocks('kubejs:compressed_steel_casing'))
			.where('F', Predicates.blocks('gtceu:cleanroom_glass'))
			.where('#', Predicates.air())
            .where('G', Predicates.blocks('gtceu:cleanroom_glass')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1)))
        .build()).workableCasingRenderer("gtceu:block/casings/implosion/implosion", "gtceu:block/multiblock/multiblock_workable", false);
});