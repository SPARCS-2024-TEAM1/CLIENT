// 핸드폰번호, 닉네임 보내서 유저 가입시키는 post

import { client } from '../../../utils/apis/axios';

export interface postSignupType {
  nickname: string;
  phoneNumber: string;
}

export const postSignup = async ({ nickname, phoneNumber }: postSignupType) => {
  try {
    const { data } = await client.post(`/api/v1/sign-up`, {
      nickname: nickname,
      phoneNumber: phoneNumber,
    });

    return data;
  } catch (err) {
    console.error('유저 회원가입 에러 : ', err);
  }
};
