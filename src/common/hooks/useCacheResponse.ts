interface TcacheObject {
  [key: string]: any;
}

const cacheObject: TcacheObject = new Object();

const useCacheResponse = (): Function[] => {
  const createCache = (cacheName: string, cacheData: any): any => {
    cacheObject[cacheName] = cacheData;
  };

  const retrieveCache = (cacheName: string): any => {
    return cacheObject[cacheName] ? cacheObject[cacheName] : null;
  };

  return [retrieveCache, createCache];
};

export default useCacheResponse;
