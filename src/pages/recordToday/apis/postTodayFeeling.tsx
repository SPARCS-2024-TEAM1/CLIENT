// 음성 보내면 요약본 주는 post

import { client } from '../../../utils/apis/axios';

export interface postTodayFeelingType {
  memberId: number;
  mood: string;
  assistant: string;
  file: string;
}

export const postTodayFeeling = async ({ memberId, mood, assistant, file }: postTodayFeelingType) => {
  try {
    const response = await client.post(`/api/v1/diary`, {
      memberId: memberId,
      mood: mood,
      assistant: assistant,
      file: file,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.error('문자인증번호 유효성 에러: ', err);
  }
};
