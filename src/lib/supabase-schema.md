# Supabase Schema for Rajkowo Dog Profile Application

## Tables Recommendation

### 1. dogs
- `id` (uuid, primary key) - Unique identifier for each dog
- `name` (text, not null) - Dog's name
- `breed` (text) - Dog's breed
- `age` (integer) - Dog's age
- `gender` (text) - Dog's gender
- `weight` (float) - Dog's weight
- `description` (text) - Description of the dog
- `image_url` (text) - URL to the dog's image
- `qr_code` (text) - Unique QR code for this dog
- `owner_id` (uuid, foreign key) - Reference to the owner
- `is_missing` (boolean, default: false) - Whether the dog is reported missing
- `created_at` (timestamp with time zone, default: now())
- `updated_at` (timestamp with time zone, default: now())

### 2. owners
- `id` (uuid, primary key) - Unique identifier for each owner
- `first_name` (text, not null) - Owner's first name
- `last_name` (text, not null) - Owner's last name
- `email` (text, unique, not null) - Owner's email
- `phone` (text) - Owner's phone number
- `address` (text) - Owner's address
- `created_at` (timestamp with time zone, default: now())
- `updated_at` (timestamp with time zone, default: now())

### 3. missing_reports
- `id` (uuid, primary key) - Unique identifier for each report
- `dog_id` (uuid, foreign key) - Reference to the missing dog
- `last_seen_location` (text) - Last known location of the dog
- `last_seen_time` (timestamp with time zone) - When the dog was last seen
- `description` (text) - Additional details about the missing dog
- `is_found` (boolean, default: false) - Whether the dog has been found
- `created_at` (timestamp with time zone, default: now())
- `updated_at` (timestamp with time zone, default: now())

## RLS (Row-Level Security) Policies

### For dogs table:
- Allow anyone to read dog profiles
- Only allow authenticated owners to insert or update their own dogs
- Only allow admin to delete dogs

### For owners table:
- Only allow owners to read, update their own profiles
- Only allow admins to read all profiles
- Only allow admins to delete owner profiles

### For missing_reports table:
- Allow anyone to read missing reports
- Only allow authenticated users to create missing reports
- Only allow the report creator or admin to update reports
- Only allow admins to delete reports

## Indexes
- Index on `dogs.owner_id` for faster queries when retrieving all dogs for a specific owner
- Index on `dogs.is_missing` for faster queries when filtering missing dogs
- Index on `missing_reports.dog_id` for faster queries when retrieving reports for a specific dog
- Index on `missing_reports.is_found` for faster queries when filtering active reports

## SQL for Creating Tables

```sql
-- Example SQL for creating the dogs table
CREATE TABLE dogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  breed TEXT,
  age INTEGER,
  gender TEXT,
  weight FLOAT,
  description TEXT,
  image_url TEXT,
  qr_code TEXT,
  owner_id UUID REFERENCES owners(id),
  is_missing BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- You can generate similar SQL for other tables based on the schema above
```

## Next Steps

1. Create these tables in your Supabase project
2. Set up appropriate Row-Level Security policies
3. Create API endpoints in your Next.js application to interact with these tables
4. Set up authentication using Supabase Auth 