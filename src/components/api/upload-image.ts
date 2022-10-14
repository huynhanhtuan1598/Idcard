import Axios from 'axios';

const urlApiUpload = 'https://api.imgbb.com/1/upload';
const apiKey = 'f7d439c5784190071bcf91db68bd5990';

export const uploadImageApi = async (data: any): Promise<any> => {
  const response = await Axios({
    method: 'POST',
    url: urlApiUpload,
    params: {
      key: apiKey,
    },
    data,
  });

  return response;
};

export const uploadImageS3Api = async (data: any): Promise<any> => {
  const response = await Axios({
    method: 'POST',
    url: '/upload-image',
    data,
  });

  return response;
};
