import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet, TouchableOpacity, Image } from 'react-native-web'
const main =
    'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'

export default function AboutPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                HI! 스파르타코딩 앱개발 반에 오신 것을 환영합니다!
            </Text>
            <View style={styles.card}>
                <Image
                    style={styles.cardImg}
                    source={{ uri: main }}
                    resizeMode={'cover'}
                />
                <Text style={styles.desc1}>
                    많은 내용을 간결하게 담아내려 노력했습니다!
                </Text>
                <Text style={styles.desc2}>
                    꼭 완주 하셔서 곡 여러분 것으로 만들어 가시길 바랍니다
                </Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>@chosen.1_errSum</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F266A',
        alignItems: 'center',
    },
    title: {
        // 폰트 크기
        fontSize: 30,

        // 폰트 굴기
        fontWeight: '700',

        paddingLeft: 30,
        paddingTop: 100,
        paddingRight: 30,

        // 텍스트 색깔
        color: 'white',
    },
    card: {
        backgroundColor: 'white',

        justifyContent: 'center',
        alignItems: 'center',

        width: 300,
        height: 500,

        borderRadius: 30,
        marginTop: 50,
        marginBottom: 50,
    },
    cardImg: {
        width: 150,
        height: 150,
        borderRadius: 30,
    },
    desc1: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',

        paddingLeft: 22,
        paddingRight: 22,
    },
    desc2: {
        textAlign: 'center',

        fontSize: 15,
        fontWeight: '700',
        padding: 22,
    },
    btn: {
        padding: 20,

        backgroundColor: 'orange',

        borderRadius: 15,
    },
    btnTxt: {
        fontSize: 15,
        fontWeight: '700',
        color: 'white',
    },
})
