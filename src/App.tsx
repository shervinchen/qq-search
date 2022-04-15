import React, { useState } from 'react';
import { useQuery } from 'react-query';

import API from './utils/request';
import { useDebounce } from './hooks';
import { QQInfo } from './types';

function App() {
  const [searchText, setSearchText] = useState('');

  const debouncedSearchText = useDebounce<string>(searchText, 500);

  const { isFetching, isError, error, data } = useQuery<
    Promise<QQInfo>,
    Error,
    QQInfo
  >(
    [
      'getQQInfo',
      {
        debouncedSearchText,
      },
    ],
    () =>
      API.get(`/api/qq.info?qq=${debouncedSearchText}`).then(
        (response) => response.data
      )
  );

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
      {isFetching ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : data?.code === 1 ? (
        <div>
          <div className="flex items-center border-2 rounded-2xl border-black p-2">
            <img
              src={data?.qlogo}
              alt="qq avatar"
              className="w-[80px] h-[80px] border-none overflow-hidden rounded-full mr-4 bg-[#000]"
            />
            <div>
              <div className="text-xl mb-2">{data?.name}</div>
              <div className="text-xl text-gray-400">{data?.qq}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>{data?.msg}</div>
      )}
    </div>
  );
}

export default App;
