import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Bookmark, BookmarkCheck } from 'lucide-react-native';
import { NewsItem } from '../types';
import { useSavedStore } from '../store/savedStore';
import { getCategoryColor } from '../lib/utils';
import { Colors, Shadow } from '../constants/theme';

const SOURCE_COLORS: Record<string, string> = {
  'GSU Signal': '#1A73E8', 'Official GSU': '#000', 'Panther PIN': '#7C3AED', '@GeorgiaStateU': '#0891B2',
};

export function NewsCard({ item }: { item: NewsItem }) {
  const { savedNewsIds, toggleSavedNews } = useSavedStore();
  const isSaved = savedNewsIds.includes(item.id);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleBookmark = () => {
    Animated.sequence([
      Animated.spring(scaleAnim, { toValue: 1.35, useNativeDriver: true, speed: 30 }),
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true, speed: 30 }),
    ]).start();
    toggleSavedNews(item.id);
  };

  const categoryColor = getCategoryColor(item.category);

  return (
    <View style={[styles.card, Shadow.card]}>
      <View style={[styles.thumbnail, { backgroundColor: categoryColor + '25' }]}>
        <Text style={[styles.thumbLabel, { color: categoryColor }]}>{item.category}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.metaRow}>
          <View style={[styles.sourceBadge, { backgroundColor: (SOURCE_COLORS[item.source] ?? '#333') + '18' }]}>
            <Text style={[styles.sourceText, { color: SOURCE_COLORS[item.source] ?? '#333' }]}>{item.source}</Text>
          </View>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.headline} numberOfLines={2}>{item.headline}</Text>
        <View style={styles.bottomRow}>
          <View style={[styles.categoryPill, { backgroundColor: categoryColor + '20' }]}>
            <Text style={[styles.categoryText, { color: categoryColor }]}>{item.category}</Text>
          </View>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity onPress={handleBookmark} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              {isSaved ? <BookmarkCheck size={18} color={Colors.accent} fill={Colors.accent} /> : <Bookmark size={18} color={Colors.muted} />}
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.secondary, borderRadius: 16, marginHorizontal: 16, marginBottom: 12, flexDirection: 'row', overflow: 'hidden' },
  thumbnail: { width: 90, alignItems: 'center', justifyContent: 'center', padding: 8 },
  thumbLabel: { fontSize: 10, fontWeight: '700', textAlign: 'center', textTransform: 'uppercase', letterSpacing: 0.5 },
  content: { flex: 1, padding: 12, gap: 6 },
  metaRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sourceBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 99 },
  sourceText: { fontSize: 10, fontWeight: '700' },
  timestamp: { fontSize: 11, color: Colors.muted },
  headline: { fontSize: 14, fontWeight: '700', color: Colors.primary, lineHeight: 20 },
  bottomRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 },
  categoryPill: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 99 },
  categoryText: { fontSize: 10, fontWeight: '600' },
});
