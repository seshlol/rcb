const backendProtocol = process.env.BACKEND_PROTOCOL;
export const BACKEND_PROTOCOL = backendProtocol ? backendProtocol : 'http';

const backendAddress = process.env.BACKEND_ADDRESS;
export const BACKEND_ADDRESS = backendAddress ? backendAddress : 'localhost';

const backendPort = process.env.BACKEND_PORT;
export const BACKEND_PORT = backendPort ? backendPort : '8080';
