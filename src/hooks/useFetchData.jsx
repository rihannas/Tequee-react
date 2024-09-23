import { useQuery } from '@tanstack/react-query';

const useFetchData = (queryKey, url) => {
  // Fetch service data using useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });

  return { data, isLoading, error };
};

export default useFetchData;
