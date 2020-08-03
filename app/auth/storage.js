import * as SecureStore from "expo-secure-store";
import JwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error Storing the Auth Token ", error);
  }
};

const getToken = async () => {
  try {
    const authToken = await SecureStore.getItemAsync(key);
    return authToken;
  } catch (error) {
    console.log("Error Getting the Auth Token ", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (token) {
    return JwtDecode(token);
  }
  return null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error Deleting the Auth Token ", error);
  }
};

export default {
  getToken,
  getUser,
  storeToken,
  removeToken,
};
