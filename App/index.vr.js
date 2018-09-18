import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere,
  Cylinder,
  Box,
  DirectionalLight,
  AmbientLight,
  Model,
  VrButton,
  Animated
} from 'react-vr';


// function for Tree for building multiple 3d Objects
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

// required for shipping higher order animated custom components
const AnimatedBox = Animated.createAnimatedComponent(Box);

export default class App extends React.Component {

  // constructor
  constructor(props){
    super(props);

    // For View primitive example
    // this.state = {
    //   fadeIn: new Animated.Value(0),
    //   springValue: new Animated.Value(-1)
    // }

    // box animations
    this.state = {
      rotation: new Animated.Value(0),
      rotateTo: -930
    }
  }

  // behavior of animation
  componentDidMount() {
    // For View primitive example
    // Animated.sequence([
    //   Animated.timing(this.state.fadeIn, {toValue: 1, duration: 3000}),
    //   Animated.delay(1000),
    //   Animated.spring(this.state.springValue, {
    //     toValue: 0,
    //     tension: 1,
    //     friction: 2
    //   })
    // ]).start();
    
    // this.rotate();
  }

  rotate() {
    console.log("Rotating..");
    this.state.rotateTo = this.state.rotateTo * -1;
    Animated.timing(this.state.rotation, {
      duration: 10000,
      toValue: this.state.rotateTo
    }).start()
  }

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
        {/* <VrButton
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
        </VrButton> */}
        {/* Module 10 Animate text images views and 3d elements using Animated*/}
        {/* // For View primitive example */}
        {/* <Animated.View
          style={{
            opacity: this.state.fadeIn,
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translateZ: -1},
              { translateY: this.state.springValue}
            ],
            height: 0.25,
            width: 0.25,
            backgroundColor: '#335',
          }}
        >
        <Text>Hello</Text>
        </Animated.View> */}
        <VrButton
          onClick={() => {this.rotate()}}
          style={{layoutOrigin: [0.5, 0.5],
                  transform: [{ translate: [0, 0.33, -1] }] }}
        >
          <Text>
            Rotate
          </Text>
        </VrButton>
        <AnimatedBox
          lit
          dimWidth={2}
          dimDepth={2}
          dimHeight={2}
          style={{
            transform: [
              { translate: [0, 0, -10] }, // +10 would be behind you
              { rotateY: this.state.rotation },
              { rotateX: this.state.rotation },
              { rotateZ: this.state.rotation }
            ]
          }}
          />
           <AmbientLight intensity={0.5} />
           <DirectionalLight
            style={{
              transform: [{ translate: [-200, 700, 0] }]
            }}
           />
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
