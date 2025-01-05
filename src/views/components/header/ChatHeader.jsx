import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Octicons';
import IconI from 'react-native-vector-icons/MaterialCommunityIcons';
import MetaAILogo from '../../../assets/logo_s.jpeg';
import CustomText from '../text/CustomText';
import {useDispatch} from 'react-redux';
import {clearAllChats, clearChat} from '../../../redux/reducers/chatSlice';

const BudgetBotHeader = ({currentChatId, chats, setCurrentChatId}) => {
  const dispatch = useDispatch();

  const onClearChats = async () => {
    dispatch(clearChat({chatId: currentChatId}));
  };

  const menuBarIcon = (
    <Icon name="three-bars" size={RFValue(20)} color="white" />
  );

  const checkBadgeIcon = (
    <IconI name="star-check-outline" size={RFValue(16)} color="#27d366" />
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
          <TouchableOpacity>{menuBarIcon}</TouchableOpacity>

          <View style={styles.flexRow}>
            <Image source={MetaAILogo} style={styles.logo} />
            <CustomText fontWeight="bold">MetaBot {checkBadgeIcon}</CustomText>
            <CustomText fontWeight="500" opacity={0.7} size={12}>
              with Llama 3
            </CustomText>
          </View>

          <TouchableOpacity onPress={onClearChats}>
            <CustomText size={14}>Clear</CustomText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(20,25,46,1)',
    borderBottomWidth: 0.18,
    borderBottomColor: 'rgba(62,62,63,1)',
  },
  subContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  logo: {
    width: 38,
    height: 38,
    borderRadius: 40,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default BudgetBotHeader;
