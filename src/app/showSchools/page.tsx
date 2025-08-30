"use client";

import React, { useEffect, useState } from 'react';
import SchoolGrid from '@/components/SchoolGrid';

interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  image: string | null;
}

const ShowSchoolsPage: React.FC = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSchools() {
      try {
        const response = await fetch('/api/schools');
        const data = await response.json();
        setSchools(data);
      } catch (error) {
        console.error('Failed to fetch schools:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchSchools();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading schools...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Schools</h1>
      {schools.length === 0 ? (
        <p className="text-center text-gray-600">No schools found.</p>
      ) : (
        <SchoolGrid schools={schools} />
      )}
    </div>
  );
};

export default ShowSchoolsPage;
