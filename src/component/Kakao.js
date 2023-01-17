import React, { useEffect } from "react";

const { kakao } = window;

function Kakao() {

    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center: new kakao.maps.LatLng(37.7705167, 128.9121452), //지도의 중심좌표.
            level: 1 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    },[])
    
    return(
        <div id="map" style={{
            width:'100%', 
            height:'600px'
            }}></div>
    )
}

export default Kakao;



  