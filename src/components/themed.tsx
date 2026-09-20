import { View, Text } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';
import { useTheme, Theme } from 'expo-router';

type ColorKind = Exclude<
  keyof Theme['colors'],
  'text' | 'notification' | 'border'
>;
type FontKind = keyof Theme['fonts'];

type ThemedViewProps = ViewProps & {
  colorKind: ColorKind;
};

export function ThemedView({
  style,
  colorKind,
  ...otherProps
}: ThemedViewProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        { borderColor: colors.border, backgroundColor: colors[colorKind] },
        style,
      ]}
      {...otherProps}
    />
  );
}

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
