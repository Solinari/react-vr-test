import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere,
  Cylinder,
  DirectionalLight,
  AmbientLight,
  Model,
  VrButton
} from 'react-vr';


// function tree
const Tree = props => {
  return (
    <View style={props.style}>
      <Sphere
        lit
        style={{ color: 'green', transform: [{ translateY: 0.8}] }}
      >
      </Sphere>
      <Cylinder
        lit
        style={{ color: 'brown' }}
        radiusBottom={0.05}
        radiusTop={0.05}
      />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View
      >
        {/* <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text> */}
        {/* <Pano source={asset('chess-world.jpg')}/> */}
        {/* Module 7 */}
        {/* <Model
          source={{
            obj: asset('astronaut.obj'),
            mtl: asset('astronaut.mtl')
          }}
          style={{
            transform: [{ translate: [0,-1,-2] }]
          }}
          lit
          // texture={asset('chess-world.jpg')} // .mtl file overwrites this
          // wireframe
        />
        <DirectionalLight
          style={{ transform: [{ translateX: -1000 }]}}
        />
        <AmbientLight
        intensity={0.4}
        /> */}
        {/* M0dule 8 multiple 3d objects into one component */}
        {/* <Tree
          style={{ transform: [{ translateZ: -3}]}}
        />
        <Tree
          style={{ transform: [{ translateZ: -3}, {translateX: 1.1} ]}}
        />
        <DirectionalLight
          style={{ transform: [{ translateX: -1000 }]}}
        />
        <AmbientLight
          intensity={0.4}/> */}
          {/* Module 9 - capuring ui input */}
        <Pano source={asset('chess-world.jpg')}/>
        {/* <View
            // Module 9 styling and event handlers
          style={{
            width: 2,
            height: 2,
            backgroundColor: '#FFF',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}],
          }}
          //onEnter={() => { console.log("onEnter") }}
          //onExit={() => { console.log("onExit") }}
          // onMove={(event) => { console.log("onRayCastMove", event.nativeEvent) }} 
          // onInput={(event) => {
          //    console.log("onInput", event.nativeEvent.inputEvent.type);
          //    console.log("onInput", event.nativeEvent.inputEvent.eventType); }} 
        /> */}
        <VrButton
          onClick={() => console.log('clicked')}
          onLongClick={() => console.log('long click clicked')}
          onButtonPress={() => console.log('button pressed')}
          onButtonRelease={() => console.log('button released')}
          // disabled // this can disable all button events
          longClickDelayMS={4000}
          style={{layoutOrigin: [0.5, 0.5],
                  transform: [{ translate: [0, 0, -1] }] }}
        >
          <Text>
            Update
          </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
