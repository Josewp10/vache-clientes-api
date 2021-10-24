const express = require('express');
const { ClientesController } = require('../Controllers/Clientes');
const {success, errorResponse} = require('../../../responses');

const router = express.Router();
const _clientesController = new ClientesController;


 router.get('/clientes', async (req, res) => {
    try {
       let resp = await _clientesController.consultarClientes();
        success(req, res, 'Clientes', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

 

 router.get('/clientes/:cedula', async (req, res) => {
    let cedula = req.params.cedula;
   
   
    try {
       let resp = await _clientesController.consultarCliente(cedula);
        success(req, res, 'clientes', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});




router.post('/clientes', async (req, res) => {
    try {
      let clientes = req.body;
  
      await _clientesController.guardarCliente(clientes);
      success(req, res, 'Cliente creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });

  router.delete('/clientes/:cedula', async (req, res) => {
    let cedula = req.params.cedula;
  
    try {
      await _clientesController.eliminarCliente(cedula);
      success(req, res, 'Cliente eliminado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  
  });
  router.put("/clientes/:cedula", async (req, res) => {
    try {
      let cedula = req.params.cedula;
      let clientes = req.body;
  
      await _bovinosController.editarBovino(bovinos, chapeta);
      success(req, res, 'Bovino modificado', null, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
  });

  module.exports = router;
 