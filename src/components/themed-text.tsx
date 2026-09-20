import { Text, type TextProps } from 'react-native';
import { useTheme, Theme } from 'expo-router';

type FontKind = keyof Theme['fonts'];

type ThemedTextProps = TextProps & { fontKind?: FontKind };

export function ThemedText({
  style,
  fontKind = 'regular',
  ...otherProps
}: ThemedTextProps) {
  const { fonts, colors } = useTheme();

  return (
    <Text
      style={[{ color: colors.text }, fonts[fontKind], style]}
      {...otherProps}
    />
  );
}
