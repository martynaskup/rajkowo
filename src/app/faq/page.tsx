export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="max-w-3xl space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">How do I create a dog profile?</h2>
          <p className="text-gray-600">
            Navigate to the "Create Dog Profile" section and fill out the required information about your dog.
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">How do I scan a dog's QR code?</h2>
          <p className="text-gray-600">
            Use the "Scan QR Code" feature in the app. Position the QR code within the camera frame to view the dog's profile.
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">What should I do if I find a missing dog?</h2>
          <p className="text-gray-600">
            Scan the dog's QR code if available, or check the "Missing Dogs" section to see if the dog has been reported missing.
          </p>
        </div>
        
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">How do I report a missing dog?</h2>
          <p className="text-gray-600">
            Log in to your account and use the "Report Missing" feature in your dog's profile.
          </p>
        </div>
      </div>
    </div>
  )
} 