import axios from "axios";

export const cartAction = (id)=>async(dispatch,getState)=> {
    const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)
  dispatch({
    type: "cart_Add_Item",
    payload: {
        product:data._id,
        name: data.name,
        image: data.image,
        price: data.price
    }
  })
  localStorage.setItem("cartItem",JSON.stringify(getState().cart.cartItem))
}

export const removeProudctAction = (id)=>(dispatch,getState)=> {
  dispatch({
      type:"CART_REMOVE_ITEM",
      payload:id
  })
localStorage.setItem("cartItem",JSON.stringify(getState().cart.cartItem))
}