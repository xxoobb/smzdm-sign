/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = '578126651@qq.com';
// email 登陆密码
const emailPassword = 'ikficyqsjsbnbeec';
// 接收者 邮箱
const toEmail = '578126651@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': 'bettenself',
		'phone': '15659985288',
		'cookies': '__ckguid=Arv4nwfakKaRu95QvNy5w95; device_id=21307064331611023285344107c9c0141e3c5a67b6d9ef12e1fde42ef1; homepage_sug=f; r_sort_type=score; __jsluid_s=8eb7e40f368e06b4756b221f430214dd; footer_floating_layer=0; ad_date=19; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2217718789302ed-064265e4c1f3ba-3b3d5a0a-1049088-177187893043ba%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.smzdm.com%2F%22%7D%2C%22%24device_id%22%3A%2217718789302ed-064265e4c1f3ba-3b3d5a0a-1049088-177187893043ba%22%7D; _zdmA.vid=*; sess=Zjg3MDN8MTYxNjIwNzI5OXw1NDQwMTMzNzM3fGRmNDIxYjQzYTdhNDJkNjUxZTExYjkxYWNhODgwZjQy; user=user%3A5440133737%7C5440133737; smzdm_id=5440133737; _zdmA.uid=ZDMA.lNVqKwbLG.1611023301.2419200; ad_json_feed=%7B%22J_feed_ad1%22%3A%7B%22number%22%3A0%2C%22surplus%22%3A2%7D%7D; bannerCounter=%5B%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%5D; _zdmA.time=1611023305228.0.https%3A%2F%2Fwww.smzdm.com%2F'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错',
	'现在这个价格还可入手吗？',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
