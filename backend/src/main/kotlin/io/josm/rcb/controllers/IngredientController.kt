package io.josm.rcb.controllers

import io.josm.rcb.entities.IngredientEntity
import io.josm.rcb.services.IngredientService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/constructor")
class IngredientController(private val ingredientService: IngredientService) {

    @GetMapping("/ingredients")
    fun getIngredients(
            @RequestParam name: String,
            @RequestParam page: Int = 0
    ): ResponseEntity<List<IngredientEntity>> {
        return ResponseEntity.ok(ingredientService.getIngredients(name, page))
    }
}