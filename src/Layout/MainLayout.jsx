import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav />

            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;