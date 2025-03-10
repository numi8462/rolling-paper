import React from 'react';
import InformationBar from '../../components/domain/rollingpaper/InformationBar/InformationBar';
import useMessages from '../../components/common/hooks/messages/useMessages';

function RollingPaper({ id }) {
  const { messages, loading, error, refetch } = useMessages(id);

  return (
    <div>
      <InformationBar />
      RollingPaper
    </div>
  );
}

export default RollingPaper;
