import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchServices } from '../api/fetchServices';
import { fetchService } from '../api/fetchService';

export const useServicesQuery = (id) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: id ? ['service', id] : ['services'],
    queryFn: () => (id ? fetchService(id) : fetchServices()),
    initialData: () => {
      if (id) {
        // Check if we have the data in the cache from the list query
        const services = queryClient.getQueryData(['services']);
        if (services) {
          return services.find((service) => service.id === parseInt(id));
        }
      }
      return undefined;
    },
    staleTime: 60000, // Consider data fresh for 1 minute
  });
};
export default useServicesQuery;
