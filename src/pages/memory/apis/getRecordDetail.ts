import { client } from '../../../utils/apis/axios';

const getRecordDetail = async (moodDiaryId: number) => {
  try {
    const response = await client.get(`/api/v1/diary/${moodDiaryId}`);
    console.log(response);

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getRecordDetail;
