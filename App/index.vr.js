import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  DirectionalLight,
  AmbientLight,
  Model
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
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
        <Model
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
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
