package com.stk.entity;

import java.util.List;

public class Playitems {

	private String bg;
	private String title;
	private List<Seriesvideo> lsvideo;
	private Seriesvideo itemvo;
	private int nextid;
	private int topid;
	private int playing;
	private int nowserid;
	private int size;
	
	public String getBg() {
		return bg;
	}
	public void setBg(String bg) {
		this.bg = bg;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public List<Seriesvideo> getLsvideo() {
		return lsvideo;
	}
	public void setLsvideo(List<Seriesvideo> lsvideo) {
		this.lsvideo = lsvideo;
	}
	public Seriesvideo getItemvo() {
		return itemvo;
	}
	public void setItemvo(Seriesvideo itemvo) {
		this.itemvo = itemvo;
	}
	public int getNextid() {
		return nextid;
	}
	public void setNextid(int nextid) {
		this.nextid = nextid;
	}
	public int getTopid() {
		return topid;
	}
	public void setTopid(int topid) {
		this.topid = topid;
	}
	
	public int getPlaying() {
		return playing;
	}
	public void setPlaying(int playing) {
		this.playing = playing;
	}
	public int getNowserid() {
		return nowserid;
	}
	public void setNowserid(int nowserid) {
		this.nowserid = nowserid;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	
	
}
