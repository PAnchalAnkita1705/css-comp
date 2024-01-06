import React from 'react'
import PropTypes from 'prop-types'
const Student = (props) => {

    let {rno, name, city, url}=props;
    return (
        <div>
           <div className="card m-1" style={{width: "18rem"}}>
                <img src={url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Rno:{props.rno}</h5>
                    <h5 className="card-title">Name:{props.name}</h5>
                    <h5 className="card-title">City:{props.city}</h5>
                   
                   
    </div>
            </div>
        </div>
    )
}
Student.propTypes = {
    rno:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired
} 
Student.defaultProps={
rno:1111,
name:'Enter name here',
city:'Enter city name here'
}

export default Student