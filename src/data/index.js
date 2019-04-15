import mtv from "./categoryImages/mtv.jpg";
import paramount from "./categoryImages/paramount.jpg";
import reel from "./categoryImages/reel.jpg";
import _private from "./categoryImages/private.jpg";

export const data = [
    {
        key: "brand",
        img: mtv,
        headline: "BRAND TRAILERS",
        subtitle: "Viacom, MTV, Comedy Central",
        videos: [
            {
                videoId: "298737242",
                title: "MTV brand",
                description: "Brand trailer for mtv",
                company: "PIXEL JUNGLE",
            },
            {
                videoId: "298738020",
                title: "MTV Yo! MTV Raps",
                description: "Brand trailer for mtv / yo! mtv raps",
                company: "PIXEL JUNGLE",
            },
            {
                videoId: "298173207",
                title: "COMEDY CENTRAL brand",
                description: "Brand trailer for comedy central",
                company: "MONKEY Pictures",
            },
            {
                videoId: "298174468",
                title: "COMEDY CENTRAL intro",
                description: "Brand trailer for comedy central / cc intro",
                company: "MONKEY Pictures",
            },
        ],
    },
    {
        key: "tv",
        img: paramount,
        headline: "TV PROMOTION",
        subtitle: "paramount, Nick, SUPER RTL",
        videos: [
            {
                videoId: "157603204",
                title: "PARAMOUNT channel",
                description: "Trailer for paramount channel poland",
                company: "MONKEY Pictures",
            },
            {
                videoId: "157904332",
                title: "NICKNIGHT skins",
                description:
                    "Trailer for the series skins on nicknight germany",
                company: "MONKEY Pictures",
            },
            {
                videoId: "322428240",
                title: "NICK sofakino",
                description: "sofakino trailer for nick germany",
                company: "PIXEL JUNGLE",
            },
            {
                videoId: "322429346",
                title: "SUPER RTL trophy wife",
                description: "Trailer for the series trophy wife for super rtl",
                company: "MONKEY Pictures",
            },
        ],
    },
    {
        key: "other",
        img: reel,
        headline: "OTHER",
        subtitle: "SPIEGEL TV, MONKEY Pictures",
        videos: [
            {
                videoId: "322430285",
                title: "MONKEY Pictures reel",
                description: "Highlight reel for monkey pictures",
                company: "MONKEY Pictures",
            },
            {
                videoId: "157605820",
                title: "SPIEGEL TV geschichte",
                description:
                    "Brand trailer for spiegel tv geschichte / spiegel tv pitch",
                company: "MONKEY Pictures",
            },
            {
                videoId: "325508757",
                title: "STORK CLUB Whisky",
                description: "image trailer for STORK CLUB Whisky",
                company: "MONKEY PICTURES",
            },
        ],
    },
    {
        key: "private",
        img: _private,
        headline: "PRIVATE PARTS",
        videos: [
            {
                videoId: "160899912",
                title: "stuff / drawn",
                description: "animation mashup",
            },
            {
                videoId: "123742357",
                title: "stuff / mashup",
                description: "trailer cut of 44 different movies",
            },
        ],
    },
];

