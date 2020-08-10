package io.josm.rcb.utils

import org.springframework.http.ResponseEntity

fun getReasonPhraseByStatusCode(statusCode: Int): String {
    return ResponseEntity.status(statusCode).build<Nothing>().statusCode.reasonPhrase
}