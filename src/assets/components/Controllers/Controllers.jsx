import { useContext } from 'react'
import { exampleContext } from '../Context/Context'

export const Controllers = () => {
  const context = useContext(exampleContext)

    return (
    
      <div className='buttons'>
        <button onClick={()=> context.setCounter(context.counter+1)}>Sumar</button>
        <button onClick={()=> context.setCounter(0)}>Resetear</button>  
        <button onClick={()=> context.setCounter(context.counter-1)}>Restar</button>

    </div>
    

  )
}

