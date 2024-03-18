import { createContext , useState  ,useEffect} from "react";
import axios from "axios";


export const  AuthContext= createContext()


export const AuthContextProvider = ({children})=>{
   const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

   const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };
   
  //log out function 

  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };



  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

// we can use everywhere in our application
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>


  );


}  