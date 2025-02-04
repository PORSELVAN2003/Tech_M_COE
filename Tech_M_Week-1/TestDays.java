package java_full_stack;

public class TestDays {
	public static void main(String[] args) {
		DaysOfWeek days= DaysOfWeek.SATURDAY;
		
		if(days==DaysOfWeek.SATURDAY ||days==DaysOfWeek.SUNDAY) {
			System.out.println("its a Holiday");
		}
		else {
			System.out.println("its not a holiday");
		}
		
	}
	
	
	
	
	
}
