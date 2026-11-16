import React from 'react';
import {AbsoluteFill, Audio, Sequence, Video as RemotionVideo, Img, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
export type Scene={id:string; text:string; duration:number; media?:string; mediaType?:'video'|'image'; effect?:string};
export const Video:React.FC<{scenes:Scene[]; narration?:string; music?:string; musicVolume?:number; width?:number}> = ({scenes,narration,music,musicVolume=0.15})=>{
 const {fps}=useVideoConfig(); let cursor=0;
 return <AbsoluteFill style={{background:'#050609',color:'white',fontFamily:'Arial'}}>
 {scenes.map(s=>{const from=cursor;const dur=Math.max(1,Math.round(s.duration*fps));cursor+=dur;return <Sequence key={s.id} from={from} durationInFrames={dur}><SceneVisual scene={s}/></Sequence>})}
 {narration?<Audio src={narration}/>:null}{music?<Audio src={music} volume={musicVolume}/>:null}
 </AbsoluteFill>
};
const SceneVisual:React.FC<{scene:Scene}> = ({scene})=>{const f=useCurrentFrame();const {durationInFrames}=useVideoConfig();const scale=interpolate(f,[0,durationInFrames],[1,1.12],{extrapolateRight:'clamp'});const fade=interpolate(f,[0,12,durationInFrames-12,durationInFrames],[0,1,1,0],{extrapolateRight:'clamp'});
 return <AbsoluteFill style={{opacity:fade,background:'#101116'}}>{scene.media?(scene.mediaType==='image'?<Img src={scene.media} style={{width:'100%',height:'100%',objectFit:'cover',transform:`scale(${scale})`}}/>:<RemotionVideo src={scene.media} style={{width:'100%',height:'100%',objectFit:'cover'}}/>):<AbsoluteFill style={{justifyContent:'center',alignItems:'center',padding:80,background:'radial-gradient(ellipse,#24242d,#050609)'}}><div style={{fontSize:48,fontWeight:800,textAlign:'center',letterSpacing:1,textShadow:'0 3px 20px #000'}}>{scene.text}</div><div style={{position:'absolute',bottom:70,fontSize:17,color:'#e4b7b7',letterSpacing:8}}>ARCHIVO • INVESTIGACIÓN</div></AbsoluteFill>}</AbsoluteFill>
};
