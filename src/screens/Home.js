import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView, Linking, Dimensions, Animated, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import Copyright from '../components/Copyright';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [loadMore, setLoadMore] = useState(false);

    const [videoContent, setVideoContent] = useState({
        id: 1,
        img: require("../../assets/th-1.jpg"),
        title: "Knockout with Noel Clubb 31124",
        subtitle: 'Knockout with Noel Clubb',
        desc: "A look into the latest boxing news and matches with commentaries by an elite panel of boxing experts and special guests.",
        desc1: "Special Guest: Jaye Byard, Ray Olubowale, Richard Solomon, Ryan Rannelli & Steve Beaupre.",
        url: "https://www.youtube.com/watch?v=QN_1o1VoJZo"
    })

    const scaleAnim = useRef(new Animated.Value(1)).current;
    const scrollViewRef = useRef(null);
    const userData = useSelector(state => state.user.user);

    useEffect(() => {
        if (!userData) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }
    }, [])

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
        const url = 'https://m.youtube.com/@SpanglishWorldNetwork';
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
            img: require("../../assets/th-1.jpg"),
            title: "Knockout with Noel Clubb 31124",
            subtitle: 'Knockout with Noel Clubb',
            desc: "A look into the latest boxing news and matches with commentaries by an elite panel of boxing experts and special guests.",
            desc1: "Special Guest: Jaye Byard, Ray Olubowale, Richard Solomon, Ryan Rannelli & Steve Beaupre.",
            url: "https://www.youtube.com/watch?v=QN_1o1VoJZo"
        },
        {
            id: 2,
            img: require("../../assets/th-2.jpg"),
            title: "Candid Frank Live Leaf Talk with Candid Frank Stanisci and Aaron Freeland 11124",
            subtitle: 'Candid Frank Live Leaf Talk with Candid Frank Stanisci and Aaron Freeland',
            desc: "Candid Frank Stanisci and Aaron Freeland take a look at the latest news about the Toronto Maple Leafs making waves around the NHL.",
            desc1: "#CandidFrankLive, Frank Stanisci, Aaron Freeland, Spanglish World Networks, Spanglish Sports World, H.E.R. Network, La Ronda del Dia, #LaPortadaCanada, Zingo TV, City of Toronto, National Hockey League (NHL), Toronto Maple Leafs, #AnaheimDucks, #ArizonaCoyotes, #BostonBruins, #BuffaloSabres, #CalgaryFlames, #CarolinaHurricanes, #ChicagoBlackhawks, #ColoradoAvalanche, #ColumbusBlueJackets, #DallasStars, #DetroitRedWings, #EdmontonOilers, #FloridaPanthers, #LosAngelesKings, #MinnesotaWild, #MontrealCanadiens, #NashvillePredators, #NewJerseyDevils, #NewYorkIslanders, #NewYorkRangers, #OttawaSenators, #PhiladelphiaFlyers, #PittsburghPenguins, #SanJoseSharks, #SeattleKraken, #StLouisBlues, #TampaBayLightning, #VancouverCanucks, #VegasGoldenKnights, #WashingtonCapitals, #WinnipegJets, American Hockey League, Toronto Marlies Hockey Club, Ontario Hockey League, MLSE (Maple Leaf Sports & Entertainment Partnership), Sportsnet, TSN - The Sports Network - Canada, CBC, CBC/Radio-Canada, CBC Sports, ESPN, ESPN+, Barley Sport, CBS, CBS News and Stations, CBS Sports, NHL Network, Madison Square Garden Sports Corp., CityTV Toronto, CTV News",
            url: "https://www.youtube.com/watch?v=-PZn-uYgB1s"
        },
        {
            id: 3,
            img: require("../../assets/th-3.jpg"),
            title: "Candid Frank Live CFL Talk with Frank Stanisci and David Morassutti 281024",
            subtitle: 'Candid Frank Live CFL Talk with Frank Stanisci and David Morassutti',
            desc: "Candid Frank Stanisci and David Morassutti take a deep dive into the headlines in the CFL",
            desc1: "#candidfranklivecfltalk, #candidfrankliveshows, Frank Stanisci, DavidMorassutti, Canadian Football League, Canadian Football League Players' Association (CFLPA), Toronto Argonauts Football Club Inc., Hamilton Tiger-Cats Football Club, Calgary Stampeder Football Club, Alouettes de Montréal, Saskatchewan Roughrider Football Club Inc., BC Lions Football Club, Edmonton Elks, Spanglish World Networks, Spanglish Sports World, La Ronda del Dia, H.E.R. Network, Zingo TV, #LaPortadaCanada, Sportsnet, CBC Sports, TSN - The Sports Network - Canada, Corus Entertainment, Bell Media, Bell Media, Inc., Bell, Rogers Communications, CityTV Toronto, Disney Sports/ESPN Wide World of Sports, ESPN, CBS, NBCUniversal, USA Networks, Olympic Broadcasting Services, NBC Sports, CNN, CNN en Español, BBC, BBC News, FOX Sports, Grupo Televisa, Cisneros, Cisneros Media",
            url: "https://www.youtube.com/watch?v=b6H47kAIBAc"
        },

    ]

    const handleLearnMore = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: true });
        }
    }

    return (
        <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
            <ImageBackground
                source={require("../../assets/media-event.jpg")}
                style={styles.backgroundImage}
            >
                <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.topTitle}>The Best Media Content</Text>
                    <Text style={styles.title}>Spanglish World Networks</Text>
                    <Text style={styles.subtitle}>The best content for you!</Text>
                    <TouchableOpacity style={styles.button} onPress={handleClick}>
                        <Text style={styles.buttonText}>YouTube</Text>
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
                <Text style={styles.aboutTopTitle}>About Spanglish</Text>
                <Text style={styles.aboutTitle}>From entertainment and fun to education and growth</Text>
                <Text style={styles.aboutDes}>Spanglish World Networks Inc. is a conglomerate of multi-media companies that brings their audiences the most updated information through mediums like TV, Radio, Newspapers and Digital media. </Text>
                <View>
                </View>
            </View>

            {/* Latest Shows Section */}

            <View style={styles.latestShowsSection}>
                <Text style={styles.sectionTitle}>Our Latest Shows</Text>
                <TouchableOpacity style={styles.watchMoreButton} onPress={handleWatchMore}>
                    <Text style={styles.watchMoreText}>Watch More</Text>
                </TouchableOpacity>

                <View style={styles.showCard}>
                    <TouchableOpacity>
                        <WebView
                            style={styles.video}
                            source={{
                                uri: videoContent.url
                            }}
                            allowsFullscreenVideo={false}
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
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: "#ffb700", borderWidth: 1, borderColor: "gray", width: responsiveWidth(55), paddingHorizontal: 11, borderRadius: 20, justifyContent: "center", paddingVertical: 5 }}>Enjoy Our Programming </Text>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: "#fff", marginVertical: responsiveHeight(3), fontWeight: 'bold' }}>Whatever You're Into, Get Into Spanglish!</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.7), color: "#fff" }}>Where stories come to life through the magic of sound and motion. From riveting interviews to eye-opening documentaries, let your senses feast on a buffet of compelling narratives.</Text>
                    <TouchableOpacity style={{
                        backgroundColor: '#FFD700', paddingVertical: responsiveHeight(1.5), borderRadius: responsiveWidth(10), width: responsiveWidth(42), marginVertical: responsiveHeight(4)
                    }} onPress={handleClick}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: responsiveFontSize(2), textAlign: "center" }}>Tune Fore More</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

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
                    Why you must choose our content
                </Text>
                <Text
                    style={{
                        fontSize: responsiveFontSize(1.8),
                        color: '#333',
                        textAlign: 'center',
                        marginBottom: responsiveHeight(3),
                    }}
                >
                    Dive into a vibrant mosaic of articles, each a carefully crafted tapestry of words that inform, entertain, and spark curiosity. Whether you're a news hound hungry for the latest headlines or a culture connoisseur seeking the next binge-worthy masterpiece, our diverse array of content has you covered.
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
                        <Icon name="comments" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Great Interviews
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Immerse yourself in thought-provoking dialogues that span a spectrum of topics—from innovation and leadership to personal growth and societal change.
                    </Text>
                    <TouchableOpacity onPress={handleLearnMore}
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
                        <Icon name="futbol-o" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Latest Sports News
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Whether you're a weekend warrior or a fantasy league champion.  Gear up, get ready, and join us as we celebrate the triumphs, and analyze the strategies.
                    </Text>
                    <TouchableOpacity onPress={handleLearnMore}
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
                        <Icon name="newspaper-o" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Articles of Interest and Lifestyle
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Discover wellness practices that nourish the body, mind, and soul, as we explore mindfulness, fitness trends, and holistic approaches to living a balanced life.
                    </Text>
                    <TouchableOpacity onPress={handleLearnMore}
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

export default Home;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backgroundImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
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
