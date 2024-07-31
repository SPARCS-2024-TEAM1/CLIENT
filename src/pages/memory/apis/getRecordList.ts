import { client } from '../../../utils/apis/axios';

const getRecordList = async (memberId: number) => {
  try {
    const response = await client.get(`/api/diary/${memberId}`);
    console.log(response);

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getRecordList;
