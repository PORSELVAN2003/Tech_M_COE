package MultiThread;

public class EvenOddImplementation {
	public static void main(String[] args) {
		EvenAndOdd TestThread=new EvenAndOdd();
		EvenAndOdd TestThread1=new EvenAndOdd();
		TestThread.start();
		TestThread1.start();
	}

}
