package io.josm.rcb.handlers

import io.josm.rcb.dto.response.ErrorResponseDto
import javassist.NotFoundException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.BindException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(NotFoundException::class)
    fun handleNotFoundException(ex: NotFoundException): ResponseEntity<ErrorResponseDto> {
        val reasonPhrase = ResponseEntity.status(404).build<Nothing>().statusCode.reasonPhrase
        val info = ex.message ?: ""
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ErrorResponseDto("$reasonPhrase: $info"))
    }

    @ExceptionHandler(BindException::class)
    fun handleBindException(ex: BindException): ResponseEntity<ErrorResponseDto> {
        val reasonPhrase = ResponseEntity.status(400).build<Nothing>().statusCode.reasonPhrase
        val info = ex.bindingResult.fieldError?.defaultMessage ?: ""
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ErrorResponseDto("$reasonPhrase: $info"))
    }

    @ExceptionHandler(Exception::class)
    fun handleException(ex: Exception): ResponseEntity<ErrorResponseDto> {
        val reasonPhrase = ResponseEntity.status(500).build<Nothing>().statusCode.reasonPhrase
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ErrorResponseDto(reasonPhrase))
    }
}