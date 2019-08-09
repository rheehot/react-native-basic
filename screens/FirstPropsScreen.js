import React, {Component} from 'react';
import { View, Image } from 'react-native';

export default class Dogs extends Component{
    render(){
        let pic = {
            // uri : 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MDhfMTg2/MDAxNDkxNjI4NjkyMDU4.K-WIW2a_Y_bXkWbBBAjF_lY1s7RaR2Ka391RmxInZ20g.JbHPeln_mFDAsSvNXncCGgy2q4ACxDSANOt7dFgmH-0g.JPEG.kdg7009/%EC%B5%9C%EC%9C%A0%EC%A0%95.jpg?type=w800'
            uri : 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E'
        };

        return (
            <Image source={pic} style={{width:'100%', height: 300}}/>
        );
    }
}