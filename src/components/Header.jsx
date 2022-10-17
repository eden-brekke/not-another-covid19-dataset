import Info from './info';
import {ReactComponent as Bat} from '../SVG/bat.svg'


export default function Header({count}){
  return (
    <>
    <header>
            <a href="https://github.com/eden-brekke/covid19-data" className='icon'>

            </a>
            <div className='heading'>
                <Bat className="bat"/>
                COVID-19 Dashboard
                <blockquote>
                    We must accept finite disappointment, but we must never lose <strong>infinite hope</strong>.
                </blockquote>
                <figcaption>
                    &mdash; Martin Luther King
                </figcaption>
            </div>
            <Info count={count}/>

        </header>
    </>
  )
}