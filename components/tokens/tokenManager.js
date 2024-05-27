import { Alert } from "react-native";
import api from "../tokens/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getEndPoint from "../endpoints/getEndpoint";

// Function to store access and refresh tokens in AsyncStorage
export const storeTokens = async (access, refresh) => {
  try {
    await AsyncStorage.setItem("AccessToken", access);
    await AsyncStorage.setItem("RefreshToken", refresh);
    console.log("Stored Refresh Token:", refresh);
  } catch (error) {
    console.error("Error storing tokens:", error);
  }
};

// Function to retrieve access token from AsyncStorage
export const getAccessToken = async () => {
  try {
    const access = await AsyncStorage.getItem("AccessToken");
    return access;
  } catch (error) {
    console.error("Error retrieving access token:", error);
    return null;
  }
};

// Function to refresh access token using refresh token
export const refreshAccessToken = async () => {
  try {
    const refresh = await AsyncStorage.getItem("RefreshToken");
    await AsyncStorage.removeItem("AccessToken");
    console.log("Refresh Token:", refresh);
    console.log("Refresh Token Request:", { refresh });

    const response = await api.post(getEndPoint("REFRESH_TOKEN"), null, {
      headers: { refresh },
    });

    console.log("Refresh Token Response:", response);

    const newAccessToken = response.data.access;
    await AsyncStorage.setItem("AccessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null;
  }
};

// Function to check if access token is expired
export const checkAccessTokenExpiry = async () => {
  try {
    const access = await getAccessToken();
    if (!access) {
      return true;
    }
    // Add logic to check if access token is expired based on expiry timestamp
    // Return true if expired, false otherwise
    return false;
  } catch (error) {
    console.error("Error checking access token expiry:", error);
    return true;
  }
};

// Function to handle access token expiration and refreshing
export const handleAccessToken = async () => {
  try {
    const isAccessTokenExpired = await checkAccessTokenExpiry();
    if (isAccessTokenExpired) {
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        // Successfully refreshed access token, store and return true
        await storeTokens(response.access, response.refresh);
        return true;
      } else {
        // Unable to refresh access token, logout user
        await AsyncStorage.removeItem("AccessToken");
        await AsyncStorage.removeItem("RefreshToken");
        Alert.alert("Session Expired", "Please login again");
        return false;
        // Reset navigation to login screen
      }
    }
    return true;
  } catch (error) {
    console.error("Error handling access token:", error);
    return false;
  }
};
