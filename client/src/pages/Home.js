import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_EMOTIONS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_EMOTIONS);
  const emotions = data?.emotions || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div/>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
