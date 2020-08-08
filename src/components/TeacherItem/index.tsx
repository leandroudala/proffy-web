import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/26013866?s=460&u=f5c618882076e4eafdc8294f8577c443ba3777bd&v=4" alt="Leandro" />
                <div>
                    <strong>Leandro Udala</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Ensino a desenvolver em diversas linguagens de programação e banco de dados, tais como: <br />
                Python, JavaScript, Java, SQL, Go, PHP, etc.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem