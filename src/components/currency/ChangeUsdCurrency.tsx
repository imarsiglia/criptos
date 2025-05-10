import {Icons} from '@assets/icons/icons';
import {Label} from '@components/text/Label';
import {Wrapper} from '@components/wrapper/Wrapper';
import {formatCryptoPrice, getValueByPercent} from '@utils/functions';
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';

type Props = {
  value: string;
  percent: string;
};

export const ChangeUsdCurrency = React.memo(({value, percent}: Props) => {
  const changeValue = getValueByPercent(value, percent);

  const isPositive = changeValue > 0;
  const isNegative = changeValue < 0;

  const VariantIcon = isPositive
    ? Icons.CaretUp
    : isNegative
    ? Icons.CaretDown
    : () => <></>;
  const sign = isPositive ? '+' : '';
  const color = isPositive ? 'green' : isNegative ? 'red' : 'gray';

  return (
    <Wrapper style={styles.container}>
      <VariantIcon width={20} height={18} color={color} />
      <Label>{sign}</Label>
      <Label>${formatCryptoPrice(changeValue)}</Label>
      <Label>({Number(percent)}%)</Label>
    </Wrapper>
  );
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});
