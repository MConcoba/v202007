import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import OnboardingNavigator from "./src/navigation/navigator/OnboardingNavigator";

export const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
};

export default App;
