package io.josm.rcb.handlers

import io.josm.rcb.handlers.errors.ResponseError
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.BindException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(BindException::class)
    fun handleWebBindException(ex: BindException): ResponseEntity<ResponseError> {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ResponseError(ResponseError.Companion.Message.BAD_REQUEST.value))
    }

    @ExceptionHandler(Exception::class)
    fun handleException(ex: Exception): ResponseEntity<ResponseError> {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ResponseError(ResponseError.Companion.Message.INTERNAL_SERVER_ERROR.value))
    }
}