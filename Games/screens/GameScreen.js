import React, {useEffect, useRef, useState} from 'react';
import Draggable from 'react-native-draggable';
import {increment, resetList} from '../Redux/CounterSlice';
import {useDispatch, useSelector} from 'react-redux';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
const {width} = Dimensions.get('window');
export const GameScreen = ({navigation}) => {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();
  const cardRef4 = useRef();
  const [itemList, setItemList] = useState([
    {
      id: 1,
      value: 'GREEN',
      color: 'red',
      key: 'TOP',
    },
    {
      id: 2,
      value: 'BLUE',
      color: 'green',
      key: 'LEFT',
    },
    {
      id: 3,
      value: 'YELLOW',
      color: 'blue',
      key: 'RIGHT',
    },
    {
      id: 4,
      value: 'RED',
      color: 'yellow',
      key: 'BOTTOM',
    },
  ]);
  const [boxColor, setBoxColor] = useState({color: 'red'});
  const [gameLevel, setGameLevel] = useState(1);
  var cardPosition1 = false;
  var cardPosition2 = false;
  var cardPosition3 = false;
  var cardPosition4 = false;

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setBoxColor(a[gameLevel % 4]);
    return a;
  }

  useEffect(() => {
    setItemList(shuffle);
  }, [itemList]);
  const ActionDragRelease = e => {
    console.log('drag data ', e.nativeEvent);
    const data = e.nativeEvent;
    const boxPosition = {
      py: data.pageY - 100,
      px: data.pageX,
    };
    // console.log('boxPosition ', boxPosition);
    // console.log('cardPosition4', cardPosition4);
    // console.log('cardPosition3', cardPosition3);
    // console.log('cardPosition2', cardPosition2);
    // console.log('cardPosition1', cardPosition1);
    if (
      cardPosition1.py + 20 > boxPosition.py &&
      boxPosition.px > 80 &&
      boxPosition.px < width - 80
    ) {
      if (itemList[0].value.toLowerCase() === boxColor.color) {
        alert('Success');
        dispatch(increment());
        setGameLevel(gameLevel + 1);
        setItemList(shuffle(itemList));
      } else {
        alert('failed');
        navigation.navigate('Start');
      }
    } else if (boxPosition.px < 80) {
      if (itemList[1].value.toLowerCase() === boxColor.color) {
        alert('Success');
        dispatch(increment());
        setGameLevel(gameLevel + 1);
        setItemList(shuffle(itemList));
      } else {
        alert('failed');
        navigation.navigate('Start');
      }
    } else if (boxPosition.px > width - 80) {
      if (itemList[2].value.toLowerCase() === boxColor.color) {
        alert('Success');
        dispatch(increment());
        setGameLevel(gameLevel + 1);
        setItemList(shuffle(itemList));
      } else {
        alert('failed');
        navigation.navigate('Start');
      }
    } else if (
      cardPosition4.py < boxPosition.py + 155 &&
      boxPosition.px > 80 &&
      boxPosition.px < width - 80
    ) {
      if (itemList[3].value.toLowerCase() === boxColor.color) {
        alert('Success');
        dispatch(increment());
        setGameLevel(gameLevel + 1);
        setItemList(shuffle(itemList));
      } else {
        alert('failed');
        navigation.navigate('Start');
      }
    }
  };
  const onDrag = e => {
    console.log('darag dmove data ee', {...e});
    !cardPosition1 &&
      cardRef1.current.measure((fx, fy, width, height, px, py) => {
        cardPosition1 = {
          fx,
          fy,
          width,
          height,
          px,
          py,
        };
        console.log('Component width is:1 ' + width);
        console.log('Component height is:1 ' + height);
        console.log('X offset to frame:1 ' + fx);
        console.log('Y offset to frame:1 ' + fy);
        console.log('X offset to page:1 ' + px);
        console.log('Y offset to page:1 ' + py);
      });
    !cardPosition2 &&
      cardRef2.current.measure((fx, fy, width, height, px, py) => {
        cardPosition2 = {
          fx,
          fy,
          width,
          height,
          px,
          py,
        };
      });
    !cardPosition3 &&
      cardRef3.current.measure((fx, fy, width, height, px, py) => {
        cardPosition3 = {
          fx,
          fy,
          width,
          height,
          px,
          py,
        };
      });
    !cardPosition4 &&
      cardRef4.current.measure((fx, fy, width, height, px, py) => {
        cardPosition4 = {
          fx,
          fy,
          width,
          height,
          px,
          py,
        };
      });
  };

  return (
    <ImageBackground
      source={require('../assest/Image/game.jpeg')}
      style={{height: '100%', width: '100%'}}>
      <SafeAreaView style={styles.flex1}>
        <View style={styles.body}>
          <View
            ref={cardRef1}
            style={[styles.cardView1, {backgroundColor: itemList[0].color}]}>
            <Text style={styles.txt}>{itemList[0].value}</Text>
          </View>
          <View style={styles.row}>
            <View
              ref={cardRef2}
              style={[styles.cardView2, {backgroundColor: itemList[1].color}]}>
              <Text style={styles.txt1}>{itemList[1].value}</Text>
            </View>
            <CountDown
              until={10}
              size={80}
              timeToShow={'S'}
              style={{backgroundColor: '#fff', opacity: 0.3, marginTop: 30}}
            />
            <View
              ref={cardRef3}
              style={[styles.cardView3, {backgroundColor: itemList[2].color}]}>
              <Text style={styles.txt1}>{itemList[2].value}</Text>
            </View>
          </View>
          <View
            ref={cardRef4}
            style={[styles.cardView4, {backgroundColor: itemList[3].color}]}>
            <Text style={styles.txt}>{itemList[3].value}</Text>
          </View>
        </View>
        <Draggable
          x={150}
          y={350}
          renderSize={100}
          renderColor={boxColor.color}
          onDragRelease={ActionDragRelease}
          onDrag={onDrag}
          renderText=""
          shouldReverse={true}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'lightGray',
  },
  cardView1: {
    height: 40,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView2: {
    height: width,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    top: -40,
  },
  cardView3: {
    height: width,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView4: {
    height: 40,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
  },
  txt: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
  },
  txt1: {
    fontSize: 40,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countdownTxt: {
    fontSize: 60,
    fontWeight: '800',
    color: '#000',
    position: 'absolute',
    alignSelf: 'center',
    top: width / 2 - 60,
  },
  btn: {
    height: 46,
    width: width / 2,
    backgroundColor: 'red',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
  },
  btnTxt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
export default GameScreen;
