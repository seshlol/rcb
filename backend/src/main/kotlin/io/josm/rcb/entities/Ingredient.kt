package io.josm.rcb.entities

import org.springframework.data.annotation.Id
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType

@Entity
class Ingredient(

        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        val id: Long,

        val name: String,

        val description: String
)