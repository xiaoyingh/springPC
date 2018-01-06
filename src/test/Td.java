package test;

public class Td {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 	String sb = "sTk20141220";
			String stkleft=sb.substring(0, 3);
			String stkright=sb.substring(3);
			String stkleftbig=stkleft.toUpperCase();
			String stk=stkleftbig+stkright;
			System.out.println(stk);
	}

}
