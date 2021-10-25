import React from 'react';
import { useEvent } from 'hooks/admin';
import { useParams } from 'react-router-dom';

function EventAdminLodging() {
  const { eventId } = useParams<RouterUrlParams>();
  const { value: event } = useEvent(eventId);

  return (
    <React.Fragment>
      <h1>Lodging</h1>
      <h2>event.registration_schema.definitions.accommodations</h2>
      <pre>{JSON.stringify(event?.registration_schema?.definitions?.accommodations || '', null, 2)}</pre>
    </React.Fragment>
  );
}

export default EventAdminLodging;
