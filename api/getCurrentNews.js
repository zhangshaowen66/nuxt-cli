import { $axios } from '~/plugins/state/axios.js'
export default function (obj) {
  return $axios.call(this, '/deakingOfficialNews/getCurrentNews', obj)
}
