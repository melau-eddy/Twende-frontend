import { useQuery } from '@tanstack/react-query';
import { getAllRoutes } from '../../services/travelRoutesservice';

export default function useTravelRoutes(from?: string, destination?: string, travelDate?: string) {
  const { data: routes } = useQuery({
    queryKey: ['travelRoutes', { from, destination, travelDate }],
    queryFn: () => getAllRoutes({ from, destination, travelDate }),
  });

  return routes;
}
