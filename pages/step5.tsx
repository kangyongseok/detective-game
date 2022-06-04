import Wrap from '@components/Template/Wrap';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from 'next/image'
import { Button, Typography, Box } from '@mui/material';
import Map from '@images/map.png';
import SendIcon from '@mui/icons-material/Send';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import ContactlessIcon from '@mui/icons-material/Contactless';
import Grid from '@mui/material/Grid';

function Step5() {
  const router = useRouter();
  return (
    <Wrap>
      <Box>
        <Typography>
          현장에 도착하셨군요. OOO 팀장님!<br /><br />
          수사를 진행해주셔서 감사합니다.<br /><br />
          이번 사건은 언론에 보도된 적이 있는
          사건입니다. 아래 현장단서를 참고하여
          보도된 언론사를 선택해주세요.
        </Typography>
        <Image src={Map} style={{ width: '100%' }} height={300} alt="map" />
      </Box>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={() => router.push('/audio')}>
              Send
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" endIcon={<AccessAlarmsIcon />} onClick={() => router.push('/audio')}>
              Send
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={() => router.push('/audio')}>
              Send
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" endIcon={<ContactlessIcon />} onClick={() => router.push('/audio')}>
              Send
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={() => router.push('/audio')}>
              Send
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={() => router.push('/audio')}>
              Send
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={() => router.push('/audio')}>
              Send
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={() => router.push('/audio')}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
      <ButtonArea>
        <Button onClick={() => router.back()} variant="outlined">돌아가기</Button>
        <Button onClick={() => router.push('/step6')} variant="contained">선택하기</Button>
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


export default Step5;