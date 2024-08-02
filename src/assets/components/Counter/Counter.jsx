import { useContext } from "react"
import { exampleContext } from "../Context/Context"
useContext
export const Counter = () => {
    
    const context = useContext(exampleContext)

    return (
    <>
    <h1>{context.title}</h1>
    <hr />
    <p>{context.counter}</p>
</>

  )
}
