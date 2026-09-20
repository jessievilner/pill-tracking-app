import { View, type ViewProps } from 'react-native';
import { useTheme, Theme } from 'expo-router';

type ColorKind = Exclude<
  keyof Theme['colors'],
  'text' | 'notification' | 'border'
>;

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
