import { useMutation } from '@tanstack/react-query';

import { postAiAudio } from '../apis/postAiAudio';

export const QUERY_KEY_REPLY = {
  postAiAudio: 'postAiAudio',
};

// ai 음성 파일 post
export const usePostAiAudio = (moodDiaryId: number) => {
  const { mutate, isSuccess, data } = useMutation({
    mutationKey: [QUERY_KEY_REPLY.postAiAudio, moodDiaryId],
    mutationFn: () => postAiAudio(moodDiaryId),
  });

  return { mutate, isSuccess, data };
};
