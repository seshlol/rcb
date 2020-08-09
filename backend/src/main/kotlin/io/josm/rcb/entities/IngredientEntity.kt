package io.josm.rcb.entities

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Table
import javax.validation.constraints.PositiveOrZero
import javax.validation.constraints.Size

@Entity
@Table(name = "ingredient")
class IngredientEntity(

        @field:Column(length = 63)
        @field:Size(min = 2, max = 63)
        val name: String,

        @field:Column(length = 1023)
        @field:Size(max = 1023)
        val description: String?,

        @field:Column(length = 255)
        @field:Size(max = 255)
        val imgSrc: String?,

        @field:Column(length = 63)
        @field:Size(max = 63)
        val imgAlt: String?,

        @field:PositiveOrZero
        val priority: Int = 0
) : BaseEntity<Long>() {

        override fun toString(): String {
                return "IngredientEntity(name='$name', description=$description, imgSrc=$imgSrc, imgAlt=$imgAlt, priority=$priority)"
        }
}