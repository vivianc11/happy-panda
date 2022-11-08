import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

// May need to be data?.panda.pandaEmotions

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const emotions = data?.pandaEmotions || [];

  return (
    <main>
    <div class="container">
        <div class="columns">
            <div class="column is-3">
                <aside class="menu is-hidden-mobile">
                    <p class="menu-label">
                        Hard Emotions
                    </p>
                    <ul class="menu-list">
                        <li><a href="https://www.youtube.com/watch?v=fzjfsOUmg3I">Anger</a></li>
                        <li><a href="../">Sadness</a></li>
                        <li><a href="https://www.youtube.com/watch?v=JzKZ75ELpro">Worried</a></li>
                    </ul>
                    <p class="menu-label">
                        Easy Emotions
                    </p>
                    <ul class="menu-list">
                        <li><a href="https://www.youtube.com/watch?v=fzjfsOUmg3I">Proud</a></li>
                        <li><a href="../">Happy</a></li>
                        <li><a href="https://www.youtube.com/watch?v=JzKZ75ELpro">Confident</a></li>
                    </ul>
                </aside>
            </div>
            <div class="column is-9">
                <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Welcome Back.
                            </h1>
                            <h2 class="subtitle">
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
