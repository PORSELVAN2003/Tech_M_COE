package MultiThread;

public class Implementation {
	public static void main(String[] args) {
		for(int i=0;i<5;i++) {
			Thread1 ThreadImplementation=new Thread1(i);
			
			ThreadImplementation.start();
			
			
		}
		
		
	}

}
