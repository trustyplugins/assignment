import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView, Linking, Dimensions, Animated, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Dimensions.get('window').width;
const Sports = ({ navigation }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [videoContent, setVideoContent] = useState({
        id: 1,
        img: require("../../assets/sp-1.jpg"),
        title: "Candid Frank Live Leaf Talk 81124",
        subtitle: 'Candid Frank Live Leaf Talk with Candid Frank Stanisci and Aaron Freeland',
        desc: "Candid Frank Stanisci and Aaron Freeland take a look at the latest news about the Toronto Maple Leafs making.",
        desc1: "#CandidFrankLive, Frank Stanisci, Aaron Freeland, Spanglish World Networks, Spanglish Sports World, H.E.R. Network, La Ronda del Dia, #LaPortadaCanada, Zingo TV, City of Toronto, National Hockey League (NHL), Toronto Maple Leafs, #AnaheimDucks, #ArizonaCoyotes, #BostonBruins, #BuffaloSabres, #CalgaryFlames, #CarolinaHurricanes, #ChicagoBlackhawks, #ColoradoAvalanche, #ColumbusBlueJackets, #DallasStars, #DetroitRedWings, #EdmontonOilers, #FloridaPanthers, #LosAngelesKings, #MinnesotaWild, #MontrealCanadiens, #NashvillePredators, #NewJerseyDevils, #NewYorkIslanders, #NewYorkRangers, #OttawaSenators, #PhiladelphiaFlyers, #PittsburghPenguins, #SanJoseSharks, #SeattleKraken, #StLouisBlues, #TampaBayLightning, #VancouverCanucks, #VegasGoldenKnights, #WashingtonCapitals, #WinnipegJets, American Hockey League, Toronto Marlies Hockey Club, Ontario Hockey League, MLSE (Maple Leaf Sports & Entertainment Partnership), Sportsnet, TSN - The Sports Network - Canada, CBC, CBC/Radio-Canada, CBC Sports, ESPN, ESPN+, Barley Sport, CBS, CBS News and Stations, CBS Sports, NHL Network, Madison Square Garden Sports Corp., CityTV Toronto, CTV News",
        url: "https://www.youtube.com/watch?v=MXrMUn6NmFg"
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
            img: require("../../assets/sp-1.jpg"),
            title: "Candid Frank Live Leaf Talk 81124",
            subtitle: 'Candid Frank Live Leaf Talk with Candid Frank Stanisci and Aaron Freeland',
            desc: "Candid Frank Stanisci and Aaron Freeland take a look at the latest news about the Toronto Maple Leafs making.",
            desc1: "#CandidFrankLive, Frank Stanisci, Aaron Freeland, Spanglish World Networks, Spanglish Sports World, H.E.R. Network, La Ronda del Dia, #LaPortadaCanada, Zingo TV, City of Toronto, National Hockey League (NHL), Toronto Maple Leafs, #AnaheimDucks, #ArizonaCoyotes, #BostonBruins, #BuffaloSabres, #CalgaryFlames, #CarolinaHurricanes, #ChicagoBlackhawks, #ColoradoAvalanche, #ColumbusBlueJackets, #DallasStars, #DetroitRedWings, #EdmontonOilers, #FloridaPanthers, #LosAngelesKings, #MinnesotaWild, #MontrealCanadiens, #NashvillePredators, #NewJerseyDevils, #NewYorkIslanders, #NewYorkRangers, #OttawaSenators, #PhiladelphiaFlyers, #PittsburghPenguins, #SanJoseSharks, #SeattleKraken, #StLouisBlues, #TampaBayLightning, #VancouverCanucks, #VegasGoldenKnights, #WashingtonCapitals, #WinnipegJets, American Hockey League, Toronto Marlies Hockey Club, Ontario Hockey League, MLSE (Maple Leaf Sports & Entertainment Partnership), Sportsnet, TSN - The Sports Network - Canada, CBC, CBC/Radio-Canada, CBC Sports, ESPN, ESPN+, Barley Sport, CBS, CBS News and Stations, CBS Sports, NHL Network, Madison Square Garden Sports Corp., CityTV Toronto, CTV News",
            url: "https://www.youtube.com/watch?v=MXrMUn6NmFg"
        },
        {
            id: 2,
            img: require("../../assets/sp-2.jpg"),
            title: "Candid Frank CFL Talk with Frank Stanisci and David Morassutti 41124",
            subtitle: 'Candid Frank CFL Talk with Frank Stanisci and David Morassutti',
            desc: "Candid Frank Stanisci and David Morassutti take a deep dive into the headlines in the CFL",
            desc1: "#candidfranklivecfltalk, #candidfrankliveshows, Frank Stanisci, David Morassutti, Canadian Football League, Canadian Football League Players' Association (CFLPA), Toronto Argonauts Football Club Inc., Hamilton Tiger-Cats Football Club, Calgary Stampeder Football Club, Alouettes de Montréal, Saskatchewan Roughrider Football Club Inc., BC Lions Football Club, Edmonton Elks, Spanglish World Networks, Spanglish Sports World, La Ronda del Dia, H.E.R. Network, Zingo TV, #LaPortadaCanada, Sportsnet, CBC Sports, TSN - The Sports Network - Canada, Corus Entertainment, Bell Media, Bell Media, Inc., Bell, Rogers Communications, CityTV Toronto, Disney Sports/ESPN Wide World of Sports, ESPN, CBS, NBCUniversal, USA Networks, Olympic Broadcasting Services, NBC Sports, CNN, CNN en Español, BBC, BBC News, FOX Sports, Grupo Televisa, Cisneros, Cisneros Media",
            url: "https://www.youtube.com/watch?v=XqmNUn13av8"
        },
        {
            id: 3,
            img: require("../../assets/sp-3.jpg"),
            title: "Redefine Parenting with Veenu Keller 71124",
            subtitle: 'Redefine Parenting with Veenu Keller',
            desc: "Give Your Kids a Childhood They Won't Need To Heal From",
            desc1: "#RedefineParenting, Veenu Keller, Veenu Inspires,The Neuroencoding Institute, #RobbinsResearchInternational, Campbell University, PeopleKeys, Inc., Michael V. Huber, MA, CMPC®, #FollowTheBallLLC, #TheFreshmanFoundation, EPIC Global Solutions, NCSA College Recruiting, Michigan State University, #UniversityofChicago, #JohnFKennedyUniversity, Spanglish World Networks, Spanglish Sports World, H.E.R. Network, La Ronda del Dia, Zingo TV, La Portada Canada, CityTV Toronto, Bell Media, Bell Media, Inc., Bell, Rogers Communications, Shaw Communications, Videotron, Corus Entertainment, Disney Television Studios, OWN: The Oprah Winfrey Network, Turner (Turner Broadcasting System, Inc), CNN, CNN en Español, CBS, CBS News and Stations, NBCUniversal, NBCUniversal Telemundo Enterprises, NBCUniversal Local, NBC News, CNBC, CNBC International, TV Azteca, Cisneros Media, Venevision, Univision, #parentingskills, #parentingtips, #parentinggoals, #parentingadvice, #parentingteens, #parenting101, #parentinghelp, #parentingjourney, #parentingwin, #parentingchallenges, #parentingsupport, #parentingplan, #mentalhealth, #teenempowerment, #teenmentalhealth, #teencoaching, #teenanxiety, #teentherapy, #childhealth",
            url: "https://www.youtube.com/watch?v=cT6KLuZDkek"
        },

    ]



    return (
        <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
            <ImageBackground
                source={require("../../assets/sport-bg.jpg")}
                style={styles.backgroundImage}
            >
                <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.title}>Spanglish Sports World</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}><Text style={styles.subtitle}>Home</Text></TouchableOpacity>
                </View>
            </ImageBackground>

            {/* Our Channels Section */}

            <View style={styles.channelsSection}>
                <Text style={styles.channelsTitle}>Spanglish Network</Text>
                <View style={styles.channelIcons}>
                    <Image source={require('../../assets/ch-1.png')} style={styles.channelIcon} />
                    <Image source={require('../../assets/ch-2.png')} style={styles.channelIcon} />
                    <Image source={require('../../assets/ch-3.png')} style={styles.channelIcon} />
                </View>
                <View><Image source={require('../../assets/ch-4.png')} style={{ width: responsiveWidth(24), height: responsiveHeight(14), resizeMode: 'contain' }} /></View>
            </View>

            {/* About Spanglish */}

            <View style={styles.aboutSection}>
                <Text style={styles.aboutTopTitle}>About Spanglish SportsNetwork</Text>
                <Text style={styles.aboutTitle}>Unleashing the Power of Passion: Your Ultimate Destination for Sports Excellence</Text>
                <Text style={styles.aboutDes}>We’re a community united by a passion for sports. Join us on this thrilling journey as we celebrate the triumphs, dissect the strategies, and revel in the sheer joy of sports excellence. Whether you’re a seasoned enthusiast or a newcomer to the game, there’s a place for you in our vibrant sports family.{'\n'} </Text>
                <Text style={styles.aboutDes}>Get ready to dive into the world of sports like never before. The game is on, and the excitement is waiting for you!</Text>
                <View>
                </View>
            </View>

            {/* Latest Shows Section */}

            <View style={styles.latestShowsSection}>
                <Text style={styles.sectionTitle}>Our Latest Shows</Text>
                <TouchableOpacity style={styles.watchMoreButton} onPress={handleWatchMore}>
                    <Text style={styles.watchMoreText}>Clear Here</Text>
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
                            {videoContent.desc1?.substring(0, videoContent.desc1.length / 4)}... </Text> : <Text style={styles.showDescription}>
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
                                    {item.desc?.substring(0, item.desc.length / 2)}...
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
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: "#ffb700", borderWidth: 1, borderColor: "gray", width: responsiveWidth(65), paddingHorizontal: 11, borderRadius: 20, justifyContent: "center", paddingVertical: 5 }}>Enjoy Spanglish Sports world</Text>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: "#fff", marginVertical: responsiveHeight(3), fontWeight: 'bold' }}>Unleashing the Power of Passion: Your Ultimate Destination for Sports Excellence</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.7), color: "#fff" }}>Welcome to our dynamic sports hub, where the thrill of competition meets the artistry of athleticism! Whether you’re a die-hard fan, a casual observer, or a budding athlete, Spanglish Sports World is your go-to source for the latest updates, insightful analyses, and a celebration of the incredible world of sports.</Text>
                    <TouchableOpacity style={{
                        backgroundColor: '#FFD700', paddingVertical: responsiveHeight(1.5), borderRadius: responsiveWidth(10), width: responsiveWidth(42), marginVertical: responsiveHeight(4)
                    }} onPress={handleClick}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: responsiveFontSize(2), textAlign: "center" }}>Tune Fore More</Text>
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
                    Sport News
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
                    Why you must watch our content
                </Text>
                <Text
                    style={{
                        fontSize: responsiveFontSize(1.8),
                        color: '#333',
                        textAlign: 'center',
                        marginBottom: responsiveHeight(3),
                    }}
                >
                    We believe that sports are more than just games; they’re a shared experience that brings people together. Join the conversation with fellow fans in our vibrant community. Share your insights, engage in friendly debates, and revel in the camaraderie that makes being a sports fan truly special.
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
                        <Icon name="star" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Breaking News and Highlights
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Catch the pulse of the sporting world with our real-time updates on breaking news, scores, and highlights, Immerse yourself in the action of your favorite sports.
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
                            backgroundColor: '#FFD700',
                            borderRadius: 10,
                            padding: responsiveWidth(3),
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        <Icons name="snowflake" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        In-Depth Analyses and Features
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Our team of seasoned sports analysts goes beyond the scoreboard; provide you with thought-provoking analyses, player profiles, and more.
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
                            backgroundColor: '#FFD700',
                            borderRadius: 10,
                            padding: responsiveWidth(3),
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        <Icons name="basketball" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Training Tips and Fitness Insights
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Explore expert training tips, nutritional advice, and wellness insights to help you elevate your game and achieve peak performance.
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

            <Footer navigation={navigation} />
        </ScrollView>
    );
};

export default Sports;

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
