import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import CustomButton from '../components/customButton';

const NoteCard = ({ item, setCurrentPage, setSelectedNote, deleteNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC107"
        color="#000"
        text="Edit"
        fontSize={14}
        width={100}
        onPress={() => {
          setSelectedNote(item)
          setCurrentPage('edit')
        }}
      />
      <CustomButton
        backgroundColor="#DC3545"
        color="#fff"
        text="Delete"
        fontSize={14}
        width={100}
        onPress={() => { 
          deleteNote(item.id)
        }}
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, setSelectedNote, deleteNote }) => (
  <View style={styles.container}>
    <CustomButton
      backgroundColor="#28A745"
      color="#fff"
      text="Tambah Catatan"
      width="100%"
      onPress={() => {
        setCurrentPage('add')
      }}
    />
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard key={item.id} item={item} setCurrentPage={setCurrentPage} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F8F9FA',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 18,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;