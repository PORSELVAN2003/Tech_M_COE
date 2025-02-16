package genrics_ex;
import java.util.Arrays;

public class GenericArrayComparison {
	
public <T> boolean testarr(T[]array1,T[]array2) {
	return Arrays.equals(array1,array2);
}

public static void main(String[] args) {
	GenericArrayComparison arrimp=new GenericArrayComparison();
	
	Integer[] arr1= {1,2,3,4};
	Integer[] arr2= {1,2,3,4};
	
	System.out.println(arrimp.testarr(arr1, arr2)); 
	
}
    
}
