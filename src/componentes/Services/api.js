import axios from 'axios';
import md5 from 'md5';

const publicKey = '67e4a399fb5dc04f90f035299bc4a07b';
const privateKey = 'be0efbd6cf337bc9dc690565b6161a281d6bb9df';

const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    apikey: publicKey,
    ts: ts,
    hash: hash,
  },
});
export default api;
