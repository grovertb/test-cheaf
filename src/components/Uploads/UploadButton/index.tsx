import { ChangeEvent, useRef, useState } from 'react'
import { Fab, CircularProgress } from '@mui/material'
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material'

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { firestore, storage } from '../../../utils/firebase'

const UploadButton = () => {
  const [ progress, setProgress ] = useState(0)
  const [ uploading, setUploading ] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const _handleFileChange = async (ev: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = ev.target.files?.[0]

    try {
      if(!selectedFile) return

      setUploading(true)
      const storageRef = ref(storage, `images/${selectedFile.name}`)
      const uploadTask = uploadBytesResumable(storageRef, selectedFile)

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      })

      await uploadTask

      const url = await getDownloadURL(uploadTask.snapshot.ref)

      addDoc(collection(firestore, 'images'), { url })
    } finally {
      setProgress(0)
      setUploading(false)
    }
  }

  const _handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Fab
      color='primary'
      disabled={uploading}
      onClick={_handleButtonClick}
      sx={{
        bottom  : 16,
        position: 'fixed',
        right   : 16
      }}
      variant='circular'>
      <CloudUploadIcon />
      {
        uploading && (
          <CircularProgress
            size={56}
            sx={{
              color   : 'primary.main',
              position: 'absolute'
            }}
            value={progress}
            variant='determinate' />
        )
      }
      <input
        accept='image/*'
        onChange={_handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type='file' />
    </Fab>
  )
}

export default UploadButton
