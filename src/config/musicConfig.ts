import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

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
		// 
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "album",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "405493",
		// 认证 token（可选）
		auth: "",
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
				name: "time machine (feat. aren park)",
				artist: "mj apanay, aren park",
				url: "/assets/music/mj apanay, aren park - time machine (feat. aren park).mp3",
				cover: "/assets/music/cover/mj apanay, aren park - time machine (feat. aren park).jpg",
				lrc: "/assets/music/lrc/mj apanay, aren park - time machine (feat. aren park).lrc",
			},
			{
				name: "Minecraft",
				artist: "C418",
				url: "/assets/music/C418 - Minecraft.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Beginning",
				artist: "C418",
				url: "/assets/music/C418 - Beginning.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Cat",
				artist: "C418",
				url: "/assets/music/C418 - Cat.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Chris",
				artist: "C418",
				url: "/assets/music/C418 - Chris.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Clark",
				artist: "C418",
				url: "/assets/music/C418 - Clark.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Danny",
				artist: "C418",
				url: "/assets/music/C418 - Danny.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Death",
				artist: "C418",
				url: "/assets/music/C418 - Death.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Dog",
				artist: "C418",
				url: "/assets/music/C418 - Dog.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Door",
				artist: "C418",
				url: "/assets/music/C418 - Door.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Dry Hands",
				artist: "C418",
				url: "/assets/music/C418 - Dry Hands.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Excuse",
				artist: "C418",
				url: "/assets/music/C418 - Excuse.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Haggstrom",
				artist: "C418",
				url: "/assets/music/C418 - Haggstrom.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Key",
				artist: "C418",
				url: "/assets/music/C418 - Key.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Living Mice",
				artist: "C418",
				url: "/assets/music/C418 - Living Mice.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Mice on Venus",
				artist: "C418",
				url: "/assets/music/C418 - Mice on Venus.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Moog City",
				artist: "C418",
				url: "/assets/music/C418 - Moog City.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Oxygène",
				artist: "C418",
				url: "/assets/music/C418 - Oxygène.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Subwoofer Lullaby",
				artist: "C418",
				url: "/assets/music/C418 - Subwoofer Lullaby.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Sweden",
				artist: "C418",
				url: "/assets/music/C418 - Sweden.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Thirteen",
				artist: "C418",
				url: "/assets/music/C418 - Thirteen.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Wet Hands",
				artist: "C418",
				url: "/assets/music/C418 - Wet Hands.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
			{
				name: "Équinoxe",
				artist: "C418",
				url: "/assets/music/C418 - Équinoxe.mp3",
				cover: "/assets/music/cover/Minecraft - Volume Alpha.jpg",
				lrc: "",
			},
		]
	},
};
