import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { Heart, MapPin, Clock } from 'lucide-react-native';
import { Deal } from '../types';
import { useSavedStore } from '../store/savedStore';
import { getDealCategoryColor, getInitials } from '../lib/utils';
import { Colors, Shadow } from '../constants/theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

interface DealCardProps {
  deal: Deal;
  onClaim: (deal: Deal) => void;
}

export function DealCard({ deal, onClaim }: DealCardProps) {
  const { savedDealIds, toggleSavedDeal } = useSavedStore();
  const isSaved = savedDealIds.includes(deal.id);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const catColor = getDealCategoryColor(deal.category);

  const handleSave = () => {
    Animated.sequence([
      Animated.spring(scaleAnim, { toValue: 1.35, useNativeDriver: true, speed: 30 }),
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true, speed: 30 }),
    ]).start();
    toggleSavedDeal(deal.id);
  };

  return (
    <View style={[styles.card, Shadow.card, { width: CARD_WIDTH }]}>
      <View style={styles.topRow}>
        <View style={[styles.logo, { backgroundColor: catColor + '22' }]}>
          <Text style={[styles.logoText, { color: catColor }]}>{getInitials(deal.businessName)}</Text>
        </View>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity onPress={handleSave} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Heart size={17} color={isSaved ? Colors.danger : Colors.muted} fill={isSaved ? Colors.danger : 'transparent'} />
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Text style={styles.bizName} numberOfLines={1}>{deal.businessName}</Text>
      <Text style={styles.headline} numberOfLines={2}>{deal.dealHeadline}</Text>
      <View style={[styles.catPill, { backgroundColor: catColor + '20' }]}>
        <Text style={[styles.catText, { color: catColor }]}>{deal.category}</Text>
      </View>
      <View style={styles.metaRow}>
        <MapPin size={10} color={Colors.muted} />
        <Text style={styles.metaText} numberOfLines={1}>{deal.distanceFromCampus}</Text>
      </View>
      <View style={styles.metaRow}>
        <Clock size={10} color={deal.expiryDate === 'Ongoing' ? Colors.success : Colors.warning} />
        <Text style={[styles.metaText, { color: deal.expiryDate === 'Ongoing' ? Colors.success : Colors.warning }]}>{deal.expiryDate}</Text>
      </View>
      <TouchableOpacity style={styles.claimBtn} onPress={() => onClaim(deal)} activeOpacity={0.85}>
        <Text style={styles.claimBtnText}>Claim Deal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.secondary, borderRadius: 16, padding: 14, marginBottom: 12 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  logo: { width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontSize: 15, fontWeight: '800' },
  bizName: { fontSize: 12, fontWeight: '700', color: Colors.primary, marginBottom: 3 },
  headline: { fontSize: 12, fontWeight: '600', color: '#374151', lineHeight: 16, marginBottom: 8 },
  catPill: { paddingHorizontal: 7, paddingVertical: 3, borderRadius: 99, alignSelf: 'flex-start', marginBottom: 6 },
  catText: { fontSize: 10, fontWeight: '600' },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 3 },
  metaText: { fontSize: 10, color: Colors.muted },
  claimBtn: { backgroundColor: Colors.primary, borderRadius: 9, paddingVertical: 9, alignItems: 'center', marginTop: 8 },
  claimBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },
});
