import React, { useEffect, useState } from 'react'
// import data from "./data.json";
import style from "./women.module.css"

const Women = () => {
    // console.log(data);
const [show, setShow]=useState([])
const [hide,setHide] = useState(false)

    useEffect(()=>{

        fetch(`http://localhost:8080/dresses`)
        .then((res)=>res.json())
        .then((data)=>setShow(data))
        .catch((er)=>console.log(er))
    },[])

console.log(show);

    return (
        <>
            <div className={style.main}>
                {show.map((item) =>

                    <div onMouseEnter={()=>setHide((prev) =>!prev)} className={style.card} key={item.id}>

                        <div className={style.card_img}>
                            <img src={item.image_url} alt='images' />
                        </div>
                        <div className={style.card_header}>
                            <h3 className={style.price}>{"₹"+item.price}</h3>
                            <p>{item.name}</p>
                            {

                            hide && <button className={style.btn}>ADD TO BASKET</button>
                            }
                        </div>
                    </div>
    )}
    </div>

        </>
    )
}

export default Women;