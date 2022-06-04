import { useRouter } from 'next/router';
import Image from 'next/image'
import styled from '@emotion/styled';
import Wrap from '@components/Template/Wrap';
import Button from '@mui/material/Button';
import Map from '@images/map.png';

export default function Index() {
  const router = useRouter();
  return (
    <Wrap>
      <Box>
        <Text>안녕하세요 OOO 탐정님</Text>
        <Text>수락하신 사건의 수사 시작 장소입니다.</Text>
        <Image src={Map} style={{ width: '100%' }} height={300} alt="map" />
      </Box>
      <Box>
        <Text>현장에 도착하시면 아래 단서를 찾아주세요.</Text>
        <Image src={Map} style={{ width: '100%' }} height={300} alt="map" />
      </Box>
      <Button onClick={() => router.push('/step2')} variant="contained">찾았어요</Button>
    </Wrap>
  )
}

const Text = styled.p`

`

const Box = styled.div`
  img {
    margin-top: 20px !important;
    display: block;
  }
`