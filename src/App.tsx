import React, { useState } from 'react';
import Info from './components/Info';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20">
      <h1 className="text-5xl font-bold mb-8">QQ号查询</h1>
      <div className="flex items-center mb-8">
        <span className="text-xl mr-4">QQ</span>
        <input
          type="text"
          placeholder="search qq number..."
          autoComplete="off"
          className="border-x-0 border-t-0 border-b-2 outline-none py-1 px-2 border-color border-b-black"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <Info text={searchText} />
    </div>
  );
}

export default App;
