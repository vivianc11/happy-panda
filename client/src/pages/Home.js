import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { Link } from "react-router-dom";

// May need to be data?.panda.pandaEmotions

import Auth from '../utils/auth';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const { loading, data } = useQuery(QUERY_USER);
  // eslint-disable-next-line no-unused-vars
  const emotions = data?.pandaEmotions || [];

  return (
    <main>
    <div className="container">
        <div className="columns">
            {Auth.loggedIn() ? (
            <div className="column is-one-quarter">
                <aside className="menu is-mobile">
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
            ) : (
                <p className="column is-one-quarter">
                You need to be logged in to see your pandas. Please{' '}
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
              </p>
            )}
            <div className="column is-half">
                <section className="hero is-info welcome is-small">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Welcome Back.
                                {/* This will tell user what emotion panda has */}
                            </h1>
                            <h2 className="subtitle">
                                Your panda missed you!
                                {/* This will give a hint as to how to help the panda */}
                            </h2>
                            <div>
                              <img 
                                src={require('./pandas/happy.PNG')} 
                                alt="sad panda">
                              </img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {Auth.loggedIn() ? (
            <div className="column is-one-quarter is-5">
                <aside className="menu is-mobile">
                    <p className="menu-label">
                        How to help the panda
                    </p>
                    <ul className="menu-list">
                        <li><a href="https://www.youtube.com/watch?v=fzjfsOUmg3I">Go on a walk</a></li>
                        <li><a href="https://www.youtube.com/watch?v=GYEOwClY-cQ">Listen to Music</a></li>
                        <li><a href="https://www.youtube.com/watch?v=JzKZ75ELpro">Hobby</a></li>
                        <li><a href="https://www.youtube.com/watch?v=JzKZ75ELpro">Journal your feelings</a></li>
                        <li><a href="https://www.youtube.com/watch?v=tN5gSwhBMek">Take Deep Breaths</a></li>
                        <li><a href="https://www.youtube.com/watch?v=6CLuYV9Hlkk">Count Five Things I'm Grateful For</a></li>
                    </ul>
                </aside>
            </div>
            ) : (
                <div/>
            )}
        </div>
    </div>
    </main>
  );
};

export default Home;
