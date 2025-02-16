package Task1;

import java.util.Objects;

public class Question2 {
	public static void main(String[] args) {
		 int[] arr1 = {1, 2, 3};
	        int[] arr2 = {1, 2, 3};

	       
	        System.out.println("Objects.equals(arr1, arr2): " + Objects.equals(arr1, arr2)); //compare refrence
	        System.out.println("Objects.deepEquals(arr1, arr2): " + Objects.deepEquals(arr1, arr2)); // comapre the values

}
}
