import axios from "axios";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

const POSTAPI = () => {
  const createPostUsingFetch = async () => {
    try {
      const data = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Hello",
          userId: 5,
        }),
      });
      const updatedDate = await data.json();
      console.log("updatedDate", updatedDate);
    } catch (error) {
      console.log(error);
    }
  };

  const createPostUsingAXIOS = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title: "Hello",
        userId: 5,
      });
      console.log("response.data", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  };

  const createPostUsingFetchWithQueryParam = async () => {
    try {
      const data = await fetch("https://reqres.in/api/users?role=admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "John Doe",
          job: "Leader",
        }),
      });
      const updatedData = await data.json();
      console.log("updatedData", updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const createPostUsingAxiosWithQueryParam = async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/users?role=admin",
        {
          name: "John Doe",
          job: "Leader",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("data", response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.mainView}>
      <Button
        title="Create POST USING FETCH"
        onPress={() => createPostUsingFetch()}
      />
      <View style={styles.divider} />
      <Button
        title="Create POST USING AXIOS"
        onPress={() => createPostUsingAXIOS()}
      />
      <View style={styles.divider} />
      <Button
        title="Create POST with Fetch and Query Parameters"
        onPress={() => createPostUsingFetchWithQueryParam()}
      />
      <View style={styles.divider} />
      <Button
        title="Create POST with Axios and Query Parameters"
        onPress={() => createPostUsingAxiosWithQueryParam()}
      />
    </View>
  );
};

export default POSTAPI;

const styles = StyleSheet.create({
  mainView: { flex: 1, alignItems: "center", justifyContent: "center" },
  divider: { height: 20 },
});
