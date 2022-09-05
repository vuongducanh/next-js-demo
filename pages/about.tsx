import { memo } from 'react';
import type { NextPage } from 'next'

const About = memo(() => {
    return (
        <div className='about-test'>
            about
        </div>
    );
});

About.displayName = 'About';

export default About;