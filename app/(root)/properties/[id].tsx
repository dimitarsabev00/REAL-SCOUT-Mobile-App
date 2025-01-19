import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const PropertiesDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Property - {id}</Text>
    </View>
  );
};

export default PropertiesDetailsScreen;

const styles = StyleSheet.create({});
