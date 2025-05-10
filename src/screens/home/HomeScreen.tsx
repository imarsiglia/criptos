import { Cryptocurrency } from '@api/models/Cryptocurrency';
import { cryptoServices } from '@api/services/cryptoServices';
import { CardCrypto } from '@components/cards/CardCrypto';
import SearchInput from '@components/inputs/SearchInput';
import { Label } from '@components/text/Label';
import { Wrapper } from '@components/wrapper/Wrapper';
import { useTheme } from '@context/ThemeContext';
import { useAppNavigation } from '@hooks/useAppNavigation';
import { useInfiniteRefetch } from '@hooks/useInfiniteRefetch';
import { ROUTES } from '@navigation/routes';
import { useInfiniteQuery } from '@tanstack/react-query';
import { KEYS_REACT_QUERY, LIMIT_PER_LOAD } from '@utils/constants';
import React, { useCallback, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';

export const HomeScreen = () => {
  const {theme} = useTheme();
  const {navigate} = useAppNavigation();
  const {onRefresh} = useInfiniteRefetch([KEYS_REACT_QUERY.CRYPTOS]);
  const [filter, setFilter] = useState('');

  // Fetch paginated list of cryptocurrencies
  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading} =
    useInfiniteQuery({
      initialPageParam: 0,
      queryKey: [KEYS_REACT_QUERY.CRYPTOS],
      queryFn: ({pageParam}) => cryptoServices.fetchCurrencies({pageParam}),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.length === LIMIT_PER_LOAD
          ? allPages.length * LIMIT_PER_LOAD
          : undefined;
      },
    });

  const currencies = data?.pages.flatMap(page => page.data) ?? [];

  // Navigate to detail screen on card press
  const handleCardPress = useCallback(
    (id: string) => {
      navigate(ROUTES.DETAIL, {id});
    },
    [navigate],
  );

  const renderItem = useCallback(
    ({item}: {item: Cryptocurrency}) => (
      <CardCrypto {...item} onPress={() => handleCardPress(item.id)} />
    ),
    [],
  );

  const keyExtractor = useCallback(
    (item: Cryptocurrency, index: number) => `${item.id}-${index}`,
    [],
  );

  // Filter results locally by name or symbol
  const filteredCurrencies = useMemo(() => {
    return currencies.filter(
      coin =>
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter, currencies]);

  return (
    <Wrapper
      style={[{backgroundColor: theme.colors.primary}, styles.container]}>
      <Wrapper style={styles.searchWrapper}>
        <SearchInput
          containerStyle={{height: 38}}
          placeholder="Search by name, symbol ..."
          onChange={value => setFilter(value as string)}
        />
      </Wrapper>

      <FlatList
        data={filteredCurrencies}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Wrapper style={{height: 10}} />}
        contentContainerStyle={[
          styles.content,
          {backgroundColor: theme.colors.primary},
        ]}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.3}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
            tintColor={theme.colors.text}
          />
        }
        ListFooterComponent={
          isFetchingNextPage && !isLoading ? (
            <ActivityIndicator
              size="small"
              color={theme.colors.text}
              style={{marginTop: 20}}
            />
          ) : null
        }
        ListEmptyComponent={
          !isLoading && filteredCurrencies.length === 0 ? (
            <Label style={{textAlign: 'center'}}>No results found.</Label>
          ) : null
        }
        refreshing={isLoading}
        onRefresh={onRefresh}
        initialNumToRender={LIMIT_PER_LOAD}
        maxToRenderPerBatch={LIMIT_PER_LOAD}
        windowSize={LIMIT_PER_LOAD}
        removeClippedSubviews={true}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    padding: 12,
  },
  content: {
    padding: 16,
    paddingBottom: 80,
  },
});
