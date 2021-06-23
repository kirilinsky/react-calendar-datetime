import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { Calendar } from '../Calendar/Calendar'
import './calendar.css'
import moment from 'moment'
import classNames from 'classnames'

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

stories.add('Dark theme', () => {
    const [date, setDate] = useState(new Date())
    const [dark, setDark] = useState(true)
    const [trs, setTrs] = useState(false)

    useEffect(() => {
        setTrs(true)
        setTimeout(() => {
            setTrs(false)
        }, 1000);
    }, [dark]);


    return <div className={classNames('wrap', {
        dark,
        trs
    })}>
        <div className="control">
            light/dark
            <div class="toggle-container">
                <input type="checkbox" onChange={e => setDark(e.target.checked)} id="switch" name="theme" /><label for="switch">Toggle</label>
            </div>
        </div>
        <h2>current time: {moment(date).format('DD.MM.YYYY')}</h2>
        <Calendar width="70%" date={date} dark={dark} onChangeDate={setDate} presets />
    </div>
})

stories.add('International', () => {
    const [date, setDate] = useState(new Date())
    return <>
        <h2>current time: {moment(date).format('DD.MM.YYYY')}</h2>
        <Calendar date={date} locale="zh-cn" onChangeDate={setDate} presets />
    </>
})