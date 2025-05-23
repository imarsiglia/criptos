import { NavigationProps } from "@navigation/types";
import { useNavigation } from "@react-navigation/native";

export const useAppNavigation = () => {
  return useNavigation<NavigationProps>();
};
