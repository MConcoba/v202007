import React from "react";
import { View } from "react-native";
import { Button } from "./Styles";

export const MainActionButton: React.FC = ({ children }) => {
  return (
    <View>
      	<Button text={ children } textColor="#01d1e5" backgroundColor="black" />
		</View>
  );
};

export default MainActionButton