import express from "express";
const router = express.Router();
import {
  eliminarPaciente,
  actualizarPaciente,
  agregarPacientes,
  obtenerPacientes,
  obtenerPaciente,
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

router
  .route("/")
  .post(checkAuth, agregarPacientes)
  .get(checkAuth, obtenerPacientes);

router
  .route("/:id")
  .get(checkAuth, obtenerPaciente)
  .put(checkAuth, actualizarPaciente)
  .delete(checkAuth, eliminarPaciente);
export default router;
