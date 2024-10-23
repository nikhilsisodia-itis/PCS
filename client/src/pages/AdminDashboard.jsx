import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl">Admin Dashboard</h1>
        {/* Family card generation request, add/delete family members options */}
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;