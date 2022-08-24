import React from 'react';
import styled from 'styled-components';
import {increment, resetList} from '../Redux/CounterSlice';
import {useDispatch, useSelector} from 'react-redux';
import {ImageBackground, StatusBar} from 'react-native';

const SafeAreaView = styled.View`
  flex: 1;
  background-color: brown;
`;
const Wrapper = styled.View`
  padding: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const Title = styled.Text`
  font-size: 40px;
  color: white;
  margin-bottom: 30px;
`;
const TitleDesc = styled.Text`
  font-size: 20px;
  color: whitesmoke;
  margin-top: 10px;
`;
const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  background-color: orange;
  margin: 12px;
  align-self: center;
  margin-top: 50px;
  border-radius: 12px;
`;
const ButtonTitle = styled.Text`
  font-size: 30px;
  color: white;
`;
const CountTitle = styled.Text`
  font-size: 30px;
  color: orange;
`;

const StartScreen = ({navigation}) => {
  const ActionData = () => {
    navigation.navigate('Game');
    dispatch(resetList());
  };
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assest/Image/game.jpeg')}
        style={{height: '100%', width: '100%'}}>
        <StatusBar hidden />
        <Wrapper>
          <Title>Color Names</Title>
          <TitleDesc>Drag the cube to the side with the correct</TitleDesc>
          <TitleDesc>name of the color in English. </TitleDesc>
          <TitleDesc>Ignore the actual side's color.</TitleDesc>
        </Wrapper>
        <Button onPress={ActionData} activityOpacity={1}>
          <ButtonTitle>PLAY</ButtonTitle>
        </Button>
        <Wrapper>
          <CountTitle>BEST SCORE</CountTitle>
          <CountTitle>{count}</CountTitle>
        </Wrapper>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default StartScreen;
