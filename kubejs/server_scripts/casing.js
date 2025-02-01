ServerEvents.recipes(event => {
	var mats = [
		"compressed_steel"
				];
    mats.forEach(mats => {
        event.shaped(Item.of(`2x kubejs:${mats}_casing`), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:${mats}_plate`,
            F: `gtceu:${mats}_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        });
	});
});