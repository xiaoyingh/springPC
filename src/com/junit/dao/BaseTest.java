package com.junit.dao;
import java.util.List;
import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.stk.dao.SeriesDao;
import com.stk.dao.VipDao;
import com.stk.entity.OrderandSeries;
import com.stk.entity.Seriesmp;
import com.stk.entity.Type;


@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})  
public class BaseTest{  
  
	@Resource(name="seriesDao")
	private SeriesDao seriesDao;
	
	@Resource(name="vipDao")
	private VipDao vipDao;
	
	@Test
    public void getType(){  
   
		List<Seriesmp>  mp=(List<Seriesmp>) seriesDao.getmppushone(1);
		
		for(int i=0;i<mp.size();i++){
			System.out.println(mp.get(i).toString());
		}	
    }  
	
	@Test
    public void getorandk(){  
   
		 List<OrderandSeries> or=vipDao.selorderandk(20436);
		
		for(int i=0;i<or.size();i++){
			System.out.println(or.get(i).toString());
		}	
    }  
}  