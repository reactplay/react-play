interface TcacheObject {
  [key: string]: any;
}

type TReturn = [(s: string) => any, (t: string, c: any) => void];

const cacheObject: TcacheObject = new Object();

const useCacheResponse = (): TReturn => {
  const createCache = (cacheName: string, cacheData: any): any => {
    cacheObject[cacheName] = cacheData;
  };

  const retrieveCache = (cacheName: string): any => {
    return cacheObject[cacheName] ? cacheObject[cacheName] : null;
  };

  return [retrieveCache, createCache];
};

export default useCacheResponse;
