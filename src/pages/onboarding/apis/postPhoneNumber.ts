import { client } from '../../../utils/apis/axios';

export const postPhoneNumber = async (phoneNumber: string) => {
  try {
    const { data } = await client.post(`/api/v1/phone/code`, {
      phoneNumber: phoneNumber,
    });
    // console.log(data);
    return data;
  } catch (err) {
    console.error('문자인증 회원가입 에러: ', err);
  }
};
