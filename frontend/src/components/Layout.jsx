import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;