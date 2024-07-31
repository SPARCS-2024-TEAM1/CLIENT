// ai 음성 파일 post

import axios from 'axios';

import { client } from '../../../utils/apis/axios';

// export const postAiAudio = async (moodDiaryId: number) => {
//   try {
//     const response = await client.post(`/api/v1/audio`, { moodDiaryId });

//     console.log(response);
//     return response.blob();
//   } catch (err) {
//     console.error('ai 음성 파일 post 에러: ', err);
//     throw err;
//   }
// };

export const postAiAudio = async (moodDiaryId: number) => {
  try {
    const response = await client.post(`/api/v1/audio`, { moodDiaryId }, { responseType: 'blob' });

    console.log(response.data);
    return response.data; // response.data가 Blob 타입으로 반환됩니다.
  } catch (err) {
    console.error('ai 음성 파일 post 에러: ', err);
    throw err;
  }
};
