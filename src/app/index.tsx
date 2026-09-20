import { StyleSheet } from 'react-native';
import { ThemedView, ThemedText } from '@/components/themed';

export default function Index() {
  return (
    <ThemedView style={styles.container} colorKind="background">
      <ThemedText>Placeholder.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100,
    borderRadius: 20,
    borderWidth: 5,
  },
});
