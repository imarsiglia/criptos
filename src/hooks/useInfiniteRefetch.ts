import { useQueryClient } from '@tanstack/react-query';

/**
 * Hook para refrescar una consulta infinita usando su queryKey
 * @param queryKey Clave de la consulta en useInfiniteQuery
 * @returns onRefresh() para usar en FlatList o FlashList
 */
export const useInfiniteRefetch = (queryKey: unknown[]) => {
  const queryClient = useQueryClient();

  const onRefresh = () => {
    queryClient.invalidateQueries({
      queryKey,
    });
  };

  return { onRefresh };
};
