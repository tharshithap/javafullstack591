import java.util.Scanner;
 class Sum{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of elements in the array: ");
        int n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter " + n + " integer values:");
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
	int sum = 0;
        for(int i = 0; i < n; i++) {
            sum += arr[i];
        }
        System.out.println("Sum of array elements: " + sum);
    }
}
