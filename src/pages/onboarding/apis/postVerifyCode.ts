// 인증번호 확인 post

import { client } from '../../../utils/apis/axios';

interface postVerifyCodeType {
  phoneNumber: string;
  verificationCode: string;
}

export const postVerifyCode = async ({ phoneNumber, verificationCode }: postVerifyCodeType) => {
  try {
    const response = await client.post(`/api/v1/phone/verification`, {
      phoneNumber: phoneNumber,
      verificationCode: verificationCode,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.error('문자인증번호 유효성 에러: ', err);
  }
};
