import React from 'react'
import s from './Landing.module.css'

const Landing = () => {
    return (
        <div className={s.container}>
            <div className={s.landing_top}>
                <div className={s.landing__titles}>
                    <h1 className={s.landing_title}>Credit</h1>
                    <h1 className={s.landing_title}>Helper</h1>
                </div>
                <img src="safe.png" alt='' />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Porro omnis ex, esse minima accusamus cumque totam eaque
                amet impedit! Maiores laborum non architecto suscipit.
                Repellat ullam maxime tempora placeat nam! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Maiores aut soluta unde
                quibusdam voluptas, culpa voluptates corporis tenetur dolore
                saepe similique repellendus nulla praesentium tempore
                blanditiis modi, nobis fuga at. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Porro deserunt assumenda
                laudantium vitae nobis voluptatibus, quisquam impedit
                suscipit perspiciatis fugiat itaque perferendis repellat
                voluptatem nemo hic voluptas! Iure, sit sequi. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, sint? At ipsam voluptates impedit dicta reprehenderit
                laudantium dolor quis libero molestiae saepe harum pariatur
                necessitatibus, quisquam ipsum obcaecati alias velit?
            </p>
        </div>
    )
}

export default Landing