import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Animated, Text, Image,View } from 'react-native';
import { useRef, useState  } from 'react';

export default function App() {
  // const [location, setLocation] 
  const [number, setNumver] = useState("")

  = useState({
    x: null,
    y: null,
    // marginLeft: new Animated.Value(10),
    // marginTop: new Animated.Value(10)
    translateY: new Animated.Value(10),
    translateX: new Animated.Value(10)

  });
[{},{}]
list.map((course, index) => (
   <div className={`${index === number}`} onClick={()=> setNumver(index)}>

   </div>
))

function onPress(evt){
console.log('====================================');
var x = evt.nativeEvent.locationX;
console.log('====================================');
console.log(x);
console.log('====================================');
var y = evt.nativeEvent.locationY;
console.log('====================================');
setLocation({
  x: x,
  y: y,
  // marginLeft: x,
  // marginTop: y
  translateY: y,
  translateX: x
})


}
function onMove(evt){
  console.log('====================================');
  var x = evt.nativeEvent.locationX;
  console.log('====================================');
  console.log(x);
  console.log('====================================');
  var y = evt.nativeEvent.locationY;
  console.log('====================================');
  setLocation({
    x: x,
    y: y,
    // marginLeft: x,
    // marginTop: y
    translateY: y,
    translateX: x
  })

console.log('====================================');
console.log(location);
console.log('====================================');
//setLocation({marginLeft: x, marginTop: y })
}
function onRelease(){
console.log("Realse!");
}
// const {marginTop, marginLeft} = location;
const {translateY, translateX} = location;

  return (
    <View
    style={styles.container}
    onStartShouldSetResponder={()=>true}
    onMoveShouldSetResponder={()=>true}
    // onResponderGrant={onPress}
    onResponderMove={onMove}
    // onResponderRelease = {onRelease}
    >
      
      <Animated.Image
      source={require('./assets/cat.gif')} 
      style={{width: 100, height: 100,
        transform: [{translateX: location.translateX}, {translateY: location.translateY}]
        // marginLeft: marginLeft, marginTop: marginTop
      }}
      >
      </Animated.Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 10
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
