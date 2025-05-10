import Link from "next/link";

interface DogProfile {
  id: number;
  name: string;
  breed: string;
  age: number;
  description: string;
}

const sampleDogs: DogProfile[] = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    age: 2,
    description: "Friendly and energetic",
  },
  {
    id: 2,
    name: "Bella",
    breed: "German Shepherd",
    age: 3,
    description: "Loyal and protective",
  },
  {
    id: 3,
    name: "Charlie",
    breed: "Beagle",
    age: 1,
    description: "Curious and playful",
  },
  {
    id: 4,
    name: "Luna",
    breed: "Husky",
    age: 2,
    description: "Energetic and vocal",
  },
  {
    id: 5,
    name: "Rocky",
    breed: "Bulldog",
    age: 4,
    description: "Calm and friendly",
  },
  {
    id: 6,
    name: "Daisy",
    breed: "Poodle",
    age: 2,
    description: "Intelligent and elegant",
  },
  {
    id: 7,
    name: "Buddy",
    breed: "Labrador",
    age: 3,
    description: "Friendly and outgoing",
  },
  {
    id: 8,
    name: "Molly",
    breed: "Corgi",
    age: 2,
    description: "Playful and affectionate",
  },
  {
    id: 9,
    name: "Cooper",
    breed: "Border Collie",
    age: 1,
    description: "Intelligent and active",
  },
  {
    id: 10,
    name: "Sadie",
    breed: "Dachshund",
    age: 3,
    description: "Loyal and brave",
  },
];

function DogCard({ dog }: { dog: DogProfile }) {
  return (
    <div className="flex flex-col items-center border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{dog.name}</h2>
      <p className="text-gray-600 mb-1">Breed: {dog.breed}</p>
      <p className="text-gray-600 mb-2">Age: {dog.age} years</p>
      <p className="text-gray-600 mb-4 text-center">{dog.description}</p>
      <Link
        href={`/dogs/${dog.id}`}
        className="text-indigo-600 hover:text-indigo-800 font-medium"
      >
        View Details
      </Link>
    </div>
  );
}

export default function DogList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dog Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleDogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </div>
  );
}
