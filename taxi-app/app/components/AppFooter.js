import React from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FooterComponent = ({ logo }) => {
  //tab bar items
  const tabs = [
    {
      title: 'Regular',
      subTitle: '',
      icon: 'car',
    },
    {
      title: 'Premium',
      subTitle: '',
      icon: 'car',
    },
  ];

  return (
    <Footer>
      <FooterTab style={styles.footerContainer}>
        {tabs.map((obj, index) => {
          return (
            <Button key={index}>
              <Icon
                size={20}
                name={obj.icon}
                color={index === 0 ? '#fb9403' : 'grey'}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: index === 0 ? '#fb9403' : 'grey',
                }}>
                {obj.title}
              </Text>
              <Text>{obj.subTitle}</Text>
            </Button>
          );
        })}
      </FooterTab>
    </Footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#fff',
  },
  subText: {
    fontSize: 8,
  },
};

export default FooterComponent;
