import './Swicht.css'

import React, { useEffect, useState } from 'react'





const Swicht = () => {

    const [theme, setTheme] = useState('claro')
    const handleChange = (e) => setTheme(e.target.checked ? 'oscuro' : 'claro')


    useEffect(() => {
        document.body.setAttribute('data-theme', theme)


    }, [theme])

    return (
        <section className='swicht'>
            <label className='toggle'>
                <input type="checkbox" className='check-swicht' onChange={handleChange} hidden />
                <span className='slider' />

            </label>





        </section>
    )
}

export default Swicht