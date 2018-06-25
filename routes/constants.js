/**
 * Created by WarMachine on 23/06/18.
 */

const responseFlags = {
	'OK' : 200,
	'UNAUTHORIZED' : 401,
	'FORBIDDEN' : 403,
	'NOT_FOUND' : 404,
	'INTERNAL_SERVER_ERROR' : 500
};

const responseMessages = {
	'OK' : 'Action Complete',
	'INTERNAL_SERVER_ERROR' : 'There was some error on server side. Please try again later.',
	'UNAUTHORIZED' : 'Session Expired. Please login and try again.',
	'FORBIDDEN' : 'You are not authorized to view this resource',
	'NOT_FOUND' : 'No data found'
};

// const lastFMUrls = {
// 	USER_AUTH : '',
// 	BASE_URL : '',
// 	USER_INFO : ''
// };




const mockRecenTracks = {
	"recenttracks": {
		"track": [
			{
				"artist": {
					"#text": "曾之喬",
					"mbid": ""
				},
				"name": "泡沫美人魚-《泡沫之夏》電視劇插曲",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "泡沫美人魚 《泡沫之夏》電視劇插曲",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E6%9B%BE%E4%B9%8B%E5%96%AC/_/%E6%B3%A1%E6%B2%AB%E7%BE%8E%E4%BA%BA%E9%AD%9A-%E3%80%8A%E6%B3%A1%E6%B2%AB%E4%B9%8B%E5%A4%8F%E3%80%8B%E9%9B%BB%E8%A6%96%E5%8A%87%E6%8F%92%E6%9B%B2",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/b764e3aae69161a9c009cf3a8f3b97be.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/b764e3aae69161a9c009cf3a8f3b97be.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/b764e3aae69161a9c009cf3a8f3b97be.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b764e3aae69161a9c009cf3a8f3b97be.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529914137",
					"#text": "25 Jun 2018, 08:08"
				}
			},
			{
				"artist": {
					"#text": "蒋雪儿",
					"mbid": ""
				},
				"name": "爱河",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "洒脱",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E8%92%8B%E9%9B%AA%E5%84%BF/_/%E7%88%B1%E6%B2%B3",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529913844",
					"#text": "25 Jun 2018, 08:04"
				}
			},
			{
				"artist": {
					"#text": "公館遊樂園",
					"mbid": ""
				},
				"name": "公館遊樂園(2017年台大畢業歌)",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "公館遊樂園",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E5%85%AC%E9%A4%A8%E9%81%8A%E6%A8%82%E5%9C%92/_/%E5%85%AC%E9%A4%A8%E9%81%8A%E6%A8%82%E5%9C%92(2017%E5%B9%B4%E5%8F%B0%E5%A4%A7%E7%95%A2%E6%A5%AD%E6%AD%8C)",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529913604",
					"#text": "25 Jun 2018, 08:00"
				}
			},
			{
				"artist": {
					"#text": "Moon Chew",
					"mbid": ""
				},
				"name": "我的夢",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "我的夢",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Moon+Chew/_/%E6%88%91%E7%9A%84%E5%A4%A2",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529913405",
					"#text": "25 Jun 2018, 07:56"
				}
			},
			{
				"artist": {
					"#text": "王心凌",
					"mbid": "ebf7170c-82b9-49bb-b392-4777c99b231c"
				},
				"name": "月光 OT:亜麻色の髪の乙女",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "愛你",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E7%8E%8B%E5%BF%83%E5%87%8C/_/%E6%9C%88%E5%85%89+OT:%E4%BA%9C%E9%BA%BB%E8%89%B2%E3%81%AE%E9%AB%AA%E3%81%AE%E4%B9%99%E5%A5%B3",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/4a30ab553d934c658331b019283a4e2c.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/4a30ab553d934c658331b019283a4e2c.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/4a30ab553d934c658331b019283a4e2c.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/4a30ab553d934c658331b019283a4e2c.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529913039",
					"#text": "25 Jun 2018, 07:50"
				}
			},
			{
				"artist": {
					"#text": "Prudence Liew",
					"mbid": ""
				},
				"name": "I'll Have To Say I Love You In A Song",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Reincarnated Love",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Prudence+Liew/_/I%27ll+Have+To+Say+I+Love+You+In+A+Song",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529912854",
					"#text": "25 Jun 2018, 07:47"
				}
			},
			{
				"artist": {
					"#text": "4 in Love",
					"mbid": "e2d03621-d9de-4dc1-8cbe-5b9a7290e00b"
				},
				"name": "一千零一個願望",
				"streamable": "0",
				"mbid": "1c7831fc-7171-4fc6-9577-f968e9d627d7",
				"album": {
					"#text": "No Fears",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/4+in+Love/_/%E4%B8%80%E5%8D%83%E9%9B%B6%E4%B8%80%E5%80%8B%E9%A1%98%E6%9C%9B",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/681027b567d6851e84925cac2d638586.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/681027b567d6851e84925cac2d638586.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/681027b567d6851e84925cac2d638586.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/681027b567d6851e84925cac2d638586.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529912565",
					"#text": "25 Jun 2018, 07:42"
				}
			},
			{
				"artist": {
					"#text": "張簡君偉",
					"mbid": ""
				},
				"name": "雨後一起看彩虹",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E5%BC%B5%E7%B0%A1%E5%90%9B%E5%81%89/_/%E9%9B%A8%E5%BE%8C%E4%B8%80%E8%B5%B7%E7%9C%8B%E5%BD%A9%E8%99%B9",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529912421",
					"#text": "25 Jun 2018, 07:40"
				}
			},
			{
				"artist": {
					"#text": "JiA",
					"mbid": ""
				},
				"name": "WEAPON - Chinese ver",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Weapon",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/JiA/_/WEAPON+-+Chinese+ver",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529912144",
					"#text": "25 Jun 2018, 07:35"
				}
			},
			{
				"artist": {
					"#text": "周深",
					"mbid": ""
				},
				"name": "臨安初雨",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "臨安初雨",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E5%91%A8%E6%B7%B1/_/%E8%87%A8%E5%AE%89%E5%88%9D%E9%9B%A8",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/a695b1f841cc49d4544a765b88cbacc4.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/a695b1f841cc49d4544a765b88cbacc4.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/a695b1f841cc49d4544a765b88cbacc4.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a695b1f841cc49d4544a765b88cbacc4.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529911960",
					"#text": "25 Jun 2018, 07:32"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "Belisarius becomes commander-in-chief",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro 2015 (violin edition)",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/Belisarius+becomes+commander-in-chief",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/db4a656ba170533ac6e17d8010763310.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/db4a656ba170533ac6e17d8010763310.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/db4a656ba170533ac6e17d8010763310.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/db4a656ba170533ac6e17d8010763310.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529911557",
					"#text": "25 Jun 2018, 07:25"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "Narses in the Apennines",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro 2015 (violin edition)",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/Narses+in+the+Apennines",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/db4a656ba170533ac6e17d8010763310.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/db4a656ba170533ac6e17d8010763310.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/db4a656ba170533ac6e17d8010763310.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/db4a656ba170533ac6e17d8010763310.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529911203",
					"#text": "25 Jun 2018, 07:20"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "mirai",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro 2015 (violin edition)",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/mirai",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/db4a656ba170533ac6e17d8010763310.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/db4a656ba170533ac6e17d8010763310.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/db4a656ba170533ac6e17d8010763310.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/db4a656ba170533ac6e17d8010763310.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529910914",
					"#text": "25 Jun 2018, 07:15"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "the deep voice is reminding",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro (violin meets piano)",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/the+deep+voice+is+reminding",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/18b4957701de4c03ccfda773af7d675d.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529910681",
					"#text": "25 Jun 2018, 07:11"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "between 3 and 4",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro (piano edition)",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/between+3+and+4",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/e00c7ec8f6c14828c8bfcafa282a5c10.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/e00c7ec8f6c14828c8bfcafa282a5c10.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/e00c7ec8f6c14828c8bfcafa282a5c10.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e00c7ec8f6c14828c8bfcafa282a5c10.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529910495",
					"#text": "25 Jun 2018, 07:08"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "Erkan Yilmaz eats carrot",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Human sounds",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/Erkan+Yilmaz+eats+carrot",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529910295",
					"#text": "25 Jun 2018, 07:04"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "Erkan Yilmaz eats apple",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Human sounds",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/Erkan+Yilmaz+eats+apple",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529910170",
					"#text": "25 Jun 2018, 07:02"
				}
			},
			{
				"artist": {
					"#text": "LaLa Hsu",
					"mbid": ""
				},
				"name": "不要再孤單(電影《微微一笑很傾城》主題曲)",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "不要再孤單(電影《微微一笑很傾城》主題曲)",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/LaLa+Hsu/_/%E4%B8%8D%E8%A6%81%E5%86%8D%E5%AD%A4%E5%96%AE(%E9%9B%BB%E5%BD%B1%E3%80%8A%E5%BE%AE%E5%BE%AE%E4%B8%80%E7%AC%91%E5%BE%88%E5%82%BE%E5%9F%8E%E3%80%8B%E4%B8%BB%E9%A1%8C%E6%9B%B2)",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529909992",
					"#text": "25 Jun 2018, 06:59"
				}
			},
			{
				"artist": {
					"#text": "LaLa Hsu",
					"mbid": ""
				},
				"name": "失落沙洲",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/LaLa+Hsu/_/%E5%A4%B1%E8%90%BD%E6%B2%99%E6%B4%B2",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529909555",
					"#text": "25 Jun 2018, 06:52"
				}
			},
			{
				"artist": {
					"#text": "徐若瑄",
					"mbid": "c2ca9154-58a1-49e7-a277-4eb986a0f42f"
				},
				"name": "美人魚",
				"streamable": "0",
				"mbid": "65e51a9c-0d37-4ff8-b434-37dbb0b30539",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E5%BE%90%E8%8B%A5%E7%91%84/_/%E7%BE%8E%E4%BA%BA%E9%AD%9A",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529909309",
					"#text": "25 Jun 2018, 06:48"
				}
			},
			{
				"artist": {
					"#text": "田馥甄",
					"mbid": "0827063c-b93d-48bd-abc4-04ce2fbc45d7"
				},
				"name": "還是要幸福",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E7%94%B0%E9%A6%A5%E7%94%84/_/%E9%82%84%E6%98%AF%E8%A6%81%E5%B9%B8%E7%A6%8F",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529909019",
					"#text": "25 Jun 2018, 06:43"
				}
			},
			{
				"artist": {
					"#text": "藍又時",
					"mbid": ""
				},
				"name": "倫敦的愛情",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E8%97%8D%E5%8F%88%E6%99%82/_/%E5%80%AB%E6%95%A6%E7%9A%84%E6%84%9B%E6%83%85",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529908692",
					"#text": "25 Jun 2018, 06:38"
				}
			},
			{
				"artist": {
					"#text": "A-Lin",
					"mbid": ""
				},
				"name": "給我一個理由忘記",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/A-Lin/_/%E7%B5%A6%E6%88%91%E4%B8%80%E5%80%8B%E7%90%86%E7%94%B1%E5%BF%98%E8%A8%98",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529908395",
					"#text": "25 Jun 2018, 06:33"
				}
			},
			{
				"artist": {
					"#text": "蕭亞軒",
					"mbid": "753e60ac-cfec-47e7-b1a6-d116cfd31050"
				},
				"name": "錯的人",
				"streamable": "0",
				"mbid": "fb58772d-1c56-4d25-a4b5-71d4f4a2a850",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E8%95%AD%E4%BA%9E%E8%BB%92/_/%E9%8C%AF%E7%9A%84%E4%BA%BA",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529908072",
					"#text": "25 Jun 2018, 06:27"
				}
			},
			{
				"artist": {
					"#text": "曾沛慈",
					"mbid": "a72e49f5-27bf-47a3-8946-61c12fb28941"
				},
				"name": "愛情怎麼喊停",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E6%9B%BE%E6%B2%9B%E6%85%88/_/%E6%84%9B%E6%83%85%E6%80%8E%E9%BA%BC%E5%96%8A%E5%81%9C",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529906145",
					"#text": "25 Jun 2018, 05:55"
				}
			},
			{
				"artist": {
					"#text": "Jia Jia",
					"mbid": ""
				},
				"name": "家家酒",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Jia+Jia/_/%E5%AE%B6%E5%AE%B6%E9%85%92",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529905849",
					"#text": "25 Jun 2018, 05:50"
				}
			},
			{
				"artist": {
					"#text": "柴田淳",
					"mbid": "b56d532a-16d7-4e4c-aab4-486941ffc959"
				},
				"name": "それでも来た道",
				"streamable": "0",
				"mbid": "8b00f31a-9cdd-49c8-a715-7796710938f0",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E6%9F%B4%E7%94%B0%E6%B7%B3/_/%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%82%E6%9D%A5%E3%81%9F%E9%81%93",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529905656",
					"#text": "25 Jun 2018, 05:47"
				}
			},
			{
				"artist": {
					"#text": "Farid Farjad",
					"mbid": "a5192436-eea7-44a8-af11-4c990c9294e4"
				},
				"name": "Golha",
				"streamable": "0",
				"mbid": "c128f040-04f2-407b-9026-0f31c5a85721",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Farid+Farjad/_/Golha",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529905370",
					"#text": "25 Jun 2018, 05:42"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "zehn",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/zehn",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529905144",
					"#text": "25 Jun 2018, 05:39"
				}
			},
			{
				"artist": {
					"#text": "Françoise Hardy",
					"mbid": "d2a79d20-1304-47fd-a998-b4fe1ec78373"
				},
				"name": "Tous les garçons et les filles",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Fran%C3%A7oise+Hardy/_/Tous+les+gar%C3%A7ons+et+les+filles",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529904962",
					"#text": "25 Jun 2018, 05:36"
				}
			},
			{
				"artist": {
					"#text": "板野友美",
					"mbid": "275c0020-3de9-4655-b76c-8cb2fe92c0b6"
				},
				"name": "Just as I am",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E6%9D%BF%E9%87%8E%E5%8F%8B%E7%BE%8E/_/Just+as+I+am",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529904676",
					"#text": "25 Jun 2018, 05:31"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "silence in between",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/silence+in+between",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529904314",
					"#text": "25 Jun 2018, 05:25"
				}
			},
			{
				"artist": {
					"#text": "丁噹",
					"mbid": "8db31844-942a-491e-bbfe-bee68cf9a426"
				},
				"name": "猜不透",
				"streamable": "0",
				"mbid": "a3522a76-a3e0-4c91-98e2-c7737e23f605",
				"album": {
					"#text": "",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E4%B8%81%E5%99%B9/_/%E7%8C%9C%E4%B8%8D%E9%80%8F",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529903919",
					"#text": "25 Jun 2018, 05:18"
				}
			},
			{
				"artist": {
					"#text": "楊丞琳",
					"mbid": "aea213c9-5ba7-4160-a80e-84d9eed4a833"
				},
				"name": "我們都傻",
				"streamable": "0",
				"mbid": "d158f15b-450c-4b0e-9be2-e443718be76a",
				"album": {
					"#text": "仰望",
					"mbid": "eada9245-4898-4ac6-ad93-8c7b38f49907"
				},
				"url": "https://www.last.fm/music/%E6%A5%8A%E4%B8%9E%E7%90%B3/_/%E6%88%91%E5%80%91%E9%83%BD%E5%82%BB",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/ac51c98e65234c9c819a06cf931d3003.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/ac51c98e65234c9c819a06cf931d3003.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/ac51c98e65234c9c819a06cf931d3003.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/ac51c98e65234c9c819a06cf931d3003.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529893063",
					"#text": "25 Jun 2018, 02:17"
				}
			},
			{
				"artist": {
					"#text": "林憶蓮",
					"mbid": "280697d2-164d-4477-971d-06b91e57c6a5"
				},
				"name": "至少還有你",
				"streamable": "0",
				"mbid": "590ee582-3786-4fe4-a21e-79a800d75612",
				"album": {
					"#text": "林憶蓮",
					"mbid": "9b2d553a-e6db-359c-999a-cc7e84dd5dc1"
				},
				"url": "https://www.last.fm/music/%E6%9E%97%E6%86%B6%E8%93%AE/_/%E8%87%B3%E5%B0%91%E9%82%84%E6%9C%89%E4%BD%A0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/807d0533bca6e7bbf3c76a9eb81a0cbf.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/807d0533bca6e7bbf3c76a9eb81a0cbf.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/807d0533bca6e7bbf3c76a9eb81a0cbf.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/807d0533bca6e7bbf3c76a9eb81a0cbf.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529871617",
					"#text": "24 Jun 2018, 20:20"
				}
			},
			{
				"artist": {
					"#text": "溫嵐",
					"mbid": "c75ab3cf-cd43-4c52-9a4c-913ea2b78420"
				},
				"name": "傻瓜",
				"streamable": "0",
				"mbid": "ea635c31-63f8-4197-9258-2f36ca611b43",
				"album": {
					"#text": "熱浪",
					"mbid": "788bd8de-ec89-4d33-b899-0b9358d894aa"
				},
				"url": "https://www.last.fm/music/%E6%BA%AB%E5%B5%90/_/%E5%82%BB%E7%93%9C",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/853c66371a1fc95a25cc572b7b348633.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/853c66371a1fc95a25cc572b7b348633.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/853c66371a1fc95a25cc572b7b348633.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/853c66371a1fc95a25cc572b7b348633.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529871309",
					"#text": "24 Jun 2018, 20:15"
				}
			},
			{
				"artist": {
					"#text": "薛凱琪",
					"mbid": "72f0b9db-f319-4817-a778-d1c3c9fc03d5"
				},
				"name": "Better Me - Mandarin Song",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Filicious",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E8%96%9B%E5%87%B1%E7%90%AA/_/Better+Me+-+Mandarin+Song",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/028e4cd17a81a41ed1ffd5ed13eb1ccf.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/028e4cd17a81a41ed1ffd5ed13eb1ccf.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/028e4cd17a81a41ed1ffd5ed13eb1ccf.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/028e4cd17a81a41ed1ffd5ed13eb1ccf.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529871081",
					"#text": "24 Jun 2018, 20:11"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "douze",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro 2014",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/douze",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529864705",
					"#text": "24 Jun 2018, 18:25"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "the long one",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro 2014",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/the+long+one",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529864338",
					"#text": "24 Jun 2018, 18:18"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "in ten seconds darkness comes",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro (violin meets piano)",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/in+ten+seconds+darkness+comes",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/18b4957701de4c03ccfda773af7d675d.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529864132",
					"#text": "24 Jun 2018, 18:15"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "the chirping",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro 2014",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/the+chirping",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529863712",
					"#text": "24 Jun 2018, 18:08"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "a deep voice",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro 2014",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/a+deep+voice",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529863478",
					"#text": "24 Jun 2018, 18:04"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "high tones 1 day after February 13",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Maestro (violin meets piano)",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/high+tones+1+day+after+February+13",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/18b4957701de4c03ccfda773af7d675d.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529863198",
					"#text": "24 Jun 2018, 17:59"
				}
			},
			{
				"artist": {
					"#text": "Erkan Yılmaz",
					"mbid": ""
				},
				"name": "Erkan Yilmaz eats apple",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "Human sounds",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/_/Erkan+Yilmaz+eats+apple",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a2e49c083fcf47cec761c928f0f896ff.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529863073",
					"#text": "24 Jun 2018, 17:57"
				}
			},
			{
				"artist": {
					"#text": "E-Jun Lee",
					"mbid": ""
				},
				"name": "不讓我的眼淚陪我過夜",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "翊往情深",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/E-Jun+Lee/_/%E4%B8%8D%E8%AE%93%E6%88%91%E7%9A%84%E7%9C%BC%E6%B7%9A%E9%99%AA%E6%88%91%E9%81%8E%E5%A4%9C",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529862778",
					"#text": "24 Jun 2018, 17:52"
				}
			},
			{
				"artist": {
					"#text": "童安格",
					"mbid": "20511430-ee38-48f5-af9d-57b7cc832e09"
				},
				"name": "其實你不懂我的心",
				"streamable": "0",
				"mbid": "1e283335-7825-4d53-8ecd-4182195433ce",
				"album": {
					"#text": "其實你不懂我的心",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E7%AB%A5%E5%AE%89%E6%A0%BC/_/%E5%85%B6%E5%AF%A6%E4%BD%A0%E4%B8%8D%E6%87%82%E6%88%91%E7%9A%84%E5%BF%83",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/1a098d698f074a30bf003d4729c9c83a.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/1a098d698f074a30bf003d4729c9c83a.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/1a098d698f074a30bf003d4729c9c83a.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1a098d698f074a30bf003d4729c9c83a.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529862614",
					"#text": "24 Jun 2018, 17:50"
				}
			},
			{
				"artist": {
					"#text": "彭芳",
					"mbid": ""
				},
				"name": "能不能",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "純色角3",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E5%BD%AD%E8%8A%B3/_/%E8%83%BD%E4%B8%8D%E8%83%BD",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529862358",
					"#text": "24 Jun 2018, 17:45"
				}
			},
			{
				"artist": {
					"#text": "Fei Yu-Ching",
					"mbid": ""
				},
				"name": "千里之外",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "回想曲 青青校樹",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Fei+Yu-Ching/_/%E5%8D%83%E9%87%8C%E4%B9%8B%E5%A4%96",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529862096",
					"#text": "24 Jun 2018, 17:41"
				}
			},
			{
				"artist": {
					"#text": "李尤",
					"mbid": ""
				},
				"name": "鐵血丹心",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "情歌真空管II",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/%E6%9D%8E%E5%B0%A4/_/%E9%90%B5%E8%A1%80%E4%B8%B9%E5%BF%83",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529861891",
					"#text": "24 Jun 2018, 17:38"
				}
			},
			{
				"artist": {
					"#text": "Joi Chua",
					"mbid": ""
				},
				"name": "遲來的幸福",
				"streamable": "0",
				"mbid": "",
				"album": {
					"#text": "我是我",
					"mbid": ""
				},
				"url": "https://www.last.fm/music/Joi+Chua/_/%E9%81%B2%E4%BE%86%E7%9A%84%E5%B9%B8%E7%A6%8F",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/355d2348bd692da4d0ff3a679992d848.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/355d2348bd692da4d0ff3a679992d848.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/355d2348bd692da4d0ff3a679992d848.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/355d2348bd692da4d0ff3a679992d848.png",
						"size": "extralarge"
					}
				],
				"date": {
					"uts": "1529861633",
					"#text": "24 Jun 2018, 17:33"
				}
			}
		],
		"@attr": {
			"user": "Erkan-Yilmaz",
			"page": "1",
			"perPage": "50",
			"totalPages": "6205",
			"total": "310230"
		}
	}
};

