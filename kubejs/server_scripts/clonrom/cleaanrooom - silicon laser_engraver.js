//code courtesy of deepacat
// big thanks
ServerEvents.recipes(e => {
    var recipesToCleanroom = [
        { id: 'gtceu:laser_engraver/engrave_ulpic_silicon' },
		{ id: 'gtceu:laser_engraver/engrave_ssoc_silicon' },
		{ id: 'gtceu:laser_engraver/engrave_ram_silicon' },
		{ id: 'gtceu:laser_engraver/engrave_lpic_silicon' },
		{ id: 'gtceu:laser_engraver/engrave_ilc_silicon' },
		{ id: 'gtceu:laser_engraver/engrave_cpu_silicon' }
    ]

    recipesToCleanroom.forEach((recipeToClean) => {
        e.forEachRecipe(recipeToClean, cleaningRecipe => {
            let r = JSON.parse(cleaningRecipe.json)
            let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null
            let outputs = r.outputs.item

            let toInput = []
            r.inputs.item.forEach(items => {
                let curCount = items.content.count
                let curItem = Ingredient.of(items.content.ingredient)

                toInput.push(Ingredient.of(curItem, curCount))
            })
            let toOutput = Item.of(Ingredient.of(outputs[0].content.ingredient), outputs[0].content.count)

            e.remove(recipeToClean)
            e.recipes.gtceu.laser_engraver(`kubejs:${cleaningRecipe.id.toString().split('/')[1]}`)
                .itemInputs(toInput)
                .itemOutputs(toOutput)
                .duration(r.duration)
                .EUt(EUt)
                .cleanroom(CleanroomType.CLEANROOM)
        })
    })
})