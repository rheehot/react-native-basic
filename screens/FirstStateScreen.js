import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from './StyleScreen';

// export 를 해주어야 외부에서 사용 가능
export class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000);
    }
    render() {
        if (!this.state.isShowingText) {
            return null;
        }
        return (
            <Text>{this.props.text}</Text>
        )
    }
}

export default class BlinkApp extends Component {
    render() {
        return(
            <View style={{alignItems:'center', top: 10, backgroundColor:'pink'}}>
                <Blink text='블링크 테스트' />
                <Blink text='깜빡여주세요' />
                <Blink text='반짝반짝' />
                <Blink text='Look at me!!' />
            </View>           
        )
    }
}
