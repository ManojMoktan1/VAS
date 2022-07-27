import { createContext, useState } from "react";

export interface AuthInterface{
    isLoggedIn: boolean,
    setIsLoggedIn: any,
}

type Props = {
    children : JSX.Element,
}

export const AuthContext = createContext<AuthInterface | null>(null);

export const AuthProvider:React.FC<Props> = ({children}:Props) =>{
 const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

 return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>{children}</AuthContext.Provider>
 )


}
