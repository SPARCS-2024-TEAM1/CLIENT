import { client } from '../../../utils/apis/axios';

const getTodayList = async (memberId: string) => {
  try {
    const response = await client.get(`/api/v1/diary/today/${memberId}`);
    console.log(response);

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getTodayList;
