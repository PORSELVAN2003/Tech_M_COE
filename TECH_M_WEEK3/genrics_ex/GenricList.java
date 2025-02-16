package genrics_ex;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GenricList <T extends Number>{
	private List<T> numberlist;
	
	public GenricList(List<T>numberlist) {
		this.numberlist=numberlist;
	}
	
	
	public void Calculatesum() {
		double sumodd = 0;
		double sumeven = 0;
		for(T val:numberlist) {
			if(val.intValue()%2==0) {
				sumeven+=val.intValue();
			}else {
				sumodd+=val.intValue();
			}
			
		}
		System.out.println("sum of odd"+" "+ sumodd);
		System.out.println("sum of odd"+" "+ sumeven);
	}
	
	
	public static void main(String[] args) {
		GenricList<Integer> integerlist=new GenricList<>(Arrays.asList(1,2,32,4));
		integerlist.Calculatesum(); 
		
	}
	
}
