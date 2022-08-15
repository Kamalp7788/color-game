import React, {useState} from 'react';
import styled from 'styled-components';
import CountDown from 'react-native-countdown-component';
import Draggable from 'react-native-draggable';
// import {increment} from '../Redux/CounterSlice';
// import {useDispatch, useSelector} from 'react-redux';

const WrapperMain = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;
const WrapperColumn = styled.View`
  justify-content: space-around;
  align-items: center;
`;
const WrapperRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const WrapperColorColumn1 = styled.View`
  margin-top: 150px;
  background-color: blue;
  width: 100%;
  height: 50px;
  justify-content: center;
`;
const WrapperColorColumn2 = styled.View`
  background-color: yellow;
  width: 100%;
  height: 50px;
  justify-content: center;
`;
const WrapperColorRow1 = styled.View`
  background-color: red;
  height: 100%;
  align-items: center;
  flex-direction: row;
  padding: 12px;
  margin: 8px;
`;
const WrapperColorRow2 = styled.View`
  background-color: green;
  height: 100%;
  align-items: center;
  flex-direction: row;
  padding: 12px;
  margin: 8px;
`;
const WrapperColumnText = styled.Text`
  font-size: 24px;
  color: white;
  text-align: center;
  font-weight: bold;
`;
const WrapperRowText = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const GameScreen = ({index}) => {
  //   const {count} = useSelector(state => state.counter);
  //   const dispatch = useDispatch();
  const [isSelect, setIsSelect] = useState(false);
  const ActionDragRelease = () => {
    setIsSelect(index);
  };
  return (
    <WrapperMain>
      <WrapperColumn>
        <WrapperColorColumn1>
          <WrapperColumnText>GREEN</WrapperColumnText>
        </WrapperColorColumn1>
        <WrapperRow>
          <WrapperColorRow1>
            <WrapperRowText>BLUE</WrapperRowText>
          </WrapperColorRow1>
          <CountDown
            until={10}
            onFinish={() => alert('finished')}
            size={80}
            timeToShow={'S'}
            key={index}
            style={{backgroundColor: '#fff', opacity: 0.1}}
          />
          <WrapperColorRow2>
            <WrapperRowText>YELLOW</WrapperRowText>
          </WrapperColorRow2>
        </WrapperRow>
        <WrapperColorColumn2>
          <WrapperColumnText>RED</WrapperColumnText>
        </WrapperColorColumn2>
      </WrapperColumn>
      <Draggable
        x={140}
        y={350}
        renderSize={80}
        renderColor={index !== isSelect ? 'red' : 'blue'}
        onDragRelease={ActionDragRelease}
        renderText=""
        shouldReverse
        // onShortPressRelease={() => dispatch(increment(count))}
      />
    </WrapperMain>
  );
};

export default GameScreen;
