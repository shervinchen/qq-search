import React from 'react';

function App() {
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
        />
      </div>
      <div>
        <div className="flex items-center border-2 rounded-2xl border-black p-2">
          <img
            src=""
            alt="qq avatar"
            className="w-[80px] h-[80px] overflow-hidden rounded-full mr-4 bg-[#000]"
          />
          <div>
            <div className="text-xl mb-2">Shervin Chen</div>
            <div className="text-xl text-gray-400">758371536</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
