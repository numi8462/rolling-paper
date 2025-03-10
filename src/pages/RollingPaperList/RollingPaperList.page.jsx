import React, { useEffect } from 'react';
import useRecipients from '../../components/common/hooks/recipients/useRecipients';

function RollingPaperList() {
  const { rollingPapers, loading, error, refetch } = useRecipients();

  if (rollingPapers) {
    console.log(rollingPapers);
  }

  return (
    <div>
      RollingPaperList
      <ul>
        {rollingPapers &&
          rollingPapers.map((rollingPaper) => {
            return (
              <li key={rollingPaper.id}>
                {rollingPaper.id}
                {rollingPaper.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default RollingPaperList;
