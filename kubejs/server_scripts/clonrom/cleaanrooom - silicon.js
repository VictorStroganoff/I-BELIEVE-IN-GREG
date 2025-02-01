//code courtesy of deepacat
// big thanks
ServerEvents.recipes(e => {
    var recipesToCleanroom = [
        { id: /gtceu:cutter\/cut_silicon_boule.*/ },
		{ id: /gtceu:cutter\/cut_ulpic.*/ },
		{ id: /gtceu:cutter\/cut_ssoc.*/ },
		{ id: /gtceu:cutter\/cut_ram.*/ },
		{ id: /gtceu:cutter\/cut_lpic.*/ },
		{ id: /gtceu:cutter\/cut_ilc.*/ },
		{ id: /gtceu:cutter\/cut_cpu.*/ }
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
            e.recipes.gtceu.cutter(`kubejs:${cleaningRecipe.id.toString().split('/')[1]}`)
                .itemInputs(toInput)
                .itemOutputs(toOutput)
                .inputFluids()
                .duration(r.duration)
                .EUt(EUt)
                .cleanroom(CleanroomType.CLEANROOM)
        })
    })
})