GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((id, vein) => {
        vein.density(1.0)
    })
})