import { people } from "../../../data"
import Person from "./Person"

const List = () => {

    
  return (
    <>
        <h1>List</h1>

        {people.map((person)=> {
            
            return <Person key={person.name} {...person} />
        })}
    </>
    
  )
}
export default List