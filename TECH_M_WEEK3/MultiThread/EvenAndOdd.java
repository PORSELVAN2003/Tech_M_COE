package MultiThread;

public class EvenAndOdd extends Thread {
	public void run() {
		for(int i=1;i<=20;i++) {
			if(i%2==0) {
				System.out.println(i+" "+"Its Even");
			}else {
				System.out.println(i+" "+"Its Odd");
			}
		}
		try {
			Thread.sleep(1000);
		}catch(InterruptedException e) {
			System.out.println("Invalid Input");
		}
	}
}
