import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Wrap from '@components/Template/Wrap';
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

function Step2() {
  const router = useRouter();
  const [answer, setAnswer] = useState<string>('');
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  return (
    <Wrap>
      <Box>
        <Typography>현장 도착 확인용 질문입니다.</Typography>
        <Typography>단서를 열어 아래 질문에 답해주세요.</Typography>
        <Image src={Map} style={{ width: '100%' }} height={300} alt="map" />
      </Box>
      <Box>
        <TextField onChange={(e) => setAnswer(e.target.value)} fullWidth id="outlined-basic" label="답변 1글자" variant="outlined" />
        <Typography>도움이 필요한가요? > 힌트보기</Typography>
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
          <Button onClick={() => router.push('/step3')} variant="contained">다음</Button>
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

export default Step2