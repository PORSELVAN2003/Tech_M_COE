package MultiThread;
import java.util.ArrayList;
import java.util.List;

class PrimeSumCalculator extends Thread {
    private int start, end;
    private long sum = 0;

    public PrimeSumCalculator(int start, int end) {
        this.start = start;
        this.end = end;
    }

    @Override
    public void run() {
        for (int i = start; i <= end; i++) {
            if (isPrime(i)) {
                sum += i;
            }
        }
    }

    public long getSum() {
        return sum;
    }

    private boolean isPrime(int num) {
        if (num < 2) return false;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
}

public class MultiThreadedPrimeSum {
    public static void main(String[] args) {
        int limit = 100000;  // Change limit as needed
        int numThreads = 4;  // Number of threads
        int range = limit / numThreads;

        List<PrimeSumCalculator> threads = new ArrayList<>();
        int start = 1;

        // Create and start threads
        for (int i = 0; i < numThreads; i++) {
            int end = (i == numThreads - 1) ? limit : start + range - 1;
            PrimeSumCalculator thread = new PrimeSumCalculator(start, end);
            threads.add(thread);
            thread.start();
            start = end + 1;
        }

        // Wait for all threads to finish
        long totalSum = 0;
        for (PrimeSumCalculator thread : threads) {
            try {
                thread.join();
                totalSum += thread.getSum();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Sum of all prime numbers up to " + limit + " is: " + totalSum);
    }
}
