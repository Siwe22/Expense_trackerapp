import React from 'react'

function List(){
    
    return (
    
        <>
        <h1>Type of expenses</h1>
        <ul> Food</ul>
        <ul> Clothing </ul>
        <ul> Entertainment </ul>
    

        

        <table>
            <tr>
                <th> Type of expense</th>
                <th> Budget </th>
                <th> Actual amount spent </th>
            </tr>
            <tr>
                <td> Food </td> <td> R1500 </td> <td> R2000 </td>
            </tr>
            <tr>
            <td> Clothing </td> <td> R1000 </td> <td> R2500 </td>
            </tr>
            <tr>
            <td> Entertainment </td> <td> R500 </td> <td> R750 </td>
            </tr>

        </table>

        </>
        
     )
}

export default List