import React, { useState, useEffect } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { TeacherItemProps } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'
import api from '../../services/api'

const TeacherList = () => {
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    const [teachers, setTeachers] = useState<TeacherItemProps[]>([])
    
    useEffect(() => {
        if (!subject.length || !week_day.length || !time.length) {
            return
        }

        const data = {
            subject, week_day, time
        }
        api.get('/class', {
            params: data
        }).then(res => {
            setTeachers(res.data)
        })

    }, [subject, week_day, time])


    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={e => e.preventDefault() }>
                    <Select
                        name="subject"
                        label="Matéria"
                        defaultValue={subject}
                        onChange={e =>  setSubject(e.target.value) }
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'História', label: 'História' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        defaultValue={week_day}
                        onChange={e => setWeekDay(e.target.value) }
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input 
                        type="time" 
                        name="time" 
                        label="hora" 
                        value={time} 
                        onChange={e => setTime(e.target.value) } />
                </form>
            </PageHeader>

            <main>
                {teachers.map(teacher => (
                    <TeacherItem key={`class_${teacher.id}`} {...teacher} />
                ))}
            </main>
        </div>
    )
}
export default TeacherList
