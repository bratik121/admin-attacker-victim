import React from 'react';


interface TableProps {
  headers: Record<string, string>; // Objeto con texto del encabezado como clave y clave de datos como valor
  data: Record<string, any>[]; // Array de datos, cada elemento es un objeto que representa una fila
  renderCell: (content: any, column: string) => React.ReactNode; // Renderizador personalizado para las celdas
}

const Table: React.FC<TableProps> = ({ headers, data, renderCell }) => {
  // Obtén los encabezados del objeto headers
  const headerTitles = Object.keys(headers);

  return (
    <table className="table">
      <thead>
        <tr>
          {headerTitles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {headerTitles.map((title) => {
              // Usa el mapeo de headers para obtener el valor correcto del objeto item
              const cellData = item[headers[title]];
              return (
                <td key={`${title}-${rowIndex}`}>
                  {renderCell(cellData, headers[title])}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
