import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView, Linking, Dimensions, Animated, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import Copyright from '../components/Copyright';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
const screenWidth = Dimensions.get('window').width;
const Network = ({ navigation }) => {

    const [isRunning, setIsRunning] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [videoContent, setVideoContent] = useState({
        id: 1,
        img: require("../../assets/net-shows-1.jpg"),
        title: "Lead with Intention with Coach Ambereen Hameed 51124",
        subtitle: 'Lead with Intention with Coach Ambereen Hameed',
        desc: "Lead with Intention with Coach Ambereen Hameed.",
        desc1: "This show is set out on an expedition to allow you a discovery to your BEST SELF! My intention is to bring forth many different topics related to better living, creating authentic relationships as we take a journey to unleash the best of who we are, tap into a new potential and build habits that will allow us to prioritize what truly matters. The intention of “Lead with Purpose” is to support you in your journey of life and you cultivate the life you were meant to LIVE! My hope is this show will embark you on a transformative path to be in gratitude, accept the unfolding of life and to commit to your values and dreams.",
        url: "https://www.youtube.com/watch?v=VIsqWHvfwGU"
    })
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const scrollViewRef = useRef(null);
    const flatListRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const hostImg = [
        {
            id: 1,
            img: require('../../assets/host-1.png')
        },
        {
            id: 2,
            img: require('../../assets/host-2.png')
        },
        {
            id: 3,
            img: require('../../assets/host-3.png')
        },
        {
            id: 4,
            img: require('../../assets/host-4.png')
        },
        {
            id: 5,
            img: require('../../assets/host-5.png')
        },
        {
            id: 6,
            img: require('../../assets/host-6.png')
        },
        {
            id: 7,
            img: require('../../assets/host-7.png')
        },
        {
            id: 8,
            img: require('../../assets/host-8.png')
        },
        {
            id: 9,
            img: require('../../assets/host-9.png')
        },
        {
            id: 10,
            img: require('../../assets/host-10.jpg')
        },
        {
            id: 11,
            img: require('../../assets/host-11.png')
        },
        {
            id: 12,
            img: require('../../assets/host-12.png')
        },
        {
            id: 13,
            img: require('../../assets/host-13.png')
        },
        {
            id: 14,
            img: require('../../assets/host-14.png')
        },
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            flatListRef.current?.scrollToOffset({
                offset: (scrollX._value + screenWidth) % (hostImg.length * screenWidth),
                animated: true,
            });
        }, 1500); // Slide every 3 seconds

        return () => clearInterval(interval);
    }, [scrollX]);

    useEffect(() => {
        if (isRunning) {
            startPulseAnimation();
        } else {
            scaleAnim.stopAnimation();
            scaleAnim.setValue(1);
        }
    }, [isRunning]);

    const handleWatchMore = () => {
        const url = 'https://www.youtube.com/@HERNetworks';
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };
    const handleClick = () => {
        const url = 'https://www.youtube.com/@HERNetworks';
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };
    const togglePlayPause = (data) => {
        setVideoContent(prev => data)
        setLoadMore(false)
        setIsRunning(true);
        const dynamicHeight = responsiveHeight(55);
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: dynamicHeight, animated: true });
        }
        setTimeout(() => {
            startPulseAnimation();
        }, 1000)
    };
    const startPulseAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.2,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };
    const showMore = () => {
        setLoadMore((prev) => !prev)
    }

    const latestShows = [
        {
            id: 1,
            img: require("../../assets/net-shows-1.jpg"),
            title: "Lead with Intention with Coach Ambereen Hameed 51124",
            subtitle: 'Lead with Intention with Coach Ambereen Hameed',
            desc: "Lead with Intention with Coach Ambereen Hameed.",
            desc1: "This show is set out on an expedition to allow you a discovery to your BEST SELF! My intention is to bring forth many different topics related to better living, creating authentic relationships as we take a journey to unleash the best of who we are, tap into a new potential and build habits that will allow us to prioritize what truly matters. The intention of “Lead with Purpose” is to support you in your journey of life and you cultivate the life you were meant to LIVE! My hope is this show will embark you on a transformative path to be in gratitude, accept the unfolding of life and to commit to your values and dreams.",
            url: "https://www.youtube.com/watch?v=VIsqWHvfwGU"
        },
        {
            id: 2,
            img: require("../../assets/net-shows-2.jpg"),
            title: "Elevate Your Life with Dr. Michelle Odette Green 261024",
            subtitle: 'Elevate Your Life with Dr. Michelle Odette Green',
            desc: "Welcome to 'Elevate Your Life,' this show is dedicated to empowering you to reach new heights of success and fulfillment.",
            desc1: "Join us as we dive into the principles, strategies, and inspiring stories that will elevate your thoughts, expand your mindset, and ignite positive change in every area of your life. Get ready to embark on a journey of self-discovery, growth, and ultimate transformation. This is your time to rise and shine!",
            url: "https://www.youtube.com/watch?v=14zEZj231SU&t=137s"
        },
        {
            id: 3,
            img: require("../../assets/net-shows-3.jpg"),
            title: "Create Your Victorious Life with Cindy Gould 251024",
            subtitle: 'Create Your Victorious Life with Cindy Gould',
            desc: "These incredible people are each from different walks of life who will share their personal stories of resilience, perseverance, and triumph.",
            desc1: "Their experiences will not only entertain and educate you, they will also ignite a fire under you to pursue the vision that God has placed in your heart with everything you've got!",
            url: "https://www.youtube.com/watch?v=bxECddj4RL8&t=75s"
        },
    ]



    return (
        <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
            <ImageBackground
                source={require("../../assets/net-bg.jpg")}
                style={styles.backgroundImage}
            >
                <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.topTitle}>The Best Content For YOU!</Text>
                    <Text style={styles.title}>Welcome to H.E.R Network</Text>
                    <Text style={styles.subtitle}>Immerse yourself in a world of inspiration, education, and entertainment that speaks to the diverse experiences and passions of women everywhere.</Text>
                    <TouchableOpacity style={styles.button} onPress={handleClick}>
                        <Text style={styles.buttonText}>Tell me more!</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* Our Channels Section */}

            <View style={styles.channelsSection}>
                <Text style={styles.channelsTitle}>Our Channels</Text>
                <View style={styles.channelIcons}>
                    <Image source={require('../../assets/ch-1.png')} style={styles.channelIcon} />
                    <Image source={require('../../assets/ch-2.png')} style={styles.channelIcon} />
                    <Image source={require('../../assets/ch-3.png')} style={styles.channelIcon} />
                </View>
                <View><Image source={require('../../assets/ch-4.png')} style={{ width: responsiveWidth(24), height: responsiveHeight(14), resizeMode: 'contain' }} /></View>
            </View>

            {/* About Spanglish */}

            <View style={styles.aboutSection}>
                <Text style={styles.aboutTopTitle}>About H.E.R Network</Text>
                <Text style={styles.aboutTitle}>Embark on a visual journey of empowerment and inspiration</Text>
                <Text style={styles.aboutDes}>Part of the Spanglish World family, the H.E.R. Network is a media network hosted, directed, produced and run by women for women. BarnBurner has always focused on giving a voice to the voiceless and in the media world women should have a bigger stage to voice those views. The recently launched network is guided by Canadian and legendary Reggae star Tanya Mullings and Sports journalist Nicole Monique Grey. </Text>
                <View>
                </View>
            </View>

            {/* Latest Shows Section */}

            <View style={styles.latestShowsSection}>
                <Text style={styles.sectionTitle}>Our Latest Shows</Text>
                <TouchableOpacity style={styles.watchMoreButton} onPress={handleWatchMore}>
                    <Text style={styles.watchMoreText}>Click here</Text>
                </TouchableOpacity>

                <View style={styles.showCard}>
                    <TouchableOpacity>
                        <WebView
                            style={styles.video}
                            source={{
                                uri: videoContent.url
                            }}
                            allowsFullscreenVideo={true}
                        />
                    </TouchableOpacity>
                    <View style={styles.showContent}>
                        <Text style={styles.showTitle}>{videoContent.title}</Text>
                        <Text style={styles.showSubTitle}>{videoContent.subtitle}{'\n'}</Text>
                        <Text style={styles.showDescription}>
                            {videoContent.desc}.{'\n'}</Text>
                        {!loadMore ? <Text style={styles.showDescription}>
                            {videoContent.desc1.substring(0, videoContent.desc1.length / 4)}... </Text> : <Text style={styles.showDescription}>
                            {videoContent.desc1} </Text>}
                        <TouchableOpacity onPress={showMore}>
                            <Text style={{ color: "#FFD700", fontWeight: "bold", marginTop: 8, fontSize: 15 }}>{!loadMore ? "[+] Show More" : "[-] Show Less"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={{ alignItems: 'center', justifyContent: 'center', flex: 1, marginBottom: responsiveHeight(3) }}
                >
                    {
                        latestShows.map((item) => (
                            <View key={item.id} style={{
                                position: 'relative', width: responsiveWidth(85),
                                height: responsiveHeight(40), paddingVertical: responsiveHeight(5),
                                marginBottom: responsiveHeight(2),
                            }}>
                                <TouchableOpacity onPress={() => togglePlayPause(item)}>
                                    <Image
                                        source={item.img}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 10,
                                        }}
                                    />

                                    <Animated.View style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: [{ translateX: -25 }, { translateY: -25 }, { scale: videoContent.id === item.id ? scaleAnim : 1 },],
                                    }}>
                                        {isRunning && videoContent.id == item.id ? (
                                            <Icon name="pause" size={35} color="green" />
                                        ) : (
                                            <Icon name="play" size={35} color="red" />
                                        )}
                                    </Animated.View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>{item.subtitle}</Text>
                                <Text style={{ fontSize: 14, color: 'gray', marginTop: 3 }}>
                                    {item.desc.substring(0, item.desc.length / 2)}...
                                </Text>
                            </View>
                        ))
                    }
                </View>

            </View>

            <ImageBackground
                source={require("../../assets/bg-2.jpg")}
                style={styles.backgroundImage}
            >
                <View style={{ paddingVertical: responsiveHeight(7), paddingHorizontal: responsiveWidth(7) }}>
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: "#ffb700", borderWidth: 1, borderColor: "gray", width: responsiveWidth(45), paddingHorizontal: 11, borderRadius: 20, justifyContent: "center", paddingVertical: 5 }}>Enjoy Our shows </Text>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: "#fff", marginVertical: responsiveHeight(3), fontWeight: 'bold' }}>Stay in the loop with the latest video releases.</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.7), color: "#fff" }}>Discover content that resonates with you, featuring real women sharing their stories and expertise.</Text>
                    <TouchableOpacity style={{
                        backgroundColor: '#FFD700', paddingVertical: responsiveHeight(1.5), borderRadius: responsiveWidth(10), width: responsiveWidth(42), marginVertical: responsiveHeight(4)
                    }} onPress={handleClick}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: responsiveFontSize(2), textAlign: "center" }}>Tune For New shows</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* Our Hosts */}

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.aboutTopTitle}>Our Hosts</Text>
                <Text style={{ ...styles.aboutTitle, fontSize: responsiveFontSize(3.5) }}>Meet Our Top Talent</Text>
                <FlatList
                    ref={flatListRef}
                    data={hostImg}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    renderItem={({ item }) => (
                        <View style={{ width: responsiveWidth(100), alignItems: 'center', justifyContent: "center" }}>
                            <Image
                                source={item.img}
                                style={{ width: responsiveWidth(80), height: responsiveHeight(60), resizeMode: 'contain' }}
                            />
                        </View>
                    )}
                />

            </View>

            <ImageBackground
                source={require("../../assets/bg-3.jpg")}
                style={{ ...styles.backgroundImage, height: responsiveHeight(75) }}
                blurRadius={7}
            >
                <View style={{ paddingVertical: responsiveHeight(7), paddingHorizontal: responsiveWidth(7) }}>
                    <Text style={{ fontSize: responsiveFontSize(2.7), color: "#fff", fontWeight: 'bold' }}>More than 30,000 viewers trust </Text>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: "#FFD700", marginBottom: responsiveHeight(3), fontWeight: 'bold' }}>Spanglish World Network </Text>
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: "#fff" }}>Where stories come to life through the magic of sound and motion</Text>
                    <View style={{ marginTop: responsiveHeight(5), flexDirection: "row", justifyContent: "space-between", flexWrap: 'wrap', gap: 15 }}>
                        <Image
                            source={require("../../assets/ch-1.png")}
                            style={{ width: responsiveWidth(40), height: responsiveHeight(20), resizeMode: 'contain', backgroundColor: "#FFFFFF1A", borderRadius: 10 }}
                        />
                        <Image
                            source={require("../../assets/ch-3.png")}
                            style={{ width: responsiveWidth(40), height: responsiveHeight(20), resizeMode: 'contain', backgroundColor: "#FFFFFF1A", borderRadius: 10 }}
                        />
                        <Image
                            source={require("../../assets/ch-2.png")}
                            style={{ width: responsiveWidth(40), height: responsiveHeight(20), resizeMode: 'contain', backgroundColor: "#FFFFFF1A", borderRadius: 10 }}
                        />
                    </View>
                </View>
            </ImageBackground>

            {/* Why Choose Us */}

            <View
                style={{
                    paddingHorizontal: responsiveWidth(5),
                    paddingVertical: responsiveHeight(3),
                    backgroundColor: '#F5F5F5',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: responsiveFontSize(1.5),
                        color: '#000',
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        marginBottom: responsiveHeight(1),
                    }}
                >
                    WHY CHOOSE US
                </Text>
                <Text
                    style={{
                        fontSize: responsiveFontSize(2.5),
                        color: '#000',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: responsiveHeight(1.5),
                    }}
                >
                    Why you must whatch our shows
                </Text>
                <Text
                    style={{
                        fontSize: responsiveFontSize(1.8),
                        color: '#333',
                        textAlign: 'center',
                        marginBottom: responsiveHeight(3),
                    }}
                >
                    H.E.R Network provides a space for diverse voices, empowers and represents women, builds a supportive community, offers educational content, and contributes to breaking stereotypes and challenging norms.
                </Text>

                {/* Card Section */}
                <View
                    style={{
                        width: responsiveWidth(90),
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        padding: responsiveWidth(5),
                        alignItems: 'center',
                        elevation: 5, // shadow for Android
                        shadowColor: '#000', // shadow for iOS
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 8,
                        marginTop: responsiveHeight(3),
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FFD700', // yellow background for icon
                            borderRadius: 10,
                            padding: responsiveWidth(3),
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        <Ionicons name="flower" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Use your Voice
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Gain a deeper understanding of various aspects of life, culture, and personal development from the diverse voices of women.
                    </Text>
                    <TouchableOpacity
                        style={{
                            paddingVertical: responsiveHeight(1),
                            paddingHorizontal: responsiveWidth(5),
                            backgroundColor: '#FFD700', // yellow button background
                            borderRadius: 20,
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: responsiveFontSize(1.8),
                                textAlign: 'center',
                            }}
                        >
                            Learn More
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: responsiveWidth(90),
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        padding: responsiveWidth(5),
                        alignItems: 'center',
                        elevation: 5, // shadow for Android
                        shadowColor: '#000', // shadow for iOS
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 8,
                        marginTop: responsiveHeight(3),
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FFD700', // yellow background for icon
                            borderRadius: 10,
                            padding: responsiveWidth(3),
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        <Icon name="heart" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Empowerment
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Pursue their passions and goals, feel empowered and inspired with our content created for women to women. We are POWERFULL
                    </Text>
                    <TouchableOpacity
                        style={{
                            paddingVertical: responsiveHeight(1),
                            paddingHorizontal: responsiveWidth(5),
                            backgroundColor: '#FFD700', // yellow button background
                            borderRadius: 20,
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: responsiveFontSize(1.8),
                                textAlign: 'center',
                            }}
                        >
                            Learn More
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: responsiveWidth(90),
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        padding: responsiveWidth(5),
                        alignItems: 'center',
                        elevation: 5, // shadow for Android
                        shadowColor: '#000', // shadow for iOS
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 8,
                        marginTop: responsiveHeight(3),
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FFD700', // yellow background for icon
                            borderRadius: 10,
                            padding: responsiveWidth(3),
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        <Icon name="book" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Learn something new
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        gain insights into various subjects such as career development, health and wellness, relationships,  personal growth and knowledge enhancement.
                    </Text>
                    <TouchableOpacity
                        style={{
                            paddingVertical: responsiveHeight(1),
                            paddingHorizontal: responsiveWidth(5),
                            backgroundColor: '#FFD700', // yellow button background
                            borderRadius: 20,
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: responsiveFontSize(1.8),
                                textAlign: 'center',
                            }}
                        >
                            Learn More
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* testimonials */}

            <ImageBackground
                source={require("../../assets/bg-4.jpg")}
                style={{ ...styles.backgroundImage, height: responsiveHeight(70) }}
                blurRadius={7}
            >
                <View style={{ paddingVertical: responsiveHeight(5), paddingHorizontal: responsiveWidth(7), flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: "#ffb700", borderWidth: 1, borderColor: "gray", width: responsiveWidth(33), paddingHorizontal: 13, borderRadius: 20, justifyContent: "center", paddingVertical: 5 }}>Testimonials </Text>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: "#fff", marginVertical: responsiveHeight(3), fontWeight: 'bold' }}>What Our Viewers Say</Text>
                    <View style={{ width: responsiveWidth(80), height: responsiveHeight(45), backgroundColor: "#FFFFFF1A", borderRadius: 10, padding: 20 }}>
                        <View style={{ flexDirection: 'row', gap: 6 }}>
                            <Icon name="star" size={25} color="#FFD700" />
                            <Icon name="star" size={25} color="#FFD700" />
                            <Icon name="star" size={25} color="#FFD700" />
                            <Icon name="star" size={25} color="#FFD700" />
                            <Icon name="star" size={25} color="#FFD700" />
                        </View>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "#fff", marginTop: responsiveHeight(4) }}>As a language learner, Spanglish World Networks Inc. has been an invaluable resource for me. Their programming provides a unique blend of entertainment and education, helping me improve my language skills while staying entertained. I'm grateful for the quality content they provide.</Text>
                        <View style={{ marginTop: responsiveHeight(4), flexDirection: "row", gap: 20, alignItems: 'center' }}>
                            <Icon name="user" size={50} color="#FFD700" />
                            <View style={{}}>
                                <Text style={{ fontSize: responsiveFontSize(2), color: "#fff" }}>Carlos Martinez</Text>
                                <Text style={{ fontSize: responsiveFontSize(2), color: "#FFD700" }}>Language Enthusiast</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            {/* From Our Channel */}

            <View style={styles.aboutSection}>
                <Text style={styles.aboutTopTitle}>From Our Channel</Text>
                <Text style={styles.aboutTitle}>Get the bold insights and new perspectives</Text>
                <TouchableOpacity style={{
                    backgroundColor: '#FFD700', paddingVertical: responsiveHeight(1.5), borderRadius: responsiveWidth(10), width: responsiveWidth(35), marginVertical: responsiveHeight(2)
                }} onPress={handleClick}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: responsiveFontSize(2), textAlign: "center" }}>View More</Text>
                </TouchableOpacity>

            </View>

            <Copyright />
        </ScrollView>
    );
};

