package com.stk.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import com.stk.entity.Type;
import com.stk.entity.Series;
import com.stk.entity.Seriesmp;
import com.stk.entity.Seriesvideo;

public interface SeriesDao {

		//MP3
		
	//一级推荐(系统推荐的音频，后台系统录入指定标识)
	public List<Seriesmp> getCarouselfigure(Integer id);
	//一级菜单(播放次数最多的音频)
	public List<Seriesmp> getmppushone(Integer id);
	//total
	public List<Seriesmp> getSeriesermptotal();
	
	public List<Seriesmp> getSeriesermpyi(Integer id);
	public List<Seriesmp> getSeriesermper(Integer id);
	public String seltypename(Integer id);
	public List<Type> wxgetMulvsanmp(Integer id);
	//MP3
	public void addseries(Series series);
	public void upserieser(Series series);
	public void upseriessan(Series series);
	public Series hsgetSeries(Integer id);
	public void addaccountvideo(@Param("sec")List<Seriesvideo> sec);
	/**关键词搜索*/
	public List<Series> selectKey(String search);
}
