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

  return (
    <>
      <h2>Fetched user</h2>
      <img src={user.avatar_url} alt="" width={"100px"} />
      <h4>{user.login} </h4>
      <p>Works at{user.company}</p>
    
    </>
  )
  
};
export default MultipleReturnsFetchuser;
