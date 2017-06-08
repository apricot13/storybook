import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Example from '../components/Example';

storiesOf('Example', module)
  .add('normal', () => (
    <Example></Example>
  ));