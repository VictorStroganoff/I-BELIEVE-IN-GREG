//code courtesy of deepacat
// big thanks
ServerEvents.recipes(e => {
    var recipesToCleanroom = [
        { id: /gtceu:circuit_assembler\/integrated_circuit_mv.*/ },
        { id: /gtceu:circuit_assembler\/integrated_circuit_hv.*/ },
        { id: /gtceu:circuit_assembler\/integrated_circuit_lv.*/ },
        { id: /gtceu:circuit_assembler\/microprocessor_lv.*/ },
        { id: /gtceu:circuit_assembler\/nand_chip_ulv_good_board.*/ },
        { id: /gtceu:circuit_assembler\/nand_chip_ulv_plastic_board.*/ },
        { id: /gtceu:circuit_assembler\/processor_assembly_hv.*/ },
        { id: /gtceu:circuit_assembler\/processor_mv.*/ },
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
            e.recipes.gtceu.circuit_assembler(`kubejs:${cleaningRecipe.id.toString().split('/')[1]}`)
                .itemInputs(toInput)
                .itemOutputs(toOutput)
                .inputFluids()
                .duration(r.duration)
                .EUt(EUt)
                .cleanroom(CleanroomType.CLEANROOM)
        })
    })
})