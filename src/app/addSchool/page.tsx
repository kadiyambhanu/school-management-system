import React from 'react';
import SchoolForm from '@/components/SchoolForm';

export default function AddSchoolPage() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Add School</h1>
      <SchoolForm />
    </main>
  );
}
