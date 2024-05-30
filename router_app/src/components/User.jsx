import React from "react";
import { useSearchParams } from "react-router-dom";

function User(props){
    const[obj, setObj] = useSearchParams();
    let id = obj.get("id");
    let age = obj.get("age");

    return (
        <div>
            <h1>User Page</h1>
            <p>User id : {id}</p>
            <p>User age : {age}</p>
        </div>
    )
}

export default User;