package com.junit.service;
import java.util.List;
import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.stk.entity.Seriesmp;
import com.stk.service.SeriesService;


@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})  
public class TestService{  
  
	@Resource(name="seriesService")
	private SeriesService seriesService;
	
	@Test
    public void getType(){  
   
		List<Seriesmp>  mp=(List<Seriesmp>) seriesService.getmppushone(1);
		
		for(int i=0;i<mp.size();i++){
			System.out.println(mp.get(i).toString());
		}	
    }  
	
	@Test
    public void getCarouselfigure(){  
   
		List<Seriesmp>  mp=(List<Seriesmp>) seriesService.getCarouselfigure(1);
		
		for(int i=0;i<mp.size();i++){
			System.out.println(mp.get(i).toString());
		}	
    }  
}  