import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl">User Dashboard</h1>
        {/* Add or delete family members, check family status, family card generator options */}
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;