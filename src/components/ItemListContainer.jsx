import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    // console.log(categoria);
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if(categoria){
                  setProductos(res.filter((prod) => prod.categoria === categoria));
                }else{
                  setProductos(res);
                }
            })
    }, [categoria])
    
  return (
    <ItemList productos={productos}/>
  )
}

export default ItemListContainer