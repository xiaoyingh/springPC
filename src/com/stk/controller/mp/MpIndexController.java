package com.stk.controller.mp;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.stk.entity.Indexmp;
import com.stk.entity.Seriesmp;
import com.stk.entity.Users;
import com.stk.service.SeriesService;
import com.stk.entity.Type;

@Controller
public class MpIndexController {
	protected Logger log = Logger.getLogger(MpIndexController.class);

	@Autowired
	private SeriesService seriesService;
	
	// 查询二级菜单视频
	@RequestMapping(value = "/mpindex")
	@ResponseBody
	public Object wxindexser(Map<String, Object> map,
			@RequestParam(value = "callback",required = false) String callback
			) {
		
				//课文朗读音频推荐 （1,课文朗读的ID  3, 课外读物的ID）
				List<Seriesmp>  mptextread=(List<Seriesmp>) seriesService.getCarouselfigure(1);
				//课文读物音频推荐
				List<Seriesmp>  mphobbyread=(List<Seriesmp>) seriesService.getCarouselfigure(3);
				
				//课文朗读音频(播放次数最多的音频)
				List<Seriesmp>  mpplaytotalbytext=(List<Seriesmp>) seriesService.getmppushone(1);
				//课文读物音频(播放次数最多的音频)
				List<Seriesmp>  mpplaytotalbyhobby=(List<Seriesmp>) seriesService.getmppushone(3);
		
				
				Indexmp indexmp=new Indexmp();
				
				indexmp.setMphobbyread(mphobbyread);
				indexmp.setMpplaytotalbyhobby(mpplaytotalbyhobby);
				indexmp.setMpplaytotalbytext(mpplaytotalbytext);
				indexmp.setMptextread(mptextread);
				//课文朗读音频推荐
				map.put("mptextread", mptextread);
				//课文读物音频推荐
				map.put("mphobbyread", mphobbyread);
				
				//课文朗读音频(播放次数最多的音频)
				map.put("mpplaytotalbytext", mpplaytotalbytext);
				//课文读物音频(播放次数最多的音频)
				map.put("mpplaytotalbyhobby", mpplaytotalbyhobby);
		
				JSONPObject jsonpObject = new JSONPObject(callback,indexmp) ;
		        return jsonpObject ;
				//return indexmp;
	}



}
