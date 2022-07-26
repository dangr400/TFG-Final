import axios from "../http-common";
import authHeader from './auth-header';

const API_URL = '/usuarios/';

class UserService {
  // GESTIONES CONTACTOS
  getContactos() {
    return axios.get(API_URL + 'contactos' , { headers: authHeader() });
  }

  eliminarContacto(usuario) {
    return axios.delete(API_URL + 'contactos/eliminarContacto' , {headers: authHeader() , data: {usuario} });
  }

  getContactoPorNombre(nombre) {
    return axios.get(API_URL + `contactos/${nombre}` , {headers: authHeader() });
  }

  // GESTIONES PETICIONES DE CONTACTO
  getPeticionesEnviadas() {
    return axios.get(API_URL + 'verMisPeticiones' , { headers: authHeader() });
  }

  getPeticionesPendientes() {
    return axios.get(API_URL + 'verPeticionesPendientes' , { headers: authHeader() });
  }

  enviarPeticionContacto(usuario) {
    return axios.post(API_URL + 'enviarPeticion', usuario, { headers: authHeader() });
  }

  aceptarPeticion(peticion) {
    return axios.post(API_URL + 'aceptarPeticion', peticion, { headers: authHeader() });
  }

  cancelarPeticion(peticion) {
    return axios.delete(API_URL + 'cancelarPeticion', { headers: authHeader() , data: {peticion} });
  }
  // REFERENTES AL USUARIO

  getUsuarioPorId(idUsuario) {
    return axios.get(API_URL, { headers: authHeader() , data: idUsuario}); 
  }

  getUsuario() {
    return axios.get(API_URL + 'yo', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  updateUsuario(config) {
    return axios.put(API_URL + 'actualizarUsuario',config , {headers: authHeader()});
  }
}

export default new UserService();