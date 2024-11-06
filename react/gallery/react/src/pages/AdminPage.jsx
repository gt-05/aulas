
export default function AdminPage() {

    let token = localStorage.getItem("token");

    if(!token) {
        location.href = '/login'
        return;
    }

    const logout = ( ) => {
        localStorage.removeItem("token");
        location.href = '/login'
    }

    return (
        <div>
            <h1>Cadastro de produto</h1>
            <button className="bg-black text-white font-bold" onClick={logout}>SAIR</button>
        </div>
    );    
} 