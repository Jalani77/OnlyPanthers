import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Bell } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/theme';

interface HeaderProps {
  showLogo?: boolean;
  title?: string;
  subtitle?: string;
}

export function Header({ showLogo = false, title, subtitle }: HeaderProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <View style={styles.left}>
        {showLogo ? (
          <View style={styles.logoRow}>
            <Text style={styles.logo}>OnlyPantherrs</Text>
            <Text style={styles.paw}>🐾</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.bellWrapper} activeOpacity={0.7}>
        <Bell size={22} color={Colors.primary} strokeWidth={2} />
        <View style={styles.badge}><Text style={styles.badgeText}>3</Text></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.background, paddingHorizontal: 20, paddingBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  left: { flex: 1 },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  logo: { fontSize: 22, fontWeight: '800', color: Colors.primary, letterSpacing: -0.5 },
  paw: { fontSize: 20 },
  title: { fontSize: 24, fontWeight: '800', color: Colors.primary, letterSpacing: -0.5 },
  subtitle: { fontSize: 13, color: Colors.muted, marginTop: 2 },
  bellWrapper: { position: 'relative', padding: 6 },
  badge: { position: 'absolute', top: 2, right: 2, backgroundColor: Colors.danger, borderRadius: 99, width: 16, height: 16, alignItems: 'center', justifyContent: 'center' },
  badgeText: { color: '#fff', fontSize: 9, fontWeight: '700' },
});
