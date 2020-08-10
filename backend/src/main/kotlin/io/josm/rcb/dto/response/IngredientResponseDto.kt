package io.josm.rcb.dto.response

import io.josm.rcb.entities.IngredientEntity
import javax.validation.constraints.Max
import javax.validation.constraints.Min
import javax.validation.constraints.Size

data class IngredientResponseDto(

        val ingredients: List<IngredientEntity>,

        val totalPages: Int
)