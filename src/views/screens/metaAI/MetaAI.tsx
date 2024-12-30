import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import WABG from '../../../assets/w_bg.png';
import BudgetBotHeader from '../../components/header/ChatHeader';
import {useSelector} from 'react-redux';
import {selectCurrentChatId} from '../../../redux/reducers/chatSlice';

type RootStackParamList = {
  ForgotPassword: undefined;
  SignUp: undefined;
  TabBar: undefined;
};

type MetaAINavigationProp = StackNavigationProp<RootStackParamList>;

interface MetaAIProps {
  navigation: MetaAINavigationProp;
}

export default function MetaAI({navigation}: MetaAIProps) {
  const chats = useSelector(state => state);
  const currentChatId = useSelector(selectCurrentChatId);

  console.log(chats);

  return (
    <ImageBackground source={WABG} style={styles.container} resizeMode="cover">
      <BudgetBotHeader />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
