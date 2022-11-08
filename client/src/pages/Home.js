import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

// May need to be data?.panda.pandaEmotions

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const emotions = data?.pandaEmotions || [];

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
