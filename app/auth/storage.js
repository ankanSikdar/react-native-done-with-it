import * as SecureStore from "expo-secure-store";

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

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error Deleting the Auth Token ", error);
  }
};

export default {
  storeToken,
  getToken,
  removeToken,
};
