import { useMutation } from '@tanstack/react-query';

import { postChatbotReply } from '../apis/postChatbotReply';

export const QUERY_KEY_SUMMARY = {
  postChatbotReply: 'postChatbotReply',
};

export const usePostChatbotReply = (moodDiaryId: number) => {
  const { mutate, isSuccess, isPending, data } = useMutation({
    mutationKey: [QUERY_KEY_SUMMARY.postChatbotReply, moodDiaryId],
    mutationFn: () => postChatbotReply(moodDiaryId),
  });

  const memberId = data?.data?.memberId;
  const answer = data?.data?.answer;
  const summary = data?.data?.summary;

  return { mutate, isSuccess, memberId, answer, summary, isPending };
};
