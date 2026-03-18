import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Professor } from '../types';
import { getDeptColor, getDifficultyColor, getInitials } from '../lib/utils';
import { Colors, Shadow } from '../constants/theme';
import { useRouter } from 'expo-router';

function StarRating({ rating }: { rating: number }) {
  return (
    <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Text key={i} style={{ fontSize: 12, color: i <= Math.round(rating) ? '#F59E0B' : '#D1D5DB' }}>★</Text>
      ))}
      <Text style={{ fontSize: 12, color: Colors.muted, marginLeft: 4 }}>{rating.toFixed(1)}</Text>
    </View>
  );
}

export function ProfessorCard({ professor }: { professor: Professor }) {
  const router = useRouter();
  const deptColor = getDeptColor(professor.department);
  const diffColor = getDifficultyColor(professor.difficulty);

  return (
    <TouchableOpacity style={[styles.card, Shadow.card]} onPress={() => router.push(`/professor/${professor.id}`)} activeOpacity={0.85}>
      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: deptColor + '22' }]}>
          <Text style={[styles.avatarText, { color: deptColor }]}>{getInitials(professor.name)}</Text>
        </View>
        <View style={styles.nameCol}>
          <Text style={styles.name}>{professor.name}</Text>
          <Text style={styles.dept}>{professor.department}</Text>
          <StarRating rating={professor.overallRating} />
        </View>
        <ChevronRight size={18} color={Colors.muted} />
      </View>
      <View style={styles.badgesRow}>
        <View style={[styles.badge, { backgroundColor: '#E0F2FE' }]}>
          <Text style={[styles.badgeText, { color: '#0369A1' }]}>{professor.wouldTakeAgain}% retake</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: diffColor + '20' }]}>
          <Text style={[styles.badgeText, { color: diffColor }]}>{professor.difficulty}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: '#F0FDF4' }]}>
          <Text style={[styles.badgeText, { color: '#16A34A' }]}>GPA {professor.avgGPA.toFixed(1)}</Text>
        </View>
      </View>
      <View style={styles.tagsRow}>
        {professor.tags.slice(0, 3).map((tag) => (
          <View key={tag} style={styles.tag}><Text style={styles.tagText}>{tag}</Text></View>
        ))}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.secondary, borderRadius: 16, padding: 16, marginHorizontal: 16, marginBottom: 12 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 },
  avatar: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 18, fontWeight: '800' },
  nameCol: { flex: 1, gap: 3 },
  name: { fontSize: 15, fontWeight: '700', color: Colors.primary },
  dept: { fontSize: 12, color: Colors.muted },
  badgesRow: { flexDirection: 'row', gap: 6, marginBottom: 10 },
  badge: { paddingHorizontal: 9, paddingVertical: 4, borderRadius: 99 },
  badgeText: { fontSize: 11, fontWeight: '600' },
  tagsRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  tag: { backgroundColor: '#F3F4F6', paddingHorizontal: 9, paddingVertical: 4, borderRadius: 99 },
  tagText: { fontSize: 11, color: '#4B5563', fontWeight: '500' },
});
