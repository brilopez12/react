import React from 'react'

export default function tabla() {
  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan</td>
            <td>Perez</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>Gomez</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Carlos</td>
            <td>Sanchez</td>
            <td>40</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
