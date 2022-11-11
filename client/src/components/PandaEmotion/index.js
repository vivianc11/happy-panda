import { QUERY_ME } from '../../utils/queries';
import { UPDATE_USER } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import PlaySound from "../PlaySound";
import { useEffect, useState } from 'react';

const emotions=["angry","worried","lonely","jealous","disappointed"];
const hints = ["Panda needs to release some negative energy, exercise really helps!",
"Sometimes writing down your worries helps with anxiety!", 
"If you have no one to talk to, listening to music might help!", 
"Others might have things you want, but you have so many things to be thankful for!",
"It's sad when things don't go your way. Try some calming techniques!"]
const PandaEmotion = () => {
    const [createEmotion, { error }] = useMutation(UPDATE_USER)
    const [emotion,setEmotion] = useState("happy");
    const [hint, setHint] = useState("");
    var randomIndex = Math.floor(Math.random()*emotions.length);
    var randomEmotion = emotions[randomIndex];
    var randomHint = hints[randomIndex];
    const { loading, data } = useQuery(QUERY_ME);
    const username = data?.me.username || [];
    console.log(username);
    const changeEmotion = async () => {
        try {
            await createEmotion({variables:{username:"vixter030",pandaEmotion:randomEmotion}});
            setEmotion(randomEmotion);
            setHint(randomHint);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(()=>{
       // await changeEmotion()
       setEmotion(randomEmotion);
       setHint(randomHint);
       changeEmotion();
        },[]);

    return (
    <div className='columns'>
        <div className="column is-two-thirds">
        <section className="hero is-info welcome is-small">
            <div className="hero-body">
                <div className="container">
                    <div className='columns'>
                    <h1 className="title column mb-0">
                        Panda is {emotion}!
                        {/* This will tell user what emotion panda has */}
                    </h1>
                    <PlaySound className = "column" src= {require(`../../pages/audio/${emotion}.mp3`)}/>
                    </div>
                    <h2 className="subtitle">
                        {hint}
                        {/* This will give a hint as to how to help the panda */}
                    </h2>
                    
                    <div>
                        <img
                            src={require(`../../pages/pandas/${emotion}.PNG`)}
                            alt="sad panda">
                        </img>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <div className="column is-one-third mt-2">
        <aside className="menu is-mobile">
                    <p className="menu-label">
                        Choose what will help Panda!
                    </p>
                    <ul className="menu-list">
                        <li className='columns'><a className = "column" id = "angry" href="https://www.youtube.com/watch?v=fzjfsOUmg3I" target="_blank" rel="noreferrer">Go on a walk</a><PlaySound className = "column" src= {require(`../../pages/audio/walk.mp3`)}/></li>
                        <li className='columns'><a className = "column" id = "lonely" href="https://www.youtube.com/watch?v=GYEOwClY-cQ" target="_blank" rel="noreferrer">Listen to Music</a><PlaySound className = "column" src= {require(`../../pages/audio/music.mp3`)}/></li>
                        <li className='columns'><a className = "column" id = "worried" href="https://www.youtube.com/watch?v=JzKZ75ELpro" target="_blank" rel="noreferrer">Journal your feelings</a><PlaySound className = "column" src= {require(`../../pages/audio/write.mp3`)}/></li>
                        <li className='columns'><a className = "column" id = "disappointed" href="https://www.youtube.com/watch?v=tN5gSwhBMek" target="_blank" rel="noreferrer">Take Deep Breaths</a><PlaySound className = "column" src= {require(`../../pages/audio/breathe.mp3`)}/></li>
                        <li className='columns'><a className = "column" id = "jealous" href="https://www.youtube.com/watch?v=6CLuYV9Hlkk" target="_blank" rel="noreferrer">Count Five Things I'm Grateful For</a><PlaySound className = "column" src= {require(`../../pages/audio/gratitude.mp3`)}/></li>
                    </ul>
                </aside>
    </div>
    </div>
    )
}
export default PandaEmotion;