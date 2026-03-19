import { useState } from 'react';


interface CardProps {
  name: string;
  role: string;
}

export default function TeamCard({ name, role }: CardProps) {
  
  const [votes, setVotes] = useState(0);

  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center w-64 text-center">
     
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
      
     
      <p className="text-lg font-semibold text-blue-600 mb-3">
        Votes: {votes}
      </p>
      
     
      <button 
        onClick={() => setVotes(votes + 1)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
      >
        Vote for {name.split(' ')[0]}
      </button>
    </div>
  );
}