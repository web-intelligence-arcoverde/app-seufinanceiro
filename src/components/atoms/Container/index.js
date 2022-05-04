import styled from 'styled-components/native';
import {COLORS} from '../../../constants';

import LinearGradient from 'react-native-linear-gradient';

export const StyledContainer = styled.View`
  flex-direction: ${({direction}) => (direction ? direction : 'column')};
  background-color: ${({color}) =>
    color ? `${COLORS[color]}` : 'transparent'};
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  width: ${({width}) => (width ? width : '100')}%;

  height: ${({height}) => (height ? `${height}%` : 'auto')};

  padding: ${({padding}) => (padding ? padding : 0)}px;
  border-radius: ${({radius}) => (radius ? radius : 0)}px;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  background-color: ${({color}) =>
    color ? `${COLORS[color]}` : COLORS['white-default']};
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};

  padding: ${({padding}) => (padding ? padding : 0)}px;
`;

export const LinearGradientContainer = styled(LinearGradient).attrs({
  start: {x: 0.7, y: 0},
  colors: ['#4EA45D', '#2D5E35'],
})`
  flex: 1;
  flex-direction: column;

  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
`;
