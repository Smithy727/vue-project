<template>
    <form>
      <label>
        <input type="file" @change="handleChange">
        <span>Upload Image</span>
      </label>
      <div class="output">
        <div v-if="fileError" class="error">{{ fileError }}</div>
        <div v-if="file">{{ file.name }}</div>
        <ProgressBar v-if="file" :file="file" @complete="uploadFile" />
      </div>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { projectStorage, timestamp } from '../Firebase/config.js'
  import ProgressBar from './ProgressBar'
  
  export default {
    components: { ProgressBar },
    setup() {
      const file = ref(null)
      const fileError = ref(null)
  
      // allowed file types
      const types = ['image/png', 'image/jpeg']
  
      const handleChange = (e) => {
        let selected = e.target.files[0]
        console.log(selected)
        if (selected && types.includes(selected.type)) {
          file.value = selected
          fileError.value = null
        } else {
          file.value = null
          fileError.value = 'Please select an image file (png or jpg)'
        }
      }
  
      const uploadFile = async (data) => {
        const { file, url } = data
        const fileName = file.name
        const storageRef = projectStorage.ref(fileName)
  
        // upload file
        const res = await storageRef.put(file)
  
        // add timestamp to firestore
        const createdAt = timestamp()
  
        // create document in firestore
        const doc = await projectFirestore.collection('images').add({
          url: url,
          createdAt: createdAt
        })
        console.log('Document written with ID: ', doc.id)
      }
  
      return { file, fileError, handleChange, uploadFile }
    }
  }
  </script>
  
  <style>
  form {
    margin: 30px auto 10px;
    text-align: center;
  }
  
  label input {
    height: 0;
    width: 0;
    opacity: 0;
  }
  
  label {
    display: block;
    width: 150px;
    height: 30px;
    border: 1px solid var(--primary);
    border-radius: 6px;
    margin: 10px auto;
    line-height: 30px;
    color: var(--primary);
    font-weight: bold;
    cursor: pointer;
  }
  
  label:hover {
    background: var(--primary);
    color: white;
  }
  
  .output {
    height: 40px;
    font-size: 0.8rem;
  }
  
  .error {
    color: var(--error);
  }
  </style>
  