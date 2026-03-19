import React from 'react';

import { Profile } from './components/Profile';
import TeamCard from './components/TeamCard';

export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>
      
     
      <div className="mb-12"> 
        <Profile name="Your Name" role="roolit" />
      </div>

  
      <div className="flex flex-row gap-4">
        <TeamCard name="Wäinö" role="rooli1" />
        <TeamCard name="Arttu" role="rooli2" />
        <TeamCard name="Tuomas" role="rooli3" />
      </div>
    </div>
  );
}