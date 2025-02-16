package Java_Full_Stack;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Coe_Stream {
	public static void main(String[] args) {
		
		
		System.out.println("q---1");
		
		
		List<Integer> Testarr = Arrays.asList(5, 5, 5, 5, 5);

		ArrayList<Integer> arr = (ArrayList<Integer>) Testarr.stream().filter(x -> x != null).sorted()
				.map(x -> x / Testarr.size()).collect(Collectors.toList());
		arr.forEach(System.out::println);
		
		
		
		System.out.println("q---2");
		
		
		List<String> Teststr = Arrays.asList("sam", "neo", "trinity");
		ArrayList<String> strtest = (ArrayList<String>) Teststr.stream().filter(y -> y != null).sorted()
				.map(y -> y.toUpperCase()).collect(Collectors.toList());

		strtest.forEach(System.out::println);
		
		
		System.out.println("q---3");
		
		
		List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

	
		int sumOfEven = numbers.stream().filter(n -> n % 2 == 0).mapToInt(Integer::intValue).sum();

		
		int sumOfOdd = numbers.stream().filter(n -> n % 2 != 0).mapToInt(Integer::intValue).sum();

		System.out.println("Sum of even numbers: " + sumOfEven);
		System.out.println("Sum of odd numbers: " + sumOfOdd);
		

				System.out.println("q---4");
				
				
		List<Integer>Duplicate=Arrays.asList(1,1,2,1,32,2,3);
		ArrayList<Integer>FindDup=(ArrayList<Integer>) Duplicate.stream().sorted().distinct().collect(Collectors.toList());
		FindDup.forEach(System.out::println);
		
		
		System.out.println("q---5");
		
		
		List<String> newIMp=Arrays.asList("neo","sam","seoul","trinity");
		
		String val="s";
		
		 long count = newIMp.stream()
	                .filter(y -> y != null)
	                .filter(z -> z.startsWith(val))
	                .count();
		
	        System.out.println("Number of words starting with '" + val + "': " + count);
	        
	        
	        
	        System.out.println("q---6");
	        
	        
	      List<String>Findacc=Arrays.asList("alpha","seoul","neo");
	      ArrayList<String>Acc=(ArrayList<String>) Findacc.stream().sorted().collect(Collectors.toList());
	      Acc.forEach(System.out::println);
	      
	      
	      
	      
	      
	      List<String>FindDesc=Arrays.asList("alpha","seoul","neo");
	      ArrayList<String>Desc=(ArrayList<String>) Findacc.stream().sorted((a,b)->b.compareTo(a)).collect(Collectors.toList());
	      Desc.forEach(System.out::println);
	      
	      
	      System.out.println("q---7");
	      
	      List<Integer> numbers1 = Arrays.asList(15, 18, 29, 68, 160, 3);

			int max = numbers1.stream().reduce(Integer.MIN_VALUE, Integer::max);
			int min = numbers1.stream().reduce(Integer.MAX_VALUE, Integer::min);

			System.out.println("Maximum Value: " + max);
			System.out.println("Minimum Value: " + min);
	      
		
	}

}
