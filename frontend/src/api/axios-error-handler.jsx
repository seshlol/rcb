export default (error) => {
    switch (error.code) {
        case 'ECONNABORTED' :
            return {message: `Timeout: ${error.config.timeout}ms exceeded`};
        default:
            return error.response.data;
    }
}