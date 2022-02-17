import React from 'react'

const Tabla = ({Perro}) => {
  return (
    
        <tr className="table-active">
            <td className="table-active">
                {Perro.name}
            </td>
            <td className="table-active">
                {Perro.ingredients}
            </td>
          
        </tr>
        
      
    
    
  )
}

export {Tabla}