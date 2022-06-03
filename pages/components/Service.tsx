import Image from 'next/image'
import styled from 'styled-components'
import useResponsive from './../hooks/useResponsive'

interface IService {
  title: string
  description: string
  imgUrl: string
}
export default function Service({
  service,
  index,
}: {
  service: IService
  index: number
}) {
  const isMobile = useResponsive(600)
  return (
    <StyledService isMobile={isMobile}>
      <div>
        <Image
          src={service.imgUrl}
          width={100}
          height={100}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/blurData.png"
        />
      </div>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
    </StyledService>
  )
}
const StyledService = styled.article<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem 0;
  text-align: center;
  padding: 1.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  h3 {
    font-size: 1.6rem;
  }
`
