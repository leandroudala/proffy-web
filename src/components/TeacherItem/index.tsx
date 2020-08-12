import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface TeacherItemProps {
    id: number
    avatar: string
    name: string
    bio: string
    subject: string
    cost: number
    whatsapp: string
}

const TeacherItem:React.FC<TeacherItemProps> = ({id, avatar, name, bio, subject, cost, whatsapp}) => {
    function createNewConnection() {
        api.post('connection', {
            user_id: id
        })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={avatar} alt={name} />
                <div>
                    <strong>{name}</strong>
                    <span>{subject}</span>
                </div>
            </header>
            <p>{bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {cost}</strong>
                </p>
                <a target="_blank" rel="noopener noreferrer" onClick={createNewConnection} href={`https://wa.me/${whatsapp}?text=Estou%20interessado%20em%20sua%20aula`} type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem