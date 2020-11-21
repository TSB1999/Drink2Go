import React, { Component, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    Image,
    Dimensions,
    StatusBar,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import UserStore from '../stores/UserStore';

const Profile = ({ navigation }) => {
    useEffect;
    useEffect(() => {
        // axios.get(`/user/${UserStore.thisUserProfile.credentials.meloID}`)
        //     .then(res => {
        //         console.log(res.data)
        //         UserStore.currentUserPosts = res.data.posts
        //         console.log(res.data)
        //     })
        //     .catch(err => console.log(err))
    }, []);
    const [index, setIndex] = React.useState(0)
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: '#fff', borderRadius: 5 }}>
                <Text style={{ marginTop: 5, backgroundColor: '#fff', color: '#007bff', fontWeight: 'bold', marginHorizontal: 10, textAlign: 'center' }} >Top Artists</Text>

                <Text numberOfLines={1} style={{ backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', marginHorizontal: 10, textAlign: 'center' }} >{item.artistName}</Text>
                <Image style={{ alignSelf: 'center', marginBottom: 5, borderRadius: 10 }} source={{ uri: item.image, height: 100, width: 100, }} />
            </View>
        );
    }

    const _renderItem_b = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: '#fff', borderRadius: 5 }}>
                <Text style={{ marginTop: 5, backgroundColor: '#fff', color: '#007bff', fontWeight: 'bold', marginHorizontal: 10, textAlign: 'center' }} >Top Tracks</Text>

                <Text numberOfLines={1} style={{ backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', marginHorizontal: 10, textAlign: 'center' }} >{item.artistName}</Text>
                <Image style={{ alignSelf: 'center', marginBottom: 5, borderRadius: 10 }} source={{ uri: item.image, height: 100, width: 100 }} />
            </View>
        );
    }

    const _renderItem1 = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: 'red' }}>
                <Text numberOfLines={1}>{item.artistName}</Text>
                <Image source={{ uri: item.images, height: 4.5 * Dimensions.get("window").width / 10, width: Dimensions.get("window").width / 2 }} />
            </View>
        );
    }
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Carousel
                        // ref={(c) => { _carousel = c; }}
                        data={[{ "artistName": "Drake", "image": "https://i.scdn.co/image/60cfab40c6bb160a1906be45276829d430058005", "id": "3TVXtAsR1Inumwj472S9r4" }, { "artistName": "Future", "image": "https://i.scdn.co/image/fa9015ca2bf85af90b967500148da9706a156e3b", "id": "1RyvyyTE3xzB2ZywiAwp0i" }, { "artistName": "PARTYNEXTDOOR", "image": "https://i.scdn.co/image/797276c2f8da713f0534e012de4d144f338e1664", "id": "2HPaUgqeutzr3jx5a9WyDV" }, { "artistName": "Bryson Tiller", "image": "https://i.scdn.co/image/c65c74e7b7eb576b8dea4d5d43283ac279e3f87d", "id": "2EMAnMvWE2eb56ToJVfCWs" }, { "artistName": "NAV", "image": "https://i.scdn.co/image/d819f806207d520282f92cd7a8bb0438ddfff4c1", "id": "7rkW85dBwwrJtlHRDkJDAC" }, { "artistName": "Yung Bleu", "image": "https://i.scdn.co/image/24ed718b61468236cf6be503a80fe064c33af8eb", "id": "3KNIG74xSTc3dj0TRy7pGX" }, { "artistName": "San Bravura", "image": "https://i.scdn.co/image/cd0b73cb6de4b90dd0a1d65d81acfb1b217592bc", "id": "2bl1hMyR2lrHrTlHaBtXKa" }, { "artistName": "JAY-Z", "image": "https://i.scdn.co/image/4912d27d6b01dd790313d8ef76586be6b100550f", "id": "3nFkdlSjzX9mRTtwJOzDYB" }, { "artistName": "Kendrick Lamar", "image": "https://i.scdn.co/image/3a836196bfb341f736c7fe2704fb75de53f8dfbb", "id": "2YZyLoL8N0Wb9xBt1NhZWg" }, { "artistName": "Amel Larrieux", "image": "https://i.scdn.co/image/693317e45d8b5e19006d6460404c17de22e114b5", "id": "4hVcxmC7igpot32EzQf7IR" }, { "artistName": "Teedra Moses", "image": "https://i.scdn.co/image/828d13af9750d5903b1755793c9df4640c2aa7fc", "id": "6vfR5QRc3xca0KvpG8KZBE" }, { "artistName": "J. Cole", "image": "https://i.scdn.co/image/c58beb81196bbdda378b6746c51a10aace2f63a6", "id": "6l3HvQ5sa6mXTsMTB19rO5" }, { "artistName": "Jhené Aiko", "image": "https://i.scdn.co/image/f677fc21079ba4985debb4d1b3b4eb9cd7554ec8", "id": "5ZS223C6JyBfXasXxrRqOk" }, { "artistName": "XXXTENTACION", "image": "https://i.scdn.co/image/942afa81f0a2298ead0c154fb7b4b606de48d9e6", "id": "15UsOTVnJzReFVN1VCnxy4" }, { "artistName": "Travis Scott", "image": "https://i.scdn.co/image/ef784cfa3f4f87d656d3dfa5eedf0a24610faba9", "id": "0Y5tJX1MQlPlqiwlOH1tJY" }, { "artistName": "Kodie Shane", "image": "https://i.scdn.co/image/f6de78864ed22fed34145183748f9e1314e3f9dc", "id": "1CUeN4GnHAGUk9nAXPorF4" }, { "artistName": "J.I the Prince of N.Y", "image": "https://i.scdn.co/image/6f6e63accb6a8a74c267630f4443f717103455b4", "id": "2eqoJbzUGDwys5ENUkbT3h" }, { "artistName": "Juice WRLD", "image": "https://i.scdn.co/image/d8e62447a338a882b490460da20e90aac6d60ae7", "id": "4MCBfE4596Uoi2O4DtmEMz" }, { "artistName": "Headie One", "image": "https://i.scdn.co/image/334fc2728dbd443b03f288fd2f9dcac40f883a94", "id": "6UCQYrcJ6wab6gnQ89OJFh" }, { "artistName": "Pop Smoke", "image": "https://i.scdn.co/image/8f0a45ff4868c7868a7996b57da64f2e89042e26", "id": "0eDvMgVFoNV3TpwtrVCoTj" }]}
                        renderItem={_renderItem}
                        sliderWidth={Dimensions.get("window").width / 3}
                        itemWidth={Dimensions.get("window").width / 3}
                        onSnapToItem={index => setIndex(index)} />
                </View>
                <View style={{ flex: 1, paddingTop: 5 }}>
                    <Image source={{ uri: UserStore.spotifyUserDetails.user_image }} style={{ height: 100, width: 100, borderRadius: 20, alignSelf: 'center' }} />
                    {/* <Text>Keem</Text> */}
                </View>
                <View style={{ flex: 1 }}>
                    <Carousel
                        // ref={(c) => { _carousel = c; }}
                        data={[{ "name": "Okafor's Law", "albumName": "Anytime Soon(Deluxe Edition)", "artistName": "Ajebutter22 and Studio Magic", "trackName": "Okafor's Law", "image": "https://i.scdn.co/image/ab67616d0000b2738a292235ee6a87e93c32ce20", "id": "5ZIcZTKGEHZoiPVsXoCv03" }, { "name": "Day Dream$", "albumName": "SANCIETY 2", "artistName": "San Bravura", "trackName": "Day Dream$", "image": "https://i.scdn.co/image/ab67616d0000b27361ec35706a7b11046d88efcc", "id": "4L9PyuSuEwLZGFy1x1fXnx" }, { "name": "Pain 1993 (with Playboi Carti)", "albumName": "Dark Lane Demo Tapes", "artistName": "Drake", "trackName": "Pain 1993 (with Playboi Carti)", "image": "https://i.scdn.co/image/ab67616d0000b273bba7cfaf7c59ff0898acba1f", "id": "6Kj17Afjo1OKJYpf5VzCeo" }, { "name": "Not You Too (feat. Chris Brown)", "albumName": "Dark Lane Demo Tapes", "artistName": "Drake", "trackName": "Not You Too (feat. Chris Brown)", "image": "https://i.scdn.co/image/ab67616d0000b273bba7cfaf7c59ff0898acba1f", "id": "3Q4gttWQ6hxqWOa3tHoTNi" }, { "name": "Over My Dead Body", "albumName": "Take Care (Deluxe)", "artistName": "Drake", "trackName": "Over My Dead Body", "image": "https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550", "id": "2Gnsof1hvZzjE1xdLRpjtf" }, { "name": "Years Go By", "albumName": "A N N I V E R S A R Y", "artistName": "Bryson Tiller", "trackName": "Years Go By", "image": "https://i.scdn.co/image/ab67616d0000b273008d8077814ce15da0085b47", "id": "4SVTus5gJc5cfkFZ8ELK1p" }, { "name": "Go To Hell", "albumName": "Bad Habits (Deluxe)", "artistName": "NAV", "trackName": "Go To Hell", "image": "https://i.scdn.co/image/ab67616d0000b273a4aaecb02b51550635d7c1b1", "id": "6oHalJC4hM1cS4tt6fhzLH" }, { "name": "Focused", "albumName": "Focused", "artistName": "PsychoYP", "trackName": "Focused", "image": "https://i.scdn.co/image/ab67616d0000b27360215e5cb2e5e101392514f0", "id": "5Yx0NLeMXCNgx1rAzHQh25" }, { "name": "Hit Different", "albumName": "Hit Different", "artistName": "SZA", "trackName": "Hit Different", "image": "https://i.scdn.co/image/ab67616d0000b273a135dd969dce9f38ed32ef98", "id": "7Bar1kLTmsRmH6FCKKMEyU" }, { "name": "Always Forever", "albumName": "A N N I V E R S A R Y", "artistName": "Bryson Tiller", "trackName": "Always Forever", "image": "https://i.scdn.co/image/ab67616d0000b273008d8077814ce15da0085b47", "id": "1LV5cAo02H8h5YlZNcjULM" }, { "name": "Youngest in Charge", "albumName": "43 Drill Dippers #2", "artistName": "SJ", "trackName": "Youngest in Charge", "image": "https://i.scdn.co/image/ab67616d0000b27350f846315ae870a2cb11fb65", "id": "3q1jlzcqeaft2nYFzCNOkN" }, { "name": "Home", "albumName": "NRG 105", "artistName": "Knucks", "trackName": "Home", "image": "https://i.scdn.co/image/ab67616d0000b2736896f87c9a0538afe9d8149c", "id": "6Ncr1lCYnE3JHwtVK4nLAx" }, { "name": "Sorry - Original Demo", "albumName": "Lemonade", "artistName": "Beyoncé", "trackName": "Sorry - Original Demo", "image": "https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23", "id": "6eR1N0EBHiDkGDzegX99d3" }, { "name": "Take Your Shot", "albumName": "SANCIETY 2", "artistName": "San Bravura", "trackName": "Take Your Shot", "image": "https://i.scdn.co/image/ab67616d0000b27361ec35706a7b11046d88efcc", "id": "4xzHMCUYk8dvlziKZ9vWri" }, { "name": "Only You Freestyle", "albumName": "Only You Freestyle", "artistName": "Headie One", "trackName": "Only You Freestyle", "image": "https://i.scdn.co/image/ab67616d0000b273f7534e604b1a5c9d8182130d", "id": "4OENnoidV0h8gJV6bhrw7r" }, { "name": "Within A Day", "albumName": "Me Before You (Original Motion Picture Score)", "artistName": "Craig Armstrong", "trackName": "Within A Day", "image": "https://i.scdn.co/image/ab67616d0000b273c30f84b2cb633637d1da3a69", "id": "6X5BTmKnwmeP02pinepASv" }, { "name": "wicked, sexy!", "albumName": "EVERYTHING YOU HEARD IS TRUE", "artistName": "Odunsi (The Engine)", "trackName": "wicked, sexy!", "image": "https://i.scdn.co/image/ab67616d0000b2737b37913dd47d2214cc891ba2", "id": "6IsOt1shnug3aISsedXatq" }, { "name": "Throw Away", "albumName": "Monster", "artistName": "Future", "trackName": "Throw Away", "image": "https://i.scdn.co/image/ab67616d0000b273e2528d35865f3114cfe9a16e", "id": "2ML7vSeIZEmOCOiLUmz7Sv" }, { "name": "You Used to Love Me", "albumName": "Faith", "artistName": "Faith Evans", "trackName": "You Used to Love Me", "image": "https://i.scdn.co/image/ab67616d0000b273157ca087bea9d4e886abf7ce", "id": "0KhXVmAN4sqeEgsqRd39f2" }, { "name": "No Promises", "albumName": "The Bigger Artist", "artistName": "A Boogie Wit da Hoodie", "trackName": "No Promises", "image": "https://i.scdn.co/image/ab67616d0000b273cdba7ee22968991250725ce1", "id": "2BJpuAoDeQ1QuPvnryfAWK" }]}
                        renderItem={_renderItem_b}
                        sliderWidth={Dimensions.get("window").width / 3}
                        itemWidth={Dimensions.get("window").width / 3}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 0 }}>
                <View style={{ width: 100, backgroundColor: '#fff' }}>
                    {/**Top Tracks */}


                </View>
                <View style={{ width: 100, backgroundColor: '#fff', }}>
                    {/**Top Artists */}

                </View>
            </View>
            <View style={{ width: Dimensions.get("window").width }}>
                {/**Playlist */}
                <Carousel
                    // ref={(c) => { _carousel = c; }}
                    data={[{ "id": "1rc3WnJzAzfMQjdypYidPs", "title": "muse • bout it", "images": "https://i.scdn.co/image/ab67616d0000b2734abe8b5d722c2d2231625a12", "link": "https://open.spotify.com/playlist/1rc3WnJzAzfMQjdypYidPs" }, { "id": "3RGjvuB2c9PrVCtpZyG9QA", "title": "SafeParty", "images": "https://i.scdn.co/image/ab67616d0000b2730a4fd8aa50652821b1a2a054", "link": "https://open.spotify.com/playlist/3RGjvuB2c9PrVCtpZyG9QA" }, { "id": "2UHWZRkk0gCmLr29TP3YMu", "title": "love_N_drugs.wav", "images": "https://mosaic.scdn.co/640/ab67616d0000b2738eb0280d561e9b964a3e74caab67616d0000b2739c1e02d4becb7c5bbca01e2aab67616d0000b273b7fabe5cebff71420c7fa7e7ab67616d0000b273e2528d35865f3114cfe9a16e", "link": "https://open.spotify.com/playlist/2UHWZRkk0gCmLr29TP3YMu" }, { "id": "137vUWYMoBsxmEGB4mTmwu", "title": "Certified Lover Boy : A Side", "images": "https://i.scdn.co/image/ab67706c0000bebb34a5b39d8504c68eb10d0133", "link": "https://open.spotify.com/playlist/137vUWYMoBsxmEGB4mTmwu" }, { "id": "5woEEVXaPKyIxmWQnAMwjT", "title": "Certified Lover Boy : B Side", "images": "https://i.scdn.co/image/ab67706c0000bebb8c455341ae668a5abba1cc35", "link": "https://open.spotify.com/playlist/5woEEVXaPKyIxmWQnAMwjT" }, { "id": "707Jnxr3wi9yCbnbrdvffR", "title": "mark my words, imma ball w/o u", "images": "https://i.scdn.co/image/ab67616d0000b273e2528d35865f3114cfe9a16e", "link": "https://open.spotify.com/playlist/707Jnxr3wi9yCbnbrdvffR" }, { "id": "7v90oOfDavqDA78U6qlsnB", "title": "MTV Base (2010-2012)", "images": "https://mosaic.scdn.co/640/ab67616d0000b2730fbb5046ac2211a4aab5ecfaab67616d0000b2732ed326786e4c61c6b1dbf222ab67616d0000b27372babba16ea5e3afe690b4f1ab67616d0000b273c08d5fa5c0f1a834acef5100", "link": "https://open.spotify.com/playlist/7v90oOfDavqDA78U6qlsnB" }, { "id": "7FlaTZ9F5ELaijHCQfRUzE", "title": "TSB presents: sadniggahours™️", "images": "https://i.scdn.co/image/ab67706c0000bebb6812627843ca278576bf9009", "link": "https://open.spotify.com/playlist/7FlaTZ9F5ELaijHCQfRUzE" }, { "id": "4irBVhKMQ3X54bs4ZqHRxk", "title": "legends.never.die.", "images": "https://mosaic.scdn.co/640/ab67616d0000b2738fe5d04b06aff90f9fe796f5ab67616d0000b273b0d5b6ebd2ba98d17df1b007ab67616d0000b273da9e59639a9759d8952890c6ab67616d0000b273f7db43292a6a99b21b51d5b4", "link": "https://open.spotify.com/playlist/4irBVhKMQ3X54bs4ZqHRxk" }, { "id": "23iOhJClfchLxGeanZR0QU", "title": "i seen so called good-girls turn on me...", "images": "https://i.scdn.co/image/ab67706c0000bebbdfe37e27d384eec4abef2182", "link": "https://open.spotify.com/playlist/23iOhJClfchLxGeanZR0QU" }, { "id": "5atrb2fLIYtmWy1zbgda2S", "title": "shiloh dynasty: the sound", "images": "https://i.scdn.co/image/ab67706c0000bebb6e98e672ef89cf7909281232", "link": "https://open.spotify.com/playlist/5atrb2fLIYtmWy1zbgda2S" }, { "id": "4imsthW5EWhqAoybzBbQV2", "title": "she was gonna break my heart regardless...", "images": "https://i.scdn.co/image/ab67706c0000bebb458aabf0ae8a1658d1084ff4", "link": "https://open.spotify.com/playlist/4imsthW5EWhqAoybzBbQV2" }, { "id": "1kbhjOcNOa9zqoK7cH03cc", "title": "KENDRICK LAMAR DUCKWORTH", "images": "https://mosaic.scdn.co/640/ab67616d0000b2732cd55246d935a8a77cb4859eab67616d0000b27378de8b28de36a74afc0348b5ab67616d0000b2739b035b031d9f0a6a75ae464eab67616d0000b273eddb2639b74ac6c202032ebe", "link": "https://open.spotify.com/playlist/1kbhjOcNOa9zqoK7cH03cc" }]}
                    renderItem={_renderItem1}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width}
                />
            </View>
            {/* <Text>Profile</Text>
            <Button
                title="Check out Updates"
                onPress={() => navigation.navigate("Profile")}
            /> */}
        </SafeAreaView >
    )
}

export default Profile

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});