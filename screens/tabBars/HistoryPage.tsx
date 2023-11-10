import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import HistoryItem from "../components/HistporyItem";
import HistoryData from "../tabBars/data/HistoryData";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

function HistoryPage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Post History</Text>
      </View>
      <FlatList 
        data={HistoryData} 
        renderItem={renderItems}
        keyExtractor={item => item.id}/>
    </SafeAreaView>
  );
}

const renderItems = ({ item }) => (
  <HistoryItem
    itemName={item.itemName}
    itemImage={item.itemImage}
    itemPrice={item.itemPrice}
    views={item.views}
    date={item.date}
  />
);
export default HistoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 14,
    marginTop: 20,
    marginBottom: 6
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: "bold",
  }
});