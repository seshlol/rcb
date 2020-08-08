package io.josm.rcb.services

import io.josm.rcb.entities.IngredientEntity
import io.josm.rcb.repositories.IngredientRepository
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.data.domain.Sort.Order
import org.springframework.stereotype.Service
import java.util.stream.Collectors


@Service
class IngredientService(private val ingredientRepository: IngredientRepository) {

    fun getIngredients(
            name: String,
            page: Int
    ): List<IngredientEntity> {
        val pageable: Pageable = PageRequest.of(
                page,
                INGREDIENTS_PER_PAGE,
                Sort.by(
                        Order.desc("priority")
                )
        )
        val ingredients = ingredientRepository.findByNameContainingIgnoreCase(
                name,
                pageable
        )
                .get()
                .collect(Collectors.toList())

        //todo throw ex if ingredients.isEmpty

        return ingredients
    }

    companion object {

        private const val INGREDIENTS_PER_PAGE = 6
    }
}