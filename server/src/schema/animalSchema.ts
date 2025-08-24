import z from "zod";


export const createAnimalSchema=z.object({

})

export const updateAnimalSchema=z.object({
    params:z.object({
        id:z.uuid()
    })
})

export const deleteAnimalSchema=z.object({

})