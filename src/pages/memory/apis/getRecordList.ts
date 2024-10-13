import { client } from '../../../utils/apis/axios';

const getRecordList = async (memberId: string) => {
  try {
    const response = await client.get(`/api/v1/diary/list/${memberId}`);

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getRecordList;
