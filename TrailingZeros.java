package java_full_stack;
public class TrailingZeros {
    public static void main(String[] args) {
    	
    	int num=100;
    	int count=0;
    	while(num>=5) {
    		num/=5;
    		count+=num;
    	}
    	System.out.println("The Trailing Zeros of num is"+ " "+ num +  " = " +count);
    }
}
