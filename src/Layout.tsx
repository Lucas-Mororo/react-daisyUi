import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout: React.FC = () => {
    // Estado para controlar a visibilidade do drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Funções para abrir e fechar o drawer
    const drawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <>
            <div className='w-screen h-screen flex flex-col'>
                <div
                    id="drawer"
                    className={`fixed top-0 left-0 w-64 h-full bg-base-100 shadow-lg transform 
                        ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} 
                        transition-transform duration-300 ease-in-out`}
                >
                    <div className="p-4">
                        <ul className="mt-4">
                            <li>
                                <a href="/" className="block py-2 px-4 text-base-content hover:bg-base-200">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="/ordem-servicos" className="block py-2 px-4 text-base-content hover:bg-base-200">
                                    OS
                                </a>
                            </li>
                            <li>
                                <a href="/estoque" className="block py-2 px-4 text-base-content hover:bg-base-200">
                                    Estoque
                                </a>
                            </li>
                            <li>
                                <a href="/cliente" className="block py-2 px-4 text-base-content hover:bg-base-200">
                                    Cliente
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={`flex-1 ${isDrawerOpen ? "ml-64" : ""}`}>
                    <NavBar drawer={drawer} isDrawerOpen={isDrawerOpen} />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
