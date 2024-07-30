import { client } from '../../../utils/apis/axios';

export const postPhoneNumber = async (phoneNumber: string) => {
  try {
    const response = await client.post(`/api/v1/phone/code`, { phoneNumber });

    return response.data;
  } catch (err) {
    console.error('문자인증 회원가입 에러: ', err);
    throw err; // 예외를 다시 던져서 useMutation의 onError 콜백이 실행되도록 함
  }
};
