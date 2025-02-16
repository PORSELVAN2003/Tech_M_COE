package genrics_ex;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class merge {
	public  <T>  List<T>  mergelist (List<T> list1,List<T> list2){
		List<T> mergedlist=new ArrayList<>(list1);
		mergedlist.addAll(list2);
		return mergedlist;
		
		
		
	}
	
	public static void main(String[] args) {
		
		merge implist=new merge();
		
		List<Integer>num1=Arrays.asList(1,2,34,4);
		List<Integer>num2=Arrays.asList(1,3,2,1,4);
		
		System.out.println(implist.mergelist(num1, num2));
		
		
	}

}
