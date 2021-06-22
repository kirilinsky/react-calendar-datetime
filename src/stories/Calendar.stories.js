import React from 'react'
import { storiesOf } from '@storybook/react'
import Calendar from '../Calendar'

const stories = storiesOf('Calendar react', module)



stories.add('With time picker', () => {
    return <Calendar time />
})

stories.add('With presets  ', () => {
    return <Calendar presets />
})

stories.add('WIth presets  and time picker', () => {
    return <Calendar time presets />
})

stories.add('International', () => {
    return <Calendar locale="uk" presets />
})