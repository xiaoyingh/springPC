package com.stk.entity;

import java.util.List;

import com.github.pagehelper.PageInfo;

public class Sortmp {

	private int point;
	private  List<Type> type;
	private List<Seriesmp> seriesmp;
	private PageInfo pageInfo;
	
	public PageInfo getPageInfo() {
		return pageInfo;
	}
	public void setPageInfo(PageInfo pageInfo) {
		this.pageInfo = pageInfo;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	public List<Type> getType() {
		return type;
	}
	public void setType(List<Type> type) {
		this.type = type;
	}
	public List<Seriesmp> getSeriesmp() {
		return seriesmp;
	}
	public void setSeriesmp(List<Seriesmp> seriesmp) {
		this.seriesmp = seriesmp;
	}
	
	
	
}
