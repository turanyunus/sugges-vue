import { HTTP } from '../http'

export default {
  getAll: () => HTTP.get('category/getall'),
}
