import { useMutation } from '@tanstack/react-query';

import { postPhoneNumber } from '../apis/postPhoneNumber';

export const QUERY_KEY_ONBOARDING = {
  postPhoneNumber: 'postPhoneNumber',
};

// 문자인증을 통한 회원가입 post
export const usePostPhoneNumber = (phoneNumber: string) => {
  const { mutate, isSuccess } = useMutation({
    mutationKey: [QUERY_KEY_ONBOARDING.postPhoneNumber, phoneNumber],
    mutationFn: () => postPhoneNumber(phoneNumber),
  });

  return { mutate, isSuccess };
};
