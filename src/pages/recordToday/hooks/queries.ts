import { useMutation } from '@tanstack/react-query';

import { postTodayFeeling, postTodayFeelingType } from '../apis/postTodayFeeling';

export const QUERY_KEY_RECORD_TODAY = {
  postTodayFeeling: postTodayFeeling,
};

// 음성 보내면 요약본 주는 post
export const usePostTodayFeeling = () => {
  const { mutate, isSuccess, data } = useMutation({
    mutationKey: [QUERY_KEY_RECORD_TODAY.postTodayFeeling],
    mutationFn: ({ memberId, mood, assistant, file }: postTodayFeelingType) =>
      postTodayFeeling({ memberId, mood, assistant, file }),
  });

  const moodDiaryId = data?.data?.moodDiaryId;
  const summary = data?.data?.summary;

  return { mutate, isSuccess, data, moodDiaryId, summary };
};
