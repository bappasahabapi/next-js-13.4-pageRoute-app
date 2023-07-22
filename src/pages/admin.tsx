import DashboardLayout from '@/components/Layouts/DashboardLayout';
import RootLayout from '@/components/Layouts/RootLayout';
import React, { ReactElement } from 'react';

const AdminPage = () => {
    return (
        <div>
            <h1>This is Admin page </h1>
            <p>Here we implement the dashboard layout</p>
        </div>
    );
};

export default AdminPage;


AdminPage.getLayout = function getLayout(page: ReactElement) {
    return(
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}