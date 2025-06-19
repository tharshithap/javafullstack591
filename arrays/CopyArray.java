import java.util.Scanner;
 class CopyArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter elements:");
        for(int i=0; i<n; i++) 
{
arr[i] = sc.nextInt();
}
        int[] copy = new int[n];
        for(int i=0; i<n; i++) 
{
copy[i] = arr[i];
}
        System.out.print("Copied array: ");
        for(int i=0; i<n; i++)
{
 System.out.print(copy[i]+" ");
}
    }
}
