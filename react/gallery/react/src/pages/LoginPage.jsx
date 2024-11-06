import { useState } from "react";

export default function HomePage() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }

        fetch('http://localhost:3000/users/token', options)
            .then(response => response.json())
            .then(body => {
                localStorage.setItem('token', body.token);
                location.href = '/admin'
            })
    }

    return (
        <form className="flex flex-col w-60 m-auto gap-2" onSubmit={submitHandler}>
            <label htmlFor="">Email</label>
            <input type="text" className="border border-black" onChange={event => setEmail(event.target.value)} />
            <label htmlFor="">Senha</label>
            <input type="password" className="border border-black" onChange={event => setPassword(event.target.value)} />
            <button className="bg-black text-white font-bold">Entrar</button>
        </form>
    );    
} 