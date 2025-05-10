import Link from "next/link";

interface DogProfile {
  id: number;
  name: string;
  breed: string;
  age: number;
  color: string;
  height: number;
  weight: number;
  diseases: string[];
  description: string;
  location: {
    city: string;
    suburbs: string;
  };
  owner: {
    name: string;
    surname: string;
    phone: string;
    email: string;
  };
}

const sampleDogs: DogProfile[] = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    age: 2,
    color: "Golden",
    height: 60,
    weight: 30,
    diseases: ["None"],
    description: "Friendly and energetic",
    location: {
      city: "Warsaw",
      suburbs: "Mokotów",
    },
    owner: {
      name: "John",
      surname: "Smith",
      phone: "+48 123 456 789",
      email: "john.smith@example.com",
    },
  },
  {
    id: 2,
    name: "Bella",
    breed: "German Shepherd",
    age: 3,
    color: "Black and Tan",
    height: 65,
    weight: 35,
    diseases: ["Hip Dysplasia"],
    description: "Loyal and protective",
    location: {
      city: "Warsaw",
      suburbs: "Wola",
    },
    owner: {
      name: "Anna",
      surname: "Kowalska",
      phone: "+48 987 654 321",
      email: "anna.kowalska@example.com",
    },
  },
  {
    id: 3,
    name: "Charlie",
    breed: "Beagle",
    age: 1,
    color: "Beige",
    height: 30,
    weight: 10,
    diseases: ["None"],
    description: "Curious and playful",
    location: {
      city: "Warsaw",
      suburbs: "Śródmieście",
    },
    owner: {
      name: "Michael",
      surname: "Johnson",
      phone: "+48 555 333 111",
      email: "michael.johnson@example.com",
    },
  },
  {
    id: 4,
    name: "Luna",
    breed: "Husky",
    age: 2,
    color: "Gray",
    height: 55,
    weight: 25,
    diseases: ["None"],
    description: "Energetic and vocal",
    location: {
      city: "Warsaw",
      suburbs: "Bielany",
    },
    owner: {
      name: "Emily",
      surname: "Williams",
      phone: "+48 777 888 999",
      email: "emily.williams@example.com",
    },
  },
  {
    id: 5,
    name: "Rocky",
    breed: "Bulldog",
    age: 4,
    color: "Brindle",
    height: 45,
    weight: 20,
    diseases: ["None"],
    description: "Calm and friendly",
    location: {
      city: "Warsaw",
      suburbs: "Praga",
    },
    owner: {
      name: "David",
      surname: "Brown",
      phone: "+48 222 333 444",
      email: "david.brown@example.com",
    },
  },
  {
    id: 6,
    name: "Daisy",
    breed: "Poodle",
    age: 2,
    color: "White",
    height: 35,
    weight: 12,
    diseases: ["None"],
    description: "Intelligent and elegant",
    location: {
      city: "Warsaw",
      suburbs: "Śródmieście",
    },
    owner: {
      name: "Sophia",
      surname: "Miller",
      phone: "+48 888 777 666",
      email: "sophia.miller@example.com",
    },
  },
  {
    id: 7,
    name: "Buddy",
    breed: "Labrador",
    age: 3,
    color: "Yellow",
    height: 55,
    weight: 30,
    diseases: ["None"],
    description: "Friendly and outgoing",
    location: {
      city: "Warsaw",
      suburbs: "Bielany",
    },
    owner: {
      name: "James",
      surname: "Wilson",
      phone: "+48 444 555 777",
      email: "james.wilson@example.com",
    },
  },
  {
    id: 8,
    name: "Molly",
    breed: "Corgi",
    age: 2,
    color: "Red",
    height: 25,
    weight: 10,
    diseases: ["None"],
    description: "Playful and affectionate",
    location: {
      city: "Warsaw",
      suburbs: "Śródmieście",
    },
    owner: {
      name: "Isabella",
      surname: "Martinez",
      phone: "+48 999 888 777",
      email: "isabella.martinez@example.com",
    },
  },
  {
    id: 9,
    name: "Cooper",
    breed: "Border Collie",
    age: 1,
    color: "Black and White",
    height: 50,
    weight: 20,
    diseases: ["None"],
    description: "Intelligent and active",
    location: {
      city: "Warsaw",
      suburbs: "Praga",
    },
    owner: {
      name: "William",
      surname: "Davis",
      phone: "+48 666 555 444",
      email: "william.davis@example.com",
    },
  },
  {
    id: 10,
    name: "Sadie",
    breed: "Dachshund",
    age: 3,
    color: "Tan",
    height: 20,
    weight: 8,
    diseases: ["None"],
    description: "Loyal and brave",
    location: {
      city: "Warsaw",
      suburbs: "Śródmieście",
    },
    owner: {
      name: "Ava",
      surname: "Garcia",
      phone: "+48 333 222 111",
      email: "ava.garcia@example.com",
    },
  },
];

export default async function DogProfile({
  params,
}: {
  params: { id: string };
}) {
  const id = await Promise.resolve(params.id);
  const dogId = parseInt(id);
  const dog = sampleDogs.find((d) => d.id === dogId);

  if (!dog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Dog Not Found</h1>
        <div className="text-center">
          <Link
            href="/dogs/list"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Back to Dog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href="/dogs/list"
            className="text-indigo-600 hover:text-indigo-800"
          >
            ← Back to Dog List
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6">{dog.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dog Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Dog Information
              </h2>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Basic Details
                </h3>
                <div className="mt-2 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Breed:</span> {dog.breed}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Age:</span> {dog.age} years
                    old
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Color:</span> {dog.color}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Height:</span> {dog.height} cm
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Weight:</span> {dog.weight} kg
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Health Information
                </h3>
                <div className="mt-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Diseases:</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-1">
                    {dog.diseases.map((disease, index) => (
                      <li key={index}>{disease}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Description
                </h3>
                <p className="text-gray-600 mt-2">{dog.description}</p>
              </div>
            </div>

            {/* Location and Owner Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Location & Owner
              </h2>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Location
                </h3>
                <div className="mt-2 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">City:</span>{" "}
                    {dog.location.city}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Suburbs:</span>{" "}
                    {dog.location.suburbs}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Owner Details
                </h3>
                <div className="mt-2 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Name:</span> {dog.owner.name}{" "}
                    {dog.owner.surname}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span>{" "}
                    {dog.owner.phone}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span>{" "}
                    {dog.owner.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
