// import { QUERY_ME } from '../../utils/queries';
// import { UPDATE_USER } from '../../utils/mutations';
// import { useQuery, useMutation } from '@apollo/client';
// import PlaySound from "../PlaySound";
// import { useEffect, useState } from 'react';

// const SideBar = ()=> {
//     const { loading, data } = useQuery(QUERY_ME);
//     const emotion = data?.me.pandaEmotion || [];
//     console.log(emotion);
// return(
// <aside className="menu is-mobile">
//                     <p className="menu-label">
//                         Choose what will help Panda!
//                     </p>
//                     <ul className="menu-list">
//                         <li className='columns'><a className = "column" id = "angry" href="https://www.youtube.com/watch?v=fzjfsOUmg3I" target="_blank" rel="noreferrer">Go on a walk</a><PlaySound className = "column" src= {require(`../../pages/audio/walk.mp3`)}/></li>
//                         <li className='columns'><a className = "column" id = "lonely" href="https://www.youtube.com/watch?v=GYEOwClY-cQ" target="_blank" rel="noreferrer">Listen to Music</a><PlaySound className = "column" src= {require(`../../pages/audio/music.mp3`)}/></li>
//                         <li className='columns'><a className = "column" id = "worried" href="https://www.youtube.com/watch?v=JzKZ75ELpro" target="_blank" rel="noreferrer">Journal your feelings</a><PlaySound className = "column" src= {require(`../../pages/audio/write.mp3`)}/></li>
//                         <li className='columns'><a className = "column" id = "disappointed" href="https://www.youtube.com/watch?v=tN5gSwhBMek" target="_blank" rel="noreferrer">Take Deep Breaths</a><PlaySound className = "column" src= {require(`../../pages/audio/breathe.mp3`)}/></li>
//                         <li className='columns'><a className = "column" id = "jealous" href="https://www.youtube.com/watch?v=6CLuYV9Hlkk" target="_blank" rel="noreferrer">Count Five Things I'm Grateful For</a><PlaySound className = "column" src= {require(`../../pages/audio/gratitude.mp3`)}/></li>
//                     </ul>
//                 </aside>
//                 )
// }
// export default SideBar;