package io.josm.rcb.dto.response

class ErrorResponseDto(

        val message: String

) {
    object Message {

        const val BAD_REQUEST = "Bad Request"
        const val INTERNAL_SERVER_ERROR = "Internal Server Error"
    }
}