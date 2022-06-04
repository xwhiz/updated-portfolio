import styled from 'styled-components'
import PageHead from '../components/PageHead'
import Header from '../components/Header'
import SingleWork from '../components/SingleWork'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Button from '../components/Button'
import Link from 'next/link'

export default function Work() {
  const works = [
    {
      title: 'Quiz app',
      description:
        'A quiz app that gets random questions accoriding to user specifications and give result.',
      imgSrc: '/quiz-app.png',
      url: 'https://quizzical-by-hamza.vercel.app/',
      languages: ['HTML', 'CSS', 'React'],
      size: { width: 340, height: 235 },
    },
    {
      title: 'Weather app',
      description:
        "It's a Weather web app. I had created it in REACTJS for my portfolio.",
      imgSrc: '/weather-app-img.JPG',
      url: 'https://h-react-weather-app.netlify.com/',
      languages: ['HTML', 'CSS', 'React'],
      size: { width: 340, height: 235 },
    },
    {
      title: 'Todo app',
      description:
        'It’s a todo web app. I had created it in REACTJS for my portfolio.',
      imgSrc: '/todo-app-img.JPG',
      url: 'https://h-react-todo-app.netlify.app/',
      languages: ['HTML', 'CSS', 'React'],
      size: { width: 340, height: 235 },
    },
    {
      title: 'Natours',
      description:
        "It's an imagenary project for a tour company. Here I have used a lot of layouts settings, I have used skewmorpishm in action.",
      imgSrc: '/natours-img.JPG',
      url: 'http://h-natours.surge.sh/',
      languages: ['HTML', 'CSS', 'JavaScript'],
      size: { width: 340, height: 235 },
    },
    {
      title: 'Omnifood',
      description:
        "It's an imagenary project for a Hotel. Here I have used a lot of layouts settings.",
      imgSrc: '/omni-food-img.JPG',
      url: 'https://omnifood-design.netlify.app/',
      languages: ['HTML', 'CSS', 'JavaScript'],
      size: { width: 340, height: 235 },
    },
    {
      title: 'Furniture store',
      description:
        "It's a website for a furniture store. I had designed and developed it in my internship.",
      imgSrc: '/furniture-store-img.JPG',
      url: 'http://furniture-store-ws.netlify.com/',
      languages: ['HTML', 'CSS', 'JavaScript'],
      size: { width: 340, height: 235 },
    },
    {
      title: 'Business site',
      description:
        'It’s a website for a business site. I had designed and developed it in my internship.',
      imgSrc: '/business-site-img.JPG',
      url: 'https://ws-bussiness-home-page.netlify.com/',
      languages: ['HTML', 'CSS', 'JavaScript'],
      size: { width: 340, height: 235 },
    },
    {
      title: 'Blog example',
      description:
        'It’s a blog template I had designed and developed with some simple functionality',
      imgSrc: '/blog-img.jpg',
      url: 'https://hamza-blog.netlify.com/',
      languages: ['HTML', 'CSS', 'JavaScript'],
      size: { width: 340, height: 235 },
    },
  ]
  return (
    <>
      <PageHead title="Hamza | Work" />
      <Header />
      <WorkContainer>
        <Container>
          <h1>My Work</h1>
        </Container>
        <Container>
          {works.map((work, i) => (
            <SingleWork key={i} work={work} />
          ))}
        </Container>
        <Container>
          <Button isFullWidth>
            <Link href="/services">See my services &rarr;</Link>
          </Button>
        </Container>
      </WorkContainer>
      <Footer />
    </>
  )
}
const WorkContainer = styled.section`
  & > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    justify-content: center;
    gap: 1.5rem;
  }
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  & > div > button {
    width: max(320px, 50%);
    margin: 2rem auto;
  }
`
