import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 模板默认侧边栏和导航栏两个都显示
	// 1. 侧边栏：在sidebarConfig.ts侧边栏配置把音乐组件enable设为false禁用即可
	// 2. 导航栏：在本配置文件把showInNavbar设为false禁用即可

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "meting",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "5187024852",
		// 认证 token（可选）
		auth: "_ntes_nuid=50f5f13388c63018ac42f2be9d255876; WEVNSM=1.0.0; WM_TID=atZzTAYn%2BHRFAQUBQUfTJBQDzHaUTMMV; ntes_utid=tid._.NMFw4NAu%252B9pAU1VEQROGJVFTnHfB9FXO._.0; __remember_me=true; ntes_kaola_ad=1; _iuqxldmzr_=32; _ntes_nnid=50f5f13388c63018ac42f2be9d255876,1768299568985; __snaker__id=MNzjPgVBrYr23FMC; _ga=GA1.1.1606669517.1771214762; _ga_C6TGHFPQ1H=GS2.1.s1771214761$o1$g0$t1771216111$j60$l0$h0; P_INFO=reedzheng@126.com|1772017226|0|mail126|00&99|null&null&null#jix&360100#10#0#0|&0||reedzheng@126.com; NMTID=00O3OwlzZHB-pb-UENqgMfWi9gyk3YAAAGc_piUpg; WNMCID=jfuzkj.1773797962954.01.0; timing_user_id=time_s57mzkODwa; _ga_EPDQHDTJH5=GS2.1.s1776151164$o3$g0$t1776151173$j51$l0$h0; __csrf=7219b42c7af2f0110ff842d630f51957; WM_NI=1Sr%2FlcTFufwGi9Qkcjmr1xZCqXLevo7glMiOX15GigiaAMciemgnOJkwayTtO0ZX7GfsPRCmbbhjlFp9Ib7%2Fe4nj0Z%2FaEWt4ox1BcakyZkNJsJUljwSDYSrpisagnuBYNm8%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eeafb54eaeba97bbe97bb6ac8ab7c55b829f8aadd779e9b8f78afb39b59ce197f92af0fea7c3b92af38dbed0ef69989abb87f64dabe79f8ce262afaeff99d949b3888486f565f5b9a4aeec459ceffba8ec6dabbf8faee263a7b3a98fce42a9a9af9ad7808df096b9b64da6ada0b3c267a2bea88bef4eb4e78783b625a7eca28bb352edbf8bb8f740ada8ffa3e26ba9a7968ccd42b1969b8de97d919c97b4f17cabadaf88ed7f8287828ebb37e2a3; sDeviceId=YD-zRLAxn3Ke8NBA0AVUQbWO4h8gZlQ4Jib; __csrf=4142bd7093b376a54635c8b8267c6c3e; MUSIC_U=00386DDCEF116432603150C612D765BCB3374057DBCF42031A7CCDD73275820300B736987D838AE8CF89DAB63A800E0D7DF4199D38372FBA71380ACB6B1B8E54CD0D8A579133E6A65516DF0AF048D36EB75C8B470112764FC86BA2810ECA391B23ADAA512A9AFA1EA7C3EE81C69707FF41E42A9B3D0F515FC4648B7818289422208B448A26E50F51B32A6D718DD1684A156C7214EBAB29F9ED7E7A0E2D8FEB462C93AF99D81045C07A8B8FF1E59BC37C2230D184F174645F75979C17201E53414BFFCDFCED6CB13DF581882E3AA704AF9B5AEE578B45AE9C9D9B21F5D01242D79149C6960272E488141657128EEBD7CDBC230BEFE2239FEE31DB9944A3CE163A141220E56DF6147B25AC1E690684D356DD8B07B8EAFAE341C4D47B2A3BF2316395A804A8BCCD37C4D19F85623BC99D669EFFDE4B470CA60320BFEF0BB976AD81BF8EADBBDA031E74A45B53DF27DB39FEC03328A4B104F858E0DD2A8BEB041B36D6165AEBFD112E329CDB7F73E1CB33F7CE5FC44ED390211B52EFA3240DCFB28EB19BA87E0A2190529EEAE753A5F79A077926303A5F3B64B013BF281CD8C9106815; playerid=93761278; JSESSIONID-WYYY=nNfebVV%5C4Ey%2FMfGkqaThuVwfy9zyq69G%2BZtxjQIlzWl%5CXHSnkZ%2BHadrMaAK1Ss4V0jZiJRe%5Co3aVJz%2Bo%2BV4D9dQydCveyZxP2l83JchK%2FEXcIuWHpRhooNCd8xThIfgTpAd7JnDlkoy6HbbH3rIv1TDbjZ7E5eFt%2B3%2BezHZFrcXtxs%5CZ%3A1777695508336; gdxidpyhxdE=bSh6AnR2pAOu3CKdwRvgWDhVQUySwIIqxrgCzE%2FuHr25skNGtW4cSAASbfqSxCbApszpeUTHjm2UgQfwM7ZiYWetUHbpC57o6oNHrg72ZH6zVMEnO1yt%2Bzwq%2BXKDuMWvGBDP5oEZl4B4GXj%2FUT22MG%5C1%2BasZNc%2F7%5CoNWnbCEuJM8Mhd7%3A1777695394328\n",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "使一颗心免于哀伤",
				artist: "知更鸟 / HOYO-MiX / Chevy",
				url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
		],
	},
};
