export default function ScanQR() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Scan Dog QR Code</h1>
      <div className="max-w-md mx-auto">
        <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <p className="text-gray-500">Camera will be activated here</p>
        </div>
        <p className="text-center text-gray-600 mb-4">
          Position the QR code within the frame to scan
        </p>
        <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Start Scanning
        </button>
      </div>
    </div>
  )
} 