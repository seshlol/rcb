package io.josm.rcb.controllers

import io.josm.rcb.dto.IngredientRequestDto
import io.josm.rcb.entities.IngredientEntity
import io.josm.rcb.services.IngredientService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

@RestController
@RequestMapping("/constructor")
class IngredientController(private val ingredientService: IngredientService) {

    @GetMapping("/ingredients")
    fun getIngredients(@Valid ingredientRequestDto: IngredientRequestDto): ResponseEntity<List<IngredientEntity>>
            = ResponseEntity.ok(ingredientService.getIngredients(ingredientRequestDto))
}