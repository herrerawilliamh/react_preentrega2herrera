import { useEffect, useState } from "react"
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({itemId}) => {
    const [item,setItem] = useState(null);
    const id = parseInt(useParams().id);
    // console.log(id);
    useEffect(() => {
      pedirItemPorId(id)
      .then((res)=>{
        setItem(res);
      })
    }, [id])
    
  return (
    <div>
        {item&&<ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer