const {ClientesDAO} = require('../DAO/Clientes'); 
const _clientesDAO = new ClientesDAO;



class ClientesController {


 
   validarCliente(cliente){
    if (!cliente){
        throw{
            ok: false,
            mensaje: 'Ingrese la información del cliente'
        };
    }else if(!cliente.id_clientes){
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

    async consultarCliente(id_clientes){

        let resp = await _clientesDAO.consultarCliente(id_clientes);

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
  
    

    async editarCliente(cliente,id_clientes){
        if (cliente.id_clientes =! id_clientes) {
            throw {
              ok: false,
              mensaje: "el id del cliente no corresponde al enviado",
            };
          }
         await _clientesDAO.editarCliente(cliente);
    }


    async eliminarCliente(cliente){
        return _clientesDAO.eliminarCliente(cliente);
    }
  
}
module.exports={ClientesController}