import {registerRoot} from 'remotion';import React from 'react';import {Composition} from 'remotion';import {Video,Scene} from './remotion__Video';
const Root:React.FC=()=> <Composition id="CinematicDoc" component={Video} durationInFrames={900} fps={30} width={1920} height={1080} defaultProps={{scenes:[{id:'intro',text:'Un misterio sin resolver',duration:30} as Scene]}} calculateMetadata={({props})=>({durationInFrames:Math.max(1,props.scenes.reduce((a:number,s:Scene)=>a+s.duration*30,0))})}/>;
registerRoot(Root);
