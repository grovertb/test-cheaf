import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey           : 'AIzaSyCq09rt1mif1ZsrAwTodZJfh6Dl7dojfGw',
  appId            : '1:718527084651:web:73f936b7d61a94ec4a192e',
  authDomain       : 'test-cheaf.firebaseapp.com',
  measurementId    : 'G-7HQ2Q463FB',
  messagingSenderId: '718527084651',
  projectId        : 'test-cheaf',
  storageBucket    : 'test-cheaf.appspot.com'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)

export const listAllImages = async () => {
  try {
    const imagesCollection = collection(firestore, 'images')
    const imagesSnapshot = await getDocs(imagesCollection)

    return imagesSnapshot.docs.map((doc) => doc.data().url)
  } catch (error) {
    return []
  }
}
