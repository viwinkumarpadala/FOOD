import React, { createContext,useContext,useReducer } from 'react'

const CartStateContext=createContext()
const cartDispatchcontext=createContext()

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,size:action.size,quantity:action.quantity,price:action.price,img:action.img}]
    
        default:
            console.log("error in reducer")
    }
}

export const Cartprovider=({children})=>{

    const [state,dispatch]=useReducer(reducer,[])

    return (
        <cartDispatchcontext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </cartDispatchcontext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext)
export const useDispatchCart=()=>useContext(cartDispatchcontext)
