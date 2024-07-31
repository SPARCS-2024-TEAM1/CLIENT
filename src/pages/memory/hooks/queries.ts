import { useQuery } from '@tanstack/react-query';
// import { useMutation,useQueryClient } from '@tanstack/react-query';

import getRecordList from '../apis/getRecordList';

export const QUERY_KEY_MEMORY = {
  getRecordList: 'getRecordList',
};

// 지난 기록 리스트 get
export const useGetRecordList = (memberId: number, isLastClicked: boolean) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_MEMORY.getRecordList, memberId],
    queryFn: () => getRecordList(memberId),
    enabled: !!isLastClicked,
  });

  const moodDiaryCards = data?.data?.moodDiaryCards;

  return { moodDiaryCards };
};
