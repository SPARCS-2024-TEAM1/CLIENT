// 음성 보내면 요약본 주는 post

import { client } from '../../../utils/apis/axios';

export interface postTodayFeelingType {
  memberId: number;
  mood: string;
  assistant: string;
  file: string;
}

export const postTodayFeeling = async ({ memberId, mood, assistant, file }: postTodayFeelingType) => {
  const formData = new FormData();
  formData.append('audioFile', file);

  try {
    const response = await client.post(
      `/api/v1/diary`,
      {
        memberId: memberId,
        mood: mood,
        assistant: assistant,
        file: formData,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.error('음성 보내면 요약본 주는 post : ', err);
  }
};
