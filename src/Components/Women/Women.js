import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Store/appContext";
import { get_women_bestsellers } from "../../asosApi";

export const Women = () => {
  const {actions}=useContext(Context)
  const [info, setInfo] = useState([]);
  useEffect(()=>{
    async function settingInfo(){
      let newInfo = await get_women_bestsellers()
      setInfo(newInfo)
    }
    settingInfo()
  },[])

  return (
    <div className="women-container container">
      <div className="products row">{info.map((item, index)=>{
            return(
        <div className="card col-3 m-2" key={index} >
        <img src={"https://"+item.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            {item.price.current.text}
          </p>

//           <button onClick={()=>{
//             // let newWishlist= [...wishlist]
//             // if (newWishlist.includes(item.id)){
//             //   return "Already added"
//             // }
//             // else
//             let newItem= {
//               userId: localStorage.getItem('user-id'),
//               id: item.id,
//               name: item.name,
//               price: item.price.current.value,
//               description:item.name,
//               picture: item.imageUrl
//             }
//             actions.add_to_wishlist(newItem)
//           }
         
          } className="btn btn-secondary">
            Add to wishlist
          </button>
          <Link to={'details/'+item.id }>More Details</Link>
          

//         </div>
//       </div>)
//         })}</div>
//     </div>
//   );
// };
