import axios from "axios";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const GETAPI = () => {
  const GetProductDataUsingFetch = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const updatedData = await  data.json();
      console.log("fetch data", updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleProductUsingFetch = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products/1");
      const updatedData = await data.json();
      // console.log("Data 1", updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const GetProductDataUsingAxios = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/products");
      // console.log("Axios fetch data", data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleProductUsingAxios = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/products/1");
      // console.log("Single product data", data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProductDataUsingFetch();
    getSingleProductUsingFetch();
    GetProductDataUsingAxios();
    getSingleProductUsingAxios();
  }, []);

  return (
    <View>
      <Text>GETAPI</Text>
    </View>
  );
};

export default GETAPI;

const styles = StyleSheet.create({});
