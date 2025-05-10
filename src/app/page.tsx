import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Rajkowo</h1>
      <p className="text-lg mb-8">Your trusted platform for managing and finding dog profiles.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/dogs/create" className="p-6 border rounded-lg hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">Create Dog Profile</h2>
          <p>Add your dog's information to our database</p>
        </Link>
        
        <Link href="/dogs/list" className="p-6 border rounded-lg hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">View Dog Profiles</h2>
          <p>Browse through existing dog profiles</p>
        </Link>
        
        <Link href="/scan" className="p-6 border rounded-lg hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">Scan QR Code</h2>
          <p>Scan a dog's QR code to view their profile</p>
        </Link>
        
        <Link href="/missing" className="p-6 border rounded-lg hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">Missing Dogs</h2>
          <p>View and report missing dogs</p>
        </Link>
      </div>
    </div>
  )
}
