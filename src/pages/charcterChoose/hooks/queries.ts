import { useQuery } from '@tanstack/react-query';
// import { useMutation,useQueryClient } from '@tanstack/react-query';

import { fetchTempSaveContent } from '../apis/fetchTempSaveContent';

export const QUERY_KEY_MAIN = {
  getTempSaveContent: 'getTempSaveContent',
};

// 임시저장 불러오기 GET
export const useGetTempSaveContent = (postId: string, isTempClicked: boolean) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_MAIN.getTempSaveContent, postId],
    queryFn: () => fetchTempSaveContent(postId),
    enabled: !!isTempClicked,
  });

  const tempTopicList = data && data?.data?.topicList;

  return { tempTopicList };
};
