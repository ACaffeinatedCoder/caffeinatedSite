/**
 * Experience Page:
 *  - Academic Records
 *  - CV?
 *  - Certificates
 * 
*/
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Experience({ closer }) {
    return (
        <div className='exp-container'>
            <div className='modal-header'>
                <h2><i>acaffeinatedcoder's experiences</i></h2>
                <FontAwesomeIcon icon={faCircleXmark} style={{color: 'black'}} onClick={() => closer(false)}/>
            </div>
            <div className='exp-contents'>

            </div>
            
        </div>
    )
}