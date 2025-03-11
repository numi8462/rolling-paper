import React from 'react';
import InformationBar from '../../components/domain/rollingpaper/InformationBar/InformationBar';
import useMessages from '../../components/common/hooks/messages/useMessages';
import { useParams } from 'react-router-dom';

function RollingPaper() {
  const { id } = useParams();
  const { messages, loading, error, refetch } = useMessages(id);

  return (
    <div>
      <InformationBar />
      RollingPaper page, Post id: {id}
    </div>
  );
}

export default RollingPaper;
