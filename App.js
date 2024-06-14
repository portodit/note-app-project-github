import React, { useState } from 'react'
import { Alert, StatusBar, View, StyleSheet } from 'react-native'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, selectedNote, setSelectedNote, editNote, deleteNote }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home setCurrentPage={setCurrentPage} noteList={noteList} setSelectedNote={setSelectedNote} editNote={editNote} deleteNote={deleteNote} />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} selectedNote={selectedNote} editNote={editNote} />
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Catatan Pertama',
      desc: 'Ini adalah deskripsi dari catatan pertama',
    },
  ]);

  const [selectedNote, setSelectedNote] = useState({})

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1

    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
    Alert.alert('Info Tambah Catatan', 'Catatan baru telah ditambahkan!');
  }

  const editNote = (noteId, title, desc) => {
    const noteToUpdate = noteList.find((note) => note.id === noteId);

    if (noteToUpdate) {
      setNoteList(
        noteList.map((note) =>
          note.id === noteId
            ? { ...note, title, desc }
            : note
        )
      );
      Alert.alert('Info Edit Catatan', 'Catatan telah diedit!');
    } else {
      console.log('Tidak ada catatan yang ditemukan dengan ID tersebut');
    }
  }

  const deleteNote = (noteId) => {
    Alert.alert('Konfirmasi Hapus', 'Apakah Anda yakin ingin menghapus catatan ini?', [
      {
        text: 'Ya',
        onPress: () => {
          setNoteList(noteList.filter((item) => item.id !== noteId));
          Alert.alert('Info Hapus Catatan', 'Catatan telah dihapus');
        },
        style: 'destructive',
      },
      {
        text: 'Tidak',
        onPress: () => { console.log('Batal Ditekan'); return },
        style: 'cancel',
      }
    ])
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar showHideTransition={'fade'} animated={true} />
      <CurrentPageWidget
        currentPage={currentPage}
        noteList={noteList}
        setCurrentPage={setCurrentPage}
        addNote={addNote}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        editNote={editNote}
        deleteNote={deleteNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App
