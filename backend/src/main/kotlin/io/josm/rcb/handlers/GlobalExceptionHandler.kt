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
        val info = ex.message ?: ""
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ErrorResponseDto("${ErrorResponseDto.Message.NOT_FOUND}: $info"))
    }

    @ExceptionHandler(BindException::class)
    fun handleBindException(ex: BindException): ResponseEntity<ErrorResponseDto> {
        val info = ex.bindingResult.fieldError?.defaultMessage ?: ""
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ErrorResponseDto("${ErrorResponseDto.Message.BAD_REQUEST}: $info"))
    }

    @ExceptionHandler(Exception::class)
    fun handleException(ex: Exception): ResponseEntity<ErrorResponseDto> {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ErrorResponseDto(ErrorResponseDto.Message.INTERNAL_SERVER_ERROR))
    }
}