const mockTopArtists = {
	"topartists": {
		"artist": [
			{
				"name": "鄧麗君",
				"playcount": "11403",
				"mbid": "5c5cb762-d95e-47af-a7bf-35171eeab8e6",
				"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/e60c319e48774df9a877e59c3e2169fc.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/e60c319e48774df9a877e59c3e2169fc.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/e60c319e48774df9a877e59c3e2169fc.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e60c319e48774df9a877e59c3e2169fc.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e60c319e48774df9a877e59c3e2169fc.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "1"
				}
			},
			{
				"name": "Erkan Yılmaz",
				"playcount": "4767",
				"mbid": "",
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/222f224ecce24f05cfab8a84a81b2789.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/222f224ecce24f05cfab8a84a81b2789.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/222f224ecce24f05cfab8a84a81b2789.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/222f224ecce24f05cfab8a84a81b2789.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/222f224ecce24f05cfab8a84a81b2789.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "2"
				}
			},
			{
				"name": "譚盾",
				"playcount": "3162",
				"mbid": "4d8ac1f5-c380-4f4f-a65c-e7363ff88822",
				"url": "https://www.last.fm/music/%E8%AD%9A%E7%9B%BE",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/04fa403b22295d31007cdfaaa7872ac9.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/04fa403b22295d31007cdfaaa7872ac9.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/04fa403b22295d31007cdfaaa7872ac9.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/04fa403b22295d31007cdfaaa7872ac9.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/04fa403b22295d31007cdfaaa7872ac9.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "3"
				}
			},
			{
				"name": "周慧敏",
				"playcount": "3111",
				"mbid": "08c697c1-19b4-4ba8-b9c7-a815b1dcfe6f",
				"url": "https://www.last.fm/music/%E5%91%A8%E6%85%A7%E6%95%8F",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/8a16229a690143b6a70bfc6b87113cc7.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/8a16229a690143b6a70bfc6b87113cc7.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/8a16229a690143b6a70bfc6b87113cc7.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8a16229a690143b6a70bfc6b87113cc7.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8a16229a690143b6a70bfc6b87113cc7.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "4"
				}
			},
			{
				"name": "劉德華",
				"playcount": "2918",
				"mbid": "f738bc44-5806-4013-aee4-5469c0c2ec30",
				"url": "https://www.last.fm/music/%E5%8A%89%E5%BE%B7%E8%8F%AF",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/995fc74d76094dc89e4c2bda937a798d.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/995fc74d76094dc89e4c2bda937a798d.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/995fc74d76094dc89e4c2bda937a798d.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/995fc74d76094dc89e4c2bda937a798d.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/995fc74d76094dc89e4c2bda937a798d.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "5"
				}
			},
			{
				"name": "Sezen Aksu",
				"playcount": "2616",
				"mbid": "635e2a34-a566-47c4-b61d-fa5d203856aa",
				"url": "https://www.last.fm/music/Sezen+Aksu",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/1bb2fafac2acaf2e7a741d0caa9340e0.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/1bb2fafac2acaf2e7a741d0caa9340e0.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/1bb2fafac2acaf2e7a741d0caa9340e0.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1bb2fafac2acaf2e7a741d0caa9340e0.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1bb2fafac2acaf2e7a741d0caa9340e0.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "6"
				}
			},
			{
				"name": "백지영",
				"playcount": "2473",
				"mbid": "b5b2cc12-9235-42ec-8ae4-569fb2c1f1b5",
				"url": "https://www.last.fm/music/%EB%B0%B1%EC%A7%80%EC%98%81",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/8d0755e04864449ebb7a1ce5e6898c66.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/8d0755e04864449ebb7a1ce5e6898c66.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/8d0755e04864449ebb7a1ce5e6898c66.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8d0755e04864449ebb7a1ce5e6898c66.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8d0755e04864449ebb7a1ce5e6898c66.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "7"
				}
			},
			{
				"name": "那英",
				"playcount": "2315",
				"mbid": "6aa74244-000b-4932-b003-b0636281931e",
				"url": "https://www.last.fm/music/%E9%82%A3%E8%8B%B1",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/716aeeec6ad74c8aaf3e75fa303d3c34.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/716aeeec6ad74c8aaf3e75fa303d3c34.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/716aeeec6ad74c8aaf3e75fa303d3c34.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/716aeeec6ad74c8aaf3e75fa303d3c34.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/716aeeec6ad74c8aaf3e75fa303d3c34.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "8"
				}
			},
			{
				"name": "蔡依林",
				"playcount": "2088",
				"mbid": "3033ce2b-2fb2-408e-8c5a-aea48592d7bc",
				"url": "https://www.last.fm/music/%E8%94%A1%E4%BE%9D%E6%9E%97",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/8168a16ddef73047159a7e38d2ab72d9.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/8168a16ddef73047159a7e38d2ab72d9.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/8168a16ddef73047159a7e38d2ab72d9.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8168a16ddef73047159a7e38d2ab72d9.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8168a16ddef73047159a7e38d2ab72d9.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "9"
				}
			},
			{
				"name": "斉藤由貴",
				"playcount": "1916",
				"mbid": "7095445d-743a-45a5-91e8-ee3807ab93a4",
				"url": "https://www.last.fm/music/%E6%96%89%E8%97%A4%E7%94%B1%E8%B2%B4",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/e3d0327ac95a106ef97a819f7e8be44f.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/e3d0327ac95a106ef97a819f7e8be44f.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/e3d0327ac95a106ef97a819f7e8be44f.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e3d0327ac95a106ef97a819f7e8be44f.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e3d0327ac95a106ef97a819f7e8be44f.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "10"
				}
			},
			{
				"name": "ルルティア",
				"playcount": "1898",
				"mbid": "",
				"url": "https://www.last.fm/music/%E3%83%AB%E3%83%AB%E3%83%86%E3%82%A3%E3%82%A2",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/309867962b0b4843c8fd1146722ec324.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/309867962b0b4843c8fd1146722ec324.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/309867962b0b4843c8fd1146722ec324.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/309867962b0b4843c8fd1146722ec324.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/309867962b0b4843c8fd1146722ec324.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "11"
				}
			},
			{
				"name": "Boa",
				"playcount": "1868",
				"mbid": "a16d1433-ba89-4f72-a47b-a370add0bb55",
				"url": "https://www.last.fm/music/Boa",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/3246e2a504fd3b9b5ac04fd507572438.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/3246e2a504fd3b9b5ac04fd507572438.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/3246e2a504fd3b9b5ac04fd507572438.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3246e2a504fd3b9b5ac04fd507572438.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3246e2a504fd3b9b5ac04fd507572438.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "12"
				}
			},
			{
				"name": "孫燕姿",
				"playcount": "1826",
				"mbid": "ff0ecbbe-34b0-49c7-a36d-81a47700ac13",
				"url": "https://www.last.fm/music/%E5%AD%AB%E7%87%95%E5%A7%BF",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/64ec3ba778b64e2296d71aa61c1cd86f.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/64ec3ba778b64e2296d71aa61c1cd86f.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/64ec3ba778b64e2296d71aa61c1cd86f.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/64ec3ba778b64e2296d71aa61c1cd86f.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/64ec3ba778b64e2296d71aa61c1cd86f.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "13"
				}
			},
			{
				"name": "林憶蓮",
				"playcount": "1766",
				"mbid": "280697d2-164d-4477-971d-06b91e57c6a5",
				"url": "https://www.last.fm/music/%E6%9E%97%E6%86%B6%E8%93%AE",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/432a14f567dc69bb8b049925abfe89c5.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/432a14f567dc69bb8b049925abfe89c5.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/432a14f567dc69bb8b049925abfe89c5.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/432a14f567dc69bb8b049925abfe89c5.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/432a14f567dc69bb8b049925abfe89c5.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "14"
				}
			},
			{
				"name": "陳慧琳",
				"playcount": "1636",
				"mbid": "7e31d5c3-ad72-47c5-85c3-a35e11df1225",
				"url": "https://www.last.fm/music/%E9%99%B3%E6%85%A7%E7%90%B3",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/cf6d7eacbb260ace50c164f0c9c39ec3.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/cf6d7eacbb260ace50c164f0c9c39ec3.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/cf6d7eacbb260ace50c164f0c9c39ec3.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/cf6d7eacbb260ace50c164f0c9c39ec3.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/cf6d7eacbb260ace50c164f0c9c39ec3.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "15"
				}
			},
			{
				"name": "王菲",
				"playcount": "1619",
				"mbid": "692e367d-2846-442d-b13d-1177c3681c65",
				"url": "https://www.last.fm/music/%E7%8E%8B%E8%8F%B2",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/53f34506734841459771441a3f88f5ea.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/53f34506734841459771441a3f88f5ea.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/53f34506734841459771441a3f88f5ea.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/53f34506734841459771441a3f88f5ea.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/53f34506734841459771441a3f88f5ea.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "16"
				}
			},
			{
				"name": "Murat Salim Tokaç",
				"playcount": "1556",
				"mbid": "61a32817-7ab6-432a-8c87-b0c99880df84",
				"url": "https://www.last.fm/music/Murat+Salim+Toka%C3%A7",
				"streamable": "0",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					},
					{
						"#text": "",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "17"
				}
			},
			{
				"name": "王心凌",
				"playcount": "1458",
				"mbid": "ebf7170c-82b9-49bb-b392-4777c99b231c",
				"url": "https://www.last.fm/music/%E7%8E%8B%E5%BF%83%E5%87%8C",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/a8ed81eca42e43ad92b10826778cf92b.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/a8ed81eca42e43ad92b10826778cf92b.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/a8ed81eca42e43ad92b10826778cf92b.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a8ed81eca42e43ad92b10826778cf92b.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a8ed81eca42e43ad92b10826778cf92b.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "18"
				}
			},
			{
				"name": "衛蘭",
				"playcount": "1439",
				"mbid": "7e5b5c8a-bd9f-4106-bce0-e97fd14f6a6d",
				"url": "https://www.last.fm/music/%E8%A1%9B%E8%98%AD",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/832fdd02eb3948b3b4f121dbb94cf766.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/832fdd02eb3948b3b4f121dbb94cf766.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/832fdd02eb3948b3b4f121dbb94cf766.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/832fdd02eb3948b3b4f121dbb94cf766.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/832fdd02eb3948b3b4f121dbb94cf766.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "19"
				}
			},
			{
				"name": "許茹芸",
				"playcount": "1266",
				"mbid": "fb76911f-14c4-4565-8573-336f13e3966e",
				"url": "https://www.last.fm/music/%E8%A8%B1%E8%8C%B9%E8%8A%B8",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/9e1209a47fe54fb0931384de5a73943c.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/9e1209a47fe54fb0931384de5a73943c.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/9e1209a47fe54fb0931384de5a73943c.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/9e1209a47fe54fb0931384de5a73943c.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/9e1209a47fe54fb0931384de5a73943c.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "20"
				}
			},
			{
				"name": "Fahir Atakoğlu",
				"playcount": "1264",
				"mbid": "484eccf6-4be8-4b80-b3bf-c2dd7dc33098",
				"url": "https://www.last.fm/music/Fahir+Atako%C4%9Flu",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/85eb6e8cbdef42e8a6fc4e63c2ce73c9.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/85eb6e8cbdef42e8a6fc4e63c2ce73c9.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/85eb6e8cbdef42e8a6fc4e63c2ce73c9.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/85eb6e8cbdef42e8a6fc4e63c2ce73c9.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/85eb6e8cbdef42e8a6fc4e63c2ce73c9.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "21"
				}
			},
			{
				"name": "Barış Manço",
				"playcount": "1210",
				"mbid": "33736d61-e2a2-4070-88dd-ad2e173d174c",
				"url": "https://www.last.fm/music/Bar%C4%B1%C5%9F+Man%C3%A7o",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/2072405c49ca47efb79a4f5c7c4ccb7b.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/2072405c49ca47efb79a4f5c7c4ccb7b.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/2072405c49ca47efb79a4f5c7c4ccb7b.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2072405c49ca47efb79a4f5c7c4ccb7b.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2072405c49ca47efb79a4f5c7c4ccb7b.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "22"
				}
			},
			{
				"name": "莫文蔚",
				"playcount": "1130",
				"mbid": "07234fa3-3edd-4658-9556-03cc1ee6eac5",
				"url": "https://www.last.fm/music/%E8%8E%AB%E6%96%87%E8%94%9A",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/cea50e8091f64adc8a5b05604d8559b2.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/cea50e8091f64adc8a5b05604d8559b2.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/cea50e8091f64adc8a5b05604d8559b2.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/cea50e8091f64adc8a5b05604d8559b2.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/cea50e8091f64adc8a5b05604d8559b2.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "23"
				}
			},
			{
				"name": "張惠妹",
				"playcount": "1109",
				"mbid": "aeacef89-e4f3-415e-ac9b-0864f438e6a3",
				"url": "https://www.last.fm/music/%E5%BC%B5%E6%83%A0%E5%A6%B9",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/0bb4ededc6237d1a690e9955cd0faaa2.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/0bb4ededc6237d1a690e9955cd0faaa2.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/0bb4ededc6237d1a690e9955cd0faaa2.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/0bb4ededc6237d1a690e9955cd0faaa2.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/0bb4ededc6237d1a690e9955cd0faaa2.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "24"
				}
			},
			{
				"name": "Любовные Истории",
				"playcount": "1095",
				"mbid": "c426ebda-e421-42a9-a7bf-eae25709b9e9",
				"url": "https://www.last.fm/music/%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5+%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/3bf320f211fd42409c8d2dcd97a31d0f.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/3bf320f211fd42409c8d2dcd97a31d0f.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/3bf320f211fd42409c8d2dcd97a31d0f.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3bf320f211fd42409c8d2dcd97a31d0f.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3bf320f211fd42409c8d2dcd97a31d0f.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "25"
				}
			},
			{
				"name": "蘇慧倫",
				"playcount": "1091",
				"mbid": "b7b3d2e5-7f8b-4974-9135-3c9d863555c9",
				"url": "https://www.last.fm/music/%E8%98%87%E6%85%A7%E5%80%AB",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/de07a7d6383748c98d9e7480807a609e.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/de07a7d6383748c98d9e7480807a609e.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/de07a7d6383748c98d9e7480807a609e.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/de07a7d6383748c98d9e7480807a609e.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/de07a7d6383748c98d9e7480807a609e.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "26"
				}
			},
			{
				"name": "Jia Peng Fang",
				"playcount": "1075",
				"mbid": "d7b7b3c3-38cf-4f2d-bac8-194be10fbe50",
				"url": "https://www.last.fm/music/Jia+Peng+Fang",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/b4e00df657444cf9b8f6de1799409791.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/b4e00df657444cf9b8f6de1799409791.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/b4e00df657444cf9b8f6de1799409791.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b4e00df657444cf9b8f6de1799409791.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b4e00df657444cf9b8f6de1799409791.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "27"
				}
			},
			{
				"name": "Jülide Özçelik",
				"playcount": "1063",
				"mbid": "d463694c-aa68-49fc-b736-89ab242413fa",
				"url": "https://www.last.fm/music/J%C3%BClide+%C3%96z%C3%A7elik",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/404cfc43cb1448b8aac9261587b39af7.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/404cfc43cb1448b8aac9261587b39af7.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/404cfc43cb1448b8aac9261587b39af7.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/404cfc43cb1448b8aac9261587b39af7.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/404cfc43cb1448b8aac9261587b39af7.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "28"
				}
			},
			{
				"name": "Gummy",
				"playcount": "1059",
				"mbid": "d5ec23f4-d000-40c3-81a9-4fa8c3f45263",
				"url": "https://www.last.fm/music/Gummy",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/90104a6aa17a95928b2c5835df5c9b1e.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/90104a6aa17a95928b2c5835df5c9b1e.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/90104a6aa17a95928b2c5835df5c9b1e.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/90104a6aa17a95928b2c5835df5c9b1e.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/90104a6aa17a95928b2c5835df5c9b1e.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "29"
				}
			},
			{
				"name": "坂本冬美",
				"playcount": "1045",
				"mbid": "12a9f509-ceac-4de1-8780-73bb1a278b9c",
				"url": "https://www.last.fm/music/%E5%9D%82%E6%9C%AC%E5%86%AC%E7%BE%8E",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/78e8cfcf1db04ba69c636ae030429937.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/78e8cfcf1db04ba69c636ae030429937.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/78e8cfcf1db04ba69c636ae030429937.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/78e8cfcf1db04ba69c636ae030429937.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/78e8cfcf1db04ba69c636ae030429937.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "30"
				}
			},
			{
				"name": "Ali Kirca",
				"playcount": "1035",
				"mbid": "56c54529-64a8-4077-b1b2-7eb01c821fff",
				"url": "https://www.last.fm/music/Ali+Kirca",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/50ab604188ca49dc9b4a821e0ad2b26e.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/50ab604188ca49dc9b4a821e0ad2b26e.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/50ab604188ca49dc9b4a821e0ad2b26e.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/50ab604188ca49dc9b4a821e0ad2b26e.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/50ab604188ca49dc9b4a821e0ad2b26e.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "31"
				}
			},
			{
				"name": "Sıla",
				"playcount": "1007",
				"mbid": "86005371-201b-4b68-a1cd-459e8214fadb",
				"url": "https://www.last.fm/music/S%C4%B1la",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/ab5162912a4f4033827702162b5f1009.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/ab5162912a4f4033827702162b5f1009.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/ab5162912a4f4033827702162b5f1009.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/ab5162912a4f4033827702162b5f1009.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/ab5162912a4f4033827702162b5f1009.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "32"
				}
			},
			{
				"name": "Chocolate - String Ensemble",
				"playcount": "970",
				"mbid": "",
				"url": "https://www.last.fm/music/Chocolate+-+String+Ensemble",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/3cfb15bcadb2431dab6c20d07cdbd77e.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/3cfb15bcadb2431dab6c20d07cdbd77e.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/3cfb15bcadb2431dab6c20d07cdbd77e.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3cfb15bcadb2431dab6c20d07cdbd77e.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3cfb15bcadb2431dab6c20d07cdbd77e.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "33"
				}
			},
			{
				"name": "五輪真弓",
				"playcount": "942",
				"mbid": "6da364fa-08c2-4755-a68a-ee519acd1664",
				"url": "https://www.last.fm/music/%E4%BA%94%E8%BC%AA%E7%9C%9F%E5%BC%93",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/06345bc331ee42a4b51a6f9f3cb62956.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/06345bc331ee42a4b51a6f9f3cb62956.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/06345bc331ee42a4b51a6f9f3cb62956.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/06345bc331ee42a4b51a6f9f3cb62956.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/06345bc331ee42a4b51a6f9f3cb62956.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "34"
				}
			},
			{
				"name": "OuYoung Fei-ying",
				"playcount": "892",
				"mbid": "",
				"url": "https://www.last.fm/music/OuYoung+Fei-ying",
				"streamable": "0",
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					},
					{
						"#text": "",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "35"
				}
			},
			{
				"name": "陳奕迅",
				"playcount": "860",
				"mbid": "86119d30-d930-4e65-a97a-e31e22388166",
				"url": "https://www.last.fm/music/%E9%99%B3%E5%A5%95%E8%BF%85",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/4b0fc99a6ed54d2cad795ee7094cfa81.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/4b0fc99a6ed54d2cad795ee7094cfa81.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/4b0fc99a6ed54d2cad795ee7094cfa81.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/4b0fc99a6ed54d2cad795ee7094cfa81.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/4b0fc99a6ed54d2cad795ee7094cfa81.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "36"
				}
			},
			{
				"name": "梶芽衣子",
				"playcount": "856",
				"mbid": "fb5280b5-9e0c-439d-b275-2d8b5bffc19a",
				"url": "https://www.last.fm/music/%E6%A2%B6%E8%8A%BD%E8%A1%A3%E5%AD%90",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/94cf5f089f714bbfcbd7436a325f9343.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/94cf5f089f714bbfcbd7436a325f9343.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/94cf5f089f714bbfcbd7436a325f9343.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/94cf5f089f714bbfcbd7436a325f9343.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/94cf5f089f714bbfcbd7436a325f9343.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "37"
				}
			},
			{
				"name": "陳慧嫻",
				"playcount": "834",
				"mbid": "e45899a9-111b-4edc-9c78-d32b958dd03f",
				"url": "https://www.last.fm/music/%E9%99%B3%E6%85%A7%E5%AB%BB",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/11b5869406781513f0eedf0b3cd59262.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/11b5869406781513f0eedf0b3cd59262.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/11b5869406781513f0eedf0b3cd59262.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/11b5869406781513f0eedf0b3cd59262.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/11b5869406781513f0eedf0b3cd59262.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "38"
				}
			},
			{
				"name": "何韻詩",
				"playcount": "832",
				"mbid": "91344a97-e0aa-4085-a374-9a36290e098e",
				"url": "https://www.last.fm/music/%E4%BD%95%E9%9F%BB%E8%A9%A9",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/197b63141b8d10ddfc8c2e2362808a36.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/197b63141b8d10ddfc8c2e2362808a36.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/197b63141b8d10ddfc8c2e2362808a36.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/197b63141b8d10ddfc8c2e2362808a36.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/197b63141b8d10ddfc8c2e2362808a36.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "39"
				}
			},
			{
				"name": "Kayahan",
				"playcount": "825",
				"mbid": "b409514e-0a3a-4948-8a95-20a0fef03a51",
				"url": "https://www.last.fm/music/Kayahan",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/a98c30df078e4b5499aee0c38d1a7bbe.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/a98c30df078e4b5499aee0c38d1a7bbe.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/a98c30df078e4b5499aee0c38d1a7bbe.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a98c30df078e4b5499aee0c38d1a7bbe.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a98c30df078e4b5499aee0c38d1a7bbe.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "40"
				}
			},
			{
				"name": "楊丞琳",
				"playcount": "796",
				"mbid": "aea213c9-5ba7-4160-a80e-84d9eed4a833",
				"url": "https://www.last.fm/music/%E6%A5%8A%E4%B8%9E%E7%90%B3",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/cc4646554f25a6ebfa71371edaca6cfb.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/cc4646554f25a6ebfa71371edaca6cfb.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/cc4646554f25a6ebfa71371edaca6cfb.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/cc4646554f25a6ebfa71371edaca6cfb.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/cc4646554f25a6ebfa71371edaca6cfb.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "41"
				}
			},
			{
				"name": "Aşkın Nur Yengi",
				"playcount": "791",
				"mbid": "59d5c097-7733-4503-81c8-57c6ca43c4ca",
				"url": "https://www.last.fm/music/A%C5%9Fk%C4%B1n+Nur+Yengi",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/0b4d90924da346bca2972d36f4dc1500.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/0b4d90924da346bca2972d36f4dc1500.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/0b4d90924da346bca2972d36f4dc1500.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/0b4d90924da346bca2972d36f4dc1500.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/0b4d90924da346bca2972d36f4dc1500.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "42"
				}
			},
			{
				"name": "郭靜",
				"playcount": "790",
				"mbid": "eb7fb713-82d5-4417-9c80-65bc7da3233b",
				"url": "https://www.last.fm/music/%E9%83%AD%E9%9D%9C",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/3f72a6d55b0647b09eb0b2d15eb12873.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/3f72a6d55b0647b09eb0b2d15eb12873.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/3f72a6d55b0647b09eb0b2d15eb12873.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3f72a6d55b0647b09eb0b2d15eb12873.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3f72a6d55b0647b09eb0b2d15eb12873.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "43"
				}
			},
			{
				"name": "張韶涵",
				"playcount": "786",
				"mbid": "5474745c-a078-4d87-85c2-f8e70736b79c",
				"url": "https://www.last.fm/music/%E5%BC%B5%E9%9F%B6%E6%B6%B5",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/6bbb2b7684ac2a463b773432356369b6.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/6bbb2b7684ac2a463b773432356369b6.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/6bbb2b7684ac2a463b773432356369b6.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/6bbb2b7684ac2a463b773432356369b6.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/6bbb2b7684ac2a463b773432356369b6.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "44"
				}
			},
			{
				"name": "許志安",
				"playcount": "776",
				"mbid": "d244c64f-a39d-4a76-91d9-f3e6b23bdf4d",
				"url": "https://www.last.fm/music/%E8%A8%B1%E5%BF%97%E5%AE%89",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/3360c6501ff847f581ce12fecf3fdef0.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/3360c6501ff847f581ce12fecf3fdef0.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/3360c6501ff847f581ce12fecf3fdef0.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3360c6501ff847f581ce12fecf3fdef0.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3360c6501ff847f581ce12fecf3fdef0.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "45"
				}
			},
			{
				"name": "丁噹",
				"playcount": "774",
				"mbid": "8db31844-942a-491e-bbfe-bee68cf9a426",
				"url": "https://www.last.fm/music/%E4%B8%81%E5%99%B9",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/17916363446b27fc4350927a3fccc137.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/17916363446b27fc4350927a3fccc137.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/17916363446b27fc4350927a3fccc137.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/17916363446b27fc4350927a3fccc137.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/17916363446b27fc4350927a3fccc137.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "46"
				}
			},
			{
				"name": "Zerrin Özer",
				"playcount": "770",
				"mbid": "d8c95230-1c76-44ac-ba7d-3cda39cba2a2",
				"url": "https://www.last.fm/music/Zerrin+%C3%96zer",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/098cfde92201467f9e23b8670970e166.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/098cfde92201467f9e23b8670970e166.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/098cfde92201467f9e23b8670970e166.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/098cfde92201467f9e23b8670970e166.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/098cfde92201467f9e23b8670970e166.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "47"
				}
			},
			{
				"name": "이수영",
				"playcount": "755",
				"mbid": "27e484c5-e9c2-40ae-8216-3765b99ee6af",
				"url": "https://www.last.fm/music/%EC%9D%B4%EC%88%98%EC%98%81",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/86e0c24fabd94b5ba0ac516445e40ee5.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/86e0c24fabd94b5ba0ac516445e40ee5.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/86e0c24fabd94b5ba0ac516445e40ee5.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/86e0c24fabd94b5ba0ac516445e40ee5.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/86e0c24fabd94b5ba0ac516445e40ee5.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "48"
				}
			},
			{
				"name": "王馨平",
				"playcount": "753",
				"mbid": "807787e5-603a-4c08-ba77-de083ddc9bb5",
				"url": "https://www.last.fm/music/%E7%8E%8B%E9%A6%A8%E5%B9%B3",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/06d1ba4462394d85a8ddbd05d491a973.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/06d1ba4462394d85a8ddbd05d491a973.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/06d1ba4462394d85a8ddbd05d491a973.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/06d1ba4462394d85a8ddbd05d491a973.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/06d1ba4462394d85a8ddbd05d491a973.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "49"
				}
			},
			{
				"name": "Chocolate",
				"playcount": "742",
				"mbid": "f4a41742-fb97-4ee1-a4e8-5feb1d7c91f0",
				"url": "https://www.last.fm/music/Chocolate",
				"streamable": "0",
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/93ffbfacb3ed44debafb5c9f1e120d1e.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/93ffbfacb3ed44debafb5c9f1e120d1e.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/93ffbfacb3ed44debafb5c9f1e120d1e.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/93ffbfacb3ed44debafb5c9f1e120d1e.png",
						"size": "extralarge"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/93ffbfacb3ed44debafb5c9f1e120d1e.png",
						"size": "mega"
					}
				],
				"@attr": {
					"rank": "50"
				}
			}
		],
		"@attr": {
			"user": "Erkan-Yilmaz",
			"page": "1",
			"perPage": "50",
			"totalPages": "291",
			"total": "14501"
		}
	}
};


