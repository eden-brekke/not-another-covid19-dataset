import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div className={'data'}>Data Source :
                <a href={'https://github.com/CSSEGISandData/COVID-19'}> CSSE at JHU</a> | API :
                <a href={'https://github.com/pomber/covid19'}> Rodrigo Pombo</a>
            </div>
        </footer>
    )
}

export default Footer;