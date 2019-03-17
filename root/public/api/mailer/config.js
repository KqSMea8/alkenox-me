import source from './contact_api.json'

const user = 'nox.forms@gmail.com'
const refreshToken = '1/1NvWc_Vg6GLTrSGS9yD5zOg77fhW_ltSxpD_EOkYqj5GoXo8txD2Jo9hHmahSXVO'
const accessToken = 'ya29.GlukBnZVfvg0Or12jHx4r82xkqUlFjfOahCSwhVpDlwgT1uuh1Hx2SJfYj2Mgui2b2BD47C9oAMtSp7o1UC3zO77uAy52Cz3Gdy3QZZAmNryaAoy4qSX0zcKhuXi'

export default {
  user,
  clientId: source.web.client_id,
  clientSecret: source.web.client_secret,
  refreshToken,
  accessToken
}
