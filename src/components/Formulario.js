import React, { Fragment, useState,useEffect } from 'react';




export const Formulario = () => {


//url y const para api de select
const url='https://jsonplaceholder.typicode.com/users'
const [todos, setTodos] = useState([])

const fechtApi= async()=>{

    const response = await fetch(url)
    console.log(response.status)

    const responseJson= await response.json();
    setTodos(responseJson)
    console.log(responseJson)

}



useEffect(() => {
          
    fechtApi();
    
  }, [])
//*********************** */


        const [datos,setDatos]=useState({

            nombre:'',
            apellido:'',
            seleccion:''

        })



        const handleInputChange=(event)=>{

         //   console.log(event.target.value)
            setDatos({

                ...datos,
                [event.target.name]:event.target.value

            })

        }

        const enviarDatos=(event)=>{

                event.preventDefault();
                console.log('Nombre Completo : ' + datos.nombre + ' ' + datos.apellido + ' ' + 'Seleccion : ' + datos.seleccion)



        }

    return (
            <Fragment>

                <div className="container" >
                  <h1 >Formulario</h1>
                
                  <h3>{datos.nombre} {datos.apellido} {datos.seleccion}</h3>
                  <br></br>
                <form className="col" onSubmit={enviarDatos} >

                    <div className="col-md-3 mb-3">

                        <input
                            placeholder="Ingrese Nombre"
                            className="form-control"
                            type="text"
                            name="nombre"
                            onChange={handleInputChange}
                        ></input>

                    </div>
                   
                    <div className="col-md-3  mb-3">

                    <input
                    placeholder="Ingrese Apellido"
                    className="form-control"
                    type="text"
                    name="apellido"
                    onChange={handleInputChange}
                    ></input>

                    </div>

                    <div className="col-md-3  mb-3 ">
                    <select className="form-select" name="seleccion"   onChange={handleInputChange}>{
    
    
                            todos.map((item,index)=>(
                            <option key={index} >{item.name}</option>

                            ))}
                            
                            </select>
                            
                            </div>

                    <div className="col-md-3 "  style={{ 
           
         
                     marginLeft:105 }}>

                   <button className="btn btn-primary" type="submit">Enviar</button>

                    </div>
                   
                
                </form>
                </div>
        </Fragment>
       
    )
}
