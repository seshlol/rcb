package io.josm.rcb.entities

import javax.persistence.Column
import javax.persistence.Entity
import javax.validation.constraints.Size

@Entity
class IngredientEntity(

        @Column(length = 63)
        @get:Size(max = 63)
        val name: String,

        @Column(length = 1023)
        @get:Size(max = 1023)
        val description: String?,

        @Column(length = 255)
        @get:Size(max = 255)
        val imgSrc: String?,

        @Column(length = 63)
        @get:Size(max = 63)
        val imgAlt: String?,

        val priority: Int = 0

) : BaseEntity<Long>()