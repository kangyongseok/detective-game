import { useState } from 'react';
import { useRouter } from 'next/router';
import Wrap from '@components/Template/Wrap';
import Image from 'next/image'
import styled from '@emotion/styled';
import Map from '@images/map.png';
import { TextField, Button, Modal, Typography, Box } from '@mui/material';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: '30px'
};

function Step3() {
  const router = useRouter();
  const [answer, setAnswer] = useState<string>('');
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  return (
    <Wrap>
      <Box>
        <Typography>현장 도착 확인용 질문 - 힌트</Typography>
        <Image src={Map} style={{ width: '100%' }} height={300} alt="map" />
      </Box>
      <Box>
        <TextField onChange={(e) => setAnswer(e.target.value)} fullWidth id="outlined-basic" label="답변 1글자" variant="outlined" />
        <Typography>탐정 크레딧을 사용해서 답을 바로 확인하고 싶나요?</Typography>
        <Typography> 탐정 크레딧 차감하고 답 확인하기</Typography>
        <Typography>힌트가 현장 상황과 다른가요?  힌트 오류 제보하기</Typography>
      </Box>
      <ButtonArea>
        <Button onClick={() => router.back()} variant="outlined">돌아가기</Button>
        <Button onClick={() => setToggleModal(true)} variant="contained">입력하기</Button>
      </ButtonArea>
      <Modal
        open={toggleModal}
        onClose={() => setToggleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            입력한 답변
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {answer}
          </Typography>
          <Button onClick={() => router.push('/step4')} variant="contained">다음</Button>
        </Box>

      </Modal>
    </Wrap>
  )
}

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export default Step3