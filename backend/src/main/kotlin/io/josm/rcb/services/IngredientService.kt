package io.josm.rcb.services

import io.josm.rcb.dto.request.IngredientRequestDto
import io.josm.rcb.dto.response.IngredientResponseDto
import io.josm.rcb.repositories.IngredientRepository
import javassist.NotFoundException
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.data.domain.Sort.Order
import org.springframework.stereotype.Service


@Service
class IngredientService(private val ingredientRepository: IngredientRepository) {

    fun getIngredients(ingredientRequestDto: IngredientRequestDto): IngredientResponseDto {
        val (name, page) = ingredientRequestDto
        val pageable: Pageable = PageRequest.of(
                page,
                INGREDIENTS_PER_PAGE,
                Sort.by(
                        Order.desc(SORT_ORDER_FIELD)
                )
        )
        val ingredientsPage = ingredientRepository.findByNameContainingIgnoreCase(
                name,
                pageable
        )
        if (ingredientsPage.isEmpty) {
            throw NotFoundException(NO_INGREDIENTS_FOUND_MESSAGE)
        }
        val totalPages = if (ingredientsPage.totalPages > MAX_INGREDIENT_PAGES) MAX_INGREDIENT_PAGES else ingredientsPage.totalPages
        return IngredientResponseDto(
                ingredientsPage.toList(),
                totalPages
        )
    }

    companion object {

        private const val INGREDIENTS_PER_PAGE = 6
        private const val MAX_INGREDIENT_PAGES = 100
        private const val SORT_ORDER_FIELD = "priority"
        private const val NO_INGREDIENTS_FOUND_MESSAGE = "no ingredients with this name found"
    }
}