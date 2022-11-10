import { QUERY_USER } from '../../utils/queries';
import { UPDATE_USER } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import PlaySound from "../PlaySound";
import { useEffect, useState } from 'react';

const emotions=["angry","worried","lonely","jealous","disappointed"];
const PandaEmotion = () => {
    const [createEmotion, { error }] = useMutation(UPDATE_USER)
    const [emotion,setEmotion] = useState("happy");
    var randomEmotion = emotions[Math.floor(Math.random()*emotions.length)];
    const changeEmotion = async () => {
        try {
            await createEmotion({variables:{username:"vixter030",pandaEmotion:randomEmotion}});
            setEmotion(randomEmotion);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(()=>{
       // await changeEmotion()
       setEmotion(randomEmotion);
       changeEmotion();
        },[]);

    return (<div className="column is-half">
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
                    <PlaySound src="Welcome-back.mp3" />
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