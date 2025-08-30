import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            School Management System
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A comprehensive platform for managing school information with modern web technologies
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Schools</h2>
              <p className="text-gray-600 mb-6">
                Easily add new schools to the system with detailed information including contact details and images.
              </p>
              <Link
                href="/addSchool"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add New School
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">View Schools</h2>
              <p className="text-gray-600 mb-6">
                Browse through all registered schools in an organized grid layout with images and essential details.
              </p>
              <Link
                href="/showSchools"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                View Schools
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-blue-600 text-3xl mb-2">📝</div>
                <h3 className="font-semibold mb-2">Form Validation</h3>
                <p className="text-gray-600 text-sm">Comprehensive form validation with Zod and react-hook-form</p>
              </div>
              <div className="p-4">
                <div className="text-green-600 text-3xl mb-2">🖼️</div>
                <h3 className="font-semibold mb-2">Image Upload</h3>
                <p className="text-gray-600 text-sm">Upload and manage school images with automatic storage</p>
              </div>
              <div className="p-4">
                <div className="text-purple-600 text-3xl mb-2">📱</div>
                <h3 className="font-semibold mb-2">Responsive Design</h3>
                <p className="text-gray-600 text-sm">Fully responsive design that works on mobile and desktop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
