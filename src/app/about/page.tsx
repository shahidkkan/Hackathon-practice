import AboutBanner from '@/components/AboutBanner'
import AboutRating from '@/components/AboutRating'
import Customer from '@/components/Customer'
import Members from '@/components/Members'

const About = () => {
    return (
        <main>
            <AboutBanner />
            <AboutRating />
            <Members />
            <Customer/>
        </main>
    )
}

export default About