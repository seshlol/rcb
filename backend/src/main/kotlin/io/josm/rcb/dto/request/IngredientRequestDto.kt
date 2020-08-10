package io.josm.rcb.dto.request

import javax.validation.constraints.Max
import javax.validation.constraints.Min
import javax.validation.constraints.Size

data class IngredientRequestDto(

        @field:Size(min = 3, max = 63, message = "ingredient name length must be between 3 and 63")
        val name: String,

        @field:Min(0, message = "page number must be greater than 0")
        @field:Max(99, message = "page number must be less than or equal to 99")
        val page: Int
)