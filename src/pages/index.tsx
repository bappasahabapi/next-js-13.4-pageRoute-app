import RootLayout from '@/components/Layouts/RootLayout';
import React, { ReactElement } from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Antd Layout</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}