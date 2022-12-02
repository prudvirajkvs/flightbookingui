import axios from '../urlConfig/axios';
const BookingApi = async (data: any) => {
  return axios.post('/booking/confirm', data).then((res) => {
    console.log({ res });
    return res.data;
  });
};
export default BookingApi;
