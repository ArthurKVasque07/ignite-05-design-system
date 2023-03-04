import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@akv777-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
  argTypes: {
    size: {
      option: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão heading sempre sera h2, mas com a prop 'as' da para alterar",
      },
    },
  },
}
