import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import PropTypes from 'prop-types';

const Gradient = ({ style, gradientSteps, maximumValue, getStepColor }) => {
  const rows = [];
  for (let i = 0; i <= gradientSteps; i++) {
      if (i === 0 ) {
          rows.push(
              <View
                  key={i}
                  style={{
                      flex: 1,
                      marginLeft: Platform.OS === 'ios' ? -StyleSheet.hairlineWidth : 0,
                      backgroundColor: getStepColor(i * maximumValue / gradientSteps),
                      borderRadius: 3,
                      position: 'absolute'

                  }}
              />
          );
      } else if( i === gradientSteps){
          rows.push(
              <View
                  key={i}
                  style={{
                      flex: 1,
                      marginLeft: Platform.OS === 'ios' ? -StyleSheet.hairlineWidth : 0,
                      backgroundColor: getStepColor(i * maximumValue / gradientSteps),
                      borderRadius: 3,
                      position: 'absolute',


                  }}
              />
          );
      }
      else{
          rows.push(
              <View
                  key={i}
                  style={{
                      flex: 1,
                      marginLeft: Platform.OS === 'ios' ? -StyleSheet.hairlineWidth : 0,
                      backgroundColor: getStepColor(i * maximumValue / gradientSteps),
                  }}
              />
          );
      }
  }
  
  return <View style={[styles.container, style]}>{rows}</View>;
};

export default Gradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

Gradient.propTypes = {
  gradientSteps: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  getStepColor: PropTypes.func.isRequired
};

