export default function DogList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dog Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* This will be populated with actual dog profiles */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Sample Dog</h2>
          <p className="text-gray-600 mb-2">Breed: Labrador</p>
          <p className="text-gray-600 mb-4">Age: 3 years</p>
          <button className="text-indigo-600 hover:text-indigo-800">View Details</button>
        </div>
      </div>
    </div>
  )
} 