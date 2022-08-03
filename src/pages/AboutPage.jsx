

import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
    return (
        <Card>
            <div className='about'>
                <h1>About This Application</h1>
                <p>A simple CRUD ReactJS application to add feedback for a product or a service.</p>
                <p>Version: 1.0.0</p>
                <p>&#169; Cody Fingerson</p>
                <p>
                    <Link to='/'>Back To Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage