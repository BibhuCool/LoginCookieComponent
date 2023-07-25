import { useState } from "react";
import { useCookies } from "react-cookie";

export default function LoginCookieComponent() {
    const [cookie, setCookie, removeCookie] = useCookies(['Username']);
    const [userdetails, setUserdetails] = useState({ username: '', password: '' });


    const HandleUsername = (e) =>{
        setUserdetails({
            username:e.target.value,
            password:userdetails.password
        })
    }

    const HandlePassword = (e) =>{
        setUserdetails({
            username:userdetails.username,
            password:e.target.value
        })
    }

    const HandleLogin = () =>{
        setCookie('Username',userdetails.username, {path:'/',expires:new Date('2023-07-26')});
        alert('Cookie Created');
    }

    const HandleSignout = () =>{
        removeCookie('Username');
    }



    return (
        <>
            <div className="container-fluid">
                <h2>User Login - {cookie.Username} <button className="btn btn-link" onClick={HandleSignout}>Signout</button></h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={HandleUsername} type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input onChange={HandlePassword} type="password" /></dd>
                </dl>
                <button onClick={HandleLogin}>Login</button>
            </div>
        </>
    )
}