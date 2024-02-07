import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { proxy } from 'valtio'
import { auth } from '../utils/firebase'
import { RequestStatus } from '../utils/types'

const googleProvider = new GoogleAuthProvider()

class User {
  status = RequestStatus.idle

  async loginWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      this.status = RequestStatus.failed

      setTimeout(() => {
        this.status = RequestStatus.idle
      }, 3000)
    }
  }

  async signUp(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      this.status = RequestStatus.failed

      setTimeout(() => {
        this.status = RequestStatus.idle
      }, 3000)
    }
  }

  async signIn(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      this.status = RequestStatus.failed

      setTimeout(() => {
        this.status = RequestStatus.idle
      }, 3000)
    }
  }
}

export const userStore = proxy(new User())
