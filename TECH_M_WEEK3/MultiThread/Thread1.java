package MultiThread;

public class Thread1 extends Thread {
    private int threadNum;

    public Thread1(int threadNum) {
        this.threadNum = threadNum;
    }

    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("hello " + ": " + threadNum);
            try {
                Thread.sleep(1000); // Sleep for 1 second between prints
            } catch (InterruptedException e) {
                System.out.println("Thread was interrupted");
            }
        }
    }

}
