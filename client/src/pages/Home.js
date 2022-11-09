import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

// May need to be data?.panda.pandaEmotions

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const emotions = data?.pandaEmotions || [];

  return (
    <main>
    <div className="container">
        <div className="columns">
            <div className="column is-3">
                <aside className="menu is-hidden-mobile">
                    <p className="menu-label">
                        Hard Emotions
                    </p>
                    <ul className="menu-list">
                        <li><a href="https://www.youtube.com/watch?v=fzjfsOUmg3I">Anger</a></li>
                        <li><a href="../">Sadness</a></li>
                        <li><a href="https://www.youtube.com/watch?v=JzKZ75ELpro">Worried</a></li>
                    </ul>
                    <p className="menu-label">
                        Easy Emotions
                    </p>
                    <ul className="menu-list">
                        <li><a href="https://www.youtube.com/watch?v=fzjfsOUmg3I">Proud</a></li>
                        <li><a href="../">Happy</a></li>
                        <li><a href="https://www.youtube.com/watch?v=JzKZ75ELpro">Confident</a></li>
                    </ul>
                </aside>
            </div>
            <div className="column is-9">
                <section className="hero is-info welcome is-small">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Welcome Back.
                            </h1>
                            <h2 className="subtitle">
                                Your panda missed you!
                            </h2>
                            <div>
                              <img 
                                src={require('./panda.jpeg')} 
                                alt="sad panda">
                              </img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    </main>
  );
};

export default Home;
