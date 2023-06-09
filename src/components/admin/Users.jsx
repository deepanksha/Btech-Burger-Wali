import React from 'react';

const me = "https://avatars.githubusercontent.com/u/108534677?v=4";

const Users = () => {

    const arr = [1,2,3,4]
  return (
    <section className="tableClass">
         <main>
       <table>
        <thead>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Since</th>
                
            </tr>
        </thead>

        <tbody>
         
         {
          arr.map((i) =>(
            <tr key={i} >
            <td>#ffrstddfv</td>
            <td>Deep</td>
            <td>
                <img src={me} alt="User" />
            </td>
            <td>Admin</td>
            <td>{"06-06-2023"}</td>
         
            </tr>
          ))
         }

        </tbody>
       </table> 
     </main>
    </section>
  )
}

export default Users