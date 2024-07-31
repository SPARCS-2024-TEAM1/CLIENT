import { useMutation } from '@tanstack/react-query';

import { postTodayFeeling, postTodayFeelingType } from '../apis/postTodayFeeling';

export const QUERY_KEY_RECORD_TODAY = {
  postTodayFeeling: postTodayFeeling,
};

// 음성 보내면 요약본 주는 post
export const usePostTodayFeeling = ({ memberId, mood, assistant, file }: postTodayFeelingType) => {
  const { mutate, isSuccess, data } = useMutation({
    mutationKey: [QUERY_KEY_RECORD_TODAY.postTodayFeeling, memberId, mood, assistant, file],
    mutationFn: () => postTodayFeeling({ memberId, mood, assistant, file }),
  });

  return { mutate, isSuccess, data };
};
