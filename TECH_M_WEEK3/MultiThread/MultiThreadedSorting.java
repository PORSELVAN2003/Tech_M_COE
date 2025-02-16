package MultiThread;
import java.util.Arrays;

class MergeSortMultiThreaded extends Thread {
    private int[] arr;

    public MergeSortMultiThreaded(int[] arr) {
        this.arr = arr;
    }

    @Override
    public void run() {
        mergeSort(arr);
    }

    private void mergeSort(int[] arr) {
        if (arr.length <= 1) return;

        int mid = arr.length / 2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, arr.length);

        MergeSortMultiThreaded leftSorter = new MergeSortMultiThreaded(left);
        MergeSortMultiThreaded rightSorter = new MergeSortMultiThreaded(right);

        leftSorter.start();
        rightSorter.start();

        try {
            leftSorter.join();
            rightSorter.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        merge(arr, left, right);
    }

    private void merge(int[] arr, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) {
            arr[k++] = (left[i] < right[j]) ? left[i++] : right[j++];
        }
        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];
    }
}

public class MultiThreadedSorting {
    public static void main(String[] args) {
        int[] arr = {8, 3, 1, 7, 4, 9, 2, 6, 5};
        System.out.println("Original array: " + Arrays.toString(arr));

        MergeSortMultiThreaded sorter = new MergeSortMultiThreaded(arr);
        sorter.start();
        try {
            sorter.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}
