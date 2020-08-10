package io.josm.rcb.dto.response

data class ErrorResponseDto(

        val message: String

) {
    object Message {

        const val NOT_FOUND = "Not Found"
        const val BAD_REQUEST = "Bad Request"
        const val INTERNAL_SERVER_ERROR = "Internal Server Error"
    }
}