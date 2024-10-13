// 음성 보내면 요약본 주는 post
import { client } from '../../../utils/apis/axios';

export interface postTodayFeelingType {
  memberId: string;
  mood: string;
  assistant: string;
  file: File | undefined;
}

export const postTodayFeeling = async ({ memberId, mood, assistant, file }: postTodayFeelingType) => {
  const formData = new FormData();
  if (file !== undefined) {
    formData.append('memberId', memberId + '');
    formData.append('mood', mood);
    formData.append('assistant', assistant);
    formData.append('file', file);
  }

  try {
    const response = await client.post(`/api/v1/diary`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (err) {
    console.error('음성 보내면 요약본 주는 post : ', err);
  }
};
