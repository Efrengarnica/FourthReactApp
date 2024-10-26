import React, {useState} from 'react'; //Importe 2 cosas a la vez
import TareaFormulario from './TareaFormulario.jsx';
import Tarea from './Tarea.jsx'
import '../hojas-de-estilo/ListaDeTareas.css'
function ListaDeTareas(){

    let arrregloJ = JSON.parse(sessionStorage.getItem('user'));
    let arreglo=[];
    if(arrregloJ!==null){
        arreglo=arrregloJ
    }
    const [tareas, setTareas]=useState(arreglo);//Lo hooks también reciben arreglos 
    
    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
            sessionStorage.setItem('user', JSON.stringify(tareasActualizadas));
        }else{
            window.alert('Escribe una tarea');
        }
    };
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
        sessionStorage.setItem('user', JSON.stringify(tareasActualizadas));
    };
    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
           if(tarea.id=== id){
                tarea.completada= !tarea.completada;
           }
           return tarea
        });
        setTareas(tareasActualizadas);
        sessionStorage.setItem('user', JSON.stringify(tareasActualizadas));
    };

    return(
     <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
            {
               tareas.map( (tarea) =>
                    <Tarea
                        key={tarea.id}  //No se pasa como un promp key es para que NO marque error
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                    />
               ) 
            }
        </div>
      </>
    );
}

export default ListaDeTareas;