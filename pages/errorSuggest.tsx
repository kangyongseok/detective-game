import { useState } from 'react';
import { useRouter } from 'next/router';
import Wrap from '@components/Template/Wrap';
import { Button, Typography, Box } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react'

function ErrorSuggest() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    success ? router.push('/step5') : setSuccess(true)
  }

  return (
    <Wrap>
      {
        success ? (
          <Typography>
            제보가 완료되었습니다.
            <br /><br />
            랜선탐정에서 사건 현장 단서에 대해
            빠르게 확인 후 안내드리겠습니다.
            <br /><br />
            수사 총 소요시간 기록은
            사건 현장 단서를 확인 후 확정되며
            제보가 맞지 않을 경우,
            총 소요시간에서 5분 추가 기록됩니다.
          </Typography>
        ) : (
            <Box>
              <label htmlFor="avatar">정답 오류 제보하기</label>
              <input type="file"
                id="avatar" name="avatar"
                accept="image/png, image/jpeg" />
              <Typography>
                정답과 다른 현장을 찍어 업로드 해주세요
              </Typography>
            </Box>  
        )
      }
      <ButtonArea>
        <Button onClick={() => router.back()} variant="outlined">돌아가기</Button>
        <Button onClick={handleClick} variant="contained">{success ? '사건 추리 계속 하기' : '제보하기'}</Button>
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

export default ErrorSuggest