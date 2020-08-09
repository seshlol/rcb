package io.josm.rcb.handlers

import org.springframework.http.ResponseEntity
import org.springframework.validation.BindException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(BindException::class)
    fun handleWebExchangeBindException(e: BindException): ResponseEntity<Nothing>
            = ResponseEntity.badRequest().build()
}