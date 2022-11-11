import { QUERY_USER } from '../../utils/queries';
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

    return (<div className="column is-half">
        <section className="hero is-info welcome is-small">
            <div className="hero-body">
                <div className="container">
                    <div className='columns'>
                    <h1 className="title column">
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
    )
}
export default PandaEmotion;