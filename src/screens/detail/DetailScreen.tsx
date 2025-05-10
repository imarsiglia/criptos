import {cryptoServices} from '@api/services/cryptoServices';
import {Icons} from '@assets/icons/icons';
import {ChangeGroupColumns} from '@components/currency/ChangeGroupColumns';
import {DetailSkeleton} from '@components/skeletons/DetailSkeleton';
import {Label} from '@components/text/Label';
import {Wrapper} from '@components/wrapper/Wrapper';
import {WrapperScrollView} from '@components/wrapper/WrapperScrollView';
import {useTheme} from '@context/ThemeContext';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {KEYS_REACT_QUERY} from '@utils/constants';
import React from 'react';
import {StyleSheet} from 'react-native';

export const DetailScreen = () => {
  const {theme} = useTheme();
  const {params} = useRoute();
  const {id} = params as {id: string};

  // Fetch cryptocurrency data by ID
  const {data: crypto, isLoading} = useQuery({
    queryKey: [KEYS_REACT_QUERY.CRYPTO, id],
    queryFn: () => cryptoServices.getCurrency({id}),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    networkMode: 'offlineFirst',
  });

  if (!isLoading && !crypto) {
    return null;
  }

  return (
    <WrapperScrollView
      style={[{backgroundColor: theme.colors.primary}, styles.container]}>
      {isLoading ? (
        <DetailSkeleton />
      ) : crypto ? (
        <>
          {/* Title section with name and rank */}
          <Wrapper style={styles.titleContainer}>
            <Label style={styles.title}>
              {crypto.name} ({crypto.symbol})
            </Label>
            <Label style={styles.title}>#{crypto.rank}</Label>
          </Wrapper>

          {/* Current price */}
          <Label style={styles.price}>
            ${parseFloat(crypto.price_usd).toFixed(2)}
          </Label>

          {/* Percentage change summary */}
          <Wrapper style={styles.row}>
            <ChangeGroupColumns
              priceUsd={crypto.price_usd}
              percentChanges={{
                '1h': crypto.percent_change_1h,
                '24h': crypto.percent_change_24h,
                '7d': crypto.percent_change_7d,
              }}
            />
          </Wrapper>

          {/* Market cap section */}
          <>
            <Wrapper style={styles.sectionSubtitle}>
              <Icons.ArrowTrendUp
                width={16}
                height={16}
                color={theme.colors.text}
              />
              <Label style={styles.subtitle}>Market Cap</Label>
            </Wrapper>
            <Label>${parseFloat(crypto.market_cap_usd).toLocaleString()}</Label>
          </>

          {/* Volume today */}
          <>
            <Wrapper style={styles.sectionSubtitle}>
              <Icons.ArrowsRotate
                width={16}
                height={16}
                color={theme.colors.text}
              />
              <Label style={styles.subtitle}>Volume 24h</Label>
            </Wrapper>
            <Label>${crypto.volume24.toLocaleString()}</Label>
          </>

          {/* Volume previous day */}
          <>
            <Wrapper style={styles.sectionSubtitle}>
              <Icons.ArrowsRotate
                width={16}
                height={16}
                color={theme.colors.text}
              />
              <Label style={styles.subtitle}>Volume Prev</Label>
            </Wrapper>
            <Label>${crypto.volume24a.toLocaleString()}</Label>
          </>

          {/* Supply data */}
          <>
            <Wrapper style={styles.sectionSubtitle}>
              <Icons.EarthAmerica
                width={16}
                height={16}
                color={theme.colors.text}
              />
              <Label style={styles.subtitle}>Supply</Label>
            </Wrapper>
            <Label>Circulating: {crypto.csupply}</Label>
            <Label>Total: {crypto.tsupply}</Label>
            <Label>Max: {crypto.msupply}</Label>
          </>
        </>
      ) : (
        <Label>Currency not found</Label>
      )}
    </WrapperScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  sectionSubtitle: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
});
