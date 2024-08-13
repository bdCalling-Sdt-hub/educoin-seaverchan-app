import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode, useContext } from 'react'
import { getStorageRole, getStorageToken } from '../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, setUserRole } from '../redux/apiSlices/userSlice'


// Create a context for global state

interface IUser {
  token : string | null,
  role : string | null,
}

interface ContextProviderProps  {
 user : IUser,
 setUser : React.Dispatch<React.SetStateAction<IUser>>
 loading : boolean,
 setLoading : React.Dispatch<React.SetStateAction<boolean>>
}


export const ContextProvider = React.createContext<ContextProviderProps>({
  setUser : () => {},
  setLoading : ()=> {},
  loading : false,
  user : {
    token : null,
    role : null
  }
})


interface ContextApiProps {
    // Add any custom props for your context here
    children : ReactNode
    // Add methods to manipulate the context state here
 
    // For example:
    // toggleTheme: () => void;
  
}


export const useContextApi = () =>{
 const {setUser,user,loading,setLoading} = useContext(ContextProvider)
 

 return {setUser,user,loading,setLoading}
}

const ContextApi = ({children} : ContextApiProps) => {
  
  const [user,setUser] = React.useState<IUser>(
    {
      token : null,
      role : null
    }
  )
  const [loading,setLoading] = React.useState(true)
  
    const SToken = getStorageToken();
    const SRole = getStorageRole();
    const dispatch = useDispatch();
    


// console.log(SToken,SRole);
    React.useEffect(()=>{
      setLoading(true)
     
        if(SToken && SRole && !user?.token && !user?.role){
          setUser({
            token : SToken,
            role : SRole
          })}
       if(user?.role && user?.token){
         dispatch(setUserRole(user?.role))
         dispatch(setToken(user?.token))
       }   
  
    setLoading(false)
    },[user])

    const shearValue = {
      user,
      setUser,
      loading,setLoading
    }

  return (
    <ContextProvider.Provider value={shearValue}>
  {
    children
  }
    </ContextProvider.Provider>
  )
}

export default ContextApi

const styles = StyleSheet.create({})