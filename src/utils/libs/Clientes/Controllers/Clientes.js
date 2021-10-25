const {ClientesDAO} = require('../DAO/Clientes'); 
const _clientesDAO = new ClientesDAO;



class ClientesController {


 
   validarCliente(cliente){
    if (!cliente){
        throw{
            ok: false,
            mensaje: 'Ingrese la información del cliente'
        };
    }else if(!cliente.cedula){
        throw{
            ok: false,
            mensaje: 'Ingrese la información del cliente'
        };
    }
};

   async consultarClientes(){
    let resp = await _clientesDAO.consultarClientes();
    return resp.rows;
      
    }

    async consultarCliente(cedula){

        let resp = await _clientesDAO.consultarCliente(cedula);

        switch (resp.rowCount ) {
            
            case 0:
                
               throw 'Elemento no encontrado';

            case 1:
                return resp.rows;

        }

    }

   
    async guardarCliente(cliente){
        await _clientesDAO.guardarCliente(cliente);
    }
  
    

    async editarCliente(cliente,cedula){
        if (cliente.cedula != cedula) {
            throw {
              ok: false,
              mensaje: "cedula del cliente  no corresponde al enviado",
            };
          }
         await _clientesDAO.editarCliente(cliente);
    }


    async eliminarCliente(cliente){
        return _clientesDAO.eliminarCliente(cliente);
    }
  
}
module.exports={ClientesController}