const mockTopAlbums = {
	"topalbums": {
		"album": [
			{
				"name": "君心我心101 紀念專輯",
				"playcount": "1330",
				"mbid": "",
				"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B/%E5%90%9B%E5%BF%83%E6%88%91%E5%BF%83101+%E7%B4%80%E5%BF%B5%E5%B0%88%E8%BC%AF",
				"artist": {
					"name": "鄧麗君",
					"mbid": "5c5cb762-d95e-47af-a7bf-35171eeab8e6",
					"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/d5b086c52f2600fbf713b12dc50025ae.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/d5b086c52f2600fbf713b12dc50025ae.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/d5b086c52f2600fbf713b12dc50025ae.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d5b086c52f2600fbf713b12dc50025ae.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "1"
				}
			},
			{
				"name": "Maestro 2014",
				"playcount": "1205",
				"mbid": "",
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/Maestro+2014",
				"artist": {
					"name": "Erkan Yılmaz",
					"mbid": "",
					"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/eb2b5f1a3ae449bcc9442167f4a6f68a.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "2"
				}
			},
			{
				"name": "君之紀念冊-鄧麗君誕生六十年鑽禧特集",
				"playcount": "1175",
				"mbid": "",
				"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B/%E5%90%9B%E4%B9%8B%E7%B4%80%E5%BF%B5%E5%86%8A-%E9%84%A7%E9%BA%97%E5%90%9B%E8%AA%95%E7%94%9F%E5%85%AD%E5%8D%81%E5%B9%B4%E9%91%BD%E7%A6%A7%E7%89%B9%E9%9B%86",
				"artist": {
					"name": "鄧麗君",
					"mbid": "5c5cb762-d95e-47af-a7bf-35171eeab8e6",
					"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "3"
				}
			},
			{
				"name": "Seirios",
				"playcount": "1046",
				"mbid": "",
				"url": "https://www.last.fm/music/%E3%83%AB%E3%83%AB%E3%83%86%E3%82%A3%E3%82%A2/Seirios",
				"artist": {
					"name": "ルルティア",
					"mbid": "",
					"url": "https://www.last.fm/music/%E3%83%AB%E3%83%AB%E3%83%86%E3%82%A3%E3%82%A2"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/fbba63892abc474fbbe0c54ee55e3674.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/fbba63892abc474fbbe0c54ee55e3674.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/fbba63892abc474fbbe0c54ee55e3674.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/fbba63892abc474fbbe0c54ee55e3674.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "4"
				}
			},
			{
				"name": "Chocolate 2",
				"playcount": "970",
				"mbid": "",
				"url": "https://www.last.fm/music/Chocolate+-+String+Ensemble/Chocolate+2",
				"artist": {
					"name": "Chocolate - String Ensemble",
					"mbid": "",
					"url": "https://www.last.fm/music/Chocolate+-+String+Ensemble"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/d553952cea6bb5adea553db409bf5db8.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/d553952cea6bb5adea553db409bf5db8.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/d553952cea6bb5adea553db409bf5db8.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d553952cea6bb5adea553db409bf5db8.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "5"
				}
			},
			{
				"name": "Любовные истории",
				"playcount": "929",
				"mbid": "5fdb9562-8929-4163-bd0b-908f2611ddba",
				"url": "https://www.last.fm/music/%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5+%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8/%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5+%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8",
				"artist": {
					"name": "Любовные Истории",
					"mbid": "c426ebda-e421-42a9-a7bf-eae25709b9e9",
					"url": "https://www.last.fm/music/%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5+%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/d5790d89a3e84073a362cecd4bf6e8a0.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/d5790d89a3e84073a362cecd4bf6e8a0.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/d5790d89a3e84073a362cecd4bf6e8a0.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d5790d89a3e84073a362cecd4bf6e8a0.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "6"
				}
			},
			{
				"name": "Maestro (piano edition)",
				"playcount": "915",
				"mbid": "",
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/Maestro+(piano+edition)",
				"artist": {
					"name": "Erkan Yılmaz",
					"mbid": "",
					"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/e00c7ec8f6c14828c8bfcafa282a5c10.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/e00c7ec8f6c14828c8bfcafa282a5c10.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/e00c7ec8f6c14828c8bfcafa282a5c10.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e00c7ec8f6c14828c8bfcafa282a5c10.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "7"
				}
			},
			{
				"name": "Maestro (violin meets piano)",
				"playcount": "893",
				"mbid": "",
				"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz/Maestro+(violin+meets+piano)",
				"artist": {
					"name": "Erkan Yılmaz",
					"mbid": "",
					"url": "https://www.last.fm/music/Erkan+Y%C4%B1lmaz"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/18b4957701de4c03ccfda773af7d675d.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/18b4957701de4c03ccfda773af7d675d.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "8"
				}
			},
			{
				"name": "野蛮遊戯Jgame",
				"playcount": "875",
				"mbid": "",
				"url": "https://www.last.fm/music/%E8%94%A1%E4%BE%9D%E6%9E%97/%E9%87%8E%E8%9B%AE%E9%81%8A%E6%88%AFJgame",
				"artist": {
					"name": "蔡依林",
					"mbid": "3033ce2b-2fb2-408e-8c5a-aea48592d7bc",
					"url": "https://www.last.fm/music/%E8%94%A1%E4%BE%9D%E6%9E%97"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/d5f3a96f5005416dc19a3e009f6234a2.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/d5f3a96f5005416dc19a3e009f6234a2.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/d5f3a96f5005416dc19a3e009f6234a2.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d5f3a96f5005416dc19a3e009f6234a2.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "9"
				}
			},
			{
				"name": "Yüreğimdeki Barış Şarkıları",
				"playcount": "819",
				"mbid": "",
				"url": "https://www.last.fm/music/Ali+Kirca/Y%C3%BCre%C4%9Fimdeki+Bar%C4%B1%C5%9F+%C5%9Eark%C4%B1lar%C4%B1",
				"artist": {
					"name": "Ali Kirca",
					"mbid": "56c54529-64a8-4077-b1b2-7eb01c821fff",
					"url": "https://www.last.fm/music/Ali+Kirca"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "10"
				}
			},
			{
				"name": "鄧麗君璀璨東瀛原音集",
				"playcount": "613",
				"mbid": "",
				"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B/%E9%84%A7%E9%BA%97%E5%90%9B%E7%92%80%E7%92%A8%E6%9D%B1%E7%80%9B%E5%8E%9F%E9%9F%B3%E9%9B%86",
				"artist": {
					"name": "鄧麗君",
					"mbid": "5c5cb762-d95e-47af-a7bf-35171eeab8e6",
					"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "11"
				}
			},
			{
				"name": "Lovers In Heaven",
				"playcount": "555",
				"mbid": "",
				"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B/Lovers+In+Heaven",
				"artist": {
					"name": "鄧麗君",
					"mbid": "5c5cb762-d95e-47af-a7bf-35171eeab8e6",
					"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "12"
				}
			},
			{
				"name": "那英全經典",
				"playcount": "529",
				"mbid": "",
				"url": "https://www.last.fm/music/%E9%82%A3%E8%8B%B1/%E9%82%A3%E8%8B%B1%E5%85%A8%E7%B6%93%E5%85%B8",
				"artist": {
					"name": "那英",
					"mbid": "6aa74244-000b-4932-b003-b0636281931e",
					"url": "https://www.last.fm/music/%E9%82%A3%E8%8B%B1"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/dbf89859e6214dd59af1ecba63a25e0a.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/dbf89859e6214dd59af1ecba63a25e0a.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/dbf89859e6214dd59af1ecba63a25e0a.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/dbf89859e6214dd59af1ecba63a25e0a.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "13"
				}
			},
			{
				"name": "I Believe",
				"playcount": "517",
				"mbid": "0c0c996b-9c74-4e9f-8563-0342590488b3",
				"url": "https://www.last.fm/music/%EC%9D%B4%EC%88%98%EC%98%81/I+Believe",
				"artist": {
					"name": "이수영",
					"mbid": "27e484c5-e9c2-40ae-8216-3765b99ee6af",
					"url": "https://www.last.fm/music/%EC%9D%B4%EC%88%98%EC%98%81"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/6f9ea3ead230439eabce3140eea171ae.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/6f9ea3ead230439eabce3140eea171ae.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/6f9ea3ead230439eabce3140eea171ae.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/6f9ea3ead230439eabce3140eea171ae.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "14"
				}
			},
			{
				"name": "Super Selection",
				"playcount": "478",
				"mbid": "a6a885ff-eb2b-4181-93c4-ad72db8cb57d",
				"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B/Super+Selection",
				"artist": {
					"name": "鄧麗君",
					"mbid": "5c5cb762-d95e-47af-a7bf-35171eeab8e6",
					"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/2ed80965047dc7c3ff123ba8f143b553.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/2ed80965047dc7c3ff123ba8f143b553.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/2ed80965047dc7c3ff123ba8f143b553.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2ed80965047dc7c3ff123ba8f143b553.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "15"
				}
			},
			{
				"name": "鄧麗君-傳奇的誕生",
				"playcount": "460",
				"mbid": "",
				"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B/%E9%84%A7%E9%BA%97%E5%90%9B-%E5%82%B3%E5%A5%87%E7%9A%84%E8%AA%95%E7%94%9F",
				"artist": {
					"name": "鄧麗君",
					"mbid": "5c5cb762-d95e-47af-a7bf-35171eeab8e6",
					"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/65755328b986e123d12286a40c1672b0.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/65755328b986e123d12286a40c1672b0.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/65755328b986e123d12286a40c1672b0.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/65755328b986e123d12286a40c1672b0.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "16"
				}
			},
			{
				"name": "Famous Chinese Vocalists: Na Ying",
				"playcount": "448",
				"mbid": "",
				"url": "https://www.last.fm/music/%E9%82%A3%E8%8B%B1/Famous+Chinese+Vocalists:+Na+Ying",
				"artist": {
					"name": "那英",
					"mbid": "6aa74244-000b-4932-b003-b0636281931e",
					"url": "https://www.last.fm/music/%E9%82%A3%E8%8B%B1"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/a2eb6dd0da8bba9ddf27bd6998a7ce12.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/a2eb6dd0da8bba9ddf27bd6998a7ce12.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/a2eb6dd0da8bba9ddf27bd6998a7ce12.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a2eb6dd0da8bba9ddf27bd6998a7ce12.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "17"
				}
			},
			{
				"name": "如果沒有你",
				"playcount": "443",
				"mbid": "58b37bfd-14a1-4ef4-9eea-5921f326e0f9",
				"url": "https://www.last.fm/music/%E8%8E%AB%E6%96%87%E8%94%9A/%E5%A6%82%E6%9E%9C%E6%B2%92%E6%9C%89%E4%BD%A0",
				"artist": {
					"name": "莫文蔚",
					"mbid": "07234fa3-3edd-4658-9556-03cc1ee6eac5",
					"url": "https://www.last.fm/music/%E8%8E%AB%E6%96%87%E8%94%9A"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/f707d827249f97732842340a70d0fdf6.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/f707d827249f97732842340a70d0fdf6.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/f707d827249f97732842340a70d0fdf6.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/f707d827249f97732842340a70d0fdf6.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "18"
				}
			},
			{
				"name": "BACK FOR YOU",
				"playcount": "432",
				"mbid": "48256e7b-e583-4d87-9533-cae90f7b6fbf",
				"url": "https://www.last.fm/music/%E5%91%A8%E6%85%A7%E6%95%8F/BACK+FOR+YOU",
				"artist": {
					"name": "周慧敏",
					"mbid": "08c697c1-19b4-4ba8-b9c7-a815b1dcfe6f",
					"url": "https://www.last.fm/music/%E5%91%A8%E6%85%A7%E6%95%8F"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/f0696cb261374cadb80a8a2560dc629e.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/f0696cb261374cadb80a8a2560dc629e.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/f0696cb261374cadb80a8a2560dc629e.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/f0696cb261374cadb80a8a2560dc629e.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "19"
				}
			},
			{
				"name": "Classical Folk Music From China",
				"playcount": "432",
				"mbid": "",
				"url": "https://www.last.fm/music/Jiang+Li/Classical+Folk+Music+From+China",
				"artist": {
					"name": "Jiang Li",
					"mbid": "bc78b2d2-19a1-4d2e-8ba8-ea9c1404a191",
					"url": "https://www.last.fm/music/Jiang+Li"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/a8922de896452cc937bae05273d44762.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/a8922de896452cc937bae05273d44762.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/a8922de896452cc937bae05273d44762.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a8922de896452cc937bae05273d44762.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "20"
				}
			},
			{
				"name": "Kiss My Lips - The 8th Album",
				"playcount": "426",
				"mbid": "",
				"url": "https://www.last.fm/music/Boa/Kiss+My+Lips+-+The+8th+Album",
				"artist": {
					"name": "Boa",
					"mbid": "a16d1433-ba89-4f72-a47b-a370add0bb55",
					"url": "https://www.last.fm/music/Boa"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/d176a7188669066e28879069fc208bec.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/d176a7188669066e28879069fc208bec.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/d176a7188669066e28879069fc208bec.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d176a7188669066e28879069fc208bec.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "21"
				}
			},
			{
				"name": "Sevgiliye",
				"playcount": "417",
				"mbid": "0a9fce32-b79a-4e8f-8e08-4e0c6edd7520",
				"url": "https://www.last.fm/music/A%C5%9Fk%C4%B1n+Nur+Yengi/Sevgiliye",
				"artist": {
					"name": "Aşkın Nur Yengi",
					"mbid": "59d5c097-7733-4503-81c8-57c6ca43c4ca",
					"url": "https://www.last.fm/music/A%C5%9Fk%C4%B1n+Nur+Yengi"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/a230d3ee28764c81b3759c7f110b1379.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/a230d3ee28764c81b3759c7f110b1379.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/a230d3ee28764c81b3759c7f110b1379.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a230d3ee28764c81b3759c7f110b1379.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "22"
				}
			},
			{
				"name": "İz",
				"playcount": "416",
				"mbid": "691464a6-7402-4201-8c74-917b83dfec0e",
				"url": "https://www.last.fm/music/Fahir+Atako%C4%9Flu/%C4%B0z",
				"artist": {
					"name": "Fahir Atakoğlu",
					"mbid": "484eccf6-4be8-4b80-b3bf-c2dd7dc33098",
					"url": "https://www.last.fm/music/Fahir+Atako%C4%9Flu"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/bcacb3eecafa4a63a90249e8ff10250b.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/bcacb3eecafa4a63a90249e8ff10250b.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/bcacb3eecafa4a63a90249e8ff10250b.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/bcacb3eecafa4a63a90249e8ff10250b.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "23"
				}
			},
			{
				"name": "All That I Am",
				"playcount": "411",
				"mbid": "6024d570-1a49-3142-909e-83a031212949",
				"url": "https://www.last.fm/music/Joe/All+That+I+Am",
				"artist": {
					"name": "Joe",
					"mbid": "d6864f27-532d-4912-af81-d710d58b1f01",
					"url": "https://www.last.fm/music/Joe"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/98134c3e7f564fcea9be6394e17437f7.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/98134c3e7f564fcea9be6394e17437f7.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/98134c3e7f564fcea9be6394e17437f7.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/98134c3e7f564fcea9be6394e17437f7.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "24"
				}
			},
			{
				"name": "Chocolate - String Ensemble",
				"playcount": "411",
				"mbid": "",
				"url": "https://www.last.fm/music/Chocolate/Chocolate+-+String+Ensemble",
				"artist": {
					"name": "Chocolate",
					"mbid": "f4a41742-fb97-4ee1-a4e8-5feb1d7c91f0",
					"url": "https://www.last.fm/music/Chocolate"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/4167f255b380e4dfdaff1019a39692ef.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/4167f255b380e4dfdaff1019a39692ef.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/4167f255b380e4dfdaff1019a39692ef.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/4167f255b380e4dfdaff1019a39692ef.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "25"
				}
			},
			{
				"name": "Kyu Sakamoto Memorial Best",
				"playcount": "395",
				"mbid": "",
				"url": "https://www.last.fm/music/%E5%9D%82%E6%9C%AC%E4%B9%9D/Kyu+Sakamoto+Memorial+Best",
				"artist": {
					"name": "坂本九",
					"mbid": "ec79fc88-5258-48c5-8a58-c06419911e01",
					"url": "https://www.last.fm/music/%E5%9D%82%E6%9C%AC%E4%B9%9D"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/8f18ef6d07f74c05a7d587b7367c1871.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/8f18ef6d07f74c05a7d587b7367c1871.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/8f18ef6d07f74c05a7d587b7367c1871.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8f18ef6d07f74c05a7d587b7367c1871.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "26"
				}
			},
			{
				"name": "Absolute First Album",
				"playcount": "379",
				"mbid": "",
				"url": "https://www.last.fm/music/%ED%8B%B0%EC%95%84%EB%9D%BC/Absolute+First+Album",
				"artist": {
					"name": "티아라",
					"mbid": "4103d05e-da2a-4744-81ae-f8dc3e81728c",
					"url": "https://www.last.fm/music/%ED%8B%B0%EC%95%84%EB%9D%BC"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/bfe80724e84c4f30a7898752d17d61f4.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/bfe80724e84c4f30a7898752d17d61f4.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/bfe80724e84c4f30a7898752d17d61f4.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/bfe80724e84c4f30a7898752d17d61f4.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "27"
				}
			},
			{
				"name": "The Moon Reflected In Er-Quan",
				"playcount": "355",
				"mbid": "",
				"url": "https://www.last.fm/music/Chang+Jui/The+Moon+Reflected+In+Er-Quan",
				"artist": {
					"name": "Chang Jui",
					"mbid": "",
					"url": "https://www.last.fm/music/Chang+Jui"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/c5b48e24ee8f4d9a9bb20cb8bb89da26.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/c5b48e24ee8f4d9a9bb20cb8bb89da26.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/c5b48e24ee8f4d9a9bb20cb8bb89da26.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/c5b48e24ee8f4d9a9bb20cb8bb89da26.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "28"
				}
			},
			{
				"name": "Jazz İstanbul, Volume I",
				"playcount": "354",
				"mbid": "4ce63b98-4569-4e86-b5c6-856d6dc6c222",
				"url": "https://www.last.fm/music/J%C3%BClide+%C3%96z%C3%A7elik/Jazz+%C4%B0stanbul,+Volume+I",
				"artist": {
					"name": "Jülide Özçelik",
					"mbid": "d463694c-aa68-49fc-b736-89ab242413fa",
					"url": "https://www.last.fm/music/J%C3%BClide+%C3%96z%C3%A7elik"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/8a8a69bd3cb74f6ea725ddda4563d2ad.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/8a8a69bd3cb74f6ea725ddda4563d2ad.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/8a8a69bd3cb74f6ea725ddda4563d2ad.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8a8a69bd3cb74f6ea725ddda4563d2ad.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "29"
				}
			},
			{
				"name": "Sheherazad (Kirov Orchestra feat. conductor: Valery Gergiev)",
				"playcount": "345",
				"mbid": "",
				"url": "https://www.last.fm/music/%D0%9C%D0%B8%D0%BB%D0%B8%D0%B9+%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87+%D0%91%D0%B0%D0%BB%D0%B0%D0%BA%D0%B8%D1%80%D0%B5%D0%B2/Sheherazad+(Kirov+Orchestra+feat.+conductor:+Valery+Gergiev)",
				"artist": {
					"name": "Милий Алексеевич Балакирев",
					"mbid": "482dc0a4-0c39-40dc-9d6d-ca250a5ef833",
					"url": "https://www.last.fm/music/%D0%9C%D0%B8%D0%BB%D0%B8%D0%B9+%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87+%D0%91%D0%B0%D0%BB%D0%B0%D0%BA%D0%B8%D1%80%D0%B5%D0%B2"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "30"
				}
			},
			{
				"name": "Modern Tang Allures",
				"playcount": "344",
				"mbid": "",
				"url": "https://www.last.fm/music/Teresa+Wong/Modern+Tang+Allures",
				"artist": {
					"name": "Teresa Wong",
					"mbid": "",
					"url": "https://www.last.fm/music/Teresa+Wong"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/6f391bb52d1d4af09fb9ec3d703055b3.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/6f391bb52d1d4af09fb9ec3d703055b3.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/6f391bb52d1d4af09fb9ec3d703055b3.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/6f391bb52d1d4af09fb9ec3d703055b3.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "31"
				}
			},
			{
				"name": "Ben...",
				"playcount": "341",
				"mbid": "",
				"url": "https://www.last.fm/music/Zerrin+%C3%96zer/Ben...",
				"artist": {
					"name": "Zerrin Özer",
					"mbid": "d8c95230-1c76-44ac-ba7d-3cda39cba2a2",
					"url": "https://www.last.fm/music/Zerrin+%C3%96zer"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/091ed539869f48eb95ae22808ce4d23a.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/091ed539869f48eb95ae22808ce4d23a.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/091ed539869f48eb95ae22808ce4d23a.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/091ed539869f48eb95ae22808ce4d23a.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "32"
				}
			},
			{
				"name": "Emotions",
				"playcount": "340",
				"mbid": "50022923-c0e8-4d2e-bcae-1c6b5096cb52",
				"url": "https://www.last.fm/music/%E9%9D%92%E5%B1%B1%E3%83%86%E3%83%AB%E3%83%9E/Emotions",
				"artist": {
					"name": "青山テルマ",
					"mbid": "533a5987-768f-4892-9ee2-eb0b2a747507",
					"url": "https://www.last.fm/music/%E9%9D%92%E5%B1%B1%E3%83%86%E3%83%AB%E3%83%9E"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/af42b557e82b4d7cbea7bcf8b4bc152b.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/af42b557e82b4d7cbea7bcf8b4bc152b.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/af42b557e82b4d7cbea7bcf8b4bc152b.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/af42b557e82b4d7cbea7bcf8b4bc152b.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "33"
				}
			},
			{
				"name": "The Moment Of Lee Eura",
				"playcount": "340",
				"mbid": "",
				"url": "https://www.last.fm/music/Lee+Eura/The+Moment+Of+Lee+Eura",
				"artist": {
					"name": "Lee Eura",
					"mbid": "",
					"url": "https://www.last.fm/music/Lee+Eura"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "34"
				}
			},
			{
				"name": "Chocolate 3",
				"playcount": "335",
				"mbid": "",
				"url": "https://www.last.fm/music/Dancing+Chocolate/Chocolate+3",
				"artist": {
					"name": "Dancing Chocolate",
					"mbid": "",
					"url": "https://www.last.fm/music/Dancing+Chocolate"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "35"
				}
			},
			{
				"name": "Comfort",
				"playcount": "335",
				"mbid": "97d35f94-8d50-4e9b-ae71-c69836e93f81",
				"url": "https://www.last.fm/music/Gummy/Comfort",
				"artist": {
					"name": "Gummy",
					"mbid": "d5ec23f4-d000-40c3-81a9-4fa8c3f45263",
					"url": "https://www.last.fm/music/Gummy"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/5c12f576d2c3486f971289e914d1fa88.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/5c12f576d2c3486f971289e914d1fa88.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/5c12f576d2c3486f971289e914d1fa88.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/5c12f576d2c3486f971289e914d1fa88.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "36"
				}
			},
			{
				"name": "A touch of Zen",
				"playcount": "331",
				"mbid": "",
				"url": "https://www.last.fm/music/Edo+Erhu/A+touch+of+Zen",
				"artist": {
					"name": "Edo Erhu",
					"mbid": "",
					"url": "https://www.last.fm/music/Edo+Erhu"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/0633c5e85a5b4ba3ba2b487bf75e3ff5.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/0633c5e85a5b4ba3ba2b487bf75e3ff5.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/0633c5e85a5b4ba3ba2b487bf75e3ff5.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/0633c5e85a5b4ba3ba2b487bf75e3ff5.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "37"
				}
			},
			{
				"name": "Benim Penceremden",
				"playcount": "324",
				"mbid": "fe407d36-7c42-4322-b2e7-402181dc78cd",
				"url": "https://www.last.fm/music/Kayahan/Benim+Penceremden",
				"artist": {
					"name": "Kayahan",
					"mbid": "b409514e-0a3a-4948-8a95-20a0fef03a51",
					"url": "https://www.last.fm/music/Kayahan"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/4496e626b3f442c5b1e14aac41531a87.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/4496e626b3f442c5b1e14aac41531a87.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/4496e626b3f442c5b1e14aac41531a87.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/4496e626b3f442c5b1e14aac41531a87.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "38"
				}
			},
			{
				"name": "Yüreğimdeki Barış Şarkıları",
				"playcount": "323",
				"mbid": "",
				"url": "https://www.last.fm/music/H%C3%BClya+Av%C5%9Far/Y%C3%BCre%C4%9Fimdeki+Bar%C4%B1%C5%9F+%C5%9Eark%C4%B1lar%C4%B1",
				"artist": {
					"name": "Hülya Avşar",
					"mbid": "9f6a1cd6-2f9c-431b-aa41-63b61a3b2f98",
					"url": "https://www.last.fm/music/H%C3%BClya+Av%C5%9Far"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "39"
				}
			},
			{
				"name": "Faraway",
				"playcount": "314",
				"mbid": "",
				"url": "https://www.last.fm/music/Jia+Peng+Fang/Faraway",
				"artist": {
					"name": "Jia Peng Fang",
					"mbid": "d7b7b3c3-38cf-4f2d-bac8-194be10fbe50",
					"url": "https://www.last.fm/music/Jia+Peng+Fang"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/871f69828ce644068497d10c1aa20ea3.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/871f69828ce644068497d10c1aa20ea3.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/871f69828ce644068497d10c1aa20ea3.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/871f69828ce644068497d10c1aa20ea3.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "40"
				}
			},
			{
				"name": "Sertab",
				"playcount": "314",
				"mbid": "22cc99dd-1ccf-4501-942d-c201f6c5dbc5",
				"url": "https://www.last.fm/music/Sertab+Erener/Sertab",
				"artist": {
					"name": "Sertab Erener",
					"mbid": "d138302b-4f57-4d1d-83e3-47f95cb51774",
					"url": "https://www.last.fm/music/Sertab+Erener"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/3057545ef5960c1b1005b512e6bc9193.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/3057545ef5960c1b1005b512e6bc9193.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/3057545ef5960c1b1005b512e6bc9193.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3057545ef5960c1b1005b512e6bc9193.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "41"
				}
			},
			{
				"name": "君之千言萬語 - 印尼語",
				"playcount": "310",
				"mbid": "",
				"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B/%E5%90%9B%E4%B9%8B%E5%8D%83%E8%A8%80%E8%90%AC%E8%AA%9E+-+%E5%8D%B0%E5%B0%BC%E8%AA%9E",
				"artist": {
					"name": "鄧麗君",
					"mbid": "5c5cb762-d95e-47af-a7bf-35171eeab8e6",
					"url": "https://www.last.fm/music/%E9%84%A7%E9%BA%97%E5%90%9B"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "42"
				}
			},
			{
				"name": "Twinkle",
				"playcount": "307",
				"mbid": "e96f1b1b-ed7d-428f-b56e-6accb2ce5fb6",
				"url": "https://www.last.fm/music/%EC%86%8C%EB%85%80%EC%8B%9C%EB%8C%80-%ED%83%9C%ED%8B%B0%EC%84%9C/Twinkle",
				"artist": {
					"name": "소녀시대-태티서",
					"mbid": "506c92c3-0d1f-4bc9-b6ee-848c99ef5fd4",
					"url": "https://www.last.fm/music/%EC%86%8C%EB%85%80%EC%8B%9C%EB%8C%80-%ED%83%9C%ED%8B%B0%EC%84%9C"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/33999abfdeca5bed2bd59ce76be74344.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/33999abfdeca5bed2bd59ce76be74344.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/33999abfdeca5bed2bd59ce76be74344.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/33999abfdeca5bed2bd59ce76be74344.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "43"
				}
			},
			{
				"name": "Only One",
				"playcount": "292",
				"mbid": "074f2972-30fa-4941-a58f-44c7e6c0f0f2",
				"url": "https://www.last.fm/music/Boa/Only+One",
				"artist": {
					"name": "Boa",
					"mbid": "a16d1433-ba89-4f72-a47b-a370add0bb55",
					"url": "https://www.last.fm/music/Boa"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/1916c3a59eadb1a1a37d8cebba0f7986.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/1916c3a59eadb1a1a37d8cebba0f7986.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/1916c3a59eadb1a1a37d8cebba0f7986.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1916c3a59eadb1a1a37d8cebba0f7986.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "44"
				}
			},
			{
				"name": "我不想忘記你",
				"playcount": "291",
				"mbid": "ebb28a1a-0bf6-4b91-a94a-61c2c792abc8",
				"url": "https://www.last.fm/music/%E9%83%AD%E9%9D%9C/%E6%88%91%E4%B8%8D%E6%83%B3%E5%BF%98%E8%A8%98%E4%BD%A0",
				"artist": {
					"name": "郭靜",
					"mbid": "eb7fb713-82d5-4417-9c80-65bc7da3233b",
					"url": "https://www.last.fm/music/%E9%83%AD%E9%9D%9C"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/441a83a93ddc4cfb988f07b9b4cf4404.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/441a83a93ddc4cfb988f07b9b4cf4404.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/441a83a93ddc4cfb988f07b9b4cf4404.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/441a83a93ddc4cfb988f07b9b4cf4404.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "45"
				}
			},
			{
				"name": "Crouching Tiger, Hidden Dragon",
				"playcount": "287",
				"mbid": "3488bc97-b6b6-48d6-a1e9-015508e7e2e6",
				"url": "https://www.last.fm/music/%E8%AD%9A%E7%9B%BE/Crouching+Tiger,+Hidden+Dragon",
				"artist": {
					"name": "譚盾",
					"mbid": "4d8ac1f5-c380-4f4f-a65c-e7363ff88822",
					"url": "https://www.last.fm/music/%E8%AD%9A%E7%9B%BE"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/e28af60daecc40bfb9c45d877f6228b5.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/e28af60daecc40bfb9c45d877f6228b5.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/e28af60daecc40bfb9c45d877f6228b5.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e28af60daecc40bfb9c45d877f6228b5.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "46"
				}
			},
			{
				"name": "一个人的遗憾",
				"playcount": "286",
				"mbid": "",
				"url": "https://www.last.fm/music/%E5%90%8C%E6%81%A9/%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E9%81%97%E6%86%BE",
				"artist": {
					"name": "同恩",
					"mbid": "081c95a4-b3bf-4992-b240-85d0f2a58750",
					"url": "https://www.last.fm/music/%E5%90%8C%E6%81%A9"
				},
				"image": [
					{
						"#text": "",
						"size": "small"
					},
					{
						"#text": "",
						"size": "medium"
					},
					{
						"#text": "",
						"size": "large"
					},
					{
						"#text": "",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "47"
				}
			},
			{
				"name": "Arka Bahçem",
				"playcount": "282",
				"mbid": "7ec478f7-3ffa-4b57-b1fc-8e4c37c3655b",
				"url": "https://www.last.fm/music/G%C3%B6ksel/Arka+Bah%C3%A7em",
				"artist": {
					"name": "Göksel",
					"mbid": "f7893c8c-f4f9-452b-b566-27eab5c7855c",
					"url": "https://www.last.fm/music/G%C3%B6ksel"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/1983d966bedb4b50b71bb040a41c3404.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/1983d966bedb4b50b71bb040a41c3404.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/1983d966bedb4b50b71bb040a41c3404.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1983d966bedb4b50b71bb040a41c3404.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "48"
				}
			},
			{
				"name": "Chocolate 3",
				"playcount": "282",
				"mbid": "",
				"url": "https://www.last.fm/music/Chocolate/Chocolate+3",
				"artist": {
					"name": "Chocolate",
					"mbid": "f4a41742-fb97-4ee1-a4e8-5feb1d7c91f0",
					"url": "https://www.last.fm/music/Chocolate"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/20da1963f9903a20bc442de497085d13.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/20da1963f9903a20bc442de497085d13.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/20da1963f9903a20bc442de497085d13.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/20da1963f9903a20bc442de497085d13.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "49"
				}
			},
			{
				"name": "Gold Finger: Chinese Erhu",
				"playcount": "282",
				"mbid": "",
				"url": "https://www.last.fm/music/Jiang+Cairu/Gold+Finger:+Chinese+Erhu",
				"artist": {
					"name": "Jiang Cairu",
					"mbid": "",
					"url": "https://www.last.fm/music/Jiang+Cairu"
				},
				"image": [
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/34s/2e8d7f3c0fa33af83d776291646bc199.png",
						"size": "small"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/64s/2e8d7f3c0fa33af83d776291646bc199.png",
						"size": "medium"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/174s/2e8d7f3c0fa33af83d776291646bc199.png",
						"size": "large"
					},
					{
						"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2e8d7f3c0fa33af83d776291646bc199.png",
						"size": "extralarge"
					}
				],
				"@attr": {
					"rank": "50"
				}
			}
		],
		"@attr": {
			"user": "Erkan-Yilmaz",
			"page": "1",
			"perPage": "50",
			"totalPages": "526",
			"total": "26261"
		}
	}
};

module.exports.responseFlags = responseFlags;
module.exports.responseMessages = responseMessages;
module.exports.mockTopArtists = mockTopArtists;
module.exports.mockRecentTracks = mockRecenTracks;
module.exports.mockTopAlbums = mockTopAlbums;
// module.exports.lastFMUrls = lastFMUrls;