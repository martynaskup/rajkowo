"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function SupabaseExample() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any[] | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'success' | 'error' | 'loading'>('loading');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // First test the connection
        const { data: connectionTest, error: connectionError } = await supabase.from('dogs').select('count').limit(1);
        
        if (connectionError) {
          if (connectionError.message.includes('anon key')) {
            throw new Error('Supabase anon key is invalid or missing. Please update the NEXT_PUBLIC_SUPABASE_ANON_KEY in next.config.js');
          } else if (connectionError.message.includes('not found')) {
            throw new Error("'dogs' table not found. Please create the necessary tables in your Supabase project first.");
          } else {
            throw connectionError;
          }
        }
        
        setConnectionStatus('success');
        
        // Now try to get actual data
        const { data, error } = await supabase
          .from('dogs')
          .select('*')
          .limit(5);
        
        if (error) throw error;
        
        setData(data);
      } catch (error: any) {
        console.error('Error fetching data:', error);
        setConnectionStatus('error');
        setError(error.message || 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Supabase Connection Test</h2>
      
      {loading && (
        <div className="p-4 bg-blue-50 text-blue-800 rounded mb-4">
          <p>Testing connection to Supabase...</p>
        </div>
      )}
      
      {connectionStatus === 'success' && !error && (
        <div className="p-4 bg-green-100 text-green-800 rounded mb-4">
          <h3 className="font-semibold">✅ Connection Successful!</h3>
          <p>Successfully connected to your Supabase database.</p>
        </div>
      )}
      
      {error && (
        <div className="p-4 bg-red-100 text-red-800 rounded mb-4">
          <h3 className="font-semibold">❌ Connection Error:</h3>
          <p>{error}</p>
          <div className="mt-4 p-3 bg-white rounded border border-red-200">
            <p className="font-semibold">Troubleshooting:</p>
            <ol className="list-decimal pl-5 space-y-1 mt-2">
              <li>Make sure you've replaced <code>your_anon_key_here</code> in next.config.js with your actual Supabase anon key</li>
              <li>Verify that the <code>dogs</code> table exists in your Supabase database</li>
              <li>Check that your database is accessible (not paused in Supabase)</li>
              <li>Ensure your network can connect to Supabase servers</li>
            </ol>
          </div>
        </div>
      )}
      
      {data && (
        <div>
          <h3 className="font-semibold mb-2">Data from Supabase:</h3>
          <pre className="bg-gray-100 p-3 rounded overflow-auto max-h-60">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 