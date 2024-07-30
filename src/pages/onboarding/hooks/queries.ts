import { useMutation } from '@tanstack/react-query';

import { postPhoneNumber } from '../apis/postPhoneNumber';
import { postVerifyCode } from '../apis/postVerifyCode';

export const QUERY_KEY_ONBOARDING = {
  postPhoneNumber: 'postPhoneNumber',
  postVerifyCode: 'postVerifyCode',
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

  return { mutate, data, isSuccess };
};
