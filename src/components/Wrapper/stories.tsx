import { Meta, Story } from '@storybook/react/types-6-0';
import { Wrapper, WrapperProps } from '.';

export default {
  title: 'Wrapper',
  component: Wrapper,
} as Meta;

export const Template: Story<WrapperProps> = (args) => {
  return (
    <div>
      <Wrapper {...args} />
    </div>
  );
};
