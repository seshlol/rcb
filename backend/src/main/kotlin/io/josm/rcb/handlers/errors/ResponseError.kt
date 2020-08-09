package io.josm.rcb.handlers.errors

data class ResponseError (

        val message: String
) {
    companion object {

        enum class Message(val value: String) {
            BAD_REQUEST("Bad Request"),
            INTERNAL_SERVER_ERROR("Internal Server Error")
        }
    }
}