import java.util.Scanner;
class Insert {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int[] arr = new int[n+1];
        System.out.println("Enter elements:");
        for(int i=0; i<n; i++) 
{
arr[i] = sc.nextInt();
}
        System.out.print("Enter position: ");
        int pos = sc.nextInt();
        System.out.print("Enter value: ");
        int val = sc.nextInt();
        for(int i=n; i>pos; i--) 
{
arr[i] = arr[i-1];
        arr[pos] = val;
}
        System.out.print("Array after insertion: ");
        for(int i=0; i<=n; i++) 
{
System.out.print(arr[i]+" ");
}
    }
}