import { Icons } from '@assets/icons/icons';
import { Label } from '@components/text/Label';
import { Wrapper } from '@components/wrapper/Wrapper';
import { formatCryptoPrice, getValueByPercent } from '@utils/functions';
import { StyleSheet } from 'react-native';

type Props = {
  priceUsd: string;
  percentChanges: {
    '1h': string;
    '24h': string;
    '7d': string;
  };
};

export const ChangeGroupColumns = ({priceUsd, percentChanges}: Props) => {
  const periods = [
    {label: '1h', percent: percentChanges['1h']},
    {label: '24h', percent: percentChanges['24h']},
    {label: '7d', percent: percentChanges['7d']},
  ];

  return (
    <Wrapper style={styles.container}>
      {periods.map(({label, percent}) => {
        const value = getValueByPercent(priceUsd, percent);
        const isPositive = value > 0;
        const isNegative = value < 0;
        const VariantIcon = isPositive
          ? Icons.CaretUp
          : isNegative
          ? Icons.CaretDown
          : () => <></>;
        const color = isPositive ? 'green' : isNegative ? 'red' : 'gray';

        return (
          <Wrapper key={label} style={styles.column}>
            <Wrapper key={label} style={styles.row}>
              <VariantIcon width={16} height={14} color={color} />
              <Label style={{color}}>{label}</Label>
            </Wrapper>
            <Label>{Number(percent)}%</Label>
            <Label>${formatCryptoPrice(value)}</Label>
          </Wrapper>
        );
      })}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: "center"
  },
  column: {
    alignItems: 'center',
  },
});
