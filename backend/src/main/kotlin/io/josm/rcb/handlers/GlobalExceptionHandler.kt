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
        val message = buildErrorMessage(
                HttpStatus.NOT_FOUND.reasonPhrase,
                ex.message
        )
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ErrorResponseDto(message))
    }

    @ExceptionHandler(BindException::class)
    fun handleBindException(ex: BindException): ResponseEntity<ErrorResponseDto> {
        val message = buildErrorMessage(
                HttpStatus.BAD_REQUEST.reasonPhrase,
                ex.bindingResult.fieldError?.defaultMessage
        )
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ErrorResponseDto(message))
    }

    @ExceptionHandler(Exception::class)
    fun handleException(ex: Exception): ResponseEntity<ErrorResponseDto> {
        val message = buildErrorMessage(HttpStatus.INTERNAL_SERVER_ERROR.reasonPhrase)
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ErrorResponseDto(message))
    }

    companion object {

        private fun buildErrorMessage(reasonPhrase: String, errorInfo: String? = null): String {
            return if (errorInfo.isNullOrBlank()) reasonPhrase else "$reasonPhrase: $errorInfo"
        }
    }
}