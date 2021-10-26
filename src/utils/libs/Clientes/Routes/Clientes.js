const express = require('express');
const { ClientesController } = require('../Controllers/Clientes');
const {success, errorResponse} = require('../../../responses');

const router = express.Router();
const _clientesController = new ClientesController;

/**
   * permite ver todos los clientes
   *
   */
 router.get('/clientes', async (req, res) => {
    try {
       let resp = await _clientesController.consultarClientes();
        success(req, res, 'Clientes', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

 /**
   * permite ver un cliente en especial
   *@param id_clientes
   */

 router.get('/clientes/:id', async (req, res) => {
  let id_clientes = req.params.id_clientes;
   
   
    try {
       let resp = await _clientesController.consultarCliente(id_clientes);
        success(req, res, 'clientes', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

/**
   * permite añadir clientes
   *@param clientes
   */


router.post('/clientes', async (req, res) => {
    try {
      let clientes = req.body;
  
      await _clientesController.guardarCliente(clientes);
      success(req, res, 'Cliente creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });
/**
   * permite la eliminacion de los clientes
   *@param id_clientes
   */
  router.delete('/clientes/:id', async (req, res) => {
    let id_clientes = req.params.id_clientes;
  
    try {
      await _clientesController.eliminarCliente(id_clientes);
      success(req, res, 'Cliente eliminado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  
  });
/**
   * permite la actualizacion de los clientes
   *@param id_clientes
   * @param clientes
   */

  router.put("/clientes/:id", async (req, res) => {
    try {
      let id_clientes = req.params.id_clientes;
      let clientes = req.body;
  
      await _clientesController.editarCliente(clientes, id_clientes);
      success(req, res, 'Cliente modificado', null, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
  });

  module.exports = router;
 