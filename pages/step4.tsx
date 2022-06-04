import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from 'next/image'
import Map from '@images/map.png';
import Wrap from '@components/Template/Wrap';
import { Button, Typography, Box } from '@mui/material';

function Step4() {
  const router = useRouter();
  return (
    <Wrap>
      <Box>
        <Typography>현장 도착 확인용 질문입니다.</Typography>
        <Image src={Map} style={{ width: '100%' }} height={300} alt="map" />
      </Box>
      <Typography>정답이 현장 상황과 다른가요?
        <Button onClick={() => router.push('/errorSuggest')}>정답 오류 제보하기</Button>
      </Typography>
      <ButtonArea>
        <Button onClick={() => router.back()} variant="outlined">돌아가기</Button>
        <Button onClick={() => router.push('/step5')} variant="contained">사건추리 계속하기</Button>
      </ButtonArea>
    </Wrap>
  )
}

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const Text = styled.p`

`

export default Step4