package io.josm.rcb.dto.request

import javax.validation.constraints.Max
import javax.validation.constraints.Min
import javax.validation.constraints.Size

data class IngredientRequestDto(

        @field:Size(min = 3, max = 63)
        val name: String,

        @field:Min(0)
        @field:Max(99)
        val page: Int
)