import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Heart, MessageCircle } from 'lucide-react-native';
import { Roommate } from '../types';
import { useSavedStore } from '../store/savedStore';
import { getInitials, formatBudget, getCompatibilityColor } from '../lib/utils';
import { Colors, Shadow } from '../constants/theme';
import { useRouter } from 'expo-router';

const AVATAR_COLORS = ['#1A73E8', '#7C3AED', '#059669', '#DC2626', '#D97706', '#0891B2', '#DB2777'];

export function RoommateCard({ roommate, index }: { roommate: Roommate; index: number }) {
  const router = useRouter();
  const { savedRoommateIds, toggleSavedRoommate } = useSavedStore();
  const isSaved = savedRoommateIds.includes(roommate.id);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length];
  const compatColor = getCompatibilityColor(roommate.compatibilityScore ?? 0);

  const handleSave = () => {
    Animated.sequence([
      Animated.spring(scaleAnim, { toValue: 1.35, useNativeDriver: true, speed: 30 }),
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true, speed: 30 }),
    ]).start();
    toggleSavedRoommate(roommate.id);
  };

  return (
    <TouchableOpacity style={[styles.card, Shadow.card]} onPress={() => router.push(`/roommate/${roommate.id}`)} activeOpacity={0.85}>
      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: avatarColor + '22' }]}>
          <Text style={[styles.avatarText, { color: avatarColor }]}>{getInitials(`${roommate.firstName} ${roommate.lastInitial}`)}</Text>
        </View>
        <View style={styles.nameCol}>
          <Text style={styles.name}>{roommate.firstName} {roommate.lastInitial}.</Text>
          <Text style={styles.meta}>{roommate.major} · {roommate.year}</Text>
        </View>
        <View style={[styles.compatBadge, { backgroundColor: compatColor + '20' }]}>
          <Text style={[styles.compatText, { color: compatColor }]}>{roommate.compatibilityScore}% match</Text>
        </View>
      </View>
      <View style={styles.infoRow}>
        <View style={[styles.badge, { backgroundColor: '#EEF2FF' }]}>
          <Text style={[styles.badgeText, { color: '#4338CA' }]}>{roommate.housingType}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: '#F0FDF4' }]}>
          <Text style={[styles.badgeText, { color: '#16A34A' }]}>{formatBudget(roommate.budgetMin, roommate.budgetMax)}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: '#FFF7ED' }]}>
          <Text style={[styles.badgeText, { color: '#C2410C' }]}>{roommate.moveInDate}</Text>
        </View>
      </View>
      <View style={styles.tagsRow}>
        {roommate.personalityTags.slice(0, 3).map((tag) => (
          <View key={tag} style={styles.tag}><Text style={styles.tagText}>{tag}</Text></View>
        ))}
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.msgBtn} onPress={() => router.push(`/chat/${roommate.id}`)} activeOpacity={0.85}>
          <MessageCircle size={15} color="#fff" />
          <Text style={styles.msgBtnText}>Message</Text>
        </TouchableOpacity>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity onPress={handleSave} style={styles.heartBtn} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Heart size={20} color={isSaved ? Colors.danger : Colors.muted} fill={isSaved ? Colors.danger : 'transparent'} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.secondary, borderRadius: 16, padding: 16, marginHorizontal: 16, marginBottom: 12 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 },
  avatar: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 18, fontWeight: '800' },
  nameCol: { flex: 1 },
  name: { fontSize: 15, fontWeight: '700', color: Colors.primary },
  meta: { fontSize: 12, color: Colors.muted, marginTop: 2 },
  compatBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 99 },
  compatText: { fontSize: 11, fontWeight: '700' },
  infoRow: { flexDirection: 'row', gap: 6, marginBottom: 10, flexWrap: 'wrap' },
  badge: { paddingHorizontal: 9, paddingVertical: 4, borderRadius: 99 },
  badgeText: { fontSize: 11, fontWeight: '600' },
  tagsRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap', marginBottom: 12 },
  tag: { backgroundColor: '#F3F4F6', paddingHorizontal: 9, paddingVertical: 4, borderRadius: 99 },
  tagText: { fontSize: 11, color: '#4B5563', fontWeight: '500' },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  msgBtn: { flex: 1, backgroundColor: Colors.primary, borderRadius: 10, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  msgBtnText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  heartBtn: { padding: 4 },
});
