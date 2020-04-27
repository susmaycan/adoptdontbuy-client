import React from 'react'
import './Footer.scss'
import LanguageSelector from '../../pages/LanguageSelector'

class CustomFooter extends React.Component {
    render() {
        return (
            <footer className="footer">
                    <LanguageSelector/>
                    <p>© adoptdontbuy made by <a target="_blank" rel="noopener noreferrer"
                                                 href="https://susmaycan.dev">Susana</a> with <strong>React</strong>.
                    </p>
            </footer>
        );
    }
}

export default CustomFooter
