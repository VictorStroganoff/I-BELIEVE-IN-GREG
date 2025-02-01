const SteamMB = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine')
//heating_basin
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('heating_basin')
        .category('heating_basin')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);
});
//heating_basin
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('steam_solidifier')
        .category('steam_solidifier')
        .setMaxIOSize(1, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);
});
//heating_basin
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('heating_basin', 'multiblock', m => new SteamMB(m))
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['extractor'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'GGG')
            .aisle('CCC', 'G G')
            .aisle('CKC', 'GGG')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:steel_firebox_casing').setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM).setMaxGlobalLimited(1)))
			.where('C', Predicates.blocks('gtceu:steel_brick_casing'))
        .build()).workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel", "gtceu:block/multiblock/multiblock_workable", false);
// steam_fluid_solidifier
	event.create('steam_fluid_solidifier', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['steam_solidifier'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' C ', ' G ', ' E ')
            .aisle('CCC', 'G#G', 'EEE')
            .aisle(' K ', ' G ', ' E ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
			.where('E', Predicates.blocks('gtceu:steel_pipe_casing'))
			.where('#', Predicates.air())
            .where('G', Predicates.blocks('gtceu:steel_firebox_casing').setMinGlobalLimited(0)
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setExactLimit(1)))
			.where('C', Predicates.blocks('gtceu:steel_brick_casing'))
        .build()).workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel", "gtceu:block/machines/fluid_solidifier/", false);
});