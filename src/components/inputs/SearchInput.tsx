import { Icons } from "@assets/icons/icons";
import { PressableOpacity } from "@components/buttons/PressableOpacity";
import { GLOBAL_COLORS } from "@config/theme";
import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, StyleSheet, ActivityIndicator, TextInputProps } from "react-native";

type Props = {
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  onDelete?: () => void;
  containerStyle?: any;
  iconStyle?: any;
} & TextInputProps;

const SearchInput = ({ onChange, onSubmit, containerStyle, iconStyle, ...rest }: Props) => {
  const inputRef = useRef<TextInput | null>(null);
  const [value, setValue] = useState(rest.value);
  const [isTyping, setIsTyping] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  // Handle text input with debounce to reduce excessive calls to onChange
  const handleInputChange = (newValue: string) => {
    setIsTyping(true);
    setValue(newValue);

    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(() => {
      setIsTyping(false);
      if (onChange) {
        onChange(newValue);
      }
    }, 800);

    setTimerId(newTimerId);
  };

  // Clear input and notify parent
  const handleClear = () => {
    setValue("");
    if (onChange) {
      onChange("");
    }
  };

  // Clear timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        {...rest}
        value={value}
        onChangeText={handleInputChange}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
      />
      <View style={styles.iconsContainer}>
        {value?.length! > 0 && (
          <PressableOpacity onPress={handleClear} style={styles.iconButton}>
            <Icons.Close style={[styles.icon, iconStyle]} />
          </PressableOpacity>
        )}
        {isTyping ? (
          <ActivityIndicator size="small" color="#888" />
        ) : (
          <PressableOpacity
            onPress={() => {
              inputRef.current?.focus();
              if (onSubmit) onSubmit();
            }}
          >
            <Icons.Search style={[styles.icon, iconStyle]} />
          </PressableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GLOBAL_COLORS.blueGray,
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 48,
  },
  input: {
    fontSize: 16,
    color: "#000",
    flex: 1
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingRight: 10,
  },
  iconButton: {
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#000",
  },
});

export default SearchInput;
