package Exception;

public class COE_Exception {
	public static void main(String[] args) {
		
//		
//		try {
//			int i=Integer.parseInt("12");
//			System.out.println("valid input");
//		
//			
//		}catch(NumberFormatException e){
//			System.out.println("Invalid input format");
//			
//		}finally {
//			System.out.println("Finally is executed wether the code has error or not");
//			
//		}
		
		
		TestInteger();
		
		
		
		
		
		
		
	}
	
	
	 public static int TestInteger() {
	        int i = 12;
	        try {
	            if (i % 2 == 0) {
	                System.out.println("It's even");
	            }
	            return i;
	        } catch (Exception e) {
	            System.out.println("It's odd");
	            return i; // return the value of i in case of an exception
	        } finally {
	            System.out.println("Finally is executed whether the code has error or not");
	        }

			
			
		}

}
