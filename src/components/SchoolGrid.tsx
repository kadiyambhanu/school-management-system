import React from 'react';

interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  image: string | null;
}

interface SchoolGridProps {
  schools: School[];
}

const SchoolGrid: React.FC<SchoolGridProps> = ({ schools }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {schools.map((school) => (
        <div key={school.id} className="border rounded shadow p-4 bg-white dark:bg-gray-800">
          {school.image ? (
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
          ) : (
            <div className="w-full h-48 bg-gray-300 rounded mb-4 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <h3 className="text-lg font-semibold mb-2">{school.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{school.address}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{school.city}</p>
        </div>
      ))}
    </div>
  );
};

export default SchoolGrid;
