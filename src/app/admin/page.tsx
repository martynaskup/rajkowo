import SupabaseExample from '../../components/shared/SupabaseExample';

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-6">This page demonstrates the connection to your Supabase database.</p>
      
      <div className="my-8">
        <SupabaseExample />
      </div>
      
      <div className="mt-8 text-sm text-gray-600">
        <h3 className="font-semibold mb-2">Setup Instructions:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Replace <code className="bg-gray-100 px-1">your_anon_key_here</code> in next.config.js with your actual Supabase anon key</li>
          <li>Replace <code className="bg-gray-100 px-1">your_table</code> in the SupabaseExample component with an actual table from your database</li>
          <li>Create tables in your Supabase database that match your application's needs</li>
        </ol>
      </div>
    </div>
  );
} 