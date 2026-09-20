import { Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '@/constants/themes';

export default function RootLayout() {
  const scheme = useColorScheme();

  return (
    <ThemeProvider value={scheme === 'light' ? LightTheme : DarkTheme}>
      <Stack />
    </ThemeProvider>
  );
}
