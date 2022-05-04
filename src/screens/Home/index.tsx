import React from 'react';

import Label from '../../components/atoms/Label';
import {LinearGradientContainer} from '../../components/atoms/Container';

function Home({navigation}) {
  return (
    <LinearGradientContainer justify="center" align="center">
      <Label color="white-default">Recargabuss</Label>
    </LinearGradientContainer>
  );
}

export default Home;
