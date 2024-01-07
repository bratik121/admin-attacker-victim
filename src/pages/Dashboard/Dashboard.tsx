import React from 'react';
import NavBar from '../../components/NavBar/Navbar';
import Board from '../../components/Board/Board'; // Asumiendo que Board es tu componente Table
import './Dashboard.css';
import { Button } from '../../components';
import { CustomLink } from "../../components/common";


const Dashboard: React.FC = () => {
  // Un mapeo de los encabezados de la tabla a las claves de los datos
  const headers = {
    'Nombre': 'nombre',
    'Víctima': 'victima',
    'Atacante': 'atacante',
    'Editar': 'editar',
    'Eliminar': 'eliminar'
  };

  // Datos de ejemplo para la tabla
  const data = [
    { nombre: 'Ejemplo 1', victima: 'Víctima 1', atacante: 'Atacante 1', editar: 'Editar', eliminar: 'Eliminar' },
    // ...otros objetos representando las filas de tu tabla
  ];

  // Función de renderizado personalizado para las celdas si es necesario
  const renderCell = (content: any, column: string) => {
    if (column === 'editar') {
      // Imaginemos que cada objeto tiene una propiedad 'id' que es única
      return <button onClick={() => handleEdit(content.id)}>Editar</button>;
    }
    if (column === 'eliminar') {
      return <button onClick={() => handleDelete(content.id)}>Eliminar</button>;
    }
    return content;
  };

  // Funciones para manejar los eventos de editar y eliminar
  const handleEdit = (id: string) => {
    console.log(`Editar ${id}`);
    // Lógica para editar
  };

  const handleDelete = (id: string) => {
    console.log(`Eliminar ${id}`);
    // Lógica para eliminar
  };



  return (
    <div>
        <NavBar />
      <div className='title'>
        <h2 className="text-center text-4xl font-semibold text-primary-600">
				  Sentencias
			  </h2>
        <div className="button-container mt-4">
          <CustomLink to="/sentence-form" className="w-full">
						<Button text="Nueva Sentencia" onClick={() => {}} fill={true} />
					</CustomLink>
        </div>
      </div>
      <div className="dashboard">
        <Board headers={headers} data={data} renderCell={renderCell} />
      </div>
    </div>
  );
};

export default Dashboard;