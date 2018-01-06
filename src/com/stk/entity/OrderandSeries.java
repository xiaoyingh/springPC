package com.stk.entity;

import java.sql.Date;

public class OrderandSeries {

	private int id;
	private String OrderNO;
	private int PayMode;
	private String PayNO;
	private int UserID;
	private Series seriesid;
	private double Price;
	private int Status;
	private Date CreateTime;
	private Date PayTime;
	private Date overtime;
	private String statu;
	private String outtradeno;
	
	public String getOuttradeno() {
		return outtradeno;
	}
	public void setOuttradeno(String outtradeno) {
		this.outtradeno = outtradeno;
	}
	public Date getOvertime() {
		return overtime;
	}
	public void setOvertime(Date overtime) {
		this.overtime = overtime;
	}
	public String getStatu() {
		return statu;
	}
	public void setStatu(String statu) {
		this.statu = statu;
	}
	public int getID() {
		return id;
	}
	public void setID(int iD) {
		id = iD;
	}
	public String getOrderNO() {
		return OrderNO;
	}
	public void setOrderNO(String orderNO) {
		OrderNO = orderNO;
	}
	public int getPayMode() {
		return PayMode;
	}
	public void setPayMode(int payMode) {
		PayMode = payMode;
	}
	public String getPayNO() {
		return PayNO;
	}
	public void setPayNO(String payNO) {
		PayNO = payNO;
	}
	public int getUserID() {
		return UserID;
	}
	public void setUserID(int userID) {
		UserID = userID;
	}
	
	
	public Series getSeriesid() {
		return seriesid;
	}
	public void setSeriesid(Series seriesid) {
		this.seriesid = seriesid;
	}
	public double getPrice() {
		return Price;
	}
	public void setPrice(double price) {
		Price = price;
	}
	public int getStatus() {
		return Status;
	}
	public void setStatus(int status) {
		Status = status;
	}
	public Date getCreateTime() {
		return CreateTime;
	}
	public void setCreateTime(Date createTime) {
		CreateTime = createTime;
	}
	public Date getPayTime() {
		return PayTime;
	}
	public void setPayTime(Date payTime) {
		PayTime = payTime;
	}
	@Override
	public String toString() {
		return "OrderandSeries [ID=" + id + ", OrderNO=" + OrderNO + ", PayMode=" + PayMode + ", PayNO=" + PayNO
				+ ", UserID=" + UserID + ", seriesid=" + seriesid + ", Price=" + Price + ", Status=" + Status
				+ ", CreateTime=" + CreateTime + ", PayTime=" + PayTime + ", overtime=" + overtime + ", statu=" + statu
				+ ", outtradeno=" + outtradeno + "]";
	}
	
	
	
}
