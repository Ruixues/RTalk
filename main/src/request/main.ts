
import axios from 'axios';

export async function axiosReq(url: string, data: object): Promise<any|false> {
  let res = await axios.post(url, data);
  if (res.status === 200) {
    return data;
  } else {
    return false;
  }
}
