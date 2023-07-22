import DashboardLayout from '@/components/Layouts/DashboardLayout';
import RootLayout from '@/components/Layouts/RootLayout';
import React, { ReactElement } from 'react';

const UserPage = () => {
    return (
        <div>
            <h1>This is user page </h1>
            <p> This is Nested layout</p>
        </div>
    );
};

export default UserPage;


UserPage.getLayout = function getLayout(page: ReactElement) {
    return(
      <RootLayout>
          <DashboardLayout>
            {page}
        </DashboardLayout>
      </RootLayout>
    )
}