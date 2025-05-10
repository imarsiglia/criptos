import { Cryptocurrency } from '@api/models/Cryptocurrency';
import { PressableOpacity } from '@components/buttons/PressableOpacity';
import { ChangeUsdCurrency } from '@components/currency/ChangeUsdCurrency';
import { Label } from '@components/text/Label';
import { Wrapper } from '@components/wrapper/Wrapper';
import { useTheme } from '@context/ThemeContext';
import React from 'react';
import { StyleSheet } from 'react-native';

type CardCryptoProps = Cryptocurrency & {
  onPress: () => void;
};

// Memoized component to render a cryptocurrency card
export const CardCrypto = React.memo(
  ({ id, name, symbol, rank, price_usd, percent_change_1h, onPress }: CardCryptoProps) => {
    const { theme } = useTheme();

    return (
      <PressableOpacity
        style={[{ backgroundColor: theme.colors.card }, styles.container]}
        onPress={onPress}>
        {/* Top row: name and rank */}
        <Wrapper style={styles.row}>
          <Label style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {name} ({symbol})
          </Label>
          <Label style={styles.rank}>#{rank}</Label>
        </Wrapper>

        {/* Bottom row: price and variation */}
        <Wrapper style={[styles.row, { marginTop: 5 }]}>
          <Label>${price_usd}</Label>
          <ChangeUsdCurrency value={price_usd} percent={percent_change_1h} />
        </Wrapper>
      </PressableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: '#F0F0F0',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  name: {
    fontWeight: '600',
    marginRight: 8,
    width: 'auto',
    flex: 1,
  },
  rank: {
    minWidth: 70,
    textAlign: 'right',
  },
});
