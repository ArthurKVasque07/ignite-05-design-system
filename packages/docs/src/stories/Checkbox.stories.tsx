import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@akv777-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
