const config = require('config');
const database = config.get('DB');
const ServicePg = require('../../../../database/postgress');
const _servicio = new ServicePg(database);


class ClientesDAO {


async consultarClientes()  {    
    let sql = `SELECT telefono, nombre, id_clientes, cedula, correo
	FROM public."Clientes";`;
    let respuesta = await _servicio.ejecutarSQL(sql);
    return respuesta
};



async consultarCliente(id_clientes){   
    let sql = `SELECT telefono, nombre, id_clientes, cedula, correo
	FROM public."Clientes" where id_clientes=$1 ;`;
      
    let respuesta = await _servicio.ejecutarSQL(sql, [id_clientes]);
    return respuesta;
  };
  

async guardarCliente(cliente) {
    let sql = `INSERT INTO public."Clientes"(
        telefono, nombre, id_clientes, cedula, correo)
        VALUES ($1, $2, $3, $4, $5);`;
    let valores = [cliente.telefono, cliente.nombre, cliente.id_clientes, cliente.cedula,cliente.correo];
    let respuesta = await _servicio.ejecutarSQL(sql, valores);
    return respuesta
};

 async eliminarCliente(id_clientes) {
    let sql = `DELETE FROM public."Clientes"
	WHERE id_clientes=$1 ;`;    
    let respuesta = await _servicio.ejecutarSQL(sql, [id_clientes]);
    return respuesta
};
  

 async editarcliente(cliente)  {
    let sql =
      `UPDATE public."Clientes"
      SET telefono=$1, nombre=$2, id_clientes=$3, cedula=$4, correo=$5
      WHERE id_clientes=$6;`;
    let valores = [cliente.telefono, cliente.nombre, cliente.id_clientes, cliente.cedula,cliente.correo];
     await _servicio.ejecutarSQL(sql, valores);
   
  };
}
module.exports={ClientesDAO}