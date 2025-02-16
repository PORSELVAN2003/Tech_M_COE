package Task1;

import java.util.Arrays;

public class Ques3 {
	public static void main(String[] args) {
		int arr1[]= {10,20,32,60,24,21,51};
		int rangearr[]=Arrays.copyOfRange(arr1, 2, 6);
		System.out.println("the orginal array"+" -->>"+Arrays.toString(arr1));
		System.out.println("the copied array"+"-->>"+Arrays.toString(rangearr));
	}

}
