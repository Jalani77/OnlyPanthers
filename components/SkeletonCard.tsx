import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export function SkeletonBox({ height = 20, width: w = '100%', borderRadius = 8, style }: { height?: number; width?: number | string; borderRadius?: number; style?: object }) {
  const opacity = useRef(new Animated.Value(0.3)).current;
  useEffect(() => {
    const anim = Animated.loop(Animated.sequence([
      Animated.timing(opacity, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 0.3, duration: 700, useNativeDriver: true }),
    ]));
    anim.start();
    return () => anim.stop();
  }, []);
  return <Animated.View style={[{ height, width: w as any, borderRadius, backgroundColor: '#CBD5E1', opacity }, style]} />;
}

export function SkeletonNewsCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <SkeletonBox height={80} width={80} borderRadius={12} />
        <View style={styles.textCol}>
          <SkeletonBox height={12} width="40%" borderRadius={6} />
          <SkeletonBox height={16} width="90%" borderRadius={6} style={{ marginTop: 8 }} />
          <SkeletonBox height={14} width="70%" borderRadius={6} style={{ marginTop: 6 }} />
          <SkeletonBox height={12} width="30%" borderRadius={6} style={{ marginTop: 8 }} />
        </View>
      </View>
    </View>
  );
}

export function SkeletonProfCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <SkeletonBox height={52} width={52} borderRadius={26} />
        <View style={styles.textCol}>
          <SkeletonBox height={16} width="60%" borderRadius={6} />
          <SkeletonBox height={12} width="40%" borderRadius={6} style={{ marginTop: 6 }} />
          <SkeletonBox height={12} width="80%" borderRadius={6} style={{ marginTop: 8 }} />
        </View>
      </View>
      <SkeletonBox height={36} width="100%" borderRadius={10} style={{ marginTop: 12 }} />
    </View>
  );
}

export function SkeletonRoommateCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <SkeletonBox height={56} width={56} borderRadius={28} />
        <View style={styles.textCol}>
          <SkeletonBox height={16} width="50%" borderRadius={6} />
          <SkeletonBox height={12} width="60%" borderRadius={6} style={{ marginTop: 6 }} />
        </View>
      </View>
      <SkeletonBox height={12} width="80%" borderRadius={6} style={{ marginTop: 10 }} />
      <SkeletonBox height={36} width="100%" borderRadius={10} style={{ marginTop: 12 }} />
    </View>
  );
}

export function SkeletonDealCard() {
  return (
    <View style={[styles.card, { width: (width - 48) / 2 }]}>
      <SkeletonBox height={56} width={56} borderRadius={12} />
      <SkeletonBox height={14} width="80%" borderRadius={6} style={{ marginTop: 10 }} />
      <SkeletonBox height={12} width="60%" borderRadius={6} style={{ marginTop: 6 }} />
      <SkeletonBox height={32} width="100%" borderRadius={10} style={{ marginTop: 12 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginHorizontal: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 3 },
  row: { flexDirection: 'row', gap: 12 },
  textCol: { flex: 1 },
});
