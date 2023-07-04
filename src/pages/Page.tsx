import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <>
      <Helmet>
        <title>{title} | react-tailwindcss</title>
      </Helmet>
      <div className="bg-gray-500 p-3">{children}</div>
    </>
  );
};
export default Page;
