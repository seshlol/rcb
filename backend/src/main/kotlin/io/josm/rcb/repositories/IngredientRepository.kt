package io.josm.rcb.repositories

import io.josm.rcb.entities.IngredientEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface IngredientRepository: JpaRepository<IngredientEntity, Long> {
}