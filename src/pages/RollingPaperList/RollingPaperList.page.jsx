import React, { useEffect } from 'react';
import useRecipients from '../../components/common/hooks/useRecipients';

function RollingPaperList() {
  const { rollingPapers, loading, error } = useRecipients();

  return <div>RollingPaperList</div>;
}

export default RollingPaperList;
