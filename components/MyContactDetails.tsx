import Image from 'next/image'
import styled from 'styled-components'

export default function MyContactDetails() {
  const details = [
    { imgUrl: '/phone.svg', text: '+92 342 1798 786' },
    { imgUrl: '/mail.svg', text: 'muhammadhamzam1486@gmail.com' },
    { imgUrl: '/location.svg', text: 'Yarhussain Swabi, Pakistan' },
  ]
  return (
    <StyledDiv>
      {details.map((detail) => (
        <Detail key={detail.text}>
          <Image
            src={detail.imgUrl}
            alt=""
            loading="lazy"
            placeholder="blur"
            blurDataURL="/blurData.png"
            width={50}
            height={50}
          />
          <h4>{detail.text}</h4>
        </Detail>
      ))}
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  width: 100%;
  padding: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem 1rem;
  margin-bottom: 2rem;
`
const Detail = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem 0;
  width: 220px;

  h4 {
    max-width: 25ch;
    word-break: break-all;
    text-align: center;
  }
`
