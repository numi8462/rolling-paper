import React, { useEffect, useState } from 'react';
import recipientService from '../../api/services/recipients.services';

function RollingPaperList() {
  const [rollingPapers, setRollingPapers] = useState();

  async function getRecipients() {
    const res = await recipientService.getRecipients();
    const { results, count } = res.data;
    console.log(results);
    return results;
  }

  useEffect(() => {
    const results = getRecipients();
    setRollingPapers(results);
  }, []);

  console.log(rollingPapers);

  return <div>RollingPaperList</div>;
}

export default RollingPaperList;
