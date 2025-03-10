import React from 'react';
import useRecipients from '../../components/common/hooks/useRecipients';

function RollingPaperList() {
  const { rollingPapers, loading, error } = useRecipients();
  console.log(rollingPapers);
  return <div>RollingPaperList</div>;
}

export default RollingPaperList;
