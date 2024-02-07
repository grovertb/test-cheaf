import { proxy } from 'valtio'
import axios from 'axios'

import { RequestStatus } from '../utils/types'

export interface Image {
  id: string;
  title: string;
  url: string;
}

interface FetchImages {
  tag?: string;
  isNext?: boolean;
}

class Images {
  images: Image[] = []
  page = 0
  totalPages = 0
  tag = ''
  status: RequestStatus = RequestStatus.idle

  async fetchImages({ isNext, tag }: FetchImages = {}) {
    try {
      this.status = RequestStatus.loading

      if(isNext) {
        this.page++
      } else if(tag !== undefined) {
        this.tag = tag
        this.page = 0
      }

      const { data: { data, totalPages } } = await axios.get(
        // https://api.groplay.app/
        `http://localhost:4001/api/v2/imgur?page=${this.page}${this.tag ? `&tag=${this.tag}` : '' }`,
      )

      this.totalPages = totalPages
      this.images = this.page === 0 ? data : this.images.concat(data)
      this.status = RequestStatus.ready
    } catch (error) {
      this.status = RequestStatus.failed
    }
  }

  async saveSpecialties() {
    // try {
    //   this.status = RequestStatus.loading
    //   const specialties = this.specialtiesEdit.reduce((result: number[], item: SpecialtyType) => {
    //     if(item.isDoctorSpecialty) result.push(item.id)

    //     return result
    //   }, [])
    //   const resp = await Post(`${API_MS}/v2/users/profile/specialties`, { specialties })
    //   if(resp.success)
    //     this.status =  RequestStatus.ready
    //   else
    //     this.status = RequestStatus.failed

    //   return resp.success
    // } catch (error) {
    //   this.status = RequestStatus.failed

    //   return false
    // }
  }
}

export const imagesStore = proxy(new Images())
