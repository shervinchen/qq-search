import React from 'react';
import { useDebounce, useInfos } from './hooks';

const Info = ({ text = '' }: { text?: string }) => {
  // text changes trigger search, so we need to debounce the text
  const debouncedSearchText = useDebounce<string>(text, 500);
  const { isFetching, isError, error, data } = useInfos(debouncedSearchText);

  return (
    <>
      {isFetching ? (
        <div>fetching data...</div>
      ) : isError ? (
        <div>{error.message}</div>
      ) : data?.code === 1 ? (
        <div>
          <div className="flex items-center border-2 rounded-2xl border-black p-2">
            <img
              src={data?.qlogo}
              alt={data?.name}
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
    </>
  );
};

export default Info;
