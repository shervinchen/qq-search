import { useQuery } from 'react-query';
import API from '../utils/request';
import { QQInfo } from '../types';

export const useInfos = (text: string) => {
  return useQuery<Promise<QQInfo>, Error, QQInfo>(
    [
      'getQQInfo',
      {
        text,
      },
    ],
    () => API.get(`/api/qq.info?qq=${text}`).then((response) => response.data)
  );
};
