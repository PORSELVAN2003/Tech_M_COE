package Task1;

import java.util.Arrays;

public class Question1 {
	public static void main(String[] args) {
		int arr[]= {1,2,3,4,5};
		int size=(arr.length+1)/2;
		int alternatearr[]=new int[size];
		
		int index=0;
		for(int i=0;i<arr.length;i+=2) {
			alternatearr[index++]=arr[i];
		}
		
		System.out.println(Arrays.toString(alternatearr));
	}

}
