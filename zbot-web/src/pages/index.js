import { useState } from "react";
export default function Home() {
  const [apikey, SetApikey]=useState('');

  return <div className="flex flex-col h-screen"> 
      <nav className="shadow p-2 flex flex-row justify-between items-center">
         <div className="text-xl font-bold"> Zbot </div>
         <div>
          <input type="password" className="border p-2 rounded"
          onChange={e=> SetApikey(e.target.value)} 
          value={apikey}
          placeholder="paste your key here"/>
         </div>
         </nav> 
         
         </div>
}
