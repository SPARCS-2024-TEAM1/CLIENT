// 챗봇이 대답 생성해주는 post
import { client } from '../../../utils/apis/axios';

export const postChatbotReply = async (moodDiaryId: number) => {
  try {
    const response = await client.post(`/api/v1/answer`, { moodDiaryId });

    console.log(response);
    return response.data;
  } catch (err) {
    console.error('챗봇이 대답 생성해주는 post 에러 : ', err);
    throw err;
  }
};
