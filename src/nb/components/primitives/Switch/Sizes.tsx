import React from 'react';
import { Switch, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading mb="10">Sizes</Heading>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </VStack>
  );
};
