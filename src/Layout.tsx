import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

const Layout: React.FC = () => {
    return (
        <div className='w-screen h-screen flex flex-col'>
            <NavBar />
            <main className='w-screen overflow-y-auto overflow-x-hidden flex flex-col pb-20'>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
