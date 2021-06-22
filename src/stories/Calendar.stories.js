import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Calendar } from '../Calendar/Calendar'
import { Time } from '../modules'
import moment from 'moment'

const stories = storiesOf('Calendar react', module)

stories.add('Base', () => {
    const [date, setDate] = useState(new Date())
    return <>
        <h2>current time: {moment(date).format('DD.MM.YYYY')}</h2>
        <Calendar date={date} onChangeDate={setDate} />
    </>
})

stories.add('With time picker', () => {
    const [date, setDate] = useState(new Date())
    return <>
        <h2>current time: {moment(date).format('DD.MM.YYYY HH:mm')}</h2>
        <Calendar date={date} onChangeDate={setDate} time />
    </>
})

stories.add('With presets  ', () => {
    const [date, setDate] = useState(new Date())
    return <>
        <h2>current time: {moment(date).format('DD.MM.YYYY')}</h2>
        <Calendar date={date} onChangeDate={setDate} presets />
    </>
})

stories.add('With presets  and time picker', () => {
    const [date, setDate] = useState(new Date())
    return <>
        <h2>current time: {moment(date).format('DD.MM.YYYY HH:mm')}</h2>
        <Calendar date={date} onChangeDate={setDate} presets time />
    </>
})

stories.add('International', () => {
    const [date, setDate] = useState(new Date())
    return <>
        <h2>current time: {moment(date).format('DD.MM.YYYY')}</h2>
        <Calendar date={date} locale="uk" onChangeDate={setDate} presets />
    </>
})