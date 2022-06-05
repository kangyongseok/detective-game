import { useRouter } from 'next/router';
import Image from 'next/image'
import styled from '@emotion/styled';
import Wrap from '@components/Template/Wrap';
import Button from '@mui/material/Button';
import Map from '@images/map.png';
import { useEffect, useRef, useState } from 'react';

export default function Index() {
  const router = useRouter();
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=96fd4a0e199d614b31f722e9cc29adc3&autoload=false`;
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);
  useEffect(() => {
    if (!mapLoaded) return;

    window.kakao.maps.load(() => {
      var container = document.getElementById('map');
      var options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };

      // 마커가 표시될 위치입니다 
      var markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        position: markerPosition
      });


      var map = new window.kakao.maps.Map(container, options);
      marker.setMap(map);
    })

  }, [mapLoaded]);
  return (
    <Wrap>
      <Box>
        <Text>안녕하세요 OOO 탐정님</Text>
        <Text>수락하신 사건의 수사 시작 장소입니다.</Text>
        <div id="map" style={{ width: '100%', height: 200 }}></div>
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