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
import MetaAILogo from '../../../assets/logo_s.jpeg';

const BudgetBotHeader: React.FC = () => {
  const menuBarIcon = (
    <Icon name="three-bars" size={RFValue(20)} color="#FFFFFF" />
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
          <TouchableOpacity>{menuBarIcon}</TouchableOpacity>
          <View style={styles.flexRow}>
            <Image source={MetaAILogo} style={styles.logo} />
          </View>
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
