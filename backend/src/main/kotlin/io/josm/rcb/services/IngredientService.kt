package io.josm.rcb.services

import io.josm.rcb.dto.request.IngredientRequestDto
import io.josm.rcb.dto.response.IngredientResponseDto
import io.josm.rcb.entities.IngredientEntity
import io.josm.rcb.repositories.IngredientRepository
import javassist.NotFoundException
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.data.domain.Sort.Order
import org.springframework.stereotype.Service
import java.lang.Exception
import java.util.stream.Collectors


@Service
class IngredientService(private val ingredientRepository: IngredientRepository) {

    fun getIngredients(ingredientRequestDto: IngredientRequestDto): IngredientResponseDto {
        val (name, page) = ingredientRequestDto
        val pageable: Pageable = PageRequest.of(
                page,
                INGREDIENTS_PER_PAGE,
                Sort.by(
                        Order.desc("priority")
                )
        )
        val ingredientsPage = ingredientRepository.findByNameContainingIgnoreCase(
                name,
                pageable
        )
        if (ingredientsPage.isEmpty) {
            throw NotFoundException("no ingredients with name $name found ")
        }
        return IngredientResponseDto(
                ingredientsPage.toList(),
                ingredientsPage.totalPages
        )
    }

    companion object {

        private const val INGREDIENTS_PER_PAGE = 6
    }
}