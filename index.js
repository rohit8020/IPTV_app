const express = require('express')
const app = express()

const channels=[
    {
    "tvg_id" : "3TamilTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/WfAU7pB.png",
    "vidsrc" : "https://6n3yogbnd9ok-hls-live.5centscdn.com/threetamil/d0dbe915091d400bd8ee7f27f0791303.sdp/index.m3u8"
    },
    {
    "tvg_id" : "7SMusic.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/P5EXpPy.jpg",
    "vidsrc" : "http://103.199.161.254/Content/7smusic/Live/Channel(7smusic)/index.m3u8"
    },
    {
    "tvg_id" : "9XJalwa.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/6h83JRO.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0nc/index.m3u8"
    },
    {
    "tvg_id" : "9XJhakaas.in",
    "tvg-country" : "IN",
    "tvg-language" : "Marathi",
    "tvg_logo" : "https://i.imgur.com/aZ0f85I.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0mx/index.m3u8"
    },
    {
    "tvg_id" : "9XM.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/fD7wLka.jpg",
    "vidsrc" : "https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8"
    },
    {
    "tvg_id" : "AndFlix.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "https://static.epg.best/in/AndFlix.in.png",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/andflixhd/index.m3u8"
    },
    {
    "tvg_id" : "AndPictures.in",
    "tvg-country" : "SAS",
    "tvg-language" : "",
    "tvg_logo" : "https://static.epg.best/in/AndPictures.in.png",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/andpicssd/playlist.m3u8"
    },
    {
    "tvg_id" : "AndPriveHD.in",
    "tvg-country" : "SAS",
    "tvg-language" : "",
    "tvg_logo" : "https://static.epg.best/in/AndPrive.in.png",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/andprivehd/index.m3u8"
    },
    {
    "tvg_id" : "ANEWSdonsTVBhangraFlava.in",
    "tvg-country" : "IN",
    "tvg-language" : "Punjabi",
    "tvg_logo" : "",
    "vidsrc" : "http://newsjatt.camdvr.org:1935/newsjatt/myStream/playlist.m3u8"
    },
    {
    "tvg_id" : "AathavanTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/IgwQ7o5.png",
    "vidsrc" : "http://45.77.66.224:1935/athavantv/live/playlist.m3u8"
    },
    {
    "tvg_id" : "ABPAnanda.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://tv.releasemyad.com/images/logo/20160108044853abp-ananada.jpg",
    "vidsrc" : "https://abp-i.akamaihd.net/hls/live/765530/abpananda/master.m3u8"
    },
    {
    "tvg_id" : "ABPAsmita.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://abp-i.akamaihd.net/hls/live/765532/abpasmita/master.m3u8"
    },
    {
    "tvg_id" : "ABPAsmita.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "http://abpasmita-lh.akamaihd.net/i/abpasmita_1@77821/master.m3u8"
    },
    {
    "tvg_id" : "ABPHindi.in",
    "tvg-country" : "IN",
    "tvg-language" : "English",
    "tvg_logo" : "https://static.abplive.in/wp-content/themes/abp-hindi/images/logo/hindiLogoD.png",
    "vidsrc" : "https://abp-i.akamaihd.net/hls/live/765529/abphindi/master.m3u8"
    },
    {
    "tvg_id" : "ABPHindi.in",
    "tvg-country" : "IN",
    "tvg-language" : "English",
    "tvg_logo" : "https://static.abplive.in/wp-content/themes/abp-hindi/images/logo/hindiLogoD.png",
    "vidsrc" : "http://hindiabp-lh.akamaihd.net/i/hindiabp1new_1@192103/master.m3u8"
    },
    {
    "tvg_id" : "ABPMajha.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/GteRQ6A.png",
    "vidsrc" : "https://abp-i.akamaihd.net/hls/live/765531/abpmajha/master.m3u8"
    },
    {
    "tvg_id" : "ACVJukebox.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/tYPn1lW.png",
    "vidsrc" : "http://cdn.asianetmobiletvplus.com/channels/acvjukebox_awannbgiynqynhufohawnvbmlgglfpuc/playlist.m3u8"
    },
    {
    "tvg_id" : "ACVNews.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/fP0g1np.jpg",
    "vidsrc" : "http://cdn.asianetmobiletvplus.com/channels/acvnews_3e85eb4c12bd2110d3f495676205d50a/playlist.m3u8"
    },
    {
    "tvg_id" : "ACVPlus.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/DjtPQeg.jpg",
    "vidsrc" : "http://cdn.asianetmobiletvplus.com/channels/acvplus_ef22daf97d61acb4bf52376c4105ad02/playlist.m3u8"
    },
    {
    "tvg_id" : "ACVUtsav.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/LLN585Y.png",
    "vidsrc" : "http://cdn.asianetmobiletvplus.com/channels/acvutsav_021c9292219a98f899a7b74f0f34baa7/playlist.m3u8"
    },
    {
    "tvg_id" : "ADNGold.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/UzPPjoH.jpg",
    "vidsrc" : "http://cdn.asianetmobiletvplus.com/channels/adngold_dibbcspwxywdcuwawgrvurjwitwbiksl/playlist.m3u8"
    },
    {
    "tvg_id" : "AkaramKidz.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/hAgaVPa.jpg",
    "vidsrc" : "http://akaram.zecast.net/akaram-live/akaramkidz/index.m3u8"
    },
    {
    "tvg_id" : "AmarUjala.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://streamcdn.amarujala.com/live/smil:stream1.smil/playlist.m3u8"
    },
    {
    "tvg_id" : "AmritaTV.in",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/xxWaGyn.jpg",
    "tvg-country" : "IN",
    "vidsrc" : "http://103.199.161.254/Content/amrita/Live/Channel(Amrita)/index.m3u8"
    },
    {
    "tvg_id" : "ApnaPunjab.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "http://cdn5.live247stream.com/apnapunjab/tv/playlist.m3u8"
    },
    {
    "tvg_id" : "ArtistAloud.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://live.hungama.com/linear/artist-aloud/playlist.m3u8"
    },
    {
    "tvg_id" : "AshrafiChannel.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "http://ashrafichannel.livebox.co.in/ashrafivhannelhls/live.m3u8"
    },
    {
    "tvg_id" : "AsianetMiddleEast.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/du9iZ0s.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0k6/index.m3u8"
    },
    {
    "tvg_id" : "AsianetNews.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/89LBgkl.png",
    "vidsrc" : "http://103.199.161.254/Content/asianetnews/Live/Channel(Asianetnews)/index.m3u8"
    },
    {
    "tvg_id" : "AsianetNews.in",
    "tvg-country" : "IN",
    "tvg-language" : "English",
    "tvg_logo" : "https://i.imgur.com/89LBgkl.png",
    "vidsrc" : "https://vidcdn.vidgyor.com/asianet-origin/liveabr/playlist.m3u8"
    },
    {
    "tvg_id" : "AsianetNewsBangla.in",
    "tvg-language" : "",
    "tvg_logo" : "https://static.asianetnews.com/v1/images/bangla_logo.png",
    "tvg-country" : "IN",
    "vidsrc" : "https://vidcdn.vidgyor.com/rplus-origin/rplusasianetlive/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "AsianetNewsKannada.in",
    "tvg-language" : "",
    "tvg_logo" : "https://static.asianetnews.com/v1/images/asianet_suvarna_news.png",
    "vidsrc" : "https://vidcdn.vidgyor.com/suvarna-origin/liveabr/playlist.m3u8"
    },
    {
    "tvg_id" : "AsianetNewsTamil.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://static.asianetnews.com/v1/images/tamil_logo.png",
    "vidsrc" : "https://vidcdn.vidgyor.com/ptm-origin/aslive/playlist.m3u8"
    },
    {
    "tvg_id" : "AssamTalks.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "http://vidnetcdn.vidgyor.com/assamtalks-origin/liveabr/playlist.m3u8"
    },
    {
    "tvg_id" : "AyushTV.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/PWzvp0B.png",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://95eryw39dwn4-hls-live.wmncdn.net/Ayushu/271ddf829afeece44d8732757fba1a66.sdp/index.m3u8"
    },
    {
    "tvg_id" : "B4UBhojpuri.in",
    "tvg-country" : "IN",
    "tvg-language" : "Bhojpuri",
    "tvg_logo" : "https://i.imgur.com/FizAx6D.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0nq/index.m3u8"
    },
    {
    "tvg_id" : "B4UHitz.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://14.199.164.20:4001/play/a0wh/index.m3u8"
    },
    {
    "tvg_id" : "B4UKadak.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/vwkjtRT.png",
    "vidsrc" : "http://103.199.160.85/Content/moviehouse/Live/Channel(MovieHouse)/index.m3u8"
    },
    {
    "tvg_id" : "B4UMovies.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/FiIewq2.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0wj/index.m3u8"
    },
    {
    "tvg_id" : "B4UMusic.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/LZxPgLh.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0wk/index.m3u8"
    },
    {
    "tvg_id" : "B4UPlus.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/SsooYqR.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0wi/index.m3u8"
    },
    {
    "tvg_id" : "BflixMovies.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/z3ALZQQ.jpg",
    "vidsrc" : "https://m-c036-j2apps.s.llnwi.net/hls/5045.BFlixMovies.in.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "BhojpuriCinema.in",
    "tvg-language" : "Bhojpuri",
    "tvg_logo" : "https://i.imgur.com/ABxIO7r.jpg",
    "vidsrc" : "http://14.199.164.20:4001/play/a0rj/index.m3u8"
    },
    {
    "tvg_id" : "BloombergTVAsia.us",
    "tvg-country" : "APAC",
    "tvg-language" : "English",
    "tvg_logo" : "http://cdn-profiles.tunein.com/s47135/images/logog.png"
    },
    {
    "tvg_id" : "BloombergTVAsiaLiveEvent.us",
    "tvg-country" : "APAC",
    "tvg-language" : "English",
    "tvg_logo" : "http://cdn-profiles.tunein.com/s47135/images/logog.png",
    "vidsrc" : "https://www.bloomberg.com/media-manifest/streams/asia-event.m3u8"
    },
    {
    "tvg_id" : "Bollywood.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://m-c09-j2apps.s.llnwi.net/hls/8001.Bollywood.in.m3u8"
    },
    {
    "tvg_id" : "BoogleBollywood.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "http://booglebollywood.com/wp-content/uploads/2018/02/boogle-bollywood-final_2-300x96.png",
    "vidsrc" : "http://live.agmediachandigarh.com/booglebollywood/774e3ea9f3fa9bcdac47f445b83b6653.sdp/index.m3u8"
    },
    {
    "tvg_id" : "BoxCinema.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/LGJlmtp.png",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://14.199.164.20:4001/play/a0su/index.m3u8"
    },
    {
    "tvg_id" : "CaptainTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/UXg6sac.png",
    "vidsrc" : "http://103.199.160.85/Content/captain/Live/Channel(Captain)/index.m3u8"
    },
    {
    "tvg_id" : "CartoonNetworkAsia.us",
    "tvg-country" : "ASIA",
    "tvg-language" : "English",
    "tvg_logo" : "",
    "vidsrc" : "http://198.16.106.62:8278/streams/d/Cn/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "CartoonNetworkIndia.us",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://www.lyngsat.com/logo/tv/cc/cartoon_network_global.png",
    "vidsrc" : "http://103.153.39.34:8000/play/a04k/index.m3u8"
    },
    {
    "tvg_id" : "CartoonNetworkIndia.us",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://www.lyngsat.com/logo/tv/cc/cartoon_network_global.png",
    "tvg-country" : "IN",
    "vidsrc" : "http://70.39.83.58:8278/cartoonnetworkhindikdin/playlist.m3u8"
    },
    {
    "tvg_id" : "Channel.in",
    "tvg-language" : "",
    "tvg_logo" : "https://static.epg.best/in/ChannelV.in.png",
    "vidsrc" : "https://livecdn.fptplay.net/foxlive/channelvhd_hls.smil/playlist.m3u8"
    },
    {
    "tvg_id" : "ChannelDivya.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "tvg-language" : "",
    "vidsrc" : "http://edge-ind.inapcdn.in:1935/berry1/latest.stream_aac/playlist.m3u8"
    },
    {
    "tvg_id" : "ChannelWin.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://cdn.smartstream.video/smartstream-us/channelwinlive/channelwinlive/playlist.m3u8"
    },
    {
    "tvg_id" : "ChannelY.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "http://cdn19.live247stream.com/channely/tv/playlist.m3u8"
    },
    {
    "tvg_id" : "CNBCAwaaz.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "tvg-country" : "IN",
    "vidsrc" : "https://cnbcawaaz-lh.akamaihd.net/i/cnbcawaaz_1@174872/index_5_av-p.m3u8"
    },
    {
    "tvg_id" : "CNBCTV18.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/3yumcV3.jpg",
    "tvg-language" : "English",
    "vidsrc" : "https://cnbctv18-lh.akamaihd.net/i/cnbctv18_1@174868/index_5_av-p.m3u8"
    },
    {
    "tvg_id" : "CNBCTV18.us",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/3yumcV3.jpg",
    "vidsrc" : "https://cnbctv18-lh.akamaihd.net/i/cnbctv18_1@174868/index_5_av-p.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "Colors.in",
    "tvg_logo" : "",
    "vidsrc" : "http://master.beeiptv.com:8081/colors/colorsbdtv/playlist.m3u8"
    },
    {
    "tvg_id" : "ColorsBangla.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/wdSDF2V.png",
    "vidsrc" : "https://yuppcatchup.akamaized.net/preview/etvbengali/master.m3u8"
    },
    {
    "tvg_id" : "Dabangg.in",
    "tvg-country" : "IN",
    "tvg-language" : "Bhojpuri",
    "tvg_logo" : "https://i.imgur.com/hpizqP6.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0nb/index.m3u8"
    },
    {
    "tvg_id" : "DarshanaTV.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://www.tvchannelpricelist.com/wp-content/uploads/channels-logo-300/darshana-tv-channel-logo-300x300.jpg",
    "tvg-language" : "Malayalam",
    "vidsrc" : "https://streaming37.worldbbtv.com/hls/darshana.m3u8"
    },
    {
    "tvg_id" : "DDMalayalam.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/9HfMVKs.jpg",
    "vidsrc" : "http://103.199.161.254/Content/ddmalayalam/Live/Channel(DDMalayalam)/index.m3u8"
    },
    {
    "tvg_id" : "DDNational.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/MohlE5B.png",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://103.199.161.254/Content/ddnational/Live/Channel(DDNational)/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "DDNational.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/MohlE5B.png",
    "vidsrc" : "https://m-c036-j2apps.s.llnwi.net/hls/0098.DDNational.in.m3u8"
    },
    {
    "tvg_id" : "DDPunjabi.in",
    "tvg-country" : "IN",
    "tvg-language" : "Punjabi",
    "tvg_logo" : "",
    "vidsrc" : "https://hls.media.nic.in/live/ddpunjabi1/index.m3u8"
    },
    {
    "tvg_id" : "DDSports.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/PEEELsL.png",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://103.199.161.254/Content/ddsports/Live/Channel(DDSPORTS)/index.m3u8"
    },
    {
    "tvg-language" : "",
    "tvg_id" : "DesiBeatsHD.in",
    "tvg_logo" : "",
    "tvg-country" : "IN",
    "vidsrc" : "http://cdn7.live247stream.com/desibeats/tv/playlist.m3u8"
    },
    {
    "tvg_id" : "DesiChannel.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://live.wmncdn.net/desichannel/7e2dd0aed46b70a5c77f4affdb702e4b.sdp/playlist.m3u8"
    },
    {
    "tvg_id" : "DesiPlus.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "http://cdn2.live247stream.com/desiplus/tv/playlist.m3u8"
    },
    {
    "tvg_id" : "Dhamaal.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://live.hungama.com/linear/dhamaal/playlist.m3u8"
    },
    {
    "tvg_id" : "Dhinchaak.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/T2c6PjU.jpg",
    "vidsrc" : "http://14.199.164.20:4001/play/a0o5/index.m3u8"
    },
    {
    "tvg_id" : "Dhinchaak2.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/AC4ze9o.jpg",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://14.199.164.20:4001/play/a0tm/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg-language" : "Kannada",
    "tvg_id" : "DighvijayNews24x7.in",
    "tvg_logo" : "https://i.imgur.com/wdE7gxU.png",
    "vidsrc" : "https://vidcdn.vidgyor.com/dighvijay-origin/liveabr/playlist.m3u8"
    },
    {
    "tvg_id" : "DilSe.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://live.hungama.com/linear/dil-se/playlist.m3u8"
    },
    {
    "tvg_id" : "DishaTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "http://xlbor3aadvaj-hls-live.wmncdn.net/disha/stream.stream/playlist.m3u8"
    },
    {
    "tvg_id" : "Dishum.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/k4j2QJX.png",
    "tvg-language" : "Bhojpuri",
    "vidsrc" : "https://m-c29-j2apps.s.llnwi.net/hls/5332.Dishum.in.m3u8"
    },
    {
    "tvg_id" : "Dishum.in",
    "tvg-country" : "IN",
    "tvg-language" : "Bhojpuri",
    "tvg_logo" : "https://i.imgur.com/k4j2QJX.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0pe/index.m3u8"
    },
    {
    "tvg-country" : "ASIA",
    "tvg_id" : "DisneyChannelAsia.us",
    "tvg_logo" : "",
    "tvg-language" : "",
    "vidsrc" : "http://198.16.106.62:8278/streams/d/Disneyjr/playlist.m3u8"
    },
    {
    "tvg_id" : "DocuBayTV.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://od.lk/s/MF8yMzAxMjQ1MzBf/Docubay_750x750.png",
    "tvg-language" : "",
    "vidsrc" : "https://docubayvh.s.llnwi.net/526a07ab-6ae7-4b6c-84a1-159791416484_1000004372_HLS/manifest.m3u8"
    },
    {
    "tvg_id" : "DreamTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/VdcG0i6.png",
    "vidsrc" : "https://cloudflare-cdn301.ottpro.in/dream_media/reedeem/playlist.m3u8"
    },
    {
    "tvg_id" : "DreamzTV.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/yXHmKtT.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://198.144.149.82:8080/NOTV/DREAMHD/index.m3u8?token=GTR"
    },
    {
    "tvg_id" : "DumTVKannada.in",
    "tvg-country" : "IN",
    "tvg-language" : "Kannada",
    "tvg_logo" : "https://i.imgur.com/e43ysdo.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0sq/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "E24.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/VBu7r0A.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0pc/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "EETTV.in",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/f7J37yv.png",
    "vidsrc" : "https://live.streamjo.com/eetlive/eettv.m3u8"
    },
    {
    "tvg_id" : "Enter10Bangla.in",
    "tvg-country" : "IN",
    "tvg-language" : "Bangla",
    "tvg_logo" : "https://i.imgur.com/fkOxQtS.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0j5/index.m3u8"
    },
    {
    "tvg_id" : "Enter10Rangeela.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/419CJW8.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0tp/index.m3u8"
    },
    {
    "tvg_id" : "EpicTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "English",
    "tvg_logo" : "https://i.imgur.com/XsRrnc5.png",
    "vidsrc" : "https://m-c03-j2apps.s.llnwi.net/hls/2639.Epic.in.m3u8"
    },
    {
    "tvg_id" : "ETNow.in",
    "tvg-country" : "IN",
    "tvg-language" : "English",
    "tvg_logo" : "https://i.imgur.com/rhkI95a.png",
    "vidsrc" : "https://etnowweblive-lh.akamaihd.net/i/ETN_1@348070/master.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "ETVAndhraPradesh.in",
    "tvg-language" : "",
    "tvg_logo" : "https://i.imgur.com/FfiMH8z.jpg",
    "vidsrc" : "https://query-streamlink.herokuapp.com/iptv-query?streaming-ip=https://www.youtube.com/channel/UCSbwShxZsBiqqWwtUidmS6g/live"
    },
    {
    "tvg_id" : "ETVTelangana.in",
    "tvg-language" : "",
    "tvg_logo" : "https://i.imgur.com/lQBs2Cs.jpg",
    "vidsrc" : "https://query-streamlink.herokuapp.com/iptv-query?streaming-ip=https://www.youtube.com/channel/UC6ickpgDIsltU_-8CbZaksQ/live"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "FaktMarathi.in",
    "tvg-language" : "Marathi",
    "tvg_logo" : "https://i.imgur.com/y0VS4QN.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0q8/index.m3u8"
    },
    {
    "tvg_id" : "FASTWAYNEWS.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "http://163.47.214.155:1935/fwnews/live/playlist.m3u8"
    },
    {
    "tvg_id" : "Filmeraa.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://a.jsrdn.com/broadcast/7ef91d3d7a/+0000/c.m3u8"
    },
    {
    "tvg_id" : "FlowersTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "http://www.flowerstv.in/wp-content/uploads/2017/12/Flowers-Logo-alpha-1.png",
    "vidsrc" : "http://103.199.161.254/Content/flowers/Live/Channel(Flowers)/index.m3u8"
    },
    {
    "tvg_id" : "FoodFood.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/J930pA1.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0qx/index.m3u8"
    },
    {
    "tvg_id" : "FoxMoviesAsia.us",
    "tvg-country" : "ASIA",
    "tvg_logo" : "https://i.imgur.com/vs51MBW.png",
    "tvg-language" : "Thai",
    "vidsrc" : "https://www.livedoomovie.com/02_FoxMoviesHD_720p/chunklist.m3u8"
    },
    {
    "tvg_id" : "GaundaPunjabTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/J74dCx6.png",
    "vidsrc" : "http://start.agmediachandigarh.com/gaundapunjab/tv/playlist.m3u8"
    },
    {
    "tvg_id" : "GDNSLudhiana.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "http://akalmultimedia.net:1935/gdnslive/gdns-live/chunklist.m3u8"
    },
    {
    "tvg_id" : "GlobalPunjab.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/6GcaSUS.jpg",
    "vidsrc" : "https://media.streambrothers.com:1936/8522/8522/playlist.m3u8"
    },
    {
    "tvg_id" : "GSTV.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/zCIK5Ze.png",
    "vidsrc" : "https://1-213-10546-44.b.cdn13.com/388656798579293628302251.m3u8"
    },
    {
    "tvg_id" : "GustoTV.us",
    "tvg-language" : "English",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/ygVGi3s.png",
    "vidsrc" : "https://gustotv-samsung-in.samsung.wvidsrc.com/manifest/playlist.m3u8"
    },
    {
    "tvg_id" : "HiDosti.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/C7XN3JP.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0rg/index.m3u8"
    },
    {
    "tvg_id" : "HiruTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Hiru_TV-Logo.png/220px-Hiru_TV-Logo.png",
    "vidsrc" : "http://cdncities.com/8012/8012/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "HulchulTV.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "http://cdn12.henico.net:8080/live/jbani/index.m3u8"
    },
    {
    "tvg_id" : "HungamaTV.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/ctjMaOW.png",
    "vidsrc" : "http://103.153.39.34:8000/play/a04l/index.m3u8"
    },
    {
    "tvg_id" : "HungamaTV.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/ctjMaOW.png",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://70.39.83.58:8278/hungamahindikdin/playlist.m3u8"
    },
    {
    "tvg_id" : "ILove.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/u191zfh.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0p3/index.m3u8"
    },
    {
    "tvg_id" : "Imayam.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/CzdM0pg.png",
    "vidsrc" : "https://idvd.multitvsolution.com/idvo/imayamtv.m3u8"
    },
    {
    "tvg_id" : "IndiaNews.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://m-c036-j2apps.s.llnwi.net/hls/0442.IndiaNews.in.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "IndiaTV.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/IYXrLPs.png",
    "vidsrc" : "https://live-indiatvnews.akamaized.net/indiatv-origin/ITV_1_1@199237/playlist.m3u8"
    },
    {
    "tvg_id" : "IsaiAruvi.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/radWIeb.png",
    "vidsrc" : "http://103.199.161.254/Content/isaiaruvi/Live/Channel(IsaiAruvi)/index.m3u8"
    },
    {
    "tvg_id" : "JaihindTV.in",
    "tvg-language" : "Malayalam",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/Jw0M6Kp.jpg",
    "vidsrc" : "http://103.199.161.254/Content/jaihind/Live/Channel(Jaihind)/index.m3u8"
    },
    {
    "tvg_id" : "JanTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/0qNJuVP.jpg",
    "vidsrc" : "http://jantvstream.in:1935/edge1/sc1jantv.stream_aac/playlist.m3u8"
    },
    {
    "tvg_id" : "JanamTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/LWUpmDm.png",
    "vidsrc" : "https://vidcdn.vidgyor.com/janamtv-origin/liveabr/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "JanamTV.in",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/LWUpmDm.png",
    "vidsrc" : "https://query-streamlink.herokuapp.com/iptv-query?streaming-ip=https://www.youtube.com/channel/UCNVkxRPqsBNejO6B9thG9Xw/live"
    },
    {
    "tvg_id" : "JanamTV.in",
    "tvg-language" : "Malayalam",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/LWUpmDm.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0ja/index.m3u8"
    },
    {
    "tvg_id" : "JanapriyamTV.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/rbn6YSb.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "https://jio.instream.ml/jio.php?c=Janapriyam_News&e=.m3u8&q=400"
    },
    {
    "tvg_id" : "JanataaTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "http://mydreams.livebox.co.in/Janataatvhls/Janataatv.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "JantaTV.in",
    "tvg_logo" : "",
    "vidsrc" : "https://live.wmncdn.net/jantatv/live.stream/index.m3u8"
    },
    {
    "tvg_id" : "JeevanTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://103.199.161.254/Content/jeevan/Live/Channel(Jeevan)/index.m3u8",
    "tvg_logo" : "https://i.imgur.com/PYs1W1Y.png"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "JhanjarMusic.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/gIYOu4i.jpg",
    "vidsrc" : "http://159.203.9.134/hls/jhanjar_music/jhanjar_music.m3u8"
    },
    {
    "tvg_id" : "JonackTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://cdn.smartstream.video/smartstream-us/jonakk/jonakk/playlist.m3u8"
    },
    {
    "tvg_id" : "KadakHits.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://live.hungama.com/linear/kadak-hits/playlist.m3u8"
    },
    {
    "tvg_id" : "KairaliArabia.in",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/dp6BvWJ.png",
    "vidsrc" : "https://idvd.multitvsolution.com/idvo/kairaliarabia_540p/index.m3u8"
    },
    {
    "tvg_id" : "KairaliNews.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/hXsVrIh.jpg",
    "vidsrc" : "http://103.199.161.254/Content/people/Live/Channel(People)/index.m3u8"
    },
    {
    "tvg_id" : "KairaliTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/8Di4h6t.png",
    "vidsrc" : "http://103.199.161.254/Content/kairali/Live/Channel(Kairali)/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "KairaliWe.in",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/Z626hKz.jpg",
    "vidsrc" : "http://103.199.161.254/Content/we/Live/Channel(We)/index.m3u8"
    },
    {
    "tvg_id" : "Kalaignar.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://upload.wikimedia.org/wikipedia/en/3/3a/Kalaignar_logo.jpg",
    "vidsrc" : "http://103.199.161.254/Content/kalaignartv/Live/Channel(KalaignarTV)/index.m3u8"
    },
    {
    "tvg_id" : "KalaignarMurasu.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/ZDXVWVQ.png",
    "vidsrc" : "http://103.199.160.85/Content/kalaignarmurasu/Live/Channel(KalaignarMurasu)/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "KalaignarSeithikal.in",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/qWOnWhQ.png",
    "vidsrc" : "http://103.199.160.85/Content/kalaignarseithikal/Live/Channel(KalaignarSeithikal)/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_id" : "KalaignarSirippoli.in",
    "tvg_logo" : "https://i.imgur.com/bqXRXaZ.png",
    "vidsrc" : "http://103.199.161.254/Content/kalaignarsirippoli/Live/Channel(Kalaignarsirippoli)/index.m3u8"
    },
    {
    "tvg_id" : "KalingaTV.in",
    "tvg_logo" : "",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "vidsrc" : "https://live.mycast.in/kalingatv/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8"
    },
    {
    "tvg_id" : "KanakNews.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "tvg-language" : "",
    "vidsrc" : "https://live.kanaknews.com:4443/live/stream/playlist.m3u8"
    },
    {
    "tvg_id" : "KannurOne.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/hytRL90.png",
    "vidsrc" : "https://bnwdplewrp3a-hls-live.wmncdn.net/kannur1/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8"
    },
    {
    "tvg_id" : "KannurVision.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/Zo6TFvK.png",
    "vidsrc" : "https://stream.ufworldind.in/live/kvision/playlist.m3u8"
    },
    {
    "tvg_id" : "KappaTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/MkfPo1V.jpg",
    "vidsrc" : "http://103.199.161.254/Content/kappa/Live/Channel(Kappa)/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "KasthuriTV.in",
    "tvg-language" : "Kannada",
    "tvg_logo" : "https://upload.wikimedia.org/wikipedia/en/7/78/Kasthuri-TV-logo.jpg",
    "vidsrc" : "http://103.199.161.254/Content/kasthuritv/Live/Channel(KasthuriTV)/index.m3u8"
    },
    {
    "tvg_id" : "KaumudyTV.in",
    "tvg_logo" : "http://kaumudy.tv/images/logo.jpg",
    "tvg-language" : "Malayalam",
    "tvg-country" : "IN",
    "vidsrc" : "https://live.wmncdn.net/kaumuditv1/live.stream/index.m3u8"
    },
    {
    "tvg_id" : "KCLTV.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/bkp9dIm.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://kcltv.livebox.co.in/kclhls/live.m3u8"
    },
    {
    "tvg_id" : "KCV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/9YD8u4H.png",
    "vidsrc" : "http://198.144.149.82:8080/NOTV/KCVTV/index.m3u8?token=GTR"
    },
    {
    "tvg_id" : "KCVMovies.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/NY94lnZ.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://198.144.149.82:8080/NOTV/KCVMOVIE/index.m3u8?token=GTR"
    },
    {
    "tvg_id" : "KeralaVision.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/0XF3nLw.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0ni/index.m3u8"
    },
    {
    "tvg_id" : "KeralaVisionNews.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://nettv4u.com/uploads/23-07-2020/kerala-vision.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "https://query-streamlink.herokuapp.com/iptv-query?streaming-ip=https://www.youtube.com/channel/UCtSeMwydGw6mDSZaIUaJ5bw/live"
    },
    {
    "tvg_id" : "KhabrainAbhiTak.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://vidcdn.vidgyor.com/kat-origin/liveabr/playlist.m3u8"
    },
    {
    "tvg_id" : "KITEVicters.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/RvZxSkx.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "https://932y4x26ljv8-hls-live.5centscdn.com/victers/tv.stream/playlist.m3u8"
    },
    {
    "tvg_id" : "LifePunjabi.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "http://live.agmediachandigarh.com/lifepunjabi/e27b5c8d89b83882ca3b018eeed14888.sdp/mono.m3u8"
    },
    {
    "tvg_id" : "LifeTV.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "http://59c3ec70cfde0.streamlock.net/channel_6/channel6/playlist.m3u8"
    },
    {
    "tvg_id" : "LokSabhaTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://nicls1-lh.akamaihd.net/i/lst_1@26969/master.m3u8"
    },
    {
    "tvg_id" : "MahaMovie.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://m-c036-j2apps.s.llnwi.net/hls/2820.MahaMovie.in.m3u8"
    },
    {
    "tvg_id" : "MahaMovie.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/hpShFDL.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0q7/index.m3u8"
    },
    {
    "tvg_id" : "MakkalTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/Sv4bLGX.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0l1/index.m3u8"
    },
    {
    "tvg_id" : "MalabarNews.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://cloud.logicwebs.in:1935/live/malabarnews/playlist.m3u8",
    "tvg_logo" : "https://i.imgur.com/yJWfyfM.png"
    },
    {
    "tvg_id" : "Malaimurasu.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/uFiHtQX.png",
    "vidsrc" : "https://malaimurasucdn.purplestream.com/malaimurasu/49992ade0624eda468a31e137996d044.sdp/playlist.m3u8"
    },
    {
    "tvg_id" : "MalppuramChannel.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/X2aZBiz.png",
    "vidsrc" : "http://103.78.18.137:1935/live/mlpchannel/chunklist.m3u8"
    },
    {
    "tvg_id" : "Mangalam.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/V5nQl9m.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://103.199.160.85/Content/mangalam/Live/Channel(Mangalam)/index.m3u8"
    },
    {
    "tvg_id" : "ManoramaNews.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/QWHbIYt.png",
    "vidsrc" : "http://103.199.161.254/Content/manoramanews/Live/Channel(ManoramaNews)/index.m3u8"
    },
    {
    "tvg_id" : "ManoranjanGrand.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/2BSvBGG.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0m2/index.m3u8"
    },
    {
    "tvg_id" : "ManoranjanMovies.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/F7uHOyA.png",
    "vidsrc" : "https://m-c036-j2apps.s.llnwi.net/hls/2172.ManoranjanMovies.in.m3u8"
    },
    {
    "tvg_id" : "MarutamTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/cFNw4Af.png",
    "vidsrc" : "http://mntv.livebox.co.in/mntvhls/mntv.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg-language" : "English",
    "tvg_id" : "MarvelHQ.us",
    "tvg_logo" : "",
    "vidsrc" : "https://feed.play.mv/live/10005200/niZoVrR2vD/master.m3u8"
    },
    {
    "tvg_id" : "Mastiii.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/iDDExsO.png",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://103.199.160.85/Content/masthi/Live/Channel(Masthi)/index.m3u8"
    },
    {
    "tvg_id" : "MathrubhumiNews.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/xlGIEnZ.png",
    "vidsrc" : "http://103.199.161.254/Content/mathrubhuminews/Live/Channel(Mathrubhuminews)/index.m3u8"
    },
    {
    "tvg_id" : "MavTVIndia.us",
    "tvg-country" : "IN",
    "tvg_logo" : "https://www.mavtv.com/assets/images/mavtv_logo.png",
    "vidsrc" : "http://mavtv-mavtvglobal-1-in.samsung.wvidsrc.com/manifest/playlist.m3u8",
    "tvg-language" : "English"
    },
    {
    "tvg_id" : "MazhavilManorama.in",
    "tvg-language" : "Malayalam",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/xCHQrH0.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0pa/index.m3u8"
    },
    {
    "tvg_id" : "MazhavilManorama.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/xCHQrH0.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://14.199.164.20:4001/play/a0kd/index.m3u8"
    },
    {
    "tvg_id" : "MazhavilManoramaHD.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://14.199.164.20:4001/play/a0p9/index.m3u8",
    "tvg_logo" : "https://i.imgur.com/xCHQrH0.png"
    },
    {
    "tvg_id" : "MediaOne.in",
    "tvg-language" : "Malayalam",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/tQvdxWo.jpg",
    "vidsrc" : "http://103.199.161.254/Content/mediaone/Live/Channel(MediaOne)/index.m3u8"
    },
    {
    "tvg_id" : "MH1Music.in",
    "tvg_logo" : "https://i.imgur.com/mCsYdYS.png",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://rtmp.smartstream.video:1935/mhonemusic/mhonemusic/playlist.m3u8"
    },
    {
    "tvg_id" : "MH1Prime.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://rtmp.smartstream.video:1935/mhonenews/mhonenews/playlist.m3u8",
    "tvg_logo" : "https://i.imgur.com/UdoA8f7.png"
    },
    {
    "tvg_id" : "MirrorNow.in",
    "tvg-country" : "IN",
    "tvg-language" : "English",
    "tvg_logo" : "https://yt3.ggpht.com/-XmvqPl571Ak/AAAAAAAAAAI/AAAAAAAAAAA/mMm0Tpd90kU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    "vidsrc" : "https://mbnowweb-lh.akamaihd.net/i/MRN_1@346545/master.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "MKSix.in",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/FAytBoW.png",
    "vidsrc" : "http://103.199.160.85/Content/mktv6/Live/Channel(MKTV6)/index.m3u8"
    },
    {
    "tvg_id" : "MKTunes.in",
    "tvg-language" : "Tamil",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/m8DPQd6.png",
    "vidsrc" : "http://103.199.160.85/Content/mktunes/Live/Channel(MKTunes)/index.m3u8"
    },
    {
    "tvg_id" : "MKTV.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/UxxbaR3.png",
    "vidsrc" : "http://103.199.160.85/Content/mktv/Live/Channel(MKTV)/index.m3u8",
    "tvg-language" : "Tamil"
    },
    {
    "tvg_id" : "MSignMedia.in",
    "tvg-language" : "Malayalam",
    "tvg-country" : "IN",
    "tvg_logo" : "http://expressott.in/uploads/tv_image/m-sign-media.PNG",
    "vidsrc" : "http://cloud.logicwebs.in:1935/msign/msignmedia/playlist.m3u8"
    },
    {
    "tvg_id" : "MtunesPlus.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/Rt7k6E3.png",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://14.199.164.20:4001/play/a0p2/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "MusicIndia.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/F7tPCwh.png",
    "vidsrc" : "http://103.199.160.85/Content/musicindia/Live/Channel(MusicIndia)/index.m3u8"
    },
    {
    "tvg-language" : "Hindi",
    "tvg_id" : "MusicIndia.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/F7tPCwh.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0mt/index.m3u8"
    },
    {
    "tvg_id" : "Naaptol.in",
    "tvg-language" : "Malayalam",
    "tvg-country" : "IN",
    "vidsrc" : "http://14.199.164.20:4001/play/a0n1/index.m3u8"
    },
    {
    "tvg_id" : "Namdhari.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://pbs.twimg.com/profile_images/897059156556783616/BUbUxAuW.jpg",
    "tvg-language" : "",
    "vidsrc" : "https://namdhari.tv/live/sbs1.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "NandighoshaTv.in",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://live.mycast.in/ngtv/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "NaxtraNews.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "http://wearelive.livebox.co.in/naxatratvhls/Naxatratv.m3u8"
    },
    {
    "tvg_id" : "Nazrana.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://live.hungama.com/linear/nazrana/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "NDTV24X7.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "http://jiotv.catchup.cdn.jio.com/dare_images/images/NDTV_24x7.png",
    "vidsrc" : "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "NDTVIndia.in",
    "tvg_logo" : "",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8"
    },
    {
    "tvg_id" : "NDTVProfit.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://ndtvprofitelemarchana.akamaized.net/hls/live/2003680-b/ndtvprofit/master.m3u8",
    "tvg_logo" : "http://bsmedia.business-standard.com/_media/bs/img/article/2017-06/01/full/1496330873-5363.jpg"
    },
    {
    "tvg-language" : "English",
    "tvg-country" : "IN",
    "tvg_logo" : "http://jiotv.catchup.cdn.jio.com/dare_images/images/NDTV_Profit.png",
    "tvg_id" : "NDTVProfit.com",
    "vidsrc" : "https://ndtvprofitelemarchana.akamaized.net/hls/live/2003680/ndtvprofit/master.m3u8"
    },
    {
    "tvg_id" : "NeeCinema.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/vYme2fs.png",
    "vidsrc" : "https://live.neestream.com/neestream_01/nee_cinema/playlist.m3u8"
    },
    {
    "tvg_id" : "NethraTV.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "vidsrc" : "https://dammikartmp.tulix.tv/slrc3/slrc3/playlist.m3u8",
    "tvg_logo" : "http://srilankanews.wpengine.netdna-cdn.com/wp-content/uploads/2015/09/nethra.png"
    },
    {
    "tvg_id" : "News7Tamil.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "vidsrc" : "http://14.199.164.20:4001/play/a0kp/index.m3u8",
    "tvg_logo" : "https://i.imgur.com/oBjgUTc.png"
    },
    {
    "tvg_id" : "News7Tamil.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/oBjgUTc.png",
    "vidsrc" : "https://query-streamlink.herokuapp.com/iptv-query?streaming-ip=https://www.youtube.com/channel/UC2f4w_ppqHplvjiNaoTAK9w/live"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "News18Assam.in",
    "tvg_logo" : "",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://news18assam-lh.akamaihd.net/i/n18assamne_1@526575/index_5_av-p.m3u8"
    },
    {
    "tvg_id" : "News18Assam.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://news18assam-lh.akamaihd.net/i/n18assamne_1@526575/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "News18Bangla.in",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://news18bangla-lh.akamaihd.net/i/n18bangla_1@2289/index_4_av-p.m3u8"
    },
    {
    "tvg_id" : "News18Bengali.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://news18bangla-lh.akamaihd.net/i/n18bangla_1@2289/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_id" : "News18Chhattisgarh.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://news18mp-lh.akamaihd.net/i/n18mpcg_1@175737/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_id" : "News18Gujarati.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://news18gujarati-lh.akamaihd.net/i/n18gujarat_1@370955/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_id" : "News18India.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://news18india-lh.akamaihd.net/i/news18india_1@174951/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_id" : "News18India.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://news18india-lh.akamaihd.net/i/news18india_1@174951/index_5_av-p.m3u8"
    },
    {
    "tvg_id" : "News18Jharkhand.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "tvg-language" : "",
    "vidsrc" : "https://news18bihar-lh.akamaihd.net/i/n18biharjh_1@175736/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "News18Kannada.in",
    "tvg-language" : "Kannada",
    "tvg_logo" : "https://static.kannada.news18.com/kannada/uploads/2020/03/Kannada1.png",
    "vidsrc" : "https://news18kannada-lh.akamaihd.net/i/n18kannada_1@372918/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_id" : "News18Lokmat.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://iptv-all.lanesh4d0w.codes/india/news18-lokmat.m3u8"
    },
    {
    "tvg_id" : "News18Malayalam.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/D9lMLmX.png",
    "vidsrc" : "https://news18kerala-lh.akamaihd.net/i/n18kerala_1@526583/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_id" : "News18Odia.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "vidsrc" : "https://etv-oriya.akamaized.net/i/n18odia_1@179753/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_logo" : "",
    "tvg_id" : "News18Punjab.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "vidsrc" : "https://news18haryana-lh.akamaihd.net/i/n18punjabhimhar_1@349009/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_logo" : "",
    "tvg_id" : "News18Rajasthan.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "vidsrc" : "https://news18rajasthan-lh.akamaihd.net/i/n18raj_1@175738/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "News18Tamil.in",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://news18tamil-lh.akamaihd.net/i/n18tamil_1@526595/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_id" : "News18Urdu.in",
    "tvg_logo" : "",
    "vidsrc" : "https://news18urdu-lh.akamaihd.net/i/n18urdu_1@373059/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_id" : "News18Uttarakhand.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://news18up-lh.akamaihd.net/i/n18upuk_1@175735/index_4_av-p.m3u8?rebase=on&sd=10"
    },
    {
    "tvg_id" : "News24.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://vidcdn.vidgyor.com/news24-origin/liveabr/news24-origin/live1/playlist.m3u8",
    "tvg-language" : "Hindi"
    },
    {
    "tvg_id" : "News24.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://vidcdn.vidgyor.com/news24-origin/liveabr/news24-origin/live2/playlist.m3u8"
    },
    {
    "tvg_id" : "OdishaTV.in",
    "tvg_logo" : "",
    "tvg-country" : "IN",
    "vidsrc" : "https://cdn.smartstream.video/smartstream-us/otvnewmbr/otvnewmbr.smil/playlist.m3u8"
    },
    {
    "tvg_id" : "OneTv.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/ssMOeaj.png",
    "vidsrc" : "http://137.59.86.218:1935/live/onetv/playlist.m3u8"
    },
    {
    "tvg-language" : "Bengali",
    "tvg_id" : "PeaceTVBangla.ae",
    "tvg-country" : "BD;IN",
    "tvg_logo" : "https://github.com/fawazahmed0/tiger/raw/master/peace/bangla.jpg",
    "vidsrc" : "http://199.223.252.162:8032/bangla_adaptive/index.m3u8"
    },
    {
    "tvg-language" : "Urdu",
    "tvg-country" : "PK;IN",
    "tvg_id" : "PeaceTVUrdu.ae",
    "tvg_logo" : "https://github.com/fawazahmed0/tiger/raw/master/peace/urdu.jpg",
    "vidsrc" : "http://199.223.252.162:8032/urdu_adaptive/index.m3u8"
    },
    {
    "tvg-language" : "Tamil",
    "tvg-country" : "IN",
    "vidsrc" : "http://103.199.160.85/Content/peppers/Live/Channel(Peppers)/index.m3u8",
    "tvg_id" : "PolimerNews.in",
    "tvg_logo" : "https://i.imgur.com/xgEQiso.png"
    },
    {
    "tvg_id" : "PolimerNews.in",
    "tvg-language" : "Tamil",
    "tvg-country" : "IN",
    "tvg_logo" : "https://india.mom-rsf.org/typo3temp/_processed_/d/c/csm_16526-1592_import_d84315ad22.png",
    "vidsrc" : "https://query-streamlink.herokuapp.com/iptv-query?streaming-ip=https://www.youtube.com/channel/UC8Z-VjXBtDJTvq6aqkIskPg/live"
    },
    {
    "tvg_id" : "PolimerNews.in",
    "tvg-language" : "Tamil",
    "tvg-country" : "IN",
    "tvg_logo" : "https://india.mom-rsf.org/typo3temp/_processed_/d/c/csm_16526-1592_import_d84315ad22.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0lg/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "PolimerTV.in",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/FeLT0mK.jpg",
    "vidsrc" : "http://cdn.asianetmobiletvplus.com/channels/polimertv_rpvpvdefkpxbafsouzockpitjldtogrr/chunks.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "PopPataka.in",
    "tvg_logo" : "",
    "tvg-language" : "",
    "vidsrc" : "https://live.hungama.com/linear/pop-pataka/playlist.m3u8"
    },
    {
    "tvg_id" : "PopularScience.in",
    "tvg-language" : "English",
    "tvg_logo" : "",
    "tvg-country" : "IN",
    "vidsrc" : "https://a.jsrdn.com/broadcast/447912f76b/+0000/c.m3u8"
    },
    {
    "tvg_id" : "PramayaNews7.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://live.mycast.in/encode/ee0c5a36ff5a7083ee044991974ad3ba.sdp/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_id" : "PratidinTime.in",
    "tvg_logo" : "",
    "vidsrc" : "https://rtmp.smartstream.video/pratidintime/pratidintime/playlist.m3u8"
    },
    {
    "tvg_id" : "Pravasi.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/DtXRfBj.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "https://5ee50688d7b5d.streamlock.net:444/live/pravasi/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "PrimeCanadaTV.in",
    "tvg_logo" : "",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://cdn27.live247stream.com/primecanada/247/primecanada/stream1/playlist.m3u8"
    },
    {
    "tvg_id" : "PublicMovies.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/GpAvaCx.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0ll/index.m3u8",
    "tvg-language" : "Kannada"
    },
    {
    "tvg_id" : "PublicMusic.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://upload.wikimedia.org/wikipedia/en/3/35/Public_Music_Kannada_Channel_Logo.jpg",
    "tvg-language" : "Kannada",
    "vidsrc" : "http://103.199.161.254/Content/publicmusic/Live/Channel(PublicMusic)/index.m3u8"
    },
    {
    "tvg_id" : "PublicTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Kannada",
    "tvg_logo" : "https://i.imgur.com/tmXFHhk.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0ld/index.m3u8"
    },
    {
    "tvg_id" : "PulariTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/v5urG30.png",
    "vidsrc" : "https://royalstarindia.co.in/pularitv_hls/pularitv.m3u8"
    },
    {
    "tvg_id" : "PUNJABTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "http://158.69.124.9:1935/5aabtv/5aabtv/playlist.m3u8"
    },
    {
    "tvg_id" : "PunjabiZindabad.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "tvg-country" : "IN",
    "vidsrc" : "http://stream.pztv.online/pztv/playlist.m3u8"
    },
    {
    "tvg_id" : "PuthuyugamTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/1q1LQQ9.png",
    "vidsrc" : "http://103.199.160.85/Content/puthuyugam/Live/Channel(Puthuyugam)/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "RPlusNews.in",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://cdn.smartstream.video/smartstream-us/rplus/rplus/playlist.m3u8"
    },
    {
    "tvg-language" : "Malayalam",
    "tvg_id" : "RealNewsKerala.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/EmBpOWM.png",
    "vidsrc" : "https://bk7l298nyx53-hls-live.5centscdn.com/realnews/e7dee419f91aa9e65939d3677fb9c4f5.sdp/playlist.m3u8"
    },
    {
    "tvg_id" : "RealTV.in",
    "tvg-language" : "Malayalam",
    "tvg-country" : "IN",
    "tvg_logo" : "http://expressott.in/uploads/tv_image/real-tv.jpg",
    "vidsrc" : "http://cloud.logicwebs.in:1935/realtv/realtv1/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "RelaxTV",
    "tvg_logo" : "http://expressott.in/uploads/tv_image/relax-tv.png",
    "tvg-language" : "Tamil",
    "vidsrc" : "http://198.144.149.82:8080/NOTV/RELAXTV/index.m3u8?token=GTR"
    },
    {
    "tvg_id" : "ReporterTV.in",
    "tvg_logo" : "https://i.imgur.com/a80vdrp.jpg",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://103.199.161.254/Content/reporter/Live/Channel(Reporter)/index.m3u8"
    },
    {
    "tvg_id" : "RepublicBharatin.in",
    "tvg_logo" : "https://i.imgur.com/BG1aZ6V.jpg",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://republic.pc.cdn.bitgravity.com/live/bharat_hls/master.m3u8"
    },
    {
    "tvg_id" : "Rosebowl.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/LBQSALM.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://cdn.asianetmobiletvplus.com/channels/rosebowl_7eb4dc1f3240c8eb776d41b95bd1d197/playlist.m3u8"
    },
    {
    "tvg_id" : "SadaTV.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "vidsrc" : "http://cdn12.henico.net:8080/live/sadatv/index.m3u8",
    "tvg_logo" : ""
    },
    {
    "tvg_id" : "SafariTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/LOepeP3.jpg",
    "vidsrc" : "https://j78dp346yq5r-hls-live.5centscdn.com/safari/live.stream/playlist.m3u8"
    },
    {
    "tvg_id" : "SanaPlus.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/cA7PpJG.jpg",
    "vidsrc" : "http://media.7starcloud.com:1935/live/sanatv2/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "SanaTV.in",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/D03gyp2.png",
    "vidsrc" : "http://hdserver.7starcloud.com:1935/sanatv/sanatv/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "Sanskaar.in",
    "tvg_logo" : "",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://sanskarlive.sanskargroup.in/sanskartvlive.m3u8"
    },
    {
    "tvg_id" : "SanthoraShortFlim.in",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/kKFfLMd.jpg",
    "tvg-country" : "IN",
    "vidsrc" : "http://rtmp.santhoratv.zecast.net/santhora/santhorashortfilm/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "SanthoraTV.in",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/LsacUVi.png",
    "vidsrc" : "http://rtmp.santhoratv.zecast.net/santhoratv/santhoratv/playlist.m3u8"
    },
    {
    "tvg_id" : "SardariTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/6Q844bs.jpg",
    "vidsrc" : "http://158.69.124.9:1935/sardaritv/sardaritv/playlist.m3u8"
    },
    {
    "tvg_id" : "Satsang.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://satsangtv.sanskargroup.in/satsangtvlive.m3u8"
    },
    {
    "tvg_id" : "ServeurTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "English",
    "tvg_logo" : "",
    "vidsrc" : "https://a.jsrdn.com/broadcast/060753d37e/+0000/c.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "ShekinahTV.in",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://14.199.164.20:4001/play/a0ok/index.m3u8"
    },
    {
    "tvg_id" : "ShemarooTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/UNNcOef.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0nh/index.m3u8"
    },
    {
    "tvg-language" : "Hindi",
    "tvg_id" : "ShirdiLive.in",
    "tvg_logo" : "",
    "vidsrc" : "https://cam.live-s.cdn.bitgravity.com/cdn-live/_definst_/cam/live/secure/saibaba/playlist.m3u8?e=0&h=2598445340a35f63eb211f81940d2525"
    },
    {
    "tvg_id" : "ShowBox.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/m9UFtTM.png",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://14.199.164.20:4001/play/a0o8/index.m3u8"
    },
    {
    "tvg_id" : "Shraddha.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "http://rtmp.smartstream.video:1935/mhoneshradha/mhoneshradha/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "Shubhsandesh.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/ibnqDAD.png",
    "vidsrc" : "https://6284rn2xr7xv-hls-live.wmncdn.net/shubhsandeshtv1/live123.stream/index.m3u8"
    },
    {
    "tvg_id" : "SonySabHD.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/jo0o7op.png",
    "tvg-language" : "Hindi",
    "vidsrc" : "http://indo51.gcdn.co/hindi-SONYSABHD/playlist.m3u8"
    },
    {
    "tvg_id" : "SonySix.in",
    "tvg-country" : "IN",
    "tvg-language" : "English",
    "tvg_logo" : "",
    "vidsrc" : "http://137.59.155.77:8088/hls/05sonysix.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "SriSankara.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://8noro432dm6g-hls-live.wmncdn.net/Sri/a5518065f47332dad6b509920c827474.sdp/index.m3u8"
    },
    {
    "tvg_id" : "StarCinema.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "http://c0.cdn.trinity-tv.net/stream/nh9u54a7sfnc2hwzxr2zwykwkqm43bgyyzsm68ybbbnjei8kytwcgs3zm5gnw5c6efa5gr3fadzqe686w8gj2eaehrj89wvujvqza3kez78dtknwbbmnqf79yygmqqg7e9pnc3i3bpywjkiqrwke94yf.m3u8"
    },
    {
    "tvg_id" : "StarFamily.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "http://c0.cdn.trinity-tv.net/stream/zfmjgma9zn46fa797ez9fgkw7msh9mj4tppspg23gey6mmx5fqiy7ky3jqx4uhgsfsrd8r76si8ykb2anw9442g4qkq5fzpdvwdqf5te24ixu9zrx3aesm9fzt59q5y2s8qwgbqhvf6d3z5bjy3qb2t4.m3u8"
    },
    {
    "tvg_id" : "StarMaa.in",
    "tvg-language" : "Telugu",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/oBXBjk6.png",
    "vidsrc" : "http://maatv-i.akamaihd.net/hls/live/569930/maatv/master_2000.m3u8"
    },
    {
    "tvg_id" : "SteelbirdMusic.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "https://i.imgur.com/5r4gCMh.jpg",
    "vidsrc" : "http://cdn25.live247stream.com/steelbirdmusic/tv/playlist.m3u8"
    },
    {
    "tvg-language" : "Telugu",
    "tvg_logo" : "https://i.imgur.com/DBbajAs.jpg",
    "tvg-country" : "IN",
    "vidsrc" : "https://query-streamlink.herokuapp.com/iptv-query?streaming-ip=https://www.youtube.com/channel/UCEoaVUxpFlmCxwRBy9yhb1Q/live"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "StudioOnePlus.in",
    "tvg-language" : "Telugu",
    "tvg_logo" : "https://i.imgur.com/DBbajAs.jpg",
    "vidsrc" : "http://14.199.164.20:4001/play/a0oh/index.m3u8"
    },
    {
    "tvg_id" : "StudioOnePlus.in",
    "tvg-country" : "IN",
    "tvg-language" : "Telugu",
    "tvg_logo" : "https://i.imgur.com/nACKF3x.jpg",
    "vidsrc" : "http://14.199.164.20:4001/play/a0sr/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_id" : "SunNews.in",
    "tvg_logo" : "https://i.imgur.com/mQWpBdv.png",
    "vidsrc" : "https://query-streamlink.herokuapp.com/iptv-query?streaming-ip=https://www.youtube.com/channel/UCYlh4lH762HvHt6mmiecyWQ/live"
    },
    {
    "tvg_id" : "SunTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://i.imgur.com/U30x7Y4.jpg",
    "vidsrc" : "http://uk4.zecast.com:1935/star-live/suntv.stream/index.m3u8"
    },
    {
    "tvg_id" : "SuryaMovies.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "",
    "vidsrc" : "https://catchup.yuppcdn.net/amazonv2/20/preview/suryamovies/master/master.m3u8"
    },
    {
    "tvg_id" : "SuryaMusic.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/jsC8FC7.png",
    "vidsrc" : "https://indo51.gcdn.co/MALYLAM-SuryaMusic/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "SuryaTV.in",
    "tvg_logo" : "https://i.imgur.com/ENrptYg.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "https://indo51.gcdn.co/MALYLAM-SuryaHD/index.m3u8"
    },
    {
    "tvg_id" : "SuryaTV.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/ENrptYg.png",
    "vidsrc" : "https://catchup.yuppcdn.net/amazonv2/20/preview/suryasd/master/master.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "SwarajExpress.in",
    "tvg_logo" : "",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://live.wmncdn.net/highnews/swaraj.stream/index.m3u8"
    },
    {
    "tvg_id" : "TamilVisionInternational.in",
    "tvg-language" : "Tamil",
    "tvg-country" : "IN",
    "tvg_logo" : "https://upload.wikimedia.org/wikipedia/en/d/d3/TVI_HD_logo.png",
    "vidsrc" : "http://live.tamilvision.tv:8081/TVI/HD/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_logo" : "https://upload.wikimedia.org/wikipedia/en/d/d3/TVI_HD_logo.png",
    "vidsrc" : "http://live.tamilvision.tv:8081/TVI/SD/playlist.m3u8",
    "tvg-language" : "Tamil"
    },
    {
    "tvg-country" : "IN",
    "tvg-language" : "Telugu",
    "tvg_id" : "TBOClassic.in",
    "tvg_logo" : "https://d229kpbsb5jevy.cloudfront.net/tv/150/150/bnw/TBO_CLASSIC_TV_white.png",
    "vidsrc" : "https://catchup.yuppcdn.net/amazonv2/20/preview/tboclassic/master/master.m3u8"
    },
    {
    "tvg_id" : "ThanthiTV.in",
    "tvg-language" : "Tamil",
    "tvg_logo" : "https://images-eu.ssl-images-amazon.com/images/I/71QprgRT4rL.png",
    "tvg-country" : "IN",
    "vidsrc" : "https://vidcdn.vidgyor.com/thanthi-origin/liveabr/playlist.m3u8"
    },
    {
    "tvg_id" : "ThePetCollectiveIndia.us",
    "tvg-language" : "English",
    "tvg_logo" : "https://i.imgur.com/Mk28uUy.png",
    "tvg-country" : "IN",
    "vidsrc" : "https://the-pet-collective-international-in.samsung.wvidsrc.com/manifest/playlist.m3u8"
    },
    {
    "tvg-country" : "SAS",
    "tvg_logo" : "http://console.celestialtiger.com/images/upload/1f6e441382a388940977fd9e165178c42fe0c193.png",
    "tvg-language" : "English",
    "tvg_id" : "Thrill.hk",
    "vidsrc" : "http://45.126.83.51/qwr9ew/s/s34/index.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_id" : "TimeVisionNews.in",
    "tvg_logo" : "https://i.imgur.com/YSQVbIm.png",
    "vidsrc" : "http://cloud.logicwebs.in:1935/timevision/timevision/playlist.m3u8"
    },
    {
    "tvg_id" : "TravelXP.in",
    "tvg-language" : "English",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/6V48LwT.jpg",
    "vidsrc" : "https://travelxp-travelxp-1-au.samsung.wvidsrc.com/manifest/playlist.m3u8"
    },
    {
    "tvg_logo" : "https://i.imgur.com/ClpXKNR.png",
    "tvg-language" : "Tamil",
    "tvg_id" : "Tunes6.in",
    "tvg-country" : "IN",
    "vidsrc" : "https://m-c18-j2apps.s.llnwi.net/hls/3731.Tunes6.in.m3u8"
    },
    {
    "tvg_id" : "TV9Kannada.in",
    "tvg-country" : "IN",
    "tvg-language" : "Kannada",
    "tvg_logo" : "https://d2jo35ozacw6sq.cloudfront.net/wp-content/themes/tv9kannada/images/Tv9-Kannada-57x57.png",
    "vidsrc" : "https://vidcdn.vidgyor.com/tv9kannada-origin/live/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_logo" : "https://www.lyngsat-logo.com/logo/tv/tt/tv-9-telugu-in.png",
    "tvg-language" : "Telugu",
    "tvg_id" : "TV9News.in",
    "vidsrc" : "https://vidcdn.vidgyor.com/tv9telugu-origin/live/tv9telugu-origin/live1/playlist.m3u8"
    },
    {
    "tvg_id" : "TwentyFourNews.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/eS2fVDh.png",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://103.199.160.85/Content/24news/Live/Channel(24news)/index.m3u8"
    },
    {
    "tvg_id" : "UBLHD.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/pt7gl1T.png",
    "vidsrc" : "https://cdn.logicwebs.in/hls/ublhdkey.m3u8"
    },
    {
    "tvg_id" : "UthradamMovies.in",
    "tvg-country" : "IN",
    "tvg-language" : "Malayalam",
    "vidsrc" : "http://185.105.4.245:1935/livesp/uthradam/playlist.m3u8",
    "tvg_logo" : "https://i.imgur.com/KdsS0g5.png"
    },
    {
    "tvg_id" : "UtsavGold.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/FYym7gH.png",
    "vidsrc" : "http://208.115.215.42/Utsav_Gold_HD/index.m3u8"
    },
    {
    "tvg_id" : "Vaanavil.in",
    "tvg-language" : "Tamil",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/etr1k08.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0nx/index.m3u8"
    },
    {
    "tvg_id" : "Velicham.in",
    "tvg-language" : "Tamil",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/YeR3mm9.png",
    "vidsrc" : "https://rtmp.smartstream.video/velichamtv/velichamtv/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "WeatherSpyIndia.us",
    "tvg-language" : "",
    "tvg_logo" : "https://i.imgur.com/SAZF1cq.jpg",
    "vidsrc" : "https://jukin-weatherspy-2-in.samsung.wvidsrc.com/manifest/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "WowCinemaOne.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/s690F67.png",
    "vidsrc" : "http://14.199.164.20:4001/play/a0n3/index.m3u8"
    },
    {
    "tvg_id" : "XploreChannel.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "http://cdn18.live247stream.com/ndachannel/tv/playlist.m3u8"
    },
    {
    "tvg_id" : "YuppThirai.in",
    "tvg-language" : "Tamil",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/6E8SbCf.png",
    "vidsrc" : "http://119.81.82.28/encoded/yuppthirai_800/playlist.m3u8"
    },
    {
    "tvg_id" : "ZLivingUSA.in",
    "tvg-country" : "US;IN",
    "tvg_logo" : "https://github.com/geonsey/Free2ViewTV/blob/master/images/logos/ZLiving_512x512.png?raw=true",
    "tvg-language" : "English",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zlivingusa_r/index.m3u8"
    },
    {
    "tvg_id" : "Zee5Originals.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zee5_originals/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "Zee5Romance.in",
    "tvg_logo" : "",
    "tvg-language" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zee5_romance/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "Zee24.in",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/kalak/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "ZeeAction.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/BvAXCNf.png",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/action/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeAnmolCinema.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zanmolcnm/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeBanglaCinema.in",
    "tvg-country" : "IN",
    "tvg-language" : "Bangla",
    "tvg_logo" : "https://i.imgur.com/QFqJax5.png",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zbanglacnm/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeBiharJharkhand.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/biharjharkh/index.m3u8"
    },
    {
    "tvg_id" : "ZeeBioskop.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/CdXieB6.png",
    "vidsrc" : "http://210.210.155.35/qwr9ew/s/s32/index.m3u8"
    },
    {
    "tvg_id" : "ZeeCafe.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://i.imgur.com/YIRC9m5.png",
    "tvg-language" : "English",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zeecafehd/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeCinemaMiddleEast.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "tvg-language" : "Hindi",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zeecinemame/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "ZeeCinemaUK.in",
    "tvg-language" : "Hindi",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/cinemauk/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeClassic.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/classic/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "ZeeKeralamHD.in",
    "tvg-language" : "Malayalam",
    "tvg_logo" : "https://i.imgur.com/mM0KQj7.png",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zkeralamhd/index.m3u8"
    },
    {
    "tvg_id" : "ZeeMarathiUSA.in",
    "tvg-language" : "Marathi",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/marathiusa/playlist.m3u8"
    },
    {
    "tvg-language" : "Spanish",
    "tvg_id" : "ZeeMundo.in",
    "tvg-country" : "IN",
    "tvg_logo" : "https://zeemundo.com/wp-content/uploads/2018/06/logo-120.png",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/mundohd/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeMusic.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/magic/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeNewsMPCG.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/newsmpcg/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeePunjabi.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "tvg-language" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/punjabi/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zinguk/playlist.m3u8"
    },
    {
    "tvg-language" : "",
    "tvg_id" : "ZeeSmileUSA.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/smileusa/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeTalkies.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/ztalkieshd/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeTV.in",
    "tvg-language" : "Hindi",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/ZEETV/ZEETV.isml/index.m3u8"
    },
    {
    "tvg_id" : "ZeeTVAPAC.in",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "tvg-language" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/apacsea/playlist.m3u8"
    },
    {
    "tvg-country" : "IN",
    "tvg_id" : "ZeeTVCanada.in",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/canadahd/playlist.m3u8"
    },
    {
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_id" : "ZeeTVMiddleEast.in",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/ztvme/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeTVRussia.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/russia/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeTVUSA.in",
    "tvg-language" : "",
    "tvg-country" : "IN",
    "tvg_logo" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/ztvsdusa/playlist.m3u8"
    },
    {
    "tvg_id" : "ZeeWorld.in",
    "tvg-country" : "IN",
    "tvg-language" : "",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/world/playlist.m3u8",
    "tvg_logo" : ""
    },
    {
    "tvg_id" : "Zing.in",
    "tvg-country" : "IN",
    "tvg-language" : "Hindi",
    "tvg_logo" : "https://i.imgur.com/SUWblss.png",
    "vidsrc" : "https://f8e7y4c6.ssl.hwcdn.net/zing/playlist.m3u8"
    }]
    
    
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index", {channels: channels})
})
app.get('/:id',(req,res)=>{
    let index=req.params.id
    let data
    try{
      data=channels[index]
    }catch{
      console.log("error!")
    }finally{
      if(data){
        res.render("videoplayer",{data: data["vidsrc"]})
      }
    } 
})

app.listen(process.env.PORT,process.env.IP, () => {
  console.log(`IPTV-SERVER STARTED!`)
})