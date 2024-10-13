// ai 음성 파일 post

import { client } from '../../../utils/apis/axios';

export const postAiAudio = async (moodDiaryId: number) => {
  try {
    const response = await client.post(`/api/v1/audio`, { moodDiaryId }, { responseType: 'blob' });

    // console.log(response.data);
    return response.data; // Blob 타입으로 반환
  } catch (err) {
    console.error('ai 음성 파일 post 에러: ', err);
    throw err;
  }
};
