import React, {createContext, useState} from 'react'

export const exampleContext = createContext()
export const ContextProvider = ({children}) => {
  
  
 const [counter, setCounter] = useState(0)
 const title= 'El contador'

    return (
     <exampleContext.Provider value={{counter,setCounter, title}}>

        {children}
     </exampleContext.Provider>
  )
}
//context creado