export default Network;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backgroundImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(55),
        justifyContent: 'space-between',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveHeight(3),
        alignItems: 'center',
    },
    logo: {
        width: responsiveWidth(25),
        height: responsiveHeight(5),
        resizeMode: 'contain',
    },
    menuIcon: {
        width: responsiveWidth(8),
        height: responsiveHeight(4),
        resizeMode: 'contain',
    },
    textContent: {
        marginBottom: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(8)
    },
    topTitle: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: '#fff',
        paddingLeft: responsiveWidth(8),
        paddingBottom: responsiveHeight(3)
    },
    title: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: responsiveHeight(3)
    },
    subtitle: {
        fontSize: responsiveFontSize(2),
        color: '#fff',
        marginVertical: responsiveHeight(1),
        paddingBottom: responsiveHeight(3)
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(10),
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
        textAlign: "center"
    },
    channelsSection: {
        backgroundColor: '#FFD700',
        paddingVertical: responsiveHeight(3),
        alignItems: 'center',
    },
    channelsTitle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: responsiveHeight(1),
    },
    channelIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: responsiveWidth(4),
    },
    channelIcon: {
        width: responsiveWidth(12),
        height: responsiveWidth(12),
        resizeMode: 'contain',
    },
    aboutSection: {
        backgroundColor: '#FFFFFF',
        paddingVertical: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5),
    },
    aboutTopTitle: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'semibold',
        color: '#000',
        marginBottom: responsiveHeight(1.2),
        paddingLeft: responsiveWidth(4)
    },
    aboutTitle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: '#000',
        marginBottom: responsiveHeight(1.2),
    },
    aboutDes: {
        fontSize: responsiveFontSize(1.8),
        color: 'gray',
    },
    latestShowsSection: {
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: '#333',
        marginBottom: responsiveHeight(1),
    },
    watchMoreButton: {
        alignSelf: 'flex-end',
        backgroundColor: '#FFD700',
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(5),
        borderRadius: responsiveWidth(2),
        marginBottom: responsiveHeight(2),
    },
    watchMoreText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
    },
    showCard: {
        marginBottom: responsiveHeight(0),
    },
    video: {
        height: responsiveHeight(21),
    },
    showContent: {
        padding: responsiveWidth(4),
    },
    showTitle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    showSubTitle: {
        fontSize: responsiveFontSize(1.8),
        color: 'gray',
    },
    showDescription: {
        fontSize: responsiveFontSize(1.8),
        color: 'gray',
    },
});
