import React from 'react';
import Example from '../components/Example'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Example', module)
  .add('default view', () => {
    return (
      <div className="todoapp">
        <Header addTodo={action('Add Todo')}/>
      </div>
    );
  });