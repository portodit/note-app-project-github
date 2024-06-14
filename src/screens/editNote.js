import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomButton from '../components/customButton'
import CustomTextInput from '../components/customTextInput'

const EditNote = ({ setCurrentPage, selectedNote, editNote }) => {
  const [title, setTitle] = useState(selectedNote.title)
  const [desc, setDesc] = useState(selectedNote.desc)

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Catatan</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Edit Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Edit Deskripsi"
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#007BFF"
          color="#fff"
          text="Simpan Perubahan"
          width="100%"
          onPress={() => {
            editNote(selectedNote.id, title, desc) 
            setCurrentPage('home')
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#6C757D"
          color="#fff"
          text="Kembali ke Beranda"
          width="100%"
          onPress={() => {
            setCurrentPage('home')
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  spacerTop: {
    marginTop: 20,
  },
})

export default EditNote;