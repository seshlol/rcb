package io.josm.rcb

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class RcbApplication

fun main(args: Array<String>) {
    runApplication<RcbApplication>(*args)
}