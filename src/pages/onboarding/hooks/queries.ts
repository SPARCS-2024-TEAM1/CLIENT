import { useMutation } from '@tanstack/react-query';

import { postPhoneNumber } from '../apis/postPhoneNumber';
import { postSignup, postSignupType } from '../apis/postSignup';
import { postVerifyCode } from '../apis/postVerifyCode';

export const QUERY_KEY_ONBOARDING = {
  postPhoneNumber: 'postPhoneNumber',
  postVerifyCode: 'postVerifyCode',
  postSignup: 'postSignup',
};

// 문자인증을 통한 회원가입 post
export const usePostPhoneNumber = (phoneNumber: string) => {
  const { mutate, isSuccess } = useMutation({
    mutationKey: [QUERY_KEY_ONBOARDING.postPhoneNumber],
    mutationFn: () => postPhoneNumber(phoneNumber),
  });

  return { mutate, isSuccess };
};

interface postVerifyCodeType {
  phoneNumber: string;
  verificationCode: string;
}

// 문자 인증 및 로그인 post (인증번호 유효성)
export const usePostVerifyCode = ({ phoneNumber, verificationCode }: postVerifyCodeType) => {
  const { mutate, data, isSuccess } = useMutation({
    mutationKey: [QUERY_KEY_ONBOARDING.postVerifyCode, phoneNumber, verificationCode],
    mutationFn: () => postVerifyCode({ phoneNumber, verificationCode }),
  });

  console.log(data);

  return { mutate, data, isSuccess };
};

// 핸드폰번호, 닉네임 보내서 유저 가입시키는 post
export const usePostSignup = ({ nickname, phoneNumber }: postSignupType) => {
  const { mutate, data, isSuccess } = useMutation({
    mutationKey: [QUERY_KEY_ONBOARDING.postSignup, nickname, phoneNumber],
    mutationFn: () => postSignup({ nickname, phoneNumber }),
  });

  return { mutate, data, isSuccess };
};
