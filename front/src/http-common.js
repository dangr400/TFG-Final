/**
 * @file Documento para inicializar axios con dirección URL y cabeceras
 * @author Daniel Gomez Rodriguez
 * @since 02.10.2021
 */
import axios from "axios";

export default axios.create({
  // dependiendo de la URL de la API que esté configurada en el servidor será necesario cambiar el direcionamiento
  baseURL: "http://localhost:8081",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});