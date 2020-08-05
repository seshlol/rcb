package io.josm.rcb.entities

import javax.persistence.Entity

@Entity
class IngredientEntity(

        val name: String

) : BaseEntity<Long>()
