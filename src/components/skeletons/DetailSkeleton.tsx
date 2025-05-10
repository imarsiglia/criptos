import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Wrapper } from '@components/wrapper/Wrapper';
import { SkeletonBox } from './SkeletonBox';

export const DetailSkeleton = () => {
  return (
    <Wrapper style={styles.container}>
      <SkeletonBox style={styles.title} />
      <SkeletonBox style={styles.price} />

      <View style={styles.changeGroup}>
        {[1, 2, 3].map((_, idx) => (
          <View key={idx} style={styles.column}>
            <SkeletonBox style={styles.icon} />
            <SkeletonBox style={styles.changeValue} />
            <SkeletonBox style={styles.changePercent} />
          </View>
        ))}
      </View>

      {[1, 2, 3, 4].map((_, i) => (
        <View key={i} style={styles.block}>
          <View style={styles.subtitleRow}>
            <SkeletonBox style={styles.icon} />
            <SkeletonBox style={styles.subtitle} />
          </View>
          <SkeletonBox style={styles.value} />
          {i === 3 && (
            <>
              <SkeletonBox style={styles.value} />
              <SkeletonBox style={styles.value} />
            </>
          )}
        </View>
      ))}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  skeleton: {
    backgroundColor: '#E1E9EE',
    borderRadius: 6,
  },
  title: {
    height: 24,
    width: '60%',
  },
  price: {
    height: 32,
    width: '40%',
    marginBottom: 10,
  },
  changeGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    height: 16,
    width: 16,
  },
  changeValue: {
    height: 16,
    width: 60,
  },
  changePercent: {
    height: 14,
    width: 40,
  },
  block: {
    gap: 8,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subtitle: {
    height: 16,
    width: 120,
  },
  value: {
    height: 16,
    width: '80%',
  },
});
