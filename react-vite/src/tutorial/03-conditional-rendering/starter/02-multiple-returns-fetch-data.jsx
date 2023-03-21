import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchuser = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([])

  useEffect(()=>{
  
    const fetchuser = async() =>{
      try {
        const response = await fetch(url);
        if(!response.ok){
          setIsError(true)
          setIsLoading(false);
          return
        }
        const result = await response.json();
        setUser(result);
        console.log(result)
        
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
      setIsLoading(false);
    }
    fetchuser()
  },[])

  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>There was en error...</h2>
  }
  const {avatar_url, login, company} = user
  return (
    <>
      <h2>Fetched user</h2>
      <img src={avatar_url} alt="" width={"100px"} />
      <h4>{login} </h4>
      <p>Works at{company}</p>
    
    </>
  )
  
};
export default MultipleReturnsFetchuser;
