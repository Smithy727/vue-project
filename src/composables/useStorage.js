import { ref } from 'vue';
import { projectStorage, projectFirestore, timestamp } from '../Firebase/config';
import { uploadBytesResumable, getDownloadURL, ref as storageRef } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    filePath.value = `covers/${file.name}`;
    const storageReference = storageRef(projectStorage, filePath.value);

    const uploadTask = uploadBytesResumable(storageReference, file);

    console.log('Starting upload...');
    uploadTask.on('state_changed', async (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, (error) => {
      error.value = error.message;
      console.log('Upload failed:', error.value);
    }, async () => {
      const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
      url.value = downloadUrl;
      console.log('Upload completed:', url.value);

      await addDoc(collection(projectFirestore, 'images'), {
        url: url.value,
        createdAt: timestamp()
      });
    });
  };

  return { url, filePath, error, uploadImage };
};

export default useStorage;
