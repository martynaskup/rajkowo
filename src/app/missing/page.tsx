export default function MissingDogs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Missing Dogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* This will be populated with missing dog reports */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Missing: Max</h2>
          <p className="text-gray-600 mb-2">Last seen: Downtown Area</p>
          <p className="text-gray-600 mb-2">Date: March 15, 2024</p>
          <p className="text-gray-600 mb-4">Contact: 555-0123</p>
          <button className="text-indigo-600 hover:text-indigo-800">Report Found</button>
        </div>
      </div>
    </div>
  )
} 