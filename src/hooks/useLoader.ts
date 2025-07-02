import { useState, useEffect } from 'react';

interface UseLoaderOptions {
  minLoadTime?: number;
  maxLoadTime?: number;
}

export const useLoader = (options: UseLoaderOptions = {}) => {
  const { minLoadTime = 1000, maxLoadTime = 3000 } = options;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, Math.random() * (maxLoadTime - minLoadTime) + minLoadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime, maxLoadTime]);

  return { isLoading, setIsLoading };
};

export default useLoader;