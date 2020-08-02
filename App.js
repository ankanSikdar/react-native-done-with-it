import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import JwtDecode from "jwt-decode";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const netInfo = useNetInfo();
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) {
      return;
    }
    setUser(JwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return <OfflineNotice